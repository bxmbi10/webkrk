import { Link } from 'react-router-dom'
import { site } from '../data/site'

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl font-bold tracking-tight">KUROK</p>
            <p className="mt-1 text-sm uppercase tracking-[0.2em] text-paper/50">Architekturbüro</p>
            <p className="mt-6 max-w-sm leading-relaxed text-paper/70">
              Architekturplanung, Projektsteuerung und Bauherrenberatung in Bad Nenndorf –
              persönlich, präzise und verlässlich seit 2003.
            </p>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-paper/50">Kontakt</h2>
            <address className="mt-4 flex flex-col gap-2 not-italic text-paper/80">
              <span>{site.owner}</span>
              <span>{site.street}</span>
              <span>{site.zip} {site.city}</span>
              <a href={site.phoneHref} className="link-underline w-fit hover:text-accent">{site.phone}</a>
              <a href={site.emailHref} className="link-underline w-fit hover:text-accent">{site.email}</a>
            </address>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-paper/50">Navigation</h2>
            <ul className="mt-4 flex flex-col gap-2 text-paper/80">
              <li><Link to="/referenzen" className="link-underline hover:text-accent">Referenzen</Link></li>
              <li><Link to="/buero" className="link-underline hover:text-accent">Büro & Profil</Link></li>
              <li><Link to="/partner" className="link-underline hover:text-accent">Partner</Link></li>
              <li><Link to="/kontakt" className="link-underline hover:text-accent">Kontakt</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-paper/15 pt-8 text-sm text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}, {site.city}</p>
          <ul className="flex gap-6">
            <li><Link to="/impressum" className="link-underline hover:text-paper">Impressum</Link></li>
            <li><Link to="/datenschutz" className="link-underline hover:text-paper">Datenschutz</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
