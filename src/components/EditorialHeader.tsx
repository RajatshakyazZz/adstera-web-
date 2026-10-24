"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Newspaper, Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export function EditorialHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#070B14]/95 backdrop-blur-md border-b border-white/10 shadow-lg">
      {/* Top Editorial Bar */}
      <div className="hidden sm:block border-b border-white/5 bg-[#05080E] text-[11px] text-slate-400 py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-slate-300">CreatorPulse Journal</span>
            <span className="text-slate-600">•</span>
            <span>Independent Digital Media &amp; Creator Economy Review</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>{siteConfig.publication.issueDate}</span>
            <span className="text-slate-600">•</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Verified Asset Review
            </span>
          </div>
        </div>
      </div>

      {/* Main Masthead Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
            <Newspaper className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center gap-2">
              CREATOR<span className="text-blue-400">PULSE</span>
              <span className="text-[10px] font-bold uppercase tracking-widest bg-blue-500/10 text-blue-400 border border-blue-500/25 px-1.5 py-0.5 rounded">
                REVIEW
              </span>
            </span>
            <span className="text-[10px] text-slate-400 hidden sm:block tracking-wide uppercase">
              Creator Tools &amp; Asset Benchmark
            </span>
          </div>
        </Link>

        {/* Editorial Topics */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-slate-300">
          <a href="#overview" className="hover:text-blue-400 transition-colors">
            Quick Verdict
          </a>
          <a href="#whats-inside" className="hover:text-blue-400 transition-colors">
            Included Packs
          </a>
          <a href="#sample-gallery" className="hover:text-blue-400 transition-colors">
            File Inspection
          </a>
          <a href="#comparison" className="hover:text-blue-400 transition-colors">
            Cost Benchmark
          </a>
          <a href="#faq" className="hover:text-blue-400 transition-colors">
            FAQ
          </a>
        </nav>

        {/* CTA in Header */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#verdict"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-wide shadow-md shadow-blue-500/20 transition-all hover:-translate-y-0.5"
          >
            <span>Jump to Verdict</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation"
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0E1A] border-b border-white/10 px-4 py-4 space-y-3 shadow-2xl animate-fade-in">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 pb-1 border-b border-white/5">
            Review Navigation
          </div>
          <div className="flex flex-col space-y-1 text-sm font-medium text-slate-200">
            <a
              href="#overview"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-800"
            >
              Executive Summary &amp; Score
            </a>
            <a
              href="#whats-inside"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-800"
            >
              What&apos;s Inside the 130+ Folders
            </a>
            <a
              href="#sample-gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-800"
            >
              Visual Sample Gallery
            </a>
            <a
              href="#comparison"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-800"
            >
              Price vs Stock Subscriptions
            </a>
            <a
              href="#verdict"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-800"
            >
              Final Verdict &amp; Official Link
            </a>
          </div>
          <div className="pt-2 border-t border-white/10">
            <a
              href="#verdict"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-xs shadow-md"
            >
              <span>Get Official Bundle ({siteConfig.product.priceUsd})</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
