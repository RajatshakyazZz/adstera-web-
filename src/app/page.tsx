import React from "react";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { BundleGrid } from "@/components/BundleGrid";
import { HowItWorks } from "@/components/HowItWorks";
import { OfferSection } from "@/components/OfferSection";
import { PreviewGallery } from "@/components/PreviewGallery";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { AnalyticsProvider } from "@/components/AnalyticsProvider";
import { siteConfig } from "@/config/siteConfig";

export default function HomePage() {
  // Factual JSON-LD Schema (No fabricated ratings or fake review schema)
  const productPriceNumber = siteConfig.product.priceUsd.replace(/[^0-9.]/g, "");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: siteConfig.product.name,
    description: siteConfig.product.shortDescription,
    category: siteConfig.product.category,
    image: `${siteConfig.siteUrl}/images/og-preview.png`,
    brand: {
      "@type": "Brand",
      name: siteConfig.brand.name,
    },
    offers: {
      "@type": "Offer",
      url: `${siteConfig.siteUrl}/#offer`,
      priceCurrency: "USD",
      price: productPriceNumber || "27.00",
      priceValidUntil: "2027-12-31",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: siteConfig.brand.name,
      },
    },
  };

  return (
    <AnalyticsProvider>
      {/* Factual Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex flex-col min-h-screen">
        {/* Section A: Announcement Bar */}
        <AnnouncementBar />

        {/* Section B: Sticky Header & Navigation */}
        <Header />

        <main className="flex-grow">
          {/* Section C: Hero Section */}
          <HeroSection />

          {/* Section D: Benefits */}
          <BenefitsSection />

          {/* Section E: What's Included */}
          <BundleGrid />

          {/* Section F: How It Works */}
          <HowItWorks />

          {/* Section G: Product Offer (Main Conversion Point) */}
          <OfferSection />

          {/* Section H: Preview Gallery */}
          <PreviewGallery />

          {/* Section I: FAQ Accordion */}
          <FAQAccordion />

          {/* Section J: Final CTA */}
          <FinalCTA />
        </main>

        {/* Section K: Footer & Disclaimers */}
        <Footer />
      </div>
    </AnalyticsProvider>
  );
}
