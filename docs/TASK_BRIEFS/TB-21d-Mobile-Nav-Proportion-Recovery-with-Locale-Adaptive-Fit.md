# TB-21d — Mobile Nav Proportion Recovery with Locale-Adaptive Fit

## Role / Mode
Gatekeeper (S03 / FamBIT)
Mode: Contract + Design Governance + QA

## Mission
Herstel de visuele proportie van de mobiele menubalk zodat beschikbare ruimte beter wordt benut, terwijl ES smallest nog steeds zonder overflow/clipping past.

## Context lock
- Hero layout, nav frame architecture en single-row contract blijven frozen.
- ALL CAPS blijft default.
- TB-21c fit-fixes blijven uitgangspunt, maar mogen verfijnd worden.

## Probleemstelling
In de huidige smallest mobile uitvoering is EN te compact gemaakt door ES-stress-optimalisatie.
Gevolg: veel ongebruikte ruimte in de menubalk en te kleine logo/knoppen, waardoor visuele impact en proportie afnemen.

## Scope
1. Vergroot mobile nav proportie waar ruimte beschikbaar is (met name EN).
2. Behoud ES-fit op smallest viewport zonder overflow of clipping.
3. Pas alleen spacing/typografie/sizing aan binnen bestaande nav-architectuur.

## Kernprincipe
Locale-adaptive fit:
- EN mag duidelijk groter renderen wanneer ruimte beschikbaar is.
- ES blijft maatgevend voor worst-case fit.
- Geen global hard-shrink die beide locales onnodig klein maakt.

## Implementatie-richtlijnen
- Gebruik bij voorkeur responsieve/constraint-based tuning (niet alleen brute fixed mini-sizes).
- Houd logo en nav-knoppen in proportionele balans.
- Behoud gecentreerde `logo + menu` groep in menuholder.
- Houd minimale randlucht links/rechts aanwezig (>= 2px), maar voorkom overmatige lege ruimte.

## Hero screenshot consistency rule (verplicht)
Voor hero-visibility bewijs:
- capture op `scrollY = 0`
- consistente viewport preset
- geen stitched/full-page artefact als bewijs voor top-state

## Hard constraints
- Nav blijft 1 rij.
- Geen overlap nav-labels met language toggle.
- Geen clipping/ellipsis van labels.
- Geen hero/nav structurele wijzigingen.
- Geen regressie op desktop/tablet.

## Acceptatiecriteria
- EN smallest toont zichtbaar betere nav-proportie (groter logo/knoppen waar mogelijk).
- ES smallest blijft volledig fit zonder overflow/clipping.
- ALL CAPS blijft actief.
- `logo + menu` blijft gecentreerd met gebalanceerde ruimte.
- Hero top-state blijft intact met volledig zichtbare menu + hero-kerninhoud onder nav.

## Fail conditions
FAIL if:
- nav multi-row wordt
- ES smallest overflow/clipping terugkeert
- EN blijft disproportioneel klein met veel onbenutte balkruimte
- overlap met language toggle ontstaat
- hero/nav structure contract wordt doorbroken

## Verplichte oplevering door executor
- Gewijzigde filelijst.
- Exacte before/after waarden voor mobile nav sizing (logo, font-size, paddings, gaps, eventuele locale overrides).
- Screenshotset (EN + ES):
  - smallest before/after
  - tablet after
  - desktop compact after
- Extra hero-proof screenshots conform `scrollY=0` regel.
- Korte meettabel per breakpoint: row integrity, overflow, clipping, overlap, proportion score (`PASS/FAIL`).
- `npm run build` resultaat.
