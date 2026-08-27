export const locales = [
  'en',
  'cs',
  'sk',
  'de',
  'es',
  'fi',
  'fr',
  'nb',
  'pl',
  'sv',
] as const

export type Locale = (typeof locales)[number]

export interface LocaleInfo {
  code: Locale
  name: string
  languageLabel: string
  flag: string
  openGraph: string
}

export const localeCatalog: readonly LocaleInfo[] = [
  { code: 'en', name: 'English', languageLabel: 'Language', flag: '/languages/en.png', openGraph: 'en_US' },
  { code: 'cs', name: 'Čeština', languageLabel: 'Jazyk', flag: '/languages/cs.png', openGraph: 'cs_CZ' },
  { code: 'sk', name: 'Slovenčina', languageLabel: 'Jazyk', flag: '/languages/sk.png', openGraph: 'sk_SK' },
  { code: 'de', name: 'Deutsch', languageLabel: 'Sprache', flag: '/languages/de.png', openGraph: 'de_DE' },
  { code: 'es', name: 'Español', languageLabel: 'Idioma', flag: '/languages/es.png', openGraph: 'es_ES' },
  { code: 'fi', name: 'Suomi', languageLabel: 'Kieli', flag: '/languages/fi.png', openGraph: 'fi_FI' },
  { code: 'fr', name: 'Français', languageLabel: 'Langue', flag: '/languages/fr.png', openGraph: 'fr_FR' },
  { code: 'nb', name: 'Norsk bokmål', languageLabel: 'Språk', flag: '/languages/nb.png', openGraph: 'nb_NO' },
  { code: 'pl', name: 'Polski', languageLabel: 'Język', flag: '/languages/pl.png', openGraph: 'pl_PL' },
  { code: 'sv', name: 'Svenska', languageLabel: 'Språk', flag: '/languages/sv.png', openGraph: 'sv_SE' },
]

const localeInfo = Object.fromEntries(
  localeCatalog.map((locale) => [locale.code, locale]),
) as Record<Locale, LocaleInfo>

export function isLocale(value: string | undefined): value is Locale {
  return (locales as readonly string[]).includes(value ?? '')
}

export function getLocaleInfo(locale: Locale): LocaleInfo {
  return localeInfo[locale]
}

export function localeAlternates(path = ''): Record<string, string> {
  const suffix = path ? `${path.replace(/^\/+|\/+$/g, '')}/` : ''
  return {
    ...Object.fromEntries(locales.map((locale) => [locale, `/${locale}/${suffix}`])),
    'x-default': `/en/${suffix}`,
  }
}

// Marketing artwork currently ships with baked-in copy in Czech and English.
// Other locale pages use the English artwork while their surrounding text and
// accessible descriptions remain fully localized.
export function marketingAssetLocale(locale: Locale): 'cs' | 'en' {
  return locale === 'cs' ? 'cs' : 'en'
}
