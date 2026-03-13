# TB-22c — Language Top-Band and Nav Edge-Gap Floor

## Role / Mode
Gatekeeper (S03 / FamBIT)
Mode: Contract + Design Governance + QA

## Status
TB-22b is reclassified as **FAIL** due to language-button vertical positioning regression.

## Mission
Fix language-button vertical banding on mobile/tablet and hard-lock minimum edge gap between nav items and container edges.

## Scope lock
- CSS-only changes.
- Keep ALL CAPS enabled.
- Keep existing nav/hero architecture.
- No markup refactor.

## Problem 1 — Language button dropped too low
Observed: on tablet/mobile the language control can appear near the lower hero area instead of near nav.

### Required behavior
- Language control must remain within a **top-band** near the nav.
- On tablet/mobile it may sit below nav, but only by a controlled distance.
- Never allowed to drift into mid/lower hero zones.

### Top-band contract
For tablet + smallest (EN/ES, top + scrolled):
- `langTop >= navBottom + 4px`
- `langTop <= navBottom + 24px`

This keeps it visibly under nav while preventing excessive drop.

## Problem 2 — Nav item to container edge gap
Requirement must be explicit:
- Minimum horizontal gap between the nav item set and container edges applies on **both sides**.

### Edge-gap floor contract
For tablet + smallest (EN/ES, top + scrolled):
- left edge gap >= 4px
- right edge gap >= 4px

## Existing constraints retained
- Inter-button gap floor >= 4px.
- Single-row nav only.
- No clipping/ellipsis/overflow.
- No nav/language overlap.
- No hero layout regression.

## Acceptance criteria
- Language button remains in top-band near nav (all required combinations).
- Edge-gap floors are met on left and right container edges.
- Previous stability checks remain PASS.

## Fail conditions
FAIL if:
- language button drops below top-band range
- any edge-gap < 4px
- wrap/overlap/clipping reappears
- nav-language overlap appears

## Verplichte oplevering
- Changed files list.
- Exact before/after values for:
  - language top/right/z tokens
  - nav inner-air / edge-gap tokens
- Report: `docs/reports/TB-22c-LANGUAGE-TOPBAND-EDGEGAP-REPORT.md`
- Metrics file including:
  - `langToNavDelta` (navBottom to langTop)
  - `leftEdgeGap`, `rightEdgeGap`
  - existing gap/overlap/single-row checks
- Screenshot set: `docs/reports/screenshots/tb22c/`
- Build checks:
  - `npm run build`
  - `npm run check:i18n`
