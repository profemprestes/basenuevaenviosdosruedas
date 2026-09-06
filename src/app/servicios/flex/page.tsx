'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import FlexHero from '@/components/servicios/flex/FlexHero';
import FlexFeatures from '@/components/servicios/flex/FlexFeatures';
import FlexBenefits from '@/components/servicios/flex/FlexBenefits';
import FlexHowItWorks from '@/components/servicios/flex/FlexHowItWorks';
import FlexRequirements from '@/components/servicios/flex/FlexRequirements';
import FlexPricing from '@/components/servicios/flex/FlexPricing';
import CarruselRedes from '@/components/CarruselRedes';
import PreFooterAndFooter from '@/components/PreFooterAndFooter';

export default function FlexPage() {
  const handleOpenQuoteModal = () => {
    const el = document.getElementById('flex-pricing') || document.getElementById('pricing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen flex flex-col bg-[#FFFFFF] outline-none">
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />
      <FlexHero />
      <FlexFeatures />
      <FlexBenefits />
      <FlexHowItWorks />
      <FlexRequirements />
      <FlexPricing />
      <CarruselRedes />
      <PreFooterAndFooter onOpenQuoteModal={handleOpenQuoteModal} />
    </main>
  );
}
