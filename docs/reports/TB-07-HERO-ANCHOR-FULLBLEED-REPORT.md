# TB-07 Hero Anchor + Full-Bleed Report

Date: 2026-03-04  
Scope: Homepage EN/ES only (`/` and `/es/`)

## Changed files

- `src/layouts/BaseLayout.astro`
- `src/styles/global.css`
- `docs/reports/TB-07-HERO-ANCHOR-FULLBLEED-REPORT.md`

## Required fix summary

1. Stable hero anchor ID
- Added `id="HOME-HERO"` on homepage hero container only (`homeHero=true`) in `BaseLayout`.
- Same ID now emitted for both EN and ES home.

2. No rounded hero image corners
- Homepage hero section now uses `rounded-none` (instead of shared rounded utility).
- Existing full-bleed hero class remains active: `c-home-hero c-home-bleed`.

3. No top seam above hero
- Added homepage shell modifier `c-home-shell` with top padding removed.
- Applied only when `homeHero=true` to keep non-home behavior unchanged.

4. No bottom seam below dark footer anchor
- `c-home-shell` also removes bottom shell padding on homepage.
- Footer remains full-bleed dark anchor (`c-footer-bleed`) and now reaches page bottom without shell-bottom gap.

## Command proof

- `npm run check:i18n` -> PASS (`Parity check passed for 5 locale file pairs.`)
- `npm run build` -> PASS (11 pages built)
- `rg -n "id=\"HOME-HERO\"|id='HOME-HERO'" dist/index.html dist/es/index.html` -> PASS (ID present in both files)
- `rg -n "c-home-bleed|c-footer-bleed" dist/index.html dist/es/index.html` -> PASS (markers present in EN+ES built home)

## Screenshot evidence index

Top edge (no seam):
- `docs/reports/screenshots/tb07/en-home-desktop-top-edge.png`
- `docs/reports/screenshots/tb07/en-home-mobile-top-edge.png`
- `docs/reports/screenshots/tb07/es-home-desktop-top-edge.png`
- `docs/reports/screenshots/tb07/es-home-mobile-top-edge.png`

Footer bottom edge (no seam):
- `docs/reports/screenshots/tb07/en-home-desktop-footer-bottom.png`
- `docs/reports/screenshots/tb07/en-home-mobile-footer-bottom.png`
- `docs/reports/screenshots/tb07/es-home-desktop-footer-bottom.png`
- `docs/reports/screenshots/tb07/es-home-mobile-footer-bottom.png`

Hero corner area (no rounding):
- `docs/reports/screenshots/tb07/en-home-desktop-hero-corner.png`
- `docs/reports/screenshots/tb07/en-home-mobile-hero-corner.png`
- `docs/reports/screenshots/tb07/es-home-desktop-hero-corner.png`
- `docs/reports/screenshots/tb07/es-home-mobile-hero-corner.png`

## TB-07 fail-condition self-check

- Hero ID missing/inconsistent on EN/ES: PASS
- Visible top seam above hero: PASS
- Visible bottom seam below footer: PASS
- Hero image corners still rounded: PASS
- Scope creep outside TB-07: PASS

Final verdict: PASS
