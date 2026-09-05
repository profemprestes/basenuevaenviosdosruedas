'use client';

import React, { useEffect } from 'react';
import { X, MapPin, Calculator, Package, MessageCircle } from 'lucide-react';
import { useQuoteCalculator } from '@/hooks/useQuoteCalculator';
import { ServiceType, PackageWeight } from '@/types/quote';

interface ExpressQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export default function ExpressQuoteModal({
  isOpen,
  onClose,
  preselectedService,
}: ExpressQuoteModalProps) {
  const {
    origin,
    setOrigin,
    destination,
    setDestination,
    service,
    setService,
    weight,
    setWeight,
    needsCashCollection,
    setNeedsCashCollection,
    totalPrice,
    sendWhatsApp,
    zones,
  } = useQuoteCalculator(preselectedService);

  // Synchronize preselectedService when modal opens or prop changes
  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService as ServiceType);
    }
  }, [preselectedService, setService]);

  // Handle ESC key press for accessibility
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="express-modal-title"
        aria-describedby="express-modal-description"
        className="w-full max-w-xl bg-white rounded-[32px] border border-slate-200 shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <header className="bg-[#0950F6] p-6 text-white flex items-center justify-between relative bg-tech-grid">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#ffcc00] flex items-center justify-center text-[#002273] shadow">
              <Calculator className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <span className="font-bebas text-xs tracking-widest uppercase text-[#ffcc00] block">
                COTIZADOR ONLINE EN TIEMPO REAL
              </span>
              <h2
                id="express-modal-title"
                className="font-anton uppercase text-2xl tracking-tight text-white"
              >
                COTIZÁ TU ENVÍO EN MAR DEL PLATA
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-blue-900/60 hover:bg-blue-800 text-white flex items-center justify-center transition focus:outline-none focus:ring-2 focus:ring-[#ffcc00] cursor-pointer"
            aria-label="Cerrar modal de cotización"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </header>

        {/* Modal Body */}
        <div id="express-modal-description" className="p-6 overflow-y-auto space-y-5">
          {/* Service Selector */}
          <fieldset>
            <legend className="block font-bebas text-[#002273] text-sm tracking-wider uppercase mb-2">
              TIPO DE SERVICIO
            </legend>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setService('express')}
                aria-pressed={service === 'express'}
                className={`p-3 rounded-2xl border text-center transition font-bebas text-sm uppercase focus:outline-none focus:ring-2 focus:ring-[#0950F6] cursor-pointer ${
                  service === 'express'
                    ? 'bg-[#00277e] text-[#ffcc00] border-[#00277e] shadow'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span>EXPRESS &lt; 2H</span>
              </button>

              <button
                type="button"
                onClick={() => setService('flex')}
                aria-pressed={service === 'flex'}
                className={`p-3 rounded-2xl border text-center transition font-bebas text-sm uppercase focus:outline-none focus:ring-2 focus:ring-[#0950F6] cursor-pointer ${
                  service === 'flex'
                    ? 'bg-[#ffcc00] text-[#002273] border-[#ffcc00] shadow font-bold'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span>FLEX MELI</span>
              </button>

              <button
                type="button"
                onClick={() => setService('lowcost')}
                aria-pressed={service === 'lowcost'}
                className={`p-3 rounded-2xl border text-center transition font-bebas text-sm uppercase focus:outline-none focus:ring-2 focus:ring-[#0950F6] cursor-pointer ${
                  service === 'lowcost'
                    ? 'bg-[#00277e] text-[#ffcc00] border-[#00277e] shadow'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span>LOWCOST BATCH</span>
              </button>
            </div>
          </fieldset>

          {/* Origin & Destination Selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="origin-zone-select"
                className="block font-bebas text-[#002273] text-sm tracking-wider uppercase mb-1.5 flex items-center gap-1"
              >
                <MapPin className="w-3.5 h-3.5 text-[#0950F6]" aria-hidden="true" />
                <span>ZONA DE RETIRO (ORIGEN)</span>
              </label>
              <select
                id="origin-zone-select"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                className="w-full p-3 rounded-2xl bg-slate-50 border border-slate-200 font-outfit text-sm text-slate-800 focus:ring-2 focus:ring-[#0950F6] focus:outline-none cursor-pointer"
              >
                {zones.map((z) => (
                  <option key={z.id} value={z.name}>
                    {z.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="destination-zone-select"
                className="block font-bebas text-[#002273] text-sm tracking-wider uppercase mb-1.5 flex items-center gap-1"
              >
                <MapPin className="w-3.5 h-3.5 text-[#ffcc00]" aria-hidden="true" />
                <span>ZONA DE ENTREGA (DESTINO)</span>
              </label>
              <select
                id="destination-zone-select"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full p-3 rounded-2xl bg-slate-50 border border-slate-200 font-outfit text-sm text-slate-800 focus:ring-2 focus:ring-[#0950F6] focus:outline-none cursor-pointer"
              >
                {zones.map((z) => (
                  <option key={z.id} value={z.name}>
                    {z.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Weight Selection */}
          <fieldset>
            <legend className="block font-bebas text-[#002273] text-sm tracking-wider uppercase mb-1.5 flex items-center gap-1">
              <Package className="w-3.5 h-3.5 text-[#0950F6]" aria-hidden="true" />
              <span>TAMAÑO / PESO APROXIMADO</span>
            </legend>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setWeight('light')}
                aria-pressed={weight === 'light'}
                className={`p-2.5 rounded-xl border text-center font-outfit text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#0950F6] cursor-pointer ${
                  weight === 'light'
                    ? 'bg-blue-50 border-[#0950F6] text-[#0950F6]'
                    : 'bg-white border-slate-200 text-slate-600'
                }`}
              >
                Hasta 2 kg (Sobre/Caja chica)
              </button>
              <button
                type="button"
                onClick={() => setWeight('medium')}
                aria-pressed={weight === 'medium'}
                className={`p-2.5 rounded-xl border text-center font-outfit text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#0950F6] cursor-pointer ${
                  weight === 'medium'
                    ? 'bg-blue-50 border-[#0950F6] text-[#0950F6]'
                    : 'bg-white border-slate-200 text-slate-600'
                }`}
              >
                2 a 5 kg (Caja mediana)
              </button>
              <button
                type="button"
                onClick={() => setWeight('heavy')}
                aria-pressed={weight === 'heavy'}
                className={`p-2.5 rounded-xl border text-center font-outfit text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#0950F6] cursor-pointer ${
                  weight === 'heavy'
                    ? 'bg-blue-50 border-[#0950F6] text-[#0950F6]'
                    : 'bg-white border-slate-200 text-slate-600'
                }`}
              >
                5 a 10 kg (Bulto grande)
              </button>
            </div>
          </fieldset>

          {/* Extra: Cash collection */}
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200">
            <input
              type="checkbox"
              id="cash"
              checked={needsCashCollection}
              onChange={(e) => setNeedsCashCollection(e.target.checked)}
              className="w-4 h-4 text-[#0950F6] rounded focus:ring-[#0950F6] cursor-pointer"
            />
            <label
              htmlFor="cash"
              className="font-outfit text-xs sm:text-sm text-slate-700 cursor-pointer"
            >
              Requiere cobranza en efectivo / contraentrega al comprador (rendición en el día)
            </label>
          </div>

          {/* Pricing Result Card */}
          <div
            aria-live="polite"
            className="p-4 rounded-2xl bg-[#00277e] text-white flex items-center justify-between border border-blue-400/30 shadow-lg"
          >
            <div>
              <span className="font-bebas text-xs tracking-wider uppercase text-blue-200">
                TARIFA ESTIMADA TRANSPARENTE
              </span>
              <div className="font-anton text-3xl sm:text-4xl text-[#ffcc00] leading-none mt-0.5">
                ${totalPrice.toLocaleString('es-AR')}
                <span className="text-xs text-blue-200 font-outfit font-normal ml-1.5">
                  ARS
                </span>
              </div>
            </div>

            <div className="text-right text-xs font-outfit text-blue-200">
              <span className="block font-semibold text-emerald-400">✓ Flota propia</span>
              <span>Friuli 1972 · MDQ</span>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <footer className="p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-3 rounded-full text-slate-600 hover:bg-slate-200 font-bebas text-base uppercase focus:outline-none focus:ring-2 focus:ring-slate-400 cursor-pointer"
          >
            VOLVER
          </button>

          <button
            type="button"
            onClick={sendWhatsApp}
            className="w-full sm:flex-1 py-3.5 rounded-full bg-[#ffcc00] hover:bg-[#ffd633] text-[#002273] font-bebas text-xl tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg glow-yellow font-bold cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-[#002273]"
          >
            <span>PEDIR MOTO POR WHATSAPP</span>
            <MessageCircle className="w-5 h-5 fill-[#002273]" aria-hidden="true" />
          </button>
        </footer>
      </div>
    </div>
  );
}
