import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

// Ease curve: natural, precise, professional (Apple/Linear-grade cubic bezier)
export const MOTION_EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Red Signal - Motion language micro-element for #FF4A16.
 * The slash or dot reveals or glides subtly as an intentional interaction signal.
 */
interface RedSignalProps {
  type?: 'slash' | 'dot' | 'badge';
  children?: React.ReactNode;
  className?: string;
  animateOnHover?: boolean;
}

export const RedSignal: React.FC<RedSignalProps> = ({
  type = 'slash',
  children,
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (type === 'slash') {
    return (
      <span className={`inline-block text-[#FF4A16] font-mono font-bold select-none transition-transform duration-200 ${className}`}>
        /
      </span>
    );
  }

  if (type === 'dot') {
    return (
      <span className={`inline-block w-1.5 h-1.5 rounded-full bg-[#FF4A16] shrink-0 ${className}`} />
    );
  }

  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-[#FF4A16] bg-[#FF4A16]/10 border border-[#FF4A16]/20 rounded-[2px] ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-[#FF4A16]" />
      {children}
    </span>
  );
};

/**
 * LivingGrid - Extremely subtle architectural grid lines.
 * Evokes system, architecture, precision, and construction.
 * Almost invisible, never a distracting permanent animated canvas.
 */
interface LivingGridProps {
  className?: string;
  columns?: number;
}

export const LivingGrid: React.FC<LivingGridProps> = ({
  className = '',
  columns = 4,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none ${className}`}
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-4 h-full">
        {Array.from({ length: columns }).map((_, i) => (
          <div
            key={i}
            className="h-full border-r border-[#0A0A0A]/[0.035] last:border-r-0 relative"
          >
            {/* Very subtle cross marker at header intersections */}
            <div className="absolute top-0 right-0 -mr-[3px] -mt-[3px] w-1.5 h-1.5 text-[#0A0A0A]/[0.08] font-mono text-[7px] leading-none select-none">
              +
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * ScrollReveal - Quiet Confidence Scroll Reveal.
 * Animates groups rather than every tiny element individually.
 * Up to 15-20px translate for text, smooth opacity.
 */
interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
  id?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  yOffset = 18,
  id,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div id={id} className={className}>{children}</div>;
  }

  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.5,
        delay,
        ease: MOTION_EASE,
      }}
    >
      {children}
    </motion.div>
  );
};

/**
 * StaggerContainer & StaggerItem for grouped reveals.
 */
export const staggerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: MOTION_EASE,
    },
  },
};

/**
 * PageTransition - Short, elegant fade + vertical translation for route changes.
 * Natural, calm, respects prefers-reduced-motion.
 */
interface PageTransitionProps {
  children: React.ReactNode;
  viewKey: string;
  className?: string;
}

export const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  viewKey,
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      key={viewKey}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{
        duration: 0.24,
        ease: MOTION_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
