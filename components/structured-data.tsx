// All JSON-LD the site emits, in one place so the @id graph stays consistent:
// every page links back to the same Organization and WebSite nodes rather than
// re-declaring the publisher from scratch.
//
// Nothing here may invent ratings, review counts or download numbers — the site
// has no verifiable source for them, and Google treats fabricated review markup
// as a manual-action offence.

import type { Dictionary } from '@/lib/i18n/dictionary'
import type { Locale } from '@/lib/i18n/locales'
import { marketingAssetLocale } from '@/lib/i18n/locales'
import { GOOGLE_PLAY_URL, INSTAGRAM_URL, YOUTUBE_CHANNEL_URL } from '@/lib/links'
import {
  absoluteUrl,
  AUTHOR_NAME,
  OG_IMAGE_PATH,
  SITE_NAME,
  SITE_URL,
} from '@/lib/seo'
import type { Article, ContentImage, FaqItem } from '@/lib/content'

export const ORGANIZATION_ID = `${SITE_URL}/#organization`
export const WEBSITE_ID = `${SITE_URL}/#website`
export const APP_ID = `${SITE_URL}/#app`

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  )
}

/**
 * Site-wide identity: who publishes Numblop and what the site is. Rendered once
 * per page from the locale layout.
 */
export function SiteJsonLd({ locale }: { locale: Locale }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            '@id': ORGANIZATION_ID,
            name: SITE_NAME,
            url: SITE_URL,
            logo: {
              '@type': 'ImageObject',
              url: absoluteUrl('/numblop-logo.png'),
            },
            image: absoluteUrl(OG_IMAGE_PATH),
            founder: { '@type': 'Person', name: AUTHOR_NAME },
            sameAs: [INSTAGRAM_URL, YOUTUBE_CHANNEL_URL, GOOGLE_PLAY_URL],
          },
          {
            '@type': 'WebSite',
            '@id': WEBSITE_ID,
            name: SITE_NAME,
            url: SITE_URL,
            inLanguage: locale,
            publisher: { '@id': ORGANIZATION_ID },
          },
        ],
      }}
    />
  )
}

/**
 * The game itself. `applicationCategory` carries both the educational and the
 * game classification because Numblop is genuinely both, and the store listing
 * says the same.
 */
export function GameApplicationJsonLd({
  locale,
  dict,
}: {
  locale: Locale
  dict: Dictionary
}) {
  const assetLocale = marketingAssetLocale(locale)
  const screenshots = [
    'home',
    'map',
    'choice',
    'keypad',
    'reward',
    'cosmetics',
  ].map((name) => absoluteUrl(`/screenshots/${name}-${assetLocale}.webp`))

  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': ['SoftwareApplication', 'VideoGame'],
        '@id': APP_ID,
        name: SITE_NAME,
        description: dict.meta.description,
        url: `${SITE_URL}/${locale}/`,
        image: absoluteUrl(OG_IMAGE_PATH),
        screenshot: screenshots,
        applicationCategory: ['EducationalApplication', 'GameApplication'],
        applicationSubCategory: 'Mathematics',
        gamePlatform: ['Android', 'Web browser'],
        operatingSystem: 'Android, Web',
        inLanguage: locale,
        installUrl: GOOGLE_PLAY_URL,
        downloadUrl: GOOGLE_PLAY_URL,
        isAccessibleForFree: true,
        publisher: { '@id': ORGANIZATION_ID },
        author: { '@type': 'Person', name: AUTHOR_NAME },
        featureList: dict.why.features.map((feature) => feature.title),
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
        },
      }}
    />
  )
}

export function FaqJsonLd({ items }: { items: readonly FaqItem[] }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      }}
    />
  )
}

export interface Crumb {
  name: string
  path: string
}

export function BreadcrumbJsonLd({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: crumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: absoluteUrl(crumb.path),
        })),
      }}
    />
  )
}

export function ArticleJsonLd({
  article,
  locale,
  path,
}: {
  article: Article
  locale: Locale
  path: string
}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: article.title,
        description: article.metaDescription,
        image: article.image ? absoluteUrl(article.image.src) : undefined,
        datePublished: article.published,
        dateModified: article.updated,
        inLanguage: locale,
        author: { '@type': 'Person', name: AUTHOR_NAME },
        publisher: { '@id': ORGANIZATION_ID },
        isPartOf: { '@id': `${SITE_URL}/${locale}/blog/#blog` },
        mainEntityOfPage: { '@type': 'WebPage', '@id': absoluteUrl(path) },
        video: article.video
          ? {
              '@type': 'VideoObject',
              name: article.video.title,
              description: article.metaDescription,
              thumbnailUrl: article.image
                ? absoluteUrl(article.image.src)
                : `https://i.ytimg.com/vi/${article.video.youtubeId}/hqdefault.jpg`,
              uploadDate: article.published,
              contentUrl: `https://www.youtube.com/watch?v=${article.video.youtubeId}`,
              embedUrl: `https://www.youtube-nocookie.com/embed/${article.video.youtubeId}`,
            }
          : undefined,
      }}
    />
  )
}

export function BlogJsonLd({
  locale,
  name,
  description,
  posts,
}: {
  locale: Locale
  name: string
  description: string
  posts: { title: string; path: string; published: string; updated: string }[]
}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Blog',
        '@id': `${SITE_URL}/${locale}/blog/#blog`,
        name,
        description,
        url: absoluteUrl(`/${locale}/blog/`),
        inLanguage: locale,
        publisher: { '@id': ORGANIZATION_ID },
        blogPost: posts.map((post) => ({
          '@type': 'BlogPosting',
          headline: post.title,
          url: absoluteUrl(post.path),
          datePublished: post.published,
          dateModified: post.updated,
        })),
      }}
    />
  )
}

/**
 * Evergreen guides. `Article` rather than `BlogPosting`: they are maintained
 * reference pages, not dated posts.
 */
export function GuideJsonLd({
  locale,
  title,
  description,
  path,
  updated,
  image,
}: {
  locale: Locale
  title: string
  description: string
  path: string
  updated: string
  image?: ContentImage
}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        image: image ? absoluteUrl(image.src) : undefined,
        dateModified: updated,
        inLanguage: locale,
        author: { '@type': 'Person', name: AUTHOR_NAME },
        publisher: { '@id': ORGANIZATION_ID },
        about: { '@id': APP_ID },
        mainEntityOfPage: { '@type': 'WebPage', '@id': absoluteUrl(path) },
      }}
    />
  )
}
