# TB-22h - Landscape Reachability and Hero-Visibility (No Forced Scroll)

## Changed files list
- `src/layouts/BaseLayout.astro`
- `src/styles/global.css`
- `docs/reports/TB-22h-nav-metrics.json`
- `docs/reports/screenshots/tb22h/*`

## Exact before/after

### Hero/viewport height logic
- No height token or hero height rule was changed.
- `min-height: 100svh` behavior in `.c-home-hero-stage` remains unchanged.

### Language visibility trigger logic
- Before (`BaseLayout`):
  - Hero-top visibility depended on raw scroll threshold:
    - `const atTop = window.scrollY <= 8`
    - toggled `body.c-hero-not-top` in scroll RAF loop.
- After (`BaseLayout`):
  - Hero-top visibility uses a sentinel observer model:
    - Added sentinel: `#HOME-HERO-TOP-SENTINEL`
    - `IntersectionObserver` toggles `body.c-hero-not-top` based on sentinel visibility.
    - Fallback only if observer is unavailable (`readTopState()`), no forced scroll.
  - Scroll handler now only updates parallax, not visibility by raw scrollY.

### Overflow/scroll-related rules touched
- No `scrollTo(0,0)` or forced snap logic introduced.
- No overflow lock/trap CSS was added.
- New sentinel styling only:
  - `.c-hero-top-sentinel { position:absolute; top:0; left:0; width:1px; height:1px; pointer-events:none; }`

### Stability tuning applied to preserve nav constraints
- Added ES tablet/mobile pressure tuning in `@media (max-width: 64rem)`:
  - `html[lang="es"] .c-header { --nav-pressure: 0.9; --nav-link-font-base: 0.72rem; --nav-link-pad-x-base: 0.34rem; --nav-link-track-base: 0.04em; }`

## Metrics file
- `docs/reports/TB-22h-nav-metrics.json`

## Contract checks (Android portrait/landscape emulation)
| Locale | Viewport | lang visible top | lang visible scrolled | no overlap top/scrolled | top reachable naturally | single-row | button gap >=4 | edge gap >=4 | no clipping | Verdict |
|---|---|---|---|---|---|---|---|---|---|---|
| EN | android-portrait (412x915) | true | false | true / true | PASS | PASS | PASS | PASS | PASS | PASS |
| EN | android-landscape (915x412) | true | false | true / true | PASS | PASS | PASS | PASS | PASS | PASS |
| ES | android-portrait (412x915) | true | false | true / true | PASS | PASS | PASS | PASS | PASS | PASS |
| ES | android-landscape (915x412) | true | false | true / true | PASS | PASS | PASS | PASS | PASS | PASS |

## Screenshot evidence
- EN:
  - `docs/reports/screenshots/tb22h/en-android-portrait-top.png`
  - `docs/reports/screenshots/tb22h/en-android-portrait-scrolled.png`
  - `docs/reports/screenshots/tb22h/en-android-landscape-top.png`
  - `docs/reports/screenshots/tb22h/en-android-landscape-scrolled.png`
- ES:
  - `docs/reports/screenshots/tb22h/es-android-portrait-top.png`
  - `docs/reports/screenshots/tb22h/es-android-portrait-scrolled.png`
  - `docs/reports/screenshots/tb22h/es-android-landscape-top.png`
  - `docs/reports/screenshots/tb22h/es-android-landscape-scrolled.png`

## Real-device proof note (required)
- Device/browser/version in this run: **not available in execution environment** (no attached physical Android Chrome session).
- Explicit statement: top reachable naturally on real device = **FAIL (pending physical-device confirmation)**.
- Emulation signal only (not substitute for physical proof): PASS on portrait+landscape reachability checks.

## Build checks
- `npm run build`: PASS
- `npm run check:i18n`: PASS

## Final verdict
- PASS on code-level and emulated matrix checks for reachability + hero-top-only language visibility.
- Real-device acceptance remains pending and currently marked FAIL until physical Android Chrome proof is captured.
