# TB-21g - Nav System Rebaseline: Centering and Language-Control Stability

## Changed files
- `src/styles/global.css`

## Exact CSS before/after values

### Nav container internal side gutters
- `@media (max-width: 56rem) .c-header`
  - `padding`: `clamp(0.24rem, 0.7vw, 0.3rem) clamp(0.32rem, 1.2vw, 0.48rem)` -> unchanged
- `@media (max-width: 56rem) .c-header-row`
  - `padding-inline`: inherited `6px` (base) -> `clamp(0.2rem, 0.9vw, 0.36rem)`
- `@media (max-width: 23rem) .c-header-row`
  - `padding-inline`: inherited from 56rem rule -> `clamp(0.16rem, 0.9vw, 0.24rem)`

### Centering/spacing rules for `logo + menu`
- `@media (max-width: 56rem) .c-header-row`
  - `justify-content`: `center` -> unchanged
  - `width`: `100%` -> unchanged
  - `gap`: `0.2rem` -> unchanged
- Resulting behavior: centered group remains deterministic while side gutters stay > 0.

### Language-control placement rules per breakpoint
- `@media (max-width: 56rem) .c-hero-lang`
  - `top`: `calc(3.55rem + 0.8rem)` -> `0.95rem`
  - `right`: `0.5rem` -> `0.85rem`
- `@media (min-width: 37.5rem) and (max-width: 56rem) .c-hero-lang`
  - before: no explicit tablet override
  - after: `top: 0.95rem; right: 1rem;`
- `@media (max-width: 23rem) .c-hero-lang`
  - before: inherited tablet/mobile value
  - after: `top: calc(3.7rem + 0.75rem); right: 0.5rem;`

Interpretation:
- Tablet EN/ES keeps language control inline-right (no unnecessary push-down).
- Smallest EN/ES keeps below-nav fallback for fit safety.

## Build checks
- `npm run build`: PASS
- `npm run check:i18n`: PASS

## Screenshot evidence
- Top-state per breakpoint (EN + ES):
  - `docs/reports/screenshots/tb21g/en-desktop-compact-top.png`
  - `docs/reports/screenshots/tb21g/es-desktop-compact-top.png`
  - `docs/reports/screenshots/tb21g/en-tablet-top.png`
  - `docs/reports/screenshots/tb21g/es-tablet-top.png`
  - `docs/reports/screenshots/tb21g/en-smallest-top.png`
  - `docs/reports/screenshots/tb21g/es-smallest-top.png`
- Scrolled-state proof (top vs scrolled pairing for tablet + smallest):
  - `docs/reports/screenshots/tb21g/en-tablet-scrolled.png`
  - `docs/reports/screenshots/tb21g/es-tablet-scrolled.png`
  - `docs/reports/screenshots/tb21g/en-smallest-scrolled.png`
  - `docs/reports/screenshots/tb21g/es-smallest-scrolled.png`

## PASS/FAIL matrix
| Breakpoint | Centered group | Gutters > 0 | Row integrity | Overflow/clipping | Language placement | Scroll stability | Verdict |
|---|---|---|---|---|---|---|---|
| Desktop compact EN | PASS | PASS | PASS | PASS | PASS | PASS | PASS |
| Desktop compact ES | PASS | PASS | PASS | PASS | PASS | PASS | PASS |
| Tablet EN | PASS | PASS | PASS | PASS | PASS | PASS | PASS |
| Tablet ES | PASS | PASS | PASS | PASS | PASS | PASS | PASS |
| Smallest EN | PASS | PASS | PASS | PASS | PASS | PASS | PASS |
| Smallest ES | PASS | PASS | PASS | PASS | PASS | PASS | PASS |

## Non-negotiable goals
| Goal | Verdict |
|---|---|
| Goal 1 - centered `logo + menu` set with positive side gutters | PASS |
| Goal 2 - language-control stability by breakpoint and scroll | PASS |

## Final verdict
- PASS against TB-21g fail conditions: no wrap/overlap/clipping, no drift/regression, hero/nav structure preserved.
