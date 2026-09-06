'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import ContactHeroSection from '@/components/ContactHeroSection';
import ContactB2BSection from '@/components/ContactB2BSection';
import SocialChannelsSection from '@/components/SocialChannelsSection';
import OfficeInfoSection from '@/components/OfficeInfoSection';
import ContactPageCTA from '@/components/ContactPageCTA';
import PreFooterAndFooter from '@/components/PreFooterAndFooter';

export default function ContactPage() {
  const handleOpenQuoteModal = () => {
    // Scroll to B2B form or open modal if needed
    const el = document.getElementById('contacto-b2b');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen flex flex-col bg-[#FFFFFF] outline-none">
      {/* 1. Navbar Header */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* 2. Contact Hero - Direct Channels */}
      <ContactHeroSection />

      {/* 3. B2B Commercial Plan Form */}
      <ContactB2BSection />

      {/* 4. Social Channels */}
      <SocialChannelsSection />

      {/* 5. Office Info & Operations */}
      <OfficeInfoSection />

      {/* 6. Bottom CTA */}
      <ContactPageCTA />

      {/* 7. Pre-Footer Banner & Master Footer */}
      <PreFooterAndFooter onOpenQuoteModal={handleOpenQuoteModal} />
    </main>
  );
}