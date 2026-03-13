# TB-22c - Language Top-Band and Nav Edge-Gap Floor

## Changed files list
- `src/styles/global.css`
- `docs/reports/TB-22c-nav-metrics.json`
- `docs/reports/screenshots/tb22c/*`

## Exact before/after values

### Language top/right/z tokens
- Base `.c-hero-lang`
  - `--lang-top`: `calc(env(safe-area-inset-top, 0px) + 1rem)` -> unchanged
  - `--lang-right`: `1rem` -> unchanged
  - `--lang-z`: `25` -> unchanged

- Tablet/mobile band `@media (max-width: 64rem) .c-hero-lang`
  - `--lang-position`: `absolute` -> `fixed`
  - `--lang-top`:
    - before: `calc(env(safe-area-inset-top, 0px) + var(--nav-fixed-top) + var(--nav-row-min-height) + (2 * var(--nav-pad-y)) + clamp(var(--nav-lang-band-min), var(--nav-lang-band-offset), var(--nav-lang-band-max)))`
    - after: `calc(env(safe-area-inset-top, 0px) + var(--nav-fixed-top) + var(--nav-mobile-row-min-height) + (2 * var(--nav-mobile-pad-y)) + var(--nav-mobile-lang-band-offset))`
  - `--lang-right`: `max(0.9rem, calc(env(safe-area-inset-right, 0px) + 0.5rem))` -> unchanged
  - `--lang-z`: `58` -> unchanged (still below nav layer `z-index: 70`)

- Smallest `@media (max-width: 23rem) .c-hero-lang`
  - `--lang-top`:
    - before: `calc(env(safe-area-inset-top, 0px) + var(--nav-fixed-top) + var(--nav-row-min-height) + (2 * var(--nav-pad-y)) + clamp(var(--nav-lang-band-min), 2.8vw, var(--nav-lang-band-max)))`
    - after: `calc(env(safe-area-inset-top, 0px) + var(--nav-fixed-top) + var(--nav-smallest-row-min-height) + (2 * var(--nav-smallest-pad-y)) + var(--nav-smallest-lang-band-offset))`
  - `--lang-right`: `max(0.5rem, calc(env(safe-area-inset-right, 0px) + 0.25rem))` -> unchanged
  - `--lang-max-width`: unchanged

### Nav inner-air / edge-gap tokens
- `.c-header`
  - `--nav-inner-air`: `0.375rem` -> unchanged
  - `--nav-edge-gap-floor`: not present -> `0.25rem`
- `@media (max-width: 64rem) .c-header`
  - `--nav-inner-air`: `clamp(0.25rem, 0.8vw, 0.36rem)` -> unchanged
  - `--nav-edge-gap-floor`: not present -> `0.25rem`
- `@media (max-width: 23rem) .c-header`
  - `--nav-inner-air`: `clamp(0.25rem, 1vw, 0.3rem)` -> unchanged
  - `--nav-edge-gap-floor`: not present -> `0.25rem`
- `.c-primary-nav`
  - `padding-inline`: not present -> `var(--nav-edge-gap-floor)`

### Supporting fixed-height band tokens (new in `:root`)
- `--nav-mobile-row-min-height: 42px`
- `--nav-mobile-pad-y: clamp(0.24rem, 0.6vw, 0.3rem)`
- `--nav-mobile-lang-band-offset: clamp(4px, 1.4vw, 16px)`
- `--nav-smallest-row-min-height: 40px`
- `--nav-smallest-pad-y: clamp(0.26rem, 1.3vw, 0.32rem)`
- `--nav-smallest-lang-band-offset: clamp(4px, 2.8vw, 24px)`

## Metrics file
- `docs/reports/TB-22c-nav-metrics.json`
- Contains required fields per EN/ES + breakpoint + top/scrolled:
  - `langToNavDelta`
  - `leftEdgeGap`
  - `rightEdgeGap`
  - `buttonGapMin`
  - `singleRow` / `noClipping` / `noNavLangOverlap`

## Contract checks summary
| Locale | Breakpoint | `langToNavDelta` top/scrolled | Top-band (4..24) | `leftEdgeGap` top/scrolled | `rightEdgeGap` top/scrolled | Edge-gap floor >=4 | Inter-button gap >=4 | Single-row | No clipping | No nav/lang overlap | Verdict |
|---|---|---:|---|---:|---:|---|---|---|---|---|---|
| EN | Tablet portrait | 8.781 / 8.781 | PASS | 60.297 / 60.297 | 18.422 / 18.422 | PASS | PASS | PASS | PASS | PASS | PASS |
| EN | Tablet landscape | 12.344 / 12.344 | PASS | 62.531 / 62.531 | 20.656 / 20.656 | PASS | PASS | PASS | PASS | PASS | PASS |
| EN | Smallest | 6.969 / 6.969 | PASS | 54.141 / 54.141 | 13.797 / 13.797 | PASS | PASS | PASS | PASS | PASS | PASS |
| ES | Tablet portrait | 8.781 / 8.781 | PASS | 60.297 / 60.297 | 18.422 / 18.422 | PASS | PASS | PASS | PASS | PASS | PASS |
| ES | Tablet landscape | 12.344 / 12.344 | PASS | 62.531 / 62.531 | 20.656 / 20.656 | PASS | PASS | PASS | PASS | PASS | PASS |
| ES | Smallest | 6.969 / 6.969 | PASS | 50.891 / 50.891 | 12.813 / 12.813 | PASS | PASS | PASS | PASS | PASS | PASS |

Notes:
- Top-band contract is required for tablet + smallest only and is PASS in all required rows.
- Desktop compact remains stable and non-regressed in the matrix evidence.

## Screenshot set
- `docs/reports/screenshots/tb22c/en-desktop-compact-top.png`
- `docs/reports/screenshots/tb22c/en-desktop-compact-scrolled.png`
- `docs/reports/screenshots/tb22c/en-tablet-portrait-top.png`
- `docs/reports/screenshots/tb22c/en-tablet-portrait-scrolled.png`
- `docs/reports/screenshots/tb22c/en-tablet-landscape-top.png`
- `docs/reports/screenshots/tb22c/en-tablet-landscape-scrolled.png`
- `docs/reports/screenshots/tb22c/en-smallest-top.png`
- `docs/reports/screenshots/tb22c/en-smallest-scrolled.png`
- `docs/reports/screenshots/tb22c/es-desktop-compact-top.png`
- `docs/reports/screenshots/tb22c/es-desktop-compact-scrolled.png`
- `docs/reports/screenshots/tb22c/es-tablet-portrait-top.png`
- `docs/reports/screenshots/tb22c/es-tablet-portrait-scrolled.png`
- `docs/reports/screenshots/tb22c/es-tablet-landscape-top.png`
- `docs/reports/screenshots/tb22c/es-tablet-landscape-scrolled.png`
- `docs/reports/screenshots/tb22c/es-smallest-top.png`
- `docs/reports/screenshots/tb22c/es-smallest-scrolled.png`

## Build checks
- `npm run build`: PASS
- `npm run check:i18n`: PASS

## Final verdict
- PASS: language control is locked to a top-band near nav on tablet + smallest (`4px <= langTop-navBottom <= 24px`).
- PASS: nav item edge-gap floors are explicit and satisfied on both sides (`>= 4px`) for tablet + smallest.
- PASS: retained constraints stay intact (inter-button gap floor, single-row, no clipping/ellipsis/overflow, no nav/language overlap).
