'use client';

import React, { useEffect } from 'react';
import { X, CheckCircle2, Clock, ShieldCheck, Truck, MapPin, Package, FileText } from 'lucide-react';
import { FICHA_TECNICA_CONTENT } from '@/content/quote';
import { useModal } from '@/hooks/useModal';
import { Badge, Button, Card, IconBadge } from '@/components/atoms';
import { cn } from '@/lib/utils';

const SPEC_ICON_MAP = [Clock, Truck, MapPin, Package];

interface SpecCardProps {
  spec: typeof FICHA_TECNICA_CONTENT.specs[0];
  index: number;
}

function SpecCard({ spec, index }: SpecCardProps) {
  const IconComponent = SPEC_ICON_MAP[index] || Clock;

  return (
    <Card variant="form" padding="md">
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
    </Card>
  );
}

interface CommitmentItemProps {
  commitment: string;
}

function CommitmentItem({ commitment }: CommitmentItemProps) {
  return (
    <li className="flex items-center gap-2.5">
      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" aria-hidden="true" />
      <span className="font-outfit text-sm text-slate-700">{commitment}</span>
    </li>
  );
}

export default function FichaTecnicaModal({
  isOpen,
  onClose,
  onOpenQuoteModal,
}: FichaTecnicaModalProps) {
  const { handleKeyDown, handleBackdropClick } = useModal({
    isOpen,
    onClose,
    trapFocus: true,
  });

  const content = FICHA_TECNICA_CONTENT;

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in"
      onClick={handleBackdropClick}
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
            <Badge variant="yellow" className="w-10 h-10 p-0 flex items-center justify-center">
              <FileText className="w-5 h-5" aria-hidden="true" />
            </Badge>
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

          <Button
            variant="ghost"
            size="sm"
            className="w-9 h-9 p-0 bg-[#002273]/10 hover:bg-[#002273]/20 text-[#002273]"
            aria-label="Cerrar ficha técnica"
            onClick={onClose}
          >
            <X className="w-5 h-5" />
          </Button>
        </header>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Overview Banner */}
          <Card variant="form" padding="md" className="bg-blue-50 border border-blue-200 flex items-start gap-3.5">
            <ShieldCheck className="w-6 h-6 text-[#0C59F2] flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h3 className="font-anton uppercase text-[#0C59F2] text-lg tracking-normal">
                {content.overviewTitle}
              </h3>
              <p className="font-outfit text-slate-600 text-sm leading-relaxed mt-1">
                {content.overviewDescription}
              </p>
            </div>
          </Card>

          {/* Key Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {content.specs.map((spec, idx) => (
              <SpecCard key={idx} spec={spec} index={idx} />
            ))}
          </div>

          {/* Operational Commitments */}
          <div>
            <h4 className="font-bebas text-sm text-[#002273] uppercase tracking-wider mb-3">
              {content.commitmentsTitle}
            </h4>
            <ul className="space-y-2.5">
              {content.commitments.map((commitment, cIdx) => (
                <CommitmentItem key={cIdx} commitment={commitment} />
              ))}
            </ul>
          </div>
        </div>

        {/* Footer actions */}
        <footer className="p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-3">
          <Button variant="ghost" size="md" onClick={onClose}>
            {content.closeButtonText}
          </Button>

          <Button
            variant="primary"
            size="lg"
            fullWidth
            onClick={() => {
              onClose();
              onOpenQuoteModal();
            }}
          >
            {content.ctaButtonText}
          </Button>
        </footer>
      </div>
    </div>
  );
}

interface FichaTecnicaModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuoteModal: () => void;
}