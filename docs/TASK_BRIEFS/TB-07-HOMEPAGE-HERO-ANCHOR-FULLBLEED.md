# TB-07 - Homepage Hero Anchor ID + Edge Alignment (Full-Bleed Hygiene)

## Objective

Make hero and footer edge behavior exact: no rounded hero image corners, no top/bottom whitespace seams, and add explicit hero anchor ID for STAM targeting.

## Exact files to change

- `src/layouts/BaseLayout.astro`
- `src/styles/global.css`
- optional if needed: `src/pages/index.astro`, `src/pages/es/index.astro` (only for anchor wiring)

## Required changes

1. Add stable hero anchor ID on homepage hero container:
   - EN and ES homepage must expose same hero ID (example: `id="HOME-HERO"`)
2. Remove unwanted rounding from hero image/crop so image reads truly edge-to-edge.
3. Ensure no top white seam above hero (homepage first paint must start at hero image).
4. Ensure no bottom white seam below dark full-bleed footer anchor.

## Definition of done

- Hero on `/` and `/es/` has explicit stable ID.
- Hero image corners are not rounded.
- Hero starts flush at top without visible white gap.
- Footer dark bleed reaches bottom edge without visible white gap.

## Must NOT change

- Do not change homepage copy semantics.
- Do not alter STAM route security logic.
- Do not redesign non-home pages.

## QA checks

1. `npm run check:i18n`
2. `npm run build`
3. Verify hero ID appears in:
   - `dist/index.html`
   - `dist/es/index.html`
4. Visual check screenshots:
   - first viewport EN/ES (desktop + mobile)
   - footer-bottom EN/ES (desktop + mobile)

## Fail conditions

- Hero ID missing or inconsistent between EN/ES.
- Any visible top seam above hero.
- Any visible bottom seam below footer anchor.
- Hero image still rounded at corners.
