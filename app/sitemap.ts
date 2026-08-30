import type { MetadataRoute } from 'next'
import { locales, type Locale } from '@/lib/i18n/locales'
import { privacyContact } from '@/lib/i18n/privacy'
import {
  absoluteLocaleAlternates,
  absoluteLocaleAlternatesFromPaths,
  SITE_URL,
} from '@/lib/seo'
import {
  articleIds,
  articlePath,
  articlePaths,
  blogLastModified,
  blogPath,
  blogPaths,
  getArticle,
  getSeoPage,
  seoPageIds,
  seoPagePath,
  seoPagePaths,
} from '@/lib/content'
import { revisions } from '@/lib/content/revisions'

export const dynamic = 'force-static'

type Entry = MetadataRoute.Sitemap[number]

export default function sitemap(): MetadataRoute.Sitemap {
  // Routes that share one path across every locale.
  const sharedPages = [
    {
      path: '',
      priority: 1,
      changeFrequency: 'weekly' as const,
      lastModified: revisions.home,
    },
    {
      path: 'contact/',
      priority: 0.5,
      changeFrequency: 'yearly' as const,
      lastModified: revisions.contact,
    },
    {
      path: 'privacy/',
      priority: 0.4,
      changeFrequency: 'yearly' as const,
      lastModified: privacyContact.effectiveDate,
    },
  ]

  const shared: Entry[] = locales.flatMap((locale) =>
    sharedPages.map((page) => ({
      url: `${SITE_URL}/${locale}/${page.path}`,
      lastModified: page.lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: { languages: absoluteLocaleAlternates(page.path) },
    })),
  )

  // Guides and articles carry a localized slug, so their alternates come from
  // the content registry rather than from a shared path.
  const guides: Entry[] = locales.flatMap((locale: Locale) =>
    seoPageIds.map((id) => ({
      url: `${SITE_URL}${seoPagePath(locale, id)}`,
      lastModified: getSeoPage(locale, id).updated,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: absoluteLocaleAlternatesFromPaths(seoPagePaths(id)),
      },
    })),
  )

  const blogIndexes: Entry[] = locales.map((locale) => ({
    url: `${SITE_URL}${blogPath(locale)}`,
    lastModified: blogLastModified(locale),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
    alternates: { languages: absoluteLocaleAlternatesFromPaths(blogPaths()) },
  }))

  const articles: Entry[] = locales.flatMap((locale: Locale) =>
    articleIds.map((id) => ({
      url: `${SITE_URL}${articlePath(locale, id)}`,
      lastModified: getArticle(locale, id).updated,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
      alternates: {
        languages: absoluteLocaleAlternatesFromPaths(articlePaths(id)),
      },
    })),
  )

  return [...shared, ...guides, ...blogIndexes, ...articles]
}
