import React from "react";
import { FolderArchive, Compass, Layers, Smartphone, Check } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const iconMap = {
  FolderArchive: FolderArchive,
  Compass: Compass,
  Layers: Layers,
  Smartphone: Smartphone,
};

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-16 sm:py-24 bg-[#080C15] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
            Why Creators Choose This Toolkit
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            More Resources. Less Searching.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A practical, organized foundation for your video editing and graphic production workflow without monthly recurring stock subscriptions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {siteConfig.benefits.map((benefit, idx) => {
            const IconComponent = iconMap[benefit.icon as keyof typeof iconMap] || Layers;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-white/10 hover:border-blue-500/40 p-6 sm:p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider bg-slate-800/80 px-2 py-0.5 rounded border border-white/5">
                      {benefit.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                    {benefit.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-blue-400 font-medium">
                  <Check className="w-4 h-4 text-blue-400" />
                  <span>Production-ready files</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
