import { Instagram, ShieldCheck } from 'lucide-react'
import type { Dictionary, Locale } from '@/lib/i18n/dictionary'

export function SiteFooter({
  dict,
  locale,
}: {
  dict: Dictionary
  locale: Locale
}) {
  return (
    <footer className="border-t border-border/60 bg-muted/40">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-10 text-center">
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
          {dict.footer.privacy}
        </p>
        <a
          href="https://www.instagram.com/numblopgame"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-medium text-accent hover:underline"
        >
          <Instagram className="h-5 w-5" aria-hidden="true" />
          {dict.footer.instagram}
        </a>
        <a
          href={`/${locale}/privacy/`}
          className="text-sm font-medium text-muted-foreground hover:text-accent hover:underline"
        >
          {dict.footer.privacyLink}
        </a>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {dict.footer.madeIn}
        </p>
      </div>
    </footer>
  )
}
