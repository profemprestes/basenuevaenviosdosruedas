'use client';

import React from 'react';
import { Zap, ChevronLeft, ChevronRight, Truck, Info, Clock, DollarSign, ArrowRight } from 'lucide-react';
import { LOGISTICS_SERVICES, SERVICES_SECTION_CONTENT, type LogisticsServiceItem } from '@/content/services';
import { useCarousel } from '@/hooks/useCarousel';
import { Badge, Button, Card, IconBadge } from '@/components/atoms';
import { cn } from '@/lib/utils';

const ICON_MAP = {
  express: Zap,
  lowcost: Clock,
  flex: Truck,
  '3pl': DollarSign,
};

interface ServiceCardProps {
  svc: (typeof LOGISTICS_SERVICES)[0];
  isSelected: boolean;
  isHighlight: boolean;
  onSelect: () => void;
  onOpenFichaTecnica: () => void;
  onOpenQuoteModal: (serviceId: string) => void;
}

function ServiceCard({
  svc,
  isSelected,
  isHighlight,
  onSelect,
  onOpenFichaTecnica,
  onOpenQuoteModal,
}: ServiceCardProps) {
  const IconComp = ICON_MAP[svc.id as keyof typeof ICON_MAP] || Zap;

  const highlightStyles = cn(
    'rounded-[32px] p-6 sm:p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 relative',
    isSelected
      ? 'bg-[#F2E40A] text-[#002273] scale-105 shadow-2xl z-20 glow-yellow ring-4 ring-white/50'
      : 'bg-[#F2E40A]/90 text-[#002273] opacity-90 hover:opacity-100'
  );

  const defaultStyles = cn(
    'rounded-[32px] p-6 sm:p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 relative border',
    isSelected
      ? 'bg-[#002f9c] border-[#F2E40A] scale-102 shadow-2xl z-10 text-white'
      : 'bg-[#002273]/80 border-blue-400/20 text-white hover:border-blue-400/40 hover:bg-[#002785]'
  );

  const badgeStyles = isHighlight
    ? 'px-3 py-1 rounded-full bg-[#002273] text-white font-bebas text-xs tracking-wider uppercase'
    : 'px-3 py-1 rounded-full bg-blue-950 border border-blue-400/30 text-blue-200 font-bebas text-xs tracking-wider uppercase';

  const iconBadgeStyles = isHighlight
    ? 'w-11 h-11 rounded-2xl bg-[#002273] text-[#F2E40A] flex items-center justify-center shadow'
    : 'w-11 h-11 rounded-2xl bg-blue-600/50 border border-blue-400/30 flex items-center justify-center text-[#F2E40A]';

  const pillStyles = isHighlight
    ? 'p-2 rounded-xl bg-[#002273]/10 border border-[#002273]/20 flex flex-col items-center justify-center'
    : 'p-2 rounded-xl bg-blue-950/60 border border-blue-400/20 flex flex-col items-center justify-center';

  const pillTextStyles = isHighlight
    ? 'font-bebas text-[11px] uppercase tracking-tight text-[#002273] leading-tight'
    : 'font-bebas text-[11px] uppercase tracking-tight text-white leading-tight';

  const pillLabelStyles = isHighlight
    ? 'text-[9px] uppercase font-mono-data text-[#002273]/70'
    : 'text-[9px] uppercase font-mono-data text-blue-300';

  const descriptionStyles = isHighlight
    ? 'font-outfit text-[#002273]/90 text-sm leading-relaxed mb-6'
    : 'font-outfit text-blue-100/80 text-sm leading-relaxed mb-6';

  const titleStyles = isHighlight
    ? 'font-anton uppercase text-[#002273] text-3xl sm:text-4xl tracking-tight mb-3'
    : 'font-anton uppercase text-white text-2xl sm:text-3xl tracking-tight mb-3';

  const locationStyles = isHighlight
    ? 'flex items-center gap-1.5 text-xs font-mono-data uppercase tracking-wider text-[#002273]/80 mb-1'
    : 'flex items-center gap-1.5 text-xs font-mono-data uppercase tracking-wider text-blue-300 mb-1';

  const ctaButtonStyles = isHighlight
    ? 'w-full py-2.5 rounded-full bg-[#002273] text-white font-bebas text-base tracking-wider uppercase flex items-center justify-center gap-1.5 shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-white'
    : 'w-full py-2.5 rounded-full bg-blue-600/50 hover:bg-[#F2E40A] hover:text-[#002273] text-white border border-blue-400/30 font-bebas text-base tracking-wider uppercase flex items-center justify-center gap-1.5 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F2E40A]';

  return (
    <article key={svc.id} onClick={onSelect} className={isHighlight ? highlightStyles : defaultStyles}>
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className={iconBadgeStyles}>
            <IconComp className={isHighlight ? 'w-6 h-6' : 'w-5 h-5'} aria-hidden="true" />
          </div>
          <Badge variant={isHighlight ? 'blue-dark' : 'blue-dark'} className={isHighlight ? '' : 'text-xs'}>
            {svc.badge}
          </Badge>
        </div>

        <div className={locationStyles}>
          <span aria-hidden="true">📍</span>
          <span>{svc.location}</span>
        </div>

        <h3 className={titleStyles}>{svc.title}</h3>

        <p className={descriptionStyles}>{svc.description}</p>

        <div className="grid grid-cols-3 gap-1.5 mb-6 text-center">
          {svc.pills.map((pill, pIdx) => (
            <div key={pIdx} className={pillStyles}>
              <span className={pillTextStyles}>{pill.value}</span>
              <span className={pillLabelStyles}>{pill.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-2 flex flex-col gap-2">
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center justify-center gap-1.5 text-xs font-bebas uppercase tracking-wider py-1"
          leftIcon={<Info className="w-3.5 h-3.5" />}
          onClick={(e) => {
            e.stopPropagation();
            onOpenFichaTecnica();
          }}
        >
          MIRÁ LA FICHA TÉCNICA
        </Button>

        <Button
          variant={isHighlight ? 'dark' : 'blue-outline'}
          size="md"
          fullWidth
          leftIcon={<ArrowRight className="w-3.5 h-3.5" />}
          onClick={(e) => {
            e.stopPropagation();
            onOpenQuoteModal(isHighlight ? 'flex' : svc.id);
          }}
        >
          {isHighlight ? 'COTIZAR FLEX' : 'COTIZAR ESTE PLAN'}
        </Button>
      </div>
    </article>
  );
}

export default function ServicesCarouselSection({
  onOpenQuoteModal,
  onOpenFichaTecnica,
}: ServicesCarouselSectionProps) {
  const content = SERVICES_SECTION_CONTENT;

  const {
    currentIndex,
    currentItem,
    setCurrentIndex,
    goToNext,
    goToPrev,
    autoRotate,
    setAutoRotate,
    totalItems,
  } = useCarousel({
    items: LOGISTICS_SERVICES as LogisticsServiceItem[],
    initialIndex: 2,
    autoRotate: true,
    autoRotateInterval: 4500,
  });

  const handleSelect = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section
      id="servicios-carousel"
      aria-label="Catálogo de servicios de mensajería"
      className="w-full py-20 lg:py-28 bg-[#0C59F2] bg-tech-grid relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header and Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <Badge variant="category-dark" className="mb-4">
              {content.badge}
            </Badge>

            <h2 className="font-anton uppercase text-white text-4xl sm:text-5xl lg:text-[56px] leading-[1.0] tracking-tight">
              {content.title} <span className="text-[#F2E40A] block sm:inline">{content.titleHighlight}</span>
            </h2>
          </div>

          {/* Top Right Controls */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <Button
              variant={autoRotate ? 'primary' : 'secondary'}
              size="sm"
              leftIcon={<Zap className="w-3.5 h-3.5 fill-current" />}
              onClick={() => setAutoRotate(!autoRotate)}
              aria-pressed={autoRotate}
              title="Alternar rotación automática del carrusel"
            >
              {content.autoRotateButtonLabel}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="w-10 h-10 p-0"
              aria-label="Servicio anterior"
              onClick={goToPrev}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="w-10 h-10 p-0"
              aria-label="Siguiente servicio"
              onClick={goToNext}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Carousel Showcase Grid */}
        <div
          className="relative"
          aria-roledescription="carousel"
          aria-label="Tarjetas de servicios logísticos"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch" aria-live="polite">
            {LOGISTICS_SERVICES.map((svc, idx) => (
              <ServiceCard
                key={svc.id}
                svc={svc}
                isSelected={idx === currentIndex}
                isHighlight={svc.isHighlight}
                onSelect={() => handleSelect(idx)}
                onOpenFichaTecnica={onOpenFichaTecnica}
                onOpenQuoteModal={onOpenQuoteModal}
              />
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {LOGISTICS_SERVICES.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => setCurrentIndex(dotIdx)}
                className={cn(
                  'transition-all focus:outline-none cursor-pointer',
                  dotIdx === currentIndex
                    ? 'w-8 h-2.5 rounded-full bg-[#F2E40A]'
                    : 'w-2.5 h-2.5 rounded-full bg-blue-300/40 hover:bg-blue-200'
                )}
                aria-label={`Ir al servicio ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ServicesCarouselSectionProps {
  onOpenQuoteModal: (preselectedService?: string) => void;
  onOpenFichaTecnica: () => void;
}