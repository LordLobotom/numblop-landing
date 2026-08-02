import { notFound } from 'next/navigation'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { LocaleLang } from '@/components/locale-lang'
import { getDictionary, isLocale, locales } from '@/lib/i18n/dictionary'

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
    <>
      <LocaleLang locale={locale} />
      <SiteHeader locale={locale} dict={dict} />
      {children}
      <SiteFooter dict={dict} />
    </>
  )
}
