import { useState } from 'react'
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from 'framer-motion'
import { useSEO } from '../hooks/useSEO'
import { TextReveal } from '../components/TextReveal'
import { Reveal } from '../components/Reveal'
import { ProjectCard } from '../components/ProjectCard'
import { ContactCTA } from '../components/ContactCTA'
import { categories, projects, type CategoryId } from '../data/projects'

type Filter = CategoryId | 'alle'

/** Kachelgrößen für das dynamische Grid (12-Spalten-Raster ab md). */
const sizeClasses: Record<string, { cell: string; aspect: string }> = {
  large: { cell: 'md:col-span-7 md:row-span-2', aspect: '4/3' },
  wide: { cell: 'md:col-span-7', aspect: '16/9' },
  tall: { cell: 'md:col-span-5 md:row-span-2', aspect: '4/5' },
  standard: { cell: 'md:col-span-5', aspect: '3/2' },
}

export default function Referenzen() {
  useSEO(
    'Referenzen – Architekturbüro Kurok, Bad Nenndorf',
    'Referenzprojekte des Architekturbüros Kurok: Wohnhäuser, Sanierungen, Carports, Gewerbeobjekte, Visualisierungen und Feuerwehrplanungen.',
  )

  const reducedMotion = useReducedMotion()
  const [filter, setFilter] = useState<Filter>('alle')
  const filtered = filter === 'alle' ? projects : projects.filter((p) => p.category === filter)

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
        <Reveal from="none">
          <p className="kicker mb-4">Referenzen</p>
        </Reveal>
        <TextReveal
          text="Gebaut. Geplant. Gedacht."
          className="headline max-w-4xl text-5xl sm:text-7xl"
          delay={0.1}
        />
        <Reveal delay={0.35}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Eine Auswahl realisierter Projekte und Planungen – vom Einfamilienhaus über
            Gewerbeobjekte bis zur Feuerwehrplanung. Filtern Sie nach Kategorie.
          </p>
        </Reveal>

        {/* Filter */}
        <Reveal delay={0.45}>
          <div className="mt-12 flex flex-wrap gap-2" role="group" aria-label="Referenzen nach Kategorie filtern">
            <FilterPill active={filter === 'alle'} onClick={() => setFilter('alle')} label={`Alle (${projects.length})`} />
            {categories.map((cat) => {
              const count = projects.filter((p) => p.category === cat.id).length
              if (count === 0) return null
              return (
                <FilterPill
                  key={cat.id}
                  active={filter === cat.id}
                  onClick={() => setFilter(cat.id)}
                  label={`${cat.label} (${count})`}
                />
              )
            })}
          </div>
        </Reveal>

        {/* Dynamisches Grid mit Layout-Animation beim Filterwechsel */}
        <LayoutGroup>
          <motion.ul layout className="mt-14 grid auto-rows-auto grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-12">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => {
                const size = sizeClasses[project.size]
                return (
                  <motion.li
                    key={project.slug}
                    layout={!reducedMotion}
                    initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className={`sm:col-span-1 ${size.cell}`}
                  >
                    <ProjectCard project={project} aspect={size.aspect} />
                  </motion.li>
                )
              })}
            </AnimatePresence>
          </motion.ul>
        </LayoutGroup>
      </section>

      <ContactCTA />
    </>
  )
}

function FilterPill({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-4 py-2 font-display text-sm font-medium transition-colors duration-300 ${
        active
          ? 'border-ink bg-ink text-paper'
          : 'border-line bg-paper text-ink-soft hover:border-accent hover:text-accent'
      }`}
    >
      {label}
    </button>
  )
}
