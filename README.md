# CreatorToolkit USA — High-Converting Landing Page for Adsterra Traffic

A production-ready, performance-optimized, conversion-rate-engineered landing page built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed specifically for United States creators, media managers, and paid traffic from **Adsterra** advertising campaigns, ready for one-click deployment on **Vercel**.

---

## 🚀 Key Features & Highlights

- **Direct-Response Copywriting**: Clear, benefits-driven American English messaging tailored to creators, video editors, and digital theme-page curators.
- **Strict Compliance & Trust**: Honest, factual presentation. No fake countdown timers, no artificial stock limits, no fabricated reviews, and no deceptive alert dialogs. Compliant with ad platform standards.
- **UTM Attribution Engine**: Automatically captures `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `ad_id`, and `placement_id` from Adsterra queries and propagates them cleanly to checkout URLs.
- **Privacy-Conscious Event Tracking**: Dispatches structured custom events (`landing_page_view`, `hero_cta_click`, `product_details_view`, `checkout_click`, `faq_expand`) with optional GA4 and Plausible support.
- **Mobile-First Responsive Design**: Tested across mobile viewports (320px–430px) and wide desktop screens (1280px+) with an accessible mobile navigation drawer and accessible lightboxes.
- **Full Legal Suite**: Complete compliance pages included at `/terms-of-service`, `/privacy-policy`, `/refund-policy`, `/license`, and `/contact`.
- **Dynamic OpenGraph & SEO**: Built-in Open Graph image generation via `next/og`, dynamic favicon, sitemap (`/sitemap.xml`), robots (`/robots.txt`), and factual JSON-LD Product schema.

---

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── contact/page.tsx         # Customer Support Desk
│   │   ├── license/page.tsx         # Usage Rights & License
│   │   ├── privacy-policy/page.tsx  # Privacy Policy
│   │   ├── refund-policy/page.tsx   # Digital Refund Terms
│   │   ├── terms-of-service/page.tsx# Terms of Service
│   │   ├── globals.css              # Custom styling & glass effects
│   │   ├── icon.tsx                 # Dynamic Next.js Favicon generator
│   │   ├── layout.tsx               # Root Layout & Metadata
│   │   ├── opengraph-image.tsx      # Dynamic 1200x630 OG Banner
│   │   ├── page.tsx                 # Main Conversion Landing Page
│   │   ├── robots.ts                # Auto-generated robots.txt
│   │   └── sitemap.ts               # Auto-generated sitemap.xml
│   ├── components/
│   │   ├── AnalyticsProvider.tsx    # Client-side UTM capture & analytics
│   │   ├── AnnouncementBar.tsx      # Configurable top notification bar
│   │   ├── BenefitsSection.tsx      # 4 core creator workflow benefits
│   │   ├── BundleGrid.tsx           # Category breakdown & specifications
│   │   ├── FAQAccordion.tsx         # 7 required questions & accessible accordion
│   │   ├── FinalCTA.tsx             # Closing high-converting offer block
│   │   ├── Footer.tsx               # Compliance links, disclaimer, copyright
│   │   ├── Header.tsx               # Sticky desktop nav & mobile drawer
│   │   ├── HeroSection.tsx          # First viewport headline, mockup & CTA
│   │   ├── HowItWorks.tsx           # 3-step transparent purchase & access guide
│   │   ├── OfferSection.tsx         # Pricing, verified features & checkout button
│   │   └── PreviewGallery.tsx       # Interactive click-to-enlarge sample lightbox
│   ├── config/
│   │   └── siteConfig.ts            # Centralized configuration (pricing, copy, FAQ)
│   └── lib/
│       └── tracking.ts              # UTM parsing & event dispatching helpers
├── .env.example                     # Environment variables template
├── next.config.ts                   # Next.js production configuration
├── tailwind.config.ts               # Dark navy / slate color palette
└── package.json                     # Scripts & dependencies
```

---

## ⚙️ Configuration

All copy, product pricing, checkout links, and analytics settings can be customized in a single file:
👉 **`src/config/siteConfig.ts`**

### Environment Variables (`.env.example` / `.env.local`)

| Variable | Description | Default |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | Production domain URL for canonical & OG links | `https://creator-bundles.vercel.app` |
| `NEXT_PUBLIC_PRODUCT_PRICE_USD` | Verified price displayed on offer cards | `$27` |
| `NEXT_PUBLIC_ORIGINAL_PRICE_USD` | Optional verified original price | *(Empty)* |
| `NEXT_PUBLIC_CHECKOUT_URL` | Genuine checkout provider destination | `https://checkout.example.com/...` |
| `NEXT_PUBLIC_SUPPORT_EMAIL` | Customer support contact address | `support@example.com` |
| `NEXT_PUBLIC_ANALYTICS_ENABLED` | Toggle client analytics dispatching | `false` |
| `NEXT_PUBLIC_ANALYTICS_PROVIDER`| Provider integration (`custom`, `ga4`, `plausible`)| `custom` |
| `NEXT_PUBLIC_ANALYTICS_ID` | Tracking ID or Measurement ID | *(Empty)* |

---

## 🛠️ Local Development & Build Commands

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Run code quality & lint checks**:
   ```bash
   npx eslint .
   ```

4. **Build production bundle**:
   ```bash
   npm run build
   ```

5. **Start production server locally**:
   ```bash
   npm run start
   ```

---

## 🚢 Deploying to Vercel

1. Push your repository to **GitHub**, **GitLab**, or **Bitbucket**.
2. Log in to [Vercel](https://vercel.com) and click **"Add New..." > "Project"**.
3. Import this repository.
4. Framework preset will automatically detect **Next.js**.
5. Under **Environment Variables**, add:
   - `NEXT_PUBLIC_SITE_URL` = `https://your-custom-domain.com`
   - `NEXT_PUBLIC_PRODUCT_PRICE_USD` = `$27`
   - `NEXT_PUBLIC_CHECKOUT_URL` = `https://your-actual-checkout-url.com`
   - `NEXT_PUBLIC_SUPPORT_EMAIL` = `support@yourdomain.com`
6. Click **Deploy**. Vercel will build and serve the optimized static site globally across its edge network.

---

## 📊 Adsterra Campaign & UTM Setup

When setting up your Adsterra native, popunder, or banner campaigns, direct traffic to:

```text
https://your-domain.vercel.app/?utm_source=adsterra&utm_medium=cpc&utm_campaign=us_creators_130bundle&utm_content=banner_variant_a
```

When a visitor clicks **"Continue to Secure Checkout"**, the application automatically preserves all UTM query parameters, attaching them to your genuine checkout destination:

```text
https://checkout.example.com/bundles/130-creator-vault?utm_source=adsterra&utm_medium=cpc&utm_campaign=us_creators_130bundle&utm_content=banner_variant_a
```

This ensures full end-to-end conversion attribution without lost tracking data.
