# TB-07 Asset Inventory

## Source to target mapping

| Source path | Deployed path | Purpose | Routes used |
|---|---|---|---|
| `/home/ralph/PoellieOne/FamBIT/images/StockCake-Unity_Through_Diversity-3355074-standard.jpg` | `public/images/home-main-banner.jpg` | Mandatory home main banner | `/`, `/es/` |
| `/home/ralph/PoellieOne/FamBIT/fambit-site-v1/images/StockCake-Community_Garden_Circle-1935195-standard.jpg` | `public/images/community-garden-circle.jpg` | Community culture visual (togetherness) | `/community`, `/es/community` |
| `/home/ralph/PoellieOne/FamBIT/fambit-site-v1/images/StockCake-Kids_Gardening_Together-340612-standard.jpg` | `public/images/community-kids-garden.jpg` | Community learning visual (participation/care) | `/community`, `/es/community` |
| `/home/ralph/PoellieOne/FamBIT/fambit-site-v1/images/StockCake-Sunset_Silhouette_Gathering-266794-standard.jpg` | `public/images/roadmap-community-sunset.jpg` | Roadmap supporting visual (long-term shared direction) | `/roadmap`, `/es/roadmap` |

## Runtime safety checks

- No remote hotlinked assets used for these images.
- No `.xcf` files are present in `public` or `dist` runtime paths.
