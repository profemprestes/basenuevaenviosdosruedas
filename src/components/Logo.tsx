'use client';

import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const badgeSizes = {
    sm: 'w-8 h-8 text-[9px]',
    md: 'w-10 h-10 text-[11px]',
    lg: 'w-14 h-14 text-[13px]',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl sm:text-4xl',
  };

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Circular Emblem Icon */}
      <div
        className={`${badgeSizes[size]} relative rounded-full bg-[#1b2234] border-2 border-[#546282] flex flex-col items-center justify-center text-white shadow-inner flex-shrink-0 overflow-hidden select-none`}
      >
        {/* Radial wheel lines background */}
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#ffcc00_1px,transparent_1px)] [background-size:4px_4px]" />
        
        <span className="text-[7px] leading-none uppercase font-extrabold tracking-wider text-slate-300 z-10">
          ENVÍOS
        </span>
        
        {/* Dual Wheel graphic representation */}
        <div className="flex items-center justify-center gap-0.5 my-0.5 z-10">
          <div className="w-3 h-3 rounded-full border border-[#ffcc00] flex items-center justify-center">
            <div className="w-1 h-1 bg-[#ffcc00] rounded-full" />
          </div>
          <div className="w-3 h-3 rounded-full border border-[#ffcc00] flex items-center justify-center">
            <div className="w-1 h-1 bg-[#ffcc00] rounded-full" />
          </div>
        </div>

        <span className="text-[6.5px] leading-none font-bold text-[#ffcc00] tracking-tighter z-10">
          DosRuedas
        </span>
        <span className="text-[5px] leading-none font-bold text-slate-400 z-10">
          MDQ
        </span>
      </div>

      {/* Brand Text */}
      <div className="flex items-baseline tracking-tight select-none">
        <span className={`font-anton uppercase text-white font-normal ${textSizes[size]}`}>
          ENVÍOS
        </span>
        <span className={`font-anton uppercase text-[#ffcc00] font-normal ml-1.5 ${textSizes[size]}`}>
          DOSRUEDAS
        </span>
      </div>
    </div>
  );
}
