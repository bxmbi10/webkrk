import { useSEO } from '../hooks/useSEO'
import { Reveal } from '../components/Reveal'
import { site } from '../data/site'

/**
 * Impressum – Grundgerüst mit Platzhaltern.
 * WICHTIG: Die mit [PLATZHALTER] markierten Angaben müssen vor
 * Veröffentlichung vom Büro geprüft und vervollständigt werden
 * (Kammer, Berufsbezeichnung, USt-IdNr. etc.).
 */
export default function Impressum() {
  useSEO('Impressum – Architekturbüro Kurok')

  return (
    <section className="mx-auto max-w-3xl px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
      <Reveal from="none">
        <p className="kicker mb-4">Rechtliches</p>
        <h1 className="headline text-4xl sm:text-5xl">Impressum</h1>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-12 flex flex-col gap-10 leading-relaxed text-ink-soft [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-ink">
          <div>
            <h2>Angaben gemäß § 5 DDG</h2>
            <p className="mt-3">
              {site.name}
              <br />
              {site.owner}, {site.ownerTitle}
              <br />
              {site.street}
              <br />
              {site.zip} {site.city}
            </p>
          </div>

          <div>
            <h2>Kontakt</h2>
            <p className="mt-3">
              Telefon: {site.phone}
              <br />
              E-Mail: {site.email}
            </p>
          </div>

          <div>
            <h2>Berufsbezeichnung und Kammer</h2>
            <p className="mt-3">
              Berufsbezeichnung: Architekt (verliehen in der Bundesrepublik Deutschland)
              <br />
              Zuständige Kammer: [PLATZHALTER – z. B. Architektenkammer Niedersachsen,
              Friedrichswall 5, 30159 Hannover]
              <br />
              Mitgliedsnummer: [PLATZHALTER]
              <br />
              Es gelten die berufsrechtlichen Regelungen der Kammer:
              [PLATZHALTER – z. B. Niedersächsisches Architektengesetz (NArchtG),
              abrufbar unter www.aknds.de]
            </p>
          </div>

          <div>
            <h2>Umsatzsteuer</h2>
            <p className="mt-3">
              Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: [PLATZHALTER – falls vorhanden]
            </p>
          </div>

          <div>
            <h2>Berufshaftpflichtversicherung</h2>
            <p className="mt-3">
              [PLATZHALTER – Name und Sitz des Versicherers, räumlicher Geltungsbereich]
            </p>
          </div>

          <div>
            <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p className="mt-3">
              {site.owner}, {site.street}, {site.zip} {site.city}
            </p>
          </div>

          <div>
            <h2>Streitschlichtung</h2>
            <p className="mt-3">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <p className="rounded-xl border border-dashed border-ink/20 bg-paper-dim/50 p-5 text-sm text-ink-faint">
            Hinweis: Dieses Impressum ist ein Grundgerüst. Die mit [PLATZHALTER] markierten
            Angaben müssen vor Veröffentlichung geprüft und ergänzt werden – im Zweifel mit
            rechtlicher Beratung.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
