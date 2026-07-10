interface PlaceholderImageProps {
  /** Alt-/Beschriftungstext, beschreibt das später einzusetzende Motiv. */
  label: string
  /** Seitenverhältnis, z. B. '3/2'. Bei fill=true ignoriert. */
  aspect?: string
  /** Füllt den Container komplett (für Hero-Flächen mit fester Höhe). */
  fill?: boolean
  className?: string
  /** Beschriftung ausblenden (für sehr kleine Kacheln). */
  hideLabel?: boolean
}

/**
 * Klar gekennzeichneter Bild-Platzhalter im Blaupausen-Stil.
 *
 * Echte Fotos einsetzen: Platzhalter durch ein <img loading="lazy" …>
 * ersetzen bzw. in den Projektdaten (src/data/projects.ts) den `src`-Pfad
 * setzen – Layout und Seitenverhältnisse sind bereits darauf ausgelegt.
 */
export function PlaceholderImage({
  label,
  aspect = '3/2',
  fill = false,
  className = '',
  hideLabel = false,
}: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={`Platzhalter: ${label}`}
      className={`blueprint overflow-hidden bg-paper-dim ${fill ? 'absolute inset-0' : 'relative'} ${className}`}
      style={fill ? undefined : { aspectRatio: aspect }}
    >
      {/* Eckmarken im Zeichnungsstil */}
      <svg className="absolute inset-0 h-full w-full text-ink/15" aria-hidden="true">
        <rect
          x="10"
          y="10"
          style={{ width: 'calc(100% - 20px)', height: 'calc(100% - 20px)' }}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="6 6"
        />
      </svg>
      {!hideLabel && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
          <svg viewBox="0 0 24 24" fill="none" className="size-6 text-ink/30" aria-hidden="true">
            <rect x="3" y="4" width="18" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
            <circle cx="9" cy="9.5" r="1.8" stroke="currentColor" strokeWidth="1.4" />
            <path d="m5 18 5-5 3 3 3.5-3.5L21 17" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          </svg>
          <span className="font-display text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-ink/40">
            Projektbild einfügen
          </span>
          <span className="max-w-[26ch] text-xs leading-snug text-ink/35">{label}</span>
        </div>
      )}
    </div>
  )
}

/**
 * Rendert entweder ein echtes Bild (lazy, responsive) oder den Platzhalter.
 * Wird überall dort genutzt, wo später Projektfotos erscheinen sollen.
 */
export function ProjectImage({
  src,
  alt,
  aspect = '3/2',
  className = '',
  hideLabel = false,
  eager = false,
}: {
  src?: string
  alt: string
  aspect?: string
  className?: string
  hideLabel?: boolean
  /** true für above-the-fold-Bilder (kein lazy loading). */
  eager?: boolean
}) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className={`h-full w-full object-cover ${className}`}
        style={{ aspectRatio: aspect }}
      />
    )
  }
  return <PlaceholderImage label={alt} aspect={aspect} className={className} hideLabel={hideLabel} />
}
