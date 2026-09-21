import React, { useState } from 'react';
import { PageView } from '../types';
import { BRAND } from '../data/brand';
import { ETSymbol, ETLogo } from './ETLogo';
import { ExcellenceTextBuild } from './ExcellenceTextBuild';
import { RedSignal, LivingGrid, MOTION_EASE } from './motion/MotionPrimitives';
import { AnimatedNumber } from './motion/AnimatedNumber';
import { OpticalCaustic } from './glass/OpticalCaustic';
import { LiquidGlassBadge } from './glass/LiquidGlassBadge';
import { LiquidGlassButton } from './glass/LiquidGlassButton';
import { PrismaticGlassBar } from './glass/PrismaticGlassBar';
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
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 bg-transparent text-[#0A0A0A] border-b border-[#0A0A0A]/10 overflow-hidden"
    >
      {/* Level 1: Atmospheric Environmental Caustics */}
      <OpticalCaustic intensity="medium" position="dual" />

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
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, ease: MOTION_EASE, delay: 0.22 }}
              className="flex items-center gap-2"
            >
              <LiquidGlassBadge variant="vermilion" size="xs">
                EXCELLENCE TEAM
              </LiquidGlassBadge>
              <span className="text-[#0A0A0A] font-semibold text-[11px] uppercase tracking-wider hidden sm:inline-block">
                2026 MATURITY
              </span>
            </motion.div>
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
            <LiquidGlassBadge variant="dark" size="xs" indicator>
              DISCIPLINE FIRST
            </LiquidGlassBadge>
          </motion.div>
        </div>

        {/* ========================================================
            MAIN HERO GRID:
            LEFT: Step 3 Headline, Step 4 Description, Step 5 CTAs
            RIGHT: Step 6 Grande Zone Rouge-Orange (#FF4A16) in Liquid Glass
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start pt-10 sm:pt-14">
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
              className="text-base sm:text-lg md:text-xl text-[#444444] max-w-2xl leading-relaxed font-normal pt-2"
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
              <LiquidGlassButton
                id="hero-cta-start-project"
                variant="primary"
                size="lg"
                onClick={() => onNavigate('contact')}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                START A PROJECT
              </LiquidGlassButton>

              <LiquidGlassButton
                id="hero-cta-explore-work"
                variant="secondary"
                size="lg"
                onClick={() => onNavigate('work')}
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                EXPLORE OUR WORK
              </LiquidGlassButton>
            </motion.div>
          </div>

          {/* ========================================================
              STEP 6: SCULPTED LIQUID GLASS CORE CONSOLE
              Physical frosted glass pane with 32px blur, double-bevel edge,
              live obsidian terminal, and tactile metric tiles
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
            {/* The Sculpted Liquid Glass Slab */}
            <div className="relative glass-floating rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 md:p-9 border border-white/80 shadow-[0_28px_60px_-15px_rgba(40,30,20,0.18),inset_0_2px_3px_rgba(255,255,255,1),inset_0_-1.5px_2px_rgba(0,0,0,0.06)] overflow-hidden space-y-6">
              {/* Internal Specular Edge */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent"
              />

              {/* Architectural header */}
              <div className="flex items-center justify-between border-b border-[#0A0A0A]/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 bg-[#0A0A0A] text-white text-[10px] font-mono tracking-widest uppercase font-bold rounded-full shadow-xs flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF4A16] animate-pulse" />
                    <span>EXCELLENCE TEAM</span>
                  </span>
                  <span className="text-xs font-mono font-bold text-[#0A0A0A] tracking-wider">
                    DISCIPLINE 2026
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#666666] font-semibold">
                  COTONOU // BÉNIN
                </span>
              </div>

              {/* Central Masterclass Statement */}
              <div className="space-y-1">
                <h3 className="text-2xl sm:text-3xl font-black text-[#0A0A0A] tracking-tight uppercase leading-[1.1]">
                  KEEP PUSHING <br />
                  <span className="text-[#FF4A16]">FORWARD!</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] font-medium leading-relaxed">
                  « It's as easy as turning on a light. »
                </p>
              </div>

              {/* Smoked Obsidian Glass Terminal Box */}
              <div className="glass-deep text-white p-4 sm:p-5 rounded-[20px] border border-white/20 font-mono text-xs space-y-3 relative overflow-hidden shadow-lg">
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF4A16] shadow-[0_0_8px_#FF4A16]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span className="text-[10px] text-white/80 ml-1">codetovecto-core::ast</span>
                  </div>
                  <span className="text-[9.5px] text-[#FF4A16] font-bold tracking-wider">PRODUCTION LIVE</span>
                </div>

                <div className="space-y-1.5 text-[11px] text-[#B5B5B5] leading-relaxed">
                  <p>
                    <span className="text-[#FF4A16] font-bold">$</span> cargo run --release --bin ast_vectorizer
                  </p>
                  <p className="text-white/95 flex items-center gap-1.5">
                    <span className="text-emerald-400">✓</span> Parser tree loaded (74.2 kLOC parsed)
                  </p>
                  <p className="text-white/95 flex items-center gap-1.5">
                    <span className="text-emerald-400">✓</span> High-dimensional embedding pipeline ready
                  </p>
                  <p className="text-white/70 text-[10px] pt-1">
                    Latency: <span className="text-white font-bold">14.2ms</span> • SHA256: <span className="text-[#FF4A16]">a9f4c82b</span>
                  </p>
                </div>
              </div>

              {/* 4 Optical Frosted Glass Metrics Tiles */}
              <div className="grid grid-cols-2 gap-3 pt-1 text-xs">
                <div className="p-3.5 bg-white/45 backdrop-blur-md border border-white/70 rounded-[18px] shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.95)]">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#666666] font-bold">
                    COLLECTIF
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-[#0A0A0A] mt-0.5">
                    11 Talents
                  </div>
                </div>

                <div className="p-3.5 bg-white/45 backdrop-blur-md border border-white/70 rounded-[18px] shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.95)]">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#666666] font-bold">
                    DIRECTION
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-[#0A0A0A] mt-0.5">
                    6 Fondateurs
                  </div>
                </div>

                <div className="p-3.5 bg-white/45 backdrop-blur-md border border-white/70 rounded-[18px] shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.95)]">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#666666] font-bold">
                    EXPANSION
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-[#0A0A0A] mt-0.5">
                    5 Recrutés
                  </div>
                </div>

                <div className="p-3.5 bg-white/45 backdrop-blur-md border border-white/70 rounded-[18px] shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.95)]">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#666666] font-bold">
                    EXIGENCE
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-[#0A0A0A] mt-0.5">
                    7 Étapes
                  </div>
                </div>
              </div>

              {/* Bottom Signature Bar */}
              <div className="pt-3 border-t border-[#0A0A0A]/10 flex items-center justify-between text-xs font-mono">
                <span className="font-bold tracking-tight text-[#0A0A0A] uppercase">
                  TECHNOLOGY BUILT WITH DISCIPLINE.
                </span>
                <ETSymbol className="w-7 h-7 text-[#0A0A0A]" theme="dark" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* ========================================================
            KEY METRICS BAR: Crystalline Liquid Glass Console
            ======================================================== */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: shouldReduceMotion ? 0 : 0.85,
            ease: MOTION_EASE,
          }}
          className="mt-14 p-6 sm:p-8 glass-primary rounded-[4px] border border-white/80 shadow-[0_12px_36px_-8px_rgba(10,10,10,0.05)] grid grid-cols-2 md:grid-cols-4 gap-6 specular-top"
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
              <div className="text-xs font-bold uppercase tracking-wider text-[#222222] mt-0.5">
                {stat.label}
              </div>
              <div className="text-[11px] text-[#666666] font-mono mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </motion.div>

        {/* The Signature Visual Prismatic Glass Bar */}
        <div className="mt-8">
          <PrismaticGlassBar label="EXCELLENCE TEAM // COTONOU — AFRIQUE FRANCOPHONE" />
        </div>
      </div>
    </section>
  );
};
