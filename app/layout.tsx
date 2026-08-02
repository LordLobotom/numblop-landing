import type { Metadata, Viewport } from 'next'
import { Fredoka, Baloo_2 } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const fredoka = Fredoka({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-fredoka',
})

// Google's Fredoka has no č ď ě ň ř ť ů glyphs; Baloo 2 is the closest
// rounded face with full Czech coverage and fills in per-glyph.
const baloo = Baloo_2({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-baloo',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://numblop.gutcloud.cz'),
  title: 'Numblop – Násobilka hrou',
  description: 'Adaptivní hra pro procvičování a automatizaci násobilky.',
}

export const viewport: Viewport = {
  themeColor: '#b9ef45',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs" suppressHydrationWarning>
      <body className={`${fredoka.variable} ${baloo.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
