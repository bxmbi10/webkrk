import { motion, useReducedMotion } from 'framer-motion'
import { useSEO } from '../hooks/useSEO'
import { Reveal } from '../components/Reveal'
import { TextReveal } from '../components/TextReveal'
import { ContactCTA } from '../components/ContactCTA'

/**
 * Partner-Seite (Platzhalter-Struktur).
 *
 * HINWEIS FÜR DIE PFLEGE: Die Partner der alten Website konnten nicht
 * ausgelesen werden. Die Einträge unten sind generische Beispiele –
 * einfach Name, Fachgebiet, Ort und ggf. Website austauschen oder
 * Einträge ergänzen/entfernen. Logos können das Kürzel ersetzen
 * (siehe Kommentar im PartnerCard-Code).
 */

interface PartnerEntry {
  name: string
  field: string
  location: string
  url?: string
}

const partners: PartnerEntry[] = [
  { name: 'Partnername einfügen', field: 'Tragwerksplanung / Statik', location: 'Ort' },
  { name: 'Partnername einfügen', field: 'Energieberatung / Bauphysik', location: 'Ort' },
  { name: 'Partnername einfügen', field: 'Vermessung', location: 'Ort' },
  { name: 'Partnername einfügen', field: 'Brandschutz', location: 'Ort' },
  { name: 'Partnername einfügen', field: 'Haustechnik-Planung (HLS / Elektro)', location: 'Ort' },
  { name: 'Partnername einfügen', field: 'Bauunternehmen / Ausführung', location: 'Ort' },
]

export default function Partner() {
  useSEO(
    'Partner – Architekturbüro Kurok, Bad Nenndorf',
    'Kooperationspartner des Architekturbüros Kurok: Fachplaner und Spezialisten für Statik, Energieberatung, Vermessung und mehr.',
  )

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
        <Reveal from="none">
          <p className="kicker mb-4">Partner</p>
        </Reveal>
        <TextReveal
          text="Gut geplant ist Teamarbeit."
          className="headline max-w-4xl text-5xl sm:text-7xl"
          delay={0.1}
        />
        <Reveal delay={0.35}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Kein Bauvorhaben entsteht allein. Für Statik, Energie, Vermessung und Ausführung
            arbeitet das Büro seit Jahren mit einem eingespielten Netzwerk aus Fachplanern
            und Handwerksbetrieben der Region zusammen.
          </p>
        </Reveal>

        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner, i) => (
            <PartnerCard key={i} partner={partner} delay={(i % 3) * 0.08} />
          ))}
        </ul>

        <Reveal delay={0.2}>
          <p className="mt-12 rounded-xl border border-dashed border-ink/20 bg-paper-dim/50 p-6 text-sm leading-relaxed text-ink-faint">
            Platzhalter-Sektion: Die konkreten Kooperationspartner werden hier eingepflegt
            (Name, Fachgebiet, Ort, optional Logo und Website-Link).
          </p>
        </Reveal>
      </section>

      <ContactCTA />
    </>
  )
}

function PartnerCard({ partner, delay }: { partner: PartnerEntry; delay: number }) {
  const reducedMotion = useReducedMotion()
  const initials = partner.field
    .split(/[\s/]+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

  return (
    <motion.li
      className="group flex h-full flex-col rounded-xl border border-line bg-paper p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40"
      initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Logo-Platzhalter: durch <img src="/partner/logo.svg" …> ersetzen */}
      <div className="blueprint mb-5 flex size-14 items-center justify-center rounded-lg border border-line font-display text-sm font-bold text-ink/40">
        {initials}
      </div>
      <h2 className="font-display text-lg font-semibold tracking-tight">{partner.name}</h2>
      <p className="mt-1 text-sm font-medium text-accent">{partner.field}</p>
      <p className="mt-2 text-sm text-ink-faint">{partner.location}</p>
      {partner.url && (
        <a
          href={partner.url}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline mt-4 w-fit text-sm font-medium text-ink hover:text-accent"
        >
          Website besuchen
        </a>
      )}
    </motion.li>
  )
}
