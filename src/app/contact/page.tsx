import React from "react";
import Link from "next/link";
import { ArrowLeft, Mail, Clock, HelpCircle } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const metadata = {
  title: "Contact Customer Support",
  description: `Contact support regarding ${siteConfig.product.name} and digital access.`,
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#080C15] text-slate-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Main Offer
        </Link>

        <div className="border-b border-white/10 pb-6 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5" />
            Direct Support Desk
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Customer Support &amp; Inquiries
          </h1>
          <p className="text-xs text-slate-400">
            Assistance for order delivery, file formats, and licensing questions.
          </p>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl bg-[#0E1527] border border-white/10 p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Email Support</h2>
                <a
                  href={`mailto:${siteConfig.brand.supportEmail}`}
                  className="text-blue-400 text-base font-semibold hover:underline"
                >
                  {siteConfig.brand.supportEmail}
                </a>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed pt-2">
              Please include your <strong>Order Confirmation Number</strong> or the email address used during checkout so our team can immediately look up your download credentials.
            </p>

            <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-slate-400">
              <Clock className="w-4 h-4 text-slate-400" />
              <span>Standard Response Time: Under 24 Business Hours (Monday – Friday)</span>
            </div>
          </div>
        </div>

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
