import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

export type GlassMaterial = 'primary' | 'secondary' | 'floating' | 'highlight' | 'deep';

interface LiquidGlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  material?: GlassMaterial;
  interactive?: boolean;
  specularEdge?: boolean;
  className?: string;
  id?: string;
}

/**
 * LiquidGlassCard - Level 2 & 6 Physical Glass Material
 * Provides authentic optical refraction, layered edge lighting,
 * specular highlight on hover, and strict accessibility.
 */
export const LiquidGlassCard: React.FC<LiquidGlassCardProps> = ({
  children,
  material = 'primary',
  interactive = false,
  specularEdge = true,
  className = '',
  id,
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });

  const materialClassMap: Record<GlassMaterial, string> = {
    primary: 'glass-primary text-[#0A0A0A]',
    secondary: 'glass-secondary text-[#0A0A0A]',
    floating: 'glass-floating text-[#0A0A0A]',
    highlight: 'glass-highlight text-[#0A0A0A]',
    deep: 'glass-deep text-white',
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  };

  const handleMouseLeave = () => {
    if (!interactive) return;
    setMousePos((prev) => ({ ...prev, active: false }));
  };

  return (
    <div
      ref={cardRef}
      id={id}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden transition-all duration-300 rounded-[24px] sm:rounded-[28px] ${materialClassMap[material]} ${
        interactive ? 'cursor-pointer hover:-translate-y-1 hover:shadow-2xl group' : ''
      } ${className}`}
      {...props}
    >
      {/* Double Bevel Physical Glass Edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[24px] sm:rounded-[28px] border border-white/60 shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.9),inset_0_-1.5px_2px_rgba(0,0,0,0.06)] z-10"
      />

      {/* Specular hairline top reflection */}
      {specularEdge && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] z-10"
          style={{
            background:
              material === 'deep'
                ? 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 30%, rgba(255, 255, 255, 0.4) 70%, transparent 100%)'
                : 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.95) 25%, rgba(255, 255, 255, 0.95) 75%, transparent 100%)',
          }}
        />
      )}

      {/* Interactive mouse-follow specular optic sheen */}
      {interactive && !shouldReduceMotion && mousePos.active && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 opacity-100 transition-opacity duration-300"
          style={{
            background:
              material === 'deep'
                ? `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 74, 22, 0.12), transparent 70%)`
                : `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.6), transparent 70%)`,
          }}
        />
      )}

      {/* Subtle vermilion optic corner refraction */}
      {material === 'highlight' && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-10 -right-10 w-28 h-28 rounded-full blur-xl bg-[#FF4A16]/15"
        />
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
};
