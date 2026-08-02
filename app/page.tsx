import type { Metadata } from 'next'
import { RootRedirect } from '@/components/root-redirect'

export const metadata: Metadata = {
  alternates: {
    canonical: '/cs/',
    languages: {
      cs: '/cs/',
      en: '/en/',
      'x-default': '/cs/',
    },
  },
}

export default function RootPage() {
  return <RootRedirect />
}
