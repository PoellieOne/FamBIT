# TB-08 Asset Inventory

## Source -> deployed mapping

| Source | Deployed | Purpose | Used on |
|---|---|---|---|
| `/home/ralph/PoellieOne/FamBIT/images/StockCake-Unity_Through_Diversity-3355074-standard.jpg` | `public/images/home-main-banner.jpg` | Mandatory home main banner | `/`, `/es/` |
| `/home/ralph/PoellieOne/FamBIT/fambit-site-v1/images/StockCake-Community_Garden_Circle-1935195-standard.jpg` | `public/images/community-garden-circle.jpg` | Community togetherness visual | `/community`, `/es/community` |
| `/home/ralph/PoellieOne/FamBIT/fambit-site-v1/images/StockCake-Kids_Gardening_Together-340612-standard.jpg` | `public/images/community-kids-garden.jpg` | Community participation/learning visual | `/community`, `/es/community` |
| `/home/ralph/PoellieOne/FamBIT/fambit-site-v1/images/StockCake-Sunset_Silhouette_Gathering-266794-standard.jpg` | `public/images/roadmap-community-sunset.jpg` | Roadmap long-term direction visual | `/roadmap`, `/es/roadmap` |

## Runtime safety

- No `.xcf` in runtime delivery path (`public`, `dist`).
- No remote hotlinked image assets.
- Built image paths resolve (no broken references).
