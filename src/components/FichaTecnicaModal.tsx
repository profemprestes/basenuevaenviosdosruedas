'use client';

import React, { useEffect } from 'react';
import { X, CheckCircle2, Clock, ShieldCheck, Truck, MapPin, Package, FileText } from 'lucide-react';
import { FICHA_TECNICA_CONTENT } from '@/content/quote';

interface FichaTecnicaModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuoteModal: () => void;
}

const SPEC_ICON_MAP = [Clock, Truck, MapPin, Package];

export default function FichaTecnicaModal({
  isOpen,
  onClose,
  onOpenQuoteModal,
}: FichaTecnicaModalProps) {
  const content = FICHA_TECNICA_CONTENT;

  // ESC Key listener
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="ficha-modal-title"
        className="w-full max-w-2xl bg-white rounded-[32px] border border-slate-200 shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <header className="bg-[#F2E40A] p-6 text-[#002273] flex items-center justify-between relative">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#002273] text-[#F2E40A] flex items-center justify-center shadow">
              <FileText className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <span className="font-bebas text-xs tracking-widest uppercase text-[#002273]/80 block">
                {content.badge}
              </span>
              <h2
                id="ficha-modal-title"
                className="font-anton uppercase text-2xl tracking-tight text-[#002273]"
              >
                {content.title}
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#002273]/10 hover:bg-[#002273]/20 text-[#002273] flex items-center justify-center transition focus:outline-none focus:ring-2 focus:ring-[#002273] cursor-pointer"
            aria-label="Cerrar ficha técnica"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </header>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Overview Banner */}
          <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 flex items-start gap-3.5">
            <ShieldCheck className="w-6 h-6 text-[#0C59F2] flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h3 className="font-anton uppercase text-[#0C59F2] text-lg tracking-normal">
                {content.overviewTitle}
              </h3>
              <p className="font-outfit text-slate-600 text-sm leading-relaxed mt-1">
                {content.overviewDescription}
              </p>
            </div>
          </div>

          {/* Key Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {content.specs.map((spec, idx) => {
              const IconComponent = SPEC_ICON_MAP[idx] || Clock;
              return (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 text-[#0C59F2] mb-1">
                    <IconComponent className="w-4 h-4 text-[#F2E40A]" aria-hidden="true" />
                    <span className="font-bebas text-sm uppercase tracking-wide">
                      {spec.title}
                    </span>
                  </div>
                  <p className="font-anton text-2xl text-slate-800">{spec.value}</p>
                  <p className="font-outfit text-xs text-slate-500 mt-1">
                    {spec.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Operational Commitments */}
          <div>
            <h4 className="font-bebas text-sm text-[#002273] uppercase tracking-wider mb-3">
              {content.commitmentsTitle}
            </h4>
            <ul className="space-y-2.5 font-outfit text-sm text-slate-700">
              {content.commitments.map((commitment, cIdx) => (
                <li key={cIdx} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span>{commitment}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer actions */}
        <footer className="p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full text-slate-600 hover:bg-slate-200 font-bebas text-base uppercase focus:outline-none focus:ring-2 focus:ring-slate-400 cursor-pointer"
          >
            {content.closeButtonText}
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenQuoteModal();
            }}
            className="w-full sm:flex-1 py-3.5 rounded-full bg-[#F2E40A] hover:bg-[#ffe833] text-[#002273] font-bebas text-xl tracking-wider uppercase font-bold flex items-center justify-center gap-2 shadow-lg glow-yellow cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#002273]"
          >
            <span>{content.ctaButtonText}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
