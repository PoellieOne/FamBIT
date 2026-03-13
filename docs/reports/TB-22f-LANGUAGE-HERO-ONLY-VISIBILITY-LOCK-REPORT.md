# TB-22f - Language Hero-Only Visibility Lock

## Changed files list
- `src/styles/global.css`
- `src/layouts/BaseLayout.astro`
- `docs/reports/TB-22f-nav-metrics.json`
- `docs/reports/screenshots/tb22f/*`

## Exact before/after (language positioning/visibility rules)

### Positioning (unchanged by TB-22f, retained from TB-22e)
- `@media (max-width: 64rem) .c-hero-lang`
  - `position: fixed`
  - `top: calc(env(safe-area-inset-top, 0px) + 82px)`
  - `right: max(0.5rem, calc(env(safe-area-inset-right, 0px) + 0.5rem))`
  - `z-index: 58` (nav remains above at `z-index: 70`)
- `@media (max-width: 23rem) .c-hero-lang`
  - `top: calc(env(safe-area-inset-top, 0px) + 82px)`
  - `right: max(0.5rem, calc(env(safe-area-inset-right, 0px) + 0.25rem))`

### Visibility lock (new in TB-22f)
- Before:
  - `.c-hero-lang` always visible (`opacity:1; visibility:visible; pointer-events:auto`)
  - no top-only visibility state gate
- After:
  - `body.c-hero-not-top .c-hero-lang { opacity: 0; visibility: hidden; pointer-events: none; }`
  - top-state class sync added in `BaseLayout` hero script:
    - top (`scrollY <= 8`): class not present => language visible
    - scrolled (`scrollY > 8`): `body.c-hero-not-top` => language hidden

## Metrics (required)
- File: `docs/reports/TB-22f-nav-metrics.json`
- Required fields per EN/ES x viewport:
  - `langVisibleTopState`
  - `langVisibleScrolledState`
  - `noNavLangOverlapTop`

### Contract results
| Locale | Breakpoint | `langVisibleTopState` | `langVisibleScrolledState` | `noNavLangOverlapTop` | Verdict |
|---|---|---|---|---|---|
| EN | Tablet portrait | true | false | true | PASS |
| EN | Tablet landscape | true | false | true | PASS |
| EN | Smallest | true | false | true | PASS |
| ES | Tablet portrait | true | false | true | PASS |
| ES | Tablet landscape | true | false | true | PASS |
| ES | Smallest | true | false | true | PASS |

## Retained nav constraints
- Single-row nav: PASS
- Inter-button gap >= 4px: PASS
- Edge-gap >= 4px: PASS
- No clipping/ellipsis: PASS

## Screenshot evidence
- EN tablet portrait:
  - `docs/reports/screenshots/tb22f/en-tablet-portrait-top.png`
  - `docs/reports/screenshots/tb22f/en-tablet-portrait-scrolled.png`
- EN tablet landscape:
  - `docs/reports/screenshots/tb22f/en-tablet-landscape-top.png`
  - `docs/reports/screenshots/tb22f/en-tablet-landscape-scrolled.png`
- EN smallest:
  - `docs/reports/screenshots/tb22f/en-smallest-top.png`
  - `docs/reports/screenshots/tb22f/en-smallest-scrolled.png`
- ES tablet portrait:
  - `docs/reports/screenshots/tb22f/es-tablet-portrait-top.png`
  - `docs/reports/screenshots/tb22f/es-tablet-portrait-scrolled.png`
- ES tablet landscape:
  - `docs/reports/screenshots/tb22f/es-tablet-landscape-top.png`
  - `docs/reports/screenshots/tb22f/es-tablet-landscape-scrolled.png`
- ES smallest:
  - `docs/reports/screenshots/tb22f/es-smallest-top.png`
  - `docs/reports/screenshots/tb22f/es-smallest-scrolled.png`

## Build checks
- `npm run build`: PASS
- `npm run check:i18n`: PASS

## Final verdict
- PASS: language button is visible only in top/full-hero state and hidden in scrolled state across all required matrix combinations.
- PASS: fail condition "language still visible at scrolled" is not present in any tested combination.
