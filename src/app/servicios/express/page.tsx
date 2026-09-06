'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import ExpressHero from '@/components/servicios/express/ExpressHero';
import ExpressFeatures from '@/components/servicios/express/ExpressFeatures';
import ExpressUseCases from '@/components/servicios/express/ExpressUseCases';
import ExpressPricing from '@/components/servicios/express/ExpressPricing';
import CarruselRedes from '@/components/CarruselRedes';
import PreFooterAndFooter from '@/components/PreFooterAndFooter';

export default function ExpressPage() {
  const handleOpenQuoteModal = () => {
    const el = document.getElementById('express-pricing') || document.getElementById('pricing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen flex flex-col bg-[#FFFFFF] outline-none">
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />
      <ExpressHero />
      <ExpressFeatures />
      <ExpressUseCases />
      <ExpressPricing />
      <CarruselRedes />
      <PreFooterAndFooter onOpenQuoteModal={handleOpenQuoteModal} />
    </main>
  );
}
