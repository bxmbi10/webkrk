import type { ReactNode } from 'react'
import type { ServiceIconName } from '../data/services'

/** Handgezeichnete Linien-Icons für die acht Leistungsbereiche. */
export function ServiceIcon({ name, className = 'size-8' }: { name: ServiceIconName; className?: string }) {
  const stroke = {
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    fill: 'none',
  }

  const icons: Record<ServiceIconName, ReactNode> = {
    // Haus mit Grundriss-Andeutung
    plan: (
      <>
        <path d="M4 13 16 4l12 9" {...stroke} />
        <path d="M7 12v14h18V12" {...stroke} />
        <path d="M13 26v-7h6v7" {...stroke} />
        <path d="M7 17h6M19 17h6" {...stroke} strokeDasharray="2 2.5" />
      </>
    ),
    // Zielscheibe / Steuerung
    steering: (
      <>
        <circle cx="16" cy="16" r="11" {...stroke} />
        <circle cx="16" cy="16" r="6" {...stroke} />
        <circle cx="16" cy="16" r="1.4" fill="currentColor" stroke="none" />
        <path d="M16 2.5V7M16 25v4.5M2.5 16H7M25 16h4.5" {...stroke} />
      </>
    ),
    // Sprechblase mit Häkchen
    advice: (
      <>
        <path d="M5 7.5A2.5 2.5 0 0 1 7.5 5h17A2.5 2.5 0 0 1 27 7.5v11a2.5 2.5 0 0 1-2.5 2.5H14l-6 6v-6H7.5A2.5 2.5 0 0 1 5 18.5v-11Z" {...stroke} />
        <path d="m11.5 13 3 3 6-6" {...stroke} />
      </>
    ),
    // Zeichendreieck + Stift
    execution: (
      <>
        <path d="M4 26 18 6v20H4Z" {...stroke} />
        <path d="M10 26v-5.5M14 26v-9" {...stroke} />
        <path d="m21.5 10.5 5-5L29 8l-5 5-3.2.7.7-3.2Z" {...stroke} />
      </>
    ),
    // Gebäude mit Wachstumspfeil
    development: (
      <>
        <path d="M4 27h24" {...stroke} />
        <path d="M7 27V14h7v13M19 27V9h7v18" {...stroke} />
        <path d="M10 10.5 16 5l4 3.5L26 3" {...stroke} />
        <path d="M22.5 3H26v3.5" {...stroke} />
      </>
    ),
    // Auge / Perspektive
    visualization: (
      <>
        <path d="M2.5 16S7.5 7.5 16 7.5 29.5 16 29.5 16 24.5 24.5 16 24.5 2.5 16 2.5 16Z" {...stroke} />
        <circle cx="16" cy="16" r="4.5" {...stroke} />
        <circle cx="17.5" cy="14.5" r="1.2" fill="currentColor" stroke="none" />
      </>
    ),
    // Maßband / Zollstock
    survey: (
      <>
        <rect x="3" y="11" width="26" height="10" rx="2" {...stroke} />
        <path d="M8 11v4M13 11v6M18 11v4M23 11v6" {...stroke} />
      </>
    ),
    // Flamme im Schutzschild
    fire: (
      <>
        <path d="M16 3 27 7v8c0 7-4.5 11.5-11 14C9.5 26.5 5 22 5 15V7l11-4Z" {...stroke} />
        <path d="M16 10c2.8 2.2 4.2 4.4 4.2 6.6A4.2 4.2 0 0 1 16 21a4.2 4.2 0 0 1-4.2-4.4c0-1.4.6-2.7 1.7-3.9.2 1 .7 1.7 1.5 2.2-.2-1.8.1-3.4 1-4.9Z" {...stroke} />
      </>
    ),
  }

  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      {icons[name]}
    </svg>
  )
}
