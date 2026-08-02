'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { detectLocale } from '@/lib/i18n/detect-locale'

export function RootRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.replace(`/${detectLocale()}/`)
  }, [router])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8 text-center">
      <h1 className="text-4xl font-semibold">Numblop</h1>
      <p className="text-muted-foreground">Násobilka hrou · Times tables through play</p>
      <nav className="flex gap-4">
        <a
          href="/cs/"
          className="rounded-full bg-primary px-6 py-2 font-medium text-primary-foreground"
        >
          Pokračovat česky
        </a>
        <a
          href="/en/"
          className="rounded-full border border-border px-6 py-2 font-medium"
        >
          Continue in English
        </a>
      </nav>
    </main>
  )
}
