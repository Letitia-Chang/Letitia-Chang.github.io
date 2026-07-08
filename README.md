# Ting-Ya Chang — Portfolio

Personal portfolio site built with React, TypeScript, Vite, and Tailwind CSS.

Live at [letitia-chang.github.io](https://letitia-chang.github.io).

## Development

Requires Node 18.17+ or 20.5+.

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Deploys automatically to GitHub Pages via GitHub Actions on every push to `main` (see `.github/workflows/deploy.yml`).

## Content

- Project, experience, skills, and education content lives in `src/data/`.
- Contact links and the resume path live in `src/data/site.ts`.
- Resume PDF: `public/resume/`. Swap the file and update the path in `site.ts` to change which resume the "Download resume" button links to.
