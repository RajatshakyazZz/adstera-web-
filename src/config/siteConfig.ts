export interface IncludedCategory {
  id: string;
  title: string;
  description: string;
  count: string;
  tag: string;
  highlights: string[];
}

export interface PreviewItem {
  id: string;
  title: string;
  category: string;
  aspectRatio: "portrait" | "landscape" | "square";
  description: string;
  badge: string;
  accentColor: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const siteConfig = {
  publication: {
    name: "CreatorPulse Journal",
    tagline: "Independent Tech & Creator Economy Insights",
    issueDate: "October 2026 Edition",
    category: "Software & Digital Asset Reviews",
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "Creator Resources", href: "#" },
      { name: "Asset Reviews", href: "#" },
    ],
  },

  brand: {
    name: "CreatorPulse Journal",
    shortName: "CreatorPulse",
    domain: process.env.NEXT_PUBLIC_SITE_URL || "https://creator-bundles.vercel.app",
    supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "support@example.com",
    copyrightYear: new Date().getFullYear(),
  },

  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://creator-bundles.vercel.app",

  announcement: {
    enabled: true,
    text: "Independent Editorial Benchmark • Verified Creator Assets & Video Library",
    linkText: "Read Review",
    linkHref: "#verdict",
  },

  hero: {
    badge: "THE CREATOR'S DIGITAL TOOLKIT",
    headline: "Spend Less Time Searching. Get More From Your Content.",
    supportingText:
      "Explore a curated library of 130+ ready-to-use digital content bundles and short-form video assets engineered to speed up your social media workflow.",
    primaryCtaText: "Explore the Bundles",
    secondaryCtaText: "See What's Included",
    trustMicrocopy:
      "Verified digital product • Instant email delivery upon checkout confirmation • No subscription required",
  },

  article: {
    tag: "HANDS-ON BENCHMARK & REVIEW",
    headline: "The 130+ Creator Toolkit Review: Can Pre-Curated Video Bundles Save You 20+ Hours a Week?",
    subtitle:
      "An in-depth editorial breakdown of the trending 130+ Digital Content & Reels Vault — file quality inspection, Canva integration test, niche applicability, and whether it justifies the $27 one-time price tag.",
    author: {
      name: "Sarah Jenkins",
      role: "Senior Creator Economy Strategist",
      avatarInitials: "SJ",
      bio: "Reviewing creator software, editing tools, and short-form video systems since 2019.",
    },
    factCheckedBy: "Marcus Vance, Video Production Lead",
    readTime: "7 min read",
    updatedDate: "Updated October 2026",
    editorialScore: "4.8 / 5.0",
    editorialVerdict:
      "For solo creators, faceless theme-page curators, and social media managers looking to sidestep $40–$80/month stock footage subscriptions, this 130+ bundle delivers remarkable organizational value and pristine 9:16 vertical video assets ready for immediate posting.",
  },

  ads: {
    enabled: true,
    popunderScript:
      "https://pl32003108.profitableratecpmnetwork.com/c9/32/22/c9322222af66563fd448881c28422140.js",
    socialBarScript:
      "https://pl32003109.profitableratecpmnetwork.com/23/6d/24/236d24a23f484bacd2735e00256ad491.js",
    nativeBanner: {
      containerId: "container-cbbcee4cde1f78b488df89b32eaea9de",
      scriptSrc:
        "https://pl32003110.profitableratecpmnetwork.com/cbbcee4cde1f78b488df89b32eaea9de/invoke.js",
    },
    banner468x60: {
      key: "2a4cb2e5acba41d06bcc3ae6931ea0ab",
      width: 468,
      height: 60,
    },
    banner160x300: {
      key: "94ad7437bcdd94063f1fc973e11d860a",
      width: 160,
      height: 300,
    },
    banner320x50: {
      key: "ddf7379eafcdc549df82b0bd061ffb97",
      width: 320,
      height: 50,
    },
    smartlinkUrl:
      "https://www.profitableratecpmnetwork.com/hiix7yxws?key=b95f0c17ee20d36b27f7cc93da9148e4",
  },

  product: {
    id: "bundle-130-digital-content",
    name: "130+ Digital Content & Reels Bundles",
    category: "Curated Digital Asset Library",
    shortDescription:
      "A curated collection of ready-to-customize digital content templates, reels clips, hooks, and social graphics organized for fast production.",
    fullDescription:
      "Engineered specifically for US content creators, digital marketers, theme-page curators, and social media managers. Cut down hours of research and editing with pre-organized content folders ready for Canva, CapCut, Premiere, and your favorite editing tools.",
    
    // Configurable Pricing
    priceUsd: process.env.NEXT_PUBLIC_PRODUCT_PRICE_USD || "$27",
    originalPriceUsd: process.env.NEXT_PUBLIC_ORIGINAL_PRICE_USD || "",
    priceFrequency: "one-time payment",
    
    // Checkout Destination
    checkoutUrl:
      process.env.NEXT_PUBLIC_CHECKOUT_URL ||
      "https://checkout.example.com/bundles/130-creator-vault",
    
    deliveryMethod:
      "Direct secure download link delivered to your email inbox immediately upon checkout completion.",
    deliveryTimeline: "Instant digital access upon payment confirmation",
    format: "MP4 Video Clips, Canva Editable Templates, PNG Assets & PDF Guides",
    fileSizeEstimate: "Approx. 12.4 GB organized across cloud download folders",
    license: "Personal & Organic Social Media Usage Rights (Commercial licensing terms detailed at checkout)",
    refundPolicyUrl: "/refund-policy",
    termsUrl: "/terms-of-service",
    privacyUrl: "/privacy-policy",
  },

  benefits: [
    {
      title: "Eliminates Monthly Stock Fees",
      description:
        "Bypasses recurring $30–$80/month subscriptions from traditional stock agencies with a clean single purchase.",
      icon: "DollarSign",
      badge: "Cost Savings",
    },
    {
      title: "Ready-To-Edit 9:16 Formats",
      description:
        "Specifically optimized for mobile-first algorithms across Instagram Reels, TikTok, and YouTube Shorts without awkward letterboxing.",
      icon: "Smartphone",
      badge: "Mobile-First",
    },
    {
      title: "Clean, Watermark-Free Footage",
      description:
        "Raw aesthetic video footage with neutral color grading, leaving plenty of headroom for text overlays and audio transitions.",
      icon: "Film",
      badge: "Zero Watermarks",
    },
    {
      title: "Instant Cloud Drive Delivery",
      description:
        "Organized by aesthetic, topic, and template type in Google Drive folders for immediate desktop and mobile access.",
      icon: "Cloud",
      badge: "Fast Fulfillment",
    },
  ],

  includedCategories: [
    {
      id: "faceless-aesthetic",
      title: "Faceless Aesthetic & Lifestyle Video Vault",
      description:
        "High-definition 4K & 1080p atmospheric reels, luxury lifestyle scenes, cafe vibes, modern workspace b-roll, and serene travel shots.",
      count: "35 Bundles Included",
      tag: "Video Assets",
      highlights: [
        "9:16 Vertical HD & 4K Video clips",
        "Neutral aesthetic color grading",
        "Clean, text-free raw footage ready for text overlays",
      ],
    },
    {
      id: "business-motivation",
      title: "Business, Mindset & Motivation Packs",
      description:
        "Curated visuals tailored for entrepreneurial theme pages, finance commentary, tech creators, and productivity channels.",
      count: "25 Bundles Included",
      tag: "Niche Focus",
      highlights: [
        "Modern architecture and urban lifestyle",
        "Productivity desk setups & minimal workspaces",
        "High-impact hooks and caption templates",
      ],
    },
    {
      id: "canva-templates",
      title: "Editable Canva Social Media Layouts",
      description:
        "One-click editable templates for carousel posts, quote graphics, testimonial cards, and promotional story layouts.",
      count: "28 Bundles Included",
      tag: "Editable Templates",
      highlights: [
        "Fully editable with free or Pro Canva accounts",
        "Typography presets and clean grid systems",
        "Reusable color palettes and graphic elements",
      ],
    },
    {
      id: "hooks-captions",
      title: "Viral Hooks & High-Conversion Caption Library",
      description:
        "Structured written prompts, opening lines, storytelling frameworks, and call-to-action scripts tailored for American audiences.",
      count: "22 Resource Packs",
      tag: "Copywriting Guides",
      highlights: [
        "Tested 3-second hook formulas",
        "Niche-specific retention frameworks",
        "Action-oriented CTA prompt sheets",
      ],
    },
    {
      id: "wellness-fitness",
      title: "Wellness, Fitness & Daily Routine Visuals",
      description:
        "Calm mornings, healthy recipes, gym workouts, meditation setups, and holistic lifestyle clips.",
      count: "12 Bundles Included",
      tag: "Health & Lifestyle",
      highlights: [
        "Fresh, vibrant 9:16 video clips",
        "Smooth camera pans and natural lighting",
        "Perfect for fitness coaches and wellness curators",
      ],
    },
    {
      id: "audio-guides",
      title: "Trending Audio Strategy & Sound Checklists",
      description:
        "Reference guides on how to pair audio rhythms, transition effects, and viral audio strategies for maximum engagement.",
      count: "8 Strategy Guides",
      tag: "Production Guides",
      highlights: [
        "Audio selection decision tree",
        "Editing pace and transition timing cheat-sheet",
        "Direct software walkthroughs (CapCut & Premiere)",
      ],
    },
  ],

  howItWorks: [
    {
      stepNumber: "01",
      title: "Review the Pack Inventory",
      description:
        "Check file specs, category lists, and format compatibility to ensure it matches your specific social media niche.",
    },
    {
      stepNumber: "02",
      title: "Access Through Verified Checkout",
      description:
        "Purchase securely through the verified SSL-encrypted checkout portal at the one-time $27 USD rate.",
    },
    {
      stepNumber: "03",
      title: "Download Directly from Cloud Drive",
      description:
        "Check your email inbox for your private access link to download folders individually or in bulk.",
    },
  ],

  previewGallery: [
    {
      id: "preview-1",
      title: "Minimalist Workspace & Tech B-Roll",
      category: "Faceless Aesthetic",
      aspectRatio: "portrait",
      description:
        "Crisp 9:16 studio lighting featuring desk setups, mechanical keyboards, and ambient desktop setups.",
      badge: "4K Vertical",
      accentColor: "#3B82F6",
    },
    {
      id: "preview-2",
      title: "Editorial Quote & Carousel Templates",
      category: "Canva Templates",
      aspectRatio: "square",
      description:
        "Modern serif and sans-serif typography pairing designed for high save-rate multi-slide carousels.",
      badge: "Canva Ready",
      accentColor: "#6366F1",
    },
    {
      id: "preview-3",
      title: "Urban Architecture & Luxury Motion",
      category: "Business & Mindset",
      aspectRatio: "portrait",
      description:
        "City skyline drone shots, glass skyscrapers, and luxury textures ready for mindset voiceovers.",
      badge: "Cinema Grade",
      accentColor: "#8B5CF6",
    },
    {
      id: "preview-4",
      title: "Morning Routine & Coffee Aesthetic",
      category: "Lifestyle Visuals",
      aspectRatio: "portrait",
      description:
        "Natural sunlight, pour-over coffee, journal writing, and warm interior lifestyle clips.",
      badge: "Neutral Palette",
      accentColor: "#10B981",
    },
    {
      id: "preview-5",
      title: "High-Retention Hook & Script Cards",
      category: "Copywriting Guides",
      aspectRatio: "square",
      description:
        "Categorized script templates with fill-in-the-blank prompt formats for Instagram and TikTok.",
      badge: "Script Deck",
      accentColor: "#EC4899",
    },
    {
      id: "preview-6",
      title: "Fitness & Wellness Movement Clips",
      category: "Health & Fitness",
      aspectRatio: "portrait",
      description:
        "Clean gym environments, outdoor trail running, and dynamic athletic movement captures.",
      badge: "Dynamic Motion",
      accentColor: "#F59E0B",
    },
  ],

  comparisonData: [
    {
      feature: "Monthly Cost",
      diy: "Free (High Time Cost)",
      stockSites: "$35 – $79 / month",
      bundle: "$27 (One-time, lifetime access)",
    },
    {
      feature: "Format Compatibility",
      diy: "Requires manual filming",
      stockSites: "Mostly 16:9 widescreen",
      bundle: "Native 9:16 Vertical Video (Reels/TikTok)",
    },
    {
      feature: "Canva Integration",
      diy: "Build from scratch",
      stockSites: "Rarely provided",
      bundle: "28+ Editable One-Click Templates",
    },
    {
      feature: "Hooks & Captions",
      diy: "Trial and error",
      stockSites: "Not included",
      bundle: "Included 3-Second Hook Library",
    },
    {
      feature: "Time to First Post",
      diy: "3 – 5 hours",
      stockSites: "1 – 2 hours",
      bundle: "Under 10 minutes",
    },
  ],

  relatedArticles: [
    {
      id: "article-1",
      title: "5 Algorithm Shifts Every Short-Form Creator Must Prepare for in 2026",
      category: "Platform Intelligence",
      readTime: "5 min read",
      date: "Oct 18, 2026",
    },
    {
      id: "article-2",
      title: "The Faceless Theme Page Blueprint: How Creators Build Organic Reach Without On-Camera Talent",
      category: "Strategy & Case Study",
      readTime: "8 min read",
      date: "Oct 12, 2026",
    },
    {
      id: "article-3",
      title: "CapCut vs Premiere Pro for Vertical Video: Editing Speed Benchmark",
      category: "Software Testing",
      readTime: "6 min read",
      date: "Oct 05, 2026",
    },
  ],

  faqList: [
    {
      question: "What is included in the bundle?",
      answer:
        "You receive immediate access to 130+ distinct digital resource packs. This includes over 2,500+ vertical video clips (9:16 format), hundreds of editable Canva post and carousel templates, categorized hook and script prompts, and digital production guides. All assets are organized into labeled cloud folders for effortless navigation.",
    },
    {
      question: "How do I access my purchase?",
      answer:
        "Immediately after completing secure checkout, you will receive an order confirmation email containing your direct download link. You can stream or download files individually or by folder using Google Drive or direct cloud storage links to keep on your local computer or phone.",
    },
    {
      question: "Is this a physical product or a digital product?",
      answer:
        "This is an entirely digital product. No physical items, thumb drives, or discs will be shipped. You receive instant electronic access to downloadable digital media and template files.",
    },
    {
      question: "What devices and software can I use to access it?",
      answer:
        "The video clips (MP4 format) work seamlessly on Mac, Windows, iPhone, iPad, and Android. You can edit them using any video editing tool (CapCut, Premiere Pro, Final Cut Pro, DaVinci Resolve, InShot, VN). The graphic templates are accessed via Canva and work with both free and Pro accounts directly in your web browser or mobile app.",
    },
    {
      question: "Are commercial or resale rights included?",
      answer:
        "The standard bundle purchase includes personal and organic commercial usage rights to create and publish content on your own social media channels, client accounts, and business pages. Master Resell Rights (MRR) or Private Label Rights (PLR) to resell the raw asset files as your own standalone bundle are NOT included unless an explicit commercial resale license option is chosen at checkout.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "Due to the immediate digital delivery and irrevocable access to downloadable video files and template links, purchases are generally final once the download links have been issued. However, if you experience technical issues accessing files or discover corrupted assets that our support team cannot resolve, please contact us within 14 days of purchase. Full terms are outlined in our Refund Policy.",
    },
    {
      question: "Who can I contact if I need help?",
      answer:
        "Our US-friendly support team is available via email. If you have questions regarding your download link, template access, or file formats, simply reach out to support@example.com (or via our Contact page) with your order ID, and we will assist you promptly.",
    },
  ],

  tracking: {
    enabled: process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === "true",
    provider: (process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER || "custom") as
      | "plausible"
      | "ga4"
      | "custom",
    id: process.env.NEXT_PUBLIC_ANALYTICS_ID || "",
    requireConsent: false,
    events: {
      landingPageView: "landing_page_view",
      heroCtaClick: "hero_cta_click",
      productDetailsView: "product_details_view",
      checkoutClick: "checkout_click",
      faqExpand: "faq_expand",
    },
  },

  seo: {
    metaDescription:
      "Independent editorial review & test of the 130+ Digital Content & Reels Bundle. In-depth analysis of vertical 9:16 video assets, Canva layouts, pricing, and workflow impact.",
    ogImage: "/images/og-preview.png",
  },
};
