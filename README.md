Film Challenge — React + SSR (Vite)

Overview
- Goal: browse films by category; view details; wishlist.
- Stack: React, TypeScript, Vite, Express SSR, SCSS, React Router, React Query.
- API: TheMovieDB (TMDB) v3.

Requirements
- Node.js 18+ and npm.
- TMDB Read Access Token (v4).

Quick Start
1) Clone repo
2) Create `.env` with `VITE_TMDB_TOKEN=<your_tmdb_token>`
3) Install deps: `npm install`
4) Dev (SSR): `npm run dev`
5) Open: http://localhost:5173/

Production Build (SSR)
- Build client and server: `npm run build`
- Preview production SSR: `npm run preview`

Scripts
- `npm run dev`: Start Express + Vite (SSR, HMR).
- `npm run build`: Build client and server bundles.
- `npm run build:client`: Build client only.
- `npm run build:server`: Build server (SSR) only.
- `npm run preview`: Run server in production mode.
- `npm run lint`: Lint all files.
- `npm run lint:fix`: Lint and auto‑fix.

Environment
- File: `.env`
- Vars:
  - `VITE_TMDB_TOKEN`: TMDB Bearer token (required).

Project Structure (high‑level)
- `server.js`: Express server with SSR integration.
- `src/entry-server.tsx`: Server renderer.
- `src/entry-client.tsx`: Client hydration.
- `src/router/`: Routes with React Router.
- `src/components/`: UI and feature components.
- `src/pages/`: `Home`, `Movie` pages.
- `src/lib/api/`: TMDB API wrappers.
- `src/lib/hooks/`: Data fetching hooks (React Query).
- `src/globalCss/` and `*.scss`: SCSS styles.

How To Use
- Home: choose up to 3 genres; shows one carousel per genre.
- Click a film: navigate to detail page.
- Detail page: poster/backdrop, metadata, overview, wishlist toggle.
- Wishlist: header widget; open to view/remove items.

Spec Compliance (summary)
- React + TypeScript: yes.
- SCSS (no CSS Modules/Tailwind/Styled): yes.
- Vite bundling: yes.
- SSR support: yes (Express + Vite SSR).
- Three carousels: shown based on selected genres.
- Wishlist section: implemented.
- Category‑based differentiation: basic (status pill); extendable.

Linting/Style (ESLint)

Troubleshooting
- 401 from TMDB: verify `VITE_TMDB_TOKEN` is valid.
- Blank page in prod: run `npm run build` then `npm run preview`.
- Styles missing: ensure SCSS is installed and imported.

Notes
- No full‑stack framework used (no Next.js).
- Code structured for clarity and SSR compatibility.
