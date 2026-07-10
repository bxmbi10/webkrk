/** Zentrale Stammdaten des Büros – hier pflegen, überall verwendet. */
export const site = {
  name: 'Architekturbüro Kurok',
  owner: 'Henning Kurok',
  ownerTitle: 'Dipl.-Ing. (FH) Architekt',
  street: 'Am Kirchbrink 22',
  zip: '31542',
  city: 'Bad Nenndorf',
  region: 'Niedersachsen',
  phone: '0177 8248600',
  phoneHref: 'tel:+491778248600',
  email: 'info@kurok-architekt.de',
  emailHref: 'mailto:info@kurok-architekt.de',
  url: 'https://www.kurok-architekt.de',
  /** Link für "Route planen" – DSGVO-freundlich als externer Link statt eingebetteter Karte. */
  mapsUrl:
    'https://www.openstreetmap.org/search?query=Am%20Kirchbrink%2022%2C%2031542%20Bad%20Nenndorf',
} as const
