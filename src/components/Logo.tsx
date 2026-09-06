'use client';

import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export default function Logo({
  className = '',
  size = 'md',
  showText = true,
}: LogoProps) {
  const dimensions = {
    sm: { img: 36, imgClass: 'w-9 h-9', text: 'text-xl' },
    md: { img: 44, imgClass: 'w-11 h-11', text: 'text-2xl sm:text-[26px]' },
    lg: { img: 56, imgClass: 'w-14 h-14', text: 'text-3xl sm:text-4xl' },
    xl: { img: 72, imgClass: 'w-18 h-18', text: 'text-4xl sm:text-5xl' },
  };

  const { img, imgClass, text } = dimensions[size] || dimensions.md;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Official WebP Logo Image */}
      <div className={`relative ${imgClass} flex-shrink-0 drop-shadow-md`}>
        <Image
          src="/logo.webp"
          alt="Envíos DosRuedas Logo"
          width={img}
          height={img}
          className="w-full h-full object-contain rounded-full hover:scale-105 transition-transform duration-200"
          priority
        />
      </div>

      {/* Branded Typography */}
      {showText && (
        <div className="flex items-baseline tracking-tight select-none">
          <span className={`font-anton uppercase text-[#FFFFFF] font-normal ${text}`}>
            ENVÍOS
          </span>
          <span className={`font-anton uppercase text-[#F2E40A] font-normal ml-1.5 ${text}`}>
            DOSRUEDAS
          </span>
        </div>
      )}
    </div>
  );
}
