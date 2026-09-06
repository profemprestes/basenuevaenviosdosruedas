'use client';

import React from 'react';
import {
  ArrowUpRight,
  MessageCircle,
  Instagram,
  Facebook,
  ShieldCheck,
  Zap,
  TrendingDown,
  Clock,
  Package,
  MapPin,
  Phone,
  Mail,
  ArrowUp,
} from 'lucide-react';
import Logo from './Logo';

interface PreFooterAndFooterProps {
  onOpenQuoteModal: () => void;
}

export default function PreFooterAndFooter({ onOpenQuoteModal }: PreFooterAndFooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open(
      'https://wa.me/5492236602699?text=Hola%20Envíos%20DosRuedas!%20Quiero%20coordinar%20un%20envío%20en%20Mar%20del%20Plata.',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <footer className="w-full bg-[#002273] text-white relative pt-12 pb-8 bg-tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pre-Footer Banner Card (Image 6) */}
        <div className="w-full bg-[#00174e]/95 border border-blue-400/30 rounded-[32px] p-8 sm:p-10 mb-16 shadow-2xl relative overflow-hidden backdrop-blur-md">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-900/80 border border-blue-400/30 text-[#F2E40A] font-bebas text-xs tracking-wider uppercase mb-4">
                OPERACIONES ACTIVAS MAR DEL PLATA 2026
              </div>

              {/* Title */}
              <h3 className="font-anton uppercase text-3xl sm:text-4xl lg:text-[44px] leading-tight tracking-tight text-white mb-2">
                ¿TENÉS ENVÍOS PARA HOY? <span className="text-[#F2E40A]">LOS ENTREGAMOS A TIEMPO.</span>
              </h3>

              <p className="font-outfit text-blue-200 text-sm sm:text-base leading-relaxed">
                Cotizá online en segundos o coordiná directo con nuestro equipo logístico por WhatsApp.
              </p>
            </div>

            {/* Buttons on right */}
            <div className="flex flex-wrap items-center gap-4 flex-shrink-0">
              <button
                onClick={onOpenQuoteModal}
                className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#F2E40A] hover:bg-[#faee28] text-[#002273] font-bebas text-xl tracking-wider uppercase transition-all transform hover:scale-[1.03] active:scale-[0.98] shadow-xl glow-yellow font-bold cursor-pointer"
              >
                <span>COTIZÁ TU ENVÍO</span>
                <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
              </button>

              <button
                onClick={openWhatsApp}
                className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-blue-900/60 hover:bg-blue-800 text-white border border-blue-400/30 font-bebas text-xl tracking-wider uppercase transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#F2E40A]" />
                <span>CHATEÁ CON NOSOTROS</span>
              </button>
            </div>
          </div>
        </div>

        {/* Master Footer Content Grid (Image 6) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-blue-400/20">
          
          {/* Column 1: Brand info (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Logo size="lg" className="mb-2" />
            <span className="font-bebas text-xs tracking-widest text-[#F2E40A] uppercase mb-5">
              TU SOLUCIÓN CONFIABLE · MAR DEL PLATA
            </span>

            <p className="font-outfit text-blue-100/80 text-sm sm:text-base leading-relaxed mb-6 max-w-md">
              Con más de 7 años de trayectoria en Mar del Plata, transformamos el despacho de tus productos en un motor de crecimiento para emprendedores, PyMEs y comercios locales con flota propia y compromiso humano.
            </p>

            {/* Canales Oficiales */}
            <div>
              <p className="font-bebas text-xs tracking-widest text-blue-300 uppercase mb-3">
                CANALES OFICIALES
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-blue-900/60 border border-blue-400/30 hover:bg-[#F2E40A] hover:text-[#002273] text-white flex items-center justify-center transition"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-blue-900/60 border border-blue-400/30 hover:bg-[#F2E40A] hover:text-[#002273] text-white flex items-center justify-center transition"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>

                <button
                  onClick={openWhatsApp}
                  className="w-10 h-10 rounded-xl bg-[#F2E40A] text-[#002273] flex items-center justify-center transition shadow-md glow-yellow"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 fill-[#002273]" />
                </button>

                <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-blue-900/40 border border-blue-400/30 text-blue-100 font-bebas text-xs tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#F2E40A]" />
                  <span>Partner 3PL Verificado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Servicios y Cotizadores (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="font-anton uppercase text-[#F2E40A] text-xl tracking-wide mb-6">
              SERVICIOS Y COTIZADORES
            </h4>

            <ul className="space-y-4">
              <li>
                <button
                  onClick={onOpenQuoteModal}
                  className="flex items-center gap-2.5 text-blue-100 hover:text-[#F2E40A] font-outfit text-sm transition group"
                >
                  <Zap className="w-4 h-4 text-[#F2E40A] group-hover:scale-110 transition-transform" />
                  <span>Cotizador Express &lt; 2H</span>
                </button>
              </li>

              <li>
                <button
                  onClick={onOpenQuoteModal}
                  className="flex items-center gap-2.5 text-blue-100 hover:text-[#F2E40A] font-outfit text-sm transition group"
                >
                  <TrendingDown className="w-4 h-4 text-[#F2E40A] group-hover:scale-110 transition-transform" />
                  <span>Cotizador LowCost Batch</span>
                </button>
              </li>

              <li>
                <button
                  onClick={onOpenQuoteModal}
                  className="flex items-center gap-2.5 text-blue-100 hover:text-[#F2E40A] font-outfit text-sm transition group"
                >
                  <Clock className="w-4 h-4 text-[#F2E40A] group-hover:scale-110 transition-transform" />
                  <span>Mercado Envíos Flex</span>
                </button>
              </li>

              <li>
                <button
                  onClick={onOpenQuoteModal}
                  className="flex items-center gap-2.5 text-blue-100 hover:text-[#F2E40A] font-outfit text-sm transition group"
                >
                  <Package className="w-4 h-4 text-[#F2E40A] group-hover:scale-110 transition-transform" />
                  <span>E-Commerce &amp; 3PL</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Base de Operaciones MDQ (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col">
            <h4 className="font-anton uppercase text-[#F2E40A] text-xl tracking-wide mb-6">
              BASE DE OPERACIONES MDQ
            </h4>

            <div className="space-y-3.5 text-sm">
              {/* Centro de Distribución */}
              <div className="flex items-start gap-3 p-3 rounded-2xl bg-blue-900/40 border border-blue-400/20">
                <MapPin className="w-4 h-4 text-[#F2E40A] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bebas text-xs tracking-wider uppercase text-blue-300">
                    CENTRO DE DISTRIBUCIÓN
                  </p>
                  <p className="font-outfit text-white font-medium">
                    Friuli 1972, Mar del Plata
                  </p>
                </div>
              </div>

              {/* Línea directa */}
              <div className="flex items-start gap-3 p-3 rounded-2xl bg-blue-900/40 border border-blue-400/20">
                <Phone className="w-4 h-4 text-[#F2E40A] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bebas text-xs tracking-wider uppercase text-blue-300">
                    LÍNEA DIRECTA Y WHATSAPP
                  </p>
                  <a
                    href="tel:2236602699"
                    className="font-anton text-base text-white hover:text-[#F2E40A] transition"
                  >
                    +54 223 660-2699
                  </a>
                </div>
              </div>

              {/* Atención comercial */}
              <div className="flex items-start gap-3 p-3 rounded-2xl bg-blue-900/40 border border-blue-400/20">
                <Mail className="w-4 h-4 text-[#F2E40A] flex-shrink-0 mt-0.5" />
                <div className="overflow-hidden">
                  <p className="font-bebas text-xs tracking-wider uppercase text-blue-300">
                    ATENCIÓN COMERCIAL
                  </p>
                  <a
                    href="mailto:matiascejas@enviosdosruedas.com"
                    className="font-outfit text-white hover:text-[#F2E40A] transition text-xs sm:text-sm truncate block"
                  >
                    matiascejas@enviosdosruedas.com
                  </a>
                </div>
              </div>

              {/* Horarios */}
              <div className="flex items-start gap-3 p-3 rounded-2xl bg-blue-900/40 border border-blue-400/20">
                <Clock className="w-4 h-4 text-[#F2E40A] flex-shrink-0 mt-0.5" />
                <div className="w-full">
                  <p className="font-bebas text-xs tracking-wider uppercase text-blue-300 mb-1">
                    HORARIOS DE DESPACHO (BASE CENTRAL)
                  </p>
                  <div className="flex justify-between text-xs text-blue-100 font-mono-data">
                    <span>Lunes a Viernes:</span>
                    <span className="font-bold text-[#F2E40A]">09:00 - 18:00 hs</span>
                  </div>
                  <div className="flex justify-between text-xs text-blue-100 font-mono-data">
                    <span>Sábados:</span>
                    <span className="font-bold text-[#F2E40A]">10:00 - 15:00 hs</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-outfit text-blue-200">
          <div>
            <span className="font-semibold text-white">© 2026 Envíos DosRuedas</span> · Mar del Plata, Argentina.
            <span className="hidden sm:inline"> Sobre Nosotros · Preguntas Frecuentes · Nuestras Redes</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hover:text-white cursor-pointer">Términos y Condiciones</span>
            <span>·</span>
            <span className="hover:text-white cursor-pointer">Política de Privacidad</span>

            {/* Scroll to top yellow button (Image 6) */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-[#F2E40A] text-[#002273] flex items-center justify-center hover:bg-[#faee28] transition-all transform hover:scale-110 shadow-lg glow-yellow ml-2"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
