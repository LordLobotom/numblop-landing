import type { Dictionary, Locale } from '@/lib/i18n/dictionary'
import { GOOGLE_PLAY_URL } from '@/lib/links'
import { SITE_URL } from '@/lib/seo'

export function SoftwareApplicationJsonLd({
  locale,
  dict,
}: {
  locale: Locale
  dict: Dictionary
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Numblop',
    description: dict.meta.description,
    url: `${SITE_URL}/${locale}/`,
    image: `${SITE_URL}/og-image.png`,
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Android, Web',
    inLanguage: locale,
    installUrl: GOOGLE_PLAY_URL,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  )
}
