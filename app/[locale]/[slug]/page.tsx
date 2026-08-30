import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Globe, Smartphone } from 'lucide-react'
import { Breadcrumbs } from '@/components/content/breadcrumbs'
import { ProseIntro, ProseSections } from '@/components/content/prose'
import { RelatedContent } from '@/components/content/related'
import { BreadcrumbJsonLd, GuideJsonLd } from '@/components/structured-data'
import { Button } from '@/components/ui/button'
import { getDictionary, isLocale } from '@/lib/i18n/dictionary'
import { locales, type Locale } from '@/lib/i18n/locales'
import { GOOGLE_PLAY_URL, WEB_BUILD_URL } from '@/lib/links'
import {
  alternateOpenGraphLocales,
  localeAlternatesFromPaths,
  openGraphLocale,
} from '@/lib/seo'
import {
  findSeoPageBySlug,
  getLocaleContent,
  relatedLinks,
  seoPagePaths,
} from '@/lib/content'

// Static `contact`, `privacy` and `blog` segments take precedence over this
// dynamic one, so the guides can live at the top level of a locale without
// colliding with them. `dynamicParams` is inherited from the locale layout.
export function generateStaticParams({
  params,
}: {
  params: { locale: string }
}) {
  if (!isLocale(params.locale)) {
    return []
  }
  return getLocaleContent(params.locale).pages.map((page) => ({
    slug: page.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  if (!isLocale(locale)) {
    return {}
  }
  const page = findSeoPageBySlug(locale, slug)
  if (!page) {
    return {}
  }
  const path = `/${locale}/${page.slug}/`

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: path,
      // Slugs differ per locale, so hreflang has to be built from the page id
      // rather than from the current path.
      languages: localeAlternatesFromPaths(seoPagePaths(page.id)),
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: path,
      siteName: 'Numblop',
      locale: openGraphLocale(locale),
      alternateLocale: alternateOpenGraphLocales(locale),
      type: 'article',
      images: [page.image?.src ?? '/og-image.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.metaTitle,
      description: page.metaDescription,
      images: [page.image?.src ?? '/og-image.png'],
    },
  }
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale: rawLocale, slug } = await params
  if (!isLocale(rawLocale)) {
    notFound()
  }
  const locale: Locale = rawLocale
  const page = findSeoPageBySlug(locale, slug)
  if (!page) {
    notFound()
  }

  const content = getLocaleContent(locale)
  const dict = getDictionary(locale)
  const path = `/${locale}/${page.slug}/`
  const crumbs = [
    { name: content.ui.home, path: `/${locale}/` },
    { name: page.linkLabel, path },
  ]

  return (
    <>
      <GuideJsonLd
        locale={locale}
        title={page.title}
        description={page.metaDescription}
        path={path}
        updated={page.updated}
        image={page.image}
      />
      <BreadcrumbJsonLd crumbs={crumbs} />
      <main className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
        <Breadcrumbs crumbs={crumbs} label={content.ui.breadcrumbLabel} />
        <h1 className="mt-6 text-3xl font-semibold sm:text-4xl">{page.title}</h1>
        <ProseIntro paragraphs={page.intro} />
        {page.image && (
          <Image
            src={page.image.src}
            alt={page.image.alt}
            width={page.image.width}
            height={page.image.height}
            sizes="(min-width: 768px) 42rem, 100vw"
            className="mt-8 w-full rounded-2xl border border-border shadow-md"
          />
        )}
        <ProseSections sections={page.sections} />

        <aside className="mt-12 rounded-2xl border border-accent/40 bg-secondary/60 px-6 py-6">
          <h2 className="text-lg font-semibold">{page.cta.heading}</h2>
          <p className="mt-2 text-muted-foreground">{page.cta.body}</p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full font-semibold">
              <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer">
                <Smartphone className="size-5" aria-hidden="true" />
                {dict.hero.googlePlay}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full font-semibold"
            >
              <a href={WEB_BUILD_URL}>
                <Globe className="size-5" aria-hidden="true" />
                {dict.hero.playWeb}
              </a>
            </Button>
          </div>
        </aside>

        <RelatedContent
          heading={content.ui.relatedHeading}
          links={relatedLinks(locale, { pageId: page.id })}
        />
      </main>
    </>
  )
}
