# TB-21c - Navigation Fit, Centering, and Smallest-Viewport Integrity

## Changed files
- `src/styles/global.css`

## CSS before/after values (TB-21c scope)
- Brand-first-item spacing
  - `.c-brand margin-right`: `var(--space-2)` -> `0.25rem`
  - `.c-primary-nav gap`: `0.375rem` -> `0.24rem`
- Group centering / container spacing
  - `.c-header-row justify-content`: start/default -> `center`
  - `.c-header-row width`: `max-content` (mobile) -> `100%`
  - `.c-header-row gap`: `0.25rem` (mobile) -> `0.2rem`
  - `.c-header-row padding-inline`: `0` -> `6px`
- Nav paddings/gaps relevant to fit
  - `.c-nav-link padding` (mobile): `0.28rem 0.58rem` -> `0.22rem 0.46rem`
  - `.c-nav-link font-size` (mobile): `0.8rem` -> `0.74rem`
  - `.c-nav-link letter-spacing` (mobile): `normal` -> `0.045em`
  - `.c-primary-nav gap` (mobile): `0.2rem` -> `0.14rem`
- Smallest viewport overrides (`@media (max-width: 23rem)`)
  - `.c-header padding-inline`: `0.35rem` (from parent mobile rule) -> `0.28rem`
  - `.c-brand-logo height/max-height`: `32/34px` -> `24/26px`
  - `.c-nav-link padding`: `0.22rem 0.46rem` -> `0.16rem 0.22rem`
  - `.c-nav-link font-size`: `0.74rem` -> `0.58rem`
  - `.c-nav-link letter-spacing`: `0.045em` -> `0.03em`
  - `.c-hero-lang top`: `0.9rem` -> `calc(3.55rem + 0.8rem)`

## Breakpoint QA table
| Breakpoint | Row integrity | Overflow | Clipping | Centering | Hero visibility | Verdict |
|---|---|---|---|---|---|---|
| Desktop wide | PASS | PASS | PASS | PASS | PASS | PASS |
| Desktop compact | PASS | PASS | PASS | PASS | PASS | PASS |
| Tablet | PASS | PASS | PASS | PASS | PASS | PASS |
| Smallest mobile (ES critical) | PASS | PASS | PASS | PASS | PASS | PASS |

## Screenshot evidence
- `docs/reports/screenshots/tb21c/en-desktop-wide-after.png`
- `docs/reports/screenshots/tb21c/en-desktop-compact-after.png`
- `docs/reports/screenshots/tb21c/en-tablet-after.png`
- `docs/reports/screenshots/tb21c/en-mobile-smallest-after.png`
- `docs/reports/screenshots/tb21c/es-desktop-wide-after.png`
- `docs/reports/screenshots/tb21c/es-desktop-compact-after.png`
- `docs/reports/screenshots/tb21c/es-tablet-after.png`
- `docs/reports/screenshots/tb21c/es-mobile-smallest-after.png`
- `docs/reports/screenshots/tb21c/es-smallest-menu-visible-top.png`
- `docs/reports/screenshots/tb21c/es-smallest-hero-core-visible.png`

## Build result
- `npm run build`: PASS

## Final verdict against fail conditions
- PASS: no multi-row nav detected.
- PASS: no horizontal overflow on smallest ES viewport.
- PASS: no logo/menu clipping detected.
- PASS: logo + menu group centered in nav holder.
- PASS: smallest viewport keeps full menu visible with hero core content below.
- PASS: hero/nav structure contract preserved.
