import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { site } from '../data/site'

const links = [
  { to: '/', label: 'Start' },
  { to: '/referenzen', label: 'Referenzen' },
  { to: '/buero', label: 'Büro' },
  { to: '/partner', label: 'Partner' },
  { to: '/kontakt', label: 'Kontakt' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Menü bei Routenwechsel schließen
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled && !menuOpen ? 'bg-paper/85 shadow-[0_1px_0_0_var(--color-line)] backdrop-blur-md' : ''
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 sm:py-5" aria-label="Hauptnavigation">
        <Link to="/" className="group relative z-[70] flex items-baseline gap-2" aria-label="Architekturbüro Kurok – Startseite">
          <span className={`font-display text-xl font-bold tracking-tight transition-colors ${menuOpen ? 'text-paper' : 'text-ink'}`}>KUROK</span>
          <span className={`hidden text-[0.7rem] font-medium uppercase tracking-[0.2em] sm:inline ${menuOpen ? 'text-paper/60' : 'text-ink-faint'}`}>
            Architekturbüro
          </span>
        </Link>

        {/* Desktop-Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `link-underline font-display text-sm font-medium tracking-wide transition-colors ${
                    isActive ? 'text-accent' : 'text-ink hover:text-accent'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              href={site.phoneHref}
              className="rounded-full border border-ink/20 px-5 py-2.5 font-display text-sm font-semibold transition-colors hover:border-accent hover:bg-accent hover:text-paper"
            >
              {site.phone}
            </a>
          </li>
        </ul>

        {/* Mobile: Burger */}
        <button
          className="relative z-[70] flex size-11 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
        >
          <span className={`h-0.5 w-6 rounded transition-all duration-300 ${menuOpen ? 'translate-y-1 rotate-45 bg-paper' : 'bg-ink'}`} />
          <span className={`h-0.5 w-6 rounded transition-all duration-300 ${menuOpen ? '-translate-y-1 -rotate-45 bg-paper' : 'bg-ink'}`} />
        </button>
      </nav>

      {/* Mobile: Vollbild-Menü */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col justify-between bg-ink px-6 pb-10 pt-28 md:hidden"
            initial={{ opacity: 0, y: reducedMotion ? 0 : -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reducedMotion ? 0 : -24 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <ul className="flex flex-col gap-2">
              {links.map((link, i) => (
                <motion.li
                  key={link.to}
                  initial={reducedMotion ? {} : { opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `headline block py-2 text-4xl ${isActive ? 'text-accent' : 'text-paper'}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
            <div className="flex flex-col gap-1 text-paper/60">
              <a href={site.phoneHref} className="text-lg text-paper">{site.phone}</a>
              <a href={site.emailHref} className="text-lg text-paper">{site.email}</a>
              <p className="mt-3 text-sm">{site.street} · {site.zip} {site.city}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
