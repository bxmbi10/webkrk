import { useState, type FormEvent, type ReactNode } from 'react'
import { useSEO } from '../hooks/useSEO'
import { Reveal } from '../components/Reveal'
import { TextReveal } from '../components/TextReveal'
import { MagneticButton, Arrow } from '../components/MagneticButton'
import { site } from '../data/site'

interface FormState {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  privacy: boolean
}

const initialForm: FormState = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  privacy: false,
}

export default function Kontakt() {
  useSEO(
    'Kontakt – Architekturbüro Kurok, Bad Nenndorf',
    'Kontakt zum Architekturbüro Kurok in Bad Nenndorf: Telefon 0177 8248600, info@kurok-architekt.de, Am Kirchbrink 22, 31542 Bad Nenndorf.',
  )

  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
      <Reveal from="none">
        <p className="kicker mb-4">Kontakt</p>
      </Reveal>
      <TextReveal
        text="Erzählen Sie uns von Ihrem Vorhaben."
        className="headline max-w-4xl text-5xl sm:text-7xl"
        delay={0.1}
      />
      <Reveal delay={0.35}>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
          Ob Neubau, Sanierung oder erste Beratung: Das Erstgespräch ist unverbindlich.
          Rufen Sie an, schreiben Sie eine E-Mail – oder nutzen Sie das Formular.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-12 lg:grid-cols-[3fr_2fr] lg:gap-20">
        <Reveal>
          <ContactForm />
        </Reveal>

        <div className="flex flex-col gap-8">
          <Reveal from="right">
            <div className="rounded-xl border border-line bg-paper-dim/50 p-7">
              <h2 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink-faint">
                Direkter Draht
              </h2>
              <address className="mt-5 flex flex-col gap-3 not-italic">
                <p className="font-display text-lg font-semibold">{site.owner}</p>
                <p className="text-ink-soft">
                  {site.street}
                  <br />
                  {site.zip} {site.city}
                </p>
                <a href={site.phoneHref} className="link-underline w-fit text-lg font-medium hover:text-accent">
                  {site.phone}
                </a>
                <a href={site.emailHref} className="link-underline w-fit text-lg font-medium hover:text-accent">
                  {site.email}
                </a>
              </address>
            </div>
          </Reveal>

          <Reveal from="right" delay={0.1}>
            <MapCard />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------- Formular */

function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [submitted, setSubmitted] = useState(false)

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }))
    setErrors((e) => ({ ...e, [key]: undefined }))
  }

  const validate = (): boolean => {
    const next: typeof errors = {}
    if (form.name.trim().length < 2) next.name = 'Bitte geben Sie Ihren Namen an.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()))
      next.email = 'Bitte geben Sie eine gültige E-Mail-Adresse an.'
    if (!form.subject) next.subject = 'Bitte wählen Sie ein Thema.'
    if (form.message.trim().length < 10)
      next.message = 'Bitte beschreiben Sie Ihr Anliegen kurz (mind. 10 Zeichen).'
    if (!form.privacy) next.privacy = 'Bitte stimmen Sie der Datenverarbeitung zu.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    // TODO (Versand-Logik, abhängig vom Hosting):
    // Das Formular ist bewusst ohne Backend implementiert. Je nach Hosting
    // eine der folgenden Optionen anbinden:
    //   a) Eigener Endpoint / PHP-Mailer:
    //      fetch('/api/kontakt', { method: 'POST', body: JSON.stringify(form) })
    //   b) Formulardienst (z. B. Formspree, Web3Forms):
    //      action-URL setzen und method="POST" verwenden.
    //   c) Netlify Forms: attribute data-netlify="true" ergänzen.
    // Bis dahin: Bestätigung anzeigen und Daten NICHT versenden.
    console.info('Kontaktformular (noch ohne Versand):', form)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex h-full min-h-72 flex-col items-start justify-center rounded-xl border border-accent/30 bg-accent-soft p-8" role="status">
        <p className="font-display text-2xl font-semibold text-accent-strong">Vielen Dank!</p>
        <p className="mt-3 max-w-md leading-relaxed text-ink-soft">
          Ihre Nachricht ist angekommen. Sie erhalten in der Regel innerhalb von 1–2 Werktagen
          eine Rückmeldung. In dringenden Fällen erreichen Sie das Büro unter{' '}
          <a href={site.phoneHref} className="font-medium text-accent-strong underline">{site.phone}</a>.
        </p>
        <button
          className="link-underline mt-6 font-display text-sm font-semibold text-ink"
          onClick={() => {
            setForm(initialForm)
            setSubmitted(false)
          }}
        >
          Weitere Nachricht schreiben
        </button>
      </div>
    )
  }

  const inputClass = (error?: string) =>
    `w-full rounded-lg border bg-paper px-4 py-3 text-ink placeholder:text-ink-faint/70 transition-colors focus:border-accent focus:outline-none ${
      error ? 'border-red-500' : 'border-line'
    }`

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name *" htmlFor="name" error={errors.name}>
          <input
            id="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(e) => set('name', e.target.value)}
            className={inputClass(errors.name)}
            placeholder="Vor- und Nachname"
            aria-invalid={!!errors.name}
          />
        </Field>
        <Field label="E-Mail *" htmlFor="email" error={errors.email}>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => set('email', e.target.value)}
            className={inputClass(errors.email)}
            placeholder="ihre@email.de"
            aria-invalid={!!errors.email}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Telefon (optional)" htmlFor="phone">
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => set('phone', e.target.value)}
            className={inputClass()}
            placeholder="Für schnelle Rückfragen"
          />
        </Field>
        <Field label="Thema *" htmlFor="subject" error={errors.subject}>
          <select
            id="subject"
            value={form.subject}
            onChange={(e) => set('subject', e.target.value)}
            className={inputClass(errors.subject)}
            aria-invalid={!!errors.subject}
          >
            <option value="">Bitte wählen …</option>
            <option>Neubau</option>
            <option>Umbau / Sanierung</option>
            <option>Bauherrenberatung / Kaufberatung</option>
            <option>Projektsteuerung / Bauleitung</option>
            <option>Visualisierung</option>
            <option>Bestandsaufnahme / Teilungspläne</option>
            <option>Feuerwehr- / Rettungspläne</option>
            <option>Sonstiges</option>
          </select>
        </Field>
      </div>

      <Field label="Ihre Nachricht *" htmlFor="message" error={errors.message}>
        <textarea
          id="message"
          rows={6}
          value={form.message}
          onChange={(e) => set('message', e.target.value)}
          className={inputClass(errors.message)}
          placeholder="Beschreiben Sie kurz Ihr Vorhaben: Was ist geplant, wo, in welchem Zeitrahmen?"
          aria-invalid={!!errors.message}
        />
      </Field>

      <div>
        <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-ink-soft">
          <input
            type="checkbox"
            checked={form.privacy}
            onChange={(e) => set('privacy', e.target.checked)}
            className="mt-0.5 size-4 shrink-0 accent-(--color-accent)"
            aria-invalid={!!errors.privacy}
          />
          <span>
            Ich habe die{' '}
            <a href="/datenschutz" className="underline hover:text-accent">Datenschutzerklärung</a>{' '}
            gelesen und stimme der Verarbeitung meiner Angaben zur Bearbeitung der Anfrage zu. *
          </span>
        </label>
        {errors.privacy && <p className="mt-2 text-sm text-red-600" role="alert">{errors.privacy}</p>}
      </div>

      <div className="mt-2">
        <MagneticButton type="submit">
          Nachricht senden <Arrow />
        </MagneticButton>
      </div>
    </form>
  )
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string
  htmlFor: string
  error?: string
  children: ReactNode
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block font-display text-sm font-medium">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-2 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

/* ----------------------------------------------------------------- Karte */

/**
 * DSGVO-freundliche "Karte": stilisierte Standort-Kachel mit externem
 * Routen-Link statt eingebettetem Kartendienst (keine Datenübertragung
 * an Dritte beim Seitenaufruf).
 *
 * Alternativ kann hier eine echte Karte eingebunden werden, z. B. mit
 * Leaflet + OpenStreetMap (npm i leaflet react-leaflet) – idealerweise
 * per Click-to-Load hinter einem Consent-Hinweis.
 */
function MapCard() {
  return (
    <a
      href={site.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-xl border border-line"
      aria-label="Standort in OpenStreetMap öffnen (externer Link)"
    >
      <div className="blueprint relative bg-paper-dim" style={{ aspectRatio: '4/3' }}>
        {/* Stilisierte Straßen */}
        <svg
          className="absolute inset-0 h-full w-full text-ink/10"
          viewBox="0 0 400 300"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M-20 195 Q 120 165, 220 186 T 420 156" stroke="currentColor" strokeWidth="10" fill="none" />
          <path d="M140 -10 Q 168 120, 152 310" stroke="currentColor" strokeWidth="7" fill="none" />
          <path d="M280 -10 248 310" stroke="currentColor" strokeWidth="5" fill="none" />
        </svg>
        {/* Standort-Pin */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">
          <svg viewBox="0 0 32 40" className="size-11 drop-shadow-md transition-transform duration-300 group-hover:-translate-y-1" aria-hidden="true">
            <path d="M16 1C8 1 1.5 7.5 1.5 15.5 1.5 26 16 39 16 39s14.5-13 14.5-23.5C30.5 7.5 24 1 16 1Z" fill="var(--color-accent)" />
            <circle cx="16" cy="15" r="5.5" fill="var(--color-paper)" />
          </svg>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 bg-paper p-5">
        <div>
          <p className="font-display font-semibold">{site.street}</p>
          <p className="text-sm text-ink-faint">{site.zip} {site.city}</p>
        </div>
        <span className="flex items-center gap-1.5 font-display text-sm font-semibold text-accent">
          Route planen
          <svg viewBox="0 0 16 16" fill="none" className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true">
            <path d="M4 12 12 4M6 4h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </a>
  )
}
