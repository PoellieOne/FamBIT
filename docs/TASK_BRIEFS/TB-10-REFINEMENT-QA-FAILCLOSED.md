# TB-10 - Homepage + STAM Refinement QA (Fail-Closed)

## Objective

Run final QA gate for TB-07/08/09 refinements and confirm no regressions in security, parity, or compliance.

## Exact files to change

- `docs/reports/TB-10-REFINEMENT-QA-REPORT.md`
- `docs/reports/screenshots/tb10/*`

## Mandatory QA gates

### A) Hero anchor + full-bleed hygiene

- Hero has stable ID on EN/ES homepage.
- No top seam above hero.
- No rounded hero-image corners.

### B) Hero viewport behavior + mask

- Hero fills opening viewport on EN/ES.
- Body content starts after scroll.
- Mask/overlay readability is clear for nav/text/CTA.

### C) Footer edge anchor

- Dark footer reaches bottom edge without visible seam.

### D) STAM bidirectional hover

- List hover highlights preview.
- Preview hover highlights list.
- Mapping is ID-correct and stable.

### E) Security/crawler protections unchanged

- `robots.txt` disallow for `/_stam/` remains.
- `dist/_headers` contains `X-Robots-Tag` for `/_stam/*`.
- STAM page meta robots noindex/nofollow remains.

### F) Compliance + parity

- EN/ES parity remains valid.
- No forbidden content patterns introduced.

## Required commands

1. `npm run check:i18n`
2. `npm run build`
3. `rg -n "Disallow: /_stam/" dist/robots.txt`
4. `rg -n "X-Robots-Tag: noindex, nofollow|/_stam/\*" dist/_headers`
5. `rg -n -i "(connect wallet|wallet connect|buy now|swap|price target|price prediction|founder|guaranteed gains|guaranteed returns)" src/content src/pages dist`

## Definition of done

- All gates A-F pass.
- Report contains concrete evidence references + screenshot paths.
- Final verdict explicitly PASS or FAIL.

## Fail conditions

- Any gate A-F fails.
- Missing evidence for any claimed pass.
- Security/crawler protection regresses.
