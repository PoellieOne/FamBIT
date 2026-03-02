# QA Checklist — FamBIT Website V1

Use this checklist after implementation delivery. Any unchecked hard item blocks approval.

## A) Routing and Content Presence

- [ ] `/` exists and loads.
- [ ] `/safety` exists and loads.
- [ ] `/community` exists and loads.
- [ ] `/roadmap` exists and loads.
- [ ] Footer appears on all pages.
- [ ] "Verified Official Links" is prominent on `/safety`.

## B) Official Link Integrity (must match exactly)

- [ ] X link is exactly `https://x.com/FamBIT_Sol`.
- [ ] Telegram link is exactly `https://t.me/FamBIT_Official`.
- [ ] Pump.fun link is exactly `https://pump.fun/coin/Fu8KCiAYUFN47xpRjbTPXPLHPgYRH7Xdbwc748GRpump`.
- [ ] All three links are present on `/safety`.
- [ ] All three links are present in footer.

## C) Bilingual Behavior

- [ ] EN is default on first load.
- [ ] Language toggle EN/ES is visible on every page.
- [ ] Switching to ES updates all page copy (not partial/mixed).
- [ ] EN and ES have complete coverage for all required sections.
- [ ] Navigation labels are translated consistently.

## D) Compliance and Guardrails

- [ ] No wallet connect UI or wallet prompts.
- [ ] No "buy" buttons.
- [ ] No price targets/predictions/ROI language.
- [ ] No manipulation guidance.
- [ ] No founder names or identities.
- [ ] "Not financial advice" present on `/safety` and footer.
- [ ] Anti-scam statements present:
  - [ ] `Admins never DM first`
  - [ ] `Verify links here`
  - [ ] `Never share seed phrase/private keys`
- [ ] No hard promise language about funding real-world initiatives.

## E) Performance Targets (best effort)

- [ ] Lighthouse Performance >= 90 (mobile best effort).
- [ ] Lighthouse Accessibility >= 95 (mobile best effort).
- [ ] Lighthouse Best Practices >= 90.
- [ ] Lighthouse SEO >= 90.
- [ ] Largest Contentful Paint target <= 2.5s on typical broadband (best effort).

## F) Accessibility Basics

- [ ] One clear H1 per page.
- [ ] Logical heading order.
- [ ] Keyboard navigation works for nav and language toggle.
- [ ] Visible focus state on interactive elements.
- [ ] Color contrast passes common AA checks.
- [ ] Links have descriptive text (no ambiguous "click here").

## G) Security Posture

- [ ] No third-party risky scripts or unknown embeds.
- [ ] No inline secrets or API keys in repo.
- [ ] Static build output only; no sensitive runtime endpoints.
- [ ] External links use safe rel/target patterns where applicable.

## H) Cloudflare Pages Readiness

- [ ] `npm run build` succeeds locally/CI.
- [ ] Output directory is `dist`.
- [ ] Cloudflare Pages build settings documented.
- [ ] Custom domains configured: `fambit.xyz` and `www.fambit.xyz`.
- [ ] HTTPS and canonical redirect policy confirmed.
