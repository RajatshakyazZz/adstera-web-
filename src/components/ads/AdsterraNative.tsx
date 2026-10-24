"use client";

import React, { useEffect, useRef } from "react";

export function AdsterraNative({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only load if in browser
    if (typeof window === "undefined") return;

    // Append script dynamically after element is present in DOM
    const existing = document.getElementById("adsterra-native-invoke-js");
    if (!existing) {
      const script = document.createElement("script");
      script.id = "adsterra-native-invoke-js";
      script.async = true;
      script.setAttribute("data-cfasync", "false");
      script.src =
        "https://pl32003110.profitableratecpmnetwork.com/cbbcee4cde1f78b488df89b32eaea9de/invoke.js";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      className={`w-full my-8 p-5 sm:p-6 rounded-2xl bg-[#0A0F1D] border border-blue-500/20 text-center shadow-lg ${className}`}
    >
      <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4 text-[11px] text-slate-400">
        <span className="font-semibold uppercase tracking-wider text-slate-400">
          Recommended Content &amp; Sponsored Deals
        </span>
        <span className="text-[10px] text-slate-500 uppercase">Partner Network</span>
      </div>

      <div
        id="container-cbbcee4cde1f78b488df89b32eaea9de"
        ref={containerRef}
        className="min-h-[140px] flex items-center justify-center w-full overflow-hidden"
      />
    </div>
  );
}
