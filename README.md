# CreatorPulse Journal — In-Depth Creator Asset Review & Benchmark

An authoritative, high-converting **editorial review & publication layout** built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. Specifically engineered for high trust, direct-response performance, and paid traffic from **Adsterra** campaigns targeting US creators and video editors. Ready for 1-click deployment on **Vercel**.

---

## 📈 Active Adsterra Ad Placements (7 Ad Units Configured)

All 7 Adsterra ad formats for domain `adstera-web.vercel.app` are integrated into natural, high-performance locations:

| # | Ad Format | Unit Name / Key | Location in Application | Implementation Method |
|---|---|---|---|---|
| 1 | **Popunder** | `Popunder_1` (`c9322222af66563fd448881c28422140`) | Global / All Pages | Injected in `src/app/layout.tsx` via `next/script` |
| 2 | **Social Bar** | `SocialBar_1` (`236d24a23f484bacd2735e00256ad491`) | Global / All Pages | Injected in `src/app/layout.tsx` via `next/script` |
| 3 | **Native Banner** | `NativeBanner_1` (`container-cbbcee4cde1f78b488df89b32eaea9de`) | Mid-Article (Post-Chapter 4) | Embedded React component with dynamic `invoke.js` |
| 4 | **Banner 468x60** | `468x60_1` (`2a4cb2e5acba41d06bcc3ae6931ea0ab`) | Article Header & Mid-Article (Desktop) | Isolated `srcDoc` iframe container |
| 5 | **Banner 160x300** | `160x300_1` (`94ad7437bcdd94063f1fc973e11d860a`) | Editorial Sidebar Skyscraper (Desktop) | Isolated `srcDoc` iframe container |
| 6 | **Banner 320x50** | `320x50_1` (`ddf7379eafcdc549df82b0bd061ffb97`) | Article Header & Mid-Article (Mobile) | Responsive `sm:hidden` isolated `srcDoc` iframe |
| 7 | **Smartlink** | `Smartlink_1` (`b95f0c17ee20d36b27f7cc93da9148e4`) | In-Article Bonus Card & Sidebar Offer Card | High-converting partner deal callouts |

---

## 📰 Publication Concept & Review Layout

- **Publication Masthead**: *CreatorPulse Journal* (Independent Creator Economy & Digital Media Insights).
- **Review Article**: *"The 130+ Creator Toolkit Review: Can Pre-Curated Video Bundles Save You 20+ Hours a Week?"*
- **Author Byline & Fact-Checking**: Authored by *Sarah Jenkins (Senior Creator Economy Strategist)*, fact-checked by *Marcus Vance (Video Production Lead)*.
- **Executive Verdict Scorecard**: High-trust summary callout card with a 4.8 / 5.0 score, verified specs, and official access link.
- **In-Depth Chapters**:
  1. The Short-Form Video Bottleneck (Why creators burn out sourcing 9:16 footage).
  2. Inventory Breakdown (Detailed look into the 130+ folders and 12.4 GB repository).
  3. Hands-On Quality Inspection (Embedded interactive sample lightbox).
  4. Cost & Efficiency Benchmark (Table comparing DIY filming vs $40-$80/mo stock vs $27 one-time).
  5. Pros & Cons (Balanced assessment of strengths and who this is not designed for).
  6. Software Compatibility & 3-Step Cloud Fulfillment.
  7. Licensing & Commercial Rights Explanation.
  8. Frequently Asked Questions (7 essential buyer questions answered).
  9. Final Scorecard & Official Access Link.
- **Sticky Editorial Sidebar**: Quick Jump Table of Contents, Product Specs Card, Reviewer Bio, 160x300 Banner, and Smartlink Partner Deal.

---

## 🎯 Adsterra Traffic & Attribution

When driving Adsterra native ads, popunder, or banner traffic, direct users with your standard UTM parameters:

```text
https://adstera-web.vercel.app/?utm_source=adsterra&utm_medium=cpc&utm_campaign=us_creators_130bundle&utm_content=article_v1
```

1. The page automatically extracts and caches all UTM tags in `sessionStorage`.
2. Any click on the in-article recommendation boxes, sidebar links, or final scorecard passes the UTM tags directly to your configured checkout URL (`NEXT_PUBLIC_CHECKOUT_URL`).
3. Dispatches structured analytical events (`landing_page_view`, `hero_cta_click`, `product_details_view`, `checkout_click`, `faq_expand`).

---

## 🛠️ Development & Build Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Run linter (passes with 0 errors, 0 warnings)
npx eslint .

# Build for production
npm run build

# Run production server
npm run start
```

---

## 🚢 Deploying to Vercel

1. Push your changes to your GitHub repository:
   ```bash
   git push origin main
   ```
2. In [Vercel](https://vercel.com), the connected repository will automatically trigger a new deployment.
3. Configure your Environment Variables in Project Settings:
   - `NEXT_PUBLIC_SITE_URL`: `https://adstera-web.vercel.app`
   - `NEXT_PUBLIC_PRODUCT_PRICE_USD`: `$27`
   - `NEXT_PUBLIC_CHECKOUT_URL`: Your actual payment checkout link.
   - `NEXT_PUBLIC_SUPPORT_EMAIL`: Your support contact email.
