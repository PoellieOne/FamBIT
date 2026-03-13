# TB-22h — Landscape Reachability and Hero-Visibility (No Forced Scroll)

## Role / Mode
Gatekeeper (S03 / FamBIT)
Mode: Contract + Design Governance + QA

## Mission
Fix mobile landscape top-reachability and language-visibility reliability without forced programmatic scrolling.

## Explicit UX rule
No forced `scrollTo(0,0)` behavior on orientation/resize.
User scroll position must remain natural.

## Scope
- Resolve landscape "cannot reach top" behavior through robust viewport/visibility logic.
- Keep language button behavior aligned with hero-top-only intent.
- Preserve existing nav spacing/containment contracts.

## Required behavior

### A) Reachability
- In Android Chrome portrait and landscape, top of page remains reachable by normal user scrolling.
- No scroll traps.

### B) Language visibility logic (hero-top only)
- Visible only when hero-top context is active.
- Hidden outside hero-top context.
- Do not rely solely on raw `scrollY` threshold if it is viewport-UI fragile.
- Prefer sentinel/viewport-observer style visibility trigger if needed.

### C) No forced scroll side effects
- Orientation changes must not trigger automatic jump to top.
- No artificial snap behavior introduced.

## Constraints retained
- No nav architecture refactor.
- No overlap between nav and language control.
- Single-row nav.
- Inter-button gap >= 4px.
- Edge-gap >= 4px.
- No clipping/ellipsis.

## Acceptatiecriteria
- Landscape top is reachable naturally on real Android Chrome.
- Language control visibility remains correct (top-only) in portrait + landscape.
- No regressions in nav geometry constraints.

## Fail conditions
FAIL if:
- top remains unreachable in landscape
- solution uses forced scroll reset
- language control visibility becomes inconsistent
- nav spacing/containment regresses

## Required deliverables
- Changed files list.
- Exact before/after for:
  - hero/viewport height logic (if changed)
  - language visibility trigger logic
  - any overflow/scroll-related rules touched
- Report: `docs/reports/TB-22h-LANDSCAPE-REACHABILITY-HERO-VISIBILITY-REPORT.md`
- Screenshots: `docs/reports/screenshots/tb22h/`
  - Android Chrome portrait + landscape
  - top and scrolled states
  - EN + ES
- Real-device proof note (required):
  - device/browser/version
  - explicit statement: top reachable naturally = PASS/FAIL
- Build checks:
  - `npm run build`
  - `npm run check:i18n`
