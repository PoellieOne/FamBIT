# TB-21j — Blocking Fix: Nav Containment and Language Scroll Anchor

## Role / Mode
Gatekeeper (S03 / FamBIT)
Mode: Contract + Design Governance + QA

## Status
Current run is **FAIL (BLOCKING)**.

## Blocking defects (must be fixed before any further polish)
1. Nav containment break:
   - Rightmost button (`SEGURIDAD` / `SAFETY`) falls outside container bounds.
   - Left side overlap: first button (`MISIONES` / `MISSIONS`) overlaps logo area.
2. Language control scroll-anchor break:
   - Language button scrolls with nav on tablet + smallest.
   - Required behavior is stable anchor per breakpoint profile, not drift/push.

## Mission
Restore strict containment of `logo + buttons` inside nav container and restore deterministic language-button anchoring behavior.

## Scope lock
- Keep ALL CAPS.
- Keep current nav/hero architecture (no markup refactor).
- Only adjust CSS geometry/positioning/z-layer behavior.

## Hard requirements

### A) Containment (non-negotiable)
- All nav buttons must remain fully inside container in EN + ES.
- No logo/button overlap.
- Single-row contract stays intact.

### B) Language anchor (non-negotiable)
- Tablet: language control must remain inline-right when profile says inline-right, with stable top anchor under scroll.
- Smallest: below-nav profile allowed, but must remain anchored and not be dragged by nav scroll behavior.
- No push/drift artifacts between top and scrolled states.

## Hard constraints
- No clipping/ellipsis.
- No overlap between nav set and language control.
- No hero layout regression.

## Verification matrix (required)
- Breakpoints: `768x1024`, `1024x768`, `320x568`
- Locales: EN + ES
- States: `scrollY=0` and `scrollY=320`

## Measured checks
- Containment: every `.c-nav-link` bounding rect fully inside nav container rect.
- Logo separation: first button left edge > logo right edge + safety gap.
- Language anchor stability: top delta between expected anchor and measured anchor <= 1px between top/scrolled where fixed profile applies.
- No overlap/intersection between nav set and language control.

## Fail conditions
FAIL if:
- any nav button exits container bounds
- logo/button overlap occurs
- language button scrolls/drifts with nav where fixed anchor is required
- any wrap/overlap/clipping returns

## Required deliverables
- Changed files list.
- Exact before/after CSS values for containment and language anchoring rules.
- Report: `docs/reports/TB-21j-BLOCKING-FIX-REPORT.md`
- Screenshots: `docs/reports/screenshots/tb21j/` (EN+ES, required matrix)
- `npm run build` + `npm run check:i18n` results.
- PASS/FAIL table with explicit rows for both blocking defects.
