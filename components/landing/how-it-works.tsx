import { Compass, Repeat, Layers, Trophy, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import type { Dictionary } from '@/lib/i18n/dictionary'

const stepIcons = [Compass, Repeat, Layers, Trophy]

export function HowItWorks({ dict }: { dict: Dictionary }) {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-semibold sm:text-3xl">{dict.steps.heading}</h2>
        <p className="mt-3 text-muted-foreground">{dict.steps.subheading}</p>
      </div>
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {dict.steps.items.map((step, index) => {
          const Icon = stepIcons[index]
          return (
            <li key={step.title} className="relative">
              <Card className="h-full gap-4 py-5">
                <CardContent className="flex flex-col gap-3 px-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-semibold text-accent">
                      {index + 1}/4
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
              {index < dict.steps.items.length - 1 && (
                <ArrowRight
                  aria-hidden="true"
                  className="absolute -right-4 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-accent lg:block"
                />
              )}
            </li>
          )
        })}
      </ol>
    </section>
  )
}
