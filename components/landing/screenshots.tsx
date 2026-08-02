import Image from 'next/image'
import type { Dictionary } from '@/lib/i18n/dictionary'

const shots = [
  '/screenshots/main-screen.png',
  '/screenshots/map.png',
  '/screenshots/arena.png',
]

export function Screenshots({ dict }: { dict: Dictionary }) {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-semibold sm:text-3xl">
          {dict.screenshots.heading}
        </h2>
        <p className="mt-3 text-muted-foreground">{dict.screenshots.subheading}</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-3">
        {shots.map((src, index) => (
          <figure key={src} className="flex flex-col items-center gap-3">
            <Image
              src={src}
              alt={dict.screenshots.captions[index]}
              width={390}
              height={844}
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
