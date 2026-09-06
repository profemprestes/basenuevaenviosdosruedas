'use client';

import React from 'react';
import {
  ArrowUpRight,
  MessageCircle,
  ShieldCheck,
  Zap,
  TrendingDown,
  Clock,
  Package,
  MapPin,
  Phone,
  Mail,
  ArrowUp,
} from 'lucide-react';
import Logo from './Logo';
import { SITE_CONFIG } from '@/content/site';
import { Button, Badge } from '@/components/atoms';
import { cn } from '@/lib/utils';

function InstagramIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const SERVICE_ICON_MAP = {
  express: Zap,
  lowcost: TrendingDown,
  flex: Clock,
  '3pl': Package,
};

interface ServiceLinkProps {
  item: { label: string; action: string };
  onOpenQuoteModal: (serviceId?: string) => void;
}

function ServiceLink({ item, onOpenQuoteModal }: ServiceLinkProps) {
  const IconComponent = SERVICE_ICON_MAP[item.action as keyof typeof SERVICE_ICON_MAP] || Zap;

  return (
    <li>
      <Button
        variant="ghost"
        size="sm"
        className="w-full justify-start text-blue-100 hover:text-[#F2E40A] font-outfit text-sm"
        leftIcon={<IconComponent className="w-4 h-4 text-[#F2E40A] group-hover:scale-110 transition-transform" />}
        onClick={() => onOpenQuoteModal(item.action)}
      >
        {item.label}
      </Button>
    </li>
  );
}

interface InfoCardProps {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  subItems?: React.ReactNode[];
}

function InfoCard({ icon, label, value, subItems }: InfoCardProps) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-2xl bg-blue-900/40 border border-blue-400/20">
      <div className="w-4 h-4 text-[#F2E40A] flex-shrink-0 mt-0.5" aria-hidden="true">
        {icon}
      </div>
      <div>
        <p className="font-bebas text-xs tracking-wider uppercase text-blue-300">
          {label}
        </p>
        <div className="font-outfit text-white hover:text-[#F2E40A] transition">
          {value}
        </div>
        {subItems && (
          <div className="space-y-1 mt-2">
            {subItems.map((item, idx) => (
              <div key={idx} className="flex justify-between text-xs text-blue-100 font-mono-data">
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function PreFooterAndFooter({ onOpenQuoteModal }: PreFooterAndFooterProps) {
  const { footer, tagline, phoneNumber, email, address, whatsappNumber, defaultWhatsAppMessage } =
    SITE_CONFIG;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultWhatsAppMessage)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <footer className="w-full bg-[#002273] text-white relative pt-12 pb-8 bg-tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pre-Footer Banner Card */}
        <div className="w-full bg-[#00174e]/95 border border-blue-400/30 rounded-[32px] p-8 sm:p-10 mb-16 shadow-2xl relative overflow-hidden backdrop-blur-md">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              {/* Badge */}
              <Badge variant="blue-dark" className="mb-4 text-xs">
                {footer.preFooter.badge}
              </Badge>

              {/* Title */}
              <h3 className="font-anton uppercase text-3xl sm:text-4xl lg:text-[44px] leading-tight tracking-tight text-white mb-2">
                {footer.preFooter.titleLine1}{' '}
                <span className="text-[#F2E40A]">{footer.preFooter.titleHighlight}</span>
              </h3>

              <p className="font-outfit text-blue-200 text-sm sm:text-base leading-relaxed">
                {footer.preFooter.subtitle}
              </p>
            </div>

            {/* Buttons on right */}
            <div className="flex flex-wrap items-center gap-4 flex-shrink-0">
              <Button
                variant="primary"
                size="lg"
                leftIcon={<ArrowUpRight className="w-5 h-5 stroke-[2.5]" />}
                onClick={() => onOpenQuoteModal()}
              >
                {footer.preFooter.quoteButtonText}
              </Button>

              <Button
                variant="secondary"
                size="lg"
                leftIcon={<MessageCircle className="w-4 h-4 text-[#F2E40A]" />}
                onClick={openWhatsApp}
              >
                {footer.preFooter.chatButtonText}
              </Button>
            </div>
          </div>
        </div>

        {/* Master Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-blue-400/20">
          {/* Column 1: Brand info */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Logo size="lg" className="mb-2" />
            <span className="font-bebas text-xs tracking-widest text-[#F2E40A] uppercase mb-5">
              {tagline}
            </span>

            <p className="font-outfit text-blue-100/80 text-sm sm:text-base leading-relaxed mb-6 max-w-md">
              {footer.brandDescription}
            </p>

            {/* Canales Oficiales */}
            <div>
              <p className="font-bebas text-xs tracking-widest text-blue-300 uppercase mb-3">
                {footer.officialChannelsLabel}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-blue-900/60 border border-blue-400/30 hover:bg-[#F2E40A] hover:text-[#002273] text-white flex items-center justify-center transition"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-blue-900/60 border border-blue-400/30 hover:bg-[#F2E40A] hover:text-[#002273] text-white flex items-center justify-center transition"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>

                <Button
                  variant="primary"
                  size="sm"
                  className="w-10 h-10 p-0 shadow-md glow-yellow"
                  aria-label="WhatsApp"
                  onClick={openWhatsApp}
                >
                  <MessageCircle className="w-4 h-4 fill-[#002273]" />
                </Button>

                <Badge variant="blue-dark" className="px-3 py-2 rounded-xl text-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#F2E40A]" />
                  {footer.verifiedBadgeText}
                </Badge>
              </div>
            </div>
          </div>

          {/* Column 2: Servicios y Cotizadores */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="font-anton uppercase text-[#F2E40A] text-xl tracking-wide mb-6">
              {footer.servicesColumnTitle}
            </h4>

            <ul className="space-y-4">
              {footer.servicesLinks.map((item, idx) => (
                <ServiceLink key={idx} item={item} onOpenQuoteModal={onOpenQuoteModal} />
              ))}
            </ul>
          </div>

          {/* Column 3: Base de Operaciones MDQ */}
          <div className="lg:col-span-4 flex flex-col">
            <h4 className="font-anton uppercase text-[#F2E40A] text-xl tracking-wide mb-6">
              {footer.operationsColumnTitle}
            </h4>

            <div className="space-y-3.5 text-sm">
              <InfoCard
                icon={<MapPin />}
                label={footer.locationLabel}
                value={<p className="font-outfit text-white font-medium">{address}</p>}
              />

              <InfoCard
                icon={<Phone />}
                label={footer.directLineLabel}
                value={
                  <a
                    href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
                    className="font-anton text-base text-white hover:text-[#F2E40A] transition"
                  >
                    +54 {phoneNumber}
                  </a>
                }
              />

              <InfoCard
                icon={<Mail />}
                label={footer.commercialEmailLabel}
                value={
                  <a
                    href={`mailto:${email}`}
                    className="font-outfit text-white hover:text-[#F2E40A] transition text-xs sm:text-sm truncate block"
                  >
                    {email}
                  </a>
                }
              />

              <InfoCard
                icon={<Clock />}
                label={footer.scheduleLabel}
                value={<span />}
                subItems={footer.schedules.map((sch, sIdx) => (
                  <React.Fragment key={sIdx}>
                    <span>{sch.label}</span>
                    <span className="font-bold text-[#F2E40A]">{sch.hours}</span>
                  </React.Fragment>
                ))}
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-outfit text-blue-200">
          <div>
            <span className="font-semibold text-white">{footer.copyright}</span>
            <span className="hidden sm:inline"> Sobre Nosotros · Preguntas Frecuentes · Nuestras Redes</span>
          </div>

          <div className="flex items-center gap-4">
            {footer.legalLinks.map((item, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <span>·</span>}
                <span className="hover:text-white cursor-pointer">{item.label}</span>
              </React.Fragment>
            ))}

            {/* Scroll to top yellow button */}
            <Button
              variant="primary"
              size="sm"
              className="w-10 h-10 p-0 shadow-lg glow-yellow ml-2"
              aria-label="Volver arriba"
              onClick={scrollToTop}
            >
              <ArrowUp className="w-5 h-5 stroke-[2.5]" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface PreFooterAndFooterProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}