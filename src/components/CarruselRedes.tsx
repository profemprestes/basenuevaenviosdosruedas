'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

function FacebookSvg({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramSvg({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function WhatsAppSvg({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.510l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.290.173-1.414z" />
    </svg>
  );
}

const NETWORKS = [
  {
    id: 'facebook',
    name: 'FACEBOOK',
    handle: 'Envíos DosRuedas',
    desc: 'Seguí nuestro día a día, novedades operativas y la comunidad comercial en Mar del Plata.',
    action: 'SEGUIR COMUNIDAD',
    url: 'https://www.facebook.com/share/1RnSzyweir/',
    icon: FacebookSvg,
    badgeText: 'FACEBOOK OFICIAL',
    cardBg: 'bg-[#1877F2]/10 hover:bg-[#1877F2]/15',
    cardBorder: 'border-[#1877F2]/30 hover:border-[#1877F2]/70',
    badgeBg: 'bg-[#1877F2]/20 text-[#1877F2] border-[#1877F2]/40',
    iconBoxBg: 'bg-[#1877F2] text-white shadow-lg shadow-[#1877F2]/40',
    handleColor: 'text-[#1877F2]',
    watermarkColor: 'text-[#1877F2]/10 group-hover:text-[#1877F2]/20',
    btnBg: 'bg-[#1877F2] hover:bg-[#166fe5] text-white shadow-md shadow-[#1877F2]/30',
    btnIconBg: 'bg-white/20 text-white',
    glow: 'from-[#1877F2]/20 to-transparent',
  },
  {
    id: 'instagram',
    name: 'INSTAGRAM',
    handle: '@enviosdosruedas',
    desc: 'Mirá el detrás de escena de nuestros riders y la flota recorriendo las calles de MDQ.',
    action: 'VER CONTENIDO',
    url: 'https://www.instagram.com/enviosdosruedas/',
    icon: InstagramSvg,
    badgeText: 'INSTAGRAM MDQ',
    cardBg: 'bg-gradient-to-br from-[#833AB4]/10 via-[#FD1D1D]/10 to-[#F77737]/10 hover:from-[#833AB4]/15 hover:via-[#FD1D1D]/15 hover:to-[#F77737]/15',
    cardBorder: 'border-[#E1306C]/30 hover:border-[#E1306C]/70',
    badgeBg: 'bg-gradient-to-r from-[#833AB4]/20 via-[#FD1D1D]/20 to-[#F77737]/20 text-[#FD1D1D] border-[#E1306C]/40',
    iconBoxBg: 'bg-gradient-to-tr from-[#F56040] via-[#FD1D1D] to-[#833AB4] text-white shadow-lg shadow-[#E1306C]/40',
    handleColor: 'text-[#FD1D1D]',
    watermarkColor: 'text-[#E1306C]/10 group-hover:text-[#E1306C]/20',
    btnBg: 'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-95 text-white shadow-md shadow-[#FD1D1D]/30',
    btnIconBg: 'bg-white/20 text-white',
    glow: 'from-[#E1306C]/20 to-transparent',
  },
  {
    id: 'whatsapp',
    name: 'WHATSAPP',
    handle: '+54 223 660-2699',
    desc: 'Escribinos directamente para consultas, contrataciones o soporte express al toque.',
    action: 'INICIAR CHAT',
    url: 'https://wa.me/542236602699',
    icon: WhatsAppSvg,
    badgeText: 'WHATSAPP DIRECTO',
    cardBg: 'bg-[#25D366]/10 hover:bg-[#25D366]/15',
    cardBorder: 'border-[#25D366]/30 hover:border-[#25D366]/70',
    badgeBg: 'bg-[#25D366]/20 text-[#25D366] border-[#25D366]/40',
    iconBoxBg: 'bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40',
    handleColor: 'text-[#25D366]',
    watermarkColor: 'text-[#25D366]/10 group-hover:text-[#25D366]/20',
    btnBg: 'bg-dispatch-green hover:bg-[#20bd5a] text-dark-blue font-bold shadow-md shadow-[#25D366]/30',
    btnIconBg: 'bg-dark-blue/15 text-dark-blue',
    glow: 'from-[#25D366]/20 to-transparent',
  },
];

export default function CarruselRedes() {
  return (
    <section
      id="carrusel-redes"
      aria-label="Nuestra comunidad digital en redes sociales"
      className="py-20 md:py-28 bg-dark-blue text-white border-y border-blue-400/20 relative overflow-hidden bg-tech-grid"
    >
      {/* Background Decorative Mesh & Depth Highlights */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(242,228,10,0.08),transparent_50%)] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Segment */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1.5 bg-signal-yellow text-dark-blue rounded-full text-xs font-anton tracking-wider inline-block uppercase shadow-sm">
            Nuestra Comunidad Digital
          </span>

          <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-anton uppercase tracking-tight leading-[0.95] text-center">
            SEGUÍ NUESTRO <span className="text-signal-yellow">MOVIMIENTO</span>
          </h2>

          <p className="text-blue-100 text-sm sm:text-base leading-relaxed font-outfit max-w-2xl mx-auto opacity-90">
            Sumate a nuestros canales digitales y enterate al toque de todas las novedades operativas en Mar del Plata.
          </p>
          <div className="h-1 w-20 bg-signal-yellow mx-auto rounded-full mt-4" />
        </div>

        {/* Networks Grid: 3 Unique Branded Cards with Motion entry */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
          {NETWORKS.map((net, index) => {
            const Icon = net.icon;

            return (
              <motion.div
                key={net.id}
                initial={{ opacity: 0, y: 35, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.215, 0.61, 0.355, 1] }}
                className={`social-block group relative rounded-3xl p-2 transition-all duration-300 border ${net.cardBorder} bg-midnight-abyss/85 backdrop-blur-md hover:-translate-y-1.5 shadow-2xl`}
              >
                {/* Internal Glow on Hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-b ${net.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                <div className={`relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between h-[390px] md:h-[430px] overflow-hidden ${net.cardBg} border border-white/10 transition-colors`}>
                  {/* Background Watermark Icon that enlarges and tilts on hover */}
                  <div className={`absolute -right-8 -bottom-8 ${net.watermarkColor} transition-all duration-500 ease-out group-hover:scale-125 group-hover:-rotate-12 pointer-events-none select-none`}>
                    <Icon className="w-56 h-56" />
                  </div>

                  {/* Top Area: Badge & Branded Icon Box */}
                  <div className="z-10 text-left space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-bebas tracking-widest px-3 py-1 rounded-full uppercase border ${net.badgeBg}`}>
                        {net.badgeText}
                      </span>

                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${net.iconBoxBg}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-anton text-3xl sm:text-4xl uppercase tracking-tight leading-none text-white">
                        {net.name}
                      </h3>
                      <p className={`font-mono-data text-xs font-bold mt-1.5 ${net.handleColor}`}>
                        {net.handle}
                      </p>
                    </div>

                    <p className="font-outfit text-xs sm:text-sm leading-relaxed text-blue-100/90 font-light">
                      {net.desc}
                    </p>
                  </div>

                  {/* Bottom Action Area: Custom CTA Button per Network */}
                  <div className="z-10 pt-4 border-t border-white/10">
                    <a
                      href={net.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full inline-flex items-center justify-between font-anton uppercase tracking-wider text-xs sm:text-sm px-5 py-3 rounded-full transition-all duration-200 group/btn ${net.btnBg}`}
                    >
                      <span>{net.action}</span>
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ml-2 transition-transform duration-200 group-hover/btn:translate-x-1 ${net.btnIconBg}`}>
                        <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
