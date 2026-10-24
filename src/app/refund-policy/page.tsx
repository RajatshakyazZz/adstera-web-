import React from "react";
import Link from "next/link";
import { ArrowLeft, RefreshCw, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const metadata = {
  title: "Refund Policy",
  description: `Refund and cancellation policy for ${siteConfig.product.name}.`,
};

export default function RefundPolicyPage() {
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
            <RefreshCw className="w-3.5 h-3.5" />
            Purchaser Protection
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Digital Product Refund Policy
          </h1>
          <p className="text-xs text-slate-400">
            Last Updated: October 2026 • Explicit terms for downloadable media assets
          </p>
        </div>

        <section className="space-y-5 text-sm leading-relaxed">
          <h2 className="text-lg font-bold text-white">1. Nature of Downloadable Goods</h2>
          <p>
            Because {siteConfig.product.name} consists of instantly downloadable digital files, video assets, and template links, the product is deemed &quot;used&quot; immediately upon issuance of download credentials. As is standard across the digital creator asset industry, sales are generally final once access links have been provided.
          </p>

          <h2 className="text-lg font-bold text-white">2. Technical Issue Resolution Guarantee</h2>
          <p>
            We are committed to delivering 100% accessible and functional files. You are eligible for support and, if necessary, an exchange or refund under the following verified technical conditions:
          </p>
          <div className="space-y-2 pl-2">
            <div className="flex items-start gap-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>Corrupted files or broken cloud links that our support team cannot fix within 48 business hours.</span>
            </div>
            <div className="flex items-start gap-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>Duplicate billing or accidental duplicate transactions for the same bundle.</span>
            </div>
            <div className="flex items-start gap-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>Verified non-delivery of download credentials despite a successful charge and verified email address.</span>
            </div>
          </div>

          <h2 className="text-lg font-bold text-white">3. Ineligibility for Refunds</h2>
          <p>
            Refund requests cannot be granted for:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Change of mind after the digital files have been downloaded or opened.</li>
            <li>Lack of software required to open standard MP4 or Canva files (instructions and compatible free options are provided).</li>
            <li>Unrealistic expectations regarding automated viral growth or follower numbers.</li>
          </ul>

          <h2 className="text-lg font-bold text-white">4. How to Request Technical Assistance</h2>
          <p>
            If you encounter any difficulty accessing your purchased bundle, please email{" "}
            <a
              href={`mailto:${siteConfig.brand.supportEmail}`}
              className="text-blue-400 underline font-medium"
            >
              {siteConfig.brand.supportEmail}
            </a>{" "}
            with your Order ID and the specific issue. Our support team will assist you promptly.
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
