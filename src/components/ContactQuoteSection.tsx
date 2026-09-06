'use client';

import React from 'react';
import { User, Store, Package, MessageCircle, Clock, CheckCircle, Sparkles } from 'lucide-react';
import { useContactForm } from '@/hooks/useContactForm';

export default function ContactQuoteSection() {
  const { name, setName, business, setBusiness, volume, setVolume, submitted, handleSubmit } =
    useContactForm();

  return (
    <section
      id="contacto"
      aria-label="Contacto y cotización inmediata"
      className="w-full py-20 lg:py-28 bg-[#0C59F2] bg-tech-grid relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full bg-white rounded-[36px] p-8 sm:p-12 lg:p-16 shadow-2xl border-4 border-blue-400/20 bg-light-grid relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Heading & Information */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#F2E40A] text-[#002273] shadow-sm mb-6">
                <Sparkles className="w-3.5 h-3.5 fill-[#002273] text-[#002273]" aria-hidden="true" />
                <span className="font-bebas text-sm tracking-wider uppercase font-bold">
                  COTIZACIÓN INMEDIATA
                </span>
              </div>

              <h2 className="font-anton uppercase text-[#0C59F2] text-4xl sm:text-5xl lg:text-[58px] leading-[0.98] tracking-tight mb-6">
                ¿LISTO PARA ESCALAR LA LOGÍSTICA DE TU E-COMMERCE?
              </h2>

              <p className="font-outfit text-slate-600 text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
                Olvidate de la gestión de paquetes en Mar del Plata. Completá tus datos y te respondemos por WhatsApp al instante.
              </p>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 border border-blue-200 text-[#0C59F2]">
                <Clock className="w-4 h-4 text-[#0C59F2]" aria-hidden="true" />
                <span className="font-bebas text-sm sm:text-base tracking-wider uppercase">
                  ATENCIÓN COMERCIAL &lt; 2 MIN
                </span>
              </div>
            </div>

            {/* Right Column: Form Container */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-[32px] p-6 sm:p-9 border border-slate-200 shadow-xl relative">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Field 1: Tu Nombre */}
                  <div>
                    <label
                      htmlFor="contact-name-input"
                      className="block font-bebas text-[#0C59F2] text-sm tracking-wider uppercase mb-2"
                    >
                      TU NOMBRE
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-5 h-5 text-[#0C59F2]" aria-hidden="true" />
                      </div>
                      <input
                        id="contact-name-input"
                        type="text"
                        required
                        aria-required="true"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ingresá tu nombre"
                        className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-50/70 border border-slate-200 text-slate-900 font-outfit text-base placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0C59F2] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Field 2: Empresa / Negocio */}
                  <div>
                    <label
                      htmlFor="contact-business-input"
                      className="block font-bebas text-[#0C59F2] text-sm tracking-wider uppercase mb-2"
                    >
                      EMPRESA / NEGOCIO
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Store className="w-5 h-5 text-[#0C59F2]" aria-hidden="true" />
                      </div>
                      <input
                        id="contact-business-input"
                        type="text"
                        required
                        aria-required="true"
                        value={business}
                        onChange={(e) => setBusiness(e.target.value)}
                        placeholder="Nombre de tu emprendimiento"
                        className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-50/70 border border-slate-200 text-slate-900 font-outfit text-base placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0C59F2] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Field 3: Volumen Estimado Mensual */}
                  <div>
                    <label
                      htmlFor="contact-volume-select"
                      className="block font-bebas text-[#0C59F2] text-sm tracking-wider uppercase mb-2"
                    >
                      VOLUMEN ESTIMADO MENSUAL
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Package className="w-5 h-5 text-[#0C59F2]" aria-hidden="true" />
                      </div>
                      <select
                        id="contact-volume-select"
                        required
                        aria-required="true"
                        value={volume}
                        onChange={(e) => setVolume(e.target.value)}
                        className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-50/70 border border-slate-200 text-slate-900 font-outfit text-base focus:outline-none focus:ring-2 focus:ring-[#0C59F2] focus:border-transparent transition-all appearance-none cursor-pointer"
                      >
                        <option value="" disabled>
                          Seleccioná una opción
                        </option>
                        <option value="1 a 30 envíos/mes (Emprendedor inicial)">
                          1 a 30 envíos/mes (Emprendedor inicial)
                        </option>
                        <option value="30 a 100 envíos/mes (Comercio en crecimiento)">
                          30 a 100 envíos/mes (Comercio en crecimiento)
                        </option>
                        <option value="100 a 300 envíos/mes (MercadoLibre Flex activo)">
                          100 a 300 envíos/mes (MercadoLibre Flex activo)
                        </option>
                        <option value="+300 envíos/mes (Corporativo / Gran volumen)">
                          +300 envíos/mes (Corporativo / Gran volumen)
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-full bg-[#F2E40A] hover:bg-[#faee28] text-[#002273] font-bebas text-xl sm:text-2xl tracking-wider uppercase transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-xl glow-yellow font-bold flex items-center justify-center gap-3 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#002273]"
                    >
                      <span>HABLAR POR WHATSAPP</span>
                      <MessageCircle className="w-5 h-5 stroke-[2.5]" aria-hidden="true" />
                    </button>
                  </div>
                </form>

                {submitted && (
                  <div
                    aria-live="polite"
                    className="mt-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2 text-emerald-800 text-xs font-outfit"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" aria-hidden="true" />
                    <span>¡Listo! Abriendo WhatsApp con tus datos para atenderte en menos de 2 minutos.</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
