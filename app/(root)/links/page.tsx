import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Image from 'next/image'
import {
  ChevronRight,
  ExternalLink,
  Facebook,
  Gamepad2,
  Globe2,
  Instagram,
  Music2,
  Smartphone,
  Youtube,
} from 'lucide-react'
import {
  FACEBOOK_URL,
  GOOGLE_PLAY_URL,
  INSTAGRAM_URL,
  TIKTOK_URL,
  WEB_BUILD_URL,
  YOUTUBE_CHANNEL_URL,
} from '@/lib/links'

export const metadata: Metadata = {
  title: 'Numblop Links – Play & Follow',
  description:
    'Play Numblop, get the Android app and follow the multiplication adventure on social media.',
  alternates: { canonical: '/links/' },
  openGraph: {
    title: 'Numblop Links – Play & Follow',
    description:
      'Play Numblop, get the Android app and follow us on social media.',
    url: '/links/',
    siteName: 'Numblop',
    type: 'website',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Numblop Links – Play & Follow',
    description:
      'Play Numblop, get the Android app and follow us on social media.',
    images: ['/og-image.png'],
  },
}

function LinkCard({
  href,
  icon,
  title,
  subtitle,
  featured = false,
  external = false,
}: {
  href: string
  icon: ReactNode
  title: string
  subtitle: string
  featured?: boolean
  external?: boolean
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`group flex min-h-18 items-center gap-4 rounded-2xl border px-4 py-3.5 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg focus-visible:ring-[3px] focus-visible:ring-ring/50 sm:px-5 ${
        featured
          ? 'border-primary bg-primary text-primary-foreground hover:bg-primary/90'
          : 'border-border/80 bg-card/90 text-card-foreground backdrop-blur-sm hover:border-primary'
      }`}
    >
      <span
        className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${
          featured ? 'bg-primary-foreground/10' : 'bg-secondary text-accent'
        }`}
      >
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-base font-semibold leading-tight sm:text-lg">
          {title}
        </span>
        <span
          className={`mt-0.5 block text-xs sm:text-sm ${
            featured ? 'text-primary-foreground/75' : 'text-muted-foreground'
          }`}
        >
          {subtitle}
        </span>
      </span>
      {external ? (
        <ExternalLink
          className={`size-4 shrink-0 transition-transform group-hover:translate-x-0.5 ${
            featured ? 'text-primary-foreground/70' : 'text-muted-foreground'
          }`}
          aria-hidden="true"
        />
      ) : (
        <ChevronRight
          className={`size-5 shrink-0 transition-transform group-hover:translate-x-0.5 ${
            featured ? 'text-primary-foreground/70' : 'text-muted-foreground'
          }`}
          aria-hidden="true"
        />
      )}
    </a>
  )
}

export default function LinksPage() {
  return (
    <main className="relative min-h-svh overflow-hidden bg-background px-4 py-10 sm:py-14">
      <div
        className="pointer-events-none absolute -left-24 -top-24 size-80 rounded-full bg-primary/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-24 size-96 rounded-full bg-accent/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex w-full max-w-lg flex-col items-center">
        <div className="relative flex size-28 items-center justify-center rounded-full border-4 border-card bg-secondary shadow-xl sm:size-32">
          <Image
            src="/numblop-mascot.webp"
            alt="Numblop mascot"
            width={440}
            height={463}
            priority
            className="h-[92%] w-auto object-contain pt-2"
          />
        </div>

        <Image
          src="/numblop-wordmark.webp"
          alt="Numblop"
          width={640}
          height={158}
          priority
          className="mt-5 h-auto w-52 sm:w-60"
        />
        <p className="mt-2 text-center text-base font-medium text-muted-foreground sm:text-lg">
          Multiplication through play
        </p>

        <nav aria-label="Numblop links" className="mt-8 grid w-full gap-3">
          <LinkCard
            href={GOOGLE_PLAY_URL}
            icon={<Smartphone className="size-6" aria-hidden="true" />}
            title="Get it on Google Play"
            subtitle="Numblop for Android"
            featured
            external
          />
          <LinkCard
            href={WEB_BUILD_URL}
            icon={<Gamepad2 className="size-6" aria-hidden="true" />}
            title="Play Numblop online"
            subtitle="Jump straight into the game"
          />
          <LinkCard
            href="/"
            icon={<Globe2 className="size-6" aria-hidden="true" />}
            title="Official website"
            subtitle="Discover how Numblop helps children learn"
          />
          <LinkCard
            href={INSTAGRAM_URL}
            icon={<Instagram className="size-6" aria-hidden="true" />}
            title="Instagram"
            subtitle="@numblopgame"
            external
          />
          <LinkCard
            href={TIKTOK_URL}
            icon={<Music2 className="size-6" aria-hidden="true" />}
            title="TikTok"
            subtitle="@numblop_game"
            external
          />
          <LinkCard
            href={YOUTUBE_CHANNEL_URL}
            icon={<Youtube className="size-6" aria-hidden="true" />}
            title="YouTube"
            subtitle="Videos, tips and Numblop adventures"
            external
          />
          <LinkCard
            href={FACEBOOK_URL}
            icon={<Facebook className="size-6" aria-hidden="true" />}
            title="Facebook"
            subtitle="News and updates"
            external
          />
        </nav>

        <p className="mt-8 text-sm font-medium text-muted-foreground">
          numblop.gutcloud.cz
        </p>
      </div>
    </main>
  )
}
