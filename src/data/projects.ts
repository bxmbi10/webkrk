/**
 * Referenzprojekte.
 *
 * HINWEIS FÜR DIE PFLEGE:
 * Die Original-Projektfotos konnten aus der alten Website nicht übernommen
 * werden. Alle Einträge nutzen daher gekennzeichnete Platzhalter.
 * Um echte Fotos einzusetzen:
 *   1. Bilder (ideal: WebP, Querformat 3:2 bzw. wie in `aspect` angegeben)
 *      unter /public/projekte/<slug>/ ablegen.
 *   2. Im jeweiligen Projekt die `images`-Einträge mit `src` ergänzen –
 *      Einträge ohne `src` werden automatisch als Platzhalter gerendert.
 */

export type CategoryId =
  | 'wohnen-neubau'
  | 'wohnraum-sanierung'
  | 'carports-garagen'
  | 'terrassenueberdachungen'
  | 'gewerbeobjekte'
  | 'visualisierungen'
  | 'feuerwehrplanungen'
  | 'diverse'

export interface Category {
  id: CategoryId
  label: string
}

export const categories: Category[] = [
  { id: 'wohnen-neubau', label: 'Wohnen – Neubau' },
  { id: 'wohnraum-sanierung', label: 'Wohnraum – Sanierung / Erweiterung' },
  { id: 'carports-garagen', label: 'Carports & Garagen' },
  { id: 'terrassenueberdachungen', label: 'Terrassenüberdachungen' },
  { id: 'gewerbeobjekte', label: 'Gewerbeobjekte' },
  { id: 'visualisierungen', label: 'Visualisierungen' },
  { id: 'feuerwehrplanungen', label: 'Feuerwehrplanungen' },
  { id: 'diverse', label: 'Diverse Bauvorhaben' },
]

export interface ProjectImage {
  /** Pfad zum echten Bild, z. B. '/projekte/efh-suntal/01.webp'. Leer = Platzhalter. */
  src?: string
  alt: string
  /** Seitenverhältnis der Kachel, z. B. '3/2', '4/5', '16/9'. */
  aspect: string
}

export interface Project {
  slug: string
  title: string
  category: CategoryId
  location: string
  year: string
  /** Kurzbeschreibung für Cards und Teaser. */
  teaser: string
  /** Ausführliche Beschreibung für die Detailseite. */
  description: string[]
  facts: { label: string; value: string }[]
  images: ProjectImage[]
  /** Steuert die Kachelgröße im dynamischen Referenzen-Grid. */
  size: 'large' | 'wide' | 'tall' | 'standard'
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'einfamilienhaus-suentelblick',
    title: 'Einfamilienhaus am Süntelblick',
    category: 'wohnen-neubau',
    location: 'Bad Nenndorf',
    year: '2023',
    teaser: 'Klar gegliederter Neubau mit Satteldach, großzügiger Südverglasung und offenem Wohnkonzept.',
    description: [
      'Auf einem leicht geneigten Grundstück am Ortsrand entstand ein Einfamilienhaus, das regionale Bautradition mit zeitgemäßem Wohnen verbindet. Das klassische Satteldach wurde neu interpretiert: reduzierte Details, klare Kanten, langlebige Materialien.',
      'Der offene Wohn-, Ess- und Kochbereich orientiert sich nach Süden zum Garten; raumhohe Verglasungen holen Licht und Landschaft ins Haus. Im Obergeschoss schaffen wohldimensionierte Individualräume Rückzugsorte für die Familie.',
      'Von der ersten Skizze über den Bauantrag bis zur Schlüsselübergabe wurde das Projekt durchgängig aus einer Hand betreut.',
    ],
    facts: [
      { label: 'Bauart', value: 'Massivbau, Neubau' },
      { label: 'Wohnfläche', value: 'ca. 165 m²' },
      { label: 'Jahr', value: '2023' },
      { label: 'Leistungsphasen', value: 'LPH 1–8' },
    ],
    images: [
      { alt: 'Straßenansicht des Einfamilienhauses', aspect: '3/2' },
      { alt: 'Gartenseite mit Südverglasung', aspect: '3/2' },
      { alt: 'Offener Wohn- und Essbereich', aspect: '4/5' },
      { alt: 'Detail Eingangsbereich', aspect: '4/5' },
      { alt: 'Blick aus dem Garten in der Dämmerung', aspect: '16/9' },
    ],
    size: 'large',
    featured: true,
  },
  {
    slug: 'sanierung-altbau-rodenberg',
    title: 'Sanierung eines Siedlungshauses',
    category: 'wohnraum-sanierung',
    location: 'Rodenberg',
    year: '2022',
    teaser: 'Energetische Sanierung und Grundrissöffnung eines Siedlungshauses aus den 1950er-Jahren.',
    description: [
      'Das charmante, aber in die Jahre gekommene Siedlungshaus wurde behutsam in die Gegenwart geholt: neue Gebäudehülle, moderne Haustechnik und ein Grundriss, der endlich zur heutigen Wohnrealität passt.',
      'Tragende Wände im Erdgeschoss wurden gezielt geöffnet, um Küche, Essen und Wohnen zu verbinden. Eine Bestandsaufnahme mit digitalem Aufmaß bildete die verlässliche Planungsgrundlage.',
      'Die Baumaßnahme erfolgte in bewohntem Zustand – mit enger Taktung der Gewerke und transparenter Kommunikation mit der Bauherrenfamilie.',
    ],
    facts: [
      { label: 'Bauart', value: 'Sanierung im Bestand' },
      { label: 'Baujahr Bestand', value: '1954' },
      { label: 'Jahr', value: '2022' },
      { label: 'Leistungsphasen', value: 'LPH 1–8' },
    ],
    images: [
      { alt: 'Sanierte Fassade mit neuem Wärmedämmverbundsystem', aspect: '3/2' },
      { alt: 'Geöffneter Wohnbereich nach dem Umbau', aspect: '4/5' },
      { alt: 'Neuer Dachstuhl mit Gauben', aspect: '3/2' },
      { alt: 'Detail Treppenhaus', aspect: '4/5' },
    ],
    size: 'tall',
    featured: true,
  },
  {
    slug: 'anbau-wohnraumerweiterung-haste',
    title: 'Wohnraumerweiterung mit Anbau',
    category: 'wohnraum-sanierung',
    location: 'Haste',
    year: '2021',
    teaser: 'Eingeschossiger Anbau mit Flachdach – mehr Raum zum Garten, ohne den Bestand zu verstellen.',
    description: [
      'Ein junges Paar wünschte sich mehr Platz zum Garten, ohne den Charakter des Bestandshauses zu verlieren. Die Antwort: ein zurückhaltender, eingeschossiger Anbau mit Flachdach und großformatiger Verglasung.',
      'Der Übergang zwischen Alt und Neu bleibt bewusst ablesbar. Innen entstand ein lichtdurchfluteter Wohnraum mit direktem Gartenzugang, außen eine geschützte Terrasse.',
    ],
    facts: [
      { label: 'Bauart', value: 'Anbau, Holzrahmenbau' },
      { label: 'Zusätzliche Fläche', value: 'ca. 35 m²' },
      { label: 'Jahr', value: '2021' },
      { label: 'Leistungsphasen', value: 'LPH 1–8' },
    ],
    images: [
      { alt: 'Anbau mit großformatiger Verglasung zum Garten', aspect: '3/2' },
      { alt: 'Innenraum mit Blick in den Garten', aspect: '3/2' },
      { alt: 'Übergang zwischen Bestand und Anbau', aspect: '4/5' },
    ],
    size: 'standard',
  },
  {
    slug: 'doppelcarport-bad-nenndorf',
    title: 'Doppelcarport mit Geräteraum',
    category: 'carports-garagen',
    location: 'Bad Nenndorf',
    year: '2023',
    teaser: 'Filigrane Holzkonstruktion mit integriertem Geräteraum und begrüntem Flachdach.',
    description: [
      'Der Doppelcarport in Holzbauweise fügt sich selbstverständlich in das bestehende Grundstück ein. Ein integrierter Geräteraum schafft Stauraum, das extensiv begrünte Flachdach verbessert das Mikroklima und hält Regenwasser zurück.',
      'Genehmigungsplanung, Statik-Koordination und Ausführungsbegleitung erfolgten aus einer Hand.',
    ],
    facts: [
      { label: 'Bauart', value: 'Holzkonstruktion' },
      { label: 'Stellplätze', value: '2 + Geräteraum' },
      { label: 'Jahr', value: '2023' },
      { label: 'Leistungsphasen', value: 'LPH 1–5' },
    ],
    images: [
      { alt: 'Doppelcarport mit begrüntem Flachdach', aspect: '3/2' },
      { alt: 'Detail der Holzkonstruktion', aspect: '4/5' },
    ],
    size: 'standard',
  },
  {
    slug: 'terrassenueberdachung-suedhang',
    title: 'Terrassenüberdachung am Südhang',
    category: 'terrassenueberdachungen',
    location: 'Nenndorf-Riepen',
    year: '2022',
    teaser: 'Stahl-Glas-Konstruktion mit integriertem Sonnenschutz – ganzjährig nutzbarer Freisitz.',
    description: [
      'Die filigrane Stahl-Glas-Überdachung erweitert die Wohnzeit nach draußen: geschützt bei Regen, beschattet im Hochsommer, offen an lauen Abenden.',
      'Die Konstruktion wurde so dimensioniert, dass sie später zu einem Kaltwintergarten ausgebaut werden kann.',
    ],
    facts: [
      { label: 'Bauart', value: 'Stahl-Glas-Konstruktion' },
      { label: 'Fläche', value: 'ca. 24 m²' },
      { label: 'Jahr', value: '2022' },
      { label: 'Leistungsphasen', value: 'LPH 1–5' },
    ],
    images: [
      { alt: 'Terrassenüberdachung aus Stahl und Glas', aspect: '3/2' },
      { alt: 'Abendstimmung unter der Überdachung', aspect: '16/9' },
    ],
    size: 'wide',
  },
  {
    slug: 'umnutzung-gewerbehof-stadthagen',
    title: 'Umnutzung Gewerbehof',
    category: 'gewerbeobjekte',
    location: 'Stadthagen',
    year: '2020',
    teaser: 'Projektierung und Umnutzung eines innerstädtischen Gewerbehofs zu Büro- und Praxisflächen.',
    description: [
      'Aus einem untergenutzten Gewerbehof in zentraler Lage wurden moderne Büro- und Praxisflächen entwickelt. Am Anfang stand eine ehrliche Analyse: Substanz, Brandschutz, Stellplätze, Wirtschaftlichkeit.',
      'Auf dieser Grundlage entstand ein Umnutzungskonzept, das Bestandsqualitäten nutzt statt sie zu überformen – mit flexiblen Mieteinheiten und einem gemeinsamen Erschließungskern.',
      'Das Projekt umfasste Projektentwicklung, Genehmigungsplanung und die Abstimmung mit Bauaufsicht und Brandschutzprüfern.',
    ],
    facts: [
      { label: 'Bauart', value: 'Umnutzung im Bestand' },
      { label: 'Nutzfläche', value: 'ca. 850 m²' },
      { label: 'Jahr', value: '2020' },
      { label: 'Leistungsphasen', value: 'LPH 1–4, Projektsteuerung' },
    ],
    images: [
      { alt: 'Hofansicht des umgenutzten Gewerbehofs', aspect: '3/2' },
      { alt: 'Neue Büroflächen im Obergeschoss', aspect: '3/2' },
      { alt: 'Erschließungskern mit Treppenhaus', aspect: '4/5' },
      { alt: 'Fassadendetail Bestand und Neu', aspect: '4/5' },
    ],
    size: 'large',
    featured: true,
  },
  {
    slug: 'visualisierung-mehrfamilienhaus',
    title: 'Visualisierung Mehrfamilienhaus',
    category: 'visualisierungen',
    location: 'Region Hannover',
    year: '2024',
    teaser: 'Fotorealistische Außen- und Innenvisualisierungen für den Vertrieb eines Neubauprojekts.',
    description: [
      'Für ein geplantes Mehrfamilienhaus entstanden fotorealistische Visualisierungen der Außenanlagen und ausgewählter Wohnungen – als Entscheidungsgrundlage für den Bauherrn und als Vertriebsunterlage.',
      'Vorher wissen, wie es hinterher aussieht: Materialien, Lichtstimmungen und Möblierungsvarianten wurden in mehreren Abstimmungsrunden präzisiert.',
    ],
    facts: [
      { label: 'Leistung', value: '3D-Visualisierung' },
      { label: 'Umfang', value: '6 Außen-, 4 Innenperspektiven' },
      { label: 'Jahr', value: '2024' },
    ],
    images: [
      { alt: 'Visualisierung der Straßenansicht', aspect: '16/9' },
      { alt: 'Visualisierung Wohnbereich mit Abendlicht', aspect: '3/2' },
      { alt: 'Visualisierung Außenanlagen', aspect: '3/2' },
    ],
    size: 'wide',
    featured: true,
  },
  {
    slug: 'feuerwehrplaene-logistikhalle',
    title: 'Feuerwehrpläne Logistikhalle',
    category: 'feuerwehrplanungen',
    location: 'Schaumburg',
    year: '2023',
    teaser: 'Feuerwehrpläne nach DIN 14095 sowie Flucht- und Rettungspläne für einen Logistikstandort.',
    description: [
      'Für einen Logistikstandort mit mehreren Hallenabschnitten wurden Feuerwehrpläne nach DIN 14095 erstellt und mit der zuständigen Brandschutzdienststelle abgestimmt.',
      'Ergänzend entstanden Flucht- und Rettungspläne nach DIN ISO 23601 für alle Ebenen – inklusive Bestandsaufnahme und Digitalisierung der vorhandenen Unterlagen.',
    ],
    facts: [
      { label: 'Leistung', value: 'Feuerwehr-, Flucht- & Rettungspläne' },
      { label: 'Normen', value: 'DIN 14095, DIN ISO 23601' },
      { label: 'Jahr', value: '2023' },
    ],
    images: [
      { alt: 'Feuerwehrplan Übersicht (Auszug)', aspect: '4/3' },
      { alt: 'Flucht- und Rettungsplan (Auszug)', aspect: '4/3' },
    ],
    size: 'standard',
  },
  {
    slug: 'garagenhof-modernisierung',
    title: 'Modernisierung Garagenhof',
    category: 'carports-garagen',
    location: 'Bad Nenndorf',
    year: '2021',
    teaser: 'Instandsetzung und Neuordnung eines Garagenhofs mit zwölf Einheiten.',
    description: [
      'Der in die Jahre gekommene Garagenhof wurde instand gesetzt und neu geordnet: neue Tore, sanierte Dächer, klare Zuwegung und eine verbesserte Entwässerung.',
    ],
    facts: [
      { label: 'Bauart', value: 'Instandsetzung' },
      { label: 'Einheiten', value: '12 Garagen' },
      { label: 'Jahr', value: '2021' },
    ],
    images: [
      { alt: 'Sanierter Garagenhof mit neuen Toren', aspect: '3/2' },
    ],
    size: 'standard',
  },
  {
    slug: 'aufstockung-buerogebaeude',
    title: 'Aufstockung Bürogebäude',
    category: 'diverse',
    location: 'Barsinghausen',
    year: '2019',
    teaser: 'Aufstockung eines zweigeschossigen Bürogebäudes in Holzbauweise – Planung und Bauüberwachung.',
    description: [
      'Statt Neubau auf der grünen Wiese: Die Aufstockung in leichter Holzbauweise schuf ein zusätzliches Geschoss Bürofläche auf dem Bestand – ressourcenschonend und ohne Unterbrechung des laufenden Betriebs.',
      'Die Tragfähigkeit des Bestands wurde gemeinsam mit dem Tragwerksplaner bewertet; die Ausführung erfolgte in vorgefertigten Elementen mit kurzer Montagezeit.',
    ],
    facts: [
      { label: 'Bauart', value: 'Aufstockung, Holzbau' },
      { label: 'Zusätzliche Fläche', value: 'ca. 280 m²' },
      { label: 'Jahr', value: '2019' },
      { label: 'Leistungsphasen', value: 'LPH 1–8' },
    ],
    images: [
      { alt: 'Aufgestocktes Bürogebäude nach Fertigstellung', aspect: '3/2' },
      { alt: 'Montage der Holzelemente', aspect: '3/2' },
    ],
    size: 'tall',
  },
  {
    slug: 'visualisierung-badsanierung',
    title: 'Visualisierung Badsanierung',
    category: 'visualisierungen',
    location: 'Bad Nenndorf',
    year: '2023',
    teaser: 'Innenvisualisierung zweier Ausstattungsvarianten für eine private Badsanierung.',
    description: [
      'Zwei Ausstattungsvarianten, ein Grundriss: Die Visualisierungen machten Materialien, Farben und Lichtführung vergleichbar und führten zu einer schnellen, sicheren Entscheidung der Bauherren.',
    ],
    facts: [
      { label: 'Leistung', value: '3D-Innenvisualisierung' },
      { label: 'Umfang', value: '2 Varianten, je 3 Perspektiven' },
      { label: 'Jahr', value: '2023' },
    ],
    images: [
      { alt: 'Visualisierung Badezimmer Variante hell', aspect: '4/5' },
      { alt: 'Visualisierung Badezimmer Variante dunkel', aspect: '4/5' },
    ],
    size: 'standard',
  },
  {
    slug: 'teilungsplaene-wohnanlage',
    title: 'Teilungspläne Wohnanlage',
    category: 'diverse',
    location: 'Wunstorf',
    year: '2022',
    teaser: 'Bestandsaufmaß und Teilungspläne nach WEG für eine Wohnanlage mit acht Einheiten.',
    description: [
      'Für die Aufteilung einer Wohnanlage in acht Eigentumseinheiten wurden Bestandsaufmaß, Digitalisierung der Altpläne und die Erstellung der Aufteilungspläne mit Abgeschlossenheitsbescheinigung übernommen.',
    ],
    facts: [
      { label: 'Leistung', value: 'Aufmaß, Teilungspläne' },
      { label: 'Einheiten', value: '8 Wohneinheiten' },
      { label: 'Jahr', value: '2022' },
    ],
    images: [
      { alt: 'Aufteilungsplan Erdgeschoss (Auszug)', aspect: '4/3' },
    ],
    size: 'standard',
  },
  {
    slug: 'neubau-doppelhaus-lindhorst',
    title: 'Doppelhaus in Lindhorst',
    category: 'wohnen-neubau',
    location: 'Lindhorst',
    year: '2020',
    teaser: 'Kompaktes Doppelhaus mit versetzten Baukörpern – zwei Familien, ein gemeinsames Projekt.',
    description: [
      'Zwei befreundete Familien, ein Grundstück: Das Doppelhaus wurde als Paar versetzter Baukörper entwickelt, die jeder Einheit Privatheit und einen eigenen Gartenbezug geben.',
      'Gemeinsame Entscheidungen – von der Materialwahl bis zur Haustechnik – wurden strukturiert moderiert; die Kostenaufteilung blieb dabei jederzeit transparent.',
    ],
    facts: [
      { label: 'Bauart', value: 'Massivbau, Neubau' },
      { label: 'Wohnfläche', value: '2 × ca. 130 m²' },
      { label: 'Jahr', value: '2020' },
      { label: 'Leistungsphasen', value: 'LPH 1–8' },
    ],
    images: [
      { alt: 'Doppelhaus mit versetzten Baukörpern', aspect: '3/2' },
      { alt: 'Gartenseite mit Terrassen', aspect: '16/9' },
    ],
    size: 'wide',
  },
]

export const featuredProjects = projects.filter((p) => p.featured)

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getCategory(id: CategoryId): Category {
  return categories.find((c) => c.id === id)!
}
