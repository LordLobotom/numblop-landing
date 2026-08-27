import { notFound } from 'next/navigation'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ThemeProvider } from '@/components/theme-provider'
import { getDictionary, isLocale, locales } from '@/lib/i18n/dictionary'
import { baloo, siteMetadata, siteViewport } from '@/lib/site-shell'
import '../globals.css'

export const metadata = siteMetadata
export const viewport = siteViewport

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export const dynamicParams = false

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  if (!isLocale(locale)) {
    notFound()
  }
  const dict = getDictionary(locale)

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${baloo.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader locale={locale} dict={dict} />
          {children}
          <SiteFooter dict={dict} locale={locale} />
        </ThemeProvider>
      </body>
    </html>
  )
}
