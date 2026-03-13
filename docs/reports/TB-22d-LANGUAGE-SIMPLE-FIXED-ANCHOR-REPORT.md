# TB-22d - Language Button Simple Fixed Anchor

## Changed files list
- `src/styles/global.css`
- `docs/reports/TB-22d-nav-metrics.json`
- `docs/reports/screenshots/tb22d/*`

## Exact before/after values

### `position` / `top` / `right` / `z-index`

#### Tablet + mobile band (`@media (max-width: 64rem) .c-hero-lang`)
- Before
  - `position`: `fixed`
  - `top`: `calc(env(safe-area-inset-top, 0px) + var(--nav-fixed-top) + var(--nav-mobile-row-min-height) + (2 * var(--nav-mobile-pad-y)) + var(--nav-mobile-lang-band-offset))`
  - `right`: `max(0.9rem, calc(env(safe-area-inset-right, 0px) + 0.5rem))`
  - `z-index`: `58`
- After
  - `position`: `fixed` (unchanged)
  - `top`: `calc(env(safe-area-inset-top, 0px) + var(--nav-fixed-top) + var(--nav-mobile-row-min-height) + (2 * var(--nav-mobile-pad-y)) + var(--nav-mobile-border-y) + var(--nav-lang-fixed-gap))`
  - `right`: `max(0.9rem, calc(env(safe-area-inset-right, 0px) + 0.5rem))` (unchanged)
  - `z-index`: `58` (unchanged, lower than nav `z-index: 70`)

#### Smallest band (`@media (max-width: 23rem) .c-hero-lang`)
- Before
  - `position`: inherited `fixed`
  - `top`: `calc(env(safe-area-inset-top, 0px) + var(--nav-fixed-top) + var(--nav-smallest-row-min-height) + (2 * var(--nav-smallest-pad-y)) + var(--nav-smallest-lang-band-offset))`
  - `right`: `max(0.5rem, calc(env(safe-area-inset-right, 0px) + 0.25rem))`
  - `z-index`: inherited `58`
- After
  - `position`: inherited `fixed` (unchanged)
  - `top`: `calc(env(safe-area-inset-top, 0px) + var(--nav-fixed-top) + var(--nav-smallest-row-min-height) + (2 * var(--nav-smallest-pad-y)) + var(--nav-smallest-border-y) + var(--nav-lang-fixed-gap))`
  - `right`: `max(0.5rem, calc(env(safe-area-inset-right, 0px) + 0.25rem))` (unchanged)
  - `z-index`: inherited `58` (unchanged)

### Nav-height tokens used in top calculation
- Kept:
  - `--nav-fixed-top: 0.9rem`
  - `--nav-mobile-row-min-height: 42px`
  - `--nav-mobile-pad-y: clamp(0.24rem, 0.6vw, 0.3rem)`
  - `--nav-smallest-row-min-height: 40px`
  - `--nav-smallest-pad-y: clamp(0.26rem, 1.3vw, 0.32rem)`
- New for TB-22d simple anchor:
  - `--nav-mobile-border-y: 2px`
  - `--nav-smallest-border-y: 2px`
  - `--nav-lang-fixed-gap: 10px`
- Removed from formula path:
  - `--nav-mobile-lang-band-offset`
  - `--nav-smallest-lang-band-offset`

## Metrics
- File: `docs/reports/TB-22d-nav-metrics.json`
- Required fields included per EN/ES x (tablet portrait, tablet landscape, smallest):
  - `langTopTopState`
  - `langTopScrolledState`
  - `langTopDelta`
  - `noNavLangOverlap`

## Fixed-anchor validation (required matrix)
| Locale | Breakpoint | `langTopTopState` | `langTopScrolledState` | `langTopDelta` | `noNavLangOverlap` | Verdict |
|---|---|---:|---:|---:|---|---|
| EN | Tablet portrait | 77.609 | 77.609 | 0.000 | true | PASS |
| EN | Tablet landscape | 78.000 | 78.000 | 0.000 | true | PASS |
| EN | Smallest | 74.719 | 74.719 | 0.000 | true | PASS |
| ES | Tablet portrait | 77.609 | 77.609 | 0.000 | true | PASS |
| ES | Tablet landscape | 78.000 | 78.000 | 0.000 | true | PASS |
| ES | Smallest | 74.719 | 74.719 | 0.000 | true | PASS |

## Retained constraints
- Single-row nav: PASS
- No nav-language overlap: PASS
- Inter-button gap >= 4px: PASS
- Edge-gap >= 4px: PASS
- No clipping/ellipsis: PASS

## Screenshot evidence
- `docs/reports/screenshots/tb22d/en-tablet-portrait-top.png`
- `docs/reports/screenshots/tb22d/en-tablet-portrait-scrolled.png`
- `docs/reports/screenshots/tb22d/en-tablet-landscape-top.png`
- `docs/reports/screenshots/tb22d/en-tablet-landscape-scrolled.png`
- `docs/reports/screenshots/tb22d/en-smallest-top.png`
- `docs/reports/screenshots/tb22d/en-smallest-scrolled.png`
- `docs/reports/screenshots/tb22d/es-tablet-portrait-top.png`
- `docs/reports/screenshots/tb22d/es-tablet-portrait-scrolled.png`
- `docs/reports/screenshots/tb22d/es-tablet-landscape-top.png`
- `docs/reports/screenshots/tb22d/es-tablet-landscape-scrolled.png`
- `docs/reports/screenshots/tb22d/es-smallest-top.png`
- `docs/reports/screenshots/tb22d/es-smallest-scrolled.png`

## Build checks
- `npm run build`: PASS
- `npm run check:i18n`: PASS

## Final verdict
- PASS: language button now follows the simple fixed-anchor model on mobile/tablet with stable viewport top (`langTopDelta = 0`).
- PASS: no overlap regression and retained nav constraints all remain valid.
