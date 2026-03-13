# TB-22e — Language Button Hard Fixed Viewport Lock

## Role / Mode
Gatekeeper (S03 / FamBIT)
Mode: Contract + Design Governance + QA

## Status override
TB-22d is reclassified as **FAIL** (observed behavior still scroll-coupled in delivered evidence).

## Mission
Apply a hard, minimal model: language button is permanently viewport-fixed and does not move with page scroll.

## Non-negotiable rule
Language button is a simple top-hero control and must be treated as a fixed viewport element.

## Hard implementation rules
- CSS-only.
- `position: fixed` (no absolute/relative fallback for mobile/tablet states).
- Fixed `top` and `right` anchor values (safe-area aware allowed).
- No `top` formulas derived from nav height.
- No scroll-linked behavior.
- `z-index` must stay lower than nav container.

## Reference profile (default)
- Mobile/tablet language anchor:
  - `top: calc(env(safe-area-inset-top, 0px) + 82px)`
  - `right: max(0.5rem, calc(env(safe-area-inset-right, 0px) + 0.5rem))`
  - `z-index: 58` (nav remains higher)

If a small value adjustment is required to avoid overlap on real device, keep same model and only tune numeric offset.

## Constraints retained
- No nav-language overlap.
- Nav remains single-row.
- Inter-button gap >= 4px.
- Edge-gap >= 4px.
- No clipping/ellipsis.
- No architecture/markup changes.

## Acceptance criteria
- Language button keeps exactly the same viewport position between top and scrolled states.
- No overlap with nav on tablet/smallest EN+ES.
- Nav constraints remain PASS.

## Fail conditions
FAIL if:
- language button moves with scroll
- `top` differs between top/scrolled states
- overlap with nav appears
- z-layer order is broken (language above nav)

## Required deliverables
- Changed files list.
- Exact before/after for `position`, `top`, `right`, `z-index`.
- Report: `docs/reports/TB-22e-LANGUAGE-HARD-FIXED-VIEWPORT-LOCK-REPORT.md`
- Metrics file with:
  - `langTopTopState`
  - `langTopScrolledState`
  - `langTopDelta` (must be 0)
  - `noNavLangOverlap`
- Evidence: `docs/reports/screenshots/tb22e/`
  - EN/ES x tablet portrait, tablet landscape, smallest x top/scrolled
  - plus short scroll video or frame-pair proof per locale showing unchanged button position in viewport
- Build checks:
  - `npm run build`
  - `npm run check:i18n`
