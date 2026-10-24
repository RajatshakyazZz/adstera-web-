"use client";

import React from "react";
import {
  Star,
  CheckCircle2,
  Clock,
  ShieldCheck,
  ExternalLink,
  Award,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { buildCheckoutUrlWithUtm, trackEvent } from "@/lib/tracking";

export function ArticleHero() {
  const checkoutUrlWithUtm = buildCheckoutUrlWithUtm(siteConfig.product.checkoutUrl);

  const handleCtaClick = () => {
    trackEvent(siteConfig.tracking.events.heroCtaClick, {
      location: "executive_summary_box",
      product: siteConfig.product.name,
    });
  };

  return (
    <header className="relative pt-8 pb-10 sm:pt-12 sm:pb-14 border-b border-white/10 bg-[#080C15]">
      {/* Subtle background ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 radial-glow-hero pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400">
          <span>Home</span>
          <span>/</span>
          <span>Creator Resources</span>
          <span>/</span>
          <span className="text-blue-400 font-medium">Hands-On Reviews</span>
        </nav>

        {/* Editorial Category Pill */}
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            {siteConfig.article.tag}
          </span>
          <span className="text-xs text-slate-400">
            {siteConfig.article.updatedDate}
          </span>
        </div>

        {/* Article Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.18]">
          {siteConfig.article.headline}
        </h1>

        {/* Article Subtitle */}
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
          {siteConfig.article.subtitle}
        </p>

        {/* Author Byline & Verification Block */}
        <div className="pt-4 pb-2 border-t border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
              {siteConfig.article.author.avatarInitials}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-sm">
                  {siteConfig.article.author.name}
                </span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-300">
                  {siteConfig.article.author.role}
                </span>
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Fact-Checked by {siteConfig.article.factCheckedBy}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              <span>{siteConfig.article.readTime}</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Independent Review</span>
            </div>
          </div>
        </div>

        {/* Executive Summary / Quick Verdict Callout Card */}
        <div
          id="overview"
          className="rounded-2xl bg-gradient-to-br from-[#101931] via-[#0E1528] to-[#0A0F1E] border border-blue-500/30 p-6 sm:p-7 shadow-xl shadow-blue-950/30 space-y-5"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400 block">
                  Executive Takeaway
                </span>
                <h2 className="text-lg font-bold text-white">
                  CreatorPulse Editorial Rating
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-[#090D18] px-3.5 py-1.5 rounded-xl border border-white/10 self-start sm:self-auto">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="font-extrabold text-white text-sm">
                {siteConfig.article.editorialScore}
              </span>
            </div>
          </div>

          <p className="text-sm text-slate-200 leading-relaxed italic">
            &ldquo;{siteConfig.article.editorialVerdict}&rdquo;
          </p>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
            <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5">
              <div className="text-[11px] text-slate-400">Total Packs</div>
              <div className="text-base font-bold text-white font-mono">130+ Folders</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5">
              <div className="text-[11px] text-slate-400">Video Clips</div>
              <div className="text-base font-bold text-white font-mono">2,500+ (9:16)</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5">
              <div className="text-[11px] text-slate-400">Templates</div>
              <div className="text-base font-bold text-white font-mono">Canva Ready</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5">
              <div className="text-[11px] text-slate-400">Verified Price</div>
              <div className="text-base font-bold text-emerald-400 font-mono">
                {siteConfig.product.priceUsd} One-Time
              </div>
            </div>
          </div>

          {/* Direct Link Callout in Executive Summary */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
            <div className="text-xs text-slate-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Tested on CapCut, Premiere, iPhone &amp; Android. Instant email access.</span>
            </div>

            <a
              href={checkoutUrlWithUtm}
              onClick={handleCtaClick}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs tracking-wide shadow-md shadow-blue-500/20 transition-all hover:-translate-y-0.5 text-center flex-shrink-0"
            >
              <span>Visit Official Access Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
