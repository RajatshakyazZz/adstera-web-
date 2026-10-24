"use client";

import React from "react";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  Lock,
  Mail,
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { buildCheckoutUrlWithUtm, trackEvent } from "@/lib/tracking";

export function OfferSection() {
  const checkoutUrlWithUtm = buildCheckoutUrlWithUtm(siteConfig.product.checkoutUrl);

  const handleCheckoutClick = () => {
    trackEvent(siteConfig.tracking.events.checkoutClick, {
      product_id: siteConfig.product.id,
      product_name: siteConfig.product.name,
      price: siteConfig.product.priceUsd,
      destination_url: checkoutUrlWithUtm,
    });
  };

  const includedItems = [
    "130+ Distinct Curated Content & Reels Bundles",
    "2,500+ Vertical 9:16 HD & 4K Video Clips (No Watermarks)",
    "Canva Editable Templates for Carousels, Stories & Posts",
    "Viral Hooks & Proven Caption Prompt Library",
    "Niche-Specific Content Folders (Aesthetic, Mindset, Fitness, Business)",
    "Instant Lifetime Access to Cloud Drive Folders",
    "Free Updates to Existing Pack Additions",
  ];

  return (
    <section id="offer" className="py-16 sm:py-24 bg-[#0A0F1D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
            Direct Purchase Terms
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Get Instant Access to the Full 130+ Bundle Library
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A single, clear transaction. No hidden fees, no recurring memberships, and no unwanted software installations.
          </p>
        </div>

        {/* Main Offer Card Container */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-[#131D33] to-[#0D1424] border border-blue-500/30 shadow-2xl shadow-blue-950/40 p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          {/* Subtle top ambient glow */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Product Details & Features */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-600/20 text-blue-300 border border-blue-500/30">
                  {siteConfig.product.category}
                </span>
                <span className="text-xs text-slate-400">Verifiable Digital Resource</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {siteConfig.product.name}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {siteConfig.product.shortDescription}
              </p>

              {/* Verified Features Checklist */}
              <div className="space-y-2.5 pt-2">
                {includedItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Delivery and File Spec Callout */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-1.5 text-xs text-slate-400">
                <div className="flex items-center gap-2 text-slate-300 font-semibold">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>Delivery Method</span>
                </div>
                <p className="leading-relaxed">{siteConfig.product.deliveryMethod}</p>
                <div className="pt-1 text-[11px] text-slate-500">
                  Format: {siteConfig.product.format} • {siteConfig.product.fileSizeEstimate}
                </div>
              </div>
            </div>

            {/* Right Column: Pricing & Conversion Button */}
            <div className="lg:col-span-5 bg-[#0A0F1E] rounded-2xl border border-white/10 p-6 sm:p-8 flex flex-col justify-between text-center relative">
              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                  Standard US License
                </span>

                {/* Price Display */}
                <div className="py-2">
                  <div className="flex items-baseline justify-center gap-1.5">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-mono">
                      {siteConfig.product.priceUsd}
                    </span>
                    <span className="text-sm text-slate-400 font-medium">USD</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    {siteConfig.product.priceFrequency} • No recurring charges
                  </div>
                </div>

                {/* Secure Guarantee Box */}
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs flex items-center justify-center gap-2">
                  <Lock className="w-4 h-4 text-emerald-400" />
                  <span className="font-medium">SSL Encrypted Checkout</span>
                </div>
              </div>

              {/* Purchase CTA */}
              <div className="mt-6 space-y-3">
                <a
                  href={checkoutUrlWithUtm}
                  onClick={handleCheckoutClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 hover:from-blue-500 hover:to-indigo-500 active:from-blue-700 active:to-indigo-700 text-white font-bold text-base shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-400 text-center"
                >
                  <span>Continue to Secure Checkout</span>
                  <ArrowRight className="w-5 h-5" />
                </a>

                <div className="text-[11px] text-slate-400 space-y-1">
                  <p>Instant access granted upon completed payment.</p>
                  <p>
                    Questions before buying? Review our{" "}
                    <Link
                      href={siteConfig.product.refundPolicyUrl}
                      className="text-blue-400 hover:underline"
                    >
                      Refund Policy
                    </Link>{" "}
                    and{" "}
                    <Link
                      href={siteConfig.product.termsUrl}
                      className="text-blue-400 hover:underline"
                    >
                      Terms of Service
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
