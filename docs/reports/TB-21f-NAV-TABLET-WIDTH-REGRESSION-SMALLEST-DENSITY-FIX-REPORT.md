# TB-21f - Nav Tablet Width Regression and Smallest Density Fix

## Changed files
- `src/styles/global.css`

## Exact before/after CSS values

### Tablet nav-holder width model
- `@media (max-width: 56rem) .c-header`
  - `width`: `calc(100vw - 0.5rem)` -> `fit-content`
  - `max-width`: `calc(100vw - 0.5rem)` -> unchanged base + tablet override `calc(100vw - 3rem)` at `@media (min-width: 37.5rem) and (max-width: 56rem)`
- `@media (max-width: 56rem) .c-home-nav-fixed`
  - `width`: `calc(100vw - 0.5rem)` -> `fit-content`
  - `max-width`: `calc(100vw - 0.5rem)` -> unchanged base + tablet override `calc(100vw - 3rem)` at `@media (min-width: 37.5rem) and (max-width: 56rem)`
- `@media (min-width: 37.5rem) and (max-width: 56rem) .c-header`
  - `padding`: inherited `clamp(0.24rem, 0.7vw, 0.3rem) clamp(0.32rem, 1.2vw, 0.48rem)` -> `clamp(0.24rem, 0.6vw, 0.3rem) clamp(0.5rem, 1vw, 0.75rem)`

### Smallest logo size
- Base smallest (`@media (max-width: 23rem) .c-brand-logo`)
  - `height`: `28px` -> `30px`
  - `max-height`: `30px` -> `32px`
- ES smallest override (`html[lang="es"] .c-brand-logo`)
  - `height`: `25px` -> `27px`
  - `max-height`: `27px` -> `29px`

### Smallest nav button size/padding
- Base smallest (`@media (max-width: 23rem) .c-nav-link`)
  - `padding`: `0.2rem 0.32rem` -> `0.22rem 0.34rem`
  - `font-size`: `clamp(0.62rem, 2.5vw, 0.68rem)` -> `clamp(0.64rem, 2.6vw, 0.7rem)`
  - `letter-spacing`: `0.04em` -> unchanged
- ES smallest override (`html[lang="es"] .c-nav-link`)
  - `padding`: `0.16rem 0.22rem` -> `0.18rem 0.26rem`
  - `font-size`: `0.58rem` -> `0.6rem`
  - `letter-spacing`: `0.03em` -> `0.032em`

### Smallest container inner spacing
- `@media (max-width: 23rem) .c-header`
  - `padding-inline`: `clamp(0.3rem, 1.7vw, 0.36rem)` -> `clamp(0.26rem, 1.5vw, 0.32rem)`
  - `padding-block`: `clamp(0.26rem, 1.3vw, 0.32rem)` -> unchanged

## Build checks
- `npm run build`: PASS
- `npm run check:i18n`: PASS

## Screenshot evidence
- Tablet before/after (EN + ES):
  - `docs/reports/screenshots/tb21f/en-tablet-before.png`
  - `docs/reports/screenshots/tb21f/en-tablet-after.png`
  - `docs/reports/screenshots/tb21f/es-tablet-before.png`
  - `docs/reports/screenshots/tb21f/es-tablet-after.png`
- Smallest before/after (EN + ES):
  - `docs/reports/screenshots/tb21f/en-smallest-before.png`
  - `docs/reports/screenshots/tb21f/en-smallest-after.png`
  - `docs/reports/screenshots/tb21f/es-smallest-before.png`
  - `docs/reports/screenshots/tb21f/es-smallest-after.png`
- Hero-proof `scrollY=0` (EN + ES):
  - `docs/reports/screenshots/tb21f/en-hero-proof-scrollY0.png`
  - `docs/reports/screenshots/tb21f/es-hero-proof-scrollY0.png`
- Desktop compact after (regression check):
  - `docs/reports/screenshots/tb21f/en-desktop-compact-after.png`
  - `docs/reports/screenshots/tb21f/es-desktop-compact-after.png`

## PASS/FAIL matrix
| Breakpoint | Row integrity | Overflow | Clipping | Overlap | Centering | Density | Verdict |
|---|---|---|---|---|---|---|---|
| Desktop compact (EN/ES) | PASS | PASS | PASS | PASS | PASS | PASS | PASS |
| Tablet (EN/ES) | PASS | PASS | PASS | PASS | PASS | PASS | PASS |
| Smallest EN | PASS | PASS | PASS | PASS | PASS | PASS | PASS |
| Smallest ES | PASS | PASS | PASS | PASS | PASS | PASS | PASS |

## Final verdict
- PASS: tablet full-width regression removed (holder wraps content with visible side breathing room).
- PASS: smallest EN/ES density improved while preserving fit safety.
- PASS: ALL CAPS remains active/readable; no wrap/overlap/clipping; hero/nav contracts preserved.
