'use client';

import React from 'react';
import {
  ShoppingBag,
  Wrench,
  Shirt,
  FileText,
  ClipboardCheck,
  Package,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { INDUSTRIES_CONTENT } from '@/content/home';
import { useCarousel } from '@/hooks/useCarousel';
import { Badge, Button, Card, IconBadge } from '@/components/atoms';
import { cn } from '@/lib/utils';

const ICON_MAP = {
  ShoppingBag,
  Wrench,
  Shirt,
  FileText,
  ClipboardCheck,
  Package,
};

interface IndustryTabProps {
  industry: (typeof INDUSTRIES_CONTENT.industries)[0];
  isActive: boolean;
  onSelect: () => void;
}

function IndustryTab({ industry, isActive, onSelect }: IndustryTabProps) {
  const IconComp = ICON_MAP[industry.iconName] || Package;

  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        'flex items-center gap-2 px-4 py-2.5 rounded-full font-bebas text-sm sm:text-base tracking-wider uppercase transition-all shadow-sm cursor-pointer',
        isActive
          ? 'bg-[#00277e] text-white ring-2 ring-[#F2E40A] shadow-md'
          : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
      )}
    >
      <IconComp className={cn('w-4 h-4', isActive ? 'text-[#F2E40A]' : 'text-slate-500')} />
      <span>{industry.name}</span>
    </button>
  );
}

interface IndustryCardProps {
  industry: (typeof INDUSTRIES_CONTENT.industries)[0];
  onOpenQuoteModal: (industryName?: string) => void;
}

function IndustryCard({ industry, onOpenQuoteModal }: IndustryCardProps) {
  const CurrentIcon = ICON_MAP[industry.iconName] || Package;

  return (
    <Card variant="bento-dark" padding="xl" className="rounded-[36px] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left Box with Icon and SLA Pill */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 sm:p-8 rounded-3xl bg-[#001f66]/80 border border-blue-400/20 shadow-inner">
          <IconBadge variant="yellow-blue" size="xl" className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl border-2 border-[#F2E40A] bg-[#00174e] shadow-lg glow-yellow mb-6">
            <CurrentIcon className="w-12 h-12 text-[#F2E40A] stroke-[1.75]" />
          </IconBadge>

          <Badge variant="blue-dark" className="text-xs sm:text-sm">
            <Clock className="w-3.5 h-3.5 text-[#F2E40A]" aria-hidden="true" />
            {industry.sla}
          </Badge>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-8 flex flex-col">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <Badge variant="yellow">{industry.badge1}</Badge>
            <Badge variant="blue-dark">{industry.badge2}</Badge>
          </div>

          {/* Title */}
          <h3 className="font-anton uppercase text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
            {industry.title}
          </h3>

          {/* Description */}
          <p className="font-outfit text-blue-100 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
            {industry.description}
          </p>

          {/* 3 Features with Checkmarks */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            {industry.features.map((feat, fIdx) => (
              <div key={fIdx} className="flex items-center gap-2.5 p-3 rounded-2xl bg-blue-900/40 border border-blue-400/20">
                <CheckCircle2 className="w-4 h-4 text-[#F2E40A] flex-shrink-0" />
                <span className="font-outfit text-xs sm:text-sm text-blue-100 leading-tight">
                  {feat}
                </span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-5 pt-2">
            <Button
              variant="primary"
              size="lg"
              leftIcon={<ArrowRight className="w-4 h-4 stroke-[2.5]" />}
              onClick={() => onOpenQuoteModal(industry.name)}
            >
              {INDUSTRIES_CONTENT.ctaComerciosText}
            </Button>

            <Button
              variant="ghost"
              size="lg"
              className="text-blue-200 hover:text-white underline underline-offset-4"
              leftIcon={<ArrowRight className="w-4 h-4 stroke-[2]" />}
              onClick={() => onOpenQuoteModal('Cuenta Corriente')}
            >
              {INDUSTRIES_CONTENT.ctaCuentaCorrienteText}
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default function IndustriesShowcaseSection({
  onOpenQuoteModal,
}: IndustriesShowcaseSectionProps) {
  const content = INDUSTRIES_CONTENT;
  const industries = content.industries;

  const {
    currentIndex,
    currentItem,
    setCurrentIndex,
    goToNext,
    goToPrev,
    totalItems,
  } = useCarousel({
    items: industries,
    initialIndex: 4,
    autoRotate: false,
  });

  return (
    <section id="industrias" className="w-full py-20 lg:py-28 bg-[#FFFFFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header and Counter Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <Badge variant="signal" className="mb-4">
              <Sparkles className="w-3.5 h-3.5 fill-[#002273] text-[#002273]" aria-hidden="true" />
              {content.badge}
            </Badge>

            <h2 className="font-anton uppercase text-[#0C59F2] text-4xl sm:text-5xl lg:text-[56px] leading-[1.0] tracking-tight mb-3">
              {content.title}
            </h2>

            <p className="font-outfit text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed">
              {content.description}
            </p>
          </div>

          {/* Counter + Controls */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <div className="px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[#002273] font-anton text-lg tracking-wider">
              {currentIndex + 1} / {totalItems}
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="w-10 h-10 p-0 bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 shadow-sm"
              aria-label="Rubro anterior"
              onClick={goToPrev}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <Button
              variant="primary"
              size="sm"
              className="w-10 h-10 p-0"
              aria-label="Siguiente rubro"
              onClick={goToNext}
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </Button>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10">
          {industries.map((ind, idx) => (
            <IndustryTab
              key={ind.id}
              industry={ind}
              isActive={idx === currentIndex}
              onSelect={() => setCurrentIndex(idx)}
            />
          ))}
        </div>

        {/* Main Showcase Card */}
        <IndustryCard industry={currentItem} onOpenQuoteModal={onOpenQuoteModal} />

        {/* Dots below card */}
        <div className="flex items-center justify-center gap-2 mt-8 pt-6 border-t border-blue-400/20">
          {industries.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => setCurrentIndex(dotIdx)}
              className={cn(
                'transition-all',
                dotIdx === currentIndex
                  ? 'w-8 h-2.5 rounded-full bg-[#F2E40A]'
                  : 'w-2.5 h-2.5 rounded-full bg-blue-300/40 hover:bg-blue-200'
              )}
              aria-label={`Ir a pestaña ${dotIdx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface IndustriesShowcaseSectionProps {
  onOpenQuoteModal: (industryName?: string) => void;
}