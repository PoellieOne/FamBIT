# TB-09 - STAM Overlay Bidirectional Hover Sync

## Objective

Fix STAM overlay interaction so highlighting works both ways:
- list/label hover -> preview highlight (already works)
- preview block hover -> list/label highlight (missing)

## Exact files to change

- `src/components/stam/HomeOverlay.astro`
- `src/styles/stam-overlay.css`
- optional: `src/stam/homepage-block-index.v2.json` (only if minor metadata needed)

## Required changes

1. Implement reverse hover mapping from iframe preview blocks to sidebar list items.
2. Keep active-state visuals synchronized in both directions.
3. Preserve click-to-copy behavior.
4. Preserve EN/ES preview switch behavior.

## Definition of done

- Hovering a sidebar item highlights corresponding preview block.
- Hovering preview block highlights corresponding sidebar item.
- Active/hover state clears cleanly when pointer leaves target.

## Must NOT change

- No public route changes.
- No STAM security/crawler setting changes.
- No command-generation panel behavior changes (TB-06 scope stays separate).

## QA checks

1. `npm run build`
2. Open `/_stam/home` and test both directions:
   - list -> preview
   - preview -> list
3. Validate copy-to-clipboard still works.
4. Validate EN/ES switch still works in STAM preview.

## Fail conditions

- Bidirectional hover remains one-way.
- Highlight mapping mismatches block IDs.
- Copy action or locale switch regresses.
