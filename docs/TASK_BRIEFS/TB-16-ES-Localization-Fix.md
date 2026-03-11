# TB-16 — ES Localization Fix (Hero Micro Polish)

## Doel
Herstel volledige ES microcopy-pariteit in de Hero, zonder structurele of layout-wijzigingen.

## Scope
Lokaliseer in de ES-variant:
- secondary CTA label
- trust microcopy

Voorbeeld trust microcopy (EN placeholder):
`Transparent rules • Community driven • No hype`

Dit moet vervangen worden door de correcte ES-equivalent in de ES Hero.

## Harde constraints (Phase 3 freeze)
- Geen wijziging aan hero layout, nav frame of block-structuur.
- Geen reflow/layout shift.
- Geen technische of visuele redesign buiten tekstvervanging.

## Acceptatiecriteria
- ES Hero toont géén Engelse placeholder meer voor secondary CTA of trust microcopy.
- Tekstvervanging veroorzaakt geen zichtbare layout shift.
- Hero leesbaarheid blijft minimaal gelijk.

## Fail conditions
FAIL als:
- hero layout verschuift
- nav frame verandert
- leesbaarheid van hero tekst afneemt

## Verplichte oplevering (evidence)
- Bestandslijst met exacte wijzigingen.
- Screenshot ES Hero (default state) met beide gelokaliseerde elementen zichtbaar.
- Korte PASS/FAIL-check tegen bovenstaande fail conditions.
