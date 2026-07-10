export interface Service {
  id: string
  title: string
  claim: string
  description: string
  /** Schlüssel für das zugehörige Icon in components/ServiceIcon.tsx */
  icon: ServiceIconName
}

export type ServiceIconName =
  | 'plan'
  | 'steering'
  | 'advice'
  | 'execution'
  | 'development'
  | 'visualization'
  | 'survey'
  | 'fire'

export const services: Service[] = [
  {
    id: 'architekturplanung',
    title: 'Architekturplanung',
    claim: 'Neubau, Umbau und Sanierung',
    description:
      'Vom ersten Entwurf bis zur Genehmigung: durchdachte Planung für Neubauten, Umbauten und Sanierungen – maßgeschneidert auf Grundstück, Budget und Lebenssituation.',
    icon: 'plan',
  },
  {
    id: 'projektsteuerung',
    title: 'Projektsteuerung',
    claim: 'Bauleitung, Projektüberwachung, Qualitätssicherung',
    description:
      'Termine, Kosten und Qualität im Griff: Bauleitung und Projektüberwachung mit klarer Kommunikation zwischen allen Beteiligten – bis zur mängelfreien Übergabe.',
    icon: 'steering',
  },
  {
    id: 'bauherrenberatung',
    title: 'Bauherrenberatung',
    claim: 'Kauf-, Umbau- und Sanierungsberatung',
    description:
      'Erst analysieren, dann modernisieren: unabhängige Beratung vor dem Immobilienkauf, bei Umbauplänen und Sanierungsvorhaben – damit Entscheidungen auf Fakten stehen.',
    icon: 'advice',
  },
  {
    id: 'ausfuehrungsplanung',
    title: 'Werk- & Ausführungsplanung',
    claim: 'Für Architekten und Planungsbüros',
    description:
      'Präzise Werk- und Detailplanung als verlässliche Unterstützung für Kollegen: termintreu, normgerecht und baustellentauglich aufbereitet.',
    icon: 'execution',
  },
  {
    id: 'projektentwicklung',
    title: 'Projektentwicklung',
    claim: 'Umnutzung und Projektierung von Gewerbeobjekten',
    description:
      'Potenziale erkennen und heben: Machbarkeitsstudien, Umnutzungskonzepte und Projektierung für Gewerbeimmobilien – wirtschaftlich gedacht, gestalterisch gelöst.',
    icon: 'development',
  },
  {
    id: 'visualisierung',
    title: 'Visualisierung',
    claim: 'Vorher wissen, wie es hinterher aussieht',
    description:
      'Fotorealistische 3D-Visualisierungen machen Entwürfe erlebbar, bevor der erste Stein gesetzt ist – für sichere Entscheidungen und überzeugende Präsentationen.',
    icon: 'visualization',
  },
  {
    id: 'bestandsaufnahme',
    title: 'Bestandsaufnahme',
    claim: 'Aufmaß, Digitalisierung, Teilungspläne',
    description:
      'Verlässliche Grundlagen für jedes Projekt: Bestandsaufmaß vor Ort, Digitalisierung vorhandener Pläne und Erstellung von Teilungsplänen.',
    icon: 'survey',
  },
  {
    id: 'feuerwehrplanung',
    title: 'Feuerwehrplanung',
    claim: 'Feuerwehr-, Flucht- und Rettungspläne',
    description:
      'Normgerechte Feuerwehrpläne nach DIN 14095 sowie Flucht- und Rettungspläne nach DIN ISO 23601 – abgestimmt mit Brandschutzbehörden und Feuerwehr.',
    icon: 'fire',
  },
]
