"use client";

import React, { useState } from "react";
import { ChevronDown, Mail } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { trackEvent } from "@/lib/tracking";

export function FAQAccordion() {
  const [openIndices, setOpenIndices] = useState<number[]>([0]); // First open by default

  const toggleIndex = (idx: number, question: string) => {
    setOpenIndices((prev) => {
      const isAlreadyOpen = prev.includes(idx);
      if (!isAlreadyOpen) {
        trackEvent(siteConfig.tracking.events.faqExpand, {
          faq_index: idx,
          faq_question: question,
        });
        return [...prev, idx];
      } else {
        return prev.filter((i) => i !== idx);
      }
    });
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#0A0F1D] relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
            Frequently Asked Questions
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Clear Answers Before You Buy
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Everything you need to know about formats, delivery, licensing, and access.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {siteConfig.faqList.map((faq, idx) => {
            const isOpen = openIndices.includes(idx);
            const buttonId = `faq-btn-${idx}`;
            const regionId = `faq-region-${idx}`;

            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#0E1528] border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={regionId}
                  onClick={() => toggleIndex(idx, faq.question)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-slate-800/40 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-2xl"
                >
                  <span className="text-base sm:text-lg font-bold text-white pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-lg bg-slate-800 text-slate-300 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? "rotate-180 bg-blue-600/20 text-blue-400" : ""
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={regionId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-white/5 pt-4 animate-fade-in"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Help Card */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-900/60 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="p-2.5 rounded-xl bg-blue-600/10 text-blue-400">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Still have questions?</div>
              <div className="text-xs text-slate-400">Our customer support team is here to assist you.</div>
            </div>
          </div>
          <a
            href={`mailto:${siteConfig.brand.supportEmail}`}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold transition-colors"
          >
            Email Support ({siteConfig.brand.supportEmail})
          </a>
        </div>
      </div>
    </section>
  );
}
