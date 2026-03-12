# TB-21b — Navigation ALL CAPS Default (Single-Row + Spacing Guardrails)

## Role / Mode
Gatekeeper (S03 / FamBIT)
Mode: Contract + Design Governance + QA

## Mission
Implementeer ALL CAPS als default voor primary navigation labels, met behoud van 1-rij nav-hoogte en zonder overlap met language toggle op kleine schermbreedtes.

## Context lock
- Hero layout, nav frame en Phase 3 structuur blijven frozen.
- Geen structurele nav/hero refactor.
- Alleen typografie + spacing tuning binnen bestaande nav architecture.

## Scope
1. Primary nav labels standaard in ALL CAPS (EN + ES).
2. Spacing tuning mag, maar alleen binnen bestaande header/nav container.
3. ES is leidende stress-test variant (breedste labels).

## Belangrijk ontwerpprincipe
Benut beschikbare horizontale ruimte links en rechts van logo/nav zodat:
- visuele balans links/rechts gelijkwaardig voelt,
- ruimte links van het logo en ruimte rechts van het laatste nav-item optisch in evenwicht zijn,
- zonder wijziging van layout-structuur of extra rijvorming.

## Typografie guardrails
- text-transform: uppercase
- letter-spacing: +4-6% (t.o.v. huidige nav baseline)
- font-weight: 500-600

## Layout & stability guardrails
- Nav moet 1 rij blijven op alle contract-breedtes.
- Geen zichtbare overlap tussen laatste nav-item en language toggle rechts.
- Geen clipping/ellipses van nav labels.
- Geen wijziging aan hero block-structuur of nav frame-architectuur.
- Geen visuele sprong (layout shift) bij routewissel of locale-switch.

## Testfocus (verplicht)
Valideer op minimaal:
- Desktop wide
- Desktop compact
- Tablet
- Kleinste ondersteunde mobile variant

Voor iedere breakpoint expliciet checken:
- EN nav
- ES nav (maatgevend)
- interactie met language toggle (rechts)

## Acceptatiecriteria
- ALL CAPS actief als default op primary nav labels.
- Single-row contract blijft intact op alle geteste breedtes.
- Geen overlap met language toggle, ook niet in ES op kleinste breedte.
- Visuele balans links/rechts van nav/brand voldoet (geen scheef gewicht).
- Geen hero/layout regressies.

## Fail conditions
FAIL if:
- nav wordt multi-row
- nav labels overlappen met language toggle
- zichtbare clipping/overflow van labels optreedt
- hero layout verandert
- nav frame architectuur wijzigt

## Verplichte oplevering door executor
- Gewijzigde filelijst.
- Exacte before/after waarden voor:
  - nav font-size (indien aangepast)
  - letter-spacing
  - font-weight
  - relevante horizontale spacing/padding tokens of waarden
- Screenshotset per breakpoint (EN + ES), inclusief kleinste variant met language toggle zichtbaar.
- Korte meettabel: row integrity + overlap check per breakpoint (`PASS/FAIL`).
- `npm run build` resultaat.
- Eindverdict tegen fail conditions.
