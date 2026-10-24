import React from "react";
import Link from "next/link";
import { ArrowLeft, Lock } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const metadata = {
  title: "Privacy Policy",
  description: `Privacy practices and data handling policies for ${siteConfig.brand.name}.`,
};

export default function PrivacyPolicyPage() {
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
            <Lock className="w-3.5 h-3.5" />
            Privacy &amp; Data Protection
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-400">
            Effective Date: October 2026 • Compliant with US Consumer Privacy Standards
          </p>
        </div>

        <section className="space-y-4 text-sm leading-relaxed">
          <h2 className="text-lg font-bold text-white">1. Information We Collect</h2>
          <p>
            When you purchase {siteConfig.product.name} or interact with our landing page, we or our authorized third-party checkout providers may collect:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Contact details such as your name and email address to fulfill digital product delivery.</li>
            <li>Transaction identifiers and purchase timestamp.</li>
            <li>Technical data, including IP address, browser type, referring URL, and campaign attribution parameters (UTMs).</li>
          </ul>

          <h2 className="text-lg font-bold text-white">2. Payment Card Security</h2>
          <p>
            We do not collect or store full credit or debit card numbers on our servers. All transactions are securely handled by encrypted third-party payment gateways operating in compliance with PCI-DSS standards.
          </p>

          <h2 className="text-lg font-bold text-white">3. How We Use Information</h2>
          <p>
            Collected information is used exclusively to:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Deliver your digital purchase to your verified email inbox.</li>
            <li>Provide customer support and resolve download accessibility issues.</li>
            <li>Measure advertising effectiveness and prevent fraudulent traffic.</li>
          </ul>

          <h2 className="text-lg font-bold text-white">4. Cookies and Attribution Tracking</h2>
          <p>
            We may use lightweight browser cookies or sessionStorage to retain advertising campaign parameters (such as Adsterra UTM tags) to ensure proper attribution when navigating to our checkout provider. We do not sell your personal information to third parties.
          </p>

          <h2 className="text-lg font-bold text-white">5. Your Privacy Rights</h2>
          <p>
            Under United States privacy laws (including California CCPA/CPRA where applicable), you have the right to request access to or deletion of personal information held in connection with your purchase. To submit a request, email{" "}
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
