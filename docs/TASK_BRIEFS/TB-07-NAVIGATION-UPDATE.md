# TB-07 Navigation Update (Hero Phase 2)

## Objective

Update navigation labels and hover styling while preserving the existing floating glass nav structure.

## Exact files to change

- `src/components/Header.astro`
- `src/content/en/site.json`
- `src/content/es/site.json`
- `src/styles/global.css`

## Required changes

1. Keep nav frame system unchanged (floating glass, sticky behavior).
2. Keep single-row navigation only.
3. Update visible nav set to match Phase 2 intent:
   - logo/brand: `FamBIT` (left, links to homepage)
   - menu items: `Missions | Start | Stories | Safety` (center group)
4. Ensure no wrap and no second row on supported breakpoints.
5. Set nav hover color to `#02B649`.

## Definition of done

- Brand remains homepage link.
- Menu shows required Phase 2 labels in one row.
- Hover state visibly uses `#02B649`.
- EN/ES parity remains intact.

## Must NOT change

- No structural changes to nav frame/container geometry.
- No responsive breakpoint edits.
- No hero layout edits.
- No STAM block ID changes.

## QA checks

1. `npm run check:i18n`
2. `npm run build`
3. Visual check EN/ES desktop and mobile for single-row nav behavior.
4. Verify hover style color on menu items is green (`#02B649`).

## Fail conditions

- Nav wraps to two rows.
- Brand is no longer linked to homepage.
- Hover color not updated.
- Any layout structure change outside label/styling scope.
