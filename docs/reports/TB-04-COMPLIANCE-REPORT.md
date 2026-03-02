# TB-04 Compliance Report (Fail-Closed)

Date: 2026-03-02  
Working directory: `/home/ralph/PoellieOne/FamBIT/fambit-site-v1`

## Checks Run

1. `npm run check:i18n && npm run build`
2. `rg -n -i "wallet connect|connect wallet|web3modal|wagmi|rainbowkit|phantom|metamask" src dist`
3. `rg -n -i "buy now|buy button|buy token|swap now|purchase" src dist`
4. `rg -n -i "price target|price prediction|roi|100x|to the moon|guaranteed returns" src/content src/pages dist`
5. `rg -n -i "ralph|founder|ceo|doxx|identity" src/content src/pages dist`
6. `rg -n -i "we guarantee|guaranteed (returns|roi|funding|donation)|will fund|promise to fund|hard commitment" src/content src/pages dist`
7. `rg -n -i "<script[^>]+src=\"https?://" src dist`
8. `rg -n "Admins never DM first|Verify links here before acting|Never share your seed phrase or private keys|Not financial advice" src/content/en/safety.json dist/safety/index.html`
9. `rg -n "Los admins nunca envian DM primero|Verifica los enlaces aqui antes de actuar|Nunca compartas tu frase semilla ni claves privadas|No es asesoramiento financiero" src/content/es/safety.json dist/es/safety/index.html`
10. `rg -o --count-matches "https://x.com/FamBIT_Sol|https://t.me/FamBIT_Official|https://pump.fun/coin/Fu8KCiAYUFN47xpRjbTPXPLHPgYRH7Xdbwc748GRpump" dist/safety/index.html dist/es/safety/index.html`

## Results (Pass/Fail)

| Check | Result | Evidence Snippet |
|---|---|---|
| Build + static output | PASS | `Parity check passed for 5 locale file pairs.` and `[build] output: "static"` and `[build] 8 page(s) built` |
| No wallet connect UI/components | PASS | Command #2 returned no matches |
| No buy buttons/flows | PASS | Command #3 returned no matches |
| No price targets/predictions/ROI hype | PASS | Command #4 returned no matches |
| No founder names/identity disclosure | PASS | Command #5 returned no matches |
| No hard funding promise language | PASS | Command #6 returned no matches |
| Anti-scam statements present and accurate | PASS | `src/content/en/safety.json:9: "Verify links here before acting."`, `:10: "Admins never DM first."`, `:11: "Never share your seed phrase or private keys."`, `:12: "Not financial advice"`; ES equivalents present in `src/content/es/safety.json:9-12` and `dist/es/safety/index.html` |
| No risky third-party script embeds | PASS | Command #7 returned no matches for external script URLs in `src` and `dist` |
| Official links exact + duplicated where required (`/safety` + footer) | PASS | `dist/safety/index.html:6` and `dist/es/safety/index.html:6` (3 links in page block + 3 links in footer) |

## Hardening Actions Applied During TB-04

- Removed duplicated trust panels on `/safety` routes by adding `includeGlobalTrustPanels={false}` in `src/pages/safety.astro` and `src/pages/es/safety.astro`.
- Kept required duplication of official links in `/safety` and footer.
- Added footer anti-scam reminder in both locales (`Admins never DM first` / `Los admins nunca envian DM primero`).

## Remediation Actions If Failed

- None required. All checks passed in this run.

## Final Compliance Decision

**PASS** (fail-closed criteria satisfied; no unresolved compliance issues detected).
