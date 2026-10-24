"use client";

import React, { useState } from "react";
import {
  Film,
  Layers,
  Sparkles,
  HeartPulse,
  TrendingUp,
  Volume2,
  Check,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { siteConfig, IncludedCategory } from "@/config/siteConfig";
import { trackEvent } from "@/lib/tracking";

const categoryIconMap: Record<string, React.ReactNode> = {
  "faceless-aesthetic": <Film className="w-5 h-5 text-blue-400" />,
  "business-motivation": <TrendingUp className="w-5 h-5 text-indigo-400" />,
  "canva-templates": <Layers className="w-5 h-5 text-violet-400" />,
  "hooks-captions": <Sparkles className="w-5 h-5 text-pink-400" />,
  "wellness-fitness": <HeartPulse className="w-5 h-5 text-emerald-400" />,
  "audio-guides": <Volume2 className="w-5 h-5 text-amber-400" />,
};

export function BundleGrid() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleDetails = (category: IncludedCategory) => {
    const isOpening = expandedId !== category.id;
    setExpandedId(isOpening ? category.id : null);
    if (isOpening) {
      trackEvent(siteConfig.tracking.events.productDetailsView, {
        category_id: category.id,
        category_title: category.title,
      });
    }
  };

  return (
    <section id="included" className="py-16 sm:py-24 bg-[#0A0F1D] relative border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
            Full Inventory Breakdown
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Take a Closer Look at What&apos;s Inside
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A comprehensive overview of the 130+ downloadable content packs, categorized into distinct creator niches and production formats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.includedCategories.map((category) => {
            const isExpanded = expandedId === category.id;
            const icon = categoryIconMap[category.id] || <Layers className="w-5 h-5 text-blue-400" />;

            return (
              <div
                key={category.id}
                className={`rounded-2xl transition-all duration-200 border ${
                  isExpanded
                    ? "bg-[#131B2F] border-blue-500/50 shadow-xl shadow-blue-500/10"
                    : "bg-[#0E1526]/80 hover:bg-[#12192D] border-white/10 hover:border-white/20"
                } p-6 flex flex-col justify-between`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-slate-800/80 border border-white/5">
                      {icon}
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                      {category.count}
                    </span>
                  </div>

                  {/* Title & Tag */}
                  <div className="mb-2">
                    <span className="text-[11px] font-medium uppercase tracking-wider text-slate-400 block mb-1">
                      {category.tag}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                      {category.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mt-2 mb-4">
                    {category.description}
                  </p>

                  {/* Expandable Highlights */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-white/10 space-y-2 animate-fade-in">
                      <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Included Specifications:
                      </div>
                      {category.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Action Button */}
                <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => toggleDetails(category)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 focus:outline-none"
                    aria-expanded={isExpanded}
                  >
                    <span>{isExpanded ? "Hide Details" : "View Details & Specs"}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>

                  <a
                    href="#offer"
                    className="text-xs text-slate-400 hover:text-white underline underline-offset-2 transition-colors"
                  >
                    Get This Pack
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
