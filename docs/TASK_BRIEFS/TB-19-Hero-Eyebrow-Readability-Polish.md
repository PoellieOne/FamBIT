# TB-19 — Hero Eyebrow Readability Polish

## Role / Mode
Gatekeeper (S03 / FamBIT)
Mode: Contract + Design Governance + QA

## Mission
Improve hero eyebrow readability without changing hero structure.

## Context
Hero Phase 3 layout and hierarchy are frozen and must remain unchanged.

The eyebrow text currently lacks visual readability against the hero image.

Allowed changes only:
- typography tuning
- contrast assistance
- spacing refinement

Structural layout changes are not allowed.

## Target
Hero eyebrow text:
`COMMUNITY WITH A COIN`

Color must remain exactly:
`#02B649`

## Required Adjustments

### 1) Typography adjustment
Increase eyebrow presence slightly:
- font-size: +15-20% from current value
- letter-spacing: +6-8% from current value
- font-weight: 600

Goal: improve visibility without overpowering the headline.

### 2) Contrast assist
Add exactly one subtle shadow layer:

`text-shadow: 0 1px 3px rgba(0,0,0,0.35)`

Rules:
- single shadow layer only
- shadow must remain subtle
- no glow / neon look

### 3) Vertical spacing
Increase spacing between eyebrow and headline slightly:
- margin adjustment of +2-4px

Goal: maintain breathing room after eyebrow size increase.

## Design intent
Eyebrow functions as:
- movement label
- category marker

It must remain:
- subtle
- clean
- secondary to the headline

## Constraints (hard)
- No hero structure change
- No hierarchy change
- No nav/frame change
- No layout reflow
- No non-scope style polish

## Fail conditions
FAIL if:
- headline hierarchy changes
- eyebrow color changes
- shadow becomes visually dominant
- hero layout shifts

## Verification requirements
Executor must provide:
- changed file list
- exact before/after CSS values (font-size, letter-spacing, font-weight, margin, shadow)
- desktop before/after screenshots of hero eyebrow
- `npm run build` result
- PASS/FAIL check against all fail conditions
