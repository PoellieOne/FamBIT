# TB-08 Lighthouse Summary

Date: 2026-03-02

Method:

- Built site served locally from `dist`
- Categories: performance, accessibility, best-practices, seo
- Targets:
  - `http://127.0.0.1:4173/`
  - `http://127.0.0.1:4173/es/`

Reports:

- `docs/reports/lighthouse-tb08-home-en.json`
- `docs/reports/lighthouse-tb08-home-es.json`

## Results

| Route | Performance | Accessibility | Best Practices | SEO | LCP |
|---|---:|---:|---:|---:|---:|
| `/` | 99 | 100 | 100 | 92 | 2103 ms |
| `/es/` | 99 | 100 | 100 | 92 | 2102 ms |

Verdict: no major regressions after visual/image integration.
