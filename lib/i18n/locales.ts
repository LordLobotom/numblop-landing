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
  'pt-BR',
  'pt-PT',
  'it',
  'da',
  'nl',
  'ja',
  'ko',
  'tr',
  'vi',
  'id',
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
  { code: 'pt-BR', name: 'Português (Brasil)', languageLabel: 'Idioma', flag: '/languages/pt-BR.png', openGraph: 'pt_BR' },
  { code: 'pt-PT', name: 'Português (Portugal)', languageLabel: 'Idioma', flag: '/languages/pt-PT.png', openGraph: 'pt_PT' },
  { code: 'it', name: 'Italiano', languageLabel: 'Lingua', flag: '/languages/it.png', openGraph: 'it_IT' },
  { code: 'da', name: 'Dansk', languageLabel: 'Sprog', flag: '/languages/da.png', openGraph: 'da_DK' },
  { code: 'nl', name: 'Nederlands', languageLabel: 'Taal', flag: '/languages/nl.png', openGraph: 'nl_NL' },
  { code: 'ja', name: '日本語', languageLabel: '言語', flag: '/languages/ja.png', openGraph: 'ja_JP' },
  { code: 'ko', name: '한국어', languageLabel: '언어', flag: '/languages/ko.png', openGraph: 'ko_KR' },
  { code: 'tr', name: 'Türkçe', languageLabel: 'Dil', flag: '/languages/tr.png', openGraph: 'tr_TR' },
  { code: 'vi', name: 'Tiếng Việt', languageLabel: 'Ngôn ngữ', flag: '/languages/vi.png', openGraph: 'vi_VN' },
  { code: 'id', name: 'Bahasa Indonesia', languageLabel: 'Bahasa', flag: '/languages/id.png', openGraph: 'id_ID' },
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
