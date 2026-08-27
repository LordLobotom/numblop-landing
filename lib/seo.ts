import {
  getLocaleInfo,
  localeCatalog,
  locales,
  type Locale,
} from './i18n/locales'

export const SITE_URL = 'https://numblop.gutcloud.cz'

export function openGraphLocale(locale: Locale): string {
  return getLocaleInfo(locale).openGraph
}

export function alternateOpenGraphLocales(locale: Locale): string[] {
  return localeCatalog
    .filter((candidate) => candidate.code !== locale)
    .map((candidate) => candidate.openGraph)
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
