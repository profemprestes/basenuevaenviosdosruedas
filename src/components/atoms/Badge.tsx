'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export type BadgeVariant =
  | 'signal'
  | 'category-dark'
  | 'category-light'
  | 'blue-dark'
  | 'yellow'
  | 'green'
  | 'amber';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  signal: 'bg-[#F2E40A] text-[#002273] shadow-sm',
  'category-dark': 'bg-blue-950 border border-blue-400/30 text-blue-200',
  'category-light': 'bg-blue-50 border border-blue-200 text-[#0C59F2]',
  'blue-dark': 'bg-blue-900/80 border border-blue-400/30 text-blue-200',
  yellow: 'bg-[#F2E40A] text-[#002273]',
  green: 'bg-emerald-100 text-emerald-800',
  amber: 'bg-amber-100 text-amber-800',
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = 'signal',
      leftIcon,
      rightIcon,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-bebas text-sm font-bold uppercase tracking-wider',
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {leftIcon && <span className="flex-shrink-0" aria-hidden="true">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="flex-shrink-0" aria-hidden="true">{rightIcon}</span>}
      </span>
    );
  }
);

Badge.displayName = 'Badge';