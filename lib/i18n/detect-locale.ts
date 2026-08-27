import { isLocale, type Locale } from './locales'

export const LOCALE_STORAGE_KEY = 'numblop-locale'

// An explicit choice stored by the language picker always wins. Norwegian
// device locales (`no` and `nn`) fold into the shipped Bokmål locale (`nb`).
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
    const lang = tag.toLowerCase().split('-')[0]
    if (lang === 'no' || lang === 'nn') return 'nb'
    if (isLocale(lang)) return lang
  }
  return 'en'
}
