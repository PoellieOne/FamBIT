# TB-04 Rework Report (Fail-Closed Defect Fix)

Date: 2026-03-03  
Scope: TB-04 blocking defects only

## Changed files

- `src/layouts/BaseLayout.astro`
- `src/components/Header.astro`
- `src/styles/global.css`
- `docs/reports/screenshots/tb04/en-home-desktop-firstscreen.png`
- `docs/reports/screenshots/tb04/en-home-desktop-scrolled.png`
- `docs/reports/screenshots/tb04/en-home-mobile-firstscreen.png`
- `docs/reports/screenshots/tb04/en-home-mobile-scrolled.png`
- `docs/reports/screenshots/tb04/es-home-desktop-firstscreen.png`
- `docs/reports/screenshots/tb04/es-home-desktop-scrolled.png`
- `docs/reports/screenshots/tb04/es-home-mobile-firstscreen.png`
- `docs/reports/screenshots/tb04/es-home-mobile-scrolled.png`

## DEFECT-01 fix summary (floating sticky nav visibility)

- Homepage nav moved out of hero container context and rendered before hero in `BaseLayout` only when `homeHero=true`.
- Home nav now has viewport-level fixed behavior via `c-home-nav-fixed` (`position: fixed`, centered, high z-index).
- Existing floating/glass marker classes are preserved on header:
  - `c-nav-sticky`
  - `c-nav-floating`
  - `c-nav-glass`
- Hero remains full-bleed (`c-home-bleed`) and footer remains dark full-bleed (`c-footer-bleed`).

## Proof nav remains visible while scrolling (EN + ES)

- Scrolled-state screenshots captured at `#main` anchor (post-hero position), nav remains visible in viewport:
  - `docs/reports/screenshots/tb04/en-home-desktop-scrolled.png`
  - `docs/reports/screenshots/tb04/en-home-mobile-scrolled.png`
  - `docs/reports/screenshots/tb04/es-home-desktop-scrolled.png`
  - `docs/reports/screenshots/tb04/es-home-mobile-scrolled.png`

## Screenshot index (required 8)

1. `docs/reports/screenshots/tb04/en-home-desktop-firstscreen.png`
2. `docs/reports/screenshots/tb04/en-home-desktop-scrolled.png`
3. `docs/reports/screenshots/tb04/en-home-mobile-firstscreen.png`
4. `docs/reports/screenshots/tb04/en-home-mobile-scrolled.png`
5. `docs/reports/screenshots/tb04/es-home-desktop-firstscreen.png`
6. `docs/reports/screenshots/tb04/es-home-desktop-scrolled.png`
7. `docs/reports/screenshots/tb04/es-home-mobile-firstscreen.png`
8. `docs/reports/screenshots/tb04/es-home-mobile-scrolled.png`

## Command outputs summary

1) `npm run check:i18n`  
- PASS: `Parity check passed for 5 locale file pairs.`

2) `npm run build`  
- PASS: Astro static build completed successfully; 10 routes generated.

3) `rg -n "c-nav-sticky|c-nav-floating|c-nav-glass|c-home-bleed|c-footer-bleed" dist/index.html dist/es/index.html`  
- PASS: markers present in both EN and ES built home HTML.
- Built home headers include: `c-header c-nav-sticky c-nav-floating c-nav-glass c-home-nav-fixed`.

4) Forbidden scan  
`rg -n -i "(connect wallet|wallet connect|buy now|swap|price target|price prediction|founder|guaranteed gains|guaranteed returns)" src/content src/pages dist`
- PASS: no matches.

## PASS/FAIL self-check (`docs/DESIGN_ACCEPTANCE_CRITERIA_V2.md`)

1. Full-bleed Hero: PASS  
2. Full-bleed Dark Footer Anchor: PASS  
3. Floating Sticky Navigation: PASS  
4. Navigation Readability and Structure: PASS  
5. Hero Sub-Block Controlability: PASS  
6. EN/ES Parity Integrity: PASS  
7. Compliance Guardrails: PASS  
8. Build and QA Evidence: PASS

Overall: PASS
