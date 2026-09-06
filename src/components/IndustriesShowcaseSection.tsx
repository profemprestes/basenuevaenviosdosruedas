'use client';

import React, { useState } from 'react';
import {
  ShoppingBag,
  Wrench,
  Shirt,
  FileText,
  ClipboardCheck,
  Package,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { INDUSTRIES_CONTENT } from '@/content/home';

interface IndustriesShowcaseSectionProps {
  onOpenQuoteModal: (industryName?: string) => void;
}

const ICON_MAP = {
  ShoppingBag,
  Wrench,
  Shirt,
  FileText,
  ClipboardCheck,
  Package,
};

export default function IndustriesShowcaseSection({ onOpenQuoteModal }: IndustriesShowcaseSectionProps) {
  const [selectedTab, setSelectedTab] = useState(4); // 4 = INSUMOS MÉDICOS (5 / 6)

  const content = INDUSTRIES_CONTENT;
  const industries = content.industries;
  const current = industries[selectedTab];
  const CurrentIcon = ICON_MAP[current.iconName] || Package;

  const handlePrev = () => {
    setSelectedTab((prev) => (prev - 1 + industries.length) % industries.length);
  };

  const handleNext = () => {
    setSelectedTab((prev) => (prev + 1) % industries.length);
  };

  return (
    <section id="industrias" className="w-full py-20 lg:py-28 bg-[#FFFFFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header and Counter Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F2E40A] text-[#002273] shadow-sm mb-4">
              <Sparkles className="w-3.5 h-3.5 fill-[#002273] text-[#002273]" />
              <span className="font-bebas text-sm sm:text-base tracking-wider uppercase font-bold">
                {content.badge}
              </span>
            </div>

            <h2 className="font-anton uppercase text-[#0C59F2] text-4xl sm:text-5xl lg:text-[56px] leading-[1.0] tracking-tight mb-3">
              {content.title}
            </h2>

            <p className="font-outfit text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed">
              {content.description}
            </p>
          </div>

          {/* Counter + Controls */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <div className="px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[#002273] font-anton text-lg tracking-wider">
              {selectedTab + 1} / {industries.length}
            </div>

            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 flex items-center justify-center transition cursor-pointer shadow-sm"
              aria-label="Rubro anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-[#F2E40A] border border-[#F2E40A] text-[#002273] hover:bg-[#faee28] flex items-center justify-center transition cursor-pointer shadow-md glow-yellow"
              aria-label="Siguiente rubro"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10">
          {industries.map((ind, idx) => {
            const IconComp = ICON_MAP[ind.iconName] || Package;
            const isActive = idx === selectedTab;

            return (
              <button
                key={ind.id}
                onClick={() => setSelectedTab(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-bebas text-sm sm:text-base tracking-wider uppercase transition-all shadow-sm cursor-pointer ${
                  isActive
                    ? 'bg-[#00277e] text-white ring-2 ring-[#F2E40A] shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <IconComp className={`w-4 h-4 ${isActive ? 'text-[#F2E40A]' : 'text-slate-500'}`} />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Main Showcase Card */}
        <div className="w-full bg-[#00277e] rounded-[36px] p-8 sm:p-12 text-white border border-blue-400/30 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Box with Icon and SLA Pill */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 sm:p-8 rounded-3xl bg-[#001f66]/80 border border-blue-400/20 shadow-inner">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl border-2 border-[#F2E40A] bg-[#00174e] flex items-center justify-center mb-6 shadow-lg glow-yellow">
                <CurrentIcon className="w-12 h-12 text-[#F2E40A] stroke-[1.75]" />
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/90 border border-blue-400/30 text-blue-200 font-bebas text-xs sm:text-sm tracking-wider uppercase">
                <Clock className="w-3.5 h-3.5 text-[#F2E40A]" />
                <span>{current.sla}</span>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-8 flex flex-col">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="px-3.5 py-1 rounded-full bg-[#F2E40A] text-[#002273] font-bebas text-xs tracking-wider uppercase font-bold">
                  {current.badge1}
                </span>
                <span className="px-3.5 py-1 rounded-full bg-blue-900/80 border border-blue-400/30 text-blue-200 font-bebas text-xs tracking-wider uppercase">
                  {current.badge2}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-anton uppercase text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
                {current.title}
              </h3>

              {/* Description */}
              <p className="font-outfit text-blue-100 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
                {current.description}
              </p>

              {/* 3 Features with Checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                {current.features.map((feat, fIdx) => (
                  <div
                    key={fIdx}
                    className="flex items-center gap-2.5 p-3 rounded-2xl bg-blue-900/40 border border-blue-400/20"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#F2E40A] flex-shrink-0" />
                    <span className="font-outfit text-xs sm:text-sm text-blue-100 leading-tight">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-5 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenQuoteModal(current.name)}
                  className="flex items-center gap-2 px-7 py-3 rounded-full bg-[#F2E40A] hover:bg-[#faee28] text-[#002273] font-bebas text-xl tracking-wider uppercase transition-all transform hover:scale-[1.03] active:scale-[0.98] shadow-lg glow-yellow cursor-pointer"
                >
                  <span>{content.ctaComerciosText}</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>

                <button
                  type="button"
                  onClick={() => onOpenQuoteModal('Cuenta Corriente')}
                  className="inline-flex items-center gap-1.5 text-blue-200 hover:text-white font-bebas text-lg tracking-wider uppercase transition underline underline-offset-4 cursor-pointer"
                >
                  <span>{content.ctaCuentaCorrienteText}</span>
                  <ArrowRight className="w-4 h-4 stroke-[2]" />
                </button>
              </div>
            </div>
          </div>

          {/* Dots below card */}
          <div className="flex items-center justify-center gap-2 mt-8 pt-6 border-t border-blue-400/20">
            {industries.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => setSelectedTab(dotIdx)}
                className={`transition-all ${
                  dotIdx === selectedTab
                    ? 'w-8 h-2.5 rounded-full bg-[#F2E40A]'
                    : 'w-2.5 h-2.5 rounded-full bg-blue-300/40 hover:bg-blue-200'
                }`}
                aria-label={`Ir a pestaña ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
