'use client';

import React from 'react';
import { MessageCircle, ArrowRight, Users, Globe, Sparkles } from 'lucide-react';
import { SOCIAL_CHANNELS_CONTENT } from '@/content/quote';
import { Badge, Button, Card, IconBadge } from '@/components/atoms';
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

const ICON_MAP = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  whatsapp: MessageCircle,
};

const CHANNEL_STYLES = {
  facebook: {
    iconBg: 'bg-blue-600 text-white',
    iconColor: 'text-blue-600',
    accentColor: 'text-blue-600 hover:text-blue-700',
    badgeBg: 'bg-blue-50 border-blue-200 text-blue-700',
    buttonBg: 'bg-blue-600 hover:bg-blue-700 text-white',
  },
  instagram: {
    iconBg: 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 text-white',
    iconColor: 'text-pink-600',
    accentColor: 'text-pink-600 hover:text-pink-700',
    badgeBg: 'bg-pink-50 border-pink-200 text-pink-700',
    buttonBg: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white',
  },
  whatsapp: {
    iconBg: 'bg-[#25D366] text-white',
    iconColor: 'text-[#25D366]',
    accentColor: 'text-[#25D366] hover:text-[#10b981]',
    badgeBg: 'bg-emerald-50 border-emerald-200 text-emerald-700',
    buttonBg: 'bg-[#25D366] hover:bg-[#10b981] text-white',
  },
};

interface ChannelCardProps {
  channel: typeof SOCIAL_CHANNELS_CONTENT.channels[0];
}

function ChannelCard({ channel }: ChannelCardProps) {
  const IconComp = ICON_MAP[channel.id];
  const styles = CHANNEL_STYLES[channel.id];

  return (
    <Card variant="bento-white" padding="xl" hover className="rounded-[28px] flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <div className={cn('w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg', styles.iconBg)}>
          <IconComp className="w-7 h-7" aria-hidden="true" />
        </div>
        <Badge variant="category-light" className={cn('text-xs', styles.badgeBg)}>
          {channel.label}
        </Badge>
      </div>

      <h3 className="font-anton uppercase text-[#002273] text-2xl tracking-tight mb-2">
        {channel.title}
      </h3>

      <p className="font-outfit text-slate-600 text-base leading-relaxed mb-6 flex-1">
        {channel.description}
      </p>

      <a
        href={channel.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bebas text-base tracking-wider uppercase transition-all',
          'hover:scale-[1.03] shadow-lg cursor-pointer',
          styles.buttonBg
        )}
      >
        <span>{channel.ctaText}</span>
        <ArrowRight className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
      </a>
    </Card>
  );
}

export default function SocialChannelsSection() {
  const content = SOCIAL_CHANNELS_CONTENT;

  return (
    <section id="social-channels" aria-label="Canales digitales" className="w-full py-20 lg:py-28 bg-[#FFFFFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="signal" className="mb-4 inline-flex">
            <Sparkles className="w-3.5 h-3.5 fill-[#002273] text-[#002273]" aria-hidden="true" />
            {content.badge}
          </Badge>

          <h2 className="font-anton uppercase text-[#0C59F2] text-4xl sm:text-5xl lg:text-[56px] leading-[1.0] tracking-tight mb-4">
            {content.headline}
          </h2>

          <p className="font-outfit text-slate-600 text-lg leading-relaxed">
            {content.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {content.channels.map((channel) => (
            <ChannelCard key={channel.id} channel={channel} />
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Card variant="bento-blue" padding="lg" className="rounded-[24px] text-center">
            <IconBadge variant="yellow-blue" size="xl" className="mx-auto mb-4">
              <Users className="w-7 h-7" />
            </IconBadge>
            <div className="font-anton text-4xl text-[#F2E40A] leading-none mb-1">+50K</div>
            <p className="font-bebas text-blue-100 text-sm tracking-wider uppercase">SEGUIDORES COMBINADOS</p>
          </Card>

          <Card variant="bento-blue" padding="lg" className="rounded-[24px] text-center">
            <IconBadge variant="yellow-blue" size="xl" className="mx-auto mb-4">
              <Globe className="w-7 h-7" />
            </IconBadge>
            <div className="font-anton text-4xl text-[#F2E40A] leading-none mb-1">24/7</div>
            <p className="font-bebas text-blue-100 text-sm tracking-wider uppercase">DISPONIBLE POR WHATSAPP</p>
          </Card>

          <Card variant="bento-blue" padding="lg" className="rounded-[24px] text-center">
            <IconBadge variant="yellow-blue" size="xl" className="mx-auto mb-4">
              <Sparkles className="w-7 h-7 fill-[#002273] text-[#002273]" />
            </IconBadge>
            <div className="font-anton text-4xl text-[#F2E40A] leading-none mb-1">+7</div>
            <p className="font-bebas text-blue-100 text-sm tracking-wider uppercase">AÑOS EN MDQ</p>
          </Card>
        </div>
      </div>
    </section>
  );
}