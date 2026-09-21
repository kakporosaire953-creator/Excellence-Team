import React from 'react';
import { motion } from 'motion/react';

/**
 * GlobalGlassBackground
 * Provides the warm tactile mineral studio environment and floating 3D spheres
 * across the ENTIRE website background, so that all frosted glass cards throughout
 * every view (Hero, Manifesto, Services, Team, Contact, Footer) refract authentic
 * volume, depth, and specular light as the user scrolls.
 */
export const GlobalGlassBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden"
    >
      {/* 1. Warm Mineral Studio Gradient Canvas */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 45% 20%, #EDE6D9 0%, #DFD6C7 40%, #CCC1AF 85%, #BEB19C 100%)',
        }}
      />

      {/* 2. Micro Photographic Studio Film Grain */}
      <div
        className="absolute inset-0 opacity-[0.14] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 3. Global Floating 3D Tactile Spheres (Multi-depth across viewport) */}
      
      {/* Sphere 1: Giant Slate-Obsidian Sphere (Top Right - Hero / Header refraction) */}
      <motion.div
        animate={{
          y: [-14, 14, -14],
          x: [0, 8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: 'easeInOut',
        }}
        className="absolute -top-12 right-[8%] w-80 h-80 sm:w-[460px] sm:h-[460px] rounded-full transform-gpu will-change-transform"
      >
        <div className="absolute inset-0 rounded-full translate-y-20 translate-x-12 bg-black/35 blur-3xl" />
        <div
          className="w-full h-full rounded-full shadow-[inset_0_-24px_48px_rgba(0,0,0,0.7),inset_16px_24px_36px_rgba(255,255,255,0.4)]"
          style={{
            background:
              'radial-gradient(circle at 35% 30%, #768A96 0%, #4D5E6A 45%, #2B3740 80%, #172026 100%)',
          }}
        >
          <div className="absolute top-[22%] left-[26%] w-14 h-14 rounded-full bg-white/75 blur-[3px]" />
        </div>
      </motion.div>

      {/* Sphere 2: Medium Slate-Blue Sphere (Center Left - Hero / Manifesto refraction) */}
      <motion.div
        animate={{
          y: [16, -16, 16],
          x: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: 'easeInOut',
        }}
        className="absolute top-[32%] -left-20 sm:left-[4%] w-72 h-72 sm:w-96 sm:h-96 rounded-full transform-gpu will-change-transform"
      >
        <div className="absolute inset-0 rounded-full translate-y-16 translate-x-12 bg-black/35 blur-3xl" />
        <div
          className="w-full h-full rounded-full shadow-[inset_0_-20px_40px_rgba(0,0,0,0.65),inset_12px_20px_32px_rgba(255,255,255,0.35)]"
          style={{
            background:
              'radial-gradient(circle at 35% 30%, #687D8C 0%, #455663 45%, #25313A 80%, #131A20 100%)',
          }}
        >
          <div className="absolute top-[22%] left-[26%] w-10 h-10 rounded-full bg-white/70 blur-[2px]" />
        </div>
      </motion.div>

      {/* Sphere 3: Signature Excellence Team Vermilion Sphere (Upper Center-Right) */}
      <motion.div
        animate={{
          y: [-12, 12, -12],
          scale: [1, 1.03, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 9,
          ease: 'easeInOut',
        }}
        className="absolute top-[18%] right-[32%] w-48 h-48 sm:w-64 sm:h-64 rounded-full transform-gpu will-change-transform"
      >
        <div className="absolute inset-0 rounded-full translate-y-14 translate-x-8 bg-[#FF4A16]/40 blur-3xl" />
        <div
          className="w-full h-full rounded-full shadow-[inset_0_-18px_36px_rgba(120,20,0,0.7),inset_12px_18px_28px_rgba(255,255,255,0.8)]"
          style={{
            background:
              'radial-gradient(circle at 35% 30%, #FFFFFF 0%, #FFA87D 25%, #FF4A16 65%, #A31E00 100%)',
          }}
        >
          <div className="absolute top-[20%] left-[24%] w-8 h-8 rounded-full bg-white/90 blur-[1px]" />
        </div>
      </motion.div>

      {/* Sphere 4: Warm Ivory Sphere (Manifesto / Capabilities refraction) */}
      <motion.div
        animate={{
          y: [14, -14, 14],
        }}
        transition={{
          repeat: Infinity,
          duration: 11,
          ease: 'easeInOut',
        }}
        className="absolute top-[52%] right-[12%] w-60 h-60 sm:w-80 sm:h-80 rounded-full transform-gpu will-change-transform"
      >
        <div className="absolute inset-0 rounded-full translate-y-14 translate-x-8 bg-black/25 blur-2xl" />
        <div
          className="w-full h-full rounded-full shadow-[inset_0_-16px_32px_rgba(100,80,60,0.4),inset_10px_16px_28px_rgba(255,255,255,0.9)]"
          style={{
            background:
              'radial-gradient(circle at 35% 30%, #FFFFFF 0%, #F5ECE0 40%, #D8C5A8 80%, #B59E7E 100%)',
          }}
        >
          <div className="absolute top-[20%] left-[24%] w-8 h-8 rounded-full bg-white/90 blur-[2px]" />
        </div>
      </motion.div>

      {/* Sphere 5: Deep Slate Obsidian Sphere (Process / Team / Footer refraction) */}
      <motion.div
        animate={{
          y: [-18, 18, -18],
        }}
        transition={{
          repeat: Infinity,
          duration: 13,
          ease: 'easeInOut',
        }}
        className="absolute top-[75%] left-[10%] w-72 h-72 sm:w-96 sm:h-96 rounded-full transform-gpu will-change-transform"
      >
        <div className="absolute inset-0 rounded-full translate-y-18 translate-x-12 bg-black/40 blur-3xl" />
        <div
          className="w-full h-full rounded-full shadow-[inset_0_-22px_44px_rgba(0,0,0,0.7),inset_14px_22px_34px_rgba(255,255,255,0.35)]"
          style={{
            background:
              'radial-gradient(circle at 35% 30%, #5E7280 0%, #3D4C56 45%, #202A30 80%, #0F151A 100%)',
          }}
        >
          <div className="absolute top-[22%] left-[26%] w-10 h-10 rounded-full bg-white/70 blur-[2px]" />
        </div>
      </motion.div>

      {/* Sphere 6: Warm Amber-Vermilion Sphere (Bottom Right / Footer) */}
      <motion.div
        animate={{
          y: [12, -12, 12],
        }}
        transition={{
          repeat: Infinity,
          duration: 8.5,
          ease: 'easeInOut',
        }}
        className="absolute bottom-[2%] right-[18%] w-52 h-52 sm:w-72 sm:h-72 rounded-full transform-gpu will-change-transform"
      >
        <div className="absolute inset-0 rounded-full translate-y-14 translate-x-8 bg-[#FF4A16]/35 blur-3xl" />
        <div
          className="w-full h-full rounded-full shadow-[inset_0_-16px_32px_rgba(110,25,0,0.65),inset_10px_16px_26px_rgba(255,255,255,0.85)]"
          style={{
            background:
              'radial-gradient(circle at 35% 30%, #FFFFFF 0%, #FFD1B3 25%, #FF4A16 70%, #992200 100%)',
          }}
        >
          <div className="absolute top-[20%] left-[24%] w-8 h-8 rounded-full bg-white/90 blur-[1px]" />
        </div>
      </motion.div>
    </div>
  );
};
