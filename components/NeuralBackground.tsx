"use client";

import { useEffect, useRef } from "react";

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;

    canvas.width = width;
    canvas.height = height;

    const mouse = {
      x: -9999,
      y: -9999,
    };

    const PARTICLE_COUNT = 80;

    const particles = Array.from({ length: PARTICLE_COUNT }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      size: Math.random() * 1.5 + 0.5,
    }));

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;

      canvas.width = width;
      canvas.height = height;
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();

      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const onMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);

    let animationFrame: number;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x <= 0 || p.x >= width) p.vx *= -1;
        if (p.y <= 0 || p.y >= height) p.vy *= -1;

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const nearMouse = dist < 120;

       ctx.beginPath();

      ctx.arc(
        p.x,
        p.y,
        nearMouse ? p.size + 2 : p.size,
        0,
        Math.PI * 2
      );

      const fadeStart = width * 0.55;
      const fadeEnd = width * 0.95;

      let opacity = nearMouse ? 1 : 0.75;

      if (p.x > fadeStart) {
        opacity =
          opacity *
          Math.max(
            0,
            1 - (p.x - fadeStart) / (fadeEnd - fadeStart)
          );
      }

      ctx.fillStyle = `rgba(34,211,238,${opacity})`;

      ctx.shadowBlur = nearMouse ? 20 : 8;
      ctx.shadowColor = "#22d3ee";

      ctx.fill();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
    />
  );
}