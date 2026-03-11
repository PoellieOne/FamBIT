# TB-18 — Optional Hero Motion Depth (Desktop Only)

## Doel
Introduceer subtiele diepte in de Hero via minimale background-parallax, uitsluitend als stabiliteit en leesbaarheid behouden blijven.

## Scope
Optionele implementatie:
- desktop only
- hero background beweegt iets langzamer dan content
- effectsterkte circa 6–10%
- géén beweging op text container
- nav blijft stabiel

## Skip-regel
Als implementatie layout-instabiliteit of leesbaarheidsrisico veroorzaakt: **SKIP** en rapporteer expliciet "intentionally omitted" met reden.

## Harde constraints (Phase 3 freeze)
- Geen wijziging aan hero layout, nav frame of block-structuur.
- Geen parallax op mobile/tablet.
- Geen motion op hero text container.

## Overlay balance check (verplicht)
Controleer gecombineerde overlays:
- top readability mask
- purple cinematic gradient
- bottom dark anchor

Deze combinatie mag contrast/leesbaarheid van hero-tekst niet verlagen.

## Acceptatiecriteria
- Indien geïmplementeerd: subtiele desktop-only background depth zonder afleiding.
- Geen layout shift of nav-instabiliteit.
- Geen waarneembare parallax op mobile.
- Hero-tekst leesbaarheid blijft minimaal gelijk.

## Fail conditions
FAIL als:
- hero layout verschuift
- nav frame verandert
- motion op text container zit
- parallax zichtbaar is op mobile
- hero leesbaarheid afneemt

## Verplichte oplevering (evidence)
- Bestandslijst met exacte wijzigingen of expliciete SKIP-vermelding.
- Desktop scroll-capture (alleen background beweegt) indien geïmplementeerd.
- Mobile screenshot/video waaruit blijkt: geen parallax.
- Korte contrast/readability check met PASS/FAIL tegen fail conditions.
