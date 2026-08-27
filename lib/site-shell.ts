import type { Metadata, Viewport } from 'next'
import { Baloo_2 } from 'next/font/google'
import { SITE_URL } from './seo'

export const baloo = Baloo_2({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-baloo',
})

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: 'Numblop',
  title: 'Numblop – Multiplication through play',
  description: 'An adaptive game for practising and mastering multiplication tables.',
  manifest: '/manifest.webmanifest',
  authors: [{ name: 'Michal Gut (LordLobotom)' }],
  creator: 'Michal Gut (LordLobotom)',
  publisher: 'Michal Gut (LordLobotom)',
  category: 'education',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export const siteViewport: Viewport = {
  themeColor: '#b9ef45',
}
