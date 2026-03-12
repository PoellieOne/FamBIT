# TB-21i — Nav Geometry Contract Rebaseline

## Role / Mode
Gatekeeper (S03 / FamBIT)
Mode: Contract + Design Governance + QA

## Mission
Voer een gecontroleerde rebaseline uit van nav-geometry via een tokenized contractmodel (Option A), zodat patch-cascade regressies stoppen.

## Approved strategy
Gekozen optie: **A — Tokenized geometry contract**

## Scope lock
- ALL CAPS blijft zoals geïmplementeerd.
- Hero/nav architecture blijft frozen.
- Geen markup-refactor.
- Focus op CSS-geometry en language-control gedrag.

## Implementatiescope
Primair bestand:
- `src/styles/global.css`

Eventuele extra output:
- `docs/reports/TB-21i-NAV-GEOMETRY-CONTRACT-REBASELINE-REPORT.md`
- `docs/reports/screenshots/tb21i/*`

## Contract model (verplicht)
Definieer en gebruik een consistente tokenfamilie (CSS custom properties of equivalent):
- container outer max-width offset
- container padding x/y
- inner side-air floor (minimaal 4px)
- brand-menu gap
- nav-link density controls
- language-control profiel per breakpoint
- language z-layer profiel

## Deterministische cascade (verplicht)
Consolideer regels in vaste volgorde:
1. base
2. tablet band
3. smallest band

Neutraliseer conflicterende legacy overrides uit overlappende media query-patches.

## Behavior contract (hard)
1. `logo + menu buttons` als één set gecentreerd binnen nav container.
2. Interne left/right side-air op tablet + smallest altijd >= 4px (EN + ES).
3. Tablet: language control inline-right tenzij echte overlap-risico.
4. Smallest: below-nav language profile toegestaan, stabiel.
5. Geen scroll push/drift artifacts tussen nav en language control.

## Hard constraints
- Nav blijft single-row.
- Geen clipping/ellipsis/overlap.
- Geen hero layout regressie.
- Geen nav-frame architectuurwijziging.

## Verificatiematrix (vast, niet wijzigen)

### Breakpoints
- Desktop compact: `1280x720`
- Tablet portrait: `768x1024`
- Tablet landscape: `1024x768`
- Smallest: `320x568`

### Locales
- EN + ES op elke breakpoint.

### States
- Top-state: `scrollY=0`
- Scrolled-state: `scrollY=320`

## Meetbare acceptance checks
- Single-row integrity.
- Centering delta: `abs(leftAir - rightAir) <= 2px`.
- Side-air floor: `leftAir >= 4px` en `rightAir >= 4px` (tablet + smallest).
- Geen clipping/ellipsis/overlap.
- Language contract per breakpoint.
- Scroll stability.
- Hero safety (top-state zichtbaar, geen nav-geïnduceerde hero-regressie).

## Fail conditions
FAIL if:
- nav multi-row wordt
- side-air onder 4px zakt op tablet/smallest
- centering delta structureel > 2px
- overlap/clipping/ellipsis optreedt
- language profile per breakpoint niet wordt gehaald
- scroll push/drift optreedt
- hero/nav contract wordt geschonden

## Verplichte oplevering door executor
- Changed file list.
- Exacte before/after tokenwaarden.
- Korte uitleg welke legacy overrides geneutraliseerd/vervangen zijn.
- Screenshot set in `docs/reports/screenshots/tb21i/` volgens matrix.
- Rapport in `docs/reports/TB-21i-NAV-GEOMETRY-CONTRACT-REBASELINE-REPORT.md`.
- Uitkomst van:
  - `npm run build`
  - `npm run check:i18n`
- Volledige PASS/FAIL matrix + eindverdict.
