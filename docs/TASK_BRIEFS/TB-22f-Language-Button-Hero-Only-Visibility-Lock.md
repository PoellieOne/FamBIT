# TB-22f — Language Button Hero-Only Visibility Lock

## Role / Mode
Gatekeeper (S03 / FamBIT)
Mode: Contract + Design Governance + QA

## Clarification lock
Source-of-truth intent (Ralph): language button is only for the top full-hero context.

Therefore:
- visible in top hero state
- not visible once user scrolls beyond hero-top context

## Mission
Implement language control visibility so it is limited to hero-top usage and disappears outside that context.

## Scope lock
- CSS-first implementation preferred.
- No nav architecture refactor.
- No unrelated style changes.
- Keep nav constraints intact (single-row, edge-gap floor, inter-button floor).

## Hard behavior contract
1. Top-state (`scrollY=0`): language button is visible.
2. Scrolled-state (`scrollY=320`): language button is not visible.
3. No overlap with nav in top-state.
4. No residual floating language button over lower sections.

## Implementation guidance
- Prefer hero-bound positioning/visibility model over global viewport-fixed persistence.
- If JS is required, keep it minimal and only for visibility state; do not alter nav geometry.

## Fail conditions
FAIL if:
- language button remains visible in scrolled-state
- language button overlaps nav in top-state
- solution introduces nav regressions (wrap/clipping/spacing floors)

## Required deliverables
- Changed files list.
- Exact before/after for language positioning/visibility rules.
- Report: `docs/reports/TB-22f-LANGUAGE-HERO-ONLY-VISIBILITY-LOCK-REPORT.md`
- Screenshots in `docs/reports/screenshots/tb22f/`:
  - EN/ES x tablet portrait/tablet landscape/smallest
  - top (`scrollY=0`) + scrolled (`scrollY=320`)
- Metrics proving:
  - `langVisibleTopState = true`
  - `langVisibleScrolledState = false`
  - `noNavLangOverlapTop = true`
- Build checks:
  - `npm run build`
  - `npm run check:i18n`
