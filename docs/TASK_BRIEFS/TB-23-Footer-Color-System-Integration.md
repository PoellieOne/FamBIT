# TB-23 — Footer Color System Integration

## Role / Mode
Gatekeeper (S03 / FamBIT)
Mode: Contract + Design Governance + QA

## Mission
Apply the specified footer color system to support trust-first readability and community tone.

## Context lock
- Color work is limited to footer scope.
- Hero/nav/layout architecture remains unchanged.

## Required color system
- Background: `#0B0B12`
- Top border: `1px solid rgba(93,72,126,0.35)`
- Text: white / soft white
- Links: `#02B649`
- Link hover: slightly brighter green
- Optional accent use: `#5D487E` (subtle separators/icons only)

## Constraints
- Preserve readability and calm visual hierarchy.
- No neon or trading-UI look.
- Avoid over-saturated accent usage.
- No footer layout structure changes outside TB-22 needs.

## Acceptance criteria
- Footer colors match required values or equivalent token mapping.
- Link/hover contrast remains clear and accessible.
- Overall footer tone matches community hub intent.

## Fail conditions
FAIL if:
- footer introduces crypto trading language or trading-dashboard tone
- readability/contrast drops materially
- hero/nav/layout contracts are impacted

## Verification requirements
- Changed file list.
- Footer color values (or tokens) listed explicitly.
- Desktop screenshot showing full footer.
- `npm run build` result.
- PASS/FAIL against fail conditions.
