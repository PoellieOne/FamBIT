# TB-13 Hero Typography Hierarchy (Hero Polish Phase 3)

## Objective

Refine headline/sub-headline hierarchy for readability and authority while preserving existing hero anchor position.

## Exact files to change

- `src/layouts/BaseLayout.astro`
- `src/content/en/home.json`
- `src/content/es/home.json`
- `src/styles/global.css`

## Required changes

1. Headline (dominant line):
   - `Family helps family.`
   - pure white
   - bold and dominant
2. Sub-headline (second line):
   - `Real-world missions funded together.`
   - size at 75-80% of headline
   - weight 500
   - soft white (not purple)
   - margin-top between 8-12px
3. Preserve anchor and alignment:
   - bottom-left anchor unchanged
   - text remains left-aligned
4. Width constraint update:
   - `max-width: min(75%, 760px)`

## Must NOT change

- No hero container geometry changes.
- No centered hero text.
- No STAM block ID changes.

## QA checks

1. `npm run check:i18n`
2. `npm run build`
3. Verify headline/sub-headline styles in built EN/ES home.
4. Verify sub-headline color is not purple.
5. Verify max-width rule applied.

## Fail conditions

- Headline shifts to centered layout.
- Sub-headline uses purple styling.
- Width constraint not applied.
- Any structural layout drift.
