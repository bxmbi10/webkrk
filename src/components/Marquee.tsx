import { useReducedMotion } from 'framer-motion'

/**
 * Endlos laufender Textband-Streifen (Leistungs-Schlagworte).
 * Bei reduzierter Bewegung steht das Band still.
 */
export function Marquee({ items }: { items: string[] }) {
  const reducedMotion = useReducedMotion()
  const row = items.map((item, i) => (
    <span key={i} className="mx-6 inline-flex items-center gap-12 whitespace-nowrap">
      <span className="font-display text-2xl font-medium tracking-tight text-ink/70 sm:text-3xl">{item}</span>
      <svg viewBox="0 0 12 12" className="size-2.5 text-accent" aria-hidden="true">
        <rect width="12" height="12" fill="currentColor" transform="rotate(45 6 6)" />
      </svg>
    </span>
  ))

  return (
    <div className="overflow-hidden border-y border-line bg-paper py-6" aria-hidden="true">
      <div
        className={`flex w-max ${reducedMotion ? '' : 'animate-marquee'}`}
        style={reducedMotion ? undefined : { animationDuration: `${items.length * 6}s` }}
      >
        <div className="flex shrink-0">{row}</div>
        <div className="flex shrink-0">{row}</div>
      </div>
    </div>
  )
}
