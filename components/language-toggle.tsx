'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Check, ChevronDown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { LOCALE_STORAGE_KEY } from '@/lib/i18n/detect-locale'
import contentRoutes from '@/lib/i18n/generated/content-routes.json'
import {
  getLocaleInfo,
  isLocale,
  localeCatalog,
  type Locale,
} from '@/lib/i18n/locales'

// Swaps the locale segment so switching language keeps the reader on the same
// page (/cs/privacy/ -> /en/privacy/) instead of bouncing to the home page.
function localisedPath(pathname: string | null, locale: Locale) {
  const segments = pathname?.split('/').filter(Boolean) ?? []
  if (!isLocale(segments[0])) {
    return `/${locale}/`
  }

  // Guides and articles have translated slugs. Find the stable page group
  // before falling back to replacing only the locale segment for shared routes
  // such as home, contact, privacy, and the blog index.
  const normalizedPath = `/${segments.join('/')}/`
  const localizedContentRoute = contentRoutes.find((routes) =>
    Object.values(routes).includes(normalizedPath),
  )
  if (localizedContentRoute) {
    return localizedContentRoute[locale as keyof typeof localizedContentRoute]
  }
  return `/${[locale, ...segments.slice(1)].join('/')}/`
}

export function LanguageToggle({ current }: { current: Locale }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const menu = useRef<HTMLDivElement>(null)
  const selected = getLocaleInfo(current)

  useEffect(() => {
    function closeOnOutsideClick(event: PointerEvent) {
      if (!menu.current?.contains(event.target as Node)) setOpen(false)
    }
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [])

  return (
    <div ref={menu} className="relative">
      <button
        type="button"
        aria-label={`${selected.languageLabel}: ${selected.name}`}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex h-10 items-center gap-1.5 rounded-full border border-border bg-card px-2 shadow-xs transition-colors hover:bg-secondary focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none sm:gap-2 sm:px-3"
      >
        <Image
          src={selected.flag}
          alt=""
          width={28}
          height={28}
          className="size-7 rounded-full"
        />
        <span className="hidden text-sm font-medium md:inline">{selected.name}</span>
        <ChevronDown
          className={`size-4 text-muted-foreground transition-transform ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <nav
          aria-label={selected.languageLabel}
          role="menu"
          className="absolute right-0 top-12 z-50 max-h-[calc(100vh-5rem)] w-56 overflow-y-auto rounded-2xl border border-border bg-popover p-2 text-popover-foreground shadow-xl"
        >
          {localeCatalog.map((locale) => (
            <Link
              key={locale.code}
              href={localisedPath(pathname, locale.code)}
              hrefLang={locale.code}
              role="menuitemradio"
              aria-checked={locale.code === current}
              onClick={() => {
                setOpen(false)
                try {
                  window.localStorage.setItem(LOCALE_STORAGE_KEY, locale.code)
                } catch {
                  // localStorage unavailable — navigation still works.
                }
              }}
              className="flex min-h-11 items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary focus-visible:bg-secondary focus-visible:outline-none"
            >
              <Image
                src={locale.flag}
                alt=""
                width={32}
                height={32}
                className="size-8 rounded-full"
              />
              <span className="flex-1">{locale.name}</span>
              {locale.code === current && (
                <Check className="size-4 text-accent" aria-hidden="true" />
              )}
            </Link>
          ))}
        </nav>
      )}
    </div>
  )
}
