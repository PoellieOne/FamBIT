# TB-17 — CTA Interaction Polish (Hero Micro Polish)

## Doel
Voeg subtiele hover-verfijning toe aan beide Hero CTA's, zonder layout impact.

## Scope
Primary CTA (`Explore missions`) hover:
- iets helderder groen
- subtiele glow

Secondary CTA (`Start a mission`) hover:
- subtiele border glow
- lichte arrow emphasis (alleen als pijl al aanwezig is)

## Harde constraints (Phase 3 freeze)
- Geen wijziging aan hero layout, nav frame of block-structuur.
- Geen layout shift (geen resize, geen spacing shift, geen border-width jump).
- Alleen visuele hover-polish; geen structurele interactiewijziging.

## Acceptatiecriteria
- Beide CTA's hebben zichtbaar subtiele hover-refinement volgens scope.
- Geen zichtbare reflow of positieverschuiving van CTA's/hero-content.
- Nav blijft visueel stabiel.

## Fail conditions
FAIL als:
- hero layout verschuift
- nav frame verandert
- hover-effect reflow veroorzaakt

## Verplichte oplevering (evidence)
- Bestandslijst met exacte wijzigingen.
- Voor/na screenshots desktop:
  - default CTA state
  - hover primary CTA
  - hover secondary CTA
- Korte PASS/FAIL-check tegen bovenstaande fail conditions.
