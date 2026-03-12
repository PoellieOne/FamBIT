# TB-21k — Nav Inter-Button Min-Gap Floor

## Role / Mode
Gatekeeper (S03 / FamBIT)
Mode: Contract + Design Governance + QA

## Mission
Leg een harde minimale horizontale spacing vast tussen nav-knoppen, zodat de visuele gap nooit naar 0px zakt.

## Scope
- Alleen nav button-to-button spacing (horizontale gap) in bestaande CSS.
- Geen structurele wijzigingen.
- Geen wijziging aan ALL CAPS, hero-structuur of nav-architectuur.

## Hard requirement
- Minimale inter-button gap: **>= 4px** in alle relevante states:
  - EN + ES
  - desktop compact, tablet portrait, tablet landscape, smallest
  - top (`scrollY=0`) en scrolled (`scrollY=320`)

## Preferred implementation rule
- Maak de gap-floor expliciet in het geometry-tokenmodel (bijv. token floor), niet impliciet via toevallige cascades.

## Hard constraints
- Single-row nav blijft intact.
- Geen clipping/ellipsis/overlap.
- Geen regressie op centering of side-air eisen.
- Geen language-control regressie.

## Acceptance criteria
- In alle matrix-combinaties is de gemeten knop-gap >= 4px.
- Bestaande containment, centering en language-anchor gedrag blijft correct.

## Fail conditions
FAIL if:
- gemeten inter-button gap < 4px in een combinatie
- nav wrap/overlap/clipping terugkeert
- eerdere blocker-fixes regressie tonen

## Verplichte oplevering
- Changed files list.
- Exact before/after waarden van nav gap tokens/rules.
- Rapport: `docs/reports/TB-21k-NAV-INTERBUTTON-MINGAP-FLOOR-REPORT.md`
- Screenshot evidence in `docs/reports/screenshots/tb21k/` voor matrix (EN/ES, alle breakpoints, top/scrolled).
- Meetdata met expliciete `buttonGapMin` per combinatie.
- `npm run build` + `npm run check:i18n` resultaten.
- PASS/FAIL matrix inclusief nieuwe regel: `button gap >= 4px`.
