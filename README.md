# sunscout-web

Public marketing website for SunScout, the beach discovery and conditions app built by INFX Labs. Static Next.js export deployed to GitHub Pages.

Live: https://targetpraks.github.io/sunscout-web/

## Status

Private preview. This site is a working preview for founder review, not a public launch. Booking and other app features roll out in pilot markets; pricing shown is proposed and not charged.

## Stack

- Next.js 16 (static export, `output: "export"`)
- Tailwind CSS v4
- TypeScript
- Prettier + ESLint
- GitHub Actions CI: format check, lint, build, deploy to Pages

## Commands

```bash
npm install        # install dependencies
npm run dev        # local dev server
npm run format     # format the codebase
npm run format:check  # CI format gate
npm run lint       # ESLint
npm run build      # static export to out/
```

## Data stance

The app's API is LAN-only today, so this website renders a build-time snapshot of the seeded dataset. Every figure is labelled as sample data. The beach dataset lives in `src/lib/beaches.ts`, transcribed from the app repo's production seed. Beach illustrations are generated SVGs from the app's asset pipeline, stored in `public/assets/beaches/`.

No cookies, no third-party trackers, no background location. See `/privacy` and `/data-retention` for the full posture.

## Configuration

Product name, URLs and contact routing live in `src/config/site.ts`. The GitHub Pages `basePath` lives in `next.config.ts`. A custom domain later is a change to these two files, not a copy rewrite.

## Structure

```
src/
  app/                 # pages (home, beaches, pricing, data, audiences, legal)
  components/          # header, footer, beach card, sample-data label
  config/site.ts       # name, URLs, contact constants
  lib/beaches.ts       # 12-beach dataset from the app seed
public/
  assets/beaches/      # per-beach SVG art (base + 4 time-of-day variants)
  og/                  # social share cards (PNG)
```

## Sources

- Spec: Maio Hub vault, Work/3.PRD/Active/SunScout/SunScout-Website-PRD-2026-09-15.md
- App repo: targetpraks/sunscout (dataset, seed, beach art, data retention doc)
- Fleet precedent: targetpraks/infx-media-website, targetpraks/papa-pasta-main-website