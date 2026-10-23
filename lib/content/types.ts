// Shape of the editorial content that sits alongside the landing page: the
// FAQ, the evergreen SEO guides, and the blog. It is deliberately separate from
// `Dictionary` in lib/i18n — that type is mirrored by the generated
// dictionaries.json, and adding prose-sized fields there would fight the
// generator on every regeneration.

import type { Locale } from '@/lib/i18n/locales'

// Same terse block idiom the privacy policy already uses (lib/i18n/privacy.ts),
// so writing content stays cheap and one renderer covers every page type.
export type Block = { p: string } | { list: string[] } | { h3: string }

export interface Section {
  heading: string
  blocks: Block[]
}

// The three evergreen guides. Slugs and framing are localized per market, but
// the ids are stable so hreflang can pair the pages up across locales.
export const seoPageIds = ['practice', 'play', 'progress'] as const
export type SeoPageId = (typeof seoPageIds)[number]

export const articleIds = ['without-rote', 'halloween-cosmetics'] as const
export type ArticleId = (typeof articleIds)[number]

export interface ContentImage {
  /** Path under /public, e.g. `/posts/step-by-step-en.webp`. */
  src: string
  alt: string
  width: number
  height: number
}

interface ContentDoc {
  slug: string
  /** <h1> on the page itself. */
  title: string
  metaTitle: string
  metaDescription: string
  /** Short label other pages use when linking here. */
  linkLabel: string
  /** One-sentence summary for cards and related-content lists. */
  excerpt: string
  /** Lead paragraphs rendered between the <h1> and the first <h2>. */
  intro: string[]
  sections: Section[]
  image?: ContentImage
  /**
   * Last meaningful content change, `YYYY-MM-DD`. Drives sitemap
   * `lastModified`, so it must only move when the copy actually changes.
   */
  updated: string
}

export interface SeoPage extends ContentDoc {
  id: SeoPageId
  /** Closing pitch. Kept short: the guides are not landing pages. */
  cta: { heading: string; body: string }
}

export interface Article extends ContentDoc {
  id: ArticleId
  published: string
  /** Practical summary rendered as a highlighted list under the intro. */
  takeaways: string[]
  /** Optional first-party video shown behind a privacy-preserving click facade. */
  video?: {
    youtubeId: string
    title: string
    playLabel: string
    privacyNote: string
    watchLabel: string
    poster?: ContentImage
  }
}

export interface FaqItem {
  question: string
  answer: string
}

export interface LocaleContent {
  faq: {
    heading: string
    subheading: string
    items: FaqItem[]
  }
  ui: {
    /** Nav/breadcrumb label for the blog index. */
    blog: string
    /** Nav label for the guides, used in the footer and related lists. */
    guides: string
    home: string
    blogTitle: string
    blogIntro: string
    blogMetaTitle: string
    blogMetaDescription: string
    relatedHeading: string
    readMore: string
    published: string
    updated: string
    /** `{n}` is replaced with the estimated reading time in minutes. */
    readingTime: string
    breadcrumbLabel: string
    takeawaysHeading: string
    backToBlog: string
  }
  pages: SeoPage[]
  articles: Article[]
}

export type ContentCatalog = Record<Locale, LocaleContent>
