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
  // The quantised copies from tools/prepare-assets.mjs, not the 512px source in
  // app/: the favicon is requested by every page and the source is ~117 kB.
  icons: {
    icon: [
      { url: '/numblop-icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/numblop-icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/numblop-icon-192.png', sizes: '192x192', type: 'image/png' }],
  },
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
