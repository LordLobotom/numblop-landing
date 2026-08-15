import { Globe, Info, Smartphone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GOOGLE_PLAY_URL, WEB_BUILD_URL } from '@/lib/links'
import type { Dictionary } from '@/lib/i18n/dictionary'

export function Download({ dict }: { dict: Dictionary }) {
  return (
    // scroll-mt clears the sticky h-16 header when the CTA buttons jump here.
    <section id="get" className="scroll-mt-20 bg-muted/40 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-2xl font-semibold sm:text-3xl">
          {dict.download.heading}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          {dict.download.subheading}
        </p>

        {/* Two equal cards, not a primary/fallback pair: Google Play is the only
            native build, and the web export is the only way to play on iOS and
            desktop. Neither is a lesser option for the audience it serves. */}
        <div className="mt-10 grid gap-4 text-left sm:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card px-6 py-6 shadow-sm">
            <span className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Smartphone className="size-5" aria-hidden="true" />
            </span>
            <div className="flex-1">
              <h3 className="text-lg font-semibold">
                {dict.download.androidTitle}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {dict.download.androidBody}
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full text-base font-semibold shadow-md shadow-primary/30"
            >
              <a
                href={GOOGLE_PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {dict.download.androidCta}
              </a>
            </Button>
          </div>

          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card px-6 py-6 shadow-sm">
            <span className="flex size-11 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
              <Globe className="size-5" aria-hidden="true" />
            </span>
            <div className="flex-1">
              <h3 className="text-lg font-semibold">
                {dict.download.webTitle}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {dict.download.webBody}
              </p>
            </div>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full text-base font-semibold"
            >
              <a href={WEB_BUILD_URL}>{dict.download.webCta}</a>
            </Button>
          </div>
        </div>

        <p className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Info className="h-4 w-4 shrink-0" aria-hidden="true" />
          {dict.download.iosNote}
        </p>
      </div>
    </section>
  )
}
