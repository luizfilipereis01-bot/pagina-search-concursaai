"use client";

import { useEffect, useRef } from "react";

const chars = "01{}[]<>/\\=+-*&|!?;:.,$#@ABCDEFIA_αβγδ";

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const fontSize = 14;
    let columns = Math.floor(window.innerWidth / fontSize);
    const drops: number[] = Array(columns).fill(1);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops.length = columns;
      for (let i = 0; i < columns; i++) {
        if (drops[i] == null) drops[i] = 1;
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.fillStyle = "rgba(13,12,10,0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px JetBrains Mono, monospace`;

      for (let i = 0; i < drops.length; i++) {
        const txt = chars[Math.floor(Math.random() * chars.length)];
        const y = drops[i] * fontSize;
        const grad = Math.random() > 0.92;
        ctx.fillStyle = grad ? "#F87C56" : "#F3E600";
        ctx.fillText(txt, i * fontSize, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 70);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 opacity-[0.14] pointer-events-none"
      aria-hidden="true"
    />
  );
}
