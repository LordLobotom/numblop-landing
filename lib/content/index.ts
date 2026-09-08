// Registry over the per-locale editorial content plus the URL helpers every
// content route and the sitemap share. Slugs are localized, so nothing here may
// assume that two locales spell the same page the same way — pages are paired
// across languages by their stable `id`, never by their path.

import { locales, type Locale } from '@/lib/i18n/locales'
import {
  articleIds,
  seoPageIds,
  type Article,
  type ArticleId,
  type ContentCatalog,
  type LocaleContent,
  type SeoPage,
  type SeoPageId,
} from './types'

import { cs } from './locales/cs'
import { en } from './locales/en'
import { sk } from './locales/sk'
import { de } from './locales/de'
import { es } from './locales/es'
import { fi } from './locales/fi'
import { fr } from './locales/fr'
import { nb } from './locales/nb'
import { pl } from './locales/pl'
import { sv } from './locales/sv'
import ptBR from './locales/pt-BR.json'
import ptPT from './locales/pt-PT.json'
import it from './locales/it.json'
import da from './locales/da.json'
import nl from './locales/nl.json'
import ja from './locales/ja.json'
import ko from './locales/ko.json'
import tr from './locales/tr.json'
import vi from './locales/vi.json'
import id from './locales/id.json'
import hu from './locales/hu.json'

export * from './types'

const catalog: ContentCatalog = {
  cs,
  en,
  sk,
  de,
  es,
  fi,
  fr,
  nb,
  pl,
  sv,
  'pt-BR': ptBR as LocaleContent,
  'pt-PT': ptPT as LocaleContent,
  it: it as LocaleContent,
  da: da as LocaleContent,
  nl: nl as LocaleContent,
  ja: ja as LocaleContent,
  ko: ko as LocaleContent,
  tr: tr as LocaleContent,
  vi: vi as LocaleContent,
  id: id as LocaleContent,
  hu: hu as LocaleContent,
}

export function getLocaleContent(locale: Locale): LocaleContent {
  return catalog[locale]
}

// --- guides -----------------------------------------------------------------

export function getSeoPage(locale: Locale, id: SeoPageId): SeoPage {
  const page = catalog[locale].pages.find((candidate) => candidate.id === id)
  if (!page) {
    throw new Error(`Missing guide "${id}" for locale "${locale}"`)
  }
  return page
}

export function findSeoPageBySlug(
  locale: Locale,
  slug: string,
): SeoPage | undefined {
  return catalog[locale].pages.find((page) => page.slug === slug)
}

export function seoPagePath(locale: Locale, id: SeoPageId): string {
  return `/${locale}/${getSeoPage(locale, id).slug}/`
}

export function seoPagePaths(id: SeoPageId): Record<Locale, string> {
  return Object.fromEntries(
    locales.map((locale) => [locale, seoPagePath(locale, id)]),
  ) as Record<Locale, string>
}

// --- blog -------------------------------------------------------------------

export function blogPath(locale: Locale): string {
  return `/${locale}/blog/`
}

export function blogPaths(): Record<Locale, string> {
  return Object.fromEntries(
    locales.map((locale) => [locale, blogPath(locale)]),
  ) as Record<Locale, string>
}

export function getArticle(locale: Locale, id: ArticleId): Article {
  const article = catalog[locale].articles.find(
    (candidate) => candidate.id === id,
  )
  if (!article) {
    throw new Error(`Missing article "${id}" for locale "${locale}"`)
  }
  return article
}

export function findArticleBySlug(
  locale: Locale,
  slug: string,
): Article | undefined {
  return catalog[locale].articles.find((article) => article.slug === slug)
}

export function articlePath(locale: Locale, id: ArticleId): string {
  return `/${locale}/blog/${getArticle(locale, id).slug}/`
}

export function articlePaths(id: ArticleId): Record<Locale, string> {
  return Object.fromEntries(
    locales.map((locale) => [locale, articlePath(locale, id)]),
  ) as Record<Locale, string>
}

/** Newest first, so the blog index and the sitemap agree on ordering. */
export function listArticles(locale: Locale): Article[] {
  return [...catalog[locale].articles].sort((a, b) =>
    b.published.localeCompare(a.published),
  )
}

// --- cross-linking ----------------------------------------------------------

export interface RelatedLink {
  href: string
  label: string
  excerpt: string
}

export function guideLinks(
  locale: Locale,
  exclude?: SeoPageId,
): RelatedLink[] {
  return seoPageIds
    .filter((id) => id !== exclude)
    .map((id) => {
      const page = getSeoPage(locale, id)
      return {
        href: seoPagePath(locale, id),
        label: page.linkLabel,
        excerpt: page.excerpt,
      }
    })
}

export function articleLinks(
  locale: Locale,
  exclude?: ArticleId,
): RelatedLink[] {
  return articleIds
    .filter((id) => id !== exclude)
    .map((id) => {
      const article = getArticle(locale, id)
      return {
        href: articlePath(locale, id),
        label: article.linkLabel,
        excerpt: article.excerpt,
      }
    })
}

/**
 * Related-content list for a guide or an article: the sibling guides plus the
 * blog articles, minus whatever page is asking. Generated rather than authored
 * so a new guide is linked from everywhere the moment it is added.
 */
export function relatedLinks(
  locale: Locale,
  exclude: { pageId?: SeoPageId; articleId?: ArticleId } = {},
): RelatedLink[] {
  return [
    ...guideLinks(locale, exclude.pageId),
    ...articleLinks(locale, exclude.articleId),
  ]
}

// --- misc -------------------------------------------------------------------

/** ~200 words per minute, floored at 1. Used for the article byline only. */
export function readingTimeMinutes(article: Article): number {
  const words = [
    ...article.intro,
    ...article.takeaways,
    ...article.sections.flatMap((section) =>
      section.blocks.flatMap((block) => {
        if ('p' in block) return [block.p]
        if ('list' in block) return block.list
        return [block.h3]
      }),
    ),
  ]
    .join(' ')
    .split(/\s+/).length

  return Math.max(1, Math.round(words / 200))
}

/** Most recent article date in a locale — the blog index's `lastModified`. */
export function blogLastModified(locale: Locale): string {
  return listArticles(locale)
    .map((article) => article.updated)
    .sort()
    .at(-1)!
}
