# TB-04 - Layout Reset (Hero + Floating Nav + Dark Footer + About link)

## Objective

Execute a homepage structural reset so the homepage reads as full-bleed, HQ-style composition with floating sticky glass nav and full-bleed dark footer.

## Exact files to change

Required:
- `src/layouts/BaseLayout.astro`
- `src/components/Header.astro`
- `src/components/LanguageToggle.astro`
- `src/components/Footer.astro`
- `src/pages/index.astro`
- `src/pages/es/index.astro`
- `src/styles/global.css`
- `src/content/en/site.json`
- `src/content/es/site.json`

About route requirement (pick one clear strategy):
- preferred create placeholder pages:
  - `src/pages/about.astro`
  - `src/pages/es/about.astro`
- if placeholder creation is deferred, nav About link must be visibly disabled with clear label (no broken link).

## Definition of done

- Hero is full-bleed (100vw edge-to-edge background) on EN and ES homepage.
- Hero content remains centered in max-width container.
- Nav is floating centered frame, sticky, and glass/blur style.
- Nav menu labels are exactly:
  - Community
  - Roadmap
  - Safety
  - About
- Left brand is `FamBIT` and clickable to home.
- Right control is language dropdown (EN/ES) and parity remains correct.
- Footer is full-bleed dark anchor (near-black) edge-to-edge.
- Hero sub-blocks are identifiable and mappable for STAM control:
  - H-02a
  - H-02b
  - H-02c
  - H-02d
  - H-02e (optional)

## Must NOT change

- Do not rewrite homepage content meaning.
- Do not redesign other routes (`/safety`, `/community`, `/roadmap`) in this TB.
- Do not remove compliance/disclaimer/official-link architecture.
- Do not introduce wallet/buy/swap/price-target/founder-identity or risky script behavior.

## QA steps

1. `npm run check:i18n`
2. `npm run build`
3. Verify full-bleed hero in built homepage HTML and screenshots:
   - `dist/index.html`
   - `dist/es/index.html`
4. Verify nav behavior/style markers in built HTML:
   - sticky
   - floating frame
   - blur/glass treatment
5. Verify exact nav item set and About presence.
6. Verify language dropdown works EN/ES without layout break.
7. Verify full-bleed dark footer on EN/ES homepage.
8. Verify hero sub-block IDs are traceable in template/markup mapping.
9. Run forbidden-scope scan:
   - `rg -n -i "(connect wallet|wallet connect|buy now|swap|price target|price prediction|founder|guaranteed gains|guaranteed returns)" src/content src/pages dist`

## Fail conditions

- Hero is not full-bleed edge-to-edge.
- Footer is not full-bleed dark anchor.
- Nav is not floating, not sticky, or not glass/blur.
- Nav readability fails over hero background.
- Nav labels differ from required set or About is missing/unclear.
- EN/ES parity breaks.
- Hero sub-blocks cannot be distinctly identified for STAM control.
- Any hard compliance constraint violated.
