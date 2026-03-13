# TB-22b - Mobile Nav Scale-Set and Language-Offset Stabilization

## Changed files
- `src/styles/global.css`
- `docs/reports/TB-22b-nav-metrics.json`
- `docs/reports/screenshots/tb22b/*`

## Exact before/after values

### Nav scale-set tokens (font/padding/border shell)
- `.c-header` base profile
  - Before:
    - `--nav-link-font-size: 0.84rem`
    - `--nav-link-pad-y: 0.35rem`
    - `--nav-link-pad-x: 0.75rem`
    - `--nav-link-letter-spacing: 0.05em`
    - `.c-nav-link border: 1px solid ...`
  - After (pressure envelope):
    - `--nav-pressure: 1`
    - `--nav-link-font-base: 0.84rem`
    - `--nav-link-pad-y-base: 0.35rem`
    - `--nav-link-pad-x-base: 0.75rem`
    - `--nav-link-track-base: 0.05em`
    - `--nav-link-shell-border-base: 1px`
    - `--nav-link-font-size: calc(var(--nav-link-font-base) * var(--nav-pressure))`
    - `--nav-link-pad-y: calc(var(--nav-link-pad-y-base) * var(--nav-pressure))`
    - `--nav-link-pad-x: calc(var(--nav-link-pad-x-base) * var(--nav-pressure))`
    - `--nav-link-letter-spacing: calc(var(--nav-link-track-base) * var(--nav-pressure))`
    - `--nav-link-shell-border: max(1px, calc(var(--nav-link-shell-border-base) * var(--nav-pressure)))`
    - `.c-nav-link border: var(--nav-link-shell-border) solid ...`

- `@media (max-width: 64rem) .c-header`
  - Before:
    - `--nav-link-font-size: 0.74rem`
    - `--nav-link-pad-y: 0.22rem`
    - `--nav-link-pad-x: 0.46rem`
    - `--nav-link-letter-spacing: 0.045em`
  - After:
    - `--nav-pressure: 0.96`
    - `--nav-link-font-base: 0.76rem`
    - `--nav-link-pad-y-base: 0.23rem`
    - `--nav-link-pad-x-base: 0.48rem`
    - `--nav-link-track-base: 0.046em`

- `@media (max-width: 23rem) .c-header`
  - Before:
    - `--nav-link-font-size: clamp(0.64rem, 2.6vw, 0.7rem)`
    - `--nav-link-pad-y: 0.22rem`
    - `--nav-link-pad-x: 0.34rem`
    - `--nav-link-letter-spacing: 0.04em`
  - After:
    - `--nav-pressure: 0.94`
    - `--nav-link-font-base: 0.69rem`
    - `--nav-link-pad-y-base: 0.23rem`
    - `--nav-link-pad-x-base: 0.36rem`
    - `--nav-link-track-base: 0.042em`

- `@media (max-width: 23rem) html[lang="es"] .c-header`
  - Before:
    - `--nav-link-*` direct ES adjustments were split in `html[lang="es"] .c-nav-link`
  - After (scale-set preserved via pressure):
    - `--nav-pressure: 0.88`
    - `--nav-link-font-base: 0.63rem`
    - `--nav-link-pad-y-base: 0.21rem`
    - `--nav-link-pad-x-base: 0.21rem`
    - `--nav-link-track-base: 0.034em`

### Container spacing/margins
- No structural geometry model change introduced.
- Existing floors retained and validated:
  - inter-button gap floor `>= 4px`
  - side air floor `>= 4px`
  - single-row + no clipping/overlap

### Language offset + z-layer per breakpoint
- Base `.c-hero-lang`
  - Before: `--lang-top: 1rem`
  - After: `--lang-top: calc(env(safe-area-inset-top, 0px) + 1rem)`

- `@media (max-width: 64rem) .c-hero-lang`
  - Before:
    - `--lang-top: 0.95rem`
    - `--lang-right: 0.9rem`
    - `--lang-z: 58`
    - `--lang-max-width: calc(100vw - 1.5rem)`
  - After:
    - `--lang-top: calc(env(safe-area-inset-top, 0px) + var(--nav-fixed-top) + var(--nav-row-min-height) + (2 * var(--nav-pad-y)) + 0.5rem)`
    - `--lang-right: max(0.9rem, calc(env(safe-area-inset-right, 0px) + 0.5rem))`
    - `--lang-z: 58` (kept below nav z=70)
    - `--lang-max-width: calc(100vw - max(1.5rem, env(safe-area-inset-left, 0px) + env(safe-area-inset-right, 0px) + 1rem))`

- `@media (max-width: 23rem) .c-hero-lang`
  - Before:
    - `--lang-top: calc(var(--nav-fixed-top) + 40px + (2 * clamp(0.26rem, 1.3vw, 0.32rem)) + 0.45rem)`
    - `--lang-right: 0.5rem`
    - `--lang-max-width: calc(100vw - 1rem)`
  - After:
    - `--lang-top: calc(env(safe-area-inset-top, 0px) + var(--nav-fixed-top) + var(--nav-row-min-height) + (2 * var(--nav-pad-y)) + 0.5rem)`
    - `--lang-right: max(0.5rem, calc(env(safe-area-inset-right, 0px) + 0.25rem))`
    - `--lang-max-width: calc(100vw - max(1rem, env(safe-area-inset-left, 0px) + env(safe-area-inset-right, 0px) + 0.5rem))`

## Metrics
- Raw metrics file: `docs/reports/TB-22b-nav-metrics.json`
- Includes required fields for each EN/ES x breakpoint x top/scrolled combination:
  - `buttonGapMin`
  - `leftAir/rightAir`
  - `centerDelta`
  - `noNavLangOverlap` boolean
  - `languageOffsetDelta` (`top vs scrolled`)

## PASS/FAIL matrix
| Locale | Breakpoint | Single-row | buttonGap >= 4px | sideAir >= 4px | centerDelta <= 2px | No clipping/ellipsis | No nav/lang overlap | language offset top-vs-scrolled delta | Verdict |
|---|---|---|---|---|---|---|---|---|---|
| EN | Desktop compact | PASS | PASS | PASS | PASS | PASS | PASS | `320` | PASS |
| EN | Tablet portrait | PASS | PASS | PASS | PASS | PASS | PASS | `320` | PASS |
| EN | Tablet landscape | PASS | PASS | PASS | PASS | PASS | PASS | `320` | PASS |
| EN | Smallest | PASS | PASS | PASS | PASS | PASS | PASS | `320` | PASS |
| ES | Desktop compact | PASS | PASS | PASS | PASS | PASS | PASS | `320` | PASS |
| ES | Tablet portrait | PASS | PASS | PASS | PASS | PASS | PASS | `320` | PASS |
| ES | Tablet landscape | PASS | PASS | PASS | PASS | PASS | PASS | `320` | PASS |
| ES | Smallest | PASS | PASS | PASS | PASS | PASS | PASS | `320` | PASS |

## Screenshot evidence
- EN desktop compact:
  - `docs/reports/screenshots/tb22b/en-desktop-compact-top.png`
  - `docs/reports/screenshots/tb22b/en-desktop-compact-scrolled.png`
- EN tablet portrait:
  - `docs/reports/screenshots/tb22b/en-tablet-portrait-top.png`
  - `docs/reports/screenshots/tb22b/en-tablet-portrait-scrolled.png`
- EN tablet landscape:
  - `docs/reports/screenshots/tb22b/en-tablet-landscape-top.png`
  - `docs/reports/screenshots/tb22b/en-tablet-landscape-scrolled.png`
- EN smallest:
  - `docs/reports/screenshots/tb22b/en-smallest-top.png`
  - `docs/reports/screenshots/tb22b/en-smallest-scrolled.png`
- ES desktop compact:
  - `docs/reports/screenshots/tb22b/es-desktop-compact-top.png`
  - `docs/reports/screenshots/tb22b/es-desktop-compact-scrolled.png`
- ES tablet portrait:
  - `docs/reports/screenshots/tb22b/es-tablet-portrait-top.png`
  - `docs/reports/screenshots/tb22b/es-tablet-portrait-scrolled.png`
- ES tablet landscape:
  - `docs/reports/screenshots/tb22b/es-tablet-landscape-top.png`
  - `docs/reports/screenshots/tb22b/es-tablet-landscape-scrolled.png`
- ES smallest:
  - `docs/reports/screenshots/tb22b/es-smallest-top.png`
  - `docs/reports/screenshots/tb22b/es-smallest-scrolled.png`

## Build checks
- `npm run build`: PASS
- `npm run check:i18n`: PASS

## Real-device proof (verplicht)
- Physical mobile session in this execution environment: **NOT AVAILABLE**.
- Explicit real-device validation verdict for TB-22b: **FAIL (pending physical-device verification)**.
- Required to close TB-22b: capture at least one physical-device top+scrolled proof and mark PASS/FAIL explicitly.
