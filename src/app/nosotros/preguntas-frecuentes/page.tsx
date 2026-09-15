'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import FaqHero from '@/components/nosotros/preguntas-frecuentes/FaqHero';
import { FaqCategories } from '@/components/nosotros/preguntas-frecuentes/Faq-categories';
import FaqCta from '@/components/nosotros/preguntas-frecuentes/FaqCta';
import PreFooterAndFooter from '@/components/PreFooterAndFooter';
import ExpressQuoteModal from '@/components/ExpressQuoteModal';

export default function PreguntasFrecuentesPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (serviceId?: string) => {
    setSelectedService(serviceId);
    setIsQuoteModalOpen(true);
  };

  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen flex flex-col bg-[#FFFFFF] outline-none">
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      <FaqHero />
      <FaqCategories />
      <FaqCta />

      <PreFooterAndFooter onOpenQuoteModal={handleOpenQuoteModal} />

      <ExpressQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preselectedService={selectedService}
      />
    </main>
  );
}
