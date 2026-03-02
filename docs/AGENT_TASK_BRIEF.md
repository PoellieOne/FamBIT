# Agent Task Brief — FamBIT Website V1

## 1) Scope and Role Contract

- This brief is for implementation agents only.
- Gatekeeper scope is contract and verification; no direct website implementation in this file.
- Build a static-first public website for `fambit.xyz` with EN/ES support.

## 2) Hard Constraints (Fail-Closed)

- No wallet connect.
- No private keys/seed phrase collection, processing, or storage.
- No secrets handling in frontend code.
- No buy buttons.
- No price targets, predictions, or ROI language.
- No manipulation guidance.
- No hard promise language for real-world funding; keep all impact language aspirational and optional.
- No founder identities or names.

If any hard constraint is violated, delivery is **automatic FAIL**.

## 3) Stack Decision (Gatekeeper)

**Chosen stack: Astro + Tailwind CSS (Cloudflare Pages target)**

Rationale:
- Performance: Astro outputs static HTML by default, ideal for fast LCP/TTI.
- Simplicity: fewer moving parts than Next.js static export for this 4-page marketing site.
- i18n control: straightforward content-file split (`en`/`es`) with deterministic routing.
- Deploy friction: Astro static output maps cleanly to Cloudflare Pages with minimal adapter complexity.
- Security posture: static-first reduces runtime attack surface.

## 4) Required Project Structure (exact)

Use this structure unless blocked by tooling constraints:

```text
/
  package.json
  astro.config.mjs
  tailwind.config.mjs
  postcss.config.cjs
  tsconfig.json
  public/
    favicon.svg
  src/
    components/
      Header.astro
      Footer.astro
      LanguageToggle.astro
      VerifiedLinks.astro
      SafetyNotice.astro
    content/
      en/
        site.json
        home.json
        safety.json
        community.json
        roadmap.json
      es/
        site.json
        home.json
        safety.json
        community.json
        roadmap.json
    layouts/
      BaseLayout.astro
    pages/
      index.astro
      safety.astro
      community.astro
      roadmap.astro
    styles/
      globals.css
```

## 5) Page and Content Requirements

### Global requirements

- Mobile-first layout and responsive typography.
- High contrast text/background combinations.
- Minimal, safe aesthetic. Purple accent is allowed.
- Static-first rendering.
- EN default language with complete ES coverage.
- Visible language toggle on all pages.
- Footer on all pages includes:
  - official links
  - `Not financial advice` disclaimer
  - anti-scam reminder: `Admins never DM first`

### Official Links (single source, reuse everywhere)

- X: `https://x.com/FamBIT_Sol`
- Telegram: `https://t.me/FamBIT_Official`
- Pump.fun: `https://pump.fun/coin/Fu8KCiAYUFN47xpRjbTPXPLHPgYRH7Xdbwc748GRpump`

### `/` Home

- Core positioning copy: growth mindset + safe crypto home + family helps family.
- Short mission statement with non-hype tone.
- Prominent block linking to `/safety` as verification source of truth.
- Soft CTA buttons only (e.g., `Read Safety`, `Join Community`) and no buy action.

### `/safety`

- This is the canonical anti-scam page.
- Include "Verified Official Links" section near top (prominent).
- Required anti-scam copy:
  - `Verify links here before acting`
  - `Admins never DM first`
  - `Never share your seed phrase or private keys`
  - `Not financial advice`
- Include incident guidance: if unsure, stop and verify in public channels.

### `/community`

- Culture: calm, respectful, growth-minded, family-first.
- Rules section that bans hype/manipulation language and scam behavior.
- Contribution section: how users help with moderation, education, and onboarding.
- No speculative calls, no promises of returns.

### `/roadmap`

- Public-safe 30-90 day roadmap only.
- Use non-binding language: intentions, milestones, checkpoints.
- Explicitly avoid hard commitments to financial outcomes or guaranteed donations.
- Include simple phase split:
  - 0-30 days: trust/safety baseline
  - 30-60 days: community rituals and moderation quality
  - 60-90 days: optional community-led initiatives (aspirational wording)

## 6) Copy Rules (derived from source docs)

- Prioritize trust, safety, anti-scam clarity, and community retention.
- Prefer educational and verification-oriented language over speculation.
- Keep founders anonymous; do not mention names or identities.
- Never include target prices, growth multipliers, "to the moon", or similar hype terms.
- Use transparent, calm, non-urgent wording.
- Any mention of real-world support must be optional/aspirational, never guaranteed.

## 7) Accessibility and Security Baseline

- Semantic headings and landmarks.
- Keyboard-focusable navigation and toggle controls.
- Alt text for meaningful visuals.
- Color contrast meets WCAG AA basics.
- No risky third-party scripts (trackers, injected widgets, unknown CDNs).
- No forms collecting sensitive data.

## 8) Build and Deploy Contract (Cloudflare Pages)

### Build

- Static build command: `npm run build`
- Output directory: `dist`
- Build must succeed without secrets.

### Cloudflare Pages setup

1. Create Pages project from repository.
2. Framework preset: Astro (or `None` with custom build commands if needed).
3. Build command: `npm run build`
4. Build output directory: `dist`
5. Deploy production branch.

### DNS mapping for `fambit.xyz` (apex + www)

1. In Cloudflare Pages custom domains, add:
   - `fambit.xyz`
   - `www.fambit.xyz`
2. Ensure DNS records are proxied and attached to Pages target as instructed by Cloudflare.
3. Set canonical host policy (either apex -> www or www -> apex) and enforce redirect.
4. Confirm HTTPS active for both hosts.

## 9) Mandatory Delivery Artifacts from Implementation Agent

- Source code for 4 pages + shared components.
- EN and ES content files with complete field parity.
- Build log showing successful static export.
- Lighthouse screenshots or report summary (mobile + desktop best effort).
- Final link map demonstrating official links on `/safety` and footer.
