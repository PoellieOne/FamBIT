# TB-15 CTA Spacing Polish (Hero Phase 3)

## Objective

Increase breathing space between sub-headline paragraph and CTA group by a small controlled increment.

## Exact files to change

- `src/layouts/BaseLayout.astro`
- `src/styles/global.css`

## Required changes

1. Add +6 to +8px equivalent spacing above CTA block (`H-02d`) relative to current hero state.
2. Keep CTA hierarchy unchanged:
   - primary: `Explore missions`
   - secondary: `Start a mission`
3. Preserve current CTA style logic and hover behavior.

## Must NOT change

- No CTA label changes.
- No hero anchor/geometry changes.
- No nav or language switch changes.

## QA checks

1. `npm run build`
2. Compare before/after hero spacing screenshots EN/ES.
3. Confirm CTA labels and hierarchy remain unchanged.

## Fail conditions

- spacing change outside +6 to +8px intent
- CTA hierarchy regresses
- any structural hero change
