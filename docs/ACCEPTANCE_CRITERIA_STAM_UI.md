# ACCEPTANCE_CRITERIA_STAM_UI

Mode: FAIL-CLOSED  
Scope: `/_stam/*` overlay and dial panel

Any single fail => overall FAIL.

## 1) Route strategy

PASS when:
- STAM UI exists only under `/_stam/*`.

FAIL when:
- STAM mode relies on query params or public routes.

## 2) Crawler exclusion (mandatory)

PASS when all are true:
- `robots.txt` disallows `/_stam/`
- STAM pages include meta robots `noindex,nofollow`
- STAM responses include `X-Robots-Tag: noindex, nofollow`

FAIL when:
- any crawler-exclusion layer is missing.

## 3) Access protection (mandatory)

PASS when:
- Cloudflare Access policy protects `/_stam/*`
- unauthorized users cannot reach STAM UI

FAIL when:
- `/_stam/*` is reachable without Access gating (unless STAM explicitly disables in writing)

## 4) Public route isolation

PASS when:
- no internal links to `/_stam/*` exist on public pages

FAIL when:
- public navigation or content links to `/_stam/*`

## 5) Block overlay completeness

PASS when:
- every visible homepage block has overlay label with ID + name + parameter bullets
- hover highlight works
- click-to-copy ID works

FAIL when:
- any block lacks label/ID
- copy behavior fails

## 6) JSON source-of-truth integrity

PASS when:
- overlay and dial metadata are sourced from `src/stam/homepage-block-index.v2.json`
- IDs are stable and match rendered blocks

FAIL when:
- metadata is hardcoded in UI or ID mapping is inconsistent

## 7) Dial panel command generation

PASS when:
- panel selects block and parameters correctly
- generated command text uses valid block IDs
- parameter values restricted to subtle/balanced/bold
- copy command button works

FAIL when:
- panel cannot generate valid tweak commands
- invalid values or unknown parameters are emitted

## 8) Compliance carryover

PASS when:
- no wallet connect
- no buy/swap embeds
- no price target/prediction guidance
- no founder identity exposure
- no hard funding promises
- no risky external scripts

FAIL when:
- any compliance guardrail is violated

## Final decision

- PASS only if sections 1 through 8 pass.
- Otherwise FAIL with explicit defect list.
