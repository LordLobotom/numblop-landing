import { Globe, Smartphone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GOOGLE_PLAY_URL, WEB_BUILD_URL } from '@/lib/links'
import type { Dictionary } from '@/lib/i18n/dictionary'

// The download options also sit directly under the hero. This is the second
// chance to catch anyone who read the whole pitch first, so it repeats the two
// links rather than scrolling them back up to that section.
export function ClosingCta({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-secondary/40 py-16 sm:py-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-5 px-4 text-center">
        <h2 className="text-2xl font-semibold sm:text-3xl">
          {dict.download.bottomHeading}
        </h2>
        <p className="max-w-xl text-muted-foreground">
          {dict.download.bottomSubheading}
        </p>
        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          <Button
            asChild
            size="lg"
            className="h-14 rounded-full px-10 text-lg font-semibold shadow-lg shadow-primary/30"
          >
            <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer">
              <Smartphone className="size-5" aria-hidden="true" />
              {dict.hero.googlePlay}
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-14 rounded-full px-10 text-lg font-semibold"
          >
            <a href={WEB_BUILD_URL}>
              <Globe className="size-5" aria-hidden="true" />
              {dict.hero.playWeb}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
