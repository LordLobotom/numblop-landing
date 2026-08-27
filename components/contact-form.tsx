'use client'

import { useState } from 'react'
import { CheckCircle2, Mail, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  CONTACT_EMAIL,
  CONTACT_SUBJECT,
  WEB3FORMS_ACCESS_KEY,
  WEB3FORMS_ENDPOINT,
} from '@/lib/contact'
import type { Dictionary, Locale } from '@/lib/i18n/dictionary'

type Status = 'idle' | 'sending' | 'ok' | 'error'

export function ContactForm({
  dict,
  locale,
}: {
  dict: Dictionary
  locale: Locale
}) {
  const [status, setStatus] = useState<Status>('idle')
  const t = dict.contact

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    // Honeypot: a real person never sees this field, so anything in it is a bot.
    // Reported as success so the bot has no signal to adapt to.
    if (data.get('botcheck')) {
      setStatus('ok')
      return
    }

    setStatus('sending')
    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: CONTACT_SUBJECT,
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
          locale,
        }),
      })
      const json = await response.json()
      setStatus(response.ok && json.success ? 'ok' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'ok') {
    return (
      <div className="rounded-2xl border border-border bg-card px-6 py-8 text-center shadow-sm">
        <CheckCircle2
          className="mx-auto mb-3 h-10 w-10 text-accent"
          aria-hidden="true"
        />
        <p className="text-lg font-semibold">{t.successTitle}</p>
        <p className="mt-2 text-sm text-muted-foreground">{t.successBody}</p>
      </div>
    )
  }

  const fieldClass =
    'w-full rounded-xl border border-input bg-background px-4 text-base outline-none transition-colors placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:opacity-50'

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-2xl border border-border bg-card px-6 py-6 text-left shadow-sm"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-name" className="text-sm font-semibold">
          {t.nameLabel}
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder={t.namePlaceholder}
          disabled={status === 'sending'}
          className={`h-12 ${fieldClass}`}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-email" className="text-sm font-semibold">
          {t.emailLabel}
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          placeholder={t.emailPlaceholder}
          disabled={status === 'sending'}
          className={`h-12 ${fieldClass}`}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-message" className="text-sm font-semibold">
          {t.messageLabel}
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          placeholder={t.messagePlaceholder}
          disabled={status === 'sending'}
          className={`resize-y py-3 ${fieldClass}`}
        />
      </div>

      {/* Honeypot – hidden from people, tempting to bots. */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        style={{ display: 'none' }}
      />

      <label className="flex items-start gap-3 text-sm text-muted-foreground">
        <input
          type="checkbox"
          name="consent"
          required
          disabled={status === 'sending'}
          className="mt-1 size-4 shrink-0 accent-accent"
        />
        <span>
          {t.consent}{' '}
          <a
            href={`/${locale}/privacy/`}
            className="font-medium text-accent underline-offset-4 hover:underline"
          >
            {t.consentLink}
          </a>
          .
        </span>
      </label>

      <Button
        type="submit"
        size="lg"
        disabled={status === 'sending'}
        className="h-12 rounded-full text-base font-semibold shadow-md shadow-primary/30"
      >
        <Send className="size-4" aria-hidden="true" />
        {status === 'sending' ? t.sending : t.submit}
      </Button>

      {status === 'error' && (
        <p role="alert" className="text-sm text-destructive">
          {t.error}{' '}
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(CONTACT_SUBJECT)}`}
            className="inline-flex items-center gap-1 font-medium underline underline-offset-4"
          >
            <Mail className="size-4" aria-hidden="true" />
            {t.errorMailto}
          </a>
        </p>
      )}
    </form>
  )
}
