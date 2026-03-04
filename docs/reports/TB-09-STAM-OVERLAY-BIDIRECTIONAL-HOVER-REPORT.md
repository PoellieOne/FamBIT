# TB-09 STAM Overlay Bidirectional Hover Sync Report

Date: 2026-03-04  
Scope: STAM overlay interaction only

## Changed files

- `src/components/stam/HomeOverlay.astro`
- `src/styles/stam-overlay.css`
- `docs/reports/TB-09-STAM-OVERLAY-BIDIRECTIONAL-HOVER-REPORT.md`

## Implementation notes

1) Reverse hover mapping (preview -> list)
- Added iframe hover detection using `contentDocument.elementFromPoint(...)`.
- New mapping helper resolves hovered block ID from JSON selector metadata.
- On preview hover, matching sidebar item is marked active.

2) Synchronized active state both ways
- `setActiveBlock` now updates both overlay outlines and sidebar item classes (`.is-active`).
- `clearActiveBlock` clears both surfaces cleanly.

3) Existing behavior preserved
- Click-to-copy remains unchanged (`navigator.clipboard.writeText`).
- EN/ES preview switch remains unchanged (`data-locale` route swap).

## QA checks

- `npm run build` -> PASS
- Built STAM output includes bidirectional hover hooks and active list style:
  - `.stam-item.is-active` style present
  - iframe `mousemove` + `mouseleave` listeners present
  - copy and locale handlers still present

## Evidence

- `docs/reports/screenshots/tb09/stam-home-overlay-bidirectional.png`
- `dist/_stam/home/index.html` (contains compiled hover-sync logic)

## Fail-condition self-check

- Bidirectional hover remains one-way: PASS
- Highlight mapping mismatch by block ID: PASS
- Copy action regressed: PASS
- Locale switch regressed: PASS

Final verdict: PASS
