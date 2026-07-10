import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { useSEO } from '../hooks/useSEO'
import { TextReveal } from '../components/TextReveal'
import { Reveal } from '../components/Reveal'
import { MagneticButton, Arrow } from '../components/MagneticButton'
import { SectionHeading } from '../components/SectionHeading'
import { ServiceIcon } from '../components/ServiceIcon'
import { Marquee } from '../components/Marquee'
import { ContactCTA } from '../components/ContactCTA'
import { PlaceholderImage, ProjectImage } from '../components/PlaceholderImage'
import { services } from '../data/services'
import { featuredProjects, getCategory } from '../data/projects'
import { site } from '../data/site'

export default function Home() {
  useSEO(
    'Architekturbüro Kurok – Architekt in Bad Nenndorf | Neubau, Sanierung, Projektsteuerung',
    'Architekturbüro Henning Kurok in Bad Nenndorf: Planung für Neubau, Umbau und Sanierung, Projektsteuerung, Bauherrenberatung, Visualisierung und Feuerwehrplanung.',
  )

  return (
    <>
      <Hero />
      <Marquee
        items={[
          'Neubau',
          'Sanierung',
          'Projektsteuerung',
          'Bauherrenberatung',
          'Visualisierung',
          'Bestandsaufnahme',
          'Feuerwehrplanung',
          'Projektentwicklung',
        ]}
      />
      <Services />
      <FeaturedProjects />
      <OfficeTeaser />
      <ContactCTA />
    </>
  )
}

/* ------------------------------------------------------------------ Hero */

function Hero() {
  const reducedMotion = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', reducedMotion ? '0%' : '18%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', reducedMotion ? '0%' : '-30%'])

  return (
    <section ref={ref} className="relative overflow-hidden pt-32 sm:pt-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div style={{ y: textY }}>
          <Reveal from="none">
            <p className="kicker mb-6">Architekturbüro · {site.city}</p>
          </Reveal>
          <TextReveal
            text="Räume, die zu Ihrem Leben passen."
            className="headline max-w-5xl text-5xl sm:text-7xl lg:text-8xl"
            delay={0.1}
          />
          <Reveal delay={0.5}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
              Vom ersten Strich bis zur Schlüsselübergabe: {site.owner} plant, steuert und
              begleitet Bauvorhaben in {site.city} und der Region Hannover – seit 2003.
            </p>
          </Reveal>
          <Reveal delay={0.65}>
            <div className="mt-10 flex flex-wrap gap-4">
              <MagneticButton to="/referenzen">
                Referenzen ansehen <Arrow />
              </MagneticButton>
              <MagneticButton to="/kontakt" variant="outline">
                Projekt anfragen
              </MagneticButton>
            </div>
          </Reveal>
        </motion.div>

        {/* Hero-Bild mit Parallax */}
        <div className="relative mt-16 overflow-hidden rounded-t-2xl sm:mt-20" style={{ aspectRatio: '16/8' }}>
          <motion.div className="absolute inset-0 scale-[1.15]" style={{ y: imageY }}>
            <PlaceholderImage
              label="Hero-Motiv: Referenzprojekt in großer Breite (z. B. Hausansicht in Abendstimmung)"
              fill
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------- Leistungen */

function Services() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        kicker="Leistungen"
        title="Alles aus einer Hand."
        intro="Acht Leistungsbereiche, ein Anspruch: sorgfältige Planung, klare Kommunikation und Ergebnisse, die im Alltag bestehen."
      />

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => (
          <Reveal key={service.id} delay={(i % 4) * 0.08} className="h-full">
            <motion.article
              className="group flex h-full flex-col rounded-xl border border-line bg-paper p-7 transition-colors duration-300 hover:border-accent/40"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mb-5 flex size-14 items-center justify-center rounded-full bg-accent-soft text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-paper">
                <ServiceIcon name={service.icon} className="size-7" />
              </div>
              <h3 className="font-display text-lg font-semibold tracking-tight">{service.title}</h3>
              <p className="mt-1 text-sm font-medium text-accent">{service.claim}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{service.description}</p>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ------------------------------------------------- Ausgewählte Projekte */

function FeaturedProjects() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="bg-paper-dim/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            kicker="Referenzen"
            title="Ausgewählte Projekte."
          />
          <Reveal delay={0.2}>
            <MagneticButton to="/referenzen" variant="outline">
              Alle Referenzen <Arrow />
            </MagneticButton>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col gap-20 sm:gap-28">
          {featuredProjects.slice(0, 4).map((project, i) => (
            <Reveal key={project.slug} from={i % 2 === 0 ? 'left' : 'right'}>
              <Link
                to={`/referenzen/${project.slug}`}
                className={`group grid items-center gap-8 md:grid-cols-2 md:gap-14 ${
                  i % 2 === 1 ? 'md:[direction:rtl]' : ''
                }`}
              >
                <div className="overflow-hidden rounded-xl [direction:ltr]">
                  <motion.div
                    whileHover={reducedMotion ? undefined : { scale: 1.05 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <ProjectImage
                      src={project.images[0]?.src}
                      alt={project.images[0]?.alt ?? project.title}
                      aspect="3/2"
                    />
                  </motion.div>
                </div>
                <div className="[direction:ltr]">
                  <p className="kicker mb-3">{getCategory(project.category).label}</p>
                  <h3 className="headline text-3xl transition-colors duration-300 group-hover:text-accent sm:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 max-w-md leading-relaxed text-ink-soft">{project.teaser}</p>
                  <p className="mt-6 flex items-center gap-2 font-display text-sm font-semibold text-ink">
                    Projekt ansehen
                    <Arrow className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------- Büro-Statement */

function OfficeTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid items-center gap-12 md:grid-cols-[2fr_3fr]">
        <Reveal from="left">
          <div className="overflow-hidden rounded-xl">
            <PlaceholderImage label="Portrait Henning Kurok oder Büro-Impression" aspect="4/5" />
          </div>
        </Reveal>
        <div>
          <SectionHeading
            kicker="Das Büro"
            title="Persönlich. Präzise. Verlässlich."
          />
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Hinter jedem Projekt steht ein direkter Ansprechpartner: {site.owner},
              {' '}{site.ownerTitle}. Kurze Wege, ehrliche Beratung und die Erfahrung aus
              über zwanzig Jahren Planungs- und Baupraxis – vom Carport bis zum Gewerbeobjekt.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-8">
              <MagneticButton to="/buero" variant="outline">
                Büro kennenlernen <Arrow />
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
