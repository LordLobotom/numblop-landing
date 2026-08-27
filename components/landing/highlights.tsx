import Image from 'next/image'
import type { Dictionary, Locale } from '@/lib/i18n/dictionary'
import { marketingAssetLocale } from '@/lib/i18n/locales'

// Store posters from the game repo (store/posts). The order here defines the
// order of `dict.highlights.posters`.
const posters = [
  'multiplication-fun',
  'step-by-step',
  'mistakes-help',
  'rewards',
]

export function Highlights({
  dict,
  locale,
}: {
  dict: Dictionary
  locale: Locale
}) {
  const assetLocale = marketingAssetLocale(locale)

  return (
    <section className="bg-secondary/40 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            {dict.highlights.heading}
          </h2>
          <p className="mt-3 text-muted-foreground">
            {dict.highlights.subheading}
          </p>
        </div>
        <ul className="grid gap-6 sm:grid-cols-2">
          {posters.map((slug, index) => (
            <li key={slug}>
              <Image
                src={`/posts/${slug}-${assetLocale}.webp`}
                alt={dict.highlights.posters[index]}
                width={720}
                height={899}
                loading="lazy"
                className="w-full rounded-2xl border border-border shadow-md transition-transform duration-300 hover:-translate-y-1"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
