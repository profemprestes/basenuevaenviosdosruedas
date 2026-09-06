'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export type CardVariant =
  | 'default'
  | 'bento-blue'
  | 'bento-white'
  | 'bento-yellow'
  | 'bento-dark'
  | 'review-white'
  | 'review-blue'
  | 'review-border'
  | 'modal'
  | 'form';

export type CardPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  hover?: boolean;
  padding?: CardPadding;
}

const variantStyles: Record<CardVariant, string> = {
  default: 'bg-white border border-slate-200/90',
  'bento-blue': 'bg-[#00277e]/90 border border-blue-400/30 text-white backdrop-blur-md',
  'bento-white': 'bg-white border border-slate-200/90 text-slate-900',
  'bento-yellow': 'bg-[#F2E40A] text-[#002273]',
  'bento-dark': 'bg-[#002273] border border-blue-400/30 text-white',
  'review-white': 'bg-white text-slate-800 border border-slate-200/90',
  'review-blue': 'bg-[#00277e] text-white border border-blue-400/30',
  'review-border': 'bg-white text-slate-800 border-2 border-[#F2E40A]/70',
  modal: 'bg-white border border-slate-200',
  form: 'bg-white border border-slate-200',
};

const paddingStyles: Record<CardPadding, string> = {
  none: '',
  sm: 'p-4',
  md: 'p-6 sm:p-7',
  lg: 'p-7 sm:p-8',
  xl: 'p-8 sm:p-10 lg:p-12',
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'default',
      hover = false,
      padding = 'md',
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-[32px] shadow-lg',
          'transition-all duration-300',
          variantStyles[variant],
          paddingStyles[padding],
          hover && 'hover:scale-[1.02] hover:shadow-xl',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';