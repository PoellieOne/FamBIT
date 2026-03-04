# TB-05 - STAM Overlay Protected Route (`/_stam/home`)

## Objective

Implement protected STAM overlay route(s) with block outlines + labels driven from JSON source of truth.

## Exact files to change

Required:
- `public/robots.txt` (or equivalent robots output source)
- `src/stam/homepage-block-index.v2.json`
- `src/pages/_stam/home.astro` (or equivalent route file for Astro)
- `src/layouts/` STAM layout file (new or existing) for meta robots tags
- `_headers` (Cloudflare Pages headers file) or framework equivalent header config
- homepage render mapping utilities/components for overlay labels

Optional support files:
- `src/components/stam/*`
- `src/styles/*` STAM overlay styles

## Definition of done

- `/_stam/home` renders homepage with visible block outlines and labels.
- Labels include block ID, name, and parameter bullets.
- Hover highlighting works.
- Clicking label copies block ID.
- Overlay metadata is read from `src/stam/homepage-block-index.v2.json` only.
- Security controls active:
  - robots disallow `/_stam/`
  - meta robots noindex,nofollow on STAM page
  - response header X-Robots-Tag noindex,nofollow for `/_stam/*`
  - no public links to `/_stam/*`

## Must NOT change

- No changes to public homepage content semantics.
- No live design mutation tools.
- No query-param based STAM mode.
- No bypass of Cloudflare Access requirement in docs/ops instructions.

## QA steps

1. `npm run check:i18n`
2. `npm run build`
3. Verify `robots.txt` contains `Disallow: /_stam/`.
4. Verify STAM HTML includes meta robots noindex,nofollow.
5. Verify headers for `/_stam/*` include `X-Robots-Tag: noindex, nofollow`.
6. Verify no `/_stam/*` links from public routes.
7. Verify overlay labels and click-to-copy behavior.
8. Verify EN/ES homepage block mapping parity in overlay data.

## Fail conditions

- STAM route indexable by bots.
- Missing any required crawler-protection layer.
- Overlay labels not sourced from JSON contract.
- Missing block ID or label for any visible homepage block.
- Public pages link to `/_stam/*`.
