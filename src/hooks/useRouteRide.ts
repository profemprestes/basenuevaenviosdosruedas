'use client';

import { useEffect, useRef } from 'react';

export type RoutePhase = 'riding' | 'arrived' | 'reset';

export interface UseRouteRideOptions {
  /** Time the rider takes from origin to destination (ms). */
  travelMs?: number;
  /** Time the completed route stays on screen after arrival (ms). */
  holdMs?: number;
  /** Time the trail takes to fade before the next dispatch (ms). */
  fadeMs?: number;
}

// A courier accelerates out of the hub and brakes into the drop-off.
const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

/**
 * Drives a dispatch route visual: the trail path draws itself as the rider travels along the
 * real SVG geometry, then holds on arrival and fades before looping.
 *
 * - Default (SSR / no JS) markup should show the finished route with the rider at destination.
 * - Pauses while offscreen or when the tab is hidden.
 * - With prefers-reduced-motion the finished route is shown statically.
 * - Exposes the current phase as `data-phase` on the root so CSS can react (arrival ring, status).
 */
export function useRouteRide<T extends HTMLElement = HTMLDivElement>({
  travelMs = 4200,
  holdMs = 1600,
  fadeMs = 500,
}: UseRouteRideOptions = {}) {
  const rootRef = useRef<T>(null);
  const trailRef = useRef<SVGPathElement>(null);
  const riderRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const trail = trailRef.current;
    const rider = riderRef.current;
    if (!root || !trail || !rider) return;

    const length = trail.getTotalLength();
    const cycle = travelMs + holdMs + fadeMs;
    const reduceQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    let rafId = 0;
    let startedAt = 0;
    let elapsed = 0;
    let running = false;
    let inView = true;
    let phase: RoutePhase | null = null;

    trail.style.strokeDasharray = `${length}`;

    const setPhase = (next: RoutePhase) => {
      if (phase === next) return;
      phase = next;
      root.dataset.phase = next;
    };

    const place = (progress: number, opacity: number) => {
      const point = trail.getPointAtLength(length * progress);
      rider.setAttribute('transform', `translate(${point.x} ${point.y})`);
      rider.style.opacity = `${opacity}`;
      trail.style.strokeDashoffset = `${length * (1 - progress)}`;
      trail.style.opacity = `${opacity}`;
    };

    const render = (t: number) => {
      if (t < travelMs) {
        place(easeInOutCubic(t / travelMs), Math.min(1, t / 240));
        setPhase('riding');
      } else if (t < travelMs + holdMs) {
        place(1, 1);
        setPhase('arrived');
      } else {
        place(1, 1 - (t - travelMs - holdMs) / fadeMs);
        setPhase('reset');
      }
    };

    const frame = (now: number) => {
      if (!startedAt) startedAt = now - elapsed;
      elapsed = (now - startedAt) % cycle;
      render(elapsed);
      rafId = requestAnimationFrame(frame);
    };

    const start = () => {
      if (running) return;
      running = true;
      startedAt = 0;
      rafId = requestAnimationFrame(frame);
    };

    const stop = () => {
      if (!running) return;
      running = false;
      cancelAnimationFrame(rafId);
    };

    const sync = () => {
      if (reduceQuery.matches) {
        stop();
        place(1, 1);
        setPhase('arrived');
        return;
      }
      if (inView && !document.hidden) start();
      else stop();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        sync();
      },
      { threshold: 0.15 }
    );

    observer.observe(root);
    document.addEventListener('visibilitychange', sync);
    reduceQuery.addEventListener('change', sync);
    sync();

    return () => {
      stop();
      observer.disconnect();
      document.removeEventListener('visibilitychange', sync);
      reduceQuery.removeEventListener('change', sync);
    };
  }, [travelMs, holdMs, fadeMs]);

  return { rootRef, trailRef, riderRef };
}
