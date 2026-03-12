# TB-21f — Nav Tablet Width Regression and Smallest Density Fix

## Role / Mode
Gatekeeper (S03 / FamBIT)
Mode: Contract + Design Governance + QA

## Status override
TB-21e is reclassified as **FAIL** for visual acceptance.

## Failure reasons (must be corrected)
1. Tablet nav regressed to near full-page width (menuholder too wide).
2. Smallest EN + ES still show too much unused menubalk ruimte.

## Mission
Restore proper tablet nav proportions and increase smallest-viewport nav density while keeping fit safety and single-row integrity.

## Context lock
- Hero/nav structure remains frozen.
- ALL CAPS remains default.
- No architectural refactor; only spacing/size tuning.

## Scope A — Tablet regression fix (hard)
- Tablet nav holder must **not** span full-page width.
- Restore a compact floating-pill proportion closer to pre-regression behavior.
- Keep centered `logo + menu` group with balanced side air.

### Tablet acceptance target
- Nav-holder visually wraps content instead of stretching edge-to-edge.
- Left/right outer breathing room is visibly present and symmetric.

## Scope B — Smallest density improvement (hard)
For smallest EN + ES:
- Reduce wasted container air further OR increase content scale (preferred first).
- Preferred order:
  1) increase logo/menu control size where safe,
  2) then tighten inner padding if still too airy.

### Smallest acceptance target
- Menu appears intentional and dense (not tiny inside oversized container).
- ES remains worst-case fit safe (no overflow/clipping).

## Guardrails
- Nav remains single row at all tested breakpoints.
- No overlap with language toggle.
- No clipping/ellipsis.
- No hero layout regression.
- No nav-frame architecture change.

## Breakpoint test matrix (required)
- Desktop compact
- Tablet (critical for regression)
- Smallest mobile EN
- Smallest mobile ES

For each: row integrity, overflow, clipping, overlap, centering, density.

## Acceptatiecriteria
- Tablet full-width regression is removed.
- Smallest EN/ES density is visibly improved.
- ALL CAPS remains active and readable.
- ES worst-case stays stable without overflow.

## Fail conditions
FAIL if:
- tablet nav-holder remains near full-page width
- smallest EN/ES still appear over-spaced/under-scaled
- nav wraps to multi-row
- overlap/clipping returns
- hero/nav contracts are broken

## Verplichte oplevering
- Changed files.
- Exact before/after CSS values for:
  - tablet nav-holder width model
  - smallest logo size
  - smallest nav button size/padding
  - smallest container inner spacing
- Screenshot evidence:
  - tablet before/after (EN + ES)
  - smallest before/after (EN + ES)
  - hero-proof scrollY=0 (EN + ES)
- `npm run build` + `npm run check:i18n` results.
- PASS/FAIL matrix per breakpoint.
