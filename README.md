# Vansh Chopra — Portfolio (Phase 1)

A premium engineering case-study site, built with React + Vite + Tailwind. This is **Phase 1**
of the phased build: design system, navigation, hero, about, skills, and a full case study for
the flagship project, the JAC Delhi College Predictor.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
npm run preview   # serves the production build locally to check it
```

The build output lands in `dist/` — deploy that folder to Render Static Site, Vercel, Netlify,
GitHub Pages, or any static host.

## Project structure

```
src/
  data/content.js        ← single source of truth for all site copy (facts only)
  components/            ← Nav, Hero, About, Skills, WorkPreview, Footer, diagrams/
  pages/
    Home.jsx              ← landing page
    JacCaseStudy.jsx       ← full flagship case study (/projects/jac-delhi-college-predictor)
  assets/images/          ← portrait + real product screenshots
```

Everything reads from `src/data/content.js`. To correct or add a fact, edit it there once — it
propagates everywhere it's used.

## Design system

- **Colors**: graphite background scale, a technical blue "signal" accent, and the Safe /
  Moderate / Tough traffic-light colors reused from the JAC predictor's own product UI as data
  accents (see `tailwind.config.js`).
- **Type**: Space Grotesk (display), Inter (body), IBM Plex Mono (labels, data, stats) — all
  self-hosted via `@fontsource`, no external font requests.
- **Motif**: a faint blueprint grid + corner brackets + file-path style section numbering
  (`/01`, `/02`...), chosen because the subject matter — schemas, pipelines, architecture — is
  literally structural.

## Placeholders to replace before this goes live

These were intentionally left as clearly marked placeholders rather than invented, per your
instruction not to fabricate assets:

1. **JAC Delhi College Predictor GitHub repo** — resolved, points to your real repo
2. **ER diagram** — the database section shows a simplified entity/fact-table diagram built from
   your description. Swap in your actual exported ER diagram image if you have one with real
   column-level detail
3. **API routes** — the API section lists endpoint *categories* you described (prediction,
   trends, universities, branches, college info). Replace with real route paths + a Swagger
   screenshot if you want that level of precision
4. **Resume** — the Resume button opens `profile.resumeUrl` in `src/data/content.js`, which
   points at a Google Drive link. To update your resume, replace the file in Drive — no code
   change needed. If the Drive sharing link ever changes, update `resumeUrl` in that one file.

## What's not in Phase 1 (coming in later phases, on your approval)

- Full case studies for Student Internship & Job Tracking System and PresencePulse
- Achievements, Leadership, Certifications, Coding Profiles sections
- Dark/light mode toggle, command palette, other "extra features" from the original brief
- Contact form (current contact section is direct email/phone/social links only)

## Notes on the content itself

Every number, date, and technical claim on this site was either pulled directly from your
resume/certificates or from your explicit description of the JAC Delhi College Predictor. No
metrics, screenshots, or architecture details were invented — anywhere something wasn't
confirmed, it's marked with a visible placeholder banner instead.
