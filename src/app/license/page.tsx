import React from "react";
import Link from "next/link";
import { ArrowLeft, KeyRound, Check, X } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const metadata = {
  title: "License & Usage Terms",
  description: `Permitted and prohibited usage rights for ${siteConfig.product.name}.`,
};

export default function LicensePage() {
  return (
    <main className="min-h-screen bg-[#080C15] text-slate-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Main Offer
        </Link>

        <div className="border-b border-white/10 pb-6 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
            <KeyRound className="w-3.5 h-3.5" />
            Rights Specification
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Digital License &amp; Usage Rights
          </h1>
          <p className="text-xs text-slate-400">
            Standard End-User License Agreement (EULA) for {siteConfig.product.name}
          </p>
        </div>

        <section className="space-y-6 text-sm leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-white mb-2">Scope of Standard License</h2>
            <p>
              When you purchase the standard version of {siteConfig.product.name}, you receive a non-exclusive, non-transferable, revocable license to utilize the video clips, editable Canva graphics, and copywriting templates subject to the permissions below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Permitted */}
            <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <Check className="w-4 h-4" />
                <span>What Is Permitted (Allowed)</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Publishing edited videos on your personal TikTok, Instagram, YouTube, and Facebook channels.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Using assets for organic business accounts and client social media management.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Adding text, filters, audio tracks, and voiceovers to create derivative media.</span>
                </li>
              </ul>
            </div>

            {/* Prohibited */}
            <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/20 space-y-3">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                <X className="w-4 h-4" />
                <span>What Is Prohibited (Not Allowed)</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <X className="w-3.5 h-3.5 text-rose-400 flex-shrink-0 mt-0.5" />
                  <span>Reselling, distributing, or sharing the raw downloadable files or cloud folders.</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-3.5 h-3.5 text-rose-400 flex-shrink-0 mt-0.5" />
                  <span>Claiming Master Resell Rights (MRR) or Private Label Rights (PLR) unless explicitly licensed.</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-3.5 h-3.5 text-rose-400 flex-shrink-0 mt-0.5" />
                  <span>Sharing direct download links on public forums or file-sharing platforms.</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">Extended Commercial &amp; Resale Inquiries</h2>
            <p>
              If your agency or brand requires extended resale or white-label distribution rights, please contact our team at{" "}
              <a
                href={`mailto:${siteConfig.brand.supportEmail}`}
                className="text-blue-400 underline font-medium"
              >
                {siteConfig.brand.supportEmail}
              </a>{" "}
              prior to purchasing to discuss custom commercial terms.
            </p>
          </div>
        </section>

        <div className="pt-6 border-t border-white/10 text-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors"
          >
            Return to Landing Page
          </Link>
        </div>
      </div>
    </main>
  );
}
