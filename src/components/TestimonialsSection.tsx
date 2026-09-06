'use client';

import React, { useMemo } from 'react';
import { Star, ChevronLeft, ChevronRight, Heart, TrendingUp, MessageSquare, ExternalLink, Quote } from 'lucide-react';
import { TESTIMONIALS_CONTENT, ReviewStatItem } from '@/content/home';
import { useCarousel, usePagination } from '@/hooks/useCarousel';
import { Badge, Button, Card, IconBadge } from '@/components/atoms';
import { cn } from '@/lib/utils';

const STAT_ICON_MAP = {
  star: Star,
  heart: Heart,
  trending: TrendingUp,
};

interface ReviewCardProps {
  rev: typeof TESTIMONIALS_CONTENT.reviews[0];
}

function ReviewCard({ rev }: ReviewCardProps) {
  const isDark = rev.cardTheme === 'blue-dark';
  const isBorder = rev.cardTheme === 'white-border';

  const cardVariant = isDark ? 'review-blue' : isBorder ? 'review-border' : 'review-white';
  const cardBg = isDark ? 'bg-[#00277e] text-white border border-blue-400/30' : isBorder ? 'bg-white text-slate-800 border-2 border-[#F2E40A]/70' : 'bg-white text-slate-800 border border-slate-200/90';

  return (
    <Card variant={cardVariant as any} padding="lg" hover className="rounded-[32px] flex flex-col justify-between relative">
      {/* Large Background Quote Watermark */}
      <Quote
        className={cn(
          'absolute top-6 right-6 w-14 h-14 opacity-10 pointer-events-none',
          isDark ? 'text-white' : 'text-[#0C59F2]'
        )}
      />

      <div>
        {/* Top Bar: Stars + Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex text-[#F2E40A] gap-0.5">
            {[...Array(rev.stars)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#F2E40A]" />
            ))}
          </div>

          <Badge
            variant={isDark ? 'blue-dark' : 'category-light'}
            className="text-xs"
          >
            {rev.badge}
          </Badge>
        </div>

        {/* Review Title */}
        <h3 className={cn(
          'font-anton uppercase text-xl sm:text-2xl tracking-tight leading-snug mb-4',
          isDark ? 'text-[#F2E40A]' : 'text-[#002273]'
        )}>
          {rev.title}
        </h3>

        {/* Review Text */}
        <p className={cn(
          'font-outfit text-sm sm:text-base leading-relaxed mb-6',
          isDark ? 'text-blue-100' : 'text-slate-600'
        )}>
          {rev.text}
        </p>
      </div>

      {/* Author Info */}
      <div className={cn('pt-4 border-t flex items-center justify-between', isDark ? 'border-blue-400/20' : 'border-slate-100')}>
        <div className="flex items-center gap-3">
          <div className={cn('w-10 h-10 rounded-full font-anton text-lg flex items-center justify-center flex-shrink-0 shadow-sm', rev.avatarBg)}>
            {rev.avatar}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className={cn(
                'font-bebas text-base uppercase tracking-wide',
                isDark ? 'text-white' : 'text-[#002273]'
              )}>
                {rev.author}
              </span>
              {rev.badgeUser && (
                <Badge variant="signal" className="text-[10px] px-1.5 py-0.5">
                  {rev.badgeUser}
                </Badge>
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
    </Card>
  );
}

interface StatCardProps {
  stat: ReviewStatItem;
}

function StatCard({ stat }: StatCardProps) {
  const IconC = STAT_ICON_MAP[stat.iconType] || Star;

  return (
    <Card variant="bento-white" padding="lg" hover className="rounded-[28px] flex items-center gap-5">
      <IconBadge
        variant={stat.iconType === 'star' ? 'yellow-blue' : stat.iconType === 'heart' ? 'blue-white' : 'emerald-blue'}
        size="xl"
        className="shadow-sm"
      >
        <IconC className={cn('w-7 h-7', stat.iconColor, stat.iconType === 'star' && 'fill-current')} />
      </IconBadge>
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
    </Card>
  );
}

interface CategoryTabProps {
  category: typeof TESTIMONIALS_CONTENT.categories[0];
  isActive: boolean;
  onSelect: () => void;
}

function CategoryTab({ category, isActive, onSelect }: CategoryTabProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        'px-4 py-2 rounded-full font-bebas text-sm sm:text-base tracking-wider uppercase transition-all shadow-sm cursor-pointer',
        isActive
          ? 'bg-[#00277e] text-white ring-2 ring-[#F2E40A] shadow-md'
          : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
      )}
    >
      <span>{category.label}</span>
      {category.count && <span className="ml-1.5 text-xs text-[#F2E40A]">({category.count})</span>}
    </button>
  );
}

export default function TestimonialsSection() {
  const content = TESTIMONIALS_CONTENT;

  const { currentIndex: activeCategoryIndex, currentItem: activeCategoryId, setCurrentIndex: setActiveCategory, totalItems: totalCategories } = useCarousel({
    items: content.categories.map(c => c.id),
    initialIndex: 0,
    autoRotate: false,
  });

  const activeCategory = activeCategoryId;

  const filteredReviews = useMemo(
    () => content.reviews.filter((r) => r.category.includes(activeCategory)),
    [activeCategory]
  );

  const itemsPerPage = 3;
  const {
    currentPage,
    totalPages,
    setCurrentPage,
    goToNext,
    goToPrev,
    startIndex,
    endIndex,
  } = usePagination({
    totalItems: filteredReviews.length,
    itemsPerPage,
    initialPage: 0,
  });

  const displayedReviews = filteredReviews.slice(startIndex, endIndex);

  const handleCategoryChange = (index: number) => {
    setActiveCategory(index);
    setCurrentPage(0);
  };

  return (
    <section id="opiniones" className="w-full py-20 lg:py-28 bg-[#FFFFFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <Badge variant="signal" className="mb-4">
              <Star className="w-3.5 h-3.5 fill-[#002273] text-[#002273]" aria-hidden="true" />
              {content.badge}
            </Badge>

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
              {currentPage + 1} / {totalPages || 1}
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="w-10 h-10 p-0 bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 shadow-sm"
              aria-label="Página anterior"
              onClick={goToPrev}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <Button
              variant="primary"
              size="sm"
              className="w-10 h-10 p-0"
              aria-label="Siguiente página"
              onClick={goToNext}
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </Button>
          </div>
        </div>

        {/* Top 3 Stats Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {content.stats.map((stat, sIdx) => (
            <StatCard key={sIdx} stat={stat} />
          ))}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10">
          {content.categories.map((cat, idx) => (
            <CategoryTab
              key={cat.id}
              category={cat}
              isActive={cat.id === activeCategory}
              onSelect={() => handleCategoryChange(idx)}
            />
          ))}
        </div>

        {/* Testimonial Cards Carousel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mb-12">
          {displayedReviews.map((rev) => (
            <ReviewCard key={rev.id} rev={rev} />
          ))}
        </div>

        {/* Carousel Dots */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {[...Array(totalPages)].map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => setCurrentPage(dotIdx)}
              className={cn(
                'transition-all',
                dotIdx === currentPage
                  ? 'w-8 h-2.5 rounded-full bg-[#F2E40A]'
                  : 'w-2.5 h-2.5 rounded-full bg-slate-300 hover:bg-slate-400'
              )}
              aria-label={`Página ${dotIdx + 1}`}
            />
          ))}
        </div>

        {/* Big Yellow Bottom Button */}
        <div className="flex justify-center">
          <Button
            variant="primary"
            size="xl"
            leftIcon={<ExternalLink className="w-5 h-5 stroke-[2.5]" />}
            onClick={() => window.open(content.googleMapsUrl, '_blank', 'noopener,noreferrer')}
          >
            {content.googleMapsButtonText}
          </Button>
        </div>
      </div>
    </section>
  );
}