'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Heart, TrendingUp, MessageSquare, ExternalLink, Quote } from 'lucide-react';
import { TESTIMONIALS_CONTENT, ReviewStatItem } from '@/content/home';

const STAT_ICON_MAP = {
  star: Star,
  heart: Heart,
  trending: TrendingUp,
};

export default function TestimonialsSection() {
  const content = TESTIMONIALS_CONTENT;
  const [activeCategory, setActiveCategory] = useState('TODAS');
  const [currentPage, setCurrentPage] = useState(0);

  const filteredReviews = content.reviews.filter((r) => r.category.includes(activeCategory));

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
    <section id="opiniones" className="w-full py-20 lg:py-28 bg-[#FFFFFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F2E40A] text-[#002273] shadow-sm mb-4">
              <Star className="w-3.5 h-3.5 fill-[#002273] text-[#002273]" />
              <span className="font-bebas text-sm sm:text-base tracking-wider uppercase font-bold">
                {content.badge}
              </span>
            </div>

            <h2 className="font-anton uppercase text-[#0C59F2] text-4xl sm:text-5xl lg:text-[56px] leading-[1.0] tracking-tight mb-3">
              {content.title}
            </h2>

            <p className="font-outfit text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed">
              {content.description}
            </p>
          </div>

          {/* Navigation controls */}
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
              className="w-10 h-10 rounded-full bg-[#F2E40A] border border-[#F2E40A] text-[#002273] hover:bg-[#faee28] flex items-center justify-center transition cursor-pointer shadow-md glow-yellow"
              aria-label="Siguiente página"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Top 3 Stats Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {content.stats.map((stat: ReviewStatItem, sIdx: number) => {
            const IconC = STAT_ICON_MAP[stat.iconType] || Star;
            return (
              <div
                key={sIdx}
                className="bg-white rounded-[28px] p-6 sm:p-7 border border-slate-200/90 shadow-lg flex items-center gap-5 hover:scale-[1.02] transition-transform"
              >
                <div className={`w-14 h-14 rounded-2xl ${stat.iconBg} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                  <IconC className={`w-7 h-7 ${stat.iconColor} ${stat.iconType === 'star' ? 'fill-current' : ''}`} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-anton text-4xl text-[#002273] leading-none">
                      {stat.value}
                    </span>
                    {stat.stars && (
                      <div className="flex text-[#F2E40A]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#F2E40A]" />
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

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10">
          {content.categories.map((cat) => {
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
                    ? 'bg-[#00277e] text-white ring-2 ring-[#F2E40A] shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <span>{cat.label}</span>
                {cat.count && <span className="ml-1.5 text-xs text-[#F2E40A]">({cat.count})</span>}
              </button>
            );
          })}
        </div>

        {/* Testimonial Cards Carousel Grid */}
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
                    ? 'bg-white text-slate-800 border-2 border-[#F2E40A]/70'
                    : 'bg-white text-slate-800 border border-slate-200/90'
                }`}
              >
                {/* Large Background Quote Watermark */}
                <Quote
                  className={`absolute top-6 right-6 w-14 h-14 opacity-10 pointer-events-none ${
                    isDark ? 'text-white' : 'text-[#0C59F2]'
                  }`}
                />

                <div>
                  {/* Top Bar: Stars + Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-[#F2E40A] gap-0.5">
                      {[...Array(rev.stars)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#F2E40A]" />
                      ))}
                    </div>

                    <span
                      className={`px-3 py-1 rounded-full font-bebas text-xs tracking-wider uppercase ${
                        isDark
                          ? 'bg-blue-950 text-blue-200 border border-blue-400/30'
                          : 'bg-blue-50 text-[#0C59F2] border border-blue-200'
                      }`}
                    >
                      {rev.badge}
                    </span>
                  </div>

                  {/* Review Title */}
                  <h3
                    className={`font-anton uppercase text-xl sm:text-2xl tracking-tight leading-snug mb-4 ${
                      isDark ? 'text-[#F2E40A]' : 'text-[#002273]'
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
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-mono-data font-bold bg-[#F2E40A] text-[#002273]">
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
                  ? 'w-8 h-2.5 rounded-full bg-[#F2E40A]'
                  : 'w-2.5 h-2.5 rounded-full bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Página ${dotIdx + 1}`}
            />
          ))}
        </div>

        {/* Big Yellow Bottom Button */}
        <div className="flex justify-center">
          <a
            href={content.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#F2E40A] hover:bg-[#faee28] text-[#002273] font-bebas text-xl sm:text-2xl tracking-wider uppercase transition-all transform hover:scale-[1.03] active:scale-[0.98] shadow-xl glow-yellow font-bold"
          >
            <span>{content.googleMapsButtonText}</span>
            <ExternalLink className="w-5 h-5 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </section>
  );
}
