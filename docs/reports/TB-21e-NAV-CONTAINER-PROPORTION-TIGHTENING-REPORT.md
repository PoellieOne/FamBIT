# TB-21e - Nav Container Proportion Tightening (Mobile-first)

## Changed files
- `src/styles/global.css`

## Exact before/after values (mobile container padding)
- `@media (max-width: 56rem) .c-header`
  - `padding` before: `0.3rem 0.35rem`
  - `padding` after: `clamp(0.24rem, 0.7vw, 0.3rem) clamp(0.32rem, 1.2vw, 0.48rem)`
  - maps to tighter vertical baseline and responsive horizontal breathing room.
- `@media (max-width: 23rem) .c-header`
  - `padding-inline` before: `clamp(0.3rem, 1.7vw, 0.36rem)`
  - `padding-inline` after: `clamp(0.3rem, 1.7vw, 0.36rem)` (kept; stable fit)
  - `padding-block` before: not explicitly set in this breakpoint (inherited from 56rem rule)
  - `padding-block` after: `clamp(0.26rem, 1.3vw, 0.32rem)`

## Effective smallest-viewport values (320px wide)
- `@max 56rem` fallback computes to:
  - vertical: `0.24rem` (~3.84px)
  - horizontal: `0.32rem` (~5.12px)
- `@max 23rem` override computes to:
  - vertical: `0.26rem` (~4.16px)
  - horizontal: ~`0.34rem` (~5.44px)
- Result: container edge air tightens while staying in intent band and preserving fit safety.

## Build checks
- `npm run build`: PASS
- `npm run check:i18n`: PASS

## Screenshot evidence
- Smallest before/after:
  - `docs/reports/screenshots/tb21e/en-smallest-before.png`
  - `docs/reports/screenshots/tb21e/en-smallest-after.png`
  - `docs/reports/screenshots/tb21e/es-smallest-before.png`
  - `docs/reports/screenshots/tb21e/es-smallest-after.png`
- Tablet after:
  - `docs/reports/screenshots/tb21e/en-tablet-after.png`
  - `docs/reports/screenshots/tb21e/es-tablet-after.png`
- Desktop compact after:
  - `docs/reports/screenshots/tb21e/en-desktop-compact-after.png`
  - `docs/reports/screenshots/tb21e/es-desktop-compact-after.png`
- Hero proof (`scrollY=0`, fixed preset):
  - `docs/reports/screenshots/tb21e/en-hero-proof-scrollY0.png`
  - `docs/reports/screenshots/tb21e/es-hero-proof-scrollY0.png`

## Breakpoint gate table
| Breakpoint | Row integrity | Overflow | Clipping | Toggle overlap | Centering | Hero visibility | Verdict |
|---|---|---|---|---|---|---|---|
| Desktop compact (EN/ES) | PASS | PASS | PASS | PASS | PASS | PASS | PASS |
| Tablet (EN/ES) | PASS | PASS | PASS | PASS | PASS | PASS | PASS |
| Smallest EN | PASS | PASS | PASS | PASS | PASS | PASS | PASS |
| Smallest ES (worst-case) | PASS | PASS | PASS | PASS | PASS | PASS | PASS |

## Final verdict against fail conditions
- PASS: nav remains single-row.
- PASS: no overlap with language toggle.
- PASS: no ES smallest overflow or clipping.
- PASS: centering remains stable.
- PASS: hero/nav structure contract unchanged.
