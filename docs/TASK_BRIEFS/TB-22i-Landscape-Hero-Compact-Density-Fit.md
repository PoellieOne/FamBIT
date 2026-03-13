# TB-22i — Landscape Hero Compact Density Fit

## Role / Mode
Gatekeeper (S03 / FamBIT)
Mode: Contract + Design Governance + QA

## Status
Previous issues (menu containment + landscape top reachability) are PASS on real-device.
New issue is **FAIL**: compact mobile landscape hero text density is too large and overlaps available space near nav.

## Mission
Tune hero content density for compact landscape so nav and hero copy coexist without overlap, while preserving hierarchy and structure.

## Scope lock
- No structural layout changes.
- No hero/nav architecture refactor.
- No CTA removal.
- No language behavior regressions.

## Target condition
On compact landscape mobile, hero content must fit in the lower-left composition zone with clear breathing room below nav and no overlap.

## Allowed tuning
- Landscape-specific typography scaling for hero text block (headline/subhead/body/microcopy).
- Landscape-specific spacing compression (vertical gaps/margins/paddings).
- Optional landscape max-width tuning for hero text column.

## Not allowed
- Moving nav out of current system.
- Reordering hero content blocks.
- Disabling/rewriting CTA behavior.

## Hard constraints
- Headline remains primary visual authority.
- Language button behavior from TB-22f/TB-22h remains intact.
- Single-row nav and spacing floors remain intact.
- No clipping of hero text.

## Acceptance criteria
- Compact landscape EN/ES: no overlap between nav zone and hero text zone.
- Hero text block is fully readable without clipping.
- Visual hierarchy remains: eyebrow < headline < subhead/body.
- Existing nav constraints remain PASS.

## Fail conditions
FAIL if:
- nav and hero text overlap in compact landscape
- headline/subhead/body clipping occurs
- hierarchy collapses (headline loses dominance)
- any previously closed nav/language regressions reappear

## Required deliverables
- Changed files list.
- Exact before/after values for landscape-only hero typography and spacing tokens/rules.
- Report: `docs/reports/TB-22i-LANDSCAPE-HERO-COMPACT-DENSITY-FIT-REPORT.md`
- Screenshots: `docs/reports/screenshots/tb22i/`
  - EN/ES compact landscape top + scrolled
  - Include one with nav + full hero text block visible in same frame
- Build checks:
  - `npm run build`
  - `npm run check:i18n`
