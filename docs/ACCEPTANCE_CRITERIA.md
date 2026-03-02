# Acceptance Criteria (PASS/FAIL, Fail-Closed)

This contract is fail-closed. Missing any mandatory item means **FAIL**.

## PASS Conditions (all required)

1. `/safety` page exists and is accessible in production build.
2. Official links are present and identical across `/safety` and footer:
   - `https://x.com/FamBIT_Sol`
   - `https://t.me/FamBIT_Official`
   - `https://pump.fun/coin/Fu8KCiAYUFN47xpRjbTPXPLHPgYRH7Xdbwc748GRpump`
3. Language toggle EN/ES is implemented and functional.
4. EN is default language; ES has complete content coverage.
5. Disclaimers include `Not financial advice` on `/safety` and footer.
6. Founders remain anonymous (no names/identity disclosures).
7. Site builds successfully for Cloudflare Pages static deployment.
8. No wallet connect, no buy actions, no price targets/predictions anywhere.

## Automatic FAIL Triggers

- Missing `/safety` page.
- Missing or inconsistent official links.
- Missing or broken EN/ES language toggle.
- Missing `Not financial advice` on `/safety` or footer.
- Any founder identity disclosure.
- Build fails or non-static deployment requirement introduced without approval.
- Presence of wallet connect UI, buy buttons, or price-target language.
- Any copy that implies financial advice or guaranteed returns.
- Any hard promise that real-world initiatives will be funded.

## Verification Evidence Required

- Build log proving successful static output.
- Screenshot or text evidence of `/safety` verified links section.
- Screenshot or text evidence of footer links and disclaimer.
- EN and ES screenshots (or equivalent evidence) per page.
- Grep/search evidence for prohibited terms/features returning no violations.

## Decision Rule

- **PASS** only if every PASS condition is met and no automatic FAIL trigger is detected.
- Otherwise: **FAIL** with explicit defect list.
