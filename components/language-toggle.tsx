'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { LOCALE_STORAGE_KEY } from '@/lib/i18n/detect-locale'
import { locales, type Locale } from '@/lib/i18n/dictionary'

const labels: Record<Locale, string> = {
  cs: 'CZ',
  en: 'EN',
}

export function LanguageToggle({ current }: { current: Locale }) {
  return (
    <nav
      aria-label="Language"
      className="flex items-center rounded-full border border-border bg-card p-1"
    >
      {locales.map((locale) => (
        <Link
          key={locale}
          href={`/${locale}/`}
          hrefLang={locale}
          aria-current={locale === current ? 'page' : undefined}
          onClick={() => {
            try {
              window.localStorage.setItem(LOCALE_STORAGE_KEY, locale)
            } catch {
              // localStorage unavailable — the toggle still navigates.
            }
          }}
          className={cn(
            'rounded-full px-3 py-1 text-sm font-medium transition-colors',
            locale === current
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground',
          )}
        >
          {labels[locale]}
        </Link>
      ))}
    </nav>
  )
}
