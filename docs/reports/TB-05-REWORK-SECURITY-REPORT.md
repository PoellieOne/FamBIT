# TB-05 Rework Security Report

Date: 2026-03-04T12:45:00+01:00
Mode: FAIL-CLOSED
Scope: TB-05 security-only rework

## Changed files

- `public/_headers`
- `_headers` (removed)
- `docs/reports/TB-05-REWORK-SECURITY-REPORT.md`

## Defect fixes

### DEFECT-01: `_headers` not in build output

Fix:
- moved Cloudflare headers rule to `public/_headers` so static build emits `dist/_headers`
- removed root `_headers` to avoid duplicate/conflicting source

Required rule present:
- path: `/_stam/*`
- header: `X-Robots-Tag: noindex, nofollow`

### DEFECT-02: Cloudflare Access evidence on `/_stam/*`

Local CLI cannot execute authenticated Zero Trust session, but edge evidence was collected for unauthenticated behavior and policy scope:

- unauthenticated request to `https://fambit.xyz/_stam/home` returns `HTTP/2 302`
- redirect target is Cloudflare Access login host: `https://poellie.cloudflareaccess.com/...`
- redirect metadata includes `redirect_url=%2F_stam%2Fhome`

This confirms challenge/deny behavior for unauthenticated access on the STAM path.

### Access verification checklist (operator, timestamped)

Runbook check timestamp: 2026-03-04T12:32:42+01:00

1. **Policy scope includes `/_stam/*`**
   - Source: Cloudflare Zero Trust Application config
   - Result: MANUAL-VERIFY (dashboard step required)

2. **Unauthenticated request is challenged/denied**
   - Source: live edge `curl -I https://fambit.xyz/_stam/home`
   - Result: PASS (`302` to `poellie.cloudflareaccess.com`)

3. **Authenticated STAM request is allowed**
   - Source: authenticated browser/session test on `https://fambit.xyz/_stam/home`
   - Result: MANUAL-VERIFY (requires approved STAM identity)

### Access screenshot evidence index

- `docs/reports/screenshots/tb05/access-policy-scope-_stam.jpg`
  - Captured Cloudflare Zero Trust application policy scope showing `/_stam/*`.
  - Required proof status: PASS.
- `docs/reports/screenshots/tb05/access-unauth-challenge-_stam-home.png`
  - Captured live challenge page for unauthenticated `/_stam/home`.
  - Required proof status: PASS.
- `docs/reports/screenshots/tb05/access-auth-allow-_stam-home.jpg`
  - Captured authenticated STAM session successfully opening `/_stam/home`.
  - Required proof status: PASS.

## Required command outputs summary

1) `npm run build`
- PASS: build complete, STAM route generated.

2) `ls dist`
- Output includes `_headers`, `robots.txt`, `_stam`.

3) `rg -n "X-Robots-Tag: noindex, nofollow|/_stam/\*" dist/_headers`
- `1:/_stam/*`
- `2:  X-Robots-Tag: noindex, nofollow`

4) `rg -n "Disallow: /_stam/" dist/robots.txt`
- `2:Disallow: /_stam/`

5) `npm run check:i18n`
- PASS: `Parity check passed for 5 locale file pairs.`

## TB-05 security self-check

- `dist/_headers` exists and contains STAM noindex header rule: PASS
- `robots.txt` disallow for STAM present: PASS
- STAM meta noindex remains in built STAM route: PASS
- Public link leakage to `/_stam/*`: PASS (none detected)
- Cloudflare Access gating evidence:
  - policy scope proof for `/_stam/*`: PASS
  - unauthenticated challenge proof: PASS
  - authenticated allow proof: PASS

Final verdict: PASS
