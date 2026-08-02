'use client'

import { useEffect } from 'react'
import type { Locale } from '@/lib/i18n/dictionary'

// The root layout can only render one static <html lang>; sync it to the
// actual locale segment after hydration.
export function LocaleLang({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  return null
}
