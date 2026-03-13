# TB-22e - Language Button Hard Fixed Viewport Lock

## Changed files list
- `src/styles/global.css`
- `docs/reports/TB-22e-nav-metrics.json`
- `docs/reports/screenshots/tb22e/*`

## Exact before/after values

### Position / top / right / z-index

#### `@media (max-width: 64rem) .c-hero-lang`
- Before
  - `position: fixed`
  - `top: calc(env(safe-area-inset-top, 0px) + var(--nav-fixed-top) + var(--nav-mobile-row-min-height) + (2 * var(--nav-mobile-pad-y)) + var(--nav-mobile-border-y) + var(--nav-lang-fixed-gap))`
  - `right: max(0.5rem, calc(env(safe-area-inset-right, 0px) + 0.5rem))`
  - `z-index: 58`
- After
  - `position: fixed` (unchanged)
  - `top: calc(env(safe-area-inset-top, 0px) + 82px)`
  - `right: max(0.5rem, calc(env(safe-area-inset-right, 0px) + 0.5rem))` (unchanged)
  - `z-index: 58` (unchanged, stays below nav `z-index: 70`)

#### `@media (max-width: 23rem) .c-hero-lang`
- Before
  - `position`: inherited fixed
  - `top: calc(env(safe-area-inset-top, 0px) + var(--nav-fixed-top) + var(--nav-smallest-row-min-height) + (2 * var(--nav-smallest-pad-y)) + var(--nav-smallest-border-y) + var(--nav-lang-fixed-gap))`
  - `right: max(0.5rem, calc(env(safe-area-inset-right, 0px) + 0.25rem))`
  - `z-index`: inherited `58`
- After
  - `position`: inherited fixed (unchanged)
  - `top: calc(env(safe-area-inset-top, 0px) + 82px)`
  - `right: max(0.5rem, calc(env(safe-area-inset-right, 0px) + 0.25rem))` (unchanged)
  - `z-index`: inherited `58` (unchanged)

### Model compliance notes
- Hard fixed viewport lock applied.
- No nav-height-derived top formulas remain in mobile/tablet anchor rules.
- No scroll-linked logic added.

## Metrics file
- `docs/reports/TB-22e-nav-metrics.json`
- Required keys included for each EN/ES x (tablet portrait, tablet landscape, smallest):
  - `langTopTopState`
  - `langTopScrolledState`
  - `langTopDelta`
  - `noNavLangOverlap`

## Fixed-anchor contract results
| Locale | Breakpoint | `langTopTopState` | `langTopScrolledState` | `langTopDelta` | `noNavLangOverlap` | Verdict |
|---|---|---:|---:|---:|---|---|
| EN | Tablet portrait | 82.000 | 82.000 | 0.000000 | true | PASS |
| EN | Tablet landscape | 82.000 | 82.000 | 0.000000 | true | PASS |
| EN | Smallest | 82.000 | 82.000 | 0.000000 | true | PASS |
| ES | Tablet portrait | 82.000 | 82.000 | 0.000000 | true | PASS |
| ES | Tablet landscape | 82.000 | 82.000 | 0.000000 | true | PASS |
| ES | Smallest | 82.000 | 82.000 | 0.000000 | true | PASS |

## Retained constraints
- Single-row nav: PASS
- No nav-language overlap: PASS
- Inter-button gap >= 4px: PASS
- Edge-gap >= 4px: PASS
- No clipping/ellipsis: PASS

## Evidence
- Matrix screenshots: `docs/reports/screenshots/tb22e/`
  - EN + ES x tablet portrait, tablet landscape, smallest x top/scrolled
- Frame-pair scroll proof per locale:
  - EN frame pairs: `en-*-top.png` vs `en-*-scrolled.png` (lang top unchanged)
  - ES frame pairs: `es-*-top.png` vs `es-*-scrolled.png` (lang top unchanged)

## Build checks
- `npm run build`: PASS
- `npm run check:i18n`: PASS

## Final verdict
- PASS: hard fixed viewport lock enforced; language button remains at identical viewport top in top/scrolled states (`langTopDelta = 0`).
- PASS: no overlap and nav constraints remain intact.
