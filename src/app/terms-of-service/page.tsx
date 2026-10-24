import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const metadata = {
  title: "Terms of Service",
  description: `Terms and conditions governing the purchase and use of ${siteConfig.product.name}.`,
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-[#080C15] text-slate-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Main Offer
        </Link>

        <div className="border-b border-white/10 pb-6 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
            <Shield className="w-3.5 h-3.5" />
            Legal Agreement
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Terms of Service
          </h1>
          <p className="text-xs text-slate-400">
            Last Updated: October 2026 • Governed under applicable United States law
          </p>
        </div>

        <section className="space-y-4 text-sm leading-relaxed">
          <h2 className="text-lg font-bold text-white">1. Agreement to Terms</h2>
          <p>
            By accessing {siteConfig.brand.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) or purchasing the {siteConfig.product.name}, you agree to be bound by these Terms of Service. If you do not agree, please do not purchase or use our digital assets.
          </p>

          <h2 className="text-lg font-bold text-white">2. Description of Digital Products</h2>
          <p>
            We provide downloadable digital files including video clips (MP4), graphic templates (Canva layouts), copywriting prompt guides, and instructional materials. Because all products are entirely digital, no physical media is manufactured, shipped, or delivered.
          </p>

          <h2 className="text-lg font-bold text-white">3. Delivery and Access</h2>
          <p>
            Access is provided electronically via direct download links sent to the email address entered during checkout. You are responsible for ensuring that your email address is entered correctly and that your email client accepts emails from our domain.
          </p>

          <h2 className="text-lg font-bold text-white">4. Permitted Usage &amp; License</h2>
          <p>
            Unless an explicit commercial resale or Master Resell Rights (MRR) license is purchased and confirmed in writing, your purchase conveys a personal and organic business usage license. You may edit, modify, and publish the media on your personal or company social channels. You may NOT resell, redistribute, sub-license, or share the raw downloadable files or cloud folder links with third parties.
          </p>

          <h2 className="text-lg font-bold text-white">5. Pricing &amp; Payments</h2>
          <p>
            All prices are stated in United States Dollars (USD) as one-time fees unless otherwise stated at checkout. We do not store payment card information directly; all transactions are processed via PCI-DSS compliant third-party payment gateways.
          </p>

          <h2 className="text-lg font-bold text-white">6. No Guarantees of Performance</h2>
          <p>
            Social media engagement, algorithms, audience growth, and view counts are influenced by factors beyond our control. We make no representations, guarantees, or warranties that using these materials will produce specific view counts, follower increases, or financial income.
          </p>

          <h2 className="text-lg font-bold text-white">7. Support &amp; Inquiries</h2>
          <p>
            For questions regarding these terms, contact our support team at{" "}
            <a
              href={`mailto:${siteConfig.brand.supportEmail}`}
              className="text-blue-400 underline"
            >
              {siteConfig.brand.supportEmail}
            </a>
            .
          </p>
        </section>

        <div className="pt-6 border-t border-white/10 text-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors"
          >
            Return to Landing Page
          </Link>
        </div>
      </div>
    </main>
  );
}
