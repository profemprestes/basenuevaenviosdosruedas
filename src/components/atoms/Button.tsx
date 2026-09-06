'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';

export type ButtonVariant =
  | 'primary'
  | 'whatsapp'
  | 'secondary'
  | 'ghost'
  | 'dark'
  | 'yellow-outline'
  | 'blue-outline';

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  asChild?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-[#F2E40A] hover:bg-[#faee28] text-[#002273] glow-yellow shadow-xl',
  whatsapp: 'bg-[#25D366] hover:bg-[#10b981] text-white glow-green shadow-lg',
  secondary: 'bg-[#032a87]/60 hover:bg-[#032a87] text-white border border-blue-300/30',
  ghost: 'text-slate-600 hover:bg-slate-200',
  dark: 'bg-[#002273] hover:bg-[#00174e] text-white',
  'yellow-outline': 'border-2 border-[#F2E40A] bg-transparent hover:bg-[#F2E40A]/10 text-[#F2E40A] hover:text-[#002273]',
  'blue-outline': 'bg-blue-600/50 hover:bg-[#F2E40A] hover:text-[#002273] text-white border border-blue-400/30',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-5 py-2.5 text-base',
  md: 'px-7 py-3.5 text-xl',
  lg: 'px-8 py-3.5 text-xl sm:text-2xl',
  xl: 'px-8 py-4 text-2xl sm:text-3xl',
};

const Comp = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      asChild = false,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading;
    const Component = asChild ? Slot : 'button';

    return (
      <Component
        ref={ref}
        type={asChild ? undefined : 'button'}
        disabled={isDisabled}
        className={cn(
          'inline-flex items-center justify-center gap-2.5 font-bebas uppercase tracking-wider rounded-full',
          'transition-all transform hover:scale-[1.03] active:scale-[0.98]',
          'focus:outline-none focus:ring-2 focus:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:active:scale-100',
          'cursor-pointer',
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {isLoading ? (
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="3"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : leftIcon ? (
          <span className="flex-shrink-0" aria-hidden="true">{leftIcon}</span>
        ) : null}
        <span>{children}</span>
        {!isLoading && rightIcon && (
          <span className="flex-shrink-0" aria-hidden="true">{rightIcon}</span>
        )}
      </Component>
    );
  }
);

Comp.displayName = 'Button';

export const Button = Comp;