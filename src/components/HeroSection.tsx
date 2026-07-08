import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Github, Mail, Globe, Terminal } from 'lucide-react';
import { USER_INFO } from '../data';

interface HeroProps {
  onExploreClick: () => void;
  onTerminalClick: () => void;
}

export default function HeroSection({ onExploreClick, onTerminalClick }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { scrollY } = useScroll();

  // Scrollytelling transforms: scale and fade content as we scroll down
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.95]);
  const heroY = useTransform(scrollY, [0, 400], [0, -50]);

  // Particle backdrop: drifts on its own, ignores the cursor.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const colors = ['rgba(255, 255, 255, 0.15)', 'rgba(255, 255, 255, 0.25)', 'rgba(255, 255, 255, 0.08)'];
    let width = 0;
    let height = 0;
    let animationFrameId = 0;
    let particles: Array<{ x: number; y: number; vx: number; vy: number; radius: number; color: string }> = [];

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const radialGlow = ctx.createRadialGradient(
        width / 2, height / 2, 50,
        width / 2, height / 2, Math.max(width, height) * 0.8
      );
      radialGlow.addColorStop(0, 'rgba(20, 20, 20, 0.4)');
      radialGlow.addColorStop(1, '#0a0a0a');
      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        p1.x += p1.vx;
        p1.y += p1.vy;
        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = p1.color;
        ctx.globalAlpha = 0.5;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            const alpha = (1 - dist / 110) * 0.12;
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(draw);
    };

    const setup = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;

      const particleCount = Math.min(65, Math.floor((width * height) / 18000));
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: Math.random() * 2 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    setup();
    draw();
    window.addEventListener('resize', setup);

    return () => {
      window.removeEventListener('resize', setup);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      id="hero-root"
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col justify-between items-center overflow-hidden select-none"
    >
      {/* Background Interactive Network */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 cyber-grid-dense opacity-15 z-0 pointer-events-none" />

      {/* Header Bar */}
      <header className="w-full max-w-7xl px-6 py-6 flex justify-between items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-3.5"
        >
          <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center font-serif text-sm italic tracking-widest text-stone-100 shadow-md">
            VJ
          </div>
          <span className="font-sans font-light text-xs tracking-[0.3em] uppercase text-stone-400">
            Portfolio — 2026
          </span>
        </motion.div>

        {/* Action Links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4"
        >
          <a
            href={USER_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-stone-400 hover:text-stone-100 transition-all duration-300 transform hover:scale-110"
            id="nav-github-link"
          >
            <Github size={18} />
          </a>
          <a
            href={`mailto:${USER_INFO.email}`}
            className="p-2 text-stone-400 hover:text-stone-100 transition-all duration-300 transform hover:scale-110"
            id="nav-email-link"
          >
            <Mail size={18} />
          </a>
          <button
            onClick={onTerminalClick}
            className="hidden sm:flex items-center space-x-1.5 px-3.5 py-1.5 rounded bg-stone-900 border border-white/10 text-stone-300 hover:bg-white/5 hover:border-white/20 transition-all duration-300 font-mono text-xs cursor-pointer shadow-sm"
            id="nav-terminal-btn"
          >
            <Terminal size={14} />
            <span>Terminal</span>
          </button>
        </motion.div>
      </header>

      {/* Main Hero Visual Area */}
      <motion.main
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="flex-grow flex flex-col justify-center items-center px-6 max-w-4xl text-center z-10 py-12"
      >
        {/* Faint Glow Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-stone-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />

        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-stone-900/80 border border-white/10 text-xs font-mono text-stone-300 mb-8 shadow-sm backdrop-blur-md"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500/40 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500/80"></span>
          </span>
          <span className="tracking-widest uppercase text-[10px] text-stone-400">Currently @ Purplescape</span>
        </motion.div>

        {/* Huge Headline */}
        <h1 className="font-serif font-light text-5xl sm:text-7xl md:text-[100px] tracking-tight leading-[1.0] italic mb-6 text-stone-100">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="block text-stone-400 font-sans text-xs tracking-[0.4em] uppercase font-medium mb-4"
          >
            Chapter 01 / Introduction
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="block text-stone-100"
          >
            VJ<br/>Rahavan
          </motion.span>
        </h1>

        {/* Description Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg text-stone-400 max-w-md font-light leading-relaxed mb-10"
        >
          {USER_INFO.tagline}
        </motion.p>

      </motion.main>

      {/* Sticky Bottom Scroll Prompter */}
      <motion.footer
        style={{ opacity: heroOpacity }}
        className="w-full flex flex-col items-center pb-8 z-10"
      >
        <span className="font-sans text-[9px] tracking-[0.3em] text-stone-500 uppercase mb-2.5">
          Scroll down to discover
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-stone-800 flex justify-center p-1 cursor-pointer"
          onClick={onExploreClick}
          id="scroll-indicator"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-stone-300" />
        </motion.div>
      </motion.footer>
    </div>
  );
}
