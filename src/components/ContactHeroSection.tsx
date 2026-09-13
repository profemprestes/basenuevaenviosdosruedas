'use client';

import React from 'react';
import Image from 'next/image';
import { MessageCircle, Phone, Mail, ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { CONTACT_HERO_CONTENT } from '@/content/quote';
import { Badge, Button } from '@/components/atoms';
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
    whatsapp: 'bg-dispatch-green/10 border-dispatch-green/30 text-dispatch-green hover:bg-dispatch-green/20 hover:border-dispatch-green/60',
    phone: 'bg-electric-blue/10 border-electric-blue/30 text-electric-blue hover:bg-electric-blue/20 hover:border-electric-blue/60',
    email: 'bg-priority-amber/10 border-priority-amber/30 text-priority-amber hover:bg-priority-amber/20 hover:border-priority-amber/60',
  };

  const iconBgStyles = {
    whatsapp: 'bg-dispatch-green text-white shadow-emerald-500/30',
    phone: 'bg-electric-blue text-white shadow-blue-500/30',
    email: 'bg-priority-amber text-white shadow-amber-500/30',
  };

  return (
    <a
      href={channel.href}
      target={channel.variant === 'whatsapp' ? '_blank' : undefined}
      rel={channel.variant === 'whatsapp' ? 'noopener noreferrer' : undefined}
      className={cn(
        'group flex flex-col justify-between h-full p-6 sm:p-7 rounded-[28px] border-2 transition-all duration-300 bg-white/95 backdrop-blur-sm',
        'hover:-translate-y-1.5 hover:shadow-xl',
        variantStyles[channel.variant]
      )}
    >
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className={cn('w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110', iconBgStyles[channel.variant])}>
            <IconComp className="w-6 h-6" aria-hidden="true" />
          </div>
          <Badge variant={channel.variant === 'whatsapp' ? 'green' : channel.variant === 'phone' ? 'yellow' : 'amber'} className="text-[11px] font-bebas tracking-wider uppercase">
            {channel.title}
          </Badge>
        </div>

        <h3 className="font-anton uppercase text-dark-blue text-2xl tracking-tight mb-2 group-hover:text-electric-blue transition-colors">
          {channel.title}
        </h3>

        <p className="font-outfit text-slate-600 text-sm leading-relaxed mb-6">
          {channel.description}
        </p>
      </div>

      <Button
        variant={channel.variant === 'whatsapp' ? 'whatsapp' : channel.variant === 'phone' ? 'primary' : 'secondary'}
        size="md"
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
    <section
      id="contacto-hero"
      aria-label="Canales de contacto directo"
      className="w-full pt-10 pb-16 lg:pt-14 lg:pb-24 bg-[#FFFFFF] relative overflow-hidden"
    >
      {/* Subtle background tech grid and soft accent spotlights */}
      <div className="absolute inset-0 bg-light-grid pointer-events-none opacity-60" />
      <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-blue-100/60 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-yellow-100/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Split: Left Headline + Right Box Image Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 lg:mb-20">
          
          {/* Left Column: Headline & Direct Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <Badge variant="signal" className="mb-6 inline-flex">
              <Sparkles className="w-3.5 h-3.5 fill-[#002273] text-[#002273]" aria-hidden="true" />
              {content.badge}
            </Badge>

            <h1 className="font-anton uppercase text-[#0C59F2] text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[0.96] tracking-tight mb-6">
              ¿HABLAMOS <span className="text-[#002273]">AHORA?</span>
              <span className="block text-2xl sm:text-3xl md:text-4xl text-[#002273] font-normal tracking-normal mt-2">
                TU LOGÍSTICA EN MAR DEL PLATA
              </span>
            </h1>

            <p className="font-outfit text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mb-8">
              {content.subheadline}
            </p>

            {/* Micro Highlights Pill Row */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-outfit text-slate-700">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100/90 border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span className="font-medium">Respuesta &lt; 2 min</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100/90 border border-slate-200">
                <Zap className="w-4 h-4 text-[#0C59F2]" />
                <span className="font-medium">Cotizaciones en tiempo real</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100/90 border border-slate-200">
                <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
                <span className="font-medium">Cobertura total MDQ & Batán</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact 3D Box Packaging Visual */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
              className="relative w-full max-w-[420px] aspect-square flex items-center justify-center"
            >
              {/* Decorative Brand Framing Rings */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-blue-500/10 via-[#F2E40A]/15 to-transparent blur-xl pointer-events-none" />
              <div className="absolute inset-0 rounded-[36px] bg-gradient-to-b from-[#00277e]/5 to-transparent border border-blue-200/50 pointer-events-none" />

              {/* Floating Box Image with subtle hovering physics */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
                className="relative z-10 w-[88%] h-[88%] flex items-center justify-center drop-shadow-2xl"
              >
                <Image
                  src="/caja_envios.png"
                  alt="Caja oficial Envíos DosRuedas"
                  width={500}
                  height={500}
                  priority
                  className="w-full h-full object-contain filter drop-shadow-xl"
                />
              </motion.div>

              {/* Floating Badge Indicator: Base Central */}
              <div className="absolute -bottom-2 -left-2 sm:bottom-4 sm:left-2 z-20 px-4 py-2.5 rounded-2xl bg-[#002273] text-white border-2 border-[#F2E40A] shadow-xl flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F2E40A] animate-ping" />
                <div>
                  <p className="font-bebas text-[11px] text-[#F2E40A] tracking-wider uppercase leading-tight">Flota en calle</p>
                  <p className="font-anton text-xs uppercase tracking-tight text-white leading-tight">Friuli 1972 · MDQ</p>
                </div>
              </div>

              {/* Floating Badge Indicator: Colecta Activa */}
              <div className="absolute top-2 -right-2 sm:top-4 sm:right-2 z-20 px-3.5 py-1.5 rounded-xl bg-white/95 border border-slate-200 text-[#002273] shadow-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="font-mono-data text-xs font-bold">SLA Flex 100%</span>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Bottom Split: Direct 3 Channel Cards Grid */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px flex-1 bg-slate-200" />
            <span className="font-bebas text-xs sm:text-sm uppercase tracking-widest text-slate-400">
              Elegí cómo contactarnos al instante
            </span>
            <span className="h-px flex-1 bg-slate-200" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {content.channels.map((channel) => (
              <ChannelCard key={channel.icon} channel={channel} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}