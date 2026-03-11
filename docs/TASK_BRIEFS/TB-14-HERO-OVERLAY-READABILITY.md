# TB-14 Hero Overlay Readability (Hero Polish Phase 3)

## Objective

Refine Phase 2 overlay by adding subtle top readability mask while preserving cinematic lower gradient behavior.

## Exact files to change

- `src/styles/global.css`

## Required changes

Keep Phase 2 lower gradient intent and add top readability layers:

- top: `rgba(0,0,0,0.35)`
- mid: `rgba(0,0,0,0.15)`
- lower: keep existing purple gradient progression
- bottom: keep cinematic dark anchor

Implementation may use layered gradients as long as visual outcome matches.

## Must NOT change

- No hero geometry changes.
- No text content changes.
- No nav frame changes.

## QA checks

1. `npm run build`
2. Before/after EN/ES first-viewport screenshots.
3. Verify readability of nav/headline/sub-headline/CTA on top portion.

## Fail conditions

- Top readability worsens.
- Overlay removes cinematic lower contrast.
- Any structural changes introduced.
