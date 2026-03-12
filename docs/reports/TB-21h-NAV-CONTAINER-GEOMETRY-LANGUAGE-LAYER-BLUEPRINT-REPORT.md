# TB-21h - Nav Container Geometry and Language-Layer Blueprint

## Changed files
- `src/styles/global.css`

## Exact CSS before/after values

### Container margins/paddings
- `@media (max-width: 56rem) .c-header`
  - `max-width`: `calc(100vw - 0.5rem)` -> `calc(100vw - 0.75rem)`
  - `padding`: `clamp(0.24rem, 0.7vw, 0.3rem) clamp(0.32rem, 1.2vw, 0.48rem)` -> unchanged
- `@media (max-width: 56rem) .c-home-nav-fixed`
  - `max-width`: `calc(100vw - 0.5rem)` -> `calc(100vw - 0.75rem)`
- `@media (min-width: 37.5rem) and (max-width: 56rem) .c-header`
  - `max-width`: `calc(100vw - 2.5rem)` -> unchanged in this TB (already in baseline)
  - `padding`: `clamp(0.24rem, 0.6vw, 0.3rem) clamp(0.5rem, 1vw, 0.75rem)` -> unchanged
- `@media (max-width: 23rem) .c-header`
  - `padding-inline`: `clamp(0.26rem, 1.5vw, 0.32rem)` -> `clamp(0.28rem, 1.5vw, 0.34rem)`
  - `padding-block`: `clamp(0.26rem, 1.3vw, 0.32rem)` -> unchanged

### Inner-set alignment rules (`logo + menu`)
- `@media (max-width: 56rem) .c-header-row`
  - `justify-content`: `center` -> unchanged
  - `width`: `100%` -> unchanged
  - `padding-inline`: `clamp(0.2rem, 0.9vw, 0.36rem)` -> `clamp(0.25rem, 0.9vw, 0.38rem)`
- `@media (max-width: 23rem) .c-header-row`
  - `padding-inline`: `clamp(0.16rem, 0.9vw, 0.24rem)` -> `clamp(0.25rem, 1vw, 0.3rem)`

### Language button top/right/position/z-index per breakpoint
- `@media (max-width: 56rem) .c-hero-lang`
  - `position`: `fixed` -> unchanged
  - `top`: `0.95rem` -> unchanged
  - `right`: `0.85rem` -> `0.8rem`
  - `z-index`: `60` -> `58` (below nav layer)
- `@media (min-width: 37.5rem) and (max-width: 56rem) .c-hero-lang`
  - `top`: `0.95rem` -> unchanged
  - `right`: `1rem` -> unchanged
- `@media (max-width: 23rem) .c-hero-lang`
  - `top`: `calc(3.7rem + 0.75rem)` -> `calc(3.62rem + 0.75rem)`
  - `right`: `0.5rem` -> unchanged
  - `position`/`z-index`: inherited from max-56 rules (`fixed`, `58`)

## Side-air >= 4px proof
- `@media (max-width: 56rem) .c-header-row padding-inline` minimum is `0.25rem` (= 4px) per side.
- `@media (max-width: 23rem) .c-header-row padding-inline` minimum is `0.25rem` (= 4px) per side.
- Requirement `>= 4px` per internal side is enforced by rule floor at both tablet and smallest.

## Build checks
- `npm run build`: PASS
- `npm run check:i18n`: PASS

## Evidence screenshots (EN + ES)
- Desktop compact top + scrolled:
  - `docs/reports/screenshots/tb21h/en-desktop-compact-top.png`
  - `docs/reports/screenshots/tb21h/en-desktop-compact-scrolled.png`
  - `docs/reports/screenshots/tb21h/es-desktop-compact-top.png`
  - `docs/reports/screenshots/tb21h/es-desktop-compact-scrolled.png`
- Tablet top + scrolled:
  - `docs/reports/screenshots/tb21h/en-tablet-top.png`
  - `docs/reports/screenshots/tb21h/en-tablet-scrolled.png`
  - `docs/reports/screenshots/tb21h/es-tablet-top.png`
  - `docs/reports/screenshots/tb21h/es-tablet-scrolled.png`
- Smallest top + scrolled:
  - `docs/reports/screenshots/tb21h/en-smallest-top.png`
  - `docs/reports/screenshots/tb21h/en-smallest-scrolled.png`
  - `docs/reports/screenshots/tb21h/es-smallest-top.png`
  - `docs/reports/screenshots/tb21h/es-smallest-scrolled.png`
- Close-up nav + language button (tablet + smallest):
  - `docs/reports/screenshots/tb21h/en-tablet-closeup-nav-lang.png`
  - `docs/reports/screenshots/tb21h/es-tablet-closeup-nav-lang.png`
  - `docs/reports/screenshots/tb21h/en-smallest-closeup-nav-lang.png`
  - `docs/reports/screenshots/tb21h/es-smallest-closeup-nav-lang.png`

## PASS/FAIL matrix
| Rule | Desktop compact EN/ES | Tablet EN/ES | Smallest EN/ES | Verdict |
|---|---|---|---|---|
| Inner centering (`logo + 4 buttons` as one set) | PASS | PASS | PASS | PASS |
| Container margins vs viewport (not edge-to-edge) | PASS | PASS | PASS | PASS |
| Language layer behavior by breakpoint | PASS | PASS | PASS | PASS |
| Scroll stability (no push/drift) | PASS | PASS | PASS | PASS |
| Side air >= 4px per side (internal) | PASS | PASS | PASS | PASS |

## Final verdict
- PASS: TB-21h blueprint criteria met without markup refactor or architecture changes.
