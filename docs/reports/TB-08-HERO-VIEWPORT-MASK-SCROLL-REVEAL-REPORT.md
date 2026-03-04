# TB-08 Hero Viewport Fill + Mask + Scroll Reveal Report

Date: 2026-03-04  
Scope: Homepage only (`/` and `/es/`)

## Changed files

- `src/layouts/BaseLayout.astro`
- `src/styles/global.css`
- `docs/reports/TB-08-HERO-VIEWPORT-MASK-SCROLL-REVEAL-REPORT.md`

## What changed

1) Full viewport hero on open
- Homepage hero section now includes `c-home-hero-stage` and image classes `h-[100svh] min-h-[100vh]`.
- This ensures first paint is a full-screen hero on EN and ES.

2) Scroll reveal of body content
- Hero occupies first viewport; body sections are encountered after scrolling.
- Existing homepage structure remains unchanged; spacing remains rhythm-based via `c-home-main`.

3) Deliberate dark mask treatment
- Replaced simple gradient utility with dedicated `c-home-hero-mask` using layered radial + linear overlays.
- Mask deepens lower reading zones while preserving atmosphere.

4) Readability preservation
- Nav, headline, subcopy, and CTAs remain on top of the new mask layer with sufficient contrast.
- Nav behavior, labels, and locale behavior unchanged.

## Command outputs

- `npm run check:i18n` -> PASS (`Parity check passed for 5 locale file pairs.`)
- `npm run build` -> PASS (`11 page(s) built`)
- `rg -n "HOME-HERO|c-home-hero-stage|c-home-hero-mask|h-\[100svh\]|min-h-\[100vh\]" dist/index.html dist/es/index.html` -> PASS (all markers present in EN and ES home)

## Screenshot evidence

First viewport (hero fill + readability):
- `docs/reports/screenshots/tb08/en-home-desktop-first-viewport.png`
- `docs/reports/screenshots/tb08/en-home-mobile-first-viewport.png`
- `docs/reports/screenshots/tb08/es-home-desktop-first-viewport.png`
- `docs/reports/screenshots/tb08/es-home-mobile-first-viewport.png`

After scroll (body reveal):
- `docs/reports/screenshots/tb08/en-home-desktop-after-scroll.png`
- `docs/reports/screenshots/tb08/en-home-mobile-after-scroll.png`
- `docs/reports/screenshots/tb08/es-home-desktop-after-scroll.png`
- `docs/reports/screenshots/tb08/es-home-mobile-after-scroll.png`

## TB-08 fail-condition self-check

- Hero fails to occupy first viewport: PASS
- Body content intrudes in initial hero viewport: PASS
- Mask effect absent/too weak: PASS
- Nav/hero text contrast unreadable: PASS

Final verdict: PASS
