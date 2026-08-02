import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Hero } from '@/components/landing/hero'
import { HowItWorks } from '@/components/landing/how-it-works'
import { WhyAdaptive } from '@/components/landing/why-adaptive'
import { Screenshots } from '@/components/landing/screenshots'
import { getDictionary, isLocale } from '@/lib/i18n/dictionary'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) {
    return {}
  }
  const dict = getDictionary(locale)

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${locale}/`,
      languages: {
        cs: '/cs/',
        en: '/en/',
        'x-default': '/cs/',
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `/${locale}/`,
      siteName: 'Numblop',
      locale: locale === 'cs' ? 'cs_CZ' : 'en_US',
      type: 'website',
      images: ['/og-image.png'],
    },
  }
}

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) {
    notFound()
  }
  const dict = getDictionary(locale)

  return (
    <main>
      <Hero dict={dict} />
      <HowItWorks dict={dict} />
      <WhyAdaptive dict={dict} />
      <Screenshots dict={dict} />
    </main>
  )
}
