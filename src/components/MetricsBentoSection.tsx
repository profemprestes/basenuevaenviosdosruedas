'use client';

import React from 'react';
import { Clock, Shield, Truck, Users, CheckCircle2 } from 'lucide-react';
import { METRICS_CONTENT } from '@/content/home';

const FEATURE_ICONS = [Clock, Shield];

export default function MetricsBentoSection() {
  const metrics = METRICS_CONTENT;

  return (
    <section id="nosotros" className="w-full py-20 lg:py-28 bg-[#FFFFFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Narrative & Values */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F2E40A]/25 border border-[#F2E40A] text-[#002273] mb-5">
              <span className="font-bebas text-sm tracking-wider uppercase font-bold">
                {metrics.badge}
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-anton uppercase text-[#0C59F2] text-4xl sm:text-5xl lg:text-[56px] leading-[1.0] tracking-tight mb-6">
              {metrics.headline}
            </h2>

            {/* Paragraph */}
            <p className="font-outfit text-base sm:text-lg text-slate-700 leading-relaxed mb-10 max-w-xl">
              {metrics.description}
            </p>

            {/* Feature Bullets */}
            <div className="space-y-6 w-full max-w-xl">
              {metrics.features.map((feature, index) => {
                const IconComp = FEATURE_ICONS[index] || Clock;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#F2E40A] flex items-center justify-center flex-shrink-0 shadow-sm">
                      <IconComp className="w-6 h-6 text-[#002273]" />
                    </div>
                    <div>
                      <h3 className="font-anton uppercase text-[#002273] text-xl tracking-normal mb-1">
                        {feature.title}
                      </h3>
                      <p className="font-outfit text-sm sm:text-base text-slate-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Bento Metrics Grid */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            {/* Top Large Electric Blue Card */}
            <div className="w-full bg-[#0C59F2] rounded-[32px] p-7 sm:p-9 text-white shadow-xl glow-blue relative overflow-hidden group hover:scale-[1.01] transition-transform">
              {/* Subtle background circles */}
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-60 h-60 bg-blue-400/20 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#F2E40A] flex items-center justify-center shadow-lg">
                  <Truck className="w-7 h-7 text-[#002273]" />
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-300/30 text-blue-100 font-bebas text-sm tracking-wider">
                  {metrics.heroStat.tag}
                </div>
              </div>

              {/* Huge Stat */}
              <div className="font-anton text-7xl sm:text-8xl lg:text-[96px] text-white leading-none tracking-tight mb-3">
                {metrics.heroStat.value}
              </div>

              {/* Subtitle */}
              <p className="font-bebas text-blue-100 text-lg sm:text-xl tracking-wider uppercase max-w-md">
                {metrics.heroStat.label}
              </p>
            </div>

            {/* Bottom 2 White Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Card 1: 0 Paquetes Extraviados */}
              <div className="bg-white rounded-[28px] p-6 sm:p-7 border border-slate-200/90 shadow-lg hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-6 h-6 text-[#0C59F2]" />
                </div>
                <div className="font-anton text-6xl text-[#0C59F2] leading-none mb-2">
                  {metrics.cardLostPackages.value}
                </div>
                <p className="font-bebas text-slate-500 text-base tracking-wider uppercase">
                  {metrics.cardLostPackages.label}
                </p>
              </div>

              {/* Card 2: +50 Emprendedores Confían */}
              <div className="bg-white rounded-[28px] p-6 sm:p-7 border border-slate-200/90 shadow-lg hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-[#0C59F2]" />
                </div>
                <div className="font-anton text-6xl text-[#0C59F2] leading-none mb-2">
                  {metrics.cardEntrepreneurs.value}
                </div>
                <p className="font-bebas text-slate-500 text-base tracking-wider uppercase">
                  {metrics.cardEntrepreneurs.label}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
