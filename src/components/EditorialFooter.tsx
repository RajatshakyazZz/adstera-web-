import React from "react";
import Link from "next/link";
import { Newspaper, ShieldCheck, Mail } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export function EditorialFooter() {
  return (
    <footer className="bg-[#05080E] border-t border-white/10 text-slate-400 text-xs py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Masthead */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Newspaper className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-white text-base tracking-tight">
                CreatorPulse Journal
              </span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed text-xs">
              An independent digital media publication providing hands-on testing, software evaluations, and production benchmarks for US creators and media managers.
            </p>
            <div className="flex items-center gap-2 text-slate-400 pt-1">
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>Editorial Desk: </span>
              <a
                href={`mailto:${siteConfig.brand.supportEmail}`}
                className="text-slate-300 hover:text-white underline"
              >
                {siteConfig.brand.supportEmail}
              </a>
            </div>
          </div>

          {/* Editorial Sections */}
          <div className="space-y-3">
            <h4 className="font-bold uppercase tracking-wider text-slate-200 text-xs">
              Review Sections
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#overview" className="hover:text-white transition-colors">
                  Executive Verdict
                </a>
              </li>
              <li>
                <a href="#whats-inside" className="hover:text-white transition-colors">
                  Included Asset Breakdown
                </a>
              </li>
              <li>
                <a href="#sample-gallery" className="hover:text-white transition-colors">
                  Quality Inspection
                </a>
              </li>
              <li>
                <a href="#comparison" className="hover:text-white transition-colors">
                  Price vs Subscriptions
                </a>
              </li>
              <li>
                <a href="#verdict" className="hover:text-white transition-colors">
                  Final Scorecard
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Compliance */}
          <div className="space-y-3">
            <h4 className="font-bold uppercase tracking-wider text-slate-200 text-xs">
              Policies &amp; Disclosures
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/terms-of-service" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-white transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/license" className="hover:text-white transition-colors">
                  License &amp; Usage Rights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="pt-8 border-t border-white/5 space-y-3 text-[11px] text-slate-500 leading-relaxed">
          <p>
            <strong>Editorial Disclosure:</strong> CreatorPulse Journal evaluates digital tools, creative assets, and video production resources. We test products independently. When readers access tools or bundles through our links, we may receive compensation that supports our testing operations. Results on social media platforms vary based on individual creator talent, niche selection, and platform algorithm changes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 text-slate-500">
            <div>
              &copy; {siteConfig.brand.copyrightYear} CreatorPulse Journal. All rights reserved.
            </div>
            <div className="flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Independent Editorial Review • Verified US Publication</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
