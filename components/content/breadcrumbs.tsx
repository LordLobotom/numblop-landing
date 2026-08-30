import { ChevronRight } from 'lucide-react'
import type { Crumb } from '@/components/structured-data'

/**
 * Visible breadcrumbs. The matching `BreadcrumbList` JSON-LD is emitted
 * separately by the page — Google wants the markup to describe a trail the user
 * can actually see, so the two always ship together.
 */
export function Breadcrumbs({
  crumbs,
  label,
}: {
  crumbs: Crumb[]
  label: string
}) {
  return (
    <nav aria-label={label}>
      <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1
          return (
            <li key={crumb.path} className="flex items-center gap-1">
              {index > 0 && (
                <ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              )}
              {isLast ? (
                <span aria-current="page">{crumb.name}</span>
              ) : (
                <a href={crumb.path} className="hover:text-accent hover:underline">
                  {crumb.name}
                </a>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
