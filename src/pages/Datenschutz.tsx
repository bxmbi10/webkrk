import { useSEO } from '../hooks/useSEO'
import { Reveal } from '../components/Reveal'
import { site } from '../data/site'

/**
 * Datenschutzerklärung – Grundgerüst mit Platzhaltern.
 * WICHTIG: Vor Veröffentlichung an das tatsächliche Hosting und die
 * tatsächlich eingesetzten Dienste anpassen (Hoster, Formular-Versand,
 * ggf. Kartendienst) und rechtlich prüfen lassen.
 */
export default function Datenschutz() {
  useSEO('Datenschutzerklärung – Architekturbüro Kurok')

  return (
    <section className="mx-auto max-w-3xl px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
      <Reveal from="none">
        <p className="kicker mb-4">Rechtliches</p>
        <h1 className="headline text-4xl sm:text-5xl">Datenschutzerklärung</h1>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-12 flex flex-col gap-10 leading-relaxed text-ink-soft [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-ink">
          <div>
            <h2>1. Verantwortlicher</h2>
            <p className="mt-3">
              {site.name}, {site.owner}
              <br />
              {site.street}, {site.zip} {site.city}
              <br />
              Telefon: {site.phone} · E-Mail: {site.email}
            </p>
          </div>

          <div>
            <h2>2. Erhebung und Speicherung personenbezogener Daten</h2>
            <p className="mt-3">
              Beim Aufruf dieser Website werden durch den Hosting-Anbieter automatisch
              Informationen in sogenannten Server-Logfiles gespeichert (z. B. IP-Adresse,
              Datum und Uhrzeit des Zugriffs, aufgerufene Seite, verwendeter Browser).
              Diese Daten dienen der Sicherstellung eines störungsfreien Betriebs und
              werden nach [PLATZHALTER: Speicherdauer] gelöscht.
              <br />
              <br />
              Hosting-Anbieter: [PLATZHALTER – Name und Anschrift des Hosters, ggf.
              Link zu dessen Datenschutzerklärung und Hinweis auf Auftragsverarbeitungsvertrag]
            </p>
          </div>

          <div>
            <h2>3. Kontaktformular und Kontaktaufnahme</h2>
            <p className="mt-3">
              Wenn Sie uns über das Kontaktformular, per E-Mail oder telefonisch
              kontaktieren, verarbeiten wir Ihre Angaben (Name, E-Mail-Adresse, ggf.
              Telefonnummer und Nachrichteninhalt) ausschließlich zur Bearbeitung Ihrer
              Anfrage (Art. 6 Abs. 1 lit. b DSGVO). Die Daten werden gelöscht, sobald
              sie für die Erreichung des Zwecks nicht mehr erforderlich sind und keine
              gesetzlichen Aufbewahrungspflichten entgegenstehen.
              <br />
              <br />
              [PLATZHALTER: Falls ein Formular-Dienstleister eingesetzt wird (z. B.
              Formspree), diesen hier benennen.]
            </p>
          </div>

          <div>
            <h2>4. Cookies und Tracking</h2>
            <p className="mt-3">
              Diese Website verwendet keine Tracking- oder Analyse-Dienste und setzt
              keine Cookies zu Marketingzwecken. Schriften und alle weiteren Ressourcen
              werden lokal vom eigenen Server geladen; es findet keine Datenübertragung
              an Dritte statt.
            </p>
          </div>

          <div>
            <h2>5. Ihre Rechte</h2>
            <p className="mt-3">
              Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16),
              Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18),
              Datenübertragbarkeit (Art. 20) sowie Widerspruch gegen die Verarbeitung
              (Art. 21). Außerdem können Sie sich bei einer Datenschutz-Aufsichtsbehörde
              beschweren, z. B. bei der Landesbeauftragten für den Datenschutz Niedersachsen.
            </p>
          </div>

          <p className="rounded-xl border border-dashed border-ink/20 bg-paper-dim/50 p-5 text-sm text-ink-faint">
            Hinweis: Diese Datenschutzerklärung ist ein Grundgerüst mit Platzhaltern.
            Sie muss vor Veröffentlichung an Hosting und tatsächlich eingesetzte Dienste
            angepasst und rechtlich geprüft werden.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
