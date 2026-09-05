'use client';

import React from 'react';
import { X, CheckCircle2, Clock, ShieldCheck, Truck, MapPin, Package, FileText } from 'lucide-react';

interface FichaTecnicaModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuoteModal: () => void;
}

export default function FichaTecnicaModal({
  isOpen,
  onClose,
  onOpenQuoteModal,
}: FichaTecnicaModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
      <div className="w-full max-w-2xl bg-white rounded-[32px] border border-slate-200 shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-[#ffcc00] p-6 text-[#002273] flex items-center justify-between relative">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#002273] text-[#ffcc00] flex items-center justify-center shadow">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bebas text-xs tracking-widest uppercase text-[#002273]/80 block">
                ESPECIFICACIONES OPERATIVAS MDQ
              </span>
              <h3 className="font-anton uppercase text-2xl tracking-tight text-[#002273]">
                FICHA TÉCNICA · MERCADO ENVÍOS FLEX
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#002273]/10 hover:bg-[#002273]/20 text-[#002273] flex items-center justify-center transition cursor-pointer"
            aria-label="Cerrar ficha técnica"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Overview Banner */}
          <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 flex items-start gap-3.5">
            <ShieldCheck className="w-6 h-6 text-[#0950F6] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-anton uppercase text-[#0950F6] text-lg tracking-normal">
                SOCIO LOGÍSTICO HOMOLOGADO EN MAR DEL PLATA
              </h4>
              <p className="font-outfit text-slate-600 text-sm leading-relaxed mt-1">
                Servicio diseñado específicamente para sellers de MercadoLibre que requieren mantener su reputación en verde mediante entregas el mismo día cumpliendo el 100% del SLA.
              </p>
            </div>
          </div>

          {/* Key Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 text-[#0950F6] mb-1">
                <Clock className="w-4 h-4 text-[#ffcc00]" />
                <span className="font-bebas text-sm uppercase tracking-wide">HORARIO DE CORTE (CUT-OFF)</span>
              </div>
              <p className="font-anton text-2xl text-slate-800">14:00 HS</p>
              <p className="font-outfit text-xs text-slate-500 mt-1">
                Ventas concretadas hasta las 14:00 hs se entregan el mismo día antes de las 21:00 hs.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 text-[#0950F6] mb-1">
                <Truck className="w-4 h-4 text-[#ffcc00]" />
                <span className="font-bebas text-sm uppercase tracking-wide">RECOLECCIÓN EN LOCAL</span>
              </div>
              <p className="font-anton text-2xl text-slate-800">GRATIS</p>
              <p className="font-outfit text-xs text-slate-500 mt-1">
                Retiro diario programado en tu comercio o depósito sin costo adicional por colecta.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 text-[#0950F6] mb-1">
                <MapPin className="w-4 h-4 text-[#ffcc00]" />
                <span className="font-bebas text-sm uppercase tracking-wide">COBERTURA GEOGRÁFICA</span>
              </div>
              <p className="font-anton text-2xl text-slate-800">ZONA 1 Y 2</p>
              <p className="font-outfit text-xs text-slate-500 mt-1">
                Todo el radio urbano de Mar del Plata, Punta Mogotes, Puerto, Batán y Constitución.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 text-[#0950F6] mb-1">
                <Package className="w-4 h-4 text-[#ffcc00]" />
                <span className="font-bebas text-sm uppercase tracking-wide">LÍMITES DE PAQUETE</span>
              </div>
              <p className="font-anton text-2xl text-slate-800">HASTA 10 KG</p>
              <p className="font-outfit text-xs text-slate-500 mt-1">
                Dimensiones máximas aptas para mochilón térmico de moto (45 x 45 x 45 cm).
              </p>
            </div>

          </div>

          {/* Operational Commitments */}
          <div>
            <h5 className="font-bebas text-sm text-[#002273] uppercase tracking-wider mb-3">
              COMPROMISOS DE CALIDAD &amp; CUSTODIA
            </h5>
            <ul className="space-y-2.5 font-outfit text-sm text-slate-700">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Escaneo en el punto de retiro y confirmación digital en el acto de entrega.</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Reintento de entrega al día siguiente sin cargo en caso de destinatario ausente.</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Canal directo de soporte con el operador logístico en base central Friuli 1972.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer actions */}
        <div className="p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full text-slate-600 hover:bg-slate-200 font-bebas text-base uppercase"
          >
            CERRAR
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenQuoteModal();
            }}
            className="w-full sm:flex-1 py-3.5 rounded-full bg-[#ffcc00] hover:bg-[#ffd633] text-[#002273] font-bebas text-xl tracking-wider uppercase font-bold flex items-center justify-center gap-2 shadow-lg glow-yellow cursor-pointer"
          >
            <span>CONFIGURAR MI CUENTA FLEX</span>
          </button>
        </div>

      </div>
    </div>
  );
}
