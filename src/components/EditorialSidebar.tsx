"use client";

import React from "react";
import {
  Bookmark,
  ExternalLink,
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { buildCheckoutUrlWithUtm, trackEvent } from "@/lib/tracking";
import { AdsterraBanner } from "@/components/ads/AdsterraBanner";
import { AdsterraSmartlinkCard } from "@/components/ads/AdsterraSmartlinkCard";

export function EditorialSidebar() {
  const checkoutUrlWithUtm = buildCheckoutUrlWithUtm(siteConfig.product.checkoutUrl);

  const handleSidebarClick = () => {
    trackEvent("sidebar_cta_click", {
      product: siteConfig.product.name,
      price: siteConfig.product.priceUsd,
    });
  };

  const tocItems = [
    { name: "Executive Summary", href: "#overview" },
    { name: "The Creator Dilemma", href: "#dilemma" },
    { name: "Inventory Breakdown", href: "#whats-inside" },
    { name: "Sample Inspection", href: "#sample-gallery" },
    { name: "Cost vs Stock Sites", href: "#comparison" },
    { name: "Pros & Cons Analysis", href: "#pros-cons" },
    { name: "Software Compatibility", href: "#compatibility" },
    { name: "Frequently Asked Questions", href: "#faq" },
    { name: "Final Editorial Verdict", href: "#verdict" },
  ];

  return (
    <aside className="space-y-6 sticky top-24">
      {/* Table of Contents */}
      <div className="rounded-2xl bg-[#0E1527] border border-white/10 p-5 shadow-lg space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300 border-b border-white/5 pb-2.5">
          <Bookmark className="w-3.5 h-3.5 text-blue-400" />
          <span>In This Review</span>
        </div>
        <nav className="flex flex-col space-y-1.5 text-xs text-slate-400">
          {tocItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="py-1 hover:text-blue-400 transition-colors flex items-center gap-1.5"
            >
              <span className="text-[10px] text-slate-600 font-mono">0{idx + 1}.</span>
              <span>{item.name}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Product Quick Specs Card */}
      <div className="rounded-2xl bg-gradient-to-b from-[#111A30] to-[#0A0F1E] border border-blue-500/25 p-5 shadow-lg space-y-4">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <span className="text-xs font-bold text-white">Resource Specs</span>
          <span className="text-[10px] font-semibold uppercase bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">
            Verified
          </span>
        </div>

        <div className="space-y-2.5 text-xs text-slate-300">
          <div className="flex justify-between items-center py-1 border-b border-white/5">
            <span className="text-slate-400">Bundle Name</span>
            <span className="font-semibold text-white text-right">130+ Creator Vault</span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-white/5">
            <span className="text-slate-400">Total Size</span>
            <span className="font-mono text-slate-200">~12.4 GB</span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-white/5">
            <span className="text-slate-400">Video Aspect</span>
            <span className="font-semibold text-blue-400">9:16 Vertical</span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-white/5">
            <span className="text-slate-400">Templates</span>
            <span className="font-semibold text-white">Canva Editable</span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-white/5">
            <span className="text-slate-400">Delivery</span>
            <span className="font-semibold text-emerald-400">Direct Email Link</span>
          </div>
          <div className="flex justify-between items-center py-1">
            <span className="text-slate-400">Access Fee</span>
            <span className="font-bold text-emerald-400 font-mono text-sm">
              {siteConfig.product.priceUsd} One-Time
            </span>
          </div>
        </div>

        <a
          href={checkoutUrlWithUtm}
          onClick={handleSidebarClick}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs tracking-wide shadow-md shadow-blue-500/20 transition-all hover:-translate-y-0.5 text-center"
        >
          <span>Open Official Checkout</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Author Bio Card */}
      <div className="rounded-2xl bg-[#0E1527] border border-white/10 p-5 space-y-3 text-xs text-slate-400">
        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
          About the Reviewer
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0">
            {siteConfig.article.author.avatarInitials}
          </div>
          <div>
            <div className="font-bold text-white text-sm">
              {siteConfig.article.author.name}
            </div>
            <div className="text-[11px] text-slate-400">
              {siteConfig.article.author.role}
            </div>
          </div>
        </div>
        <p className="leading-relaxed text-slate-300 text-[11px]">
          {siteConfig.article.author.bio}
        </p>
      </div>

      {/* Adsterra Smartlink Sponsored Deals Card */}
      {siteConfig.ads.enabled && (
        <AdsterraSmartlinkCard variant="sidebar" />
      )}

      {/* Adsterra Skyscraper Banner 160x300 */}
      {siteConfig.ads.enabled && (
        <div className="flex justify-center pt-2">
          <AdsterraBanner
            bannerKey={siteConfig.ads.banner160x300.key}
            width={siteConfig.ads.banner160x300.width}
            height={siteConfig.ads.banner160x300.height}
            label="Sponsored Partner"
          />
        </div>
      )}
    </aside>
  );
}
