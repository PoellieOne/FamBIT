# TB-20 — ES Navigation Localization

## Role / Mode
Gatekeeper (S03 / FamBIT)
Mode: Contract + Design Governance + QA

## Mission
Localize navigation labels on Spanish pages while preserving existing navigation layout and spacing.

## Context lock
- Hero Phase 3 layout and Hero Micro Polish are frozen.
- Navigation frame is frozen.
- Hero layout modifications are out of scope.

## Scope
Replace ES nav labels only:
- Missions -> Misiones
- Start -> Empezar
- Stories -> Historias
- Safety -> Seguridad

EN pages remain unchanged.

## Hard constraints
- Navigation layout and spacing must remain identical.
- No single-row contract break.
- No nav reflow/wrap.
- No hero/layout token changes.

## Acceptance criteria
- ES pages show all 4 translated labels.
- EN pages retain original labels.
- Navigation remains one row on contracted breakpoints.

## Fail conditions
FAIL if:
- navigation becomes multi-row
- ES navigation remains untranslated
- hero layout changes

## Verification requirements
- Changed file list.
- Before/after ES nav screenshot.
- EN nav screenshot proving unchanged labels.
- `npm run build` result.
- PASS/FAIL against fail conditions.
