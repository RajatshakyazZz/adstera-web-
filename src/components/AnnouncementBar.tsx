import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export function AnnouncementBar() {
  if (!siteConfig.announcement.enabled) return null;

  return (
    <aside
      aria-label="Announcement"
      className="relative z-50 bg-gradient-to-r from-blue-950/80 via-indigo-950/90 to-blue-950/80 border-b border-blue-500/20 text-xs sm:text-sm text-slate-200 py-2 px-4 transition-all"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center font-medium">
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[11px] font-semibold uppercase tracking-wider">
          <Sparkles className="w-3 h-3 text-blue-400" />
          Verified Bundle
        </span>
        <span className="hidden sm:inline text-slate-300">
          {siteConfig.announcement.text}
        </span>
        <span className="sm:hidden text-slate-300">
          130+ Curated Creator Bundles
        </span>
        <Link
          href={siteConfig.announcement.linkHref}
          className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-semibold underline underline-offset-2 ml-1 transition-colors"
        >
          {siteConfig.announcement.linkText}
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </aside>
  );
}
