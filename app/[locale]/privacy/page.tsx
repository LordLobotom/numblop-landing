import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { isLocale } from '@/lib/i18n/dictionary'
import {
  getPrivacyContent,
  privacyContact,
  type PrivacyBlock,
} from '@/lib/i18n/privacy'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) {
    return {}
  }
  const content = getPrivacyContent(locale)

  return {
    title: content.meta.title,
    description: content.meta.description,
    alternates: {
      canonical: `/${locale}/privacy/`,
      languages: {
        cs: '/cs/privacy/',
        en: '/en/privacy/',
        'x-default': '/cs/privacy/',
      },
    },
    openGraph: {
      title: content.meta.title,
      description: content.meta.description,
      url: `/${locale}/privacy/`,
      siteName: 'Numblop',
      locale: locale === 'cs' ? 'cs_CZ' : 'en_US',
      type: 'article',
      images: ['/og-image.png'],
    },
  }
}

function Block({ block }: { block: PrivacyBlock }) {
  if ('h' in block) {
    return <h3 className="mt-6 text-base font-semibold">{block.h}</h3>
  }
  if ('list' in block) {
    return (
      <ul className="ml-5 list-disc space-y-1">
        {block.list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )
  }
  if ('fields' in block) {
    return (
      <dl className="rounded-xl border border-border bg-card px-5 py-4">
        {block.fields.map((field) => (
          <div key={field.label} className="flex flex-wrap gap-x-2 py-1">
            <dt className="font-semibold text-foreground">{field.label}:</dt>
            <dd>
              {field.value.includes('@') ? (
                <a
                  href={`mailto:${field.value}`}
                  className="text-accent hover:underline"
                >
                  {field.value}
                </a>
              ) : (
                field.value
              )}
            </dd>
          </div>
        ))}
      </dl>
    )
  }
  return <p>{block.p}</p>
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) {
    notFound()
  }
  const content = getPrivacyContent(locale)

  return (
    <main className="mx-auto max-w-3xl px-4 py-14 sm:py-20">
      <h1 className="text-3xl font-semibold sm:text-4xl">{content.title}</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        {content.effectiveDateLabel}:{' '}
        <time dateTime={privacyContact.effectiveDate}>
          {content.effectiveDate}
        </time>
      </p>
      <div className="mt-6 space-y-4 text-muted-foreground">
        {content.intro.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>
      {content.sections.map((section) => (
        <section key={section.heading} className="mt-10">
          <h2 className="text-xl font-semibold">{section.heading}</h2>
          <div className="mt-4 space-y-4 text-muted-foreground">
            {section.blocks.map((block, index) => (
              <Block key={index} block={block} />
            ))}
          </div>
        </section>
      ))}
      <a
        href={`/${locale}/`}
        className="mt-12 inline-flex items-center gap-2 font-medium text-accent hover:underline"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        {content.backToHome}
      </a>
    </main>
  )
}
