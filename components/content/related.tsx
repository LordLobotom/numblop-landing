import { ArrowRight } from 'lucide-react'
import type { RelatedLink } from '@/lib/content'

/**
 * Cross-links between the guides, the blog and the landing page. Generated from
 * the content registry rather than hand-authored, so a new guide shows up in
 * every sibling's list the moment it is added — and so no page ends up with a
 * keyword-stuffed link block nobody reads.
 */
export function RelatedContent({
  heading,
  links,
  /** Off when the block already opens a section of its own, as on the landing
      page, where a rule under the section padding just looks stray. */
  divider = true,
}: {
  heading: string
  links: RelatedLink[]
  divider?: boolean
}) {
  if (links.length === 0) {
    return null
  }

  return (
    <section className={divider ? 'mt-14 border-t border-border/60 pt-8' : ''}>
      <h2 className="text-lg font-semibold">{heading}</h2>
      <ul className="mt-4 grid gap-4 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="group flex h-full flex-col rounded-xl border border-border bg-card px-4 py-3 transition-colors hover:border-accent/60"
            >
              <span className="flex items-center gap-1.5 font-medium text-accent">
                {link.label}
                <ArrowRight
                  className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
              <span className="mt-1 text-sm text-muted-foreground">
                {link.excerpt}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
