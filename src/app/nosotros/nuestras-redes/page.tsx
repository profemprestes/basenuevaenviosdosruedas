'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import NetworksHero from '@/components/nosotros/nuestras-redes/NetworksHero';
import NetworksChannels from '@/components/nosotros/nuestras-redes/NetworksChannels';
import RecentPosts from '@/components/nosotros/nuestras-redes/RecentPosts';
import NetworksBenefits from '@/components/nosotros/nuestras-redes/NetworksBenefits';
import NewsletterSubscribe from '@/components/nosotros/nuestras-redes/NewsletterSubscribe';
import PreFooterAndFooter from '@/components/PreFooterAndFooter';
import ExpressQuoteModal from '@/components/ExpressQuoteModal';

export default function NuestrasRedesPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (serviceId?: string) => {
    setSelectedService(serviceId);
    setIsQuoteModalOpen(true);
  };

  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen flex flex-col bg-[#FFFFFF] outline-none">
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      <NetworksHero />
      <NetworksChannels />
      <RecentPosts />
      <NetworksBenefits />
      <NewsletterSubscribe />

      <PreFooterAndFooter onOpenQuoteModal={handleOpenQuoteModal} />

      <ExpressQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preselectedService={selectedService}
      />
    </main>
  );
}
