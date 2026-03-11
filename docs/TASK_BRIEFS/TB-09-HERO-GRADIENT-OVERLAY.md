# TB-09 Hero Gradient Overlay (Hero Phase 2)

## Objective

Replace current hero mask with the approved Phase 2 gradient overlay while preserving hero structure.

## Exact files to change

- `src/styles/global.css`

## Required changes

Update hero overlay to this intent curve:
- top: transparent
- mid: `rgba(93,72,126,0.15)`
- lower: `rgba(93,72,126,0.35)`
- bottom: `rgba(10,10,20,0.85)`

Implementation note:
- layered gradient is allowed if visual result matches above progression.

## Definition of done

- Purple influence is subtle and visible in middle/lower band.
- Bottom remains cinematic and readable.
- Nav/headline/subtext/CTA remain legible over image.

## Must NOT change

- No hero structural geometry edits.
- No text content edits.
- No navigation structure edits.
- No breakpoint edits.

## QA checks

1. `npm run build`
2. Capture EN/ES first-viewport screenshots before/after.
3. Verify readability for nav + headline + CTA.

## Fail conditions

- Overlay harms readability.
- Overlay has no visible FamBIT-purple tone.
- Any structural changes introduced.
