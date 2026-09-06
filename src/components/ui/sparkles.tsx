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
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = containerRef.current?.offsetWidth || 800);
    let height = (canvas.height = containerRef.current?.offsetHeight || 600);

    const handleResize = () => {
      if (containerRef.current && canvas) {
        width = canvas.width = containerRef.current.offsetWidth;
        height = canvas.height = containerRef.current.offsetHeight;
      }
    };

    window.addEventListener("resize", handleResize);

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

    const render = () => {
      ctx.clearRect(0, 0, width, height);

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

        ctx.fillStyle = color;
        ctx.globalAlpha = Math.max(0, Math.min(1, p.alpha));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [density, size, minSize, speed, minSpeed, opacity, color]);

  return (
    <div ref={containerRef} className={`pointer-events-none overflow-hidden ${className}`} id={id}>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
