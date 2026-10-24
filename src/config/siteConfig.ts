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
  brand: {
    name: "CreatorToolkit USA",
    shortName: "CreatorToolkit",
    domain: process.env.NEXT_PUBLIC_SITE_URL || "https://creator-bundles.vercel.app",
    supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "support@example.com",
    copyrightYear: new Date().getFullYear(),
  },

  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://creator-bundles.vercel.app",

  announcement: {
    enabled: true,
    text: "Discover digital resources made for modern US creators & digital media managers.",
    linkText: "View Bundles",
    linkHref: "#offer",
  },

  product: {
    id: "bundle-130-digital-content",
    name: "130+ Digital Content & Reels Bundles",
    category: "Downloadable Digital Content Resources",
    shortDescription:
      "A curated collection of ready-to-customize digital content templates, reels clips, hooks, and social graphics organized for fast production.",
    fullDescription:
      "Engineered specifically for US content creators, digital marketers, theme-page curators, and social media managers. Cut down hours of research and editing with pre-organized content folders ready for Canva, CapCut, Premiere, and your favorite editing tools.",
    
    // Configurable Pricing (Never fabricate fake original prices unless genuine)
    priceUsd: process.env.NEXT_PUBLIC_PRODUCT_PRICE_USD || "$27",
    originalPriceUsd: process.env.NEXT_PUBLIC_ORIGINAL_PRICE_USD || "", // Optional: left empty if no verified discount
    priceFrequency: "one-time payment",
    
    // Checkout Destination (Must be genuine HTTPS URL in production)
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

  benefits: [
    {
      title: "Convenient Access to Curated Resources",
      description:
        "Skip the endless stock search. Gain immediate access to categorized folders of video templates, visual assets, and content prompts.",
      icon: "FolderArchive",
      badge: "Fast Workflow",
    },
    {
      title: "Streamlined Content Discovery",
      description:
        "Quickly identify matching hooks, b-roll footage, and graphic styles matched to high-engagement social media niches.",
      icon: "Compass",
      badge: "High Relevance",
    },
    {
      title: "Organized Digital Toolkit",
      description:
        "All 130+ folders are neatly arranged by aesthetic, niche, and format so you spend minutes assembling posts instead of hours.",
      icon: "Layers",
      badge: "Structured",
    },
    {
      title: "Flexible Multi-Platform Exploration",
      description:
        "Optimized for 9:16 vertical video platforms including Instagram Reels, TikTok, YouTube Shorts, and Pinterest Idea Pins.",
      icon: "Smartphone",
      badge: "9:16 Ready",
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
        "9:16 Vertical HD Video clips",
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
      title: "Explore the Available Bundles",
      description:
        "Review the itemized bundle list, sample previews, file specifications, and format compatibility below to confirm it suits your niche.",
    },
    {
      stepNumber: "02",
      title: "Review Purchase Terms & Checkout",
      description:
        "Review the clear one-time purchase price, license terms, and delivery method before continuing to the secure checkout page.",
    },
    {
      stepNumber: "03",
      title: "Receive Instant Digital Delivery",
      description:
        "Upon payment confirmation, receive a secure cloud download link sent directly to your email address for lifetime file access.",
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
      "Access 130+ curated digital content bundles, 9:16 vertical video clips, editable Canva templates, and viral hooks for social media creators and digital managers.",
    ogImage: "/images/og-preview.png",
  },
};
