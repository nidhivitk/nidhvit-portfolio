import { useEffect, useRef } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Education } from '../components/Education';
import { Experience } from '../components/Experience';
import { Projects } from '../components/Projects';
import { Publications } from '../components/Publications';
import { Certificates } from '../components/Certificates';
import { Activities } from '../components/Activities';
import { Contact } from '../components/Contact';

// Orb config: scroll multipliers + float amplitude/frequency/phase
const ORB_CONFIG = [
  { sx: -0.06, sy: 0.10, ax: 28, ay: 22, fx: 0.30, fy: 0.22, px: 0.0, py: 0.0 },
  { sx:  0.09, sy: 0.18, ax: 34, ay: 24, fx: 0.25, fy: 0.18, px: 1.2, py: 0.5 },
  { sx: -0.13, sy: 0.28, ax: 22, ay: 18, fx: 0.40, fy: 0.30, px: 2.4, py: 1.0 },
  { sx:  0.07, sy: 0.14, ax: 28, ay: 20, fx: 0.22, fy: 0.28, px: 3.6, py: 1.5 },
  { sx: -0.05, sy: 0.35, ax: 24, ay: 16, fx: 0.18, fy: 0.24, px: 4.8, py: 2.0 },
  { sx:  0.11, sy: 0.08, ax: 32, ay: 20, fx: 0.32, fy: 0.20, px: 0.8, py: 2.5 },
];

export const Home = () => {
  const orbRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const start = Date.now();
    let rafId: number;

    const loop = () => {
      const t = (Date.now() - start) / 1000;
      const sy = window.scrollY;

      ORB_CONFIG.forEach((cfg, i) => {
        const el = orbRefs.current[i];
        if (!el) return;
        const x = sy * cfg.sx + Math.sin(t * cfg.fx + cfg.px) * cfg.ax;
        const y = sy * cfg.sy + Math.cos(t * cfg.fy + cfg.py) * cfg.ay;
        el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });

      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="relative min-h-screen">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        {/* Base gradient — slowly hue-shifts via CSS animation */}
        <div className="animate-hue-shift absolute inset-0 bg-[linear-gradient(160deg,#0a2240_0%,#1a4a7a_20%,#2e6fab_40%,#7aafd4_62%,#c0d9ee_82%,#e8f4fc_100%)] dark:bg-[linear-gradient(160deg,#040c1a_0%,#091929_22%,#0f2a45_50%,#091929_76%,#040c1a_100%)]" />

        {/* Orb 1 — top-left, cyan */}
        <div ref={el => { orbRefs.current[0] = el; }}
          className="absolute -left-32 -top-20 h-[42rem] w-[42rem] rounded-full bg-cyan-300/40 blur-3xl will-change-transform dark:bg-cyan-400/25" />
        {/* Orb 2 — top-right, blue */}
        <div ref={el => { orbRefs.current[1] = el; }}
          className="absolute -right-28 top-[6rem] h-[36rem] w-[36rem] rounded-full bg-blue-400/35 blur-3xl will-change-transform dark:bg-blue-500/25" />
        {/* Orb 3 — mid-left, indigo */}
        <div ref={el => { orbRefs.current[2] = el; }}
          className="absolute -left-16 top-[55rem] h-[28rem] w-[28rem] rounded-full bg-indigo-300/35 blur-3xl will-change-transform dark:bg-indigo-500/20" />
        {/* Orb 4 — mid-right, sky */}
        <div ref={el => { orbRefs.current[3] = el; }}
          className="absolute right-[10%] top-[44rem] h-[22rem] w-[22rem] rounded-full bg-sky-300/40 blur-3xl will-change-transform dark:bg-sky-500/20" />
        {/* Orb 5 — lower-left, teal */}
        <div ref={el => { orbRefs.current[4] = el; }}
          className="absolute left-[28%] top-[90rem] h-[26rem] w-[26rem] rounded-full bg-teal-200/50 blur-3xl will-change-transform dark:bg-teal-500/15" />
        {/* Orb 6 — lower-right, violet */}
        <div ref={el => { orbRefs.current[5] = el; }}
          className="absolute -right-20 top-[80rem] h-[32rem] w-[32rem] rounded-full bg-violet-300/25 blur-3xl will-change-transform dark:bg-violet-500/15" />

        {/* Top highlight */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,rgba(255,255,255,0.28)_0%,rgba(255,255,255,0)_100%)] dark:bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,rgba(56,189,248,0.15)_0%,rgba(56,189,248,0)_100%)]" />
        {/* Bottom vignette */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-sky-50/60 to-transparent dark:from-slate-950/60 dark:to-transparent" />
      </div>
      <Header />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Publications />
      <Certificates />
      <Activities />
      <Contact />
    </div>
  );
};
