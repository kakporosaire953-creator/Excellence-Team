import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { MOTION_EASE } from '../motion/MotionPrimitives';

interface LiquidGlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'glass' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  className?: string;
  id?: string;
}

/**
 * LiquidGlassButton - Precision tactile button with specular bevel
 * Features micro-elastic compression and subtle edge lighting.
 */
export const LiquidGlassButton: React.FC<LiquidGlassButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  className = '',
  id,
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-xs tracking-widest',
    lg: 'px-7 py-4 text-xs sm:text-sm tracking-widest',
  };

  const variantClasses = {
    primary:
      'bg-[#FF4A16] hover:bg-[#E03F0E] text-white font-bold uppercase shadow-[0_4px_16px_rgba(255,74,22,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] border border-[#FF4A16]',
    secondary:
      'bg-white/80 hover:bg-white text-[#0A0A0A] font-bold uppercase backdrop-blur-md border border-white/90 hover:border-white shadow-[0_4px_16px_rgba(0,0,0,0.04),inset_0_1px_1.5px_rgba(255,255,255,1)] hover:text-[#FF4A16]',
    glass:
      'glass-floating hover:bg-white text-[#0A0A0A] font-bold uppercase hover:text-[#FF4A16]',
    dark:
      'glass-deep hover:bg-[#141414] text-white font-bold uppercase hover:border-white/30',
  };

  return (
    <motion.button
      id={id}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
      whileHover={shouldReduceMotion ? undefined : { y: -1 }}
      transition={{ duration: 0.15, ease: MOTION_EASE }}
      className={`relative inline-flex items-center justify-center gap-2 rounded-[2px] transition-colors cursor-pointer select-none group active:scale-[0.98] gpu-glass will-change-[backdrop-filter,transform] transform-gpu ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {/* Specular hairline top reflection */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"
      />

      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="transition-transform duration-200 group-hover:translate-x-0.5">{icon}</span>}
      </span>
    </motion.button>
  );
};
