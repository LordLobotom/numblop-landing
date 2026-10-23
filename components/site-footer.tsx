import { Facebook, Instagram, Music2, ShieldCheck, Youtube } from 'lucide-react'
import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  TIKTOK_URL,
  YOUTUBE_CHANNEL_URL,
} from '@/lib/links'
import { blogPath, getLocaleContent, guideLinks } from '@/lib/content'
import type { Dictionary, Locale } from '@/lib/i18n/dictionary'
import { getAboutContent } from '@/lib/i18n/about'

export function SiteFooter({
  dict,
  locale,
}: {
  dict: Dictionary
  locale: Locale
}) {
  const { ui } = getLocaleContent(locale)
  const about = getAboutContent(locale)

  return (
    <footer className="border-t border-border/60 bg-muted/40">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-10 text-center">
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
          {dict.footer.privacy}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-medium text-accent hover:underline"
          >
            <Instagram className="h-5 w-5" aria-hidden="true" />
            {dict.footer.instagram}
          </a>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-medium text-accent hover:underline"
          >
            <Facebook className="h-5 w-5" aria-hidden="true" />
            Facebook
          </a>
          <a
            href={YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-medium text-accent hover:underline"
          >
            <Youtube className="h-5 w-5" aria-hidden="true" />
            {dict.footer.youtube}
          </a>
          <a
            href={TIKTOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-medium text-accent hover:underline"
          >
            <Music2 className="h-5 w-5" aria-hidden="true" />
            TikTok
          </a>
        </div>
        {/* Kept to the three guides plus the blog. Enough for a crawler to
            reach every content page from anywhere on the site, short enough
            not to become a keyword dump. */}
        <nav
          aria-label={ui.guides}
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
        >
          {guideLinks(locale).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-accent hover:underline"
            >
              {link.label}
            </a>
          ))}
          <a
            href={blogPath(locale)}
            className="text-sm font-medium text-muted-foreground hover:text-accent hover:underline"
          >
            {ui.blog}
          </a>
        </nav>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <a
            href={`/${locale}/about/`}
            className="text-sm font-medium text-muted-foreground hover:text-accent hover:underline"
          >
            {about.navLabel}
          </a>
          <a
            href={`/${locale}/privacy/`}
            className="text-sm font-medium text-muted-foreground hover:text-accent hover:underline"
          >
            {dict.footer.privacyLink}
          </a>
          <a
            href={`/${locale}/contact/`}
            className="text-sm font-medium text-muted-foreground hover:text-accent hover:underline"
          >
            {dict.footer.contactLink}
          </a>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {dict.footer.madeIn}
        </p>
      </div>
    </footer>
  )
}
