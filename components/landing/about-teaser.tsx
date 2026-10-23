import { ArrowRight, BookOpen } from 'lucide-react'
import { getAboutContent } from '@/lib/i18n/about'
import type { Locale } from '@/lib/i18n/locales'

export function AboutTeaser({ locale }: { locale: Locale }) {
  const { homeEntry } = getAboutContent(locale)

  return (
    <section className="px-4 py-10 sm:py-12">
      <div className="mx-auto flex max-w-5xl flex-col gap-5 rounded-3xl border border-primary/40 bg-secondary/55 px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex max-w-2xl gap-4">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <BookOpen className="size-5" aria-hidden="true" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              {homeEntry.eyebrow}
            </p>
            <h2 className="mt-1 text-xl font-semibold sm:text-2xl">
              {homeEntry.heading}
            </h2>
            <p className="mt-2 text-muted-foreground">{homeEntry.body}</p>
          </div>
        </div>
        <a
          href={`/${locale}/about/`}
          className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-border bg-background px-5 font-semibold shadow-xs transition-colors hover:bg-muted focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
        >
          {homeEntry.cta}
          <ArrowRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
