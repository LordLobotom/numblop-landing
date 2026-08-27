import Image from 'next/image'
import type { Dictionary, Locale } from '@/lib/i18n/dictionary'
import { marketingAssetLocale } from '@/lib/i18n/locales'

// Real in-game captures from the game repo (store/screenshots), one set per
// language. The order here defines the order of `dict.screenshots.captions`.
const shots = ['home', 'map', 'choice', 'keypad', 'reward', 'cosmetics']

export function Screenshots({
  dict,
  locale,
}: {
  dict: Dictionary
  locale: Locale
}) {
  const assetLocale = marketingAssetLocale(locale)

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-semibold sm:text-3xl">
          {dict.screenshots.heading}
        </h2>
        <p className="mt-3 text-muted-foreground">{dict.screenshots.subheading}</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-3">
        {shots.map((slug, index) => (
          <figure key={slug} className="flex flex-col items-center gap-3">
            <Image
              src={`/screenshots/${slug}-${assetLocale}.webp`}
              alt={dict.screenshots.captions[index]}
              width={540}
              height={960}
              loading="lazy"
              className="w-full max-w-60 rounded-2xl border border-border shadow-md"
            />
            <figcaption className="text-sm text-muted-foreground">
              {dict.screenshots.captions[index]}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
