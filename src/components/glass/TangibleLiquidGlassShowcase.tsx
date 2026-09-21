import React, { useState, useRef, useEffect } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'motion/react';
import { ETSymbol } from '../ETLogo';
import { LiquidGlassBadge } from './LiquidGlassBadge';
import { Sparkles, Move3d, Sliders, RefreshCw, Eye, Layers } from 'lucide-react';

interface TangibleLiquidGlassShowcaseProps {
  variant?: 'inline' | 'full';
  className?: string;
  onExploreClick?: () => void;
}

export const TangibleLiquidGlassShowcase: React.FC<TangibleLiquidGlassShowcaseProps> = ({
  variant = 'full',
  className = '',
  onExploreClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeMode, setActiveMode] = useState<'mineral' | 'tunnel'>('mineral');
  const [blurLevel, setBlurLevel] = useState<20 | 32 | 48>(32);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tilt tracking
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 25, stiffness: 220 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3D Card Rotation based on mouse
  const cardRotateX = useTransform(smoothY, [0, 1], [9, -9]);
  const cardRotateY = useTransform(smoothX, [0, 1], [-12, 12]);
  const cardTranslateZ = useTransform(smoothX, [0, 1], [24, 24]);

  // Parallax offsets for spheres (different depths)
  const sphere1X = useTransform(smoothX, [0, 1], [-22, 22]);
  const sphere1Y = useTransform(smoothY, [0, 1], [-20, 20]);

  const sphere2X = useTransform(smoothX, [0, 1], [30, -30]);
  const sphere2Y = useTransform(smoothY, [0, 1], [26, -26]);

  const sphere3X = useTransform(smoothX, [0, 1], [-14, 14]);
  const sphere3Y = useTransform(smoothY, [0, 1], [18, -18]);

  const sphere4X = useTransform(smoothX, [0, 1], [22, -22]);
  const sphere4Y = useTransform(smoothY, [0, 1], [-16, 16]);

  const sphere5X = useTransform(smoothX, [0, 1], [-18, 18]);
  const sphere5Y = useTransform(smoothY, [0, 1], [12, -12]);

  // Specular sheen position
  const [sheenPos, setSheenPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));

    mouseX.set(x);
    mouseY.set(y);
    setSheenPos({ x: Math.round(x * 100), y: Math.round(y * 100) });
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
    setIsHovered(false);
    setSheenPos({ x: 50, y: 50 });
  };

  return (
    <div
      id="tangible-liquid-glass-showcase"
      className={`relative w-full rounded-[6px] overflow-hidden select-none ${className}`}
    >
      {/* Top Floating Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 sm:p-5 bg-white/70 backdrop-blur-md border-b border-[#0A0A0A]/10 text-xs font-mono">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#0A0A0A] text-white rounded-[2px] font-bold text-[10.5px]">
            <Sparkles className="w-3 h-3 text-[#FF4A16]" />
            <span>LIQUID GLASS // PHYSICAL STUDY</span>
          </div>
          <span className="text-[#666666] hidden sm:inline">2026 MASTERCLASS COMPOSITION</span>
        </div>

        {/* Dual Mode Switcher & Blur Selector */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-[#FAF8F6] p-1 border border-[#0A0A0A]/10 rounded-[3px]">
            <button
              type="button"
              onClick={() => setActiveMode('mineral')}
              className={`px-3 py-1 text-[11px] font-bold tracking-wider rounded-[2px] transition-all cursor-pointer ${
                activeMode === 'mineral'
                  ? 'bg-white text-[#0A0A0A] shadow-xs'
                  : 'text-[#666666] hover:text-[#0A0A0A]'
              }`}
            >
              01/ STUDIO MINÉRAL
            </button>
            <button
              type="button"
              onClick={() => setActiveMode('tunnel')}
              className={`px-3 py-1 text-[11px] font-bold tracking-wider rounded-[2px] transition-all cursor-pointer flex items-center gap-1.5 ${
                activeMode === 'tunnel'
                  ? 'bg-[#FF4A16] text-white shadow-xs'
                  : 'text-[#666666] hover:text-[#0A0A0A]'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>02/ CONDUIT VERMILLON</span>
            </button>
          </div>

          {/* Frosted Index Pills */}
          <div className="hidden md:flex items-center gap-1 bg-[#FAF8F6] p-1 border border-[#0A0A0A]/10 rounded-[3px]">
            <span className="text-[10px] text-[#777777] px-1.5 font-bold">FLOU:</span>
            {[20, 32, 48].map((lvl) => (
              <button
                key={lvl}
                type="button"
                onClick={() => setBlurLevel(lvl as 20 | 32 | 48)}
                className={`px-2 py-0.5 text-[10px] font-mono rounded-[2px] cursor-pointer ${
                  blurLevel === lvl
                    ? 'bg-[#0A0A0A] text-white font-bold'
                    : 'text-[#666666] hover:text-[#0A0A0A]'
                }`}
              >
                {lvl}px
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main 3D Stage Canvas */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className={`relative w-full h-[520px] sm:h-[600px] lg:h-[660px] flex items-center justify-center cursor-grab active:cursor-grabbing transition-colors duration-700 perspective-[1200px] overflow-hidden ${
          activeMode === 'mineral'
            ? 'bg-[#DDD5C7]'
            : 'bg-[#FF4A16]'
        }`}
        style={{
          perspective: '1200px',
        }}
      >
        {/* ========================================================
            BACKGROUND ENVIRONMENT 1: STUDIO MINÉRAL (Homage to Figma Masterclass)
            Warm directional illumination, soft drop shadow vignette
            ======================================================== */}
        {activeMode === 'mineral' && (
          <div className="absolute inset-0 pointer-events-none transition-opacity duration-700">
            {/* Ambient Radial Spotlight */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(circle at 45% 40%, #EFE8DC 0%, #D8CFC0 45%, #C7BDAA 100%)',
              }}
            />
            {/* Subtle photographic studio noise grain */}
            <div
              className="absolute inset-0 opacity-20 mix-blend-overlay"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              }}
            />
          </div>
        )}

        {/* ========================================================
            BACKGROUND ENVIRONMENT 2: CONDUIT VERMILLON (Homage to User Image 2)
            Futuristic perspective hallway in glossy Excellence vermilion lacquer
            ======================================================== */}
        {activeMode === 'tunnel' && (
          <div className="absolute inset-0 pointer-events-none transition-opacity duration-700 overflow-hidden">
            {/* Perspective Tunnel Gradient */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(circle at 50% 50%, #FF8533 0%, #FF5500 35%, #E63B00 70%, #992200 100%)',
              }}
            />

            {/* Perspective Tunnel Grid & Panels */}
            <svg
              className="absolute inset-0 w-full h-full opacity-35"
              viewBox="0 0 1000 660"
              preserveAspectRatio="none"
            >
              {/* Converging Corridor Lines to Vanishing Point (500, 330) */}
              <line x1="0" y1="0" x2="440" y2="300" stroke="#FFFFFF" strokeWidth="2.5" />
              <line x1="1000" y1="0" x2="560" y2="300" stroke="#FFFFFF" strokeWidth="2.5" />
              <line x1="0" y1="660" x2="440" y2="360" stroke="#FFFFFF" strokeWidth="2.5" />
              <line x1="1000" y1="660" x2="560" y2="360" stroke="#FFFFFF" strokeWidth="2.5" />

              {/* Ceiling light banks */}
              <polygon points="250,0 750,0 600,120 400,120" fill="rgba(255,255,255,0.4)" />
              <polygon points="410,130 590,130 550,200 450,200" fill="rgba(255,255,255,0.6)" />
              <polygon points="460,210 540,210 525,255 475,255" fill="rgba(255,255,255,0.85)" />

              {/* Floor reflective lane */}
              <polygon points="300,660 700,660 580,450 420,450" fill="rgba(255,255,255,0.25)" />
              <polygon points="420,450 580,450 540,360 460,360" fill="rgba(255,255,255,0.45)" />

              {/* Side architectural rib frames */}
              {[
                { x1: 70, y1: 50, x2: 70, y2: 610, w: 50 },
                { x1: 180, y1: 120, x2: 180, y2: 540, w: 40 },
                { x1: 290, y1: 190, x2: 290, y2: 470, w: 30 },
                { x1: 930, y1: 50, x2: 930, y2: 610, w: 50 },
                { x1: 820, y1: 120, x2: 820, y2: 540, w: 40 },
                { x1: 710, y1: 190, x2: 710, y2: 470, w: 30 },
              ].map((rib, i) => (
                <rect
                  key={i}
                  x={rib.x1}
                  y={rib.y1}
                  width={rib.w}
                  height={rib.y2 - rib.y1}
                  fill="none"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="2"
                  rx="6"
                />
              ))}

              {/* Vanishing core portal */}
              <rect x="475" y="305" width="50" height="50" fill="#FFA500" rx="3" />
            </svg>
          </div>
        )}

        {/* Masterclass Framing Typography in the 4 corners of the stage */}
        <div className="absolute top-6 left-6 text-[11px] font-mono tracking-widest text-[#0A0A0A]/70 uppercase font-bold pointer-events-none z-10 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF4A16]" />
          <span>EXCELLENCE TEAM COMPOSITION</span>
        </div>
        <div className="absolute top-6 right-6 text-[11px] font-mono tracking-widest text-[#0A0A0A]/70 uppercase font-bold pointer-events-none z-10">
          DISCIPLINE 2026
        </div>
        <div className="absolute bottom-6 left-6 text-[11px] font-mono tracking-widest text-[#0A0A0A]/70 uppercase font-bold pointer-events-none z-10 flex items-center gap-1.5">
          <Move3d className="w-3.5 h-3.5 text-[#0A0A0A]/60" />
          <span>TANGIBLE LIQUID GLASS</span>
        </div>
        <div className="absolute bottom-6 right-6 text-[11px] font-mono tracking-widest text-[#0A0A0A]/70 uppercase font-bold pointer-events-none z-10">
          COTONOU // BÉNIN
        </div>

        {/* ========================================================
            LAYER 1: 3D TACTILE SPHERES (Floating Behind and Intersecting)
            High-fidelity lighting with specular highlights and contact shadows
            ======================================================== */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          {/* Sphere 1: Large Slate-Obsidian Sphere (Top-Right, peeking behind card) */}
          <motion.div
            style={{
              x: sphere1X,
              y: sphere1Y,
            }}
            animate={{
              y: [-8, 8, -8],
              rotate: [0, 5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 7,
              ease: 'easeInOut',
            }}
            className="absolute top-[16%] right-[18%] sm:right-[26%] w-48 h-48 sm:w-60 sm:h-60 rounded-full"
          >
            {/* Sphere Drop Shadow */}
            <div className="absolute inset-0 rounded-full translate-y-12 translate-x-8 bg-black/35 blur-2xl -z-10" />

            {/* Sphere 3D Volume */}
            <div
              className="w-full h-full rounded-full shadow-[inset_0_-16px_32px_rgba(0,0,0,0.7),inset_10px_16px_28px_rgba(255,255,255,0.35)]"
              style={{
                background:
                  activeMode === 'mineral'
                    ? 'radial-gradient(circle at 35% 30%, #768A96 0%, #4D5E6A 45%, #2B3740 80%, #172026 100%)'
                    : 'radial-gradient(circle at 35% 30%, #FFFFFF 0%, #FFD699 35%, #D9480F 75%, #4A0E00 100%)',
              }}
            >
              {/* Pinpoint Specular Highlight */}
              <div className="absolute top-[22%] left-[26%] w-8 h-8 rounded-full bg-white/70 blur-[2px]" />
            </div>
          </motion.div>

          {/* Sphere 2: Medium Slate-Blue Sphere (Center-Left, intersects glass left edge) */}
          <motion.div
            style={{
              x: sphere2X,
              y: sphere2Y,
            }}
            animate={{
              y: [10, -10, 10],
              rotate: [0, -6, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 8.5,
              ease: 'easeInOut',
            }}
            className="absolute top-[38%] left-[14%] sm:left-[22%] w-44 h-44 sm:w-56 sm:h-56 rounded-full"
          >
            <div className="absolute inset-0 rounded-full translate-y-14 translate-x-10 bg-black/40 blur-2xl -z-10" />
            <div
              className="w-full h-full rounded-full shadow-[inset_0_-14px_28px_rgba(0,0,0,0.65),inset_8px_14px_24px_rgba(255,255,255,0.35)]"
              style={{
                background:
                  activeMode === 'mineral'
                    ? 'radial-gradient(circle at 35% 30%, #687D8C 0%, #455663 45%, #25313A 80%, #131A20 100%)'
                    : 'radial-gradient(circle at 35% 30%, #FFE0B2 0%, #FF8533 40%, #B83200 80%, #3D0B00 100%)',
              }}
            >
              <div className="absolute top-[22%] left-[26%] w-7 h-7 rounded-full bg-white/65 blur-[2px]" />
            </div>
          </motion.div>

          {/* Sphere 3: Small Warm Ivory Sphere (Top-Left, floating high) */}
          <motion.div
            style={{
              x: sphere3X,
              y: sphere3Y,
            }}
            animate={{
              y: [-12, 12, -12],
            }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: 'easeInOut',
            }}
            className="absolute top-[10%] left-[28%] sm:left-[34%] w-24 h-24 sm:w-32 sm:h-32 rounded-full"
          >
            <div className="absolute inset-0 rounded-full translate-y-8 translate-x-6 bg-black/25 blur-xl -z-10" />
            <div
              className="w-full h-full rounded-full shadow-[inset_0_-10px_20px_rgba(100,80,60,0.4),inset_6px_10px_18px_rgba(255,255,255,0.9)]"
              style={{
                background:
                  'radial-gradient(circle at 35% 30%, #FFFFFF 0%, #F5ECE0 40%, #D8C5A8 80%, #B59E7E 100%)',
              }}
            >
              <div className="absolute top-[20%] left-[24%] w-5 h-5 rounded-full bg-white/90 blur-[1px]" />
            </div>
          </motion.div>

          {/* Sphere 4: Medium Warm Champagne / Vermilion Core Sphere (Bottom-Center, directly behind & below glass) */}
          <motion.div
            style={{
              x: sphere4X,
              y: sphere4Y,
            }}
            animate={{
              y: [12, -12, 12],
            }}
            transition={{
              repeat: Infinity,
              duration: 9,
              ease: 'easeInOut',
            }}
            className="absolute bottom-[8%] left-[44%] sm:left-[48%] -translate-x-1/2 w-40 h-40 sm:w-52 sm:h-52 rounded-full"
          >
            <div className="absolute inset-0 rounded-full translate-y-12 translate-x-6 bg-black/45 blur-2xl -z-10" />
            <div
              className="w-full h-full rounded-full shadow-[inset_0_-14px_28px_rgba(80,50,30,0.5),inset_8px_14px_24px_rgba(255,255,255,0.85)]"
              style={{
                background:
                  activeMode === 'mineral'
                    ? 'radial-gradient(circle at 35% 30%, #FFFFFF 0%, #F8EFE3 35%, #D6C2A5 75%, #9E8563 100%)'
                    : 'radial-gradient(circle at 35% 30%, #FFFFFF 0%, #FFE0B2 35%, #FF4A16 75%, #8A1D00 100%)',
              }}
            >
              <div className="absolute top-[20%] left-[24%] w-7 h-7 rounded-full bg-white/90 blur-[1px]" />
            </div>
          </motion.div>

          {/* Sphere 5: Small Accent Sphere (Middle-Right, peeking outside edge) */}
          <motion.div
            style={{
              x: sphere5X,
              y: sphere5Y,
            }}
            animate={{
              y: [-10, 10, -10],
            }}
            transition={{
              repeat: Infinity,
              duration: 7.8,
              ease: 'easeInOut',
            }}
            className="absolute top-[48%] right-[14%] sm:right-[22%] w-28 h-28 sm:w-36 sm:h-36 rounded-full"
          >
            <div className="absolute inset-0 rounded-full translate-y-8 translate-x-6 bg-black/30 blur-xl -z-10" />
            <div
              className="w-full h-full rounded-full shadow-[inset_0_-10px_20px_rgba(100,70,50,0.4),inset_6px_10px_18px_rgba(255,255,255,0.85)]"
              style={{
                background:
                  'radial-gradient(circle at 35% 30%, #FFFFFF 0%, #F3EBE0 40%, #CFBDA1 80%, #A48D6E 100%)',
              }}
            >
              <div className="absolute top-[20%] left-[24%] w-5 h-5 rounded-full bg-white/90 blur-[1px]" />
            </div>
          </motion.div>
        </div>

        {/* ========================================================
            LAYER 2: THE PHYSICAL FLOATING LIQUID GLASS PANE
            Exact translation of the Figma Masterclass frosted pane
            ======================================================== */}
        <motion.div
          style={{
            rotateX: cardRotateX,
            rotateY: cardRotateY,
            transformStyle: 'preserve-3d',
          }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="relative z-20 w-[84%] max-w-[420px] sm:max-w-[480px] md:max-w-[520px] rounded-[28px] sm:rounded-[36px] overflow-hidden p-8 sm:p-12 md:p-14 text-center cursor-pointer transition-all duration-300"
        >
          {/* Glass Cast Floor Shadow */}
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-[40px] bg-black/35 blur-3xl -z-20 transform translate-y-16 scale-95 pointer-events-none"
          />

          {/* The Optical Frosted Backdrop Filter */}
          <div
            className="absolute inset-0 rounded-[28px] sm:rounded-[36px] pointer-events-none"
            style={{
              backdropFilter: `blur(${blurLevel}px) saturate(180%) contrast(104%)`,
              WebkitBackdropFilter: `blur(${blurLevel}px) saturate(180%) contrast(104%)`,
              background:
                activeMode === 'mineral'
                  ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.42) 0%, rgba(255, 255, 255, 0.16) 100%)'
                  : 'linear-gradient(135deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.08) 100%)',
            }}
          />

          {/* Physical Double-Bevel Edge Highlight (Top-Left White, Bottom-Right Dark) */}
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-[28px] sm:rounded-[36px] pointer-events-none border border-white/70 shadow-[inset_0_2px_4px_rgba(255,255,255,0.9),inset_0_-2px_4px_rgba(0,0,0,0.12),0_24px_48px_-12px_rgba(0,0,0,0.25)]"
          />

          {/* Dynamic Specular Sheen (Follows Cursor) */}
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-[28px] sm:rounded-[36px] pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle 380px at ${sheenPos.x}% ${sheenPos.y}%, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0.08) 40%, transparent 75%)`,
              opacity: isHovered ? 1 : 0.6,
            }}
          />

          {/* Micro Prismatic Rainbow Dispersion along the glass rim */}
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-[28px] sm:rounded-[36px] pointer-events-none opacity-25 mix-blend-screen"
            style={{
              background:
                'linear-gradient(135deg, rgba(255,100,100,0.25) 0%, rgba(255,255,255,0) 30%, rgba(100,200,255,0.25) 70%, rgba(255,200,100,0.2) 100%)',
            }}
          />

          {/* Internal Content (Crisp typography matching the Masterclass aesthetic) */}
          <div className="relative z-30 space-y-4 sm:space-y-5">
            {/* Top Micro-badge on Glass */}
            <div className="flex items-center justify-center gap-2">
              <span className="px-3 py-1 bg-white/40 border border-white/60 text-[#0A0A0A] font-mono text-[10px] tracking-widest uppercase font-bold rounded-full backdrop-blur-md shadow-xs flex items-center gap-1.5">
                <ETSymbol className="w-3.5 h-3.5" theme="light" />
                <span>EXCELLENCE TEAM // 2026</span>
              </span>
            </div>

            {/* Central Masterclass Statement */}
            <div className="space-y-2 pt-1">
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.08] uppercase text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
                style={{
                  letterSpacing: '-0.02em',
                }}
              >
                KEEP PUSHING <br />
                <span className="text-[#0A0A0A] drop-shadow-[0_1px_8px_rgba(255,255,255,0.4)]">
                  FORWARD!
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-white/95 font-medium max-w-xs sm:max-w-sm mx-auto leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)]">
                « It's as easy as turning on a light. »
              </p>
            </div>

            {/* Sub-technical metadata & action */}
            <div className="pt-3 border-t border-white/30 space-y-3">
              <p className="text-[11px] font-mono text-white/90 uppercase tracking-wider font-semibold drop-shadow-xs">
                TECHNOLOGY BUILT WITH DISCIPLINE
              </p>

              <div className="flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={onExploreClick}
                  className="px-5 py-2.5 bg-[#0A0A0A] hover:bg-[#222222] text-white font-mono text-[11px] font-bold tracking-wider uppercase rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.35)] transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>DÉCOUVRIR L’INGÉNIERIE</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF4A16] animate-pulse" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Technical Insight Bar */}
      <div className="p-4 sm:p-5 bg-white/70 backdrop-blur-md border-t border-[#0A0A0A]/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#666666]">
        <div className="flex items-center gap-3">
          <Layers className="w-4 h-4 text-[#FF4A16]" />
          <span>RÉFRACTION OPTIQUE : flou {blurLevel}px • Saturation 180% • Bevel spéculaire 2px</span>
        </div>
        <div className="flex items-center gap-2 text-[11px]">
          <span className="w-2 h-2 rounded-full bg-[#FF4A16]" />
          <span className="font-semibold text-[#0A0A0A]">
            Bougez la souris ou le doigt pour incliner la plaque en 3D
          </span>
        </div>
      </div>
    </div>
  );
};
