# DESIGN_ACCEPTANCE_CRITERIA_HERO_PHASE2

Mode: FAIL-CLOSED  
Scope: Homepage hero update Phase 2 (`/` and `/es/`)

Any single fail => overall FAIL.

## 1) Structural freeze integrity

PASS when:
- hero layout structure remains unchanged
- hero container geometry remains unchanged
- breakpoints remain unchanged
- nav frame system remains unchanged
- STAM block ID structure remains unchanged

FAIL when:
- any structural/layout system changes are introduced

## 2) Navigation update

PASS when:
- nav frame remains floating glass
- nav is single row only (no wrap, no second row)
- brand `FamBIT` links to homepage
- center menu labels are exactly: `Missions`, `Start`, `Stories`, `Safety`
- hover color is `#02B649`

FAIL when:
- nav wraps to multiple rows
- labels differ
- hover color not applied

## 3) Language switch placement

PASS when:
- language switch is removed from nav
- language switch appears at hero top-right
- style is minimal pill dropdown with white text
- EN/ES routing behavior remains correct

FAIL when:
- selector remains inside nav
- selector missing or broken

## 4) Hero overlay quality

PASS when:
- overlay progression matches intent:
  - transparent top
  - subtle FamBIT purple mid/lower tones
  - cinematic dark bottom
- readability remains strong

FAIL when:
- purple overlay hurts readability
- overlay is too dark/flat or visually off-intent

## 5) Hero text and position

PASS when:
- text container is bottom-left anchored
- max width approximates 620px
- text is left aligned
- hero text is not centered

FAIL when:
- hero text becomes centered
- anchor/width constraints not respected

## 6) Hero content contract

PASS when required strings are present:
- Eyebrow: `COMMUNITY WITH A COIN`
- Headline:
  - `Family helps family.`
  - `Real-world missions funded together.`
- Subtext:
  - `FamBIT is a community where people support real-world missions together through transparent rules and shared participation.`
- Primary CTA: `Explore missions`
- Secondary CTA: `Start a mission`
- Trust microcopy:
  - `Transparent rules • Community driven • No hype`

FAIL when:
- any required line is missing or changed in meaning

## 7) CTA visual behavior

PASS when:
- primary CTA uses `#02B649` with white text and rounded form
- secondary CTA is transparent with white border
- hover state includes green glow effect

FAIL when:
- CTA styling does not match required hierarchy

## 8) Compliance carryover

PASS when:
- no wallet connect
- no buy/swap embeds
- no price targets/predictions
- no founder identities
- no hard funding promises
- no risky external scripts

FAIL when:
- any guardrail is violated

## 9) Build and parity

PASS when:
- `npm run check:i18n` passes
- `npm run build` passes
- EN/ES parity is preserved

FAIL when:
- build/parity fails or locale drift appears

## Final decision

- PASS only if sections 1 through 9 pass.
- Otherwise FAIL with explicit defect list.
