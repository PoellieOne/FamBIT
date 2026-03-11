# Phase 3 Micro Polish Acceptance Note

Date: 2026-03-11
Scope: TB-16, TB-17, TB-18
Role: Gatekeeper QA (Contract + Design Governance)

## Outcome
Phase 3 Hero Micro Polish is accepted.

All three task briefs pass their explicit fail conditions with supporting build validation and screenshot evidence.

## TB-16 — ES Localization Fix
- ES secondary CTA localized to `Inicia una mision`.
- Hero trust microcopy now sourced from locale content (`home.trust.microcopy`).
- No hero structure or layout changes introduced.
- Evidence: `docs/reports/screenshots/tb16/es-hero-localization-default.png`.

## TB-17 — CTA Interaction Polish
- Primary CTA hover refined with slightly brighter green and subtle glow.
- Secondary CTA hover refined with border glow and light tint.
- No border-width jump or reflow behavior introduced.
- Evidence:
  - `docs/reports/screenshots/tb17/en-cta-default-desktop.png`
  - `docs/reports/screenshots/tb17/en-cta-hover-primary-desktop.png`
  - `docs/reports/screenshots/tb17/en-cta-hover-secondary-desktop.png`

## TB-18 — Optional Hero Motion Depth
- Desktop-only, background-only parallax applied to hero image.
- Motion strength implemented at 8% (`offset * 0.08`).
- Mobile/tablet parallax disabled via media gate.
- No motion applied to text container or nav frame.
- Overlay stack unchanged; readability preserved.
- Evidence:
  - `docs/reports/screenshots/tb18/en-hero-motion-desktop-top.png`
  - `docs/reports/screenshots/tb18/en-hero-motion-desktop-scroll320.png`
  - `docs/reports/screenshots/tb18/es-hero-motion-desktop-top.png`
  - `docs/reports/screenshots/tb18/es-hero-motion-desktop-scroll320.png`
  - `docs/reports/screenshots/tb18/en-mobile-top-no-parallax.png`
  - `docs/reports/screenshots/tb18/en-mobile-scroll320-no-parallax.png`

## Verification
- `npm run check:i18n` passed.
- `npm run build` passed.

## Final QA Decision
Accepted for Phase 3 freeze compliance.
