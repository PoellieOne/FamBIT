# TB-12 Navigation One-Row Enforcement (Hero Polish Phase 3)

## Objective

Guarantee one-row nav behavior at all breakpoints with no wrapping and no vertical jumps.

## Exact files to change

- `src/styles/global.css`
- `src/components/Header.astro` (only if minor class hook additions needed)

## Required changes

1. Enforce single-row nav at all breakpoints:
   - no wrapping
   - no second row
2. Ensure logo and menu remain on same row.
3. Keep nav container height stable across breakpoints.
4. If width pressure occurs, apply in this order:
   - reduce menu gap
   - reduce nav font size slightly
   - reduce logo size within allowed range

## Must NOT change

- No nav frame relocation.
- No menu label changes.
- No hero layout geometry changes.

## QA checks

1. `npm run build`
2. Screenshot matrix EN/ES desktop/tablet/mobile.
3. Verify no wrap and no second row in all captures.
4. Verify nav height remains visually constant.

## Fail conditions

- Any breakpoint shows wrapped menu items.
- Logo shifts above menu row.
- Nav height jumps or introduces second row.
