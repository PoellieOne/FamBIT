# STAM_OVERLAY_SPEC

Scope: Protected STAM-only homepage overlay at `/_stam/home`  
Mode: CONTRACT + SECURITY + QA  
Approach: Option A (separate route namespace under `/_stam/*`)

## 1) Objective

Provide a STAM-only visual control view of the homepage with block outlines, stable IDs, and copyable instruction anchors, without exposing this UI to regular users or crawlers.

## 2) Route and Visibility Model

- STAM routes live only under:
  - `/_stam/home`
  - optional future STAM routes under `/_stam/*`
- Public pages must not link to `/_stam/*`.
- STAM UI is treated as non-public operational surface.

## 3) Data Source Contract (single source of truth)

All overlay labels and parameter bullet lists must render from:

- `src/stam/homepage-block-index.v2.json`

Rules:
- IDs are stable contract keys.
- Overlay must not hardcode block metadata in component markup.
- JSON key drift is a breaking change and must be flagged in QA.

## 4) Overlay UX Requirements (`/_stam/home`)

For each mapped homepage block:
- show visible outline
- show label chip with:
  - block ID
  - block name
  - parameter bullets
- hover state highlights block and label together
- click label copies block ID to clipboard

Interaction behavior:
- non-destructive, read-only guidance layer
- no live production CSS mutation in this phase

## 5) Security Controls (fail-closed)

### Mandatory controls

1. `robots.txt` must include:
   - `Disallow: /_stam/`
2. STAM pages must include:
   - `<meta name="robots" content="noindex,nofollow">`
3. STAM responses must include:
   - `X-Robots-Tag: noindex, nofollow`
4. Public pages must contain no internal links to `/_stam/*`.

### Hard protection (required)

5. Cloudflare Access policy must gate `/_stam/*`.

If Access gating is not active, release is FAIL unless STAM explicitly disables this requirement in writing.

## 6) Cloudflare Access Setup (STAM runbook)

1. Open Cloudflare Zero Trust dashboard.
2. Create new Application:
   - Type: Self-hosted
   - Domain: `fambit.xyz`
   - Path: `/_stam/*`
3. Session policy:
   - short session TTL (recommended)
4. Include policy:
   - allowed STAM emails/groups only
5. Exclude policy:
   - everyone else
6. Save and deploy.
7. Validate:
   - unauthenticated user receives Access challenge/deny
   - authorized STAM user can open `/_stam/home`
8. Keep public routes unaffected.

## 7) Header/robots implementation notes (Astro + Cloudflare Pages)

Preferred implementation:
- static `public/robots.txt` with `Disallow: /_stam/`
- meta robots tag in STAM layout/page head
- `_headers` file or equivalent framework header config to set:
  - `/_stam/*`
  - `X-Robots-Tag: noindex, nofollow`

## 8) Non-goals

- No production style mutation.
- No public editor.
- No query-param hidden panel approach.
