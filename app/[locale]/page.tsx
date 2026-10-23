import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Hero } from '@/components/landing/hero'
import { Highlights } from '@/components/landing/highlights'
import { HowItWorks } from '@/components/landing/how-it-works'
import { WhyAdaptive } from '@/components/landing/why-adaptive'
import { Screenshots } from '@/components/landing/screenshots'
import { Download } from '@/components/landing/download'
import { Trailer } from '@/components/landing/trailer'
import { ClosingCta } from '@/components/landing/closing-cta'
import { Faq } from '@/components/landing/faq'
import { Explore } from '@/components/landing/explore'
import { AboutTeaser } from '@/components/landing/about-teaser'
import { FaqJsonLd, GameApplicationJsonLd } from '@/components/structured-data'
import { articlePath, getArticle, getLocaleContent } from '@/lib/content'
import { getDictionary, isLocale } from '@/lib/i18n/dictionary'
import { localeAlternates } from '@/lib/i18n/locales'
import { alternateOpenGraphLocales, openGraphLocale } from '@/lib/seo'

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
      languages: localeAlternates(),
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `/${locale}/`,
      siteName: 'Numblop',
      locale: openGraphLocale(locale),
      alternateLocale: alternateOpenGraphLocales(locale),
      type: 'website',
      images: ['/og-image.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.title,
      description: dict.meta.description,
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
  const content = getLocaleContent(locale)
  const halloween = getArticle(locale, 'halloween-cosmetics')

  return (
    <>
      <GameApplicationJsonLd locale={locale} dict={dict} />
      <FaqJsonLd items={content.faq.items} />
      <main>
        <Hero
          dict={dict}
          halloween={{
            href: articlePath(locale, halloween.id),
            label: halloween.linkLabel,
          }}
        />
        {/* Getting people into the game is the point of the page, so the store
            and browser links sit above the pitch, not after it. */}
        <Download dict={dict} />
        <Trailer dict={dict.trailer} />
        <Highlights dict={dict} locale={locale} />
        <HowItWorks dict={dict} />
        <WhyAdaptive dict={dict} />
        <AboutTeaser locale={locale} />
        <Screenshots dict={dict} locale={locale} />
        {/* FAQ before the closing CTA: it answers the last objections (iOS,
            price, "is this just a quiz") right where people decide. */}
        <Faq content={content} />
        <Explore locale={locale} />
        <ClosingCta dict={dict} />
      </main>
    </>
  )
}
