"use client";

import React from "react";
import { Sparkles, ArrowRight, ExternalLink, Gift } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { trackEvent } from "@/lib/tracking";

interface AdsterraSmartlinkCardProps {
  variant?: "inline" | "sidebar";
  className?: string;
}

export function AdsterraSmartlinkCard({
  variant = "inline",
  className = "",
}: AdsterraSmartlinkCardProps) {
  const smartlinkUrl = siteConfig.ads.smartlinkUrl;

  const handleClick = () => {
    trackEvent("adsterra_smartlink_click", {
      variant,
      destination: smartlinkUrl,
    });
  };

  if (variant === "sidebar") {
    return (
      <div
        className={`rounded-2xl bg-gradient-to-br from-indigo-950/70 via-[#101931] to-blue-950/70 border border-indigo-500/30 p-5 shadow-lg space-y-3.5 ${className}`}
      >
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
            Sponsored Bonus
          </span>
          <Gift className="w-4 h-4 text-indigo-400" />
        </div>

        <div>
          <h4 className="text-sm font-bold text-white leading-snug">
            Trending Creator Deals &amp; Bonus Offers
          </h4>
          <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
            Explore curated partner promotions, free digital trials, and high-CPM creator resources.
          </p>
        </div>

        <a
          href={smartlinkUrl}
          onClick={handleClick}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold text-xs tracking-wide shadow-md transition-all hover:-translate-y-0.5 text-center"
        >
          <span>Claim Partner Deals</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    );
  }

  return (
    <div
      className={`my-8 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-blue-950/50 via-indigo-950/60 to-purple-950/50 border border-indigo-500/30 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-5 ${className}`}
    >
      <div className="space-y-1.5 text-center sm:text-left">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-[10px] font-bold uppercase tracking-wider">
          <Sparkles className="w-3 h-3 text-indigo-400" />
          Featured Partner Offer
        </div>
        <h4 className="text-base sm:text-lg font-bold text-white">
          Exclusive Creator Perks &amp; Media Vault Access
        </h4>
        <p className="text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed">
          Access trending digital promotions, creator discounts, and partner resources hand-picked by our network.
        </p>
      </div>

      <a
        href={smartlinkUrl}
        onClick={handleClick}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs tracking-wide shadow-lg shadow-blue-500/25 transition-all hover:-translate-y-0.5 flex-shrink-0"
      >
        <span>Explore Partner Offer</span>
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}
