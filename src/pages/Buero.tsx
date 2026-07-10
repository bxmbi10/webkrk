import { useRef } from 'react'
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion'
import { useSEO } from '../hooks/useSEO'
import { Reveal } from '../components/Reveal'
import { TextReveal } from '../components/TextReveal'
import { SectionHeading } from '../components/SectionHeading'
import { PlaceholderImage } from '../components/PlaceholderImage'
import { ContactCTA } from '../components/ContactCTA'
import { timeline } from '../data/timeline'
import { site } from '../data/site'

export default function Buero() {
  useSEO(
    'Büro & Profil – Architekturbüro Kurok, Bad Nenndorf',
    'Henning Kurok, Dipl.-Ing. (FH) Architekt: Werdegang, Philosophie und Arbeitsweise des Architekturbüros Kurok in Bad Nenndorf.',
  )

  return (
    <>
      {/* Intro mit Portrait */}
      <section className="mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
        <div className="grid items-start gap-12 lg:grid-cols-[3fr_2fr] lg:gap-20">
          <div>
            <Reveal from="none">
              <p className="kicker mb-4">Büro & Profil</p>
            </Reveal>
            <TextReveal
              text="Architektur ist Vertrauenssache."
              className="headline text-5xl sm:text-6xl lg:text-7xl"
              delay={0.1}
            />
            <Reveal delay={0.35}>
              <p className="mt-8 max-w-xl text-xl leading-relaxed text-ink sm:text-2xl">
                Wer baut, trifft Entscheidungen für Jahrzehnte. Deshalb beginnt jedes Projekt
                bei uns mit Zuhören – und endet erst, wenn alles so funktioniert, wie es
                gedacht war.
              </p>
            </Reveal>
            <Reveal delay={0.45}>
              <div className="mt-10 flex flex-col gap-6 text-lg leading-relaxed text-ink-soft">
                <p>
                  {site.owner}, {site.ownerTitle}, führt das Büro seit 2003 in {site.city}.
                  Die Bandbreite reicht vom Einfamilienhaus über Sanierungen im Bestand bis
                  zur Projektierung von Gewerbeobjekten – ergänzt um Visualisierung,
                  Bestandsaufnahme und Feuerwehrplanung.
                </p>
                <p>
                  Drei Grundsätze prägen die Arbeitsweise: <strong className="font-semibold text-ink">erst analysieren, dann
                  modernisieren</strong> – Entscheidungen brauchen belastbare Grundlagen.{' '}
                  <strong className="font-semibold text-ink">Vorher wissen, wie es hinterher aussieht</strong> – Visualisierung
                  schafft Sicherheit. Und: <strong className="font-semibold text-ink">ein Ansprechpartner, kurze Wege</strong> –
                  vom ersten Gespräch bis zur Übergabe.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal from="right" className="lg:sticky lg:top-28">
            <figure>
              <div className="overflow-hidden rounded-xl">
                <PlaceholderImage label="Portrait Henning Kurok" aspect="4/5" />
              </div>
              <figcaption className="mt-4 text-sm text-ink-faint">
                {site.owner} · {site.ownerTitle}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <Timeline />
      <ContactCTA />
    </>
  )
}

/* ------------------------------------------------------ Werdegang-Timeline */

function Timeline() {
  const reducedMotion = useReducedMotion()
  const ref = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.6'] })
  const lineProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 25 })

  return (
    <section className="bg-paper-dim/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          kicker="Werdegang"
          title="Vom Reißbrett zum eigenen Büro."
          intro="Ausbildung, Studium und Stationen in etablierten Planungsbüros – die Grundlage für über zwanzig Jahre Selbstständigkeit."
        />

        <ol ref={ref} className="relative mx-auto mt-20 flex max-w-3xl flex-col gap-14 pl-10 sm:pl-14">
          {/* Vertikale Linie: zeichnet sich beim Scrollen */}
          <div className="absolute bottom-2 left-[11px] top-2 w-px bg-line sm:left-[15px]" aria-hidden="true" />
          {!reducedMotion && (
            <motion.div
              className="absolute left-[11px] top-2 w-px origin-top bg-accent sm:left-[15px]"
              style={{ scaleY: lineProgress, height: 'calc(100% - 16px)' }}
              aria-hidden="true"
            />
          )}

          {timeline.map((entry, i) => (
            <motion.li
              key={i}
              className="relative"
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: -36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
                {/* Punkt auf der Linie */}
                <span
                  className={`absolute -left-10 top-1.5 flex size-[23px] items-center justify-center rounded-full border-2 bg-paper sm:-left-14 sm:size-[31px] ${
                    entry.highlight ? 'border-accent' : 'border-line'
                  }`}
                  aria-hidden="true"
                >
                  <span className={`size-1.5 rounded-full sm:size-2 ${entry.highlight ? 'bg-accent' : 'bg-ink-faint'}`} />
                </span>

                <p className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-accent">
                  {entry.period}
                </p>
                <h3 className="mt-1.5 font-display text-2xl font-semibold tracking-tight">{entry.title}</h3>
                {entry.detail && <p className="mt-2 max-w-lg leading-relaxed text-ink-soft">{entry.detail}</p>}
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
