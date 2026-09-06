'use client';

import React, { useState, useEffect } from 'react';
import { Zap, ChevronLeft, ChevronRight, Truck, Info, Clock, DollarSign, ArrowRight } from 'lucide-react';
import { LOGISTICS_SERVICES, SERVICES_SECTION_CONTENT } from '@/content/services';

interface ServicesCarouselSectionProps {
  onOpenQuoteModal: (preselectedService?: string) => void;
  onOpenFichaTecnica: () => void;
}

const ICON_MAP = {
  express: Zap,
  lowcost: Clock,
  flex: Truck,
  '3pl': DollarSign,
};

export default function ServicesCarouselSection({
  onOpenQuoteModal,
  onOpenFichaTecnica,
}: ServicesCarouselSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(2); // Start at Envíos Flex (index 2)
  const [autoRotate, setAutoRotate] = useState(true);

  const content = SERVICES_SECTION_CONTENT;

  useEffect(() => {
    if (!autoRotate) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % LOGISTICS_SERVICES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [autoRotate]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + LOGISTICS_SERVICES.length) % LOGISTICS_SERVICES.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % LOGISTICS_SERVICES.length);
  };

  return (
    <section
      id="servicios-carousel"
      aria-label="Catálogo de servicios de mensajería"
      className="w-full py-20 lg:py-28 bg-[#0C59F2] bg-tech-grid relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header and Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-900/60 border border-blue-400/40 text-blue-200 mb-4">
              <span className="font-bebas text-sm tracking-wider uppercase font-bold text-white">
                {content.badge}
              </span>
            </div>

            <h2 className="font-anton uppercase text-white text-4xl sm:text-5xl lg:text-[56px] leading-[1.0] tracking-tight">
              {content.title} <span className="text-[#F2E40A] block sm:inline">{content.titleHighlight}</span>
            </h2>
          </div>

          {/* Top Right Controls */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              type="button"
              onClick={() => setAutoRotate(!autoRotate)}
              aria-pressed={autoRotate}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-bebas text-sm tracking-wider uppercase transition-all shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F2E40A] ${
                autoRotate
                  ? 'bg-[#F2E40A] text-[#002273] font-bold glow-yellow'
                  : 'bg-[#002273] text-blue-200 border border-blue-400/30'
              }`}
              title="Alternar rotación automática del carrusel"
            >
              <Zap className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
              <span>{content.autoRotateButtonLabel}</span>
            </button>

            <button
              type="button"
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-[#002273] border border-blue-400/40 text-white hover:bg-blue-800 flex items-center justify-center transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F2E40A]"
              aria-label="Servicio anterior"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-[#002273] border border-blue-400/40 text-white hover:bg-blue-800 flex items-center justify-center transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F2E40A]"
              aria-label="Siguiente servicio"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Carousel Showcase Grid */}
        <div
          className="relative"
          aria-roledescription="carousel"
          aria-label="Tarjetas de servicios logísticos"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch" aria-live="polite">
            {LOGISTICS_SERVICES.map((svc, idx) => {
              const isSelected = idx === currentIndex;
              const IconComp = ICON_MAP[svc.id as keyof typeof ICON_MAP] || Zap;

              if (svc.isHighlight) {
                return (
                  <article
                    key={svc.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`rounded-[32px] p-6 sm:p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 relative ${
                      isSelected
                        ? 'bg-[#F2E40A] text-[#002273] scale-105 shadow-2xl z-20 glow-yellow ring-4 ring-white/50'
                        : 'bg-[#F2E40A]/90 text-[#002273] opacity-90 hover:opacity-100'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-11 h-11 rounded-2xl bg-[#002273] text-[#F2E40A] flex items-center justify-center shadow">
                          <IconComp className="w-6 h-6" aria-hidden="true" />
                        </div>
                        <div className="px-3 py-1 rounded-full bg-[#002273] text-white font-bebas text-xs tracking-wider uppercase">
                          {svc.badge}
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-mono-data uppercase tracking-wider text-[#002273]/80 mb-1">
                        <span aria-hidden="true">📍</span>
                        <span>{svc.location}</span>
                      </div>

                      <h3 className="font-anton uppercase text-[#002273] text-3xl sm:text-4xl tracking-tight mb-3">
                        {svc.title}
                      </h3>

                      <p className="font-outfit text-[#002273]/90 text-sm leading-relaxed mb-6">
                        {svc.description}
                      </p>

                      <div className="grid grid-cols-3 gap-1.5 mb-6 text-center">
                        {svc.pills.map((pill, pIdx) => (
                          <div
                            key={pIdx}
                            className="p-2 rounded-xl bg-[#002273]/10 border border-[#002273]/20 flex flex-col items-center justify-center"
                          >
                            <span className="font-bebas text-[11px] uppercase tracking-tight text-[#002273] leading-tight">
                              {pill.value}
                            </span>
                            <span className="text-[9px] uppercase font-mono-data text-[#002273]/70">
                              {pill.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 flex flex-col gap-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenFichaTecnica();
                        }}
                        className="flex items-center justify-center gap-1.5 text-xs font-bebas text-[#002273] hover:underline uppercase tracking-wider py-1 cursor-pointer focus:outline-none"
                      >
                        <Info className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>MIRÁ LA FICHA TÉCNICA</span>
                      </button>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenQuoteModal('flex');
                        }}
                        className="w-full py-2.5 rounded-full bg-[#002273] text-white font-bebas text-base tracking-wider uppercase flex items-center justify-center gap-1.5 shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
                      >
                        <span>COTIZAR FLEX</span>
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                    </div>
                  </article>
                );
              }

              return (
                <article
                  key={svc.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`rounded-[32px] p-6 sm:p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 relative border ${
                    isSelected
                      ? 'bg-[#002f9c] border-[#F2E40A] scale-102 shadow-2xl z-10 text-white'
                      : 'bg-[#002273]/80 border-blue-400/20 text-white hover:border-blue-400/40 hover:bg-[#002785]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-2xl bg-blue-600/50 border border-blue-400/30 flex items-center justify-center text-[#F2E40A]">
                        <IconComp className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div className="px-3 py-1 rounded-full bg-blue-950 border border-blue-400/30 text-blue-200 font-bebas text-xs tracking-wider uppercase">
                        {svc.badge}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono-data uppercase tracking-wider text-blue-300 mb-1">
                      <span aria-hidden="true">📍</span>
                      <span>{svc.location}</span>
                    </div>

                    <h3 className="font-anton uppercase text-white text-2xl sm:text-3xl tracking-tight mb-3">
                      {svc.title}
                    </h3>

                    <p className="font-outfit text-blue-100/80 text-sm leading-relaxed mb-6">
                      {svc.description}
                    </p>

                    <div className="grid grid-cols-3 gap-1.5 mb-6 text-center">
                      {svc.pills.map((pill, pIdx) => (
                        <div
                          key={pIdx}
                          className="p-2 rounded-xl bg-blue-950/60 border border-blue-400/20 flex flex-col items-center justify-center"
                        >
                          <span className="font-bebas text-[11px] uppercase tracking-tight text-white leading-tight">
                            {pill.value}
                          </span>
                          <span className="text-[9px] uppercase font-mono-data text-blue-300">
                            {pill.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenQuoteModal(svc.id);
                      }}
                      className="w-full py-2.5 rounded-full bg-blue-600/50 hover:bg-[#F2E40A] hover:text-[#002273] text-white border border-blue-400/30 font-bebas text-base tracking-wider uppercase flex items-center justify-center gap-1.5 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F2E40A]"
                    >
                      <span>COTIZAR ESTE PLAN</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {LOGISTICS_SERVICES.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => setCurrentIndex(dotIdx)}
                className={`transition-all focus:outline-none cursor-pointer ${
                  dotIdx === currentIndex
                    ? 'w-8 h-2.5 rounded-full bg-[#F2E40A]'
                    : 'w-2.5 h-2.5 rounded-full bg-blue-300/40 hover:bg-blue-200'
                }`}
                aria-label={`Ir al servicio ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
