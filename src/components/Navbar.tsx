'use client';

import React, { useState } from 'react';
import { Home, Bike, Info, Mail, Phone, ArrowRight, Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export default function Navbar({ onOpenQuoteModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0950F6] border-b border-blue-400/20 backdrop-blur-sm transition-all shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo Left */}
        <a href="#inicio" onClick={(e) => { e.preventDefault(); scrollToSection('inicio'); }} className="cursor-pointer">
          <Logo size="md" />
        </a>

        {/* Desktop Navigation Center */}
        <nav className="hidden lg:flex items-center gap-2">
          {/* Inicio */}
          <button
            onClick={() => scrollToSection('inicio')}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#002f9e] text-[#ffcc00] font-bebas text-lg tracking-wider transition-all hover:bg-[#00257e]"
            id="nav-inicio"
          >
            <Home className="w-4 h-4 text-[#ffcc00]" />
            <span>INICIO</span>
          </button>

          {/* Servicios Dropdown */}
          <div className="relative">
            <button
              onClick={() => setServicesDropdown(!servicesDropdown)}
              onMouseEnter={() => setServicesDropdown(true)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-white hover:text-[#ffcc00] hover:bg-blue-600/30 font-bebas text-lg tracking-wider transition-all"
              id="nav-servicios"
            >
              <Bike className="w-4 h-4 text-white" />
              <span>SERVICIOS</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesDropdown ? 'rotate-180' : ''}`} />
            </button>

            {servicesDropdown && (
              <div
                onMouseLeave={() => setServicesDropdown(false)}
                className="absolute left-0 mt-1 w-64 bg-[#002273] border border-blue-400/30 rounded-2xl shadow-2xl p-2 text-white z-50 animate-in fade-in slide-in-from-top-2"
              >
                <button
                  onClick={() => scrollToSection('servicios-carousel')}
                  className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-blue-600/50 flex flex-col transition"
                >
                  <span className="font-bebas text-base text-[#ffcc00] tracking-wide">Envíos Flex MercadoLibre</span>
                  <span className="text-xs text-blue-200">Entregas en el día homologadas en MDQ</span>
                </button>
                <button
                  onClick={() => scrollToSection('servicios-carousel')}
                  className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-blue-600/50 flex flex-col transition"
                >
                  <span className="font-bebas text-base text-white tracking-wide">Envíos Express (&lt; 2h)</span>
                  <span className="text-xs text-blue-200">Mensajería prioritaria punto a punto</span>
                </button>
                <button
                  onClick={() => scrollToSection('industrias')}
                  className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-blue-600/50 flex flex-col transition"
                >
                  <span className="font-bebas text-base text-white tracking-wide">Logística para Industrias</span>
                  <span className="text-xs text-blue-200">Insumos médicos, repuestos, moda y más</span>
                </button>
                <button
                  onClick={() => scrollToSection('ecommerce')}
                  className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-blue-600/50 flex flex-col transition"
                >
                  <span className="font-bebas text-base text-white tracking-wide">E-commerce &amp; Corporativo</span>
                  <span className="text-xs text-blue-200">Cuentas corrientes y logística 3PL</span>
                </button>
              </div>
            )}
          </div>

          {/* Nosotros */}
          <button
            onClick={() => scrollToSection('nosotros')}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-white hover:text-[#ffcc00] hover:bg-blue-600/30 font-bebas text-lg tracking-wider transition-all"
            id="nav-nosotros"
          >
            <Info className="w-4 h-4 text-white" />
            <span>NOSOTROS</span>
          </button>

          {/* Contacto */}
          <button
            onClick={() => scrollToSection('contacto')}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-white hover:text-[#ffcc00] hover:bg-blue-600/30 font-bebas text-lg tracking-wider transition-all"
            id="nav-contacto"
          >
            <Mail className="w-4 h-4 text-white" />
            <span>CONTACTO</span>
          </button>
        </nav>

        {/* Right Action Items */}
        <div className="hidden md:flex items-center gap-5">
          {/* Phone Link */}
          <a
            href="tel:2236602699"
            className="flex items-center gap-2 text-white hover:text-[#ffcc00] font-anton text-lg tracking-wide transition group"
            title="Llamar a Envíos DosRuedas"
          >
            <Phone className="w-4 h-4 text-[#ffcc00] group-hover:scale-110 transition-transform" />
            <span>223 660-2699</span>
          </a>

          {/* Cotizá tu Envío CTA Button */}
          <button
            onClick={onOpenQuoteModal}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#ffcc00] hover:bg-[#ffd633] text-[#002273] font-bebas text-xl tracking-wider uppercase transition-all transform hover:scale-[1.03] active:scale-[0.98] glow-yellow font-normal"
            id="btn-nav-cotiza"
          >
            <span>COTIZÁ TU ENVÍO</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={onOpenQuoteModal}
            className="px-3.5 py-1.5 rounded-full bg-[#ffcc00] text-[#002273] font-bebas text-sm tracking-wider"
          >
            COTIZAR
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-[#ffcc00] rounded-lg focus:outline-none"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#002273] border-b border-blue-400/30 px-5 pt-3 pb-6 space-y-3">
          <button
            onClick={() => scrollToSection('inicio')}
            className="flex items-center gap-3 w-full py-2.5 text-left text-[#ffcc00] font-bebas text-xl border-b border-blue-800"
          >
            <Home className="w-5 h-5 text-[#ffcc00]" />
            <span>INICIO</span>
          </button>
          <button
            onClick={() => scrollToSection('servicios-carousel')}
            className="flex items-center gap-3 w-full py-2.5 text-left text-white font-bebas text-xl border-b border-blue-800"
          >
            <Bike className="w-5 h-5 text-[#ffcc00]" />
            <span>SERVICIOS Y TARIFAS</span>
          </button>
          <button
            onClick={() => scrollToSection('industrias')}
            className="flex items-center gap-3 w-full py-2.5 text-left text-white font-bebas text-xl border-b border-blue-800"
          >
            <Bike className="w-5 h-5 text-[#ffcc00]" />
            <span>SOLUCIONES POR INDUSTRIA</span>
          </button>
          <button
            onClick={() => scrollToSection('nosotros')}
            className="flex items-center gap-3 w-full py-2.5 text-left text-white font-bebas text-xl border-b border-blue-800"
          >
            <Info className="w-5 h-5 text-[#ffcc00]" />
            <span>NOSOTROS Y MÉTRICAS</span>
          </button>
          <button
            onClick={() => scrollToSection('contacto')}
            className="flex items-center gap-3 w-full py-2.5 text-left text-white font-bebas text-xl border-b border-blue-800"
          >
            <Mail className="w-5 h-5 text-[#ffcc00]" />
            <span>CONTACTO Y WHATSAPP</span>
          </button>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href="tel:2236602699"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-900/60 text-white font-anton text-lg tracking-wide"
            >
              <Phone className="w-4 h-4 text-[#ffcc00]" />
              <span>223 660-2699</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#ffcc00] text-[#002273] font-bebas text-xl tracking-wider uppercase font-bold glow-yellow"
            >
              <span>COTIZÁ TU ENVÍO AHORA</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
