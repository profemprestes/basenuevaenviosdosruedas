'use client';

import React from 'react';
import { Store, ShoppingBag, Building2, Check, ArrowRight } from 'lucide-react';
import { ECOMMERCE_GROWTH_CONTENT } from '@/content/home';
import { LOCAL_PARTNER_BRANDS } from '@/content/services';
import { Badge, Button, Card, IconBadge } from '@/components/atoms';
import { cn } from '@/lib/utils';

interface BenefitItemProps {
  text: string;
}

function BenefitItem({ text }: BenefitItemProps) {
  return (
    <li className="flex items-center gap-3">
      <div className="w-6 h-6 rounded-lg bg-blue-600/50 border border-blue-400/40 flex items-center justify-center flex-shrink-0">
        <Check className="w-4 h-4 text-[#F2E40A] stroke-[3]" aria-hidden="true" />
      </div>
      <span className="font-outfit text-sm sm:text-base text-blue-50 font-medium">
        {text}
      </span>
    </li>
  );
}

interface EcommerceCardProps {
  variant: 'dark' | 'yellow' | 'white';
  icon: React.ReactNode;
  badge: string;
  title: string;
  description: string;
  benefits?: BenefitItemProps['text'][];
  ctaText: string;
  onCtaClick: () => void;
  ctaVariant?: 'primary' | 'dark' | 'yellow-outline';
  className?: string;
}

function EcommerceCard({
  variant,
  icon,
  badge,
  title,
  description,
  benefits,
  ctaText,
  onCtaClick,
  ctaVariant = 'primary',
  className,
}: EcommerceCardProps) {
  const variantStyles = {
    dark: 'bg-[#00277e]/90 border border-blue-400/30 text-white',
    yellow: 'bg-[#F2E40A] text-[#002273]',
    white: 'bg-white text-slate-900 border border-slate-200/90',
  };

  const badgeStyles = {
    dark: 'bg-blue-950 border border-blue-400/30 text-[#F2E40A]',
    yellow: 'bg-[#002273] text-white',
    white: 'bg-blue-50 text-[#0C59F2] border border-blue-200',
  };

  const iconBadgeStyles = {
    dark: 'bg-[#F2E40A] text-[#002273]',
    yellow: 'bg-[#002273] text-[#F2E40A]',
    white: 'bg-[#F2E40A] text-[#002273]',
  };

  const titleColor = variant === 'dark' ? 'text-white' : variant === 'yellow' ? 'text-[#002273]' : 'text-[#0C59F2]';
  const descColor = variant === 'dark' ? 'text-blue-100/90' : variant === 'yellow' ? 'text-[#002273]/85' : 'text-slate-600';

  return (
    <Card variant="default" padding="xl" hover className={cn('rounded-[32px] flex flex-col justify-between relative overflow-hidden', variantStyles[variant], className)}>
      <div>
        <div className="flex items-center justify-between mb-5">
          <IconBadge variant={iconBadgeStyles[variant] as any} size="lg">
            {icon}
          </IconBadge>
          <Badge variant={badgeStyles[variant] as any} className="text-xs">
            {badge}
          </Badge>
        </div>

        <h3 className={cn('font-anton uppercase tracking-tight mb-3 text-3xl sm:text-4xl', titleColor)}>
          {title}
        </h3>

        <p className={cn('font-outfit text-base leading-relaxed mb-6', descColor)}>
          {description}
        </p>

        {benefits && benefits.length > 0 && (
          <ul className="space-y-4 mb-8">
            {benefits.map((b, bIdx) => (
              <BenefitItem key={bIdx} text={b} />
            ))}
          </ul>
        )}
      </div>

      <div className="pt-4 border-t border-current/20">
        <Button variant={ctaVariant} size="lg" leftIcon={<ArrowRight className="w-4 h-4" />} onClick={onCtaClick}>
          {ctaText}
        </Button>
      </div>
    </Card>
  );
}

export default function EcommerceGrowthSection({
  onOpenQuoteModal,
  onOpenFichaTecnica,
}: EcommerceGrowthSectionProps) {
  const ec = ECOMMERCE_GROWTH_CONTENT;

  return (
    <section
      id="ecommerce"
      aria-label="Crecimiento para E-Commerce"
      className="w-full py-20 lg:py-28 bg-[#0C59F2] bg-tech-grid relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-3xl mb-14">
          <Badge variant="category-light" className="mb-4">
            {ec.badge}
          </Badge>

          <h2 className="font-anton uppercase text-white text-4xl sm:text-5xl lg:text-[60px] leading-[1.0] tracking-tight mb-4 flex flex-wrap items-center gap-x-3">
            <span>{ec.titlePrefix}</span>
            <Badge variant="yellow" className="text-3xl sm:text-4xl lg:text-[46px] font-anton leading-none my-1 px-4 py-1">
              {ec.titlePill}
            </Badge>
            <span>{ec.titleSuffix}</span>
          </h2>

          <div className="w-20 h-1.5 bg-[#F2E40A] rounded-full mb-6" aria-hidden="true" />

          <p className="font-outfit text-base sm:text-lg text-blue-100/90 leading-relaxed">
            {ec.description}
          </p>
        </div>

        {/* Bento Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-20">
          {/* Left Column: Big E-commerce Card */}
          <EcommerceCard
            variant="dark"
            icon={<Store className="w-6 h-6" />}
            badge={ec.mainCard.badge}
            title={ec.mainCard.title}
            description={ec.mainCard.description}
            benefits={ec.mainCard.benefits.map(b => b.text)}
            ctaText={ec.mainCard.ctaText}
            onCtaClick={onOpenQuoteModal}
            ctaVariant="primary"
            className="lg:col-span-6"
          />

          {/* Right Column: 2 Cards */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <EcommerceCard
              variant="yellow"
              icon={<ShoppingBag className="w-6 h-6" />}
              badge={ec.flexCard.badge}
              title={ec.flexCard.title}
              description={ec.flexCard.description}
              ctaText={ec.flexCard.ctaText}
              onCtaClick={onOpenFichaTecnica}
              ctaVariant="dark"
            />

            <EcommerceCard
              variant="white"
              icon={<Building2 className="w-6 h-6" />}
              badge={ec.corporateCard.badge}
              title={ec.corporateCard.title}
              description={ec.corporateCard.description}
              ctaText={ec.corporateCard.ctaText}
              onCtaClick={onOpenQuoteModal}
              ctaVariant="primary"
            />
          </div>
        </div>

        {/* Marquee Ticker: Marcas Locales */}
        <div className="pt-10 border-t border-blue-400/20 text-center">
          <p className="font-bebas text-blue-200 text-sm tracking-widest uppercase mb-6">
            {ec.brandsTickerTitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-70">
            {LOCAL_PARTNER_BRANDS.map((brand, index) => (
              <div
                key={index}
                className="font-anton text-white/80 hover:text-[#F2E40A] text-xl sm:text-2xl tracking-wider transition-colors select-none"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface EcommerceGrowthSectionProps {
  onOpenQuoteModal: () => void;
  onOpenFichaTecnica: () => void;
}