import { isLocale, type Locale } from './locales'

export const LOCALE_STORAGE_KEY = 'numblop-locale'

// An explicit choice stored by the language picker always wins. Norwegian
// device locales (`no` and `nn`) fold into Bokmål (`nb`). Portuguese keeps its
// region because the site ships separate Brazilian and European translations;
// an unqualified `pt` locale defaults to Brazilian Portuguese.
export function detectLocale(): Locale {
  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY)
    if (stored && isLocale(stored)) {
      return stored
    }
  } catch {
    // localStorage unavailable (privacy mode) — fall through to detection.
  }

  const candidates = navigator.languages?.length
    ? navigator.languages
    : [navigator.language]
  for (const tag of candidates) {
    if (!tag) continue
    const normalized = tag.toLowerCase().replace('_', '-')
    if (normalized === 'pt-pt' || normalized.startsWith('pt-pt-')) return 'pt-PT'
    if (normalized === 'pt-br' || normalized.startsWith('pt-br-')) return 'pt-BR'
    if (normalized === 'pt' || normalized.startsWith('pt-')) return 'pt-BR'
    const lang = normalized.split('-')[0]
    if (lang === 'no' || lang === 'nn') return 'nb'
    if (isLocale(lang)) return lang
  }
  return 'en'
}
