# TB-21g — Nav System Rebaseline: Centering and Language-Control Stability

## Role / Mode
Gatekeeper (S03 / FamBIT)
Mode: Contract + Design Governance + QA

## Status override
TB-21f is reclassified as **FAIL** for visual/behavioral acceptance.

## Why this rebaseline exists
Iterative patching caused local fixes with new side effects.
This task performs a controlled nav rebaseline with deterministic rules.

## Non-negotiable acceptance goals

### Goal 1 — True centered nav set in container
`logo + menu-buttons` must render as one centered group **inside** nav container.

Rules:
- Left and right free space inside container must both be > 0.
- Side gutters may be small, but never collapse to 0 on either side.
- ES and EN must both satisfy this at tablet and smallest breakpoints.

### Goal 2 — Language control stability by breakpoint
Language control must not be pushed down when overlap risk does not exist.

Rules:
- Tablet EN/ES: keep language control in-row/right if no overlap risk.
- Smallest EN/ES: allow below-nav placement only when required for fit safety.
- Scroll behavior must be stable: nav and language control keep intended viewport anchoring and do not "drift" or get re-pushed by scroll.

## Scope
- Rebaseline nav spacing/alignment behavior for tablet + smallest.
- Rebaseline language-control placement logic by breakpoint/fit-risk.
- Keep ALL CAPS default.

## Hard constraints
- Hero and nav architecture remain frozen.
- No multi-row nav.
- No clipping/ellipsis of nav labels.
- No overlap between nav set and language control.
- No hero layout regression.

## Implementation guidance (deterministic)
- Avoid one global rule that forces language control below nav for all <= tablet widths.
- Define explicit breakpoint behavior:
  - desktop/tablet: preferred inline-right when safe
  - smallest: fallback below-nav when necessary
- Ensure centered group remains centered independent of locale width differences.
- Enforce minimum internal side gutters via explicit constraints.

## Required verification matrix
Breakpoints:
- Desktop compact
- Tablet EN
- Tablet ES
- Smallest EN
- Smallest ES

Checks per breakpoint:
- centered group integrity
- left/right gutter > 0
- row integrity (single row)
- overflow/clipping
- language-control placement correctness
- scroll stability (top + scrolled state)

## Evidence requirements
- Changed files list.
- Exact before/after CSS values for:
  - nav container internal side gutters
  - centering/spacing rules for `logo + menu`
  - language-control placement rules per breakpoint
- Screenshot set:
  - top-state per breakpoint (EN + ES)
  - scrolled-state per breakpoint where language control is visible
- Scroll proof (short capture or paired screenshots): top vs scrolled for tablet and smallest.
- `npm run build` + `npm run check:i18n` results.
- PASS/FAIL table with explicit row for both non-negotiable goals.

## Fail conditions
FAIL if:
- centered group is not consistently centered in container
- internal left/right gutter collapses to 0 on either side
- language control remains unnecessarily pushed down on tablet
- scroll causes language-control/nav positional drift or reflow side effects
- any wrap/overlap/clipping or hero/nav contract breach occurs
