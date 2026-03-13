# TB-22d — Language Button Simple Fixed Anchor

## Role / Mode
Gatekeeper (S03 / FamBIT)
Mode: Contract + Design Governance + QA

## Status override
TB-22c is reclassified as **FAIL** due to language button scrolling behavior regression.

## Mission
Replace complex language-button logic with a simple fixed-anchor model.

## Non-negotiable rule
Drop the smart/complex behavior.

Language button must be:
- `position: fixed`
- fixed to top-right viewport corner
- `z-index` lower than nav container
- vertical offset = nav container height + extra spacing (10px)

## Scope lock
- CSS-only.
- No markup refactor.
- No nav architecture changes.
- ALL CAPS nav remains as-is.

## Required positioning contract

### Language anchor
- Applies to mobile + tablet (and may be global if simpler/stabler).
- `top` must be computed from nav container profile, not scroll state.
- Preferred formula style:
  - `top = env(safe-area-inset-top, 0px) + navTop + navOuterHeight + 10px`

Where `navOuterHeight` is represented by current nav token model (row min-height + vertical padding + border if needed), not runtime drift.

### Layering
- Nav layer stays above language button.
- Language button must never visually pass in front of nav container.

### Scroll behavior
- On scroll, language button must keep same viewport anchor.
- It must not move with hero content.
- It must not appear attached to nav movement artifacts.

## Existing constraints retained
- No nav-language overlap.
- Single-row nav.
- Inter-button gap floor >= 4px.
- Edge-gap floor >= 4px.
- No clipping/ellipsis.

## Acceptance criteria
- Tablet + smallest EN/ES: language button remains fixed under nav at a stable offset.
- No overlap with nav container in top or scrolled states.
- Z-layer ordering is correct (language below nav).

## Fail conditions
FAIL if:
- language button scrolls with menu/hero
- language button top offset changes between top and scrolled state
- language button overlaps nav
- language button appears above nav layer

## Required deliverables
- Changed files list.
- Exact before/after values for:
  - `position`, `top`, `right`, `z-index`
  - nav height tokens used in `top` calculation
- Report: `docs/reports/TB-22d-LANGUAGE-SIMPLE-FIXED-ANCHOR-REPORT.md`
- Metrics file with:
  - `langTopTopState`
  - `langTopScrolledState`
  - `langTopDelta` (must be 0 for fixed anchor profile)
  - `noNavLangOverlap`
- Screenshot evidence: `docs/reports/screenshots/tb22d/` (EN/ES x tablet portrait, tablet landscape, smallest x top/scrolled)
- Build checks:
  - `npm run build`
  - `npm run check:i18n`
