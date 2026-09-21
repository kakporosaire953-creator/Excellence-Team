import React, { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion, animate } from 'motion/react';

interface AnimatedNumberProps {
  /** The value to animate, e.g. "11", "12+", "05", "100%", 2026 */
  value: string | number;
  /** Duration in seconds */
  duration?: number;
  /** Delay before animation starts in seconds */
  delay?: number;
  /** Additional CSS class names */
  className?: string;
  /** Trigger animation only once when scrolled into view */
  once?: boolean;
}

/**
 * AnimatedNumber
 * Smooth, high-precision counter animation that parses numeric strings,
 * preserves leading zeros, prefixes, and suffixes (e.g. "12+", "05", "100%").
 * Eased with a natural, authoritative cubic curve.
 */
export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  duration = 1.4,
  delay = 0,
  className = '',
  once = true,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, margin: '-20px' });
  const shouldReduceMotion = useReducedMotion();

  // Parse raw value to detect prefix, target number, suffix, and leading zero format
  const rawStr = String(value).trim();
  const match = rawStr.match(/^([^0-9]*)(\d+)(.*)$/);

  const prefix = match ? match[1] : '';
  const numStr = match ? match[2] : '0';
  const suffix = match ? match[3] : '';
  const targetNumber = parseInt(numStr, 10) || 0;
  const hasLeadingZero = numStr.length > 1 && numStr.startsWith('0');
  const digitsCount = numStr.length;

  const [displayNumber, setDisplayNumber] = useState<number>(0);

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayNumber(targetNumber);
      return;
    }

    if (!isInView) {
      setDisplayNumber(0);
      return;
    }

    const controls = animate(0, targetNumber, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1], // easeOutExpo
      onUpdate: (latest) => {
        setDisplayNumber(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, targetNumber, duration, delay, shouldReduceMotion]);

  // Format the current number
  const formattedNumber = shouldReduceMotion
    ? numStr
    : hasLeadingZero
      ? String(displayNumber).padStart(digitsCount, '0')
      : String(displayNumber);

  return (
    <span ref={ref} className={`inline-block tabular-nums font-inherit ${className}`}>
      {prefix}
      <span>{formattedNumber}</span>
      {suffix && <span className="text-[#FF4A16] font-semibold">{suffix}</span>}
    </span>
  );
};
