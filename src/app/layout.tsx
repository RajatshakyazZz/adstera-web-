import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/config/siteConfig";

export const viewport: Viewport = {
  themeColor: "#080C15",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.product.name} | Premium Creator Resource Toolkit`,
    template: `%s | ${siteConfig.brand.name}`,
  },
  description: siteConfig.seo.metaDescription,
  keywords: [
    "digital content bundles",
    "creator toolkit",
    "reels templates",
    "social media templates",
    "short form video bundle",
    "digital creator resources",
    "content creator assets",
  ],
  authors: [{ name: siteConfig.brand.name }],
  creator: siteConfig.brand.name,
  publisher: siteConfig.brand.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.siteUrl,
    title: `${siteConfig.product.name} — Curated Creator Resources`,
    description: siteConfig.seo.metaDescription,
    siteName: siteConfig.brand.name,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteConfig.product.name} Digital Bundle Mockup`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.product.name,
    description: siteConfig.seo.metaDescription,
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: siteConfig.siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/icon" sizes="any" />
      </head>
      <body className="min-h-screen bg-[#080C15] text-[#F8FAFC] antialiased flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
