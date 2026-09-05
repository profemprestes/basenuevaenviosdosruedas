'use client';

import React from 'react';
import { Store, ShoppingBag, Building2, Check, ArrowRight } from 'lucide-react';

interface EcommerceGrowthSectionProps {
  onOpenQuoteModal: () => void;
  onOpenFichaTecnica: () => void;
}

export default function EcommerceGrowthSection({
  onOpenQuoteModal,
  onOpenFichaTecnica,
}: EcommerceGrowthSectionProps) {
  const brands = [
    'OPIX 3D',
    'EL CÓNDOR',
    'STARCEL',
    'URBANCOW',
    'WANCA',
    'CATALINA INDUMENTARIA',
    'ENVASES 3G',
    'HAVANNA MDQ',
    'SURF SHOP GUEMES',
  ];

  return (
    <section id="ecommerce" className="w-full py-20 lg:py-28 bg-[#0950F6] bg-tech-grid relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#ffcc00]/20 border border-[#ffcc00] text-[#ffcc00] mb-4">
            <span className="font-bebas text-sm tracking-wider uppercase font-bold">
              SOCIO ESTRATÉGICO LOCAL
            </span>
          </div>

          <h2 className="font-anton uppercase text-white text-4xl sm:text-5xl lg:text-[60px] leading-[1.0] tracking-tight mb-4 flex flex-wrap items-center gap-x-3">
            <span>POTENCIAMOS TU</span>
            <span className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-[#ffcc00] text-[#002273] text-3xl sm:text-4xl lg:text-[46px] font-anton leading-none my-1">
              MDQ
            </span>
            <span>MARCA EN MAR DEL PLATA</span>
          </h2>

          {/* Yellow brand accent bar */}
          <div className="w-20 h-1.5 bg-[#ffcc00] rounded-full mb-6" />

          <p className="font-outfit text-base sm:text-lg text-blue-100/90 leading-relaxed">
            Si vendés online, necesitás un socio logístico que responda al toque. Creamos planes a tu medida 
            con tarifas dinámicas transparentes y recolección programada a domicilio en Mar del Plata.
          </p>
        </div>

        {/* Bento Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-20">
          
          {/* Left Column: Big E-commerce Card (lg:col-span-6) */}
          <div className="lg:col-span-6 bg-[#00277e]/90 border border-blue-400/30 rounded-[32px] p-7 sm:p-9 text-white shadow-2xl backdrop-blur-md flex flex-col justify-between relative overflow-hidden">
            
            {/* Background watermark badge */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 opacity-5 pointer-events-none">
              <Store className="w-full h-full text-white" />
            </div>

            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#ffcc00] flex items-center justify-center shadow-md">
                  <Store className="w-6 h-6 text-[#002273]" />
                </div>
                <div className="px-3 py-1 rounded-full bg-blue-950 border border-blue-400/30 text-[#ffcc00] font-bebas text-xs tracking-wider uppercase">
                  EMPRENDEDORES
                </div>
              </div>

              {/* Title */}
              <h3 className="font-anton uppercase text-white text-3xl sm:text-4xl tracking-tight mb-4">
                LOGÍSTICA E-COMMERCE
              </h3>

              <p className="font-outfit text-blue-100/90 text-base leading-relaxed mb-8">
                Gestión de última milla pensada para PyMEs y marcas locales. Optimizamos tus costos de envío
                con retiros programados a domicilio y soporte post-venta.
              </p>

              {/* Bullet points */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-lg bg-blue-600/50 border border-blue-400/40 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-[#ffcc00] stroke-[3]" />
                  </div>
                  <span className="font-outfit text-sm sm:text-base text-blue-50 font-medium">
                    Soporte comercial dedicado vía WhatsApp
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-lg bg-blue-600/50 border border-blue-400/40 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-[#ffcc00] stroke-[3]" />
                  </div>
                  <span className="font-outfit text-sm sm:text-base text-blue-50 font-medium">
                    Entregas contrareembolso integradas sin cargo extra
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-lg bg-blue-600/50 border border-blue-400/40 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-[#ffcc00] stroke-[3]" />
                  </div>
                  <span className="font-outfit text-sm sm:text-base text-blue-50 font-medium">
                    Rastreo digital transparente para tus clientes
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-blue-400/20">
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#ffcc00] hover:bg-[#ffd633] text-[#002273] font-bebas text-xl tracking-wider uppercase transition-all transform hover:scale-[1.03] shadow-lg glow-yellow cursor-pointer"
              >
                <span>CONOCER MÁS</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Right Column: 2 Cards (lg:col-span-6) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Top Right Card: Yellow Envíos Flex Meli */}
            <div className="bg-[#ffcc00] rounded-[32px] p-7 sm:p-8 text-[#002273] shadow-xl relative overflow-hidden flex flex-col justify-between group hover:scale-[1.01] transition-transform">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#002273] flex items-center justify-center text-white shadow">
                    <ShoppingBag className="w-6 h-6 text-[#ffcc00]" />
                  </div>
                  <div className="px-3.5 py-1 rounded-full bg-[#002273] text-white font-bebas text-xs tracking-wider uppercase">
                    MERCADOLIBRE
                  </div>
                </div>

                <h3 className="font-anton uppercase text-[#002273] text-3xl sm:text-4xl tracking-tight mb-3">
                  ENVÍOS FLEX MELI
                </h3>

                <p className="font-outfit text-[#002273]/85 text-base leading-relaxed mb-6">
                  Socio logístico homologado para tus envíos rápidos en el día. Recolección gratis en tu local 
                  y entrega garantizada dentro del SLA establecido.
                </p>
              </div>

              <div>
                <button
                  onClick={onOpenFichaTecnica}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#002273] hover:bg-[#00174e] text-white font-bebas text-lg tracking-wider uppercase transition-all shadow-md cursor-pointer"
                >
                  <span>CONFIGURAR FLEX</span>
                  <ArrowRight className="w-4 h-4 stroke-[2]" />
                </button>
              </div>
            </div>

            {/* Bottom Right Card: Soluciones Corporativas */}
            <div className="bg-white rounded-[32px] p-7 sm:p-8 text-slate-900 shadow-xl border border-slate-200/90 flex flex-col justify-between group hover:scale-[1.01] transition-transform">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#ffcc00] flex items-center justify-center text-[#002273] shadow-sm">
                    <Building2 className="w-6 h-6 text-[#002273]" />
                  </div>
                  <div className="px-3.5 py-1 rounded-full bg-blue-50 text-[#0950F6] font-bebas text-xs tracking-wider uppercase border border-blue-200">
                    CORPORATIVO
                  </div>
                </div>

                <h3 className="font-anton uppercase text-[#0950F6] text-3xl sm:text-4xl tracking-tight mb-3">
                  SOLUCIONES CORPORATIVAS
                </h3>

                <p className="font-outfit text-slate-600 text-base leading-relaxed mb-6">
                  Soporte a gran escala con facturación mensual, ruteos especiales para grandes volúmenes 
                  y entregas express coordinadas en Mar del Plata.
                </p>
              </div>

              <div>
                <button
                  onClick={onOpenQuoteModal}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#ffcc00] hover:bg-[#ffd633] text-[#002273] font-bebas text-lg tracking-wider uppercase transition-all shadow-md cursor-pointer"
                >
                  <span>ABRIR CUENTA CORRIENTE</span>
                  <ArrowRight className="w-4 h-4 text-[#002273] stroke-[2]" />
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Marquee Ticker: Marcas Locales Que Confían en Nosotros */}
        <div className="pt-10 border-t border-blue-400/20 text-center">
          <p className="font-bebas text-blue-200 text-sm tracking-widest uppercase mb-6">
            MARCAS LOCALES QUE CONFÍAN EN NOSOTROS
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-70">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="font-anton text-white/80 hover:text-[#ffcc00] text-xl sm:text-2xl tracking-wider transition-colors select-none"
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
