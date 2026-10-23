import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, Globe, Smartphone } from 'lucide-react'
import { Breadcrumbs } from '@/components/content/breadcrumbs'
import { ProseIntro, ProseSections } from '@/components/content/prose'
import { RelatedContent } from '@/components/content/related'
import { ArticleVideo } from '@/components/content/video'
import { ArticleJsonLd, BreadcrumbJsonLd } from '@/components/structured-data'
import { Button } from '@/components/ui/button'
import { getDictionary, isLocale } from '@/lib/i18n/dictionary'
import type { Locale } from '@/lib/i18n/locales'
import { GOOGLE_PLAY_URL, WEB_BUILD_URL } from '@/lib/links'
import {
  alternateOpenGraphLocales,
  localeAlternatesFromPaths,
  openGraphLocale,
} from '@/lib/seo'
import {
  articlePaths,
  findArticleBySlug,
  getLocaleContent,
  readingTimeMinutes,
  relatedLinks,
} from '@/lib/content'

export function generateStaticParams({
  params,
}: {
  params: { locale: string }
}) {
  if (!isLocale(params.locale)) {
    return []
  }
  return getLocaleContent(params.locale).articles.map((article) => ({
    slug: article.slug,
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
  const article = findArticleBySlug(locale, slug)
  if (!article) {
    return {}
  }
  const path = `/${locale}/blog/${article.slug}/`

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: {
      canonical: path,
      languages: localeAlternatesFromPaths(articlePaths(article.id)),
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: path,
      siteName: 'Numblop',
      locale: openGraphLocale(locale),
      alternateLocale: alternateOpenGraphLocales(locale),
      type: 'article',
      publishedTime: article.published,
      modifiedTime: article.updated,
      images: [article.image?.src ?? '/og-image.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.metaTitle,
      description: article.metaDescription,
      images: [article.image?.src ?? '/og-image.png'],
    },
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale: rawLocale, slug } = await params
  if (!isLocale(rawLocale)) {
    notFound()
  }
  const locale: Locale = rawLocale
  const article = findArticleBySlug(locale, slug)
  if (!article) {
    notFound()
  }

  const content = getLocaleContent(locale)
  const dict = getDictionary(locale)
  const path = `/${locale}/blog/${article.slug}/`
  const crumbs = [
    { name: content.ui.home, path: `/${locale}/` },
    { name: content.ui.blog, path: `/${locale}/blog/` },
    { name: article.linkLabel, path },
  ]

  return (
    <>
      <ArticleJsonLd article={article} locale={locale} path={path} />
      <BreadcrumbJsonLd crumbs={crumbs} />
      <main className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
        <Breadcrumbs crumbs={crumbs} label={content.ui.breadcrumbLabel} />
        <h1 className="mt-6 text-3xl font-semibold sm:text-4xl">
          {article.title}
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          {content.ui.published}{' '}
          <time dateTime={article.published}>{article.published}</time>
          {article.updated !== article.published && (
            <>
              {' · '}
              {content.ui.updated}{' '}
              <time dateTime={article.updated}>{article.updated}</time>
            </>
          )}
          {' · '}
          {content.ui.readingTime.replace(
            '{n}',
            String(readingTimeMinutes(article)),
          )}
        </p>

        <ProseIntro paragraphs={article.intro} />

        {article.image && (
          <Image
            src={article.image.src}
            alt={article.image.alt}
            width={article.image.width}
            height={article.image.height}
            sizes="(min-width: 768px) 42rem, 100vw"
            className="mt-8 w-full rounded-2xl border border-border shadow-md"
          />
        )}

        {article.video && <ArticleVideo video={article.video} />}

        <section className="mt-10 rounded-2xl border border-border bg-muted/40 px-6 py-5">
          <h2 className="text-lg font-semibold">
            {content.ui.takeawaysHeading}
          </h2>
          <ul className="mt-3 ml-5 list-disc space-y-2 text-muted-foreground">
            {article.takeaways.map((takeaway) => (
              <li key={takeaway}>{takeaway}</li>
            ))}
          </ul>
        </section>

        <ProseSections sections={article.sections} />

        <aside className="mt-12 rounded-2xl border border-accent/40 bg-secondary/60 px-6 py-6">
          <h2 className="text-lg font-semibold">{dict.download.bottomHeading}</h2>
          <p className="mt-2 text-muted-foreground">
            {dict.download.bottomSubheading}
          </p>
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
          links={relatedLinks(locale, { articleId: article.id })}
        />

        <a
          href={`/${locale}/blog/`}
          className="mt-12 inline-flex items-center gap-2 font-medium text-accent hover:underline"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {content.ui.backToBlog}
        </a>
      </main>
    </>
  )
}
