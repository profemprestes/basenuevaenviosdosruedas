'use client';

import React, { useState } from 'react';
import { X, MapPin, Zap, ArrowRight, CheckCircle, Calculator, Package, MessageCircle } from 'lucide-react';

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
  const [origin, setOrigin] = useState('Centro / Macrocentro');
  const [destination, setDestination] = useState('Güemes / Playa Grande');
  const [service, setService] = useState(preselectedService || 'express');
  const [weight, setWeight] = useState('standard');
  const [needsCashCollection, setNeedsCashCollection] = useState(false);

  if (!isOpen) return null;

  const zones = [
    { id: 'centro', name: 'Centro / Macrocentro', tier: 1 },
    { id: 'guemes', name: 'Güemes / Playa Grande / Varese', tier: 1 },
    { id: 'la-perla', name: 'La Perla / Pompeya', tier: 1 },
    { id: 'constitucion', name: 'Constitución / Los Pinares', tier: 2 },
    { id: 'puerto', name: 'Puerto / Punta Mogotes', tier: 2 },
    { id: 'champagnat', name: 'Av. Champagnat / Libertad', tier: 2 },
    { id: 'troncos', name: 'Los Troncos / San Carlos', tier: 1 },
    { id: 'bosque', name: 'Bosque Peralta Ramos / Alfar', tier: 3 },
    { id: 'batan', name: 'Batán / Parque Industrial', tier: 3 },
    { id: 'camet', name: 'Camet / Parque Camet', tier: 3 },
    { id: 'sierra', name: 'Sierra de los Padres', tier: 4 },
  ];

  // Calculate pricing based on zones and service
  const originZone = zones.find((z) => z.name === origin) || zones[0];
  const destZone = zones.find((z) => z.name === destination) || zones[1];

  const zoneDistanceDiff = Math.abs(originZone.tier - destZone.tier);

  let basePrice = 3700; // Base rate in ARS
  if (service === 'lowcost') basePrice = 3000;
  if (service === 'flex') basePrice = 3500;
  if (service === '3pl') basePrice = 4200;

  const distanceCharge = zoneDistanceDiff * 800;
  const weightCharge = weight === 'heavy' ? 1200 : weight === 'medium' ? 600 : 0;
  const cashCharge = needsCashCollection ? 400 : 0;

  const totalPrice = basePrice + distanceCharge + weightCharge + cashCharge;

  const handleSendWhatsApp = () => {
    const text = `Hola Envíos DosRuedas! 🛵 Quiero solicitar una cotización/despacho en Mar del Plata:
• Origen: ${origin}
• Destino: ${destination}
• Servicio: ${service.toUpperCase()}
• Peso: ${weight === 'light' ? 'Hasta 2kg' : weight === 'medium' ? '2 a 5kg' : '5 a 10kg'}
• Cobro contrareembolso: ${needsCashCollection ? 'Sí' : 'No'}
• Tarifa estimada: $${totalPrice.toLocaleString('es-AR')}
¿Tienen disponibilidad para coordinar retiro?`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/5492236602699?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
      <div className="w-full max-w-xl bg-white rounded-[32px] border border-slate-200 shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-[#0950F6] p-6 text-white flex items-center justify-between relative bg-tech-grid">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#ffcc00] flex items-center justify-center text-[#002273] shadow">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bebas text-xs tracking-widest uppercase text-[#ffcc00] block">
                COTIZADOR ONLINE EN TIEMPO REAL
              </span>
              <h3 className="font-anton uppercase text-2xl tracking-tight text-white">
                COTIZÁ TU ENVÍO EN MAR DEL PLATA
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-blue-900/60 hover:bg-blue-800 text-white flex items-center justify-center transition"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          
          {/* Service Selector */}
          <div>
            <label className="block font-bebas text-[#002273] text-sm tracking-wider uppercase mb-2">
              TIPO DE SERVICIO
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setService('express')}
                className={`p-3 rounded-2xl border text-center transition font-bebas text-sm uppercase ${
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
                className={`p-3 rounded-2xl border text-center transition font-bebas text-sm uppercase ${
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
                className={`p-3 rounded-2xl border text-center transition font-bebas text-sm uppercase ${
                  service === 'lowcost'
                    ? 'bg-[#00277e] text-[#ffcc00] border-[#00277e] shadow'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span>LOWCOST BATCH</span>
              </button>
            </div>
          </div>

          {/* Origin & Destination Selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bebas text-[#002273] text-sm tracking-wider uppercase mb-1.5 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#0950F6]" />
                <span>ZONA DE RETIRO (ORIGEN)</span>
              </label>
              <select
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                className="w-full p-3 rounded-2xl bg-slate-50 border border-slate-200 font-outfit text-sm text-slate-800 focus:ring-2 focus:ring-[#0950F6] focus:outline-none"
              >
                {zones.map((z) => (
                  <option key={z.id} value={z.name}>{z.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-bebas text-[#002273] text-sm tracking-wider uppercase mb-1.5 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#ffcc00]" />
                <span>ZONA DE ENTREGA (DESTINO)</span>
              </label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full p-3 rounded-2xl bg-slate-50 border border-slate-200 font-outfit text-sm text-slate-800 focus:ring-2 focus:ring-[#0950F6] focus:outline-none"
              >
                {zones.map((z) => (
                  <option key={z.id} value={z.name}>{z.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Weight */}
          <div>
            <label className="block font-bebas text-[#002273] text-sm tracking-wider uppercase mb-1.5 flex items-center gap-1">
              <Package className="w-3.5 h-3.5 text-[#0950F6]" />
              <span>TAMAÑO / PESO APROXIMADO</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setWeight('light')}
                className={`p-2.5 rounded-xl border text-center font-outfit text-xs font-semibold ${
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
                className={`p-2.5 rounded-xl border text-center font-outfit text-xs font-semibold ${
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
                className={`p-2.5 rounded-xl border text-center font-outfit text-xs font-semibold ${
                  weight === 'heavy'
                    ? 'bg-blue-50 border-[#0950F6] text-[#0950F6]'
                    : 'bg-white border-slate-200 text-slate-600'
                }`}
              >
                5 a 10 kg (Bulto grande)
              </button>
            </div>
          </div>

          {/* Extra: Cobro contra entrega */}
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200">
            <input
              type="checkbox"
              id="cash"
              checked={needsCashCollection}
              onChange={(e) => setNeedsCashCollection(e.target.checked)}
              className="w-4 h-4 text-[#0950F6] rounded focus:ring-[#0950F6] cursor-pointer"
            />
            <label htmlFor="cash" className="font-outfit text-xs sm:text-sm text-slate-700 cursor-pointer">
              Requiere cobranza en efectivo / contraentrega al comprador (rendición en el día)
            </label>
          </div>

          {/* Pricing Result Card */}
          <div className="p-4 rounded-2xl bg-[#00277e] text-white flex items-center justify-between border border-blue-400/30 shadow-lg">
            <div>
              <span className="font-bebas text-xs tracking-wider uppercase text-blue-200">
                TARIFA ESTIMADA TRANSPARENTE
              </span>
              <div className="font-anton text-3xl sm:text-4xl text-[#ffcc00] leading-none mt-0.5">
                ${totalPrice.toLocaleString('es-AR')}
                <span className="text-xs text-blue-200 font-outfit font-normal ml-1.5">ARS</span>
              </div>
            </div>

            <div className="text-right text-xs font-outfit text-blue-200">
              <span className="block font-semibold text-emerald-400">✓ Flota propia</span>
              <span>Friuli 1972 · MDQ</span>
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-3 rounded-full text-slate-600 hover:bg-slate-200 font-bebas text-base uppercase"
          >
            VOLVER
          </button>

          <button
            type="button"
            onClick={handleSendWhatsApp}
            className="w-full sm:flex-1 py-3.5 rounded-full bg-[#ffcc00] hover:bg-[#ffd633] text-[#002273] font-bebas text-xl tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg glow-yellow font-bold cursor-pointer transition-all"
          >
            <span>PEDIR MOTO POR WHATSAPP</span>
            <MessageCircle className="w-5 h-5 fill-[#002273]" />
          </button>
        </div>

      </div>
    </div>
  );
}
