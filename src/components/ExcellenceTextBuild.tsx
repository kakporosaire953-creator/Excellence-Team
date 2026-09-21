import React, { useState, useEffect } from 'react';
import { useReducedMotion } from 'motion/react';

interface ExcellenceTextBuildProps {
  onComplete?: () => void;
  className?: string;
}

const FULL_LINE_1 = 'WE BUILD';
const FULL_LINE_2 = 'DIGITAL SYSTEMS';
const FULL_LINE_3 = 'THAT MATTER.';

const FULL_TEXT = `${FULL_LINE_1} ${FULL_LINE_2} ${FULL_LINE_3}`;

export const ExcellenceTextBuild: React.FC<ExcellenceTextBuildProps> = ({
  onComplete,
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [charCount, setCharCount] = useState(shouldReduceMotion ? FULL_TEXT.length : 0);
  const [isDone, setIsDone] = useState(shouldReduceMotion);

  useEffect(() => {
    if (shouldReduceMotion) {
      setCharCount(FULL_TEXT.length);
      setIsDone(true);
      onComplete?.();
      return;
    }

    // Start building after an initial quiet breath (220ms)
    const startTimeout = setTimeout(() => {
      let current = 0;
      const interval = setInterval(() => {
        current += 1;
        setCharCount(current);

        if (current >= FULL_TEXT.length) {
          clearInterval(interval);
          setIsDone(true);
          onComplete?.();
        }
      }, 34); // ~34ms per character: smooth, decisive, 1.2s total

      return () => clearInterval(interval);
    }, 220);

    return () => clearTimeout(startTimeout);
  }, [shouldReduceMotion, onComplete]);

  // Derive visible lines based on charCount
  const visibleFull = FULL_TEXT.slice(0, charCount);

  // Split into lines according to word boundaries
  const line1Limit = FULL_LINE_1.length; // 8
  const line2Limit = line1Limit + 1 + FULL_LINE_2.length; // 8 + 1 + 15 = 24

  let line1Text = '';
  let line2Text = '';
  let line3Text = '';

  if (charCount <= line1Limit) {
    line1Text = visibleFull;
  } else if (charCount <= line2Limit) {
    line1Text = FULL_LINE_1;
    line2Text = visibleFull.slice(line1Limit + 1);
  } else {
    line1Text = FULL_LINE_1;
    line2Text = FULL_LINE_2;
    line3Text = visibleFull.slice(line2Limit + 1);
  }

  return (
    <div
      className={`font-black tracking-[-0.04em] text-[#0A0A0A] leading-[0.94] uppercase select-none ${className}`}
      aria-label="WE BUILD DIGITAL SYSTEMS THAT MATTER."
    >
      {/* Line 1: WE BUILD */}
      <div className="overflow-hidden min-h-[1em]">
        <span>{line1Text}</span>
        {!isDone && charCount <= line1Limit && (
          <span
            className="inline-block w-[3px] h-[0.8em] bg-[#FF4A16] ml-1.5 align-middle animate-pulse"
            aria-hidden="true"
          />
        )}
      </div>

      {/* Line 2: DIGITAL SYSTEMS */}
      <div className="overflow-hidden min-h-[1em]">
        <span>{line2Text}</span>
        {!isDone && charCount > line1Limit && charCount <= line2Limit && (
          <span
            className="inline-block w-[3px] h-[0.8em] bg-[#FF4A16] ml-1.5 align-middle animate-pulse"
            aria-hidden="true"
          />
        )}
      </div>

      {/* Line 3: THAT MATTER. */}
      <div className="overflow-hidden min-h-[1em]">
        {isDone ? (
          <>
            <span>THAT MATTER</span>
            <span className="text-[#FF4A16]">.</span>
          </>
        ) : (
          <>
            <span>{line3Text}</span>
            {charCount > line2Limit && (
              <span
                className="inline-block w-[3px] h-[0.8em] bg-[#FF4A16] ml-1.5 align-middle animate-pulse"
                aria-hidden="true"
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};
