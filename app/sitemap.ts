import type { MetadataRoute } from 'next'
import { locales } from '@/lib/i18n/locales'
import { absoluteLocaleAlternates, SITE_URL } from '@/lib/seo'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const pages = [
    { path: '', priority: 1, changeFrequency: 'weekly' as const },
    { path: 'contact/', priority: 0.5, changeFrequency: 'yearly' as const },
    { path: 'privacy/', priority: 0.4, changeFrequency: 'yearly' as const },
  ]

  return locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${SITE_URL}/${locale}/${page.path}`,
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: absoluteLocaleAlternates(page.path),
      },
    })),
  )
}
