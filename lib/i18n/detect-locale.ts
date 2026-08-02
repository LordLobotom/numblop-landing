import { type Locale } from './dictionary'

export const LOCALE_STORAGE_KEY = 'numblop-locale'

// Czech and Slovak browsers get the Czech page; everyone else English.
// An explicit choice stored by the language toggle always wins.
export function detectLocale(): Locale {
  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY)
    if (stored === 'cs' || stored === 'en') {
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
    if (lang === 'cs' || lang === 'sk') return 'cs'
    if (lang === 'en') return 'en'
  }
  return 'cs'
}
