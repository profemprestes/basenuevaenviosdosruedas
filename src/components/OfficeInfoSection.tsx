'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Zap, ArrowRight, Sparkles, Truck } from 'lucide-react';
import { OFFICE_INFO_CONTENT } from '@/content/quote';
import { Badge, Button, Card, IconBadge } from '@/components/atoms';
import { cn } from '@/lib/utils';

interface ScheduleItemProps {
  schedule: typeof OFFICE_INFO_CONTENT.schedules[0];
}

function ScheduleItem({ schedule }: ScheduleItemProps) {
  return (
    <div className="flex items-center justify-between text-sm text-blue-100 font-mono-data">
      <span className="font-bebas text-xs tracking-wider uppercase text-blue-300">{schedule.label}</span>
      <div className="flex items-center gap-3">
        <span className="font-bold text-[#F2E40A]">{schedule.hours}</span>
        <Badge variant="green" className="text-[10px] px-1.5 py-0.5">{schedule.status}</Badge>
      </div>
    </div>
  );
}

interface InfoRowProps {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}

function InfoRow({ icon, label, value }: InfoRowProps) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-2xl bg-blue-900/40 border border-blue-400/20">
      <div className="w-5 h-5 text-[#F2E40A] flex-shrink-0 mt-0.5" aria-hidden="true">
        {icon}
      </div>
      <div>
        <p className="font-bebas text-xs tracking-wider uppercase text-blue-300 mb-1">{label}</p>
        <div className="font-outfit text-white hover:text-[#F2E40A] transition">{value}</div>
      </div>
    </div>
  );
}

export default function OfficeInfoSection() {
  const content = OFFICE_INFO_CONTENT;

  return (
    <section id="office-info" aria-label="Base de operaciones MDQ" className="w-full py-20 lg:py-28 bg-[#0C59F2] bg-tech-grid relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Info Card */}
          <div className="lg:col-span-6">
            <Card variant="bento-blue" padding="xl" className="rounded-[36px] relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <Badge variant="blue-dark" className="mb-4 inline-flex">
                  <Sparkles className="w-3.5 h-3.5 fill-[#F2E40A] text-[#F2E40A]" aria-hidden="true" />
                  {content.badge}
                </Badge>

                <h2 className="font-anton uppercase text-white text-3xl sm:text-4xl lg:text-[44px] leading-tight tracking-tight text-white mb-2">
                  {content.headline}
                </h2>

                <p className="font-outfit text-blue-200 text-sm sm:text-base leading-relaxed mb-8">
                  {content.subheadline}
                </p>

                <div className="space-y-4 mb-8">
                  <InfoRow
                    icon={<MapPin />}
                    label={content.address.label}
                    value={<p className="font-outfit text-white font-medium">{content.address.value}</p>}
                  />
                  <InfoRow
                    icon={<Phone />}
                    label={content.phone.label}
                    value={
                      <a href={content.phone.href} className="font-anton text-lg text-white hover:text-[#F2E40A] transition">
                        {content.phone.value}
                      </a>
                    }
                  />
                  <InfoRow
                    icon={<Mail />}
                    label={content.email.label}
                    value={
                      <a href={content.email.href} className="font-outfit text-white hover:text-[#F2E40A] transition text-sm truncate block">
                        {content.email.value}
                      </a>
                    }
                  />
                </div>

                <div className="pt-6 border-t border-blue-400/20">
                  <p className="font-bebas text-xs tracking-widest uppercase text-blue-300 mb-4">
                    {content.additionalInfo}
                  </p>
                  <div className="space-y-3">
                    {content.schedules.map((schedule, idx) => (
                      <ScheduleItem key={idx} schedule={schedule} />
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column: Map/Visual Card */}
          <div className="lg:col-span-6 flex justify-center">
            <Card variant="bento-dark" padding="xl" className="rounded-[36px] w-full max-w-md relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#0C59F2_1px,transparent_1px),linear-gradient(to_bottom,#0C59F2_1px,transparent_1px)] bg-[size:24px_24px] opacity-10" />

              <div className="relative z-10 text-center">
                <IconBadge variant="yellow-blue" size="xl" className="mx-auto mb-6 w-24 h-24 sm:w-28 sm:h-28 rounded-3xl border-2 border-[#F2E40A] bg-[#00174e] shadow-lg glow-yellow flex flex-col items-center justify-center p-4">
                  <span className="text-[9px] font-extrabold text-blue-200 tracking-wider">HUB</span>
                  <span className="font-anton text-sm text-[#F2E40A] tracking-tight">OPERATIVO</span>
                  <div className="flex gap-1 my-1">
                    <div className="w-4 h-4 rounded-full border border-[#F2E40A] flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F2E40A]" />
                    </div>
                    <div className="w-4 h-4 rounded-full border border-[#F2E40A] flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F2E40A]" />
                    </div>
                  </div>
                  <span className="text-[8px] font-mono-data text-blue-300 font-bold">FRIULI 1972</span>
                  <div className="absolute -bottom-2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-[#3b82f6]" />
                </IconBadge>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-blue-900/40 border border-blue-400/20">
                    <div className="w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center flex-shrink-0 shadow">
                      <Zap className="w-5 h-5 text-white" aria-hidden="true" />
                    </div>
                    <div className="text-left">
                      <p className="font-bebas text-white text-sm tracking-wide">GPS ACTIVO EN FLOTA</p>
                      <p className="font-outfit text-xs text-blue-200">Rastreo en tiempo real</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-blue-900/40 border border-blue-400/20">
                    <div className="w-10 h-10 rounded-xl bg-[#F2E40A] flex items-center justify-center flex-shrink-0 shadow">
                      <ShieldCheck className="w-5 h-5 text-[#002273]" aria-hidden="true" />
                    </div>
                    <div className="text-left">
                      <p className="font-bebas text-white text-sm tracking-wide">SOPORTE EN DIRECTO</p>
                      <p className="font-outfit text-xs text-blue-200">Equipo logístico disponible</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-blue-900/40 border border-blue-400/20">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0 shadow">
                      <Truck className="w-5 h-5 text-[#F2E40A]" aria-hidden="true" />
                    </div>
                    <div className="text-left">
                      <p className="font-bebas text-white text-sm tracking-wide">SALIDAS CADA 30 MIN</p>
                      <p className="font-outfit text-xs text-blue-200">Despachos programados</p>
                    </div>
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  leftIcon={<ArrowRight className="w-4 h-4 stroke-[2.5]" />}
                  onClick={() => window.open('https://wa.me/542236602699', '_blank', 'noopener,noreferrer')}
                >
                  COORDINAR DESPACHO
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}