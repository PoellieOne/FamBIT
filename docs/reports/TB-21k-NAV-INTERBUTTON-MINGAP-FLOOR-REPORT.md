# TB-21k - Nav Inter-Button Min-Gap Floor

## Changed files
- `src/styles/global.css`
- `docs/reports/TB-21k-nav-metrics.json`
- `docs/reports/screenshots/tb21k/*`

## Exact before/after nav gap values (tokens/rules)
- `.c-header`
  - `--nav-menu-gap-floor`: not present -> `0.25rem` (4px)
  - `--nav-menu-gap`: `0.24rem` -> `0.25rem`
- `@media (max-width: 64rem) .c-header`
  - `--nav-menu-gap`: `0.14rem` -> `0.25rem`
- `@media (max-width: 23rem) .c-header`
  - `--nav-menu-gap`: `0.12rem` -> `0.25rem`
- `@media (max-width: 23rem) html[lang="es"] .c-primary-nav`
  - `gap`: `0.06rem` -> `0.25rem`
- `.c-primary-nav`
  - `gap`: `var(--nav-menu-gap)` -> `max(var(--nav-menu-gap), var(--nav-menu-gap-floor))`

## Measurement data
- Raw metrics file: `docs/reports/TB-21k-nav-metrics.json`
- Matrix dimensions:
  - Breakpoints: `1280x720`, `768x1024`, `1024x768`, `320x568`
  - Locales: EN + ES
  - States: top (`scrollY=0`) + scrolled (`scrollY=320`)

### `buttonGapMin` per combination
| Locale | Breakpoint | Top `buttonGapMin` | Scrolled `buttonGapMin` | Gap floor >= 4px |
|---|---|---:|---:|---|
| EN | Desktop compact | 4.000px | 4.000px | PASS |
| EN | Tablet portrait | 4.000px | 4.000px | PASS |
| EN | Tablet landscape | 4.000px | 4.000px | PASS |
| EN | Smallest | 4.000px | 4.000px | PASS |
| ES | Desktop compact | 4.000px | 4.000px | PASS |
| ES | Tablet portrait | 4.000px | 4.000px | PASS |
| ES | Tablet landscape | 4.000px | 4.000px | PASS |
| ES | Smallest | 4.000px | 4.000px | PASS |

## Regression guard checks
| Check | EN | ES | Verdict |
|---|---|---|---|
| Single-row nav integrity | PASS | PASS | PASS |
| No clipping/ellipsis | PASS | PASS | PASS |
| Centering delta (`abs(leftAir-rightAir) <= 2px`) | PASS | PASS | PASS |
| Side-air floor (`>= 4px`) | PASS | PASS | PASS |
| Language-anchor behavior (no regression) | PASS | PASS | PASS |
| `button gap >= 4px` | PASS | PASS | PASS |

## PASS/FAIL matrix
| Locale | Breakpoint | Top/Scrolled | Single-row | Centering | Side-air >= 4px | No clipping | Language-anchor | Button gap >= 4px | Verdict |
|---|---|---|---|---|---|---|---|---|---|
| EN | Desktop compact | top + scrolled | PASS | PASS | PASS | PASS | PASS | PASS | PASS |
| EN | Tablet portrait | top + scrolled | PASS | PASS | PASS | PASS | PASS | PASS | PASS |
| EN | Tablet landscape | top + scrolled | PASS | PASS | PASS | PASS | PASS | PASS | PASS |
| EN | Smallest | top + scrolled | PASS | PASS | PASS | PASS | PASS | PASS | PASS |
| ES | Desktop compact | top + scrolled | PASS | PASS | PASS | PASS | PASS | PASS | PASS |
| ES | Tablet portrait | top + scrolled | PASS | PASS | PASS | PASS | PASS | PASS | PASS |
| ES | Tablet landscape | top + scrolled | PASS | PASS | PASS | PASS | PASS | PASS | PASS |
| ES | Smallest | top + scrolled | PASS | PASS | PASS | PASS | PASS | PASS | PASS |

## Screenshot evidence
- EN desktop compact:
  - `docs/reports/screenshots/tb21k/en-desktop-compact-top.png`
  - `docs/reports/screenshots/tb21k/en-desktop-compact-scrolled.png`
- EN tablet portrait:
  - `docs/reports/screenshots/tb21k/en-tablet-portrait-top.png`
  - `docs/reports/screenshots/tb21k/en-tablet-portrait-scrolled.png`
- EN tablet landscape:
  - `docs/reports/screenshots/tb21k/en-tablet-landscape-top.png`
  - `docs/reports/screenshots/tb21k/en-tablet-landscape-scrolled.png`
- EN smallest:
  - `docs/reports/screenshots/tb21k/en-smallest-top.png`
  - `docs/reports/screenshots/tb21k/en-smallest-scrolled.png`
- ES desktop compact:
  - `docs/reports/screenshots/tb21k/es-desktop-compact-top.png`
  - `docs/reports/screenshots/tb21k/es-desktop-compact-scrolled.png`
- ES tablet portrait:
  - `docs/reports/screenshots/tb21k/es-tablet-portrait-top.png`
  - `docs/reports/screenshots/tb21k/es-tablet-portrait-scrolled.png`
- ES tablet landscape:
  - `docs/reports/screenshots/tb21k/es-tablet-landscape-top.png`
  - `docs/reports/screenshots/tb21k/es-tablet-landscape-scrolled.png`
- ES smallest:
  - `docs/reports/screenshots/tb21k/es-smallest-top.png`
  - `docs/reports/screenshots/tb21k/es-smallest-scrolled.png`

## Build checks
- `npm run build`: PASS
- `npm run check:i18n`: PASS

## Final verdict
- PASS: hard inter-button gap floor (`>= 4px`) is enforced in all required matrix combinations.
- PASS: no regression on containment, centering, language-anchor, single-row integrity, clipping, or overlap.
