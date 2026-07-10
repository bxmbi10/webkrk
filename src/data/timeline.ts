export interface TimelineEntry {
  period: string
  title: string
  detail?: string
  /** Meilensteine werden auf der Timeline hervorgehoben. */
  highlight?: boolean
}

/** Werdegang Henning Kurok – chronologisch absteigend (aktuellstes zuerst). */
export const timeline: TimelineEntry[] = [
  {
    period: 'Seit 2003',
    title: 'Selbstständige Tätigkeit',
    detail: 'Architekturbüro Kurok, Bad Nenndorf – Planung, Projektsteuerung und Beratung aus einer Hand.',
    highlight: true,
  },
  {
    period: '2004',
    title: 'Architekturbüro Podufal & Wiehofsky',
    detail: 'Bad Oeynhausen – freie Mitarbeit.',
  },
  {
    period: '2003',
    title: 'Architekturbüro Wolfgang Richter',
    detail: 'Laatzen – freie Mitarbeit.',
  },
  {
    period: '1999 – 2003',
    title: 'Planungsbüro Bade, Isernhagen',
    detail: 'Tätigkeit als Dipl.-Ing. (FH) Architekt neben dem Studium.',
  },
  {
    period: '24.01.2003',
    title: 'Diplom',
    detail: 'Abschluss des Architekturstudiums als Dipl.-Ing. (FH).',
    highlight: true,
  },
  {
    period: '31.01.2001',
    title: 'Vordiplom',
  },
  {
    period: '1999',
    title: 'Beginn des Architekturstudiums',
    highlight: true,
  },
  {
    period: '1997 – 1999',
    title: 'Ausbildung zum Bauzeichner',
    detail: 'Planungsbüro Bade, Isernhagen.',
  },
]
