"use client";

import React from "react";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Film,
  FolderSync,
  Layers,
  CheckCircle2,
  DownloadCloud,
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { trackEvent } from "@/lib/tracking";

export function HeroSection() {
  const handlePrimaryClick = () => {
    trackEvent(siteConfig.tracking.events.heroCtaClick, {
      cta_text: siteConfig.hero.primaryCtaText,
      target: "#offer",
    });
  };

  const handleSecondaryClick = () => {
    trackEvent("hero_secondary_cta_click", {
      cta_text: siteConfig.hero.secondaryCtaText,
      target: "#included",
    });
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 lg:pt-20 lg:pb-32">
      {/* Background radial lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] radial-glow-hero pointer-events-none -z-10" />
      <div className="absolute -top-40 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 -left-20 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Direct Response Copy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>{siteConfig.hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Spend Less Time Searching.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400">
                Get More From Your Content.
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal">
              {siteConfig.hero.supportingText}
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#offer"
                onClick={handlePrimaryClick}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-base shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-400 text-center"
              >
                <span>{siteConfig.hero.primaryCtaText}</span>
                <ArrowRight className="w-5 h-5 text-white/90" />
              </a>

              <a
                href="#included"
                onClick={handleSecondaryClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-white/10 hover:border-white/20 text-slate-200 hover:text-white font-semibold text-base transition-all focus:outline-none focus:ring-2 focus:ring-slate-400 text-center"
              >
                <span>{siteConfig.hero.secondaryCtaText}</span>
              </a>
            </div>

            {/* Trust Microcopy */}
            <div className="pt-2 flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
              <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <p className="leading-snug">{siteConfig.hero.trustMicrocopy}</p>
            </div>

            {/* Key Quick Facts Grid */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
              <div className="p-3 rounded-lg bg-slate-900/50 border border-white/5">
                <div className="text-lg sm:text-2xl font-bold text-white">130+</div>
                <div className="text-xs text-slate-400 font-medium">Curated Packs</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/50 border border-white/5">
                <div className="text-lg sm:text-2xl font-bold text-white">2,500+</div>
                <div className="text-xs text-slate-400 font-medium">9:16 Video Clips</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/50 border border-white/5">
                <div className="text-lg sm:text-2xl font-bold text-white">Canva</div>
                <div className="text-xs text-slate-400 font-medium">Editable Layouts</div>
              </div>
            </div>
          </div>

          {/* Right Column: Layered High-Fidelity CSS/SVG Mockup */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
            {/* Ambient backlight glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-indigo-500/20 to-violet-500/10 rounded-3xl blur-2xl -z-10" />

            <div className="w-full max-w-md bg-gradient-to-b from-[#131B2E] to-[#0D1322] border border-blue-500/25 rounded-2xl p-4 sm:p-6 shadow-2xl shadow-black/80 relative">
              {/* Mockup Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-md border border-white/5">
                  <FolderSync className="w-3.5 h-3.5 text-blue-400" />
                  <span>Creator_Vault_v2.bundle</span>
                </div>
              </div>

              {/* Central Bundle Card */}
              <div className="mt-5 space-y-4">
                {/* Primary Card Preview (Simulating 9:16 vertical video & Canva layouts) */}
                <div className="relative rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900 via-indigo-950/60 to-slate-950 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                      Master Bundle Preview
                    </span>
                    <span className="text-xs text-slate-400">12.4 GB Total</span>
                  </div>

                  {/* 3 Visual Swatches representing video clips & templates */}
                  <div className="grid grid-cols-3 gap-2.5 my-3">
                    {/* Swatch 1: Aesthetic Video */}
                    <div className="aspect-[9/16] rounded-lg bg-gradient-to-t from-black via-slate-800 to-blue-900/50 p-2 flex flex-col justify-between border border-blue-500/20 shadow-md">
                      <div className="flex justify-between items-center">
                        <Film className="w-3 h-3 text-blue-300" />
                        <span className="text-[9px] font-bold text-white/80 bg-black/60 px-1 rounded">4K</span>
                      </div>
                      <div className="text-[10px] text-slate-200 font-medium leading-tight line-clamp-2">
                        Faceless B-Roll
                      </div>
                    </div>

                    {/* Swatch 2: Canva Graphic */}
                    <div className="aspect-[9/16] rounded-lg bg-gradient-to-t from-black via-slate-800 to-indigo-900/50 p-2 flex flex-col justify-between border border-indigo-500/20 shadow-md">
                      <div className="flex justify-between items-center">
                        <Layers className="w-3 h-3 text-indigo-300" />
                        <span className="text-[9px] font-bold text-white/80 bg-black/60 px-1 rounded">CANVA</span>
                      </div>
                      <div className="text-[10px] text-slate-200 font-medium leading-tight line-clamp-2">
                        Carousel Post
                      </div>
                    </div>

                    {/* Swatch 3: Hook & Script Sheet */}
                    <div className="aspect-[9/16] rounded-lg bg-gradient-to-t from-black via-slate-800 to-violet-900/50 p-2 flex flex-col justify-between border border-violet-500/20 shadow-md">
                      <div className="flex justify-between items-center">
                        <Sparkles className="w-3 h-3 text-violet-300" />
                        <span className="text-[9px] font-bold text-white/80 bg-black/60 px-1 rounded">HOOKS</span>
                      </div>
                      <div className="text-[10px] text-slate-200 font-medium leading-tight line-clamp-2">
                        Viral Captions
                      </div>
                    </div>
                  </div>

                  {/* Included formats chip row */}
                  <div className="pt-2 flex items-center justify-between text-xs text-slate-300 border-t border-white/5">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      130+ Niched Folders
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      No Watermarks
                    </span>
                  </div>
                </div>

                {/* Floating Interactive Micro-Badge */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 border border-white/10 text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                      <DownloadCloud className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Instant Email Delivery</div>
                      <div className="text-slate-400 text-[11px]">Direct Cloud Drive Access</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-emerald-400 font-bold font-mono">
                      {siteConfig.product.priceUsd}
                    </span>
                    <div className="text-[10px] text-slate-400">One-time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
