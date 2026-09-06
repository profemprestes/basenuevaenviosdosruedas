import { useState, useEffect, useCallback } from 'react';

export interface UseModalOptions {
  isOpen: boolean;
  onClose: () => void;
  onEscape?: () => void;
  trapFocus?: boolean;
}

export function useModal({ isOpen, onClose, onEscape, trapFocus = true }: UseModalOptions) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onEscape?.();
        onClose();
      }
      if (trapFocus && e.key === 'Tab') {
        const modal = document.querySelector('[role="dialog"]');
        if (modal) {
          const focusableElements = modal.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }
    },
    [isOpen, onClose, onEscape, trapFocus]
  );

  useEffect(() => {
    if (!isOpen) return;
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  return {
    handleKeyDown,
    handleBackdropClick,
  };
}

export interface UseModalStateReturn {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

export function useModalState(initialOpen = false): UseModalStateReturn {
  const [isOpen, setIsOpen] = useState(initialOpen);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return { isOpen, open, close, toggle };
}