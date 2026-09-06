'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export type IconBadgeVariant =
  | 'yellow-blue'
  | 'blue-white'
  | 'yellow-dark'
  | 'blue-yellow'
  | 'white-blue'
  | 'emerald-blue'
  | 'amber-blue';

export type IconBadgeSize = 'sm' | 'md' | 'lg' | 'xl';

export interface IconBadgeProps {
  variant?: IconBadgeVariant;
  children: React.ReactNode;
  className?: string;
  size?: IconBadgeSize;
}

const variantStyles: Record<IconBadgeVariant, string> = {
  'yellow-blue': 'bg-[#F2E40A] text-[#002273]',
  'blue-white': 'bg-[#0C59F2] text-white',
  'yellow-dark': 'bg-[#F2E40A] text-[#002273]',
  'blue-yellow': 'bg-[#0C59F2] text-[#F2E40A]',
  'white-blue': 'bg-white text-[#0C59F2] border border-blue-100',
  'emerald-blue': 'bg-blue-50 text-[#0C59F2] border border-blue-100',
  'amber-blue': 'bg-amber-50 text-amber-600 border border-amber-100',
};

const sizeStyles: Record<IconBadgeSize, string> = {
  sm: 'w-8 h-8 rounded-xl',
  md: 'w-10 h-10 rounded-2xl',
  lg: 'w-12 h-12 rounded-2xl',
  xl: 'w-14 h-14 rounded-2xl',
};

export const IconBadge = React.forwardRef<HTMLDivElement, IconBadgeProps>(
  (
    {
      variant = 'yellow-blue',
      children,
      className,
      size = 'md',
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center justify-center flex-shrink-0 shadow-sm',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

IconBadge.displayName = 'IconBadge';