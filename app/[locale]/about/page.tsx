import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  Code2,
  Download,
  Gamepad2,
  Heart,
  MapPin,
  Sparkles,
} from 'lucide-react'
import { AdaptivePractice } from '@/components/about/adaptive-practice'
import { Button } from '@/components/ui/button'
import { getAboutContent } from '@/lib/i18n/about'
import { getDictionary, isLocale } from '@/lib/i18n/dictionary'
import { localeAlternates, marketingAssetLocale } from '@/lib/i18n/locales'
import {
  alternateOpenGraphLocales,
  openGraphLocale,
} from '@/lib/seo'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const content = getAboutContent(locale)
  const path = `/${locale}/about/`

  return {
    title: content.meta.title,
    description: content.meta.description,
    alternates: {
      canonical: path,
      languages: localeAlternates('about'),
    },
    openGraph: {
      title: content.meta.title,
      description: content.meta.description,
      url: path,
      siteName: 'Numblop',
      locale: openGraphLocale(locale),
      alternateLocale: alternateOpenGraphLocales(locale),
      type: 'website',
      images: ['/og-image.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: content.meta.title,
      description: content.meta.description,
      images: ['/og-image.png'],
    },
  }
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const content = getAboutContent(locale)
  const dict = getDictionary(locale)
  const assetLocale = marketingAssetLocale(locale)

  return (
    <main>
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-secondary/65 to-background py-16 sm:py-24">
        <div className="pointer-events-none absolute -right-24 -top-28 size-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-card/80 px-3 py-1 text-sm font-semibold text-accent shadow-xs">
              <Heart className="size-4" aria-hidden="true" />
              {content.hero.eyebrow}
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
              {content.hero.title}
            </h1>
            <p className="mt-4 text-xl font-medium text-accent">
              {content.hero.tagline}
            </p>
            <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-muted-foreground">
              {content.hero.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute inset-8 rounded-full bg-primary/30 blur-2xl" />
            <Image
              src="/numblop-mascot.webp"
              alt={content.hero.imageAlt}
              width={480}
              height={480}
              priority
              className="relative mx-auto h-auto w-full drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <div className="space-y-3">
              {content.foundation.steps.map((step, index) => {
                const Icon = [BookOpen, Brain, Gamepad2][index]
                return (
                  <div key={step}>
                    <div className="flex items-center gap-4 rounded-2xl bg-secondary/60 px-4 py-4">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <span className="font-semibold">{step}</span>
                    </div>
                    {index < content.foundation.steps.length - 1 && (
                      <ArrowRight
                        className="mx-auto my-1 size-5 rotate-90 text-accent"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                )
              })}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              {content.foundation.heading}
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted-foreground">
              {content.foundation.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-secondary/30 py-16 sm:py-24">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              {content.rightAnswer.heading}
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted-foreground">
              {content.rightAnswer.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </div>
          <blockquote className="relative overflow-hidden rounded-3xl border border-primary/50 bg-card p-7 shadow-sm">
            <Sparkles className="size-8 text-accent" aria-hidden="true" />
            <p className="mt-5 text-xl font-semibold leading-relaxed">
              {content.rightAnswer.callout}
            </p>
          </blockquote>
        </div>
      </section>

      <AdaptivePractice content={content.adaptive} />

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              {content.methodology.heading}
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted-foreground">
              {content.methodology.paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className={index === 2 ? 'font-semibold text-foreground' : undefined}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-3 rounded-[2rem] bg-primary/20 blur-xl" />
            <Image
              src={`/screenshots/keypad-${assetLocale}.webp`}
              alt={content.methodology.imageAlt}
              width={720}
              height={900}
              sizes="(min-width: 1024px) 28rem, 90vw"
              className="relative w-full rounded-3xl border border-border shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/45 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <MapPin className="size-6" aria-hidden="true" />
          </span>
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-accent">
            {content.evolving.location}
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            {content.evolving.heading}
          </h2>
          <div className="mx-auto mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-muted-foreground">
            {content.evolving.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 flex justify-center gap-3" aria-hidden="true">
            {[BookOpen, Code2, CheckCircle2].map((Icon, index) => (
              <span
                key={index}
                className="flex size-11 items-center justify-center rounded-full border border-border bg-card text-accent shadow-xs"
              >
                <Icon className="size-5" />
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto flex max-w-5xl flex-col items-center rounded-3xl bg-primary px-6 py-12 text-center text-primary-foreground shadow-lg shadow-primary/20 sm:px-10">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            {content.cta.heading}
          </h2>
          <p className="mt-3 max-w-xl text-lg">{content.cta.body}</p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="mt-7 h-12 rounded-full border-primary-foreground/20 bg-background px-7 font-semibold text-foreground shadow-sm hover:bg-card"
          >
            <a href={`/${locale}/#get`}>
              <Download className="size-5" aria-hidden="true" />
              {dict.header.getIt}
            </a>
          </Button>
        </div>
      </section>
    </main>
  )
}
