'use client';

import React from 'react';
import { MessageCircle, Phone, Mail, ArrowRight } from 'lucide-react';
import { CONTACT_HERO_CONTENT } from '@/content/quote';
import { Badge, Button, Card } from '@/components/atoms';
import { cn } from '@/lib/utils';

const ICON_MAP = {
  MessageCircle,
  Phone,
  Mail,
};

interface ChannelCardProps {
  channel: typeof CONTACT_HERO_CONTENT.channels[0];
}

function ChannelCard({ channel }: ChannelCardProps) {
  const IconComp = ICON_MAP[channel.icon as keyof typeof ICON_MAP] || MessageCircle;

  const variantStyles = {
    whatsapp: 'bg-[#25D366]/10 border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/20',
    phone: 'bg-[#0C59F2]/10 border-[#0C59F2]/30 text-[#0C59F2] hover:bg-[#0C59F2]/20',
    email: 'bg-[#F59E0B]/10 border-[#F59E0B]/30 text-[#F59E0B] hover:bg-[#F59E0B]/20',
  };

  const iconBgStyles = {
    whatsapp: 'bg-[#25D366] text-white',
    phone: 'bg-[#0C59F2] text-white',
    email: 'bg-[#F59E0B] text-white',
  };

  return (
    <a
      href={channel.href}
      target={channel.variant === 'whatsapp' ? '_blank' : undefined}
      rel={channel.variant === 'whatsapp' ? 'noopener noreferrer' : undefined}
      className={cn(
        'group flex flex-col h-full p-6 sm:p-8 rounded-[28px] border-2 transition-all duration-300',
        'hover:scale-[1.02] hover:shadow-xl',
        variantStyles[channel.variant]
      )}
    >
      <div className="flex items-center justify-between mb-6">
        <div className={cn('w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg', iconBgStyles[channel.variant])}>
          <IconComp className="w-7 h-7" aria-hidden="true" />
        </div>
        <Badge variant={channel.variant === 'whatsapp' ? 'green' : channel.variant === 'phone' ? 'yellow' : 'amber'} className="text-xs">
          {channel.title}
        </Badge>
      </div>

      <h3 className="font-anton uppercase text-[#002273] text-2xl sm:text-3xl tracking-tight mb-3 group-hover:text-[#0C59F2] transition-colors">
        {channel.title}
      </h3>

      <p className="font-outfit text-slate-600 text-base leading-relaxed mb-6 flex-1">
        {channel.description}
      </p>

      <Button
        variant={channel.variant === 'whatsapp' ? 'whatsapp' : channel.variant === 'phone' ? 'primary' : 'secondary'}
        size="lg"
        fullWidth
        rightIcon={<ArrowRight className="w-4 h-4 stroke-[2.5]" />}
        className="mt-auto"
      >
        {channel.ctaText}
      </Button>
    </a>
  );
}

export default function ContactHeroSection() {
  const content = CONTACT_HERO_CONTENT;

  return (
    <section id="contacto-hero" aria-label="Canales de contacto directo" className="w-full py-20 lg:py-28 bg-[#FFFFFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="signal" className="mb-4 inline-flex">
            <span className="w-3.5 h-3.5 rounded-full bg-[#F2E40A] flex-shrink-0" aria-hidden="true" />
            {content.badge}
          </Badge>

          <h2 className="font-anton uppercase text-[#0C59F2] text-4xl sm:text-5xl lg:text-[60px] leading-[1.0] tracking-tight mb-6">
            {content.headline}
          </h2>

          <p className="font-outfit text-slate-600 text-lg leading-relaxed">
            {content.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {content.channels.map((channel, idx) => (
            <ChannelCard key={channel.icon} channel={channel} />
          ))}
        </div>
      </div>
    </section>
  );
}