# Snailly — Landing Page

Landing page marketing untuk **Snailly**, perlindungan internet berbasis AI untuk anak-anak. Halaman statis satu halaman (SPA) yang dibangun dari desain Figma.

## Stack

| Teknologi | Versi |
|---|---|
| [Vite](https://vite.dev) | 8 |
| [React](https://react.dev) | 19 |
| [TypeScript](https://www.typescriptlang.org) | 6 (`strict: true`) |
| [Tailwind CSS](https://tailwindcss.com) | 4 (CSS-first, `@theme`) |
| [Framer Motion](https://www.framer.com/motion) | 13 |
| [oxlint](https://oxc.rs/docs/guide/usage/linter) | linter (pengganti ESLint) |

## Scripts

```bash
npm run dev      # dev server (http://localhost:5173)
npm run build    # typecheck (tsc -b) + production build
npm run preview  # preview hasil build
npm run lint     # oxlint
```

## Struktur

```
src/
├── main.tsx              # bootstrap React + MotionConfig
├── App.tsx               # komposisi Navbar + sections + Footer
├── index.css             # Tailwind v4 @theme (design tokens) + keyframes
├── lib/
│   └── cx.ts             # helper gabung className
└── components/
    ├── layout/           # chrome halaman (Navbar, Footer)
    ├── sections/         # blok konten per section
    └── ui/               # primitif reusable (Container, Button, Eyebrow, Marquee, ScrollFade)
```

## Design tokens

Warna dan font didefinisikan sekali di `src/index.css` (`@theme`) dan dipakai sebagai utility class (`bg-primary`, `text-ink`, `font-heading`, …):

- `--color-primary` `#47673b` · `--color-primary-dark` `#34492b`
- `--color-ink` · `--color-body` · `--color-cream` · `--color-surface`
- `--color-mock` · `--color-muted` · `--color-star`
- `--font-heading` (IBM Plex Sans) · `--font-body` (Inter)

## Catatan

- URL production di `index.html` (canonical/OG) masih placeholder `https://snailly.example` — ganti sebelum deploy.
- Konten pemasaran (copy, FAQ, testimoni) di-hardcode sebagai const di masing-masing section.
