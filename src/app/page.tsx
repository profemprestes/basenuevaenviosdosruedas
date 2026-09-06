'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import MetricsBentoSection from '../components/MetricsBentoSection';
import EcommerceGrowthSection from '../components/EcommerceGrowthSection';
import ServicesCarouselSection from '../components/ServicesCarouselSection';
import IndustriesShowcaseSection from '../components/IndustriesShowcaseSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactQuoteSection from '../components/ContactQuoteSection';
import PreFooterAndFooter from '../components/PreFooterAndFooter';
import ExpressQuoteModal from '../components/ExpressQuoteModal';
import FichaTecnicaModal from '../components/FichaTecnicaModal';

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string | undefined>(undefined);
  const [isFichaTecnicaOpen, setIsFichaTecnicaOpen] = useState(false);

  const handleOpenQuoteModal = (serviceId?: string) => {
    setSelectedServiceForQuote(serviceId);
    setIsQuoteModalOpen(true);
  };

  const handleScrollToServices = () => {
    const el = document.getElementById('servicios-carousel');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#FFFFFF]">
      {/* 1. Navbar Header (Image 2) */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* 2. Hero Section (Image 1) */}
      <HeroSection
        onOpenQuoteModal={() => handleOpenQuoteModal()}
        onScrollToServices={handleScrollToServices}
      />

      {/* 3. Metrics & Specialization Section (Image 3) */}
      <MetricsBentoSection />

      {/* 4. E-commerce Growth & Flex Bento Section (Image 7) */}
      <EcommerceGrowthSection
        onOpenQuoteModal={() => handleOpenQuoteModal()}
        onOpenFichaTecnica={() => setIsFichaTecnicaOpen(true)}
      />

      {/* 5. Services Carousel Section (Image 8) */}
      <ServicesCarouselSection
        onOpenQuoteModal={(svc) => handleOpenQuoteModal(svc)}
        onOpenFichaTecnica={() => setIsFichaTecnicaOpen(true)}
      />

      {/* 6. Industries Showcase Section (Image 4) */}
      <IndustriesShowcaseSection
        onOpenQuoteModal={(industry) => handleOpenQuoteModal(industry)}
      />

      {/* 7. Google Reviews & Testimonials Section (Image 9) */}
      <TestimonialsSection />

      {/* 8. Contact & Immediate WhatsApp Quote Section (Image 5) */}
      <ContactQuoteSection />

      {/* 9. Pre-Footer Banner & Master Footer (Image 6) */}
      <PreFooterAndFooter onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Interactive Modals */}
      <ExpressQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preselectedService={selectedServiceForQuote}
      />

      <FichaTecnicaModal
        isOpen={isFichaTecnicaOpen}
        onClose={() => setIsFichaTecnicaOpen(false)}
        onOpenQuoteModal={() => {
          setIsFichaTecnicaOpen(false);
          handleOpenQuoteModal('flex');
        }}
      />
    </main>
  );
}
