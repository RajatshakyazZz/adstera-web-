"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Film,
  Eye,
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { trackEvent } from "@/lib/tracking";

export function PreviewGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = (idx: number) => {
    setSelectedIndex(idx);
    trackEvent("gallery_preview_click", {
      preview_id: siteConfig.previewGallery[idx].id,
      preview_title: siteConfig.previewGallery[idx].title,
    });
  };

  const closeModal = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev === null ? 0 : (prev + 1) % siteConfig.previewGallery.length
    );
  }, [selectedIndex]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev === null
        ? 0
        : (prev - 1 + siteConfig.previewGallery.length) % siteConfig.previewGallery.length
    );
  }, [selectedIndex]);

  // Keyboard navigation for modal
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, closeModal, handleNext, handlePrev]);

  return (
    <section id="preview" className="py-16 sm:py-24 bg-[#080C15] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
            Visual Quality Inspection
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Preview Product Samples & Layouts
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Inspect the high-resolution styling, typography schemes, and video formats included in the library before purchasing.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.previewGallery.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openModal(idx)}
              className="group cursor-pointer rounded-2xl bg-[#0E1527] border border-white/10 hover:border-blue-500/50 overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/10 flex flex-col justify-between"
            >
              {/* Preview Canvas Graphic */}
              <div
                className="relative aspect-[16/10] bg-gradient-to-br from-slate-900 via-[#111A30] to-slate-950 p-6 flex flex-col justify-between overflow-hidden"
                style={{
                  borderBottom: `2px solid ${item.accentColor}40`,
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-black/60 text-slate-300 border border-white/10">
                    {item.badge}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-900/80 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-blue-600 transition-colors">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-medium text-blue-400">
                    {item.category}
                  </div>
                  <div className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </div>
                </div>

                {/* Subtle decorative grid lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
              </div>

              {/* Card Footer Details */}
              <div className="p-4 sm:p-5 flex items-center justify-between text-xs text-slate-400">
                <span className="line-clamp-1">{item.description}</span>
                <span className="text-blue-400 font-semibold group-hover:underline flex-shrink-0 ml-2">
                  Enlarge
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox Viewer */}
        {selectedIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-label="Product Preview Lightbox"
          >
            <div
              className="relative w-full max-w-2xl bg-[#0E162A] border border-blue-500/30 rounded-2xl p-6 shadow-2xl space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded border border-blue-500/20">
                    {siteConfig.previewGallery[selectedIndex].badge}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1.5">
                    {siteConfig.previewGallery[selectedIndex].title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={closeModal}
                  aria-label="Close Lightbox"
                  className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors focus:outline-none"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Graphic Mockup Detail Area */}
              <div className="aspect-[16/10] sm:aspect-[16/9] rounded-xl bg-gradient-to-br from-slate-950 via-[#101932] to-slate-900 border border-white/10 p-6 flex flex-col justify-center items-center text-center relative overflow-hidden">
                <div className="w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center mb-4">
                  <Film className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-white">
                  {siteConfig.previewGallery[selectedIndex].title}
                </h4>
                <p className="text-sm text-slate-300 max-w-md mt-2 leading-relaxed">
                  {siteConfig.previewGallery[selectedIndex].description}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                  <span>Included in Master Bundle</span>
                </div>
              </div>

              {/* Controls and Footer */}
              <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous Preview"
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next Preview"
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <span className="ml-2">
                    {selectedIndex + 1} of {siteConfig.previewGallery.length}
                  </span>
                </div>

                <a
                  href="#offer"
                  onClick={closeModal}
                  className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors"
                >
                  Get Access Now
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
