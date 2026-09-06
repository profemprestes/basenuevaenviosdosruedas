'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import LowCostHero from '@/components/servicios/lowcost/LowCostHero';
import LowCostFeatures from '@/components/servicios/lowcost/LowCostFeatures';
import LowCostBenefits from '@/components/servicios/lowcost/LowCostBenefits';
import LowCostHowItWorks from '@/components/servicios/lowcost/LowCostHowItWorks';
import LowCostPricing from '@/components/servicios/lowcost/LowCostPricing';
import CarruselRedes from '@/components/CarruselRedes';
import PreFooterAndFooter from '@/components/PreFooterAndFooter';

export default function LowcostPage() {
  const handleOpenQuoteModal = () => {
    const el = document.getElementById('lowcost-pricing') || document.getElementById('pricing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen flex flex-col bg-[#FFFFFF] outline-none">
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />
      <LowCostHero />
      <LowCostFeatures />
      <LowCostBenefits />
      <LowCostHowItWorks />
      <LowCostPricing />
      <CarruselRedes />
      <PreFooterAndFooter onOpenQuoteModal={handleOpenQuoteModal} />
    </main>
  );
}
