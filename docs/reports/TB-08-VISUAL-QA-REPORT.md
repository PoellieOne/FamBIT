# TB-08 Visual QA Report

Date: 2026-03-02  
Workdir: `/home/ralph/PoellieOne/FamBIT/fambit-site-v1`

## Final Decision

PASS

## Mandatory banner verification

- Source path exists:
  - `/home/ralph/PoellieOne/FamBIT/images/StockCake-Unity_Through_Diversity-3355074-standard.jpg` -> true
- Deployed path exists:
  - `public/images/home-main-banner.jpg` -> true
- Rendered in built EN+ES home HTML:
  - `dist/index.html` contains `src="/images/home-main-banner.jpg"`
  - `dist/es/index.html` contains `src="/images/home-main-banner.jpg"`
- Readability verified in screenshots (desktop + mobile):
  - `docs/reports/screenshots/tb08/en-home-desktop.png`
  - `docs/reports/screenshots/tb08/en-home-mobile.png`
  - `docs/reports/screenshots/tb08/es-home-desktop.png`
  - `docs/reports/screenshots/tb08/es-home-mobile.png`

## Self-loop regression check (safety CTA)

- EN safety CTA: `dist/safety/index.html` -> `Check verified links now` -> `/community`
- ES safety CTA: `dist/es/safety/index.html` -> `Verificar enlaces oficiales` -> `/es/community`
- Verdict: no self-loop regression.

## Narrative-density verdict per page (EN + ES)

Heuristic check from built HTML:

- `dist/index.html` -> narrative-first YES, bullet-wall risk NO
- `dist/safety/index.html` -> narrative-first YES, bullet-wall risk NO
- `dist/community/index.html` -> narrative-first YES, bullet-wall risk NO
- `dist/roadmap/index.html` -> narrative-first YES, bullet-wall risk NO
- `dist/es/index.html` -> narrative-first YES, bullet-wall risk NO
- `dist/es/safety/index.html` -> narrative-first YES, bullet-wall risk NO
- `dist/es/community/index.html` -> narrative-first YES, bullet-wall risk NO
- `dist/es/roadmap/index.html` -> narrative-first YES, bullet-wall risk NO

## Visual consistency QA

- Section rhythm is coherent across EN/ES pages: hero, narrative, support strip, contextual cards/blocks, CTA close.
- Spacing/typography/card language is consistent via shared classes (`atmo-panel`, `soft-strip`, `story-card`, `story-media`).
- Home hero remains visually primary and aligned to reference intent.

## Accessibility basics QA

- One H1 per page: PASS on all 8 built routes.
- Focus visible states: PASS (`src/styles/global.css` retains `:focus-visible` ring).
- Contrast with new imagery: PASS by overlay treatment + Lighthouse accessibility 100 for EN/ES home.

## Performance sanity QA

- `npm run check:i18n`: PASS
- `npm run build`: PASS
- Lighthouse best effort on `/` and `/es/`: no major regressions.
- See `docs/reports/TB-08-LIGHTHOUSE-SUMMARY.md`.

## Contract compliance QA

- Banned-term scan: no matches for forbidden scope terms.
- Official links remain exact and present on safety + footer (EN/ES); counts `2,2,2` per safety page.
- Disclaimers present on safety + footer (EN/ES).

## Screenshot pack location note

- Primary TB-08 pack (EN+ES, desktop+mobile): `docs/reports/screenshots/tb08`
- Extended route visuals from prior integration pass: `docs/reports/screenshots/tb07`
