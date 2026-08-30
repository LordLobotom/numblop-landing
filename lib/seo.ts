import {
  getLocaleInfo,
  localeCatalog,
  locales,
  type Locale,
} from './i18n/locales'

export const SITE_URL = 'https://numblop.gutcloud.cz'

export const SITE_NAME = 'Numblop'

export const AUTHOR_NAME = 'Michal Gut (LordLobotom)'

/** Shared social/OG banner, referenced by metadata and by JSON-LD alike. */
export const OG_IMAGE_PATH = '/og-image.png'

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

export function openGraphLocale(locale: Locale): string {
  return getLocaleInfo(locale).openGraph
}

export function alternateOpenGraphLocales(locale: Locale): string[] {
  return localeCatalog
    .filter((candidate) => candidate.code !== locale)
    .map((candidate) => candidate.openGraph)
}

/**
 * hreflang map for pages whose slug differs per locale (the guides and the blog
 * articles). `localeAlternates` in lib/i18n/locales only covers routes that
 * share one path across every language.
 */
export function localeAlternatesFromPaths(
  pathByLocale: Record<Locale, string>,
): Record<string, string> {
  return { ...pathByLocale, 'x-default': pathByLocale.en }
}

export function absoluteLocaleAlternatesFromPaths(
  pathByLocale: Record<Locale, string>,
): Record<string, string> {
  const absolute = Object.fromEntries(
    locales.map((locale) => [locale, absoluteUrl(pathByLocale[locale])]),
  )
  return { ...absolute, 'x-default': absoluteUrl(pathByLocale.en) }
}

export function absoluteLocaleAlternates(path = ''): Record<string, string> {
  const suffix = path ? `${path.replace(/^\/+|\/+$/g, '')}/` : ''
  return {
    ...Object.fromEntries(
      locales.map((locale) => [locale, `${SITE_URL}/${locale}/${suffix}`]),
    ),
    'x-default': `${SITE_URL}/en/${suffix}`,
  }
}
