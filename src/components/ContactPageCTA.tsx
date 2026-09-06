'use client';

import React from 'react';
import { ArrowUpRight, MessageCircle, Sparkles } from 'lucide-react';
import { CONTACT_PAGE_CTA_CONTENT } from '@/content/quote';
import { Badge, Button, Card } from '@/components/atoms';
import { cn } from '@/lib/utils';

export default function ContactPageCTA() {
  const content = CONTACT_PAGE_CTA_CONTENT;

  return (
    <section id="contacto-cta" aria-label="Llamada a la acción final" className="w-full py-16 lg:py-20 bg-[#002273] bg-tech-grid relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card variant="bento-dark" padding="xl" className="rounded-[36px] border border-blue-400/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <Badge variant="blue-dark" className="mb-4 inline-flex">
                <Sparkles className="w-3.5 h-3.5 fill-[#F2E40A] text-[#F2E40A]" aria-hidden="true" />
                {content.badge}
              </Badge>

              <h2 className="font-anton uppercase text-white text-3xl sm:text-4xl lg:text-[44px] leading-tight tracking-tight mb-4">
                {content.headline}
              </h2>

              <p className="font-outfit text-blue-200 text-sm sm:text-base leading-relaxed">
                Cotizá online en segundos o coordiná directo con nuestro equipo logístico por WhatsApp.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 flex-shrink-0 justify-center lg:justify-end">
              <Button
                variant="primary"
                size="lg"
                leftIcon={<ArrowUpRight className="w-5 h-5 stroke-[2.5]" />}
                onClick={() => window.location.href = content.primaryCTA.href}
              >
                {content.primaryCTA.text}
              </Button>

              <Button
                variant="secondary"
                size="lg"
                leftIcon={<MessageCircle className="w-4 h-4 text-[#F2E40A]" />}
                onClick={() => window.open(content.secondaryCTA.href, '_blank', 'noopener,noreferrer')}
              >
                {content.secondaryCTA.text}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}