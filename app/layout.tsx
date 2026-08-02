import type { Metadata, Viewport } from 'next'
import { Baloo_2 } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

// Baloo 2 instead of the game's Fredoka: closest rounded match with
// full Czech glyph coverage (Fredoka lacks č ď ě ň ř ť ů).
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
      <body className={`${baloo.variable} font-sans antialiased`}>
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
