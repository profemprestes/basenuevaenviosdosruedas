'use client';

import React from 'react';
import { MotionConfig } from 'motion/react';

/**
 * Global motion defaults for every `motion/react` component.
 * - reducedMotion="user": transform/layout animations are skipped when the OS asks for reduced motion;
 *   opacity and colour transitions still run so state changes stay legible.
 * - Default transition uses the brand's confident deceleration curve.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </MotionConfig>
  );
}
