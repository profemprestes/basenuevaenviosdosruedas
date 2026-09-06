'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
  error?: string;
  helperText?: string;
  required?: boolean;
}

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      label,
      icon,
      error,
      helperText,
      required = false,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-');
    const errorId = `${inputId}-error`;
    const helperId = `${inputId}-helper`;

    return (
      <div className="w-full">
        <label
          htmlFor={inputId}
          className="block font-bebas text-[#0C59F2] text-sm tracking-wider uppercase mb-2"
        >
          {label}
          {required && (
            <span className="text-[#F2E40A] ml-1" aria-hidden="true">*</span>
          )}
        </label>
        <div className="relative">
          {icon && (
            <div
              className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400"
              aria-hidden="true"
            >
              {icon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              'w-full pr-4 py-3.5 rounded-2xl bg-slate-50/70 border border-slate-200 text-slate-900 font-outfit text-base placeholder-slate-400',
              'focus:outline-none focus:ring-2 focus:ring-[#0C59F2] focus:border-transparent transition-all',
              error && 'border-red-300 focus:ring-red-300',
              icon && 'pl-11',
              className
            )}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? errorId : helperText ? helperId : undefined}
            {...props}
          />
        </div>
        {error && (
          <p id={errorId} className="mt-1.5 text-sm text-red-600 font-outfit" role="alert">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={helperId} className="mt-1.5 text-sm text-slate-500 font-outfit">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

InputField.displayName = 'InputField';