import Image from 'next/image'
import { Play, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Dictionary } from '@/lib/i18n/dictionary'

export function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_color-mix(in_srgb,var(--primary)_18%,transparent),transparent_60%)]"
      />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-20 text-center sm:py-28">
        <Image
          src="/numblop-wordmark.png"
          alt="Numblop"
          width={320}
          height={213}
          priority
          className="h-auto w-56 sm:w-72"
        />
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          {dict.hero.slogan}
        </p>
        <h1 className="max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
          {dict.hero.tagline}
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          {dict.hero.shortDescription}
        </p>
        <Button
          asChild
          size="lg"
          className="h-14 rounded-full px-10 text-lg font-semibold shadow-lg shadow-primary/30"
        >
          <a href="/play/">
            <Play className="size-5" aria-hidden="true" />
            {dict.hero.play}
          </a>
        </Button>
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
          {dict.hero.privacy}
        </p>
      </div>
    </section>
  )
}
