import React, { useState } from 'react';
import { PageView } from '../types';
import { BRAND } from '../data/brand';
import { ETSymbol, ETLogo } from './ETLogo';
import { ExcellenceTextBuild } from './ExcellenceTextBuild';
import { RedSignal, LivingGrid, MOTION_EASE } from './motion/MotionPrimitives';
import { AnimatedNumber } from './motion/AnimatedNumber';
import { ArrowRight, ArrowUpRight, ShieldCheck, Terminal, Cpu, CheckCircle2 } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

interface HeroProps {
  onNavigate: (view: PageView) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const shouldReduceMotion = useReducedMotion();
  const [textBuildDone, setTextBuildDone] = useState(false);

  return (
    <section
      id="hero-section"
      className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28 bg-[#FAF8F6] text-[#0A0A0A] border-b border-[#0A0A0A]/10 overflow-hidden"
    >
      {/* Subtle Living Grid overlay */}
      <LivingGrid columns={4} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ========================================================
            HERO EN-TÊTE CHORÉGRAPHIÉ:
            1. LOGO (delay 0.05s)
            2. MICRO-LABEL "EXCELLENCE TEAM /" (delay 0.22s)
            ======================================================== */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#0A0A0A]/10 text-xs font-mono text-[#666666]">
          <div className="flex items-center gap-3">
            {/* Step 1: Logo */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: MOTION_EASE, delay: 0.05 }}
            >
              <ETLogo variant="horizontal" size="sm" theme="light" />
            </motion.div>

            <div className="h-4 w-[1px] bg-[#0A0A0A]/20 hidden sm:block" />

            {/* Step 2: Micro-label EXCELLENCE TEAM / */}
            <motion.span
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, ease: MOTION_EASE, delay: 0.22 }}
              className="text-[#FF4A16] font-bold tracking-widest uppercase flex items-center gap-1 text-[11px]"
            >
              <span>EXCELLENCE TEAM</span>
              <RedSignal type="slash" />
              <span className="text-[#0A0A0A] font-semibold">2026 MATURITY</span>
            </motion.span>
          </div>

          {/* Telemetry metadata */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: MOTION_EASE, delay: 0.35 }}
            className="flex items-center gap-4 text-[11px] text-[#666666]"
          >
            <span>COTONOU, BÉNIN</span>
            <span>•</span>
            <span>11 TALENTS</span>
            <span>•</span>
            <span className="text-[#FF4A16] font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4A16] animate-pulse" />
              DISCIPLINE FIRST
            </span>
          </motion.div>
        </div>

        {/* ========================================================
            MAIN HERO GRID:
            LEFT: Step 3 Headline, Step 4 Description, Step 5 CTAs
            RIGHT: Step 6 Grande Zone Rouge-Orange (#FF4A16)
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start pt-10 sm:pt-14">
          {/* Left Column (7 cols): Typography, Description, CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 3: Progressive Headline Reveal (EXCELLENCE TEXT BUILD) */}
            <div className="pt-2">
              <ExcellenceTextBuild
                className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem]"
                onComplete={() => setTextBuildDone(true)}
              />
            </div>

            {/* Step 4: Editorial Description (appears after headline build) */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: shouldReduceMotion ? 0 : 1.0,
                ease: MOTION_EASE,
              }}
              className="text-base sm:text-lg md:text-xl text-[#555555] max-w-2xl leading-relaxed font-normal pt-2"
            >
              Excellence Team conçoit, développe, sécurise et déploie des solutions logicielles répondant à des besoins réels. 11 talents au service d’organisations exigeantes au Bénin et en Afrique francophone.
            </motion.p>

            {/* Step 5: Dual CTAs */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: shouldReduceMotion ? 0 : 1.25,
                ease: MOTION_EASE,
              }}
              className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <button
                id="hero-cta-start-project"
                onClick={() => onNavigate('contact')}
                className="px-7 py-4 bg-[#FF4A16] hover:bg-[#E03F0E] text-white font-bold text-xs tracking-widest uppercase transition-all duration-200 flex items-center gap-2 cursor-pointer rounded-[2px] shadow-md active:scale-[0.98] group"
              >
                <span>START A PROJECT</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                id="hero-cta-explore-work"
                onClick={() => onNavigate('work')}
                className="px-7 py-4 bg-white hover:bg-[#0A0A0A]/5 text-[#0A0A0A] border border-[#0A0A0A]/20 hover:border-[#0A0A0A] font-bold text-xs tracking-widest uppercase transition-all duration-200 flex items-center gap-2 cursor-pointer rounded-[2px] group shadow-2xs"
              >
                <span>EXPLORE OUR WORK</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </motion.div>
          </div>

          {/* ========================================================
              STEP 6: LA GRANDE ZONE ROUGE-ORANGE (#FF4A16)
              Bold architectural canvas with high-contrast black/white interface
              ======================================================== */}
          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 1 }
                : { opacity: 0, y: 16 }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.55,
              delay: shouldReduceMotion ? 0 : 1.45,
              ease: MOTION_EASE,
            }}
            className="lg:col-span-5"
          >
            {/* The Grande Zone Rouge-Orange */}
            <div className="bg-[#FF4A16] text-[#0A0A0A] p-6 sm:p-7 md:p-8 rounded-[2px] shadow-2xl relative overflow-hidden flex flex-col justify-between space-y-6">
              {/* Architectural header inside red-orange */}
              <div className="flex items-center justify-between border-b border-[#0A0A0A]/20 pb-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 bg-[#0A0A0A] text-white text-[10px] font-mono tracking-widest uppercase font-bold rounded-[1px]">
                    SYSTEM SPEC
                  </span>
                  <span className="text-xs font-mono font-bold text-[#0A0A0A] tracking-wider">
                    CORE.INFRA
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#0A0A0A]/80 font-bold">
                  ORG.ET-2026
                </span>
              </div>

              {/* Real Product Interface Preview: Codetovecto AST & Pentest telemetry */}
              <div className="bg-[#0A0A0A] text-white p-4 sm:p-5 rounded-[2px] border border-black/20 shadow-inner font-mono text-xs space-y-3">
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF4A16]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span className="text-[10px] text-white/70 ml-1">codetovecto-core::ast</span>
                  </div>
                  <span className="text-[9.5px] text-[#FF4A16] font-bold">PRODUCTION LIVE</span>
                </div>

                <div className="space-y-1 text-[11px] text-[#A0A0A0] leading-relaxed">
                  <p>
                    <span className="text-[#FF4A16]">$</span> cargo run --release --bin ast_vectorizer
                  </p>
                  <p className="text-white/90">
                    <span className="text-emerald-400">✓</span> Parser tree loaded (74.2 kLOC parsed)
                  </p>
                  <p className="text-white/90">
                    <span className="text-emerald-400">✓</span> High-dimensional embedding pipeline ready
                  </p>
                  <p className="text-white/70 text-[10px] pt-1">
                    Latency: <span className="text-white font-bold">14.2ms</span> • SHA256: <span className="text-[#FF4A16]">a9f4c82b</span>
                  </p>
                </div>
              </div>

              {/* 4 Technical metrics row */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 bg-white/15 border border-[#0A0A0A]/10 rounded-[2px]">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#0A0A0A]/70 font-semibold">
                    COLLECTIF STRUCTURÉ
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-[#0A0A0A] mt-0.5">
                    11 Talents
                  </div>
                </div>

                <div className="p-3 bg-white/15 border border-[#0A0A0A]/10 rounded-[2px]">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#0A0A0A]/70 font-semibold">
                    DIRECTION
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-[#0A0A0A] mt-0.5">
                    6 Fondateurs
                  </div>
                </div>

                <div className="p-3 bg-white/15 border border-[#0A0A0A]/10 rounded-[2px]">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#0A0A0A]/70 font-semibold">
                    EXPANSION
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-[#0A0A0A] mt-0.5">
                    5 Recrutés
                  </div>
                </div>

                <div className="p-3 bg-white/15 border border-[#0A0A0A]/10 rounded-[2px]">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#0A0A0A]/70 font-semibold">
                    EXIGENCE
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-[#0A0A0A] mt-0.5">
                    7 Étapes
                  </div>
                </div>
              </div>

              {/* Bottom Signature Bar */}
              <div className="pt-3 border-t border-[#0A0A0A]/20 flex items-center justify-between text-xs font-mono">
                <span className="font-bold tracking-tight text-[#0A0A0A] uppercase">
                  TECHNOLOGY BUILT WITH DISCIPLINE.
                </span>
                <ETSymbol className="w-7 h-7 text-[#0A0A0A]" theme="dark" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* ========================================================
            KEY METRICS BAR (Architectural light styling with Red-Orange accents)
            ======================================================== */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: shouldReduceMotion ? 0 : 0.85,
            ease: MOTION_EASE,
          }}
          className="mt-14 pt-8 border-t border-[#0A0A0A]/10 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {BRAND.stats.map((stat, idx) => (
            <div key={idx} className="border-l-2 border-[#FF4A16] pl-4 py-1">
              <div className="text-3xl sm:text-4xl font-black text-[#0A0A0A] tracking-tight">
                <AnimatedNumber
                  value={stat.value}
                  duration={1.4}
                  delay={shouldReduceMotion ? 0 : 0.85 + idx * 0.12}
                />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#333333] mt-0.5">
                {stat.label}
              </div>
              <div className="text-[11px] text-[#666666] font-mono mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
