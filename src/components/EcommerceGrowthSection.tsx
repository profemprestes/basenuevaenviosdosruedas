'use client';

import React from 'react';
import { Store, ShoppingBag, Building2, Check, ArrowRight } from 'lucide-react';
import { ECOMMERCE_GROWTH_CONTENT } from '@/content/home';
import { LOCAL_PARTNER_BRANDS } from '@/content/services';

interface EcommerceGrowthSectionProps {
  onOpenQuoteModal: () => void;
  onOpenFichaTecnica: () => void;
}

export default function EcommerceGrowthSection({
  onOpenQuoteModal,
  onOpenFichaTecnica,
}: EcommerceGrowthSectionProps) {
  const ec = ECOMMERCE_GROWTH_CONTENT;

  return (
    <section
      id="ecommerce"
      aria-label="Crecimiento para E-Commerce"
      className="w-full py-20 lg:py-28 bg-[#0C59F2] bg-tech-grid relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F2E40A]/20 border border-[#F2E40A] text-[#F2E40A] mb-4">
            <span className="font-bebas text-sm tracking-wider uppercase font-bold">
              {ec.badge}
            </span>
          </div>

          <h2 className="font-anton uppercase text-white text-4xl sm:text-5xl lg:text-[60px] leading-[1.0] tracking-tight mb-4 flex flex-wrap items-center gap-x-3">
            <span>{ec.titlePrefix}</span>
            <span className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-[#F2E40A] text-[#002273] text-3xl sm:text-4xl lg:text-[46px] font-anton leading-none my-1">
              {ec.titlePill}
            </span>
            <span>{ec.titleSuffix}</span>
          </h2>

          <div className="w-20 h-1.5 bg-[#F2E40A] rounded-full mb-6" aria-hidden="true" />

          <p className="font-outfit text-base sm:text-lg text-blue-100/90 leading-relaxed">
            {ec.description}
          </p>
        </div>

        {/* Bento Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-20">
          {/* Left Column: Big E-commerce Card */}
          <article className="lg:col-span-6 bg-[#00277e]/90 border border-blue-400/30 rounded-[32px] p-7 sm:p-9 text-white shadow-2xl backdrop-blur-md flex flex-col justify-between relative overflow-hidden">
            <div
              className="absolute -bottom-10 -right-10 w-64 h-64 opacity-5 pointer-events-none"
              aria-hidden="true"
            >
              <Store className="w-full h-full text-white" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#F2E40A] flex items-center justify-center shadow-md">
                  <Store className="w-6 h-6 text-[#002273]" aria-hidden="true" />
                </div>
                <div className="px-3 py-1 rounded-full bg-blue-950 border border-blue-400/30 text-[#F2E40A] font-bebas text-xs tracking-wider uppercase">
                  {ec.mainCard.badge}
                </div>
              </div>

              <h3 className="font-anton uppercase text-white text-3xl sm:text-4xl tracking-tight mb-4">
                {ec.mainCard.title}
              </h3>

              <p className="font-outfit text-blue-100/90 text-base leading-relaxed mb-8">
                {ec.mainCard.description}
              </p>

              <ul className="space-y-4 mb-8">
                {ec.mainCard.benefits.map((b, bIdx) => (
                  <li key={bIdx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-lg bg-blue-600/50 border border-blue-400/40 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-[#F2E40A] stroke-[3]" aria-hidden="true" />
                    </div>
                    <span className="font-outfit text-sm sm:text-base text-blue-50 font-medium">
                      {b.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-blue-400/20">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#F2E40A] hover:bg-[#faee28] text-[#002273] font-bebas text-xl tracking-wider uppercase transition-all transform hover:scale-[1.03] shadow-lg glow-yellow cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#002273]"
              >
                <span>{ec.mainCard.ctaText}</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
              </button>
            </div>
          </article>

          {/* Right Column: 2 Cards */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <article className="bg-[#F2E40A] rounded-[32px] p-7 sm:p-8 text-[#002273] shadow-xl relative overflow-hidden flex flex-col justify-between group hover:scale-[1.01] transition-transform">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#002273] flex items-center justify-center text-white shadow">
                    <ShoppingBag className="w-6 h-6 text-[#F2E40A]" aria-hidden="true" />
                  </div>
                  <div className="px-3.5 py-1 rounded-full bg-[#002273] text-white font-bebas text-xs tracking-wider uppercase">
                    {ec.flexCard.badge}
                  </div>
                </div>

                <h3 className="font-anton uppercase text-[#002273] text-3xl sm:text-4xl tracking-tight mb-3">
                  {ec.flexCard.title}
                </h3>

                <p className="font-outfit text-[#002273]/85 text-base leading-relaxed mb-6">
                  {ec.flexCard.description}
                </p>
              </div>

              <div>
                <button
                  type="button"
                  onClick={onOpenFichaTecnica}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#002273] hover:bg-[#00174e] text-white font-bebas text-lg tracking-wider uppercase transition-all shadow-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F2E40A]"
                >
                  <span>{ec.flexCard.ctaText}</span>
                  <ArrowRight className="w-4 h-4 stroke-[2]" aria-hidden="true" />
                </button>
              </div>
            </article>

            <article className="bg-white rounded-[32px] p-7 sm:p-8 text-slate-900 shadow-xl border border-slate-200/90 flex flex-col justify-between group hover:scale-[1.01] transition-transform">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#F2E40A] flex items-center justify-center text-[#002273] shadow-sm">
                    <Building2 className="w-6 h-6 text-[#002273]" aria-hidden="true" />
                  </div>
                  <div className="px-3.5 py-1 rounded-full bg-blue-50 text-[#0C59F2] font-bebas text-xs tracking-wider uppercase border border-blue-200">
                    {ec.corporateCard.badge}
                  </div>
                </div>

                <h3 className="font-anton uppercase text-[#0C59F2] text-3xl sm:text-4xl tracking-tight mb-3">
                  {ec.corporateCard.title}
                </h3>

                <p className="font-outfit text-slate-600 text-base leading-relaxed mb-6">
                  {ec.corporateCard.description}
                </p>
              </div>

              <div>
                <button
                  type="button"
                  onClick={onOpenQuoteModal}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#F2E40A] hover:bg-[#faee28] text-[#002273] font-bebas text-lg tracking-wider uppercase transition-all shadow-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#002273]"
                >
                  <span>{ec.corporateCard.ctaText}</span>
                  <ArrowRight className="w-4 h-4 text-[#002273] stroke-[2]" aria-hidden="true" />
                </button>
              </div>
            </article>
          </div>
        </div>

        {/* Marquee Ticker: Marcas Locales */}
        <div className="pt-10 border-t border-blue-400/20 text-center">
          <p className="font-bebas text-blue-200 text-sm tracking-widest uppercase mb-6">
            {ec.brandsTickerTitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-70">
            {LOCAL_PARTNER_BRANDS.map((brand, index) => (
              <div
                key={index}
                className="font-anton text-white/80 hover:text-[#F2E40A] text-xl sm:text-2xl tracking-wider transition-colors select-none"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
