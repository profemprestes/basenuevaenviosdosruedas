"use client"

import React, { useEffect, useRef, useId } from "react"

interface SparklesProps {
  className?: string;
  size?: number;
  minSize?: number | null;
  density?: number;
  speed?: number;
  minSpeed?: number | null;
  opacity?: number;
  opacitySpeed?: number;
  minOpacity?: number | null;
  color?: string;
  background?: string;
  direction?: string;
  options?: Record<string, unknown>;
}

export function Sparkles({
  className = "absolute inset-0 h-full w-full",
  size = 1.5,
  minSize = null,
  density = 100,
  speed = 0.8,
  minSpeed = null,
  opacity = 0.8,
  color = "#FFFFFF",
}: SparklesProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const id = useId();

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId = 0;
    let running = false;
    let inView = false;
    let width = (canvas.width = container.offsetWidth || 800);
    let height = (canvas.height = container.offsetHeight || 600);
    const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const count = Math.min(Math.floor(density / 6), 120);
    const particles = Array.from({ length: count }, () => {
      const pSize = minSize ? Math.random() * (size - minSize) + minSize : Math.random() * size + 0.5;
      const pSpeed = minSpeed ? Math.random() * (speed - minSpeed) + minSpeed : Math.random() * speed + 0.2;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size: pSize,
        speedY: pSpeed * 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * opacity,
        alphaChange: (Math.random() * 0.02 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
      };
    });

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.fillStyle = color;
        ctx.globalAlpha = Math.max(0, Math.min(1, p.alpha));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const step = () => {
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y -= p.speedY;
        p.x += p.speedX;
        p.alpha += p.alphaChange;

        if (p.alpha <= 0.1 || p.alpha >= opacity) {
          p.alphaChange = -p.alphaChange;
        }

        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
      }
    };

    const loop = () => {
      step();
      draw();
      animationFrameId = requestAnimationFrame(loop);
    };

    const start = () => {
      if (running) return;
      running = true;
      animationFrameId = requestAnimationFrame(loop);
    };

    const stop = () => {
      if (!running) return;
      running = false;
      cancelAnimationFrame(animationFrameId);
    };

    // Reduced motion: one static frame. Otherwise loop only while visible and the tab is active.
    const sync = () => {
      if (reduceQuery.matches) {
        stop();
        draw();
        return;
      }
      if (inView && !document.hidden) start();
      else stop();
    };

    const handleResize = () => {
      width = canvas.width = container.offsetWidth;
      height = canvas.height = container.offsetHeight;
      if (!running) draw();
    };

    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      sync();
    });

    draw();
    observer.observe(container);
    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", sync);
    reduceQuery.addEventListener("change", sync);

    return () => {
      stop();
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", sync);
      reduceQuery.removeEventListener("change", sync);
    };
  }, [density, size, minSize, speed, minSpeed, opacity, color]);

  return (
    <div ref={containerRef} className={`pointer-events-none overflow-hidden ${className}`} id={id}>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
