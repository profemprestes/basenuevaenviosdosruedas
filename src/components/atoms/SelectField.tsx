'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  icon?: React.ReactNode;
  options: SelectOption[];
  placeholder?: string;
  error?: string;
  helperText?: string;
  required?: boolean;
}

export const SelectField = React.forwardRef<HTMLSelectElement, SelectFieldProps>(
  (
    {
      label,
      icon,
      options,
      placeholder,
      error,
      helperText,
      required = false,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const selectId = id || label.toLowerCase().replace(/\s+/g, '-');
    const errorId = `${selectId}-error`;
    const helperId = `${selectId}-helper`;

    return (
      <div className="w-full">
        <label
          htmlFor={selectId}
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
          <select
            ref={ref}
            id={selectId}
            className={cn(
              'w-full pr-4 py-3.5 rounded-2xl bg-slate-50/70 border border-slate-200 text-slate-900 font-outfit text-base',
              'focus:outline-none focus:ring-2 focus:ring-[#0C59F2] focus:border-transparent transition-all',
              'appearance-none cursor-pointer',
              error && 'border-red-300 focus:ring-red-300',
              icon && 'pl-11',
              className
            )}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? errorId : helperText ? helperId : undefined}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option, index) => (
              <option key={index} value={option.value} disabled={option.disabled}>
                {option.label}
              </option>
            ))}
          </select>
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

SelectField.displayName = 'SelectField';