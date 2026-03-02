# Agent D Release Evidence Index

Date: 2026-03-02

## Commands run

1. `npm run check:i18n`
2. `npm run build`
3. `rg -n -i "(openclaw|vps|bot|automation|agent infrastructure|how to trade|price target|price prediction|guaranteed gains|guaranteed returns|connect wallet|buy now|founder)" src/content src/pages dist`
4. nav-in-hero verification command on:
   - `dist/index.html`
   - `dist/safety/index.html`
   - `dist/es/index.html`
   - `dist/es/safety/index.html`
5. banner source/deployed/render verification command
6. footer label localization verification command
7. safety CTA non-loop verification command
8. official links exactness verification command
9. disclaimer presence verification command
10. report presence verification command
11. screenshot completeness verification command

## Key outputs

- i18n parity: `Parity check passed for 5 locale file pairs.`
- build: success, static output, 8 routes built.
- nav-in-hero:
  - `dist/index.html | nav_in_hero=YES`
  - `dist/safety/index.html | nav_in_hero=YES`
  - `dist/es/index.html | nav_in_hero=YES`
  - `dist/es/safety/index.html | nav_in_hero=YES`
- banner checks:
  - `source_exists=true`
  - `deployed_exists=true`
  - `dist/index.html | banner_rendered=YES`
  - `dist/es/index.html | banner_rendered=YES`
- footer labels:
  - EN pages: `About` + `Safety` true
  - ES pages: `Sobre` + `Seguridad` true; EN labels absent in footer block
- safety CTA non-loop:
  - EN: `/community`
  - ES: `/es/community`
- official links exactness:
  - `dist/safety/index.html | exact_links=2,2,2`
  - `dist/es/safety/index.html | exact_links=2,2,2`

## Report file paths

- `docs/reports/AGENT-D-FINAL-QA-VERDICT.md`
- `docs/reports/AGENT-D-DESIGN-ACCEPTANCE-MATRIX.md`
- `docs/reports/AGENT-D-RELEASE-EVIDENCE-INDEX.md`
- `docs/reports/AGENT-B-EN-IMPLEMENTATION-REPORT.md`
- `docs/reports/AGENT-C-ES-PARITY-REPORT.md`
- `docs/reports/REBUILD-TEMPLATE-PARITY-REPORT.md`
- `docs/reports/REBUILD-LAYOUT-MAP.md`
- `docs/reports/REBUILD-QA-CHECKS.md`

## Screenshot paths

Primary acceptance set:

- `docs/reports/screenshots/rebuild/en-home-desktop.png`
- `docs/reports/screenshots/rebuild/en-home-mobile.png`
- `docs/reports/screenshots/rebuild/en-safety-desktop.png`
- `docs/reports/screenshots/rebuild/en-safety-mobile.png`
- `docs/reports/screenshots/rebuild/en-community-desktop.png`
- `docs/reports/screenshots/rebuild/en-community-mobile.png`
- `docs/reports/screenshots/rebuild/en-roadmap-desktop.png`
- `docs/reports/screenshots/rebuild/en-roadmap-mobile.png`
- `docs/reports/screenshots/rebuild/es-home-desktop.png`
- `docs/reports/screenshots/rebuild/es-home-mobile.png`
- `docs/reports/screenshots/rebuild/es-safety-desktop.png`
- `docs/reports/screenshots/rebuild/es-safety-mobile.png`
- `docs/reports/screenshots/rebuild/es-community-desktop.png`
- `docs/reports/screenshots/rebuild/es-community-mobile.png`
- `docs/reports/screenshots/rebuild/es-roadmap-desktop.png`
- `docs/reports/screenshots/rebuild/es-roadmap-mobile.png`

## Caveats

- Required forbidden scan regex reports a hit in generated CSS due substring `bot` in `backdrop`. This is a non-semantic scanner artifact; no forbidden semantic content was found in EN/ES source or built HTML content.
