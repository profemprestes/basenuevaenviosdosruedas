'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import EmprendedoresHero from '@/components/servicios/emprendedores/EmprendedoresHero';
import EmprendedoresFeatures from '@/components/servicios/emprendedores/EmprendedoresFeatures';
import EmprendedoresBenefits from '@/components/servicios/emprendedores/EmprendedoresBenefits';
import EmprendedoresPricing from '@/components/servicios/emprendedores/EmprendedoresPricing';
import CarruselRedes from '@/components/CarruselRedes';
import PreFooterAndFooter from '@/components/PreFooterAndFooter';

export default function EmprendedoresPage() {
  const handleOpenQuoteModal = () => {
    const el = document.getElementById('emprendedores-pricing') || document.getElementById('pricing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen flex flex-col bg-[#FFFFFF] outline-none">
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />
      <EmprendedoresHero />
      <EmprendedoresFeatures />
      <EmprendedoresBenefits />
      <EmprendedoresPricing />
      <CarruselRedes />
      <PreFooterAndFooter onOpenQuoteModal={handleOpenQuoteModal} />
    </main>
  );
}
