import React from "react";
import Link from "next/link";
import { Layers, ShieldCheck, Mail } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export function Footer() {
  return (
    <footer className="bg-[#05080F] border-t border-white/10 text-slate-400 text-xs sm:text-sm py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Layers className="w-4 h-4" />
              </div>
              <span className="font-bold text-white text-base">
                {siteConfig.brand.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Curated digital resources, vertical video templates, and content frameworks designed for US creators, page curators, and digital managers.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>Customer Support: </span>
              <a
                href={`mailto:${siteConfig.brand.supportEmail}`}
                className="text-slate-300 hover:text-white underline underline-offset-2"
              >
                {siteConfig.brand.supportEmail}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#included" className="hover:text-white transition-colors">
                  What&apos;s Included
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#offer" className="hover:text-white transition-colors">
                  Pricing & Terms
                </a>
              </li>
              <li>
                <a href="#preview" className="hover:text-white transition-colors">
                  Sample Previews
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Policies */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Legal & Compliance
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/terms-of-service"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-policy"
                  className="hover:text-white transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/license" className="hover:text-white transition-colors">
                  License & Usage Terms
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Factual Disclaimer and Platform Notice */}
        <div className="pt-8 border-t border-white/5 space-y-4 text-[11px] text-slate-500 leading-relaxed">
          <p>
            <strong>Disclaimer:</strong> This website offers downloadable digital media and template files intended for content creation and social media editing. Results, views, engagement, follower growth, or financial returns may vary based on user skill, niche selection, platform algorithms, and individual efforts. We make no representations or guarantees of viral reach or specific financial outcomes.
          </p>
          <p>
            This site is not affiliated with, endorsed by, or sponsored by Instagram, Meta, TikTok, YouTube, or Canva. All trademarks and brand names are property of their respective holders.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 text-slate-500">
            <div>
              &copy; {siteConfig.brand.copyrightYear} {siteConfig.brand.name}. All rights reserved.
            </div>
            <div className="flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Adsterra Traffic &amp; US Direct-Response Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
