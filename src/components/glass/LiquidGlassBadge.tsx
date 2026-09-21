import React from 'react';

interface LiquidGlassBadgeProps {
  children: React.ReactNode;
  variant?: 'vermilion' | 'neutral' | 'dark' | 'glass';
  size?: 'xs' | 'sm';
  indicator?: boolean;
  className?: string;
}

/**
 * LiquidGlassBadge - Crystalline optic status pill
 * Features layered edge reflection and status indication.
 */
export const LiquidGlassBadge: React.FC<LiquidGlassBadgeProps> = ({
  children,
  variant = 'vermilion',
  size = 'xs',
  indicator = false,
  className = '',
}) => {
  const sizeClasses = size === 'xs' ? 'px-2.5 py-0.5 text-[10px]' : 'px-3 py-1 text-xs';

  const variantMap = {
    vermilion:
      'bg-[#FF4A16]/10 text-[#FF4A16] border border-[#FF4A16]/25 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]',
    neutral:
      'bg-white/60 backdrop-blur-md text-[#333333] border border-white/80 shadow-[0_2px_8px_rgba(0,0,0,0.02),inset_0_1px_1px_rgba(255,255,255,1)]',
    dark:
      'bg-[#0A0A0A]/85 backdrop-blur-md text-white border border-white/15 shadow-[0_2px_10px_rgba(0,0,0,0.3),inset_0_1px_0.5px_rgba(255,255,255,0.2)]',
    glass:
      'bg-white/40 backdrop-blur-lg text-[#0A0A0A] border border-white/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono font-bold uppercase tracking-wider rounded-[2px] transition-all ${sizeClasses} ${variantMap[variant]} ${className}`}
    >
      {indicator && (
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            variant === 'dark'
              ? 'bg-[#FF4A16]'
              : variant === 'vermilion'
                ? 'bg-[#FF4A16] animate-pulse'
                : 'bg-[#0A0A0A]'
          }`}
        />
      )}
      <span>{children}</span>
    </span>
  );
};
