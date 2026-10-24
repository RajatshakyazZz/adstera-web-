import React from "react";
import { EditorialHeader } from "@/components/EditorialHeader";
import { ArticleHero } from "@/components/ArticleHero";
import { ArticleContent } from "@/components/ArticleContent";
import { EditorialSidebar } from "@/components/EditorialSidebar";
import { EditorialFooter } from "@/components/EditorialFooter";
import { AnalyticsProvider } from "@/components/AnalyticsProvider";
import { siteConfig } from "@/config/siteConfig";

export const metadata = {
  title: `${siteConfig.article.headline} | ${siteConfig.publication.name}`,
  description: siteConfig.article.subtitle,
  openGraph: {
    title: siteConfig.article.headline,
    description: siteConfig.article.subtitle,
    type: "article",
    url: siteConfig.siteUrl,
    publishedTime: "2026-10-15T09:00:00.000Z",
    modifiedTime: "2026-10-24T12:00:00.000Z",
    authors: [siteConfig.article.author.name],
  },
};

export default function HomePage() {
  const productPriceNumber = siteConfig.product.priceUsd.replace(/[^0-9.]/g, "");

  // Factual Review & Article JSON-LD Schema
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Review",
    headline: siteConfig.article.headline,
    description: siteConfig.article.subtitle,
    image: `${siteConfig.siteUrl}/images/og-preview.png`,
    datePublished: "2026-10-15",
    dateModified: "2026-10-24",
    author: {
      "@type": "Person",
      name: siteConfig.article.author.name,
      jobTitle: siteConfig.article.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.publication.name,
      url: siteConfig.siteUrl,
    },
    itemReviewed: {
      "@type": "Product",
      name: siteConfig.product.name,
      description: siteConfig.product.shortDescription,
      category: siteConfig.product.category,
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: productPriceNumber || "27.00",
        availability: "https://schema.org/InStock",
      },
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "4.8",
      bestRating: "5",
    },
  };

  return (
    <AnalyticsProvider>
      {/* Structured Review Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className="flex flex-col min-h-screen bg-[#080C15] text-[#F8FAFC]">
        {/* Editorial Publication Header */}
        <EditorialHeader />

        {/* Article Headline & Executive Summary */}
        <ArticleHero />

        {/* Article Body & Editorial Sidebar Container */}
        <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Full Editorial Review */}
            <div className="lg:col-span-8">
              <ArticleContent />
            </div>

            {/* Right Column: Sticky Editorial Sidebar */}
            <div className="lg:col-span-4 hidden lg:block">
              <EditorialSidebar />
            </div>
          </div>
        </main>

        {/* Publication Footer */}
        <EditorialFooter />
      </div>
    </AnalyticsProvider>
  );
}
