import Image from 'next/image'
import { Globe, ShieldCheck, Smartphone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GOOGLE_PLAY_URL, WEB_BUILD_URL } from '@/lib/links'
import type { Dictionary } from '@/lib/i18n/dictionary'

export function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_color-mix(in_srgb,var(--primary)_18%,transparent),transparent_60%)]"
      />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-20 text-center sm:py-28">
        {/* WebP, and the width/height are the real intrinsic sizes: the
            wordmark used to declare 320x213 against a 640x158 file, so the
            browser reserved the wrong box and the hero shifted on load. */}
        <Image
          src="/numblop-mascot.webp"
          alt=""
          width={440}
          height={463}
          priority
          sizes="(min-width: 640px) 10rem, 8rem"
          className="-mb-2 h-auto w-32 drop-shadow-xl sm:w-40"
        />
        <Image
          src="/numblop-wordmark.webp"
          alt="Numblop"
          width={640}
          height={158}
          priority
          sizes="(min-width: 640px) 18rem, 14rem"
          className="h-auto w-56 sm:w-72"
        />
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          {dict.hero.slogan}
        </p>
        <p className="rounded-full border border-accent/40 bg-secondary px-4 py-1 text-sm font-semibold text-secondary-foreground">
          {dict.hero.badge}
        </p>
        <h1 className="max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
          {dict.hero.tagline}
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          {dict.hero.shortDescription}
        </p>
        {/* Both platforms up front: Google Play for Android, the web build for
            iOS and desktop, where there is no native app to send people to. */}
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
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
          {dict.hero.privacy}
        </p>
      </div>
    </section>
  )
}
