import type { Metadata } from 'next'
import { RootRedirect } from '@/components/root-redirect'
import { localeAlternates } from '@/lib/i18n/locales'

export const metadata: Metadata = {
  alternates: {
    canonical: '/en/',
    languages: localeAlternates(),
  },
  robots: { index: false, follow: true },
}

export default function RootPage() {
  return <RootRedirect />
}
