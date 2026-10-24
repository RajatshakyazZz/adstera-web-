"use client";

import React from "react";
import { ArrowRight, ShieldCheck, CheckCircle2, Lock } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { buildCheckoutUrlWithUtm, trackEvent } from "@/lib/tracking";

export function FinalCTA() {
  const checkoutUrlWithUtm = buildCheckoutUrlWithUtm(siteConfig.product.checkoutUrl);

  const handleCtaClick = () => {
    trackEvent("final_cta_click", {
      product_name: siteConfig.product.name,
      price: siteConfig.product.priceUsd,
    });
  };

  return (
    <section className="py-20 sm:py-28 bg-[#080C15] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 radial-glow pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-b from-[#131B30] to-[#0A0F1F] border border-blue-500/30 p-8 sm:p-14 lg:p-16 text-center shadow-2xl shadow-blue-950/30">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3.5 py-1 rounded-full">
            Immediate Digital Access
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-2xl mx-auto">
            Ready to Explore Your Next Digital Resource?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
            Review the {siteConfig.product.name}, see what&apos;s included, and decide whether it&apos;s right for your content workflow.
          </p>

          {/* Pricing Highlight Pill */}
          <div className="mt-6 inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-900/90 border border-white/10 text-sm">
            <span className="text-slate-300 font-medium">Full Library Access:</span>
            <span className="text-emerald-400 font-bold font-mono text-base">
              {siteConfig.product.priceUsd} USD
            </span>
            <span className="text-slate-500 text-xs">• One-time payment</span>
          </div>

          {/* Action Button */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={checkoutUrlWithUtm}
              onClick={handleCtaClick}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 hover:from-blue-500 hover:to-indigo-500 active:from-blue-700 text-white font-bold text-base shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-400 text-center"
            >
              <span>Explore the Bundle & Checkout</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#included"
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 text-slate-200 text-sm font-semibold transition-colors text-center"
            >
              Review Included Packs
            </a>
          </div>

          {/* Reassurance Signals */}
          <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-400">
            <div className="flex items-center justify-center gap-2">
              <Lock className="w-4 h-4 text-blue-400" />
              <span>Standard 256-Bit SSL Checkout</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>No Recurring Monthly Subscriptions</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-indigo-400" />
              <span>Electronic Delivery to Your Email</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
