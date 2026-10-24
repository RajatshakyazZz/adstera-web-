"use client";

import React from "react";
import Link from "next/link";
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  ExternalLink,
  Lock,
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { BundleGrid } from "@/components/BundleGrid";
import { PreviewGallery } from "@/components/PreviewGallery";
import { FAQAccordion } from "@/components/FAQAccordion";
import { buildCheckoutUrlWithUtm, trackEvent } from "@/lib/tracking";

export function ArticleContent() {
  const checkoutUrlWithUtm = buildCheckoutUrlWithUtm(siteConfig.product.checkoutUrl);

  const handleMidArticleClick = () => {
    trackEvent("mid_article_cta_click", {
      section: "in_article_recommendation",
      product: siteConfig.product.name,
    });
  };

  const handleFinalVerdictClick = () => {
    trackEvent(siteConfig.tracking.events.checkoutClick, {
      section: "final_verdict_card",
      product: siteConfig.product.name,
      price: siteConfig.product.priceUsd,
    });
  };

  return (
    <article className="prose prose-invert max-w-none space-y-12 text-slate-300 leading-relaxed">
      {/* Chapter 1: The Short-Form Video Bottleneck */}
      <section id="dilemma" className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-white/10 pb-3">
          1. The Creator Dilemma: Sourcing 9:16 Video Without Burning Out
        </h2>

        <p className="text-base text-slate-300 leading-relaxed">
          If you manage an organic Instagram theme page, a TikTok brand channel, or produce YouTube Shorts for clients, you are acutely aware of the algorithm&apos;s relentless demand: <strong>frequency and visual retention</strong>.
        </p>

        <p className="text-base text-slate-300 leading-relaxed">
          To maintain algorithm momentum in 2026, most US creators are forced to publish at least one to three vertical videos every single day. For solo operators and small marketing teams, this creates a punishing operational bottleneck. Filming original b-roll daily is impractical, while traditional stock video libraries present two major problems:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
          <div className="p-5 rounded-2xl bg-[#0E1527] border border-rose-500/20 space-y-2">
            <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
              <XCircle className="w-4 h-4" />
              <span>Problem A: Prohibitive Recurring Fees</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Standard commercial stock sites charge between $35 and $80 every month, easily costing over $500–$900 every year just for basic background footage.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0E1527] border border-rose-500/20 space-y-2">
            <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
              <XCircle className="w-4 h-4" />
              <span>Problem B: Wrong Widescreen Aspect Ratios</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Most stock platforms catalog 16:9 widescreen footage intended for desktop or cinema, requiring awkward manual cropping that loses the focal point on mobile 9:16 feeds.
            </p>
          </div>
        </div>

        <p className="text-base text-slate-300 leading-relaxed">
          This has driven a massive surge in demand for curated, native vertical asset bundles — collections designed specifically for mobile reels, clean text overlays, and fast turnaround editing.
        </p>
      </section>

      {/* Chapter 2: What Is the 130+ Digital Content & Reels Bundle? */}
      <section id="whats-inside" className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-white/10 pb-3">
          2. Inventory Breakdown: What&apos;s Actually Inside the 130+ Folders?
        </h2>

        <p className="text-base text-slate-300 leading-relaxed">
          The <strong>{siteConfig.product.name}</strong> is a downloadable media repository spanning approximately <strong>12.4 GB</strong> of organized cloud assets. Unlike disorganized torrent dumps, every folder is structured into defined creator niches and ready-to-use production modules.
        </p>

        {/* Embedded Interactive Category Grid */}
        <div className="not-prose my-6">
          <BundleGrid />
        </div>
      </section>

      {/* In-Article Recommendation Break */}
      <div className="not-prose my-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950/60 via-indigo-950/70 to-slate-900 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1.5 text-center sm:text-left">
          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400">
            Editor&apos;s Resource Note
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-white">
            Need Direct Access to the 130+ Bundle?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg">
            You can verify current availability and cloud download access directly through the official creator portal at the one-time $27 USD rate.
          </p>
        </div>

        <a
          href={checkoutUrlWithUtm}
          onClick={handleMidArticleClick}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs tracking-wide shadow-lg shadow-blue-500/25 transition-all hover:-translate-y-0.5 flex-shrink-0"
        >
          <span>Open Official Checkout</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Chapter 3: Hands-On Sample Inspection */}
      <section id="sample-gallery" className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-white/10 pb-3">
          3. Hands-On Quality Inspection: Testing the Files
        </h2>

        <p className="text-base text-slate-300 leading-relaxed">
          Our editorial team extracted multiple sample files from the repository to verify resolution, bitrate, color grading, and text-free composition. The video clips are delivered in universal <strong>MP4 format</strong>, encoded at 1080p and 4K vertical resolutions.
        </p>

        <p className="text-base text-slate-300 leading-relaxed">
          Crucially, the raw clips are 100% watermark-free with generous negative space, allowing creators to place headline captions, subtitle animations, and voiceover waveforms without visual clutter.
        </p>

        {/* Embedded Interactive Lightbox Gallery */}
        <div className="not-prose my-6">
          <PreviewGallery />
        </div>
      </section>

      {/* Chapter 4: Cost vs Traditional Stock Benchmark */}
      <section id="comparison" className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-white/10 pb-3">
          4. Cost &amp; Workflow Benchmark: How Does It Stack Up?
        </h2>

        <p className="text-base text-slate-300 leading-relaxed">
          To understand whether this bundle provides tangible ROI, we compared the three standard methods creators use to source vertical video and social assets:
        </p>

        {/* Comparison Table */}
        <div className="not-prose overflow-x-auto my-6 rounded-2xl border border-white/10 bg-[#0A0F1D]">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-slate-900/80 text-white font-bold">
                <th className="p-4 sm:p-5">Feature &amp; Metric</th>
                <th className="p-4 sm:p-5 text-slate-400">DIY Filming</th>
                <th className="p-4 sm:p-5 text-slate-400">Stock Subscriptions</th>
                <th className="p-4 sm:p-5 text-blue-400 bg-blue-950/30">
                  130+ Creator Vault
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300">
              {siteConfig.comparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-white">{row.feature}</td>
                  <td className="p-4 sm:p-5 text-slate-400">{row.diy}</td>
                  <td className="p-4 sm:p-5 text-slate-400">{row.stockSites}</td>
                  <td className="p-4 sm:p-5 font-bold text-emerald-400 bg-blue-950/20">
                    {row.bundle}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Chapter 5: Pros & Cons Analysis */}
      <section id="pros-cons" className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-white/10 pb-3">
          5. Pros &amp; Cons: Balanced Editorial Assessment
        </h2>

        <p className="text-base text-slate-300 leading-relaxed">
          No digital asset collection is universally perfect for every creator. Here is an honest appraisal of where this package shines, and where it may fall short of your expectations:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 not-prose">
          {/* Pros */}
          <div className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-500/25 space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-base">
              <CheckCircle2 className="w-5 h-5" />
              <span>What Our Review Team Liked</span>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span><strong>No Recurring Fees:</strong> Flat $27 one-time purchase with lifetime cloud drive storage links.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span><strong>Native 9:16 Framing:</strong> Shot specifically for smartphones, avoiding cropping distortion.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span><strong>Canva Compatibility:</strong> Pre-built carousel templates work directly on free Canva accounts.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span><strong>Clean Aesthetics:</strong> Neutral color grading ready for immediate text overlays.</span>
              </li>
            </ul>
          </div>

          {/* Cons */}
          <div className="p-6 rounded-2xl bg-rose-950/20 border border-rose-500/25 space-y-3">
            <div className="flex items-center gap-2 text-rose-400 font-bold text-base">
              <XCircle className="w-5 h-5" />
              <span>Who This Is NOT Designed For</span>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold">•</span>
                <span><strong>Hollywood Cine Filmmakers:</strong> These are optimized for social media b-roll, not feature film VFX.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold">•</span>
                <span><strong>Automated Posting Seekers:</strong> You still need to add your own topic captions, hooks, and trending audio.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold">•</span>
                <span><strong>Slow Internet Connections:</strong> At ~12.4 GB total, downloading all folders at once requires stable Wi-Fi (though folders can be downloaded individually).</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Chapter 6: Software Compatibility & Delivery */}
      <section id="compatibility" className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-white/10 pb-3">
          6. Software Compatibility &amp; How Delivery Works
        </h2>

        <p className="text-base text-slate-300 leading-relaxed">
          One of the standout benefits of standard MP4 containers and Canva web templates is near-universal software compatibility:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6 not-prose">
          <div className="p-3.5 rounded-xl bg-[#0E1527] border border-white/10 text-center">
            <div className="font-bold text-white text-sm">CapCut</div>
            <div className="text-[11px] text-slate-400 mt-1">Mobile &amp; Desktop</div>
          </div>
          <div className="p-3.5 rounded-xl bg-[#0E1527] border border-white/10 text-center">
            <div className="font-bold text-white text-sm">Canva</div>
            <div className="text-[11px] text-slate-400 mt-1">Free &amp; Pro Accounts</div>
          </div>
          <div className="p-3.5 rounded-xl bg-[#0E1527] border border-white/10 text-center">
            <div className="font-bold text-white text-sm">Premiere / FCP</div>
            <div className="text-[11px] text-slate-400 mt-1">Direct Drag-and-Drop</div>
          </div>
          <div className="p-3.5 rounded-xl bg-[#0E1527] border border-white/10 text-center">
            <div className="font-bold text-white text-sm">InShot / VN</div>
            <div className="text-[11px] text-slate-400 mt-1">iOS &amp; Android Apps</div>
          </div>
        </div>

        <p className="text-base text-slate-300 leading-relaxed">
          <strong>Fulfillment Process:</strong> Immediately after checking out through the secure payment gateway, a confirmation email is dispatched containing your private Google Drive and cloud folder access links. There are no physical discs or shipments.
        </p>
      </section>

      {/* Chapter 7: Licensing & Legal Terms */}
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-white/10 pb-3">
          7. Commercial Licensing &amp; Usage Rights
        </h2>

        <p className="text-base text-slate-300 leading-relaxed">
          A common pitfall with digital asset bundles is ambiguous licensing. For the {siteConfig.product.name}:
        </p>

        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-300">
          <li><strong>Allowed:</strong> Creating derivative reels, TikToks, shorts, and carousel graphics for your personal accounts, business brand pages, and client accounts.</li>
          <li><strong>Prohibited:</strong> Reselling the raw, unmodified MP4 files or sharing the direct cloud folder links on public forums or marketplaces.</li>
        </ul>

        <p className="text-xs text-slate-400">
          For full legal provisions, review the{" "}
          <Link href="/license" className="text-blue-400 underline">
            Digital License &amp; Usage Terms
          </Link>{" "}
          and{" "}
          <Link href="/terms-of-service" className="text-blue-400 underline">
            Terms of Service
          </Link>
          .
        </p>
      </section>

      {/* Chapter 8: Frequently Asked Questions */}
      <section id="faq" className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-white/10 pb-3">
          8. Frequently Asked Questions
        </h2>

        <div className="not-prose my-6">
          <FAQAccordion />
        </div>
      </section>

      {/* Chapter 9: Final Verdict & Scorecard (Main Conversion Point) */}
      <section id="verdict" className="space-y-6 not-prose">
        <div className="rounded-3xl bg-gradient-to-br from-[#121B32] via-[#0E1528] to-[#090D1A] border border-blue-500/40 p-6 sm:p-10 shadow-2xl shadow-blue-950/40 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/25">
                Editorial Review Verdict
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-2">
                Final Scorecard: 4.8 / 5.0
              </h3>
            </div>

            <div className="text-right sm:text-right">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono">
                {siteConfig.product.priceUsd}
              </div>
              <div className="text-xs text-slate-400">One-Time • No Recurring Fees</div>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
            If you are spending more than 2 hours a week scouring free stock directories or paying steep monthly subscriptions for footage that isn&apos;t even vertical, the <strong>130+ Digital Content &amp; Reels Bundle</strong> is one of the most cost-effective asset investments available. At a single $27 payment, it pays for itself on the first sponsored post or client deliverable.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 py-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>130+ Niched Folders (Aesthetic, Mindset, Fitness)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>2,500+ Vertical 9:16 Video Clips</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Editable Canva Multi-Slide Carousels</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Tested on CapCut, Premiere, iPhone &amp; Android</span>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Lock className="w-4 h-4 text-emerald-400" />
              <span>SSL Secure Checkout • Immediate Cloud Access</span>
            </div>

            <a
              href={checkoutUrlWithUtm}
              onClick={handleFinalVerdictClick}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm tracking-wide shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all hover:-translate-y-0.5 text-center flex-shrink-0"
            >
              <span>Get the Complete 130+ Bundle ({siteConfig.product.priceUsd})</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Related Reads & Editorial Footer */}
      <section className="pt-10 border-t border-white/10 space-y-4 not-prose">
        <h4 className="text-base font-bold text-white uppercase tracking-wider text-xs">
          Related Creator Economy Reads
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {siteConfig.relatedArticles.map((article) => (
            <div
              key={article.id}
              className="p-4 rounded-xl bg-[#0E1527] border border-white/5 hover:border-white/20 transition-all space-y-2"
            >
              <div className="flex items-center justify-between text-[11px] text-blue-400">
                <span>{article.category}</span>
                <span className="text-slate-500">{article.readTime}</span>
              </div>
              <h5 className="text-xs sm:text-sm font-bold text-white line-clamp-2 leading-snug">
                {article.title}
              </h5>
              <div className="text-[10px] text-slate-500">{article.date}</div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
