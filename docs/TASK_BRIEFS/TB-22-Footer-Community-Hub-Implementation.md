# TB-22 — Footer Community Hub Implementation

## Role / Mode
Gatekeeper (S03 / FamBIT)
Mode: Contract + Design Governance + QA

## Mission
Implement a dark FamBIT community-hub footer with four logical sections, responsive balance, and no hero/layout architecture changes.

## Context lock
- Hero structure, nav frame, and layout tokens remain frozen.
- Footer implementation is in scope; hero modifications are not.

## Required footer sections

### 1) FAMBIT
- Logo or wordmark
- Tagline: `Family helps family.`
- Secondary line: `Community with a coin.`

### 2) EXPLORE
- Links:
  - Missions
  - Stories
  - Safety
  - Start/About (existing routing only)

### 3) OFFICIAL
- Links:
  - X
  - Telegram
  - Pump.fun
- Microcopy:
  - `If it's not listed here, it's not official.`

### 4) JOIN
- Headline: `Build with us. Grow with us.`
- Primary CTA: `Explore missions`
- Microcopy: `Transparent rules • Community driven • No hype`

## Layout constraints
- Four sections must remain logically distinct.
- Responsive rhythm must remain balanced across desktop/tablet/mobile.
- Footer should feel like a calm end-zone; vertical padding target: approximately 80-100px total section breathing room.
- No structural impact on hero/nav contracts.

## Design intent guardrails
Footer should feel like:
- community hub
- trust anchor
- ecosystem base

Footer must not feel like:
- corporate legal footer
- crypto trading interface

## Acceptance criteria
- All four sections are present with required content.
- Footer is responsive and visually balanced.
- Existing routing is respected.
- No hero/nav layout regression.

## Fail conditions
FAIL if:
- footer breaks responsive rhythm
- hero layout changes
- footer introduces crypto trading language

## Verification requirements
- Changed file list.
- Desktop + mobile footer screenshots.
- Link map with destination paths/URLs.
- `npm run build` result.
- PASS/FAIL against fail conditions.
