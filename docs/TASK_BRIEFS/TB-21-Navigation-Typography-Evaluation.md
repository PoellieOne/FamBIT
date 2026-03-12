# TB-21 — Navigation Typography Evaluation (Optional)

## Role / Mode
Gatekeeper (S03 / FamBIT)
Mode: Contract + Design Governance + QA

## Mission
Evaluate ALL CAPS navigation typography and keep it only if rhythm and stability improve.

## Context lock
- Hero, nav frame, and layout architecture are frozen.
- This is a visual evaluation, not a structural nav rewrite.

## Scope
Optional variant:
- labels in ALL CAPS
- letter-spacing: +4-6%
- font-weight: 500-600

## Hard constraints
- Maintain single-row navigation contract.
- Navigation must never wrap.
- Keep current nav spacing/frame behavior.
- No hero layout changes.

## Decision rule
- If visual rhythm degrades, readability drops, or wrap risk increases: revert and keep current typography.

## Acceptance criteria
- If accepted: ALL CAPS styling meets constraints and keeps one-row stability.
- If rejected: explicit revert with rationale and no net visual regression.

## Fail conditions
FAIL if:
- navigation becomes multi-row
- spacing/frame behavior changes structurally
- hero layout changes

## Verification requirements
- Changed file list.
- Before/after desktop nav screenshots.
- Mobile/tablet check for wrap behavior.
- `npm run build` result.
- Final verdict: `KEPT` or `REVERTED` with reason.
