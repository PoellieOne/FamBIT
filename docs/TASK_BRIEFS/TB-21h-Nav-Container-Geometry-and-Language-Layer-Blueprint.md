# TB-21h — Nav Container Geometry and Language-Layer Blueprint

## Role / Mode
Gatekeeper (S03 / FamBIT)
Mode: Contract + Design Governance + QA

## Mission
Stabiliseer de nav volgens blueprint: correcte interne geometrie van `logo + menu`, correcte container-marges t.o.v. viewport, en voorspelbare language-button layering/positionering zonder scroll-side effects.

## Scope lock
- ALL CAPS blijft zoals geïmplementeerd (geen discussiepunt in deze TB).
- Hero/nav architecture blijft frozen.
- Alleen container-geometry, inner layout gedrag en language-control positioning/layering.

## Blueprint (bindend)

### A) Inner nav geometry (logo + menu)
- De **inhoudset** (`logo + 4 menu buttons`) wordt als één groep behandeld.
- Deze groep moet als geheel gecentreerd zijn binnen de nav container.
- Interne links/rechts vrije ruimte in container moet aan beide kanten > 0 blijven.
- Minimale interne side air per kant: **>= 4px** in alle relevante states.
- Focus is op juiste inner behavior van de bestaande div-set + padding, niet op nieuwe structuur.

### B) Container ↔ viewport relationship
- Nav container houdt gecontroleerde marge t.o.v. viewport (niet rand-op-rand).
- Marges moeten symmetrisch voelen links/rechts.
- Tablet en smallest mogen verschillende waarden gebruiken, maar visueel consistent profiel behouden.

### C) Language button positioning + Z-layer profile
- Language button positie wordt expliciet gedefinieerd t.o.v. nav container.
- Smallest variant: language button staat iets lager dan top-right, dus verticaal onder de menubalk zichtbaar.
- Z-layer: language button ligt **onder** de nav-layer (dieper), zodat nav visueel bovenaan dominant blijft.
- Scrollgedrag: language button mag niet door nav-flow “mee naar beneden geduwd” worden; positie blijft voorspelbaar volgens breakpoint-regel.

## Breakpoint behavior (verplicht)
- Desktop compact: nav-container en inner set stabiel gecentreerd; language button top-right volgens desktop profiel.
- Tablet: language button niet onnodig omlaag; alleen omlaag bij echt overlaprisico.
- Smallest: language button onder menubalk toegestaan/verwacht, met lagere Z-laag dan nav.

## Hard constraints
- Nav blijft single-row.
- Geen clipping/ellipsis van labels.
- Geen overlap tussen nav inhoud en language button.
- Geen hero layout regressie.
- Geen structurele markup refactor.

## Acceptatiecriteria
- Inner geometry klopt: `logo + menu` als gecentreerde set met positieve side air.
- Container-marges t.o.v. viewport zijn consistent en niet rand-op-rand.
- Language button volgt exact layered behavior per breakpoint.
- Scroll-state blijft stabiel (geen push/drift artifacts).

## Fail conditions
FAIL if:
- inner set niet aantoonbaar gecentreerd is
- side air links/rechts onder 4px zakt in relevante state
- container op tablet/smallest tegen viewportrand plakt zonder bedoelde marge
- language button layer/positie niet conform blueprint is
- scroll alsnog push/drift veroorzaakt

## Verplichte oplevering
- Changed files list.
- Exacte CSS before/after voor:
  - container margins/paddings
  - inner-set alignment rules
  - language button top/right/position/z-index per breakpoint
- Evidence screenshots:
  - top-state + scrolled-state (desktop compact, tablet, smallest) in EN + ES
  - close-up van nav + language button op tablet en smallest
- `npm run build` + `npm run check:i18n` resultaten.
- PASS/FAIL matrix met aparte regels voor: inner centering, container margins, language layer behavior, scroll stability.
