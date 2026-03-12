# TB-21e — Nav Container Proportion Tightening (Mobile-first)

## Role / Mode
Gatekeeper (S03 / FamBIT)
Mode: Contract + Design Governance + QA

## Mission
Verfijn de menubalk-container op mobile zodat de achtergrond visueel strakker aansluit op de inhoud, zonder regressie op fit, centering of hero-integriteit.

## Context lock
- TB-21d is hard-closed PASS en blijft baseline.
- ALL CAPS blijft default.
- Hero/nav structuur en nav frame-architectuur blijven frozen.

## Probleemstelling
Op mobile oogt de nav-holder momenteel relatief te ruim ten opzichte van logo + menu-items:
- te veel links/rechts lucht
- te veel boven/onder lucht

Desktopverhoudingen zijn beter; mobile moet daar visueel dichterbij komen.

## Scope
1. Tighten container padding op mobile (horizontaal + verticaal).
2. Behoud gecentreerde `logo + menu` groep.
3. Behoud locale-adaptive fit (EN groter waar kan, ES worst-case veilig).

## Richtwaarden (design intent)
Gebruik bij voorkeur responsieve waarden (clamp of percentage-gebaseerd) i.p.v. harde mini-waarden.

Doelbandbreedte mobile nav-holder:
- links/rechts: effectief circa 5-10px (of proportioneel equivalent)
- boven/onder: vergelijkbare orde als links/rechts (visuele symmetrie)

Belangrijk: dit zijn intentieranges; eindwaarde wordt bepaald door fit/stabiliteit op kleinste ES viewport.

## Hard constraints
- Nav blijft 1 rij (geen wrap).
- Geen overlap met language toggle.
- Geen clipping/ellipsis van labels.
- Geen horizontale overflow op kleinste ES viewport.
- Geen hero/layout structuurwijziging.
- Geen regressie op desktop/tablet verhoudingen.

## Acceptatiecriteria
- Menubalk-container oogt visueel strakker op mobile (minder overtollige randruimte).
- `logo + menu` blijft gecentreerd met gebalanceerde links/rechts lucht.
- EN blijft proportioneel sterk; ES blijft worst-case fit zonder overflow/clipping.
- Hero top-state blijft intact (`scrollY=0`): volledig menu bovenin + hero-kerninhoud zichtbaar eronder.

## Fail conditions
FAIL if:
- nav multi-row wordt
- overlap met language toggle ontstaat
- ES smallest overflow/clipping terugkeert
- centering regressie ontstaat
- hero contract of nav-frame contract wordt doorbroken

## Verplichte oplevering door executor
- Gewijzigde filelijst.
- Exacte before/after waarden voor mobile container padding:
  - links/rechts
  - boven/onder
  - eventuele clamp/%-waarden en bijbehorende breakpoints
- Screenshot evidence (EN + ES):
  - smallest before/after
  - tablet after
  - desktop compact after (regressiecheck)
  - hero-proof `scrollY=0` (EN + ES)
- `npm run build` en `npm run check:i18n` resultaten.
- Meettabel per breakpoint: row integrity, overflow, clipping, overlap, centering, hero-visibility (`PASS/FAIL`).
