import React from "react";
import { ArrowRight, Search, FileText, CheckCircle } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const stepIcons = [Search, FileText, CheckCircle];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-[#080C15] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
            Transparent Workflow
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Get Started in Three Simple Steps
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A straightforward process with clear terms and immediate digital fulfillment upon verified payment.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {siteConfig.howItWorks.map((step, idx) => {
            const Icon = stepIcons[idx] || CheckCircle;
            return (
              <div
                key={step.stepNumber}
                className="relative rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-950/80 border border-white/10 p-6 sm:p-8 flex flex-col justify-between"
              >
                {/* Step indicator header */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 font-mono">
                      {step.stepNumber}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 text-xs text-slate-500 font-medium">
                  Step {idx + 1} of 3
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner callout */}
        <div className="mt-12 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-indigo-950/40 to-slate-900 border border-blue-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-base font-bold text-white">Have questions about file compatibility?</h4>
            <p className="text-xs sm:text-sm text-slate-400">MP4 vertical video and Canva links work across iPhone, Android, Mac, and Windows.</p>
          </div>
          <a
            href="#faq"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold transition-colors"
          >
            <span>Review FAQs</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
