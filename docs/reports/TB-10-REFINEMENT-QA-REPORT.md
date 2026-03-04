# TB-10 Refinement QA Report (Fail-Closed)

Date: 2026-03-04  
Scope: TB-07/08/09 regression gate

## Changed files

- `docs/reports/TB-10-REFINEMENT-QA-REPORT.md`
- `docs/reports/screenshots/tb10/en-home-desktop-first-viewport.png`
- `docs/reports/screenshots/tb10/en-home-mobile-first-viewport.png`
- `docs/reports/screenshots/tb10/en-home-desktop-footer-bottom.png`
- `docs/reports/screenshots/tb10/en-home-mobile-footer-bottom.png`
- `docs/reports/screenshots/tb10/es-home-desktop-first-viewport.png`
- `docs/reports/screenshots/tb10/es-home-mobile-first-viewport.png`
- `docs/reports/screenshots/tb10/es-home-desktop-footer-bottom.png`
- `docs/reports/screenshots/tb10/es-home-mobile-footer-bottom.png`
- `docs/reports/screenshots/tb10/en-home-hero-corner.png`
- `docs/reports/screenshots/tb10/es-home-hero-corner.png`
- `docs/reports/screenshots/tb10/stam-overlay-desktop.png`

## Required commands + key outputs

1. `npm run check:i18n`
- PASS: `Parity check passed for 5 locale file pairs.`

2. `npm run build`
- PASS: Astro build complete, `11 page(s) built` including `/_stam/home`.

3. `rg -n "Disallow: /_stam/" dist/robots.txt`
- PASS: `2:Disallow: /_stam/`

4. `rg -n "X-Robots-Tag: noindex, nofollow|/_stam/\*" dist/_headers`
- PASS:
  - `1:/_stam/*`
  - `2:  X-Robots-Tag: noindex, nofollow`

5. `rg -n -i "(connect wallet|wallet connect|buy now|swap|price target|price prediction|founder|guaranteed gains|guaranteed returns)" src/content src/pages dist`
- PASS: no matches.

## Gate results

### A) Hero anchor + full-bleed hygiene
- PASS: `HOME-HERO` appears in both `dist/index.html` and `dist/es/index.html`.
- PASS: no top seam in first-viewport screenshots.
- PASS: no rounded hero corners (`rounded-none` and corner screenshots).

### B) Hero viewport behavior + mask
- PASS: hero fills opening viewport (`h-[100svh] min-h-[100vh]`, `c-home-hero-stage`).
- PASS: body begins after scroll; first viewport is hero-led.
- PASS: mask present (`c-home-hero-mask`) and readability preserved for nav/headline/CTA.

### C) Footer edge anchor
- PASS: `c-footer-bleed` remains active and footer reaches bottom edge in full-page screenshots.

### D) STAM bidirectional hover
- PASS: list->preview and preview->list hooks present in built STAM page:
  - `.stam-item.is-active`
  - iframe `contentDocument.addEventListener("mousemove", ...)`
- PASS: mapping remains selector/ID-driven from block index.

### E) Security/crawler protections unchanged
- PASS: robots disallow remains.
- PASS: `_headers` STAM noindex rule remains.
- PASS: STAM page keeps `<meta name="robots" content="noindex,nofollow">`.

### F) Compliance + parity
- PASS: i18n parity command succeeds.
- PASS: forbidden-content scan returns clean.

## Evidence paths

- `docs/reports/screenshots/tb10/en-home-desktop-first-viewport.png`
- `docs/reports/screenshots/tb10/en-home-mobile-first-viewport.png`
- `docs/reports/screenshots/tb10/en-home-desktop-footer-bottom.png`
- `docs/reports/screenshots/tb10/en-home-mobile-footer-bottom.png`
- `docs/reports/screenshots/tb10/es-home-desktop-first-viewport.png`
- `docs/reports/screenshots/tb10/es-home-mobile-first-viewport.png`
- `docs/reports/screenshots/tb10/es-home-desktop-footer-bottom.png`
- `docs/reports/screenshots/tb10/es-home-mobile-footer-bottom.png`
- `docs/reports/screenshots/tb10/en-home-hero-corner.png`
- `docs/reports/screenshots/tb10/es-home-hero-corner.png`
- `docs/reports/screenshots/tb10/stam-overlay-desktop.png`

Final verdict: PASS
