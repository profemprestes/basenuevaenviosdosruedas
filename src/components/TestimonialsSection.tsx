'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Heart, TrendingUp, MessageSquare, ExternalLink, Quote } from 'lucide-react';

const STATS = [
  {
    icon: Star,
    iconBg: 'bg-[#ffcc00]',
    iconColor: 'text-[#002273]',
    value: '5.0',
    stars: 5,
    label: '15 OPINIONES EN GOOGLE MAPS',
  },
  {
    icon: Heart,
    iconBg: 'bg-[#0950F6]',
    iconColor: 'text-white',
    value: '100%',
    label: 'FLOTA PROPIA SIN TERCERIZAR',
  },
  {
    icon: TrendingUp,
    iconBg: 'bg-blue-50 border border-blue-200',
    iconColor: 'text-[#0950F6]',
    value: '+7',
    label: 'AÑOS DE TRAYECTORIA EN MDQ',
  },
];

const CATEGORIES = [
  { id: 'TODAS', label: 'TODAS', count: 12 },
  { id: 'DESTACADAS', label: 'DESTACADAS' },
  { id: 'EXPRESS & FLEX', label: 'EXPRESS & FLEX' },
  { id: 'COMERCIOS & PYMES', label: 'COMERCIOS & PYMES' },
  { id: 'CARA HUMANA', label: 'CARA HUMANA' },
];

const ALL_REVIEWS = [
  {
    id: 1,
    category: ['TODAS', 'DESTACADAS', 'CARA HUMANA'],
    stars: 5,
    badge: 'Encargo Especial',
    title: '“MI HÉROE LOGÍSTICO POR SEGUNDO AÑO CONSECUTIVO”',
    text: 'Matías de Envíos DosRuedas se convirtió en mi héroe logístico 🍻. Tenía un encargo especial: comprar alfajores Havanna de temporada en MDQ, embalarlos con mimo y enviármelos para que viajen conmigo hasta Europa. Rapidez, comunicación clara y calidez humana.',
    author: 'Sol R',
    badgeUser: 'LOCAL GUIDE',
    time: 'Hace 26 semanas',
    avatar: 'S',
    avatarBg: 'bg-[#002273] text-white',
    cardTheme: 'white-border',
  },
  {
    id: 2,
    category: ['TODAS', 'DESTACADAS', 'EXPRESS & FLEX'],
    stars: 5,
    badge: 'Resolución Inmediata',
    title: '“RESOLVIERON MI PROBLEMA CON LA MEJOR PREDISPOSICIÓN”',
    text: 'Excelente el servicio, rápidos, muy atentos, resolvieron mi problema con la mejor predisposición, los recomiendo ampliamente.',
    author: 'Karen Herrera',
    badgeUser: '',
    time: 'Hace 13 semanas',
    avatar: 'K',
    avatarBg: 'bg-[#ffcc00] text-[#002273]',
    cardTheme: 'blue-dark',
  },
  {
    id: 3,
    category: ['TODAS', 'COMERCIOS & PYMES', 'EXPRESS & FLEX'],
    stars: 5,
    badge: 'Comercio Local',
    title: '“IMPECABLE PARA LLEVAR PEDIDOS A MIS CLIENTES”',
    text: 'Lo usé varias veces para llevar pedidos de mi tienda en Mar del Plata. Impecable el servicio. Además hacen cobro contra entrega sin problemas. ¡Unos genios!',
    author: 'Agustin Torres',
    badgeUser: 'CLIENTE FRECUENTE',
    time: 'Hace 48 semanas',
    avatar: 'A',
    avatarBg: 'bg-[#0950F6] text-white',
    cardTheme: 'white',
  },
  {
    id: 4,
    category: ['TODAS', 'DESTACADAS', 'COMERCIOS & PYMES'],
    stars: 5,
    badge: 'MercadoLibre Flex',
    title: '“ENTREGAS FLEX EN EL DÍA SIN DEMORAS”',
    text: 'Tengo local en el centro y vendemos por MercadoLibre. Desde que trabajamos con Envíos DosRuedas nuestras calificaciones de envíos están 100% en verde. Jamás un paquete demorado.',
    author: 'Luciana Berardi',
    badgeUser: 'VENDEDOR LÍDER',
    time: 'Hace 8 semanas',
    avatar: 'L',
    avatarBg: 'bg-emerald-600 text-white',
    cardTheme: 'white',
  },
  {
    id: 5,
    category: ['TODAS', 'EXPRESS & FLEX'],
    stars: 5,
    badge: 'Urgencia Repuestos',
    title: '“ME SALVARON UN DESPACHO EN MENOS DE 30 MINUTOS”',
    text: 'Se nos rompió una pieza clave en el taller y el cadete de DosRuedas retiró en Champagnat y me lo trajo volando. Super recomendados en toda la ciudad.',
    author: 'Marcos Díaz',
    badgeUser: 'TALLER MDQ',
    time: 'Hace 15 semanas',
    avatar: 'M',
    avatarBg: 'bg-[#ffcc00] text-[#002273]',
    cardTheme: 'blue-dark',
  },
  {
    id: 6,
    category: ['TODAS', 'CARA HUMANA'],
    stars: 5,
    badge: 'Trámite Bancario',
    title: '“MÁXIMA CONFIANZA Y PUNTUALIDAD”',
    text: 'Manejamos firmas notariales y trámites confidenciales. Siempre puntuales con el remito firmado de vuelta. Un equipo con verdadera vocación de servicio.',
    author: 'Dra. Florencia Gómez',
    badgeUser: 'ESTUDIO JURÍDICO',
    time: 'Hace 20 semanas',
    avatar: 'F',
    avatarBg: 'bg-[#002273] text-white',
    cardTheme: 'white-border',
  },
];

export default function TestimonialsSection() {
  const [activeCategory, setActiveCategory] = useState('TODAS');
  const [currentPage, setCurrentPage] = useState(0);

  const filteredReviews = ALL_REVIEWS.filter((r) => r.category.includes(activeCategory));

  const itemsPerPage = 3;
  const maxPages = Math.ceil(filteredReviews.length / itemsPerPage);

  const displayedReviews = filteredReviews.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : maxPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < maxPages - 1 ? prev + 1 : 0));
  };

  return (
    <section id="opiniones" className="w-full py-20 lg:py-28 bg-[#fbf8ff] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffcc00] text-[#002273] shadow-sm mb-4">
              <Star className="w-3.5 h-3.5 fill-[#002273] text-[#002273]" />
              <span className="font-bebas text-sm sm:text-base tracking-wider uppercase font-bold">
                5.0 / 5.0 EN GOOGLE MAPS · CALIFICACIÓN PERFECTA
              </span>
            </div>

            <h2 className="font-anton uppercase text-[#002273] text-4xl sm:text-5xl lg:text-[56px] leading-[1.0] tracking-tight mb-3">
              RESEÑAS REALES DE MAR DEL PLATA
            </h2>

            <p className="font-outfit text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed">
              Deslizá el carrusel para conocer la experiencia de vecinos, tiendas online y emprendedores que confían a diario en nuestra flota propia.
            </p>
          </div>

          {/* Navigation controls (Image 9: 1 / 12) */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <div className="px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[#002273] font-anton text-lg tracking-wider">
              {currentPage + 1} / {maxPages || 1}
            </div>

            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 flex items-center justify-center transition cursor-pointer shadow-sm"
              aria-label="Página anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-[#ffcc00] border border-[#ffcc00] text-[#002273] hover:bg-[#ffd633] flex items-center justify-center transition cursor-pointer shadow-md glow-yellow"
              aria-label="Siguiente página"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Top 3 Stats Bento Cards (Image 9) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {STATS.map((stat, sIdx) => {
            const IconC = stat.icon;
            return (
              <div
                key={sIdx}
                className="bg-white rounded-[28px] p-6 sm:p-7 border border-slate-200/90 shadow-lg flex items-center gap-5 hover:scale-[1.02] transition-transform"
              >
                <div className={`w-14 h-14 rounded-2xl ${stat.iconBg} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                  <IconC className={`w-7 h-7 ${stat.iconColor} ${sIdx === 0 ? 'fill-current' : ''}`} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-anton text-4xl text-[#002273] leading-none">
                      {stat.value}
                    </span>
                    {stat.stars && (
                      <div className="flex text-[#ffcc00]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#ffcc00]" />
                        ))}
                      </div>
                    )}
                  </div>
                  <p className="font-bebas text-slate-500 text-xs sm:text-sm tracking-wider uppercase mt-1">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Category Filters (Image 9) */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10">
          {CATEGORIES.map((cat) => {
            const isActive = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setCurrentPage(0);
                }}
                className={`px-4 py-2 rounded-full font-bebas text-sm sm:text-base tracking-wider uppercase transition-all shadow-sm cursor-pointer ${
                  isActive
                    ? 'bg-[#00277e] text-white ring-2 ring-[#ffcc00] shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <span>{cat.label}</span>
                {cat.count && <span className="ml-1.5 text-xs text-[#ffcc00]">({cat.count})</span>}
              </button>
            );
          })}
        </div>

        {/* Testimonial Cards Carousel Grid (Image 9: 3 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mb-12">
          {displayedReviews.map((rev) => {
            const isDark = rev.cardTheme === 'blue-dark';
            const isBorder = rev.cardTheme === 'white-border';

            return (
              <div
                key={rev.id}
                className={`rounded-[32px] p-7 sm:p-8 flex flex-col justify-between relative transition-all shadow-xl hover:scale-[1.01] ${
                  isDark
                    ? 'bg-[#00277e] text-white border border-blue-400/30'
                    : isBorder
                    ? 'bg-white text-slate-800 border-2 border-[#ffcc00]/70'
                    : 'bg-white text-slate-800 border border-slate-200/90'
                }`}
              >
                {/* Large Background Quote Watermark */}
                <Quote
                  className={`absolute top-6 right-6 w-14 h-14 opacity-10 pointer-events-none ${
                    isDark ? 'text-white' : 'text-[#0950F6]'
                  }`}
                />

                <div>
                  {/* Top Bar: Stars + Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-[#ffcc00] gap-0.5">
                      {[...Array(rev.stars)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#ffcc00]" />
                      ))}
                    </div>

                    <span
                      className={`px-3 py-1 rounded-full font-bebas text-xs tracking-wider uppercase ${
                        isDark
                          ? 'bg-blue-950 text-blue-200 border border-blue-400/30'
                          : 'bg-blue-50 text-[#0950F6] border border-blue-200'
                      }`}
                    >
                      {rev.badge}
                    </span>
                  </div>

                  {/* Review Title */}
                  <h3
                    className={`font-anton uppercase text-xl sm:text-2xl tracking-tight leading-snug mb-4 ${
                      isDark ? 'text-[#ffcc00]' : 'text-[#002273]'
                    }`}
                  >
                    {rev.title}
                  </h3>

                  {/* Review Text */}
                  <p
                    className={`font-outfit text-sm sm:text-base leading-relaxed mb-6 ${
                      isDark ? 'text-blue-100' : 'text-slate-600'
                    }`}
                  >
                    {rev.text}
                  </p>
                </div>

                {/* Author Info */}
                <div className={`pt-4 border-t flex items-center justify-between ${
                  isDark ? 'border-blue-400/20' : 'border-slate-100'
                }`}>
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full ${rev.avatarBg} font-anton text-lg flex items-center justify-center flex-shrink-0 shadow-sm`}
                    >
                      {rev.avatar}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`font-bebas text-base uppercase tracking-wide ${
                          isDark ? 'text-white' : 'text-[#002273]'
                        }`}>
                          {rev.author}
                        </span>
                        {rev.badgeUser && (
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-mono-data font-bold bg-[#ffcc00] text-[#002273]">
                            {rev.badgeUser}
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-slate-400 font-mono-data">
                        {rev.time}
                      </span>
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-blue-900/40 flex items-center justify-center text-slate-400">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Carousel Dots */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {[...Array(maxPages)].map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentPage(dotIdx)}
              className={`transition-all ${
                dotIdx === currentPage
                  ? 'w-8 h-2.5 rounded-full bg-[#ffcc00]'
                  : 'w-2.5 h-2.5 rounded-full bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Página ${dotIdx + 1}`}
            />
          ))}
        </div>

        {/* Big Yellow Bottom Button (Image 9) */}
        <div className="flex justify-center">
          <a
            href="https://maps.google.com/?q=Friuli+1972+Mar+del+Plata"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#ffcc00] hover:bg-[#ffd633] text-[#002273] font-bebas text-xl sm:text-2xl tracking-wider uppercase transition-all transform hover:scale-[1.03] active:scale-[0.98] shadow-xl glow-yellow font-bold"
          >
            <span>VER FICHA Y OPINIONES EN GOOGLE MAPS</span>
            <ExternalLink className="w-5 h-5 stroke-[2.5]" />
          </a>
        </div>

      </div>
    </section>
  );
}
