# TB-05 QA Evidence and Cloudflare Deploy Handoff

Date: 2026-03-02  
Working directory: `/home/ralph/PoellieOne/FamBIT/fambit-site-v1`

## Final Status

**PASS** (evidence bundle complete; build output matches static contract; deploy handoff complete).

## Artifacts

- Final QA report: `docs/reports/TB-05-QA-EVIDENCE-DEPLOY-HANDOFF.md`
- Lighthouse summary: `docs/reports/TB-05-LIGHTHOUSE-SUMMARY.md`
- Lighthouse JSON:
  - `docs/reports/lighthouse-home-en.json`
  - `docs/reports/lighthouse-home-es.json`
- Build success log: `docs/reports/TB-05-BUILD-SUCCESS-LOG.md`
- Compliance pass reference: `docs/reports/TB-04-COMPLIANCE-REPORT.md`

## QA Evidence

### Build and route verification

- `npm run build` succeeded with static output to `dist`.
- Built routes include all required EN/ES pages:
  - `/`
  - `/safety`
  - `/community`
  - `/roadmap`
  - `/es/`
  - `/es/safety`
  - `/es/community`
  - `/es/roadmap`

### Lighthouse (best effort)

- `/`: Performance 100, Accessibility 100, Best Practices 100, SEO 91
- `/es/`: Performance 100, Accessibility 100, Best Practices 100, SEO 91
- LCP: 905 ms (`/`) and 904 ms (`/es/`)

### Accessibility baseline checks

- One H1 per page: validated for all 8 built routes (all report `h1 | 1`).
- Keyboard-reachable nav + language toggle: validated by presence of `hreflang="en"` and `hreflang="es"` on all built routes.
- Visible focus state: `src/styles/global.css` contains `:focus-visible` with explicit high-contrast ring.
- Contrast AA basics: dark text tokens on light neutral surfaces plus Lighthouse accessibility score 100 on EN/ES home.

### Security/compliance spot checks (TB-05 run)

- No wallet connect language/components found.
- No buy-flow language found.
- No price target/prediction/ROI language found.
- No founder identity disclosure found.
- No hard funding promise language found.
- No third-party external script embeds found in `src` or `dist`.

### Link integrity checks

- Exact official links verified in built output:
  - `https://x.com/FamBIT_Sol`
  - `https://t.me/FamBIT_Official`
  - `https://pump.fun/coin/Fu8KCiAYUFN47xpRjbTPXPLHPgYRH7Xdbwc748GRpump`
- On all routes, each official link appears twice (global verified block + footer).
- On `/safety` routes, each official link appears twice (page-specific verified block + footer).

## Acceptance Matrix Mapping

### Mapping to `docs/ACCEPTANCE_CRITERIA.md`

| Criterion | Status | Evidence |
|---|---|---|
| `/safety` exists and accessible | PASS | `dist/safety/index.html`, `dist/es/safety/index.html` |
| Official links identical on `/safety` and footer | PASS | `docs/reports/TB-04-COMPLIANCE-REPORT.md` + link-count checks in built HTML |
| Language toggle EN/ES functional | PASS | Built HTML contains locale links for each route (`hreflang="en"`, `hreflang="es"`) |
| EN default, ES complete coverage | PASS | `npm run check:i18n` pass; EN routes at root, ES under `/es/*` |
| `Not financial advice` on `/safety` and footer | PASS | `dist/safety/index.html` contains disclaimer in anti-scam list and footer |
| Founders anonymous | PASS | Negative grep checks (no founder identity terms) |
| Cloudflare static build success | PASS | `docs/reports/TB-05-BUILD-SUCCESS-LOG.md` |
| No wallet/buy/price-target features | PASS | Negative grep checks in TB-04/TB-05 reports |

### Mapping to `docs/QA_CHECKLIST.md`

| Section | Status | Evidence |
|---|---|---|
| A) Routing and content presence | PASS | Build routes + footer and safety blocks in `dist/*` |
| B) Official link integrity | PASS | Exact URL checks and occurrence counts across built pages |
| C) Bilingual behavior | PASS | EN default, ES paths, parity script pass, no mixed language in built pages |
| D) Compliance and guardrails | PASS | `docs/reports/TB-04-COMPLIANCE-REPORT.md` and TB-05 grep reruns |
| E) Performance targets (best effort) | PASS | Lighthouse scores in `docs/reports/TB-05-LIGHTHOUSE-SUMMARY.md` |
| F) Accessibility basics | PASS | 1 H1/page check, keyboard language links, visible focus style, Lighthouse a11y 100 |
| G) Security posture | PASS | No third-party scripts, no secrets, static-only build output |
| H) Cloudflare Pages readiness | PASS | Build contract + domain and redirect instructions below |

## Cloudflare Pages Deploy Handoff

## Build settings

- Framework preset: `Astro`
- Build command: `npm run build`
- Output directory: `dist`
- Node version: current LTS (recommended)

## Project setup steps

1. In Cloudflare Pages, create project from this repository.
2. Set build command to `npm run build`.
3. Set build output directory to `dist`.
4. Deploy production branch.

## Domain mapping

Add both custom domains to the Pages project:

- `fambit.xyz`
- `www.fambit.xyz`

Use Cloudflare-provided DNS records (proxied) for both hostnames.

## HTTPS and canonical redirect policy

- Enforce HTTPS for both hosts in Cloudflare.
- Canonical host policy: **`https://fambit.xyz` as canonical**.
- Redirect policy: `https://www.fambit.xyz/*` -> `https://fambit.xyz/$1` (301 permanent).
- Keep HSTS enabled after validation period.

## Notes

- External links currently do not use `target="_blank"`, so `rel` hardening for new-tab behavior is not currently required.
- No unresolved QA or compliance defects at handoff time.
