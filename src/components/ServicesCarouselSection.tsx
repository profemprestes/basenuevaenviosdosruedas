'use client';

import React, { useState, useEffect } from 'react';
import { Zap, ChevronLeft, ChevronRight, Truck, Info, Clock, DollarSign, Weight, ArrowRight } from 'lucide-react';

interface ServicesCarouselSectionProps {
  onOpenQuoteModal: (preselectedService?: string) => void;
  onOpenFichaTecnica: () => void;
}

export default function ServicesCarouselSection({
  onOpenQuoteModal,
  onOpenFichaTecnica,
}: ServicesCarouselSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(2); // Start at Envíos Flex (index 2) like in Image 8
  const [autoRotate, setAutoRotate] = useState(true);

  const services = [
    {
      id: 'express',
      title: 'ENVÍOS EXPRESS',
      badge: 'DIRECTO MDQ',
      location: 'PUNTO A PUNTO URBANO',
      description: 'Mensajería en moto con entregas inmediatas de alta prioridad en toda la ciudad de Mar del Plata.',
      isHighlight: false,
      pills: [
        { label: 'ENTREGA', value: '30-60 MIN' },
        { label: 'TARIFA', value: '$3.700 BASE' },
        { label: 'PESO', value: 'HASTA 5KG' },
      ],
      icon: Zap,
    },
    {
      id: 'lowcost',
      title: 'ENVÍOS LOWCOST',
      badge: 'ECONÓMICO',
      location: 'TODO GRAL. PUEYRREDÓN',
      description: 'Envíos económicos planificados con retiro y entrega agrupada para reducir costos de distribución.',
      isHighlight: false,
      pills: [
        { label: 'ENTREGA', value: 'SAME / NEXT DAY' },
        { label: 'TARIFA', value: '$3.000 BASE' },
        { label: 'PESO', value: 'HASTA 10KG' },
      ],
      icon: Clock,
    },
    {
      id: 'flex',
      title: 'ENVÍOS FLEX',
      badge: 'MERCADOLIBRE FLEX',
      location: 'MAR DEL PLATA Y BATÁN',
      description: 'Entregas en el día integradas para tus ventas de MercadoLibre con homologación oficial.',
      isHighlight: true, // Yellow standout card
      pills: [
        { label: 'ENTREGA', value: 'EN EL DÍA' },
        { label: 'TARIFA', value: 'ZONIFICADO LOCAL' },
        { label: 'PESO', value: 'APTO MOTO / AUTO' },
      ],
      icon: Truck,
    },
    {
      id: '3pl',
      title: 'ECOMMERCE & 3PL',
      badge: 'LOGÍSTICA INTEGRAL',
      location: 'DEPÓSITO FRIULI 1972',
      description: 'Logística integral para marcas: almacenamiento, preparación de pedidos (pick & pack) y distribución.',
      isHighlight: false,
      pills: [
        { label: 'ENTREGA', value: 'STOCK / PICK' },
        { label: 'TARIFA', value: 'PLANES A MEDIDA' },
        { label: 'PESO', value: 'SIN LÍMITE' },
      ],
      icon: DollarSign,
    },
  ];

  useEffect(() => {
    if (!autoRotate) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [autoRotate, services.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  return (
    <section id="servicios-carousel" className="w-full py-20 lg:py-28 bg-[#0950F6] bg-tech-grid relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header and Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-900/60 border border-blue-400/40 text-blue-200 mb-4">
              <span className="font-bebas text-sm tracking-wider uppercase font-bold text-white">
                NUESTROS SERVICIOS
              </span>
            </div>

            <h2 className="font-anton uppercase text-white text-4xl sm:text-5xl lg:text-[56px] leading-[1.0] tracking-tight">
              SOLUCIONES LOGÍSTICAS <span className="text-[#ffcc00] block sm:inline">A TU MEDIDA</span>
            </h2>
          </div>

          {/* Top Right Controls (Image 8) */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={() => setAutoRotate(!autoRotate)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-bebas text-sm tracking-wider uppercase transition-all shadow ${
                autoRotate
                  ? 'bg-[#ffcc00] text-[#002273] font-bold glow-yellow'
                  : 'bg-[#002273] text-blue-200 border border-blue-400/30'
              }`}
              title="Alternar rotación automática"
            >
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>ROTACIÓN AUTOMÁTICA</span>
            </button>

            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-[#002273] border border-blue-400/40 text-white hover:bg-blue-800 flex items-center justify-center transition cursor-pointer"
              aria-label="Anterior servicio"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-[#002273] border border-blue-400/40 text-white hover:bg-blue-800 flex items-center justify-center transition cursor-pointer"
              aria-label="Siguiente servicio"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Showcase Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {services.map((svc, idx) => {
              const isSelected = idx === currentIndex;
              const IconComp = svc.icon;

              if (svc.isHighlight) {
                // Yellow Standout Card (Envíos Flex Meli)
                return (
                  <div
                    key={svc.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`rounded-[32px] p-6 sm:p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 relative ${
                      isSelected
                        ? 'bg-[#ffcc00] text-[#002273] scale-105 shadow-2xl z-20 glow-yellow ring-4 ring-white/50'
                        : 'bg-[#ffd633]/90 text-[#002273] opacity-90 hover:opacity-100'
                    }`}
                  >
                    {/* Header */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-11 h-11 rounded-2xl bg-[#002273] text-[#ffcc00] flex items-center justify-center shadow">
                          <IconComp className="w-6 h-6" />
                        </div>
                        <div className="px-3 py-1 rounded-full bg-[#002273] text-white font-bebas text-xs tracking-wider uppercase">
                          {svc.badge}
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-mono-data uppercase tracking-wider text-[#002273]/80 mb-1">
                        <span>📍</span>
                        <span>{svc.location}</span>
                      </div>

                      <h3 className="font-anton uppercase text-[#002273] text-3xl sm:text-4xl tracking-tight mb-3">
                        {svc.title}
                      </h3>

                      <p className="font-outfit text-[#002273]/90 text-sm leading-relaxed mb-6">
                        {svc.description}
                      </p>

                      {/* 3 Metric Pills */}
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

                    {/* Ficha técnica & Cotizar Actions */}
                    <div className="pt-2 flex flex-col gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenFichaTecnica();
                        }}
                        className="flex items-center justify-center gap-1.5 text-xs font-bebas text-[#002273] hover:underline uppercase tracking-wider py-1"
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>MIRÁ LA FICHA TÉCNICA</span>
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenQuoteModal('flex');
                        }}
                        className="w-full py-2.5 rounded-full bg-[#002273] text-white font-bebas text-base tracking-wider uppercase flex items-center justify-center gap-1.5 shadow"
                      >
                        <span>COTIZAR FLEX</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              }

              // Standard Cards (Dark Blue Glass)
              return (
                <div
                  key={svc.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`rounded-[32px] p-6 sm:p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 relative border ${
                    isSelected
                      ? 'bg-[#002f9c] border-[#ffcc00] scale-102 shadow-2xl z-10 text-white'
                      : 'bg-[#002273]/80 border-blue-400/20 text-white hover:border-blue-400/40 hover:bg-[#002785]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-2xl bg-blue-600/50 border border-blue-400/30 flex items-center justify-center text-[#ffcc00]">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div className="px-3 py-1 rounded-full bg-blue-950 border border-blue-400/30 text-blue-200 font-bebas text-xs tracking-wider uppercase">
                        {svc.badge}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono-data uppercase tracking-wider text-blue-300 mb-1">
                      <span>📍</span>
                      <span>{svc.location}</span>
                    </div>

                    <h3 className="font-anton uppercase text-white text-2xl sm:text-3xl tracking-tight mb-3">
                      {svc.title}
                    </h3>

                    <p className="font-outfit text-blue-100/80 text-sm leading-relaxed mb-6">
                      {svc.description}
                    </p>

                    {/* 3 Metric Pills */}
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
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenQuoteModal(svc.id);
                      }}
                      className="w-full py-2.5 rounded-full bg-blue-600/50 hover:bg-[#ffcc00] hover:text-[#002273] text-white border border-blue-400/30 font-bebas text-base tracking-wider uppercase flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <span>COTIZAR ESTE PLAN</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {services.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentIndex(dotIdx)}
                className={`transition-all ${
                  dotIdx === currentIndex
                    ? 'w-8 h-2.5 rounded-full bg-[#ffcc00]'
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
