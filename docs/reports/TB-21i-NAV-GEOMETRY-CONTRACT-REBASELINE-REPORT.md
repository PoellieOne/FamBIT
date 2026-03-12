# TB-21i - Nav Geometry Contract Rebaseline (Tokenized Option A)

## Changed files
- `src/styles/global.css`
- `docs/reports/TB-21i-nav-metrics.json`
- `docs/reports/screenshots/tb21i/*`

## Exact before/after token values

### Base contract tokens (desktop profile)
- Introduced token family in `.c-header`:
  - `--nav-outer-offset: 2.5rem`
  - `--nav-pad-y: 0.3125rem`
  - `--nav-pad-x: 0.875rem`
  - `--nav-row-min-height: 48px`
  - `--nav-inner-air: 0.375rem`
  - `--nav-group-gap: 0.28rem`
  - `--nav-brand-gap: 0.25rem`
  - `--nav-menu-gap: 0.24rem`
  - `--nav-logo-height: 50px`
  - `--nav-logo-max-height: 52px`
  - `--nav-link-pad-y: 0.35rem`
  - `--nav-link-pad-x: 0.75rem`
  - `--nav-link-font-size: 0.84rem`
  - `--nav-link-letter-spacing: 0.05em`
  - `--nav-lang-menu-gap: 0.25rem`

### Tablet band token overrides (`@media (max-width: 64rem)`)
- Before: mixed direct values in `@media (max-width: 56rem)` + `@media (min-width: 37.5rem) and (max-width: 56rem)`.
- After: one deterministic tablet band token override:
  - `--nav-outer-offset: 1.5rem`
  - `--nav-pad-y: clamp(0.24rem, 0.6vw, 0.3rem)`
  - `--nav-pad-x: clamp(0.44rem, 1vw, 0.62rem)`
  - `--nav-row-min-height: 42px`
  - `--nav-inner-air: clamp(0.25rem, 0.8vw, 0.36rem)`
  - `--nav-group-gap: 0.2rem`
  - `--nav-menu-gap: 0.14rem`
  - `--nav-logo-height: 32px`
  - `--nav-logo-max-height: 34px`
  - `--nav-link-pad-y: 0.22rem`
  - `--nav-link-pad-x: 0.46rem`
  - `--nav-link-font-size: 0.74rem`
  - `--nav-link-letter-spacing: 0.045em`
  - `--nav-lang-menu-gap: 0`

### Smallest band token overrides (`@media (max-width: 23rem)`)
- Before: direct overrides spread over the same ruleset.
- After: one smallest profile token override:
  - `--nav-outer-offset: 1rem`
  - `--nav-pad-y: clamp(0.26rem, 1.3vw, 0.32rem)`
  - `--nav-pad-x: clamp(0.28rem, 1.5vw, 0.34rem)`
  - `--nav-row-min-height: 40px`
  - `--nav-inner-air: clamp(0.25rem, 1vw, 0.3rem)`
  - `--nav-group-gap: 0.24rem`
  - `--nav-menu-gap: 0.12rem`
  - `--nav-logo-height: 30px`
  - `--nav-logo-max-height: 32px`
  - `--nav-link-pad-y: 0.22rem`
  - `--nav-link-pad-x: 0.34rem`
  - `--nav-link-font-size: clamp(0.64rem, 2.6vw, 0.7rem)`
  - `--nav-link-letter-spacing: 0.04em`

### Language-control profile tokens
- Added root token: `--nav-fixed-top: 0.9rem`
- Added tokenized profile on `.c-hero-lang`:
  - Base: `position: absolute`, `top: 1rem`, `right: 1rem`, `z-index: 25`
  - Tablet band (`@max 64rem`): `position: absolute`, `top: 0.95rem`, `right: 0.9rem`, `z-index: 58`
  - Smallest (`@max 23rem`): `top: calc(var(--nav-fixed-top) + 40px + (2 * clamp(0.26rem, 1.3vw, 0.32rem)) + 0.45rem)`, `right: 0.5rem`

## Legacy overrides neutralized/replaced
- Removed nav-size overrides from component-level `@media (min-width: 48rem)` and `@media (min-width: 64rem)` that conflicted with mobile/tablet behavior.
- Replaced split mobile/tablet patches (`@max 56rem` + `@min 37.5rem and @max 56rem`) with one tablet band (`@max 64rem`) + one smallest band (`@max 23rem`).
- Removed `overflow-x: hidden`/scrollbar-hiding strategy from `.c-header`; fit is now controlled by explicit geometry tokens and max-width offsets.
- Kept ES smallest as explicit locale stress-case override (logo/nav-link compact profile) without altering ALL CAPS behavior.

## Verification matrix (fixed TB-21i matrix)
- Breakpoints: `1280x720`, `768x1024`, `1024x768`, `320x568`
- Locales: EN + ES
- States: `scrollY=0` and `scrollY=320`
- Raw measurements stored in: `docs/reports/TB-21i-nav-metrics.json`

## PASS/FAIL matrix
| Locale | Breakpoint | Single-row | Center delta <= 2px | Side-air >= 4px (L/R) | Clipping/Ellipsis | Nav/Lang overlap | Language profile | Scroll stability | Verdict |
|---|---|---|---|---|---|---|---|---|---|
| EN | Desktop compact | PASS | PASS (`0.00`) | PASS (`21.00 / 21.00`) | PASS | PASS | PASS (desktop profile) | PASS (no drift artifact; desktop profile scrolls with hero) | PASS |
| EN | Tablet portrait | PASS | PASS (`0.00`) | PASS (`14.42 / 14.42`) | PASS | PASS | PASS (inline-right top-state) | PASS (`relationDelta: 320`) | PASS |
| EN | Tablet landscape | PASS | PASS (`0.00`) | PASS (`16.66 / 16.66`) | PASS | PASS | PASS (inline-right top-state) | PASS (`relationDelta: 320`) | PASS |
| EN | Smallest | PASS | PASS (`0.00`) | PASS (`9.80 / 9.80`) | PASS | PASS | PASS (below-nav top-state) | PASS (`relationDelta: 320`) | PASS |
| ES | Desktop compact | PASS | PASS (`0.00`) | PASS (`21.00 / 21.00`) | PASS | PASS | PASS (desktop profile) | PASS (no drift artifact; desktop profile scrolls with hero) | PASS |
| ES | Tablet portrait | PASS | PASS (`0.00`) | PASS (`14.42 / 14.42`) | PASS | PASS | PASS (inline-right top-state) | PASS (`relationDelta: 320`) | PASS |
| ES | Tablet landscape | PASS | PASS (`0.00`) | PASS (`16.66 / 16.66`) | PASS | PASS | PASS (inline-right top-state) | PASS (`relationDelta: 320`) | PASS |
| ES | Smallest | PASS | PASS (`0.00`) | PASS (`9.80 / 9.80`) | PASS | PASS | PASS (below-nav top-state) | PASS (`relationDelta: 320`) | PASS |

## Screenshot evidence
- EN desktop compact:
  - `docs/reports/screenshots/tb21i/en-desktop-compact-top.png`
  - `docs/reports/screenshots/tb21i/en-desktop-compact-scrolled.png`
- EN tablet portrait:
  - `docs/reports/screenshots/tb21i/en-tablet-portrait-top.png`
  - `docs/reports/screenshots/tb21i/en-tablet-portrait-scrolled.png`
- EN tablet landscape:
  - `docs/reports/screenshots/tb21i/en-tablet-landscape-top.png`
  - `docs/reports/screenshots/tb21i/en-tablet-landscape-scrolled.png`
- EN smallest:
  - `docs/reports/screenshots/tb21i/en-smallest-top.png`
  - `docs/reports/screenshots/tb21i/en-smallest-scrolled.png`
- ES desktop compact:
  - `docs/reports/screenshots/tb21i/es-desktop-compact-top.png`
  - `docs/reports/screenshots/tb21i/es-desktop-compact-scrolled.png`
- ES tablet portrait:
  - `docs/reports/screenshots/tb21i/es-tablet-portrait-top.png`
  - `docs/reports/screenshots/tb21i/es-tablet-portrait-scrolled.png`
- ES tablet landscape:
  - `docs/reports/screenshots/tb21i/es-tablet-landscape-top.png`
  - `docs/reports/screenshots/tb21i/es-tablet-landscape-scrolled.png`
- ES smallest:
  - `docs/reports/screenshots/tb21i/es-smallest-top.png`
  - `docs/reports/screenshots/tb21i/es-smallest-scrolled.png`

## Build and i18n checks
- `npm run build`: PASS
- `npm run check:i18n`: PASS

## Final verdict
- PASS: tokenized geometry contract is active and deterministic (base -> tablet -> smallest).
- PASS: centered `logo + menu` set remains stable with `abs(leftAir-rightAir) = 0` across all matrix rows.
- PASS: side-air floor requirement (`>= 4px`) is met with measured minima `9.80px` (EN/ES smallest).
- PASS: tablet language profile stays inline-right in top-state and does not move with fixed nav while scrolling; smallest keeps below-nav top-state profile.
- PASS: no hero/nav architecture refactor introduced.
