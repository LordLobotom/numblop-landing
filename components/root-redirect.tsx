'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { detectLocale, LOCALE_STORAGE_KEY } from '@/lib/i18n/detect-locale'
import { localeCatalog } from '@/lib/i18n/locales'

export function RootRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.replace(`/${detectLocale()}/`)
  }, [router])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8 text-center">
      <h1 className="text-4xl font-semibold">Numblop</h1>
      <p className="text-muted-foreground">Choose your language</p>
      <nav aria-label="Language" className="grid grid-cols-2 gap-3 sm:grid-cols-5">
        {localeCatalog.map((locale) => (
          <a
            key={locale.code}
            href={`/${locale.code}/`}
            hrefLang={locale.code}
            onClick={() => {
              try {
                window.localStorage.setItem(LOCALE_STORAGE_KEY, locale.code)
              } catch {
                // localStorage unavailable — navigation still works.
              }
            }}
            className="flex min-w-32 items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 font-medium hover:bg-secondary"
          >
            <Image src={locale.flag} alt="" width={32} height={32} className="size-8 rounded-full" />
            {locale.name}
          </a>
        ))}
      </nav>
    </main>
  )
}
