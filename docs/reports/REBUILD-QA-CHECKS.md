# Rebuild QA Checks

Date: 2026-03-02  
Workdir: `/home/ralph/PoellieOne/FamBIT/fambit-site-v1`

## Command outputs

### `npm run check:i18n`

Result:

`Parity check passed for 5 locale file pairs.`

### `npm run build`

Result:

- static build successful
- 8 routes generated (`/`, `/safety`, `/community`, `/roadmap`, `/es/`, `/es/safety`, `/es/community`, `/es/roadmap`)

### Fail-closed scan

Command:

`rg -n -i "OpenClaw|VPS|\bagent\b|automation|\bbot\b|trade|how to trade|price target|price prediction|guaranteed gains|guaranteed returns|connect wallet|buy now|founder" src/content src/pages dist`

Result:

- no matches

## Practical hard-gate checks

### Gate 1 - nav must be in hero system

Result:

- `dist/index.html | nav_in_hero=YES`
- `dist/es/index.html | nav_in_hero=YES`
- `dist/safety/index.html | nav_in_hero=YES`
- `dist/es/safety/index.html | nav_in_hero=YES`

Status: PASS

### Gate 2 - mandatory banner dominant on EN+ES home

Result:

- `dist/index.html | hero_banner_dominant=YES`
- `dist/es/index.html | hero_banner_dominant=YES`

Status: PASS

### Gate 3 - spacing/typography/density template-aligned

Evidence:

- section cadence sequence starts with `hero-system` then alternating density wrappers (`atmo-panel`, `soft-strip`, cards/media blocks)
- screenshots confirm dense first screen and template-like rhythm

Status: PASS

### Gate 4 - build + i18n + compliance + screenshots complete

- i18n check: PASS
- build: PASS
- compliance scan: PASS
- screenshot index present: PASS

Status: PASS

## Compliance integrity checks

- Safety CTA loop regression:
  - EN: `/community`
  - ES: `/es/community`
- Official links exact on safety + footer:
  - counts in safety pages: `2,2,2` per page
- Disclaimers present on safety + footer (EN/ES).

## Lighthouse spot-check (best effort)

- `docs/reports/lighthouse-rebuild-home-en.json` -> perf 99, a11y 100, bp 100, seo 92
- `docs/reports/lighthouse-rebuild-home-es.json` -> perf 99, a11y 100, bp 100, seo 92

## Screenshot index (desktop + mobile, EN + ES)

Location: `docs/reports/screenshots/rebuild`

- `en-home-desktop.png`
- `en-home-mobile.png`
- `en-safety-desktop.png`
- `en-safety-mobile.png`
- `en-community-desktop.png`
- `en-community-mobile.png`
- `en-roadmap-desktop.png`
- `en-roadmap-mobile.png`
- `es-home-desktop.png`
- `es-home-mobile.png`
- `es-safety-desktop.png`
- `es-safety-mobile.png`
- `es-community-desktop.png`
- `es-community-mobile.png`
- `es-roadmap-desktop.png`
- `es-roadmap-mobile.png`

## QA verdict

All hard-stop gates are green.
