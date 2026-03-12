# TB-21b - Navigation ALL CAPS Default (Single-Row + Spacing Guardrails)

## Changed files
- `src/styles/global.css`

## CSS before/after values (TB-21b scope)
- `.c-nav-link`
  - `font-size`: `0.875rem` -> `0.84rem`
  - `font-weight`: `600` -> `600` (kept in guardrail)
  - `text-transform`: `none` -> `uppercase`
  - `letter-spacing`: `normal` -> `0.05em`
- `.c-header-row`
  - `gap`: `var(--space-2)` -> `0.28rem`
  - `justify-content`: default/start behavior -> `center`
  - `padding-inline`: `0` -> `6px`
- `.c-brand`
  - `margin-right`: `var(--space-2)` -> `0.25rem`
- `.c-primary-nav`
  - `gap`: `0.375rem` -> `0.24rem`

## Breakpoint integrity table (EN + ES)
| Breakpoint | Row integrity | Toggle overlap | Label clipping | Verdict |
|---|---|---|---|---|
| Desktop wide | PASS | PASS | PASS | PASS |
| Desktop compact | PASS | PASS | PASS | PASS |
| Tablet | PASS | PASS | PASS | PASS |
| Smallest mobile | PASS | PASS | PASS | PASS |

## Screenshot evidence
- `docs/reports/screenshots/tb21b/en-after-desktop-wide.png`
- `docs/reports/screenshots/tb21b/en-after-desktop-compact.png`
- `docs/reports/screenshots/tb21b/en-after-tablet.png`
- `docs/reports/screenshots/tb21b/en-after-mobile-smallest.png`
- `docs/reports/screenshots/tb21b/es-after-desktop-wide.png`
- `docs/reports/screenshots/tb21b/es-after-desktop-compact.png`
- `docs/reports/screenshots/tb21b/es-after-tablet.png`
- `docs/reports/screenshots/tb21b/es-after-mobile-smallest.png`

## Build result
- `npm run build`: PASS

## Final verdict against fail conditions
- PASS: nav remains single-row on tested widths.
- PASS: no label clipping/ellipsis observed.
- PASS: no overlap with language toggle in EN/ES.
- PASS: no hero/nav architecture refactor introduced.
