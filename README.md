# Architekturbüro Kurok – Website

Moderne Website für das Architekturbüro Henning Kurok, Bad Nenndorf.
Ablöst die bisherige WordPress-Seite (kurok-architekt.de).

## Tech-Stack

- **Vite + React + TypeScript** – Build & App-Framework
- **Tailwind CSS v4** – Styling (Design-Tokens in `src/index.css`)
- **Framer Motion** – Scroll-Reveals, Seitenübergänge, Layout-Animationen
- **Lenis** – Smooth Scrolling (bei `prefers-reduced-motion` deaktiviert)
- **React Router** – Routing mit Code-Splitting pro Seite

## Entwicklung

```bash
npm install
npm run dev       # Dev-Server (http://localhost:5173)
npm run build     # Produktions-Build nach dist/
npm run preview   # Produktions-Build lokal testen
```

## Inhalte pflegen

Alle Inhalte liegen zentral unter `src/data/`:

| Datei          | Inhalt                                              |
| -------------- | --------------------------------------------------- |
| `site.ts`      | Adresse, Telefon, E-Mail, Maps-Link                 |
| `services.ts`  | Die acht Leistungsbereiche                          |
| `projects.ts`  | Referenzprojekte inkl. Kategorien und Bildern       |
| `timeline.ts`  | Werdegang für die Büro-Seite                        |

### Projektfotos einsetzen

Die Original-Fotos konnten aus der alten Website nicht übernommen werden –
alle Bildflächen sind daher als gekennzeichnete Platzhalter angelegt.

1. Fotos als **WebP** (empfohlen, alternativ JPEG) exportieren.
   Richtwert: max. 1920 px Breite, Seitenverhältnis wie im jeweiligen
   `aspect`-Feld angegeben (`3/2`, `4/5`, `16/9`, …).
2. Unter `public/projekte/<projekt-slug>/` ablegen.
3. In `src/data/projects.ts` beim jeweiligen Bild den Pfad setzen:
   ```ts
   { src: '/projekte/einfamilienhaus-suentelblick/01.webp', alt: '…', aspect: '3/2' }
   ```
   Einträge **ohne** `src` werden automatisch als Platzhalter gerendert.
   Lazy Loading und Lightbox funktionieren ohne weitere Anpassung.

Weitere Platzhalter (Suche im Code nach `PLATZHALTER` bzw. `Platzhalter`):

- **Partner-Seite** (`src/pages/Partner.tsx`): Partnernamen/Fachgebiete eintragen
- **Impressum / Datenschutz**: markierte Angaben ergänzen und rechtlich prüfen lassen
- **Portrait & Hero-Bild**: `PlaceholderImage`-Stellen auf Start- und Büro-Seite

### Kontaktformular

Clientseitige Validierung ist fertig; der **Versand ist bewusst noch nicht
angebunden**, da er vom Hosting abhängt. Optionen und Einbaustelle sind als
`TODO`-Kommentar in `src/pages/Kontakt.tsx` (Funktion `ContactForm`,
`handleSubmit`) dokumentiert.

### Akzentfarbe wechseln

In `src/index.css` die drei `--color-accent*`-Werte tauschen – vorbereitete
Alternativen (Tiefblau, Moosgrün) stehen als Kommentar direkt darüber.

## Hosting-Hinweis (SPA-Routing)

Die Seite ist eine Single-Page-App: Der Server muss alle Pfade auf
`index.html` umschreiben (bei Netlify/Vercel automatisch; bei Apache per
`.htaccess`-Rewrite, bei nginx `try_files $uri /index.html;`).
