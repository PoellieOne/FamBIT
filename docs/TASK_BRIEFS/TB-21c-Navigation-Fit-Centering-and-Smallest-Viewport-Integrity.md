# TB-21c — Navigation Fit, Centering, and Smallest-Viewport Integrity

## Role / Mode
Gatekeeper (S03 / FamBIT)
Mode: Contract + Design Governance + QA

## Mission
Herstel nav-centering en viewport-fit na TB-21b zodat de menubalk op alle breedtes stabiel blijft, zonder hero-regressie.

## Context lock
- Hero structure, nav frame architecture, and Phase 3 hierarchy remain frozen.
- ALL CAPS blijft default (TB-21b intentie blijft actief).
- Alleen spacing/typography/responsive tuning binnen bestaande nav en hero contracts.

## Problemen die opgelost moeten worden
1. De ruimte tussen rechterkant logo en eerste menu-item is te groot.
2. De set `logo + menu-items` is niet correct gecentreerd binnen de nav-holder.
3. In smalste ES viewport is horizontale overflow zichtbaar (logo clipping/balk te breed).
4. In smalste viewport moet bovenin complete menu zichtbaar blijven en daaronder alle hero-inhoud volledig zichtbaar zijn.

## Scope

### A) Logo-menu spacing correctie
- Reduceer de horizontale ruimte tussen logo-rechterkant en eerste menu-item tot circa 50% van huidige TB-21b waarde.
- Behoud minimale lucht tussen nav-knoppen en container-rand van minstens 2px.

### B) Geometrische centering in nav-holder
- De volledige set van `home-logo + menu-items` moet als groep gecentreerd zijn in de nav achtergrondcontainer.
- Ruimte links en rechts tot nav-knoppen moet optisch en functioneel gelijkwaardig zijn (symmetrische balans).

### C) Smallest ES viewport fit
- Geen horizontale overflow van nav.
- Geen logo clipping.
- Geen multi-row nav.
- Language toggle mag onder de menubalk blijven, maar mag bij scroll niet leiden tot layout-instabiliteit in nav-frame.

### D) Hero integrity op kleinste viewport
- Bij initiële load moet het volledige menu bovenaan zichtbaar zijn.
- Alle hero kerninhoud eronder moet volledig zichtbaar blijven (geen afkapping/overlap van hoofdcontent in de hero-zone).

## Hard constraints
- Geen structurele hero/layout refactor.
- Geen nav frame-architectuur wijziging.
- Geen wrap naar tweede nav-rij.
- Geen overlap of clipping van nav labels.
- Geen regressie op desktop/tablet waar TB-21b al PASS had.

## Acceptatiecriteria
- ALL CAPS blijft actief.
- Brand-menu gap is aantoonbaar verkleind (ongeveer gehalveerd t.o.v. TB-21b).
- `logo + menu` staat gecentreerd in menuholder, met gebalanceerde links/rechts ruimte.
- Smallest ES viewport: geen overflow, geen clipping, geen overlap.
- Hero top-zone op kleinste viewport toont volledig menu + volledige hero kerninhoud onder de menubalk.

## Fail conditions
FAIL if:
- nav wordt multi-row
- horizontale overflow blijft bestaan op kleinste ES viewport
- logo of menu-items worden afgeknipt
- `logo + menu` blijft niet-gecentreerd in container
- hero kerninhoud blijft deels buiten zicht in kleinste viewport
- hero/nav structure contract wordt geschonden

## Verplichte oplevering door executor
- Gewijzigde filelijst.
- Exacte before/after CSS waarden voor:
  - brand↔first-item gap
  - nav group/container horizontale spacing
  - nav paddings/gaps relevant voor centering
  - kleinste viewport-specifieke overrides
- Screenshot evidence (EN + ES):
  - desktop wide
  - desktop compact
  - tablet
  - smallest mobile (kritisch)
- Extra bewijs smallest ES:
  - screenshot met volledig menu zichtbaar bovenaan
  - screenshot met hero kerninhoud volledig zichtbaar onder de menubalk
- `npm run build` resultaat.
- Meettabel per breakpoint: row integrity, overflow, clipping, centering, hero-visibility (`PASS/FAIL`).
