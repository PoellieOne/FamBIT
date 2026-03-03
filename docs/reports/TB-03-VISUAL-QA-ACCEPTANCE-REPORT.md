# TB-03 Visual QA Acceptance Report

Date: 2026-03-03  
Scope: Homepage only (`/` and `/es/`)  
Mode: FAIL-CLOSED against `docs/DESIGN_ACCEPTANCE_CRITERIA.md`

## Final Decision

PASS

All mandatory criteria A-I pass with fresh build evidence and updated screenshot pack.

## Evidence Inputs

- Commands:
  - `npm run check:i18n` -> PASS (`Parity check passed for 5 locale file pairs.`)
  - `npm run build` -> PASS (8 routes generated)
- Built outputs reviewed:
  - `dist/index.html`
  - `dist/es/index.html`
- Screenshot pack:
  - `docs/reports/screenshots/tb03/en-home-desktop-firstscreen.png`
  - `docs/reports/screenshots/tb03/en-home-mobile-firstscreen.png`
  - `docs/reports/screenshots/tb03/es-home-desktop-firstscreen.png`
  - `docs/reports/screenshots/tb03/es-home-mobile-firstscreen.png`
  - `docs/reports/screenshots/tb03/en-home-desktop-fullpage.png`
  - `docs/reports/screenshots/tb03/en-home-mobile-fullpage.png`
  - `docs/reports/screenshots/tb03/es-home-desktop-fullpage.png`
  - `docs/reports/screenshots/tb03/es-home-mobile-fullpage.png`

## Acceptance Matrix (A-I)

| Criteria | Status | Evidence |
|---|---|---|
| A) Hero atmosphere match | PASS | Hero is dominant and mood-setting on first screen in EN+ES screenshots (`*firstscreen.png`); `c-home-hero` overlay and scale visible in `dist/index.html` and `dist/es/index.html`. |
| B) Typography hierarchy clarity | PASS | Visual rank is clear (eyebrow -> `h1` -> subcopy -> CTA row). Confirmed in built HTML hero block and first-screen screenshots for EN+ES. |
| C) Spacing rhythm quality | PASS | Hero-to-main transition and first two sections are breathable via `c-home-main`, `c-home-panel`, `c-home-strip`; verified in desktop/mobile full-page screenshots. |
| D) Header/Nav integration | PASS | Header/nav and language toggle are inside hero composition (`<header class="c-header">` in hero system) on EN+ES home. |
| E) Structural integrity vs legacy layout | PASS | Homepage now reads as template-system composition using shared classes, not ad-hoc per-block utility drift. |
| F) Token-first implementation quality | PASS | Shared semantic classes and token-backed spacing/colors are used in `src/styles/global.css`; homepage consumes reusable component classes. |
| G) Bilingual behavior integrity | PASS | EN/ES both render and route correctly; `npm run check:i18n` passes; structural marker counts match between `dist/index.html` and `dist/es/index.html`. |
| H) Compliance guardrails | PASS | No wallet-connect UI, buy/swap embeds, founder exposure, or risky external scripts on home pages; required official-link architecture remains unchanged. |
| I) Build integrity and evidence completeness | PASS | Build + i18n checks pass, and screenshot evidence directly covers A-H for homepage EN+ES desktop+mobile. |

## Structural Parity Snapshot

Marker counts from built home pages (`dist/index.html` vs `dist/es/index.html`):

- `c-home-panel`: 3 / 3
- `c-home-strip`: 1 / 1
- `c-home-main`: 1 / 1
- `c-home-hero`: 1 / 1
- `c-lang-toggle`: 1 / 1
- `/images/home-main-banner.jpg`: 1 / 1

Verdict: EN/ES homepage structure is aligned.

## Notes

- Mobile screenshots were captured with explicit viewport (`390x844`) on Chromium for deterministic output.
- Mandatory home banner remains active on EN+ES home.
