import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { Breadcrumbs } from '@/components/content/breadcrumbs'
import { RelatedContent } from '@/components/content/related'
import { BlogJsonLd, BreadcrumbJsonLd } from '@/components/structured-data'
import { isLocale } from '@/lib/i18n/dictionary'
import type { Locale } from '@/lib/i18n/locales'
import {
  alternateOpenGraphLocales,
  localeAlternatesFromPaths,
  openGraphLocale,
} from '@/lib/seo'
import {
  articlePath,
  blogPaths,
  getLocaleContent,
  guideLinks,
  listArticles,
  readingTimeMinutes,
} from '@/lib/content'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) {
    return {}
  }
  const { ui } = getLocaleContent(locale)
  const path = `/${locale}/blog/`

  return {
    title: ui.blogMetaTitle,
    description: ui.blogMetaDescription,
    alternates: {
      canonical: path,
      languages: localeAlternatesFromPaths(blogPaths()),
    },
    openGraph: {
      title: ui.blogMetaTitle,
      description: ui.blogMetaDescription,
      url: path,
      siteName: 'Numblop',
      locale: openGraphLocale(locale),
      alternateLocale: alternateOpenGraphLocales(locale),
      type: 'website',
      images: ['/og-image.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: ui.blogMetaTitle,
      description: ui.blogMetaDescription,
      images: ['/og-image.png'],
    },
  }
}

export default async function BlogIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: rawLocale } = await params
  if (!isLocale(rawLocale)) {
    notFound()
  }
  const locale: Locale = rawLocale
  const content = getLocaleContent(locale)
  const articles = listArticles(locale)
  const crumbs = [
    { name: content.ui.home, path: `/${locale}/` },
    { name: content.ui.blog, path: `/${locale}/blog/` },
  ]

  return (
    <>
      <BlogJsonLd
        locale={locale}
        name={content.ui.blogTitle}
        description={content.ui.blogMetaDescription}
        posts={articles.map((article) => ({
          title: article.title,
          path: articlePath(locale, article.id),
          published: article.published,
          updated: article.updated,
        }))}
      />
      <BreadcrumbJsonLd crumbs={crumbs} />
      <main className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
        <Breadcrumbs crumbs={crumbs} label={content.ui.breadcrumbLabel} />
        <h1 className="mt-6 text-3xl font-semibold sm:text-4xl">
          {content.ui.blogTitle}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {content.ui.blogIntro}
        </p>

        <ul className="mt-10 space-y-6">
          {articles.map((article) => (
            <li key={article.id}>
              <a
                href={articlePath(locale, article.id)}
                className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-accent/60 sm:flex-row"
              >
                {article.image && (
                  <Image
                    src={article.image.src}
                    alt=""
                    width={article.image.width}
                    height={article.image.height}
                    sizes="(min-width: 640px) 12rem, 100vw"
                    className="w-full rounded-xl border border-border/60 object-cover sm:w-48 sm:shrink-0"
                  />
                )}
                <div>
                  <h2 className="text-xl font-semibold group-hover:text-accent">
                    {article.title}
                  </h2>
                  <p className="mt-2 text-muted-foreground">{article.excerpt}</p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    <time dateTime={article.published}>{article.published}</time>
                    {' · '}
                    {content.ui.readingTime.replace(
                      '{n}',
                      String(readingTimeMinutes(article)),
                    )}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 font-medium text-accent">
                    {content.ui.readMore}
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>

        {/* The guides are the blog's natural next click, so they get the
            related block rather than a link list in the footer. */}
        <RelatedContent heading={content.ui.guides} links={guideLinks(locale)} />
      </main>
    </>
  )
}
