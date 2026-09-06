'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import MetricsBentoSection from '@/components/MetricsBentoSection';
import EcommerceGrowthSection from '@/components/EcommerceGrowthSection';
import ServicesCarouselSection from '@/components/ServicesCarouselSection';
import IndustriesShowcaseSection from '@/components/IndustriesShowcaseSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CarruselRedes from '@/components/CarruselRedes';
import ContactQuoteSection from '@/components/ContactQuoteSection';
import PreFooterAndFooter from '@/components/PreFooterAndFooter';
import ExpressQuoteModal from '@/components/ExpressQuoteModal';
import FichaTecnicaModal from '@/components/FichaTecnicaModal';



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
    <main id="main-content" tabIndex={-1} className="min-h-screen flex flex-col bg-[#FFFFFF] outline-none">
      {/* 1. Navbar Header */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* 2. Hero Section */}
      <HeroSection
        onOpenQuoteModal={() => handleOpenQuoteModal()}
        onScrollToServices={handleScrollToServices}
      />

      {/* 3. Metrics & Specialization Section */}
      <MetricsBentoSection />

      {/* 4. E-commerce Growth & Flex Bento Section */}
      <EcommerceGrowthSection
        onOpenQuoteModal={() => handleOpenQuoteModal()}
        onOpenFichaTecnica={() => setIsFichaTecnicaOpen(true)}
      />

      {/* 5. Services Carousel Section */}
      <ServicesCarouselSection
        onOpenQuoteModal={(svc) => handleOpenQuoteModal(svc)}
        onOpenFichaTecnica={() => setIsFichaTecnicaOpen(true)}
      />

      {/* 6. Industries Showcase Section */}
      <IndustriesShowcaseSection
        onOpenQuoteModal={(industry) => handleOpenQuoteModal(industry)}
      />

      {/* 7. Google Reviews & Testimonials Section */}
      <TestimonialsSection />

      {/* 8. Carrusel / Grid de Redes Sociales */}
      <CarruselRedes />

      {/* 9. Contact & Immediate WhatsApp Quote Section */}
      <ContactQuoteSection />

      {/* 10. Pre-Footer Banner & Master Footer */}
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
