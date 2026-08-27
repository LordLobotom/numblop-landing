import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArrowLeft, Mail } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'
import { getDictionary, isLocale } from '@/lib/i18n/dictionary'
import { localeAlternates } from '@/lib/i18n/locales'
import { CONTACT_EMAIL, CONTACT_SUBJECT } from '@/lib/contact'
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
    title: dict.contact.meta.title,
    description: dict.contact.meta.description,
    alternates: {
      canonical: `/${locale}/contact/`,
      languages: localeAlternates('contact'),
    },
    openGraph: {
      title: dict.contact.meta.title,
      description: dict.contact.meta.description,
      url: `/${locale}/contact/`,
      siteName: 'Numblop',
      locale: openGraphLocale(locale),
      alternateLocale: alternateOpenGraphLocales(locale),
      type: 'website',
      images: ['/og-image.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.contact.meta.title,
      description: dict.contact.meta.description,
      images: ['/og-image.png'],
    },
  }
}

export default async function ContactPage({
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
    <main className="mx-auto max-w-2xl px-4 py-14 sm:py-20">
      <h1 className="text-3xl font-semibold sm:text-4xl">
        {dict.contact.heading}
      </h1>
      <p className="mt-3 text-muted-foreground">{dict.contact.subheading}</p>

      <div className="mt-8">
        <ContactForm dict={dict} locale={locale} />
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        {dict.contact.directEmail}{' '}
        <a
          href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(CONTACT_SUBJECT)}`}
          className="inline-flex items-center gap-1 font-medium text-accent hover:underline"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          {CONTACT_EMAIL}
        </a>
      </p>

      <a
        href={`/${locale}/`}
        className="mt-12 inline-flex items-center gap-2 font-medium text-accent hover:underline"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        {dict.contact.backToHome}
      </a>
    </main>
  )
}
