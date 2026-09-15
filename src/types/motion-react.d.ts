// The bundled `motion/react` typings only declare `motion`, `m` and `AnimatePresence`,
// while the runtime re-exports all of framer-motion. Declare the extra APIs we rely on.
import 'motion/react';
import type * as React from 'react';

declare module 'motion/react' {
  export interface MotionConfigProps {
    children?: React.ReactNode;
    reducedMotion?: 'user' | 'always' | 'never';
    transition?: Record<string, unknown>;
    nonce?: string;
  }

  export const MotionConfig: React.FC<MotionConfigProps>;

  export function useReducedMotion(): boolean | null;

  export function useInView(
    ref: React.RefObject<Element | null>,
    options?: { once?: boolean; amount?: 'some' | 'all' | number; margin?: string; root?: React.RefObject<Element | null> }
  ): boolean;
}
