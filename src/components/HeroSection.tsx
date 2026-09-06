'use client';

import React from 'react';
import { ArrowRight, Package, MapPin, FastForward, Zap, ShieldCheck, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onOpenQuoteModal: () => void;
  onScrollToServices: () => void;
}

export default function HeroSection({ onOpenQuoteModal, onScrollToServices }: HeroSectionProps) {
  return (
    <section
      id="inicio"
      aria-label="Presentación principal"
      className="relative w-full bg-[#0C59F2] overflow-hidden pt-8 pb-16 lg:py-20 bg-tech-grid"
    >
      {/* Background radial gradient spotlight */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-400/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Giant faint watermark in background */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-5"
        aria-hidden="true"
      >
        <span className="font-anton text-[130px] lg:text-[210px] text-white tracking-widest whitespace-nowrap leading-none">
          ENVIOS DOSRUEDAS
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F2E40A] text-[#002273] shadow-md mb-6 animate-pulse">
              <Sparkles className="w-3.5 h-3.5 fill-[#002273] text-[#002273]" aria-hidden="true" />
              <span className="font-bebas text-sm sm:text-base tracking-wider uppercase font-bold">
                TU SOLUCIÓN CONFIABLE EN MAR DEL PLATA
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-anton uppercase text-white text-5xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[0.95] tracking-tight mb-5">
              MENSAJERÍA Y LOGÍSTICA
              <div className="mt-2 inline-block px-4 py-1.5 rounded-2xl border-[3px] border-[#F2E40A] bg-[#0736ad]/80 text-[#F2E40A] tracking-normal">
                E-COMMERCE
              </div>
              <span className="block mt-2">EN MAR DEL PLATA</span>
            </h1>

            {/* Subtitle */}
            <p className="font-outfit text-base sm:text-lg text-blue-100/90 max-w-2xl leading-relaxed mb-8">
              Somos tu partner estratégico en mensajería urbana, envíos en el día y delivery de última milla.
              Flota propia de motos, cero tercerización y respuesta inmediata.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#F2E40A] hover:bg-[#faee28] text-[#002273] font-bebas text-2xl tracking-wider uppercase transition-all transform hover:scale-[1.03] active:scale-[0.98] glow-yellow shadow-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#002273]"
                id="hero-btn-cotiza-express"
              >
                <span>COTIZÁ EXPRESS</span>
                <span className="w-7 h-7 rounded-full bg-[#002273]/15 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-[#002273] stroke-[2.5]" aria-hidden="true" />
                </span>
              </button>

              <button
                type="button"
                onClick={onScrollToServices}
                className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#032a87]/60 hover:bg-[#032a87] text-white border border-blue-300/30 font-bebas text-2xl tracking-wider uppercase transition-all transform hover:scale-[1.02] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F2E40A]"
                id="hero-btn-servicios"
              >
                <span>MIRÁ LOS SERVICIOS</span>
                <ArrowRight className="w-4 h-4 text-blue-200 stroke-[2]" aria-hidden="true" />
              </button>
            </div>

            {/* Bottom 3 Highlights */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 border-t border-blue-400/20 text-xs sm:text-sm">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-900/40 border border-blue-400/20 text-white font-bebas tracking-wide">
                <div className="w-6 h-6 rounded-lg bg-[#F2E40A]/20 flex items-center justify-center">
                  <Package className="w-3.5 h-3.5 text-[#F2E40A]" aria-hidden="true" />
                </div>
                <span>+50K ENVÍOS</span>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-900/40 border border-blue-400/20 text-white font-bebas tracking-wide">
                <div className="w-6 h-6 rounded-lg bg-[#F2E40A]/20 flex items-center justify-center">
                  <MapPin className="w-3.5 h-3.5 text-[#F2E40A]" aria-hidden="true" />
                </div>
                <span>COBERTURA TOTAL MDQ</span>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-900/40 border border-blue-400/20 text-white font-bebas tracking-wide">
                <div className="w-6 h-6 rounded-lg bg-[#F2E40A]/20 flex items-center justify-center">
                  <FastForward className="w-3.5 h-3.5 text-[#F2E40A]" aria-hidden="true" />
                </div>
                <span>ENTREGAS EN EL DÍA</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Dispatch Visual Card */}
          <div className="lg:col-span-5 flex justify-center z-10">
            <div className="w-full max-w-md bg-[#00277e]/90 border border-blue-400/30 rounded-[32px] p-4 sm:p-5 shadow-2xl backdrop-blur-md relative overflow-hidden group hover:border-blue-400/60 transition-all">
              {/* Card Header Bar */}
              <div className="flex items-center justify-between pb-3.5 border-b border-blue-400/20">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F2E40A] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#F2E40A]"></span>
                  </span>
                  <span className="font-bebas text-[#F2E40A] text-sm tracking-wider uppercase">
                    RUTEO ACTIVO · MDQ
                  </span>
                </div>

                <div className="px-3 py-1 rounded-full bg-blue-950/70 border border-blue-400/30 text-blue-200 font-mono-data text-xs tracking-wide">
                  Friuli 1972
                </div>
              </div>

              {/* 3D Isometric Route & Map Graphic */}
              <div className="relative my-4 rounded-2xl bg-[#02184a] border border-blue-500/20 p-4 h-64 sm:h-72 flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#0C59F2_1px,transparent_1px),linear-gradient(to_bottom,#0C59F2_1px,transparent_1px)] bg-[size:24px_24px]" />

                <svg
                  className="w-full h-full max-w-[280px] drop-shadow-2xl"
                  viewBox="0 0 300 240"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <polygon points="150,20 270,85 150,150 30,85" fill="#072b78" stroke="#1d4ed8" strokeWidth="1" />
                  <polygon points="30,85 150,150 150,195 30,130" fill="#041b4d" stroke="#1e3a8a" strokeWidth="1" />
                  <polygon points="270,85 150,150 150,195 270,130" fill="#052261" stroke="#1e3a8a" strokeWidth="1" />

                  <polygon points="80,75 110,60 110,95 80,110" fill="#1e40af" />
                  <polygon points="110,60 140,75 140,110 110,95" fill="#2563eb" />
                  <polygon points="80,75 110,60 140,75 110,90" fill="#3b82f6" />

                  <polygon points="160,75 190,60 190,105 160,120" fill="#1e40af" />
                  <polygon points="190,60 220,75 220,120 190,105" fill="#2563eb" />
                  <polygon points="160,75 190,60 220,75 190,90" fill="#60a5fa" />

                  <polygon points="120,115 150,100 150,140 120,155" fill="#1e3a8a" />
                  <polygon points="150,100 180,115 180,155 150,140" fill="#1d4ed8" />
                  <polygon points="120,115 150,100 180,115 150,130" fill="#3b82f6" />

                  <path
                    d="M 60 110 Q 110 135 150 120 T 230 115"
                    fill="none"
                    stroke="#F2E40A"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="animate-pulse"
                    filter="drop-shadow(0 0 8px #F2E40A)"
                  />
                  <path
                    d="M 150 120 L 150 160"
                    fill="none"
                    stroke="#F2E40A"
                    strokeWidth="3"
                    strokeDasharray="4 4"
                  />

                  <circle cx="110" cy="125" r="5" fill="#FFFFFF" stroke="#F2E40A" strokeWidth="2" />
                </svg>

                <div className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center">
                  <div className="w-24 h-28 bg-[#0a3594] border-4 border-[#3b82f6] rounded-[24px] shadow-2xl flex flex-col items-center justify-center p-2 relative">
                    <span className="text-[9px] font-extrabold text-blue-200 tracking-wider">ENVÍOS</span>
                    <span className="font-anton text-sm text-[#F2E40A] tracking-tight">DosRuedas</span>
                    <div className="flex gap-1 my-1">
                      <div className="w-4 h-4 rounded-full border border-[#F2E40A] flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#F2E40A]" />
                      </div>
                      <div className="w-4 h-4 rounded-full border border-[#F2E40A] flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#F2E40A]" />
                      </div>
                    </div>
                    <span className="text-[8px] font-mono-data text-blue-300 font-bold">MDQ</span>

                    <div className="absolute -bottom-2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-[#3b82f6]" />
                  </div>
                </div>

                <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded-lg bg-[#001742]/90 border border-[#F2E40A]/40 text-[#F2E40A] font-mono-data text-[11px] flex items-center gap-1.5 shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>Cadete #09 · Güemes → Batán</span>
                </div>
              </div>

              {/* Bottom Mini Status Cards */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#031d5b] border border-blue-400/20">
                  <div className="w-8 h-8 rounded-xl bg-[#F2E40A] flex items-center justify-center flex-shrink-0 shadow">
                    <Zap className="w-4 h-4 text-[#002273] fill-[#002273]" aria-hidden="true" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="font-bebas text-white text-sm tracking-wide leading-tight">ENVÍOS SAME-DAY</p>
                    <p className="font-outfit text-xs text-blue-200 truncate">Entrega en el Día</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#031d5b] border border-blue-400/20">
                  <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0 shadow">
                    <ShieldCheck className="w-4 h-4 text-white" aria-hidden="true" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="font-bebas text-white text-sm tracking-wide leading-tight">FLOTA PROPIA</p>
                    <p className="font-outfit text-xs text-blue-200 truncate">Cero Tercerización</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
