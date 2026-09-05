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

interface IndustriesShowcaseSectionProps {
  onOpenQuoteModal: (industryName?: string) => void;
}

export default function IndustriesShowcaseSection({ onOpenQuoteModal }: IndustriesShowcaseSectionProps) {
  const [selectedTab, setSelectedTab] = useState(4); // 4 = INSUMOS MÉDICOS (matches Image 4: "5 / 6")

  const industries = [
    {
      id: 'ecommerce',
      name: 'E-COMMERCE',
      icon: ShoppingBag,
      title: 'E-COMMERCE & TIENDAS ONLINE',
      badge1: 'TIEMPO RÉCORD',
      badge2: 'ENVÍOS SAME-DAY INTEGRADOS',
      sla: 'SLA: ENTREGAS MISMO DÍA',
      description:
        'Distribución de última milla para tiendas Shopify, Tiendanube, WooCommerce y MercadoLibre. Notificación inmediata a tus compradores.',
      features: [
        'Integración con plataformas e-commerce',
        'Retiros programados sin costo base',
        'Seguimiento por WhatsApp en tiempo real',
      ],
    },
    {
      id: 'repuestos',
      name: 'REPUESTOS',
      icon: Wrench,
      title: 'REPUESTOS & TALLERES MECÁNICOS',
      badge1: 'URGENCIA MECÁNICA',
      badge2: 'DESPACHO INMEDIATO < 45 MIN',
      sla: 'SLA: PRIORIDAD CRÍTICA',
      description:
        'Envío urgente de autopartes, repuestos para motos, baterías y herramental entre distribuidores, casas de repuestos y talleres de MDQ.',
      features: [
        'Cadetes capacitados para piezas frágiles',
        'Cobertura en zona Av. Champagnat y Juan B. Justo',
        'Cobro en destino contra entrega',
      ],
    },
    {
      id: 'moda',
      name: 'MODA, CALZADO',
      icon: Shirt,
      title: 'MODA, INDUMENTARIA & CALZADO',
      badge1: 'CUIDADO TEXTIL',
      badge2: 'CAMBIOS Y DEVOLUCIONES A DOMICILIO',
      sla: 'SLA: FRANJA HORARIA FLEXIBLE',
      description:
        'Traslado cuidadoso de prendas, calzado y accesorios de marcas locales. Gestión integral de cambios a domicilio sin fricción para el cliente.',
      features: [
        'Mochilas impermeables y protegidas',
        'Logística inversa y re-envíos rápidos',
        'Entregas en zonas comerciales y residenciales',
      ],
    },
    {
      id: 'tramites',
      name: 'TRÁMITES',
      icon: FileText,
      title: 'GESTIONES CORPORATIVAS & TRÁMITES',
      badge1: 'CONFIDENCIALIDAD',
      badge2: 'DOCUMENTACIÓN LEGAL & BANCARIA',
      sla: 'SLA: CUSTODIA FIRMADA',
      description:
        'Mensajería institucional para estudios jurídicos, contables, escribanías y empresas. Pago de impuestos, cheques y firmas certificadas.',
      features: [
        'Custodia digital con confirmación de firma',
        'Rendición de comprobantes en el día',
        'Facturación corporativa unificada',
      ],
    },
    {
      id: 'insumos-medicos',
      name: 'INSUMOS MÉDICOS',
      icon: ClipboardCheck,
      title: 'INSUMOS MÉDICOS & GASTRONÓMICOS',
      badge1: 'PUNTUALIDAD RIGUROSA',
      badge2: 'ENVÍOS PROGRAMADOS PARA COMERCIOS',
      sla: 'SLA: HORARIOS PROGRAMADOS',
      description:
        'Abastecimiento de insumos descartables, ópticas, laboratorios, cafeterías y locales gastronómicos que requieren cumplimiento horario riguroso.',
      features: [
        'Franjas pactadas de entrega',
        'Depósito central Friuli 1972',
        'Atención personalizada',
      ],
    },
    {
      id: 'encomiendas',
      name: 'ENCOMIENDAS',
      icon: Package,
      title: 'ENCOMIENDAS & LOGÍSTICA URBANA',
      badge1: 'VOLUMEN PROGRAMADO',
      badge2: 'RETIRO EN TERMINAL & DESPACHO',
      sla: 'SLA: CONEXIÓN INTERURBANA',
      description:
        'Retiro y despacho de encomiendas desde terminal de micros, empresas de transporte y depósitos de cargas hacia cualquier punto de Mar del Plata.',
      features: [
        'Gestión de guías y remitos oficiales',
        'Almacenamiento temporal en base central',
        'Capacidad combinada moto / utilitario',
      ],
    },
  ];

  const current = industries[selectedTab];

  const handlePrev = () => {
    setSelectedTab((prev) => (prev - 1 + industries.length) % industries.length);
  };

  const handleNext = () => {
    setSelectedTab((prev) => (prev + 1) % industries.length);
  };

  return (
    <section id="industrias" className="w-full py-20 lg:py-28 bg-[#fbf8ff] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header and Counter Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffcc00] text-[#002273] shadow-sm mb-4">
              <Sparkles className="w-3.5 h-3.5 fill-[#002273] text-[#002273]" />
              <span className="font-bebas text-sm sm:text-base tracking-wider uppercase font-bold">
                LOGÍSTICA A MEDIDA DE TU RUBRO · MDQ 2026
              </span>
            </div>

            <h2 className="font-anton uppercase text-[#002273] text-4xl sm:text-5xl lg:text-[56px] leading-[1.0] tracking-tight mb-3">
              SOLUCIONES ESPECIALES PARA INDUSTRIAS
            </h2>

            <p className="font-outfit text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed">
              Adaptamos nuestra flota propia de motos a la dinámica de tu negocio. Elegí tu sector y descubrí cómo optimizamos tus entregas urbanas.
            </p>
          </div>

          {/* Counter + Controls (Image 4: 5 / 6) */}
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
              className="w-10 h-10 rounded-full bg-[#ffcc00] border border-[#ffcc00] text-[#002273] hover:bg-[#ffd633] flex items-center justify-center transition cursor-pointer shadow-md glow-yellow"
              aria-label="Siguiente rubro"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Tab Filters (Image 4) */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10">
          {industries.map((ind, idx) => {
            const IconComp = ind.icon;
            const isActive = idx === selectedTab;

            return (
              <button
                key={ind.id}
                onClick={() => setSelectedTab(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-bebas text-sm sm:text-base tracking-wider uppercase transition-all shadow-sm cursor-pointer ${
                  isActive
                    ? 'bg-[#00277e] text-white ring-2 ring-[#ffcc00] shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <IconComp className={`w-4 h-4 ${isActive ? 'text-[#ffcc00]' : 'text-slate-500'}`} />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Main Showcase Card (Deep Blue with Yellow Highlights) */}
        <div className="w-full bg-[#00277e] rounded-[36px] p-8 sm:p-12 text-white border border-blue-400/30 shadow-2xl relative overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Box with Icon and SLA Pill */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 sm:p-8 rounded-3xl bg-[#001f66]/80 border border-blue-400/20 shadow-inner">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl border-2 border-[#ffcc00] bg-[#00174e] flex items-center justify-center mb-6 shadow-lg glow-yellow">
                <current.icon className="w-12 h-12 text-[#ffcc00] stroke-[1.75]" />
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/90 border border-blue-400/30 text-blue-200 font-bebas text-xs sm:text-sm tracking-wider uppercase">
                <Clock className="w-3.5 h-3.5 text-[#ffcc00]" />
                <span>{current.sla}</span>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-8 flex flex-col">
              
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="px-3.5 py-1 rounded-full bg-[#ffcc00] text-[#002273] font-bebas text-xs tracking-wider uppercase font-bold">
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
                    <CheckCircle2 className="w-4 h-4 text-[#ffcc00] flex-shrink-0" />
                    <span className="font-outfit text-xs sm:text-sm text-blue-100 leading-tight">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-5 pt-2">
                <button
                  onClick={() => onOpenQuoteModal(current.name)}
                  className="flex items-center gap-2 px-7 py-3 rounded-full bg-[#ffcc00] hover:bg-[#ffd633] text-[#002273] font-bebas text-xl tracking-wider uppercase transition-all transform hover:scale-[1.03] active:scale-[0.98] shadow-lg glow-yellow cursor-pointer"
                >
                  <span>CONOCER PLAN COMERCIOS</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>

                <button
                  onClick={() => onOpenQuoteModal('Cuenta Corriente')}
                  className="inline-flex items-center gap-1.5 text-blue-200 hover:text-white font-bebas text-lg tracking-wider uppercase transition underline underline-offset-4 cursor-pointer"
                >
                  <span>CONSULTAR CUENTA CORRIENTE COMERCIAL</span>
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
                onClick={() => setSelectedTab(dotIdx)}
                className={`transition-all ${
                  dotIdx === selectedTab
                    ? 'w-8 h-2.5 rounded-full bg-[#ffcc00]'
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
