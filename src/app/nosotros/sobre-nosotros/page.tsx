'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import AboutHero from '@/components/nosotros/sobre-nosotros/AboutHero';
import AboutMissionVision from '@/components/nosotros/sobre-nosotros/AboutMissionVision';
import AboutAdvantages from '@/components/nosotros/sobre-nosotros/AboutAdvantages';
import AboutValues from '@/components/nosotros/sobre-nosotros/AboutValues';
import AboutTimeline from '@/components/nosotros/sobre-nosotros/AboutTimeline';
import AboutTeam from '@/components/nosotros/sobre-nosotros/AboutTeam';
import PreFooterAndFooter from '@/components/PreFooterAndFooter';
import ExpressQuoteModal from '@/components/ExpressQuoteModal';

export default function SobreNosotrosPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (serviceId?: string) => {
    setSelectedService(serviceId);
    setIsQuoteModalOpen(true);
  };

  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen flex flex-col bg-[#FFFFFF] outline-none">
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      <AboutHero />
      <AboutMissionVision />
      <AboutAdvantages />
      <AboutValues />
      <AboutTimeline />
      <AboutTeam />

      <PreFooterAndFooter onOpenQuoteModal={handleOpenQuoteModal} />

      <ExpressQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preselectedService={selectedService}
      />
    </main>
  );
}
