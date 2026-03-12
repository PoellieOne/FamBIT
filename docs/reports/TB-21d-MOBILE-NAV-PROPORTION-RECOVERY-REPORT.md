# TB-21d - Mobile Nav Proportion Recovery with Locale-Adaptive Fit

## Changed files
- `src/styles/global.css`

## Exact before/after values (smallest mobile scope)
- `.c-header` (at `@media (max-width: 23rem)`)
  - `padding-inline`: `0.28rem` -> `0.22rem`
- `.c-header-row` (at `@media (max-width: 23rem)`)
  - `gap`: inherited `0.2rem` -> `0.24rem`
- `.c-brand-logo` (at `@media (max-width: 23rem)`, default/base)
  - `height`: `24px` -> `28px`
  - `max-height`: `26px` -> `30px`
- `.c-primary-nav` (at `@media (max-width: 23rem)`, default/base)
  - `gap`: `0.08rem` -> `0.12rem`
- `.c-nav-link` (at `@media (max-width: 23rem)`, default/base)
  - `padding`: `0.16rem 0.22rem` -> `0.2rem 0.32rem`
  - `font-size`: `0.58rem` -> `clamp(0.62rem, 2.5vw, 0.68rem)`
  - `letter-spacing`: `0.03em` -> `0.04em`

## Locale-adaptive overrides (ES worst-case fit)
- `html[lang="es"] .c-brand-logo`
  - `height: 25px`
  - `max-height: 27px`
- `html[lang="es"] .c-primary-nav`
  - `gap: 0.08rem`
- `html[lang="es"] .c-nav-link`
  - `padding: 0.16rem 0.22rem`
  - `font-size: 0.58rem`
  - `letter-spacing: 0.03em`

## Intent mapping to brief
- EN can render larger by default on smallest viewport (logo + nav controls visibly recovered).
- ES keeps compact fit via locale-specific overrides for the worst-case label width.
- ALL CAPS remains active (`text-transform: uppercase` unchanged).
- Single-row and centered group contract remain unchanged (no structural nav/hero edits).

## Build and parity checks
- `npm run build`: PASS
- `npm run check:i18n`: PASS

## Breakpoint gate table (implementation-level)
| Breakpoint | Row integrity | Overflow | Clipping | Toggle overlap | Proportion recovery | Verdict |
|---|---|---|---|---|---|---|
| Desktop compact | PASS | PASS | PASS | PASS | N/A | PASS |
| Tablet | PASS | PASS | PASS | PASS | N/A | PASS |
| Smallest mobile EN | PASS | PASS | PASS | PASS | PASS | PASS |
| Smallest mobile ES | PASS | PASS | PASS | PASS | PASS | PASS |

## Screenshot evidence
- Smallest before/after:
  - `docs/reports/screenshots/tb21d/en-smallest-before.png`
  - `docs/reports/screenshots/tb21d/en-smallest-after.png`
  - `docs/reports/screenshots/tb21d/es-smallest-before.png`
  - `docs/reports/screenshots/tb21d/es-smallest-after.png`
- Tablet after:
  - `docs/reports/screenshots/tb21d/en-tablet-after.png`
  - `docs/reports/screenshots/tb21d/es-tablet-after.png`
- Desktop compact after:
  - `docs/reports/screenshots/tb21d/en-desktop-compact-after.png`
  - `docs/reports/screenshots/tb21d/es-desktop-compact-after.png`
- Hero-proof (`scrollY=0`, fixed preset 320x568):
  - `docs/reports/screenshots/tb21d/en-hero-proof-scrollY0.png`
  - `docs/reports/screenshots/tb21d/es-hero-proof-scrollY0.png`
