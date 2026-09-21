import React from 'react';

interface OpticalCausticProps {
  className?: string;
  intensity?: 'subtle' | 'medium' | 'pronounced';
  position?: 'top-right' | 'center' | 'bottom-left' | 'dual';
}

/**
 * OpticalCaustic - Level 1 Environmental Light Mesh
 * Simulates subtle atmospheric photon diffusion & soft caustics behind glass panels.
 * Renders via optimized CSS radial gradients (zero CPU/canvas overhead).
 */
export const OpticalCaustic: React.FC<OpticalCausticProps> = ({
  className = '',
  intensity = 'subtle',
  position = 'top-right',
}) => {
  const opacityMap = {
    subtle: 'opacity-40',
    medium: 'opacity-70',
    pronounced: 'opacity-100',
  };

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none ${opacityMap[intensity]} ${className}`}
    >
      {/* Primary Warm Diffusion Pool */}
      {(position === 'top-right' || position === 'dual' || position === 'center') && (
        <div
          className="absolute -top-32 -right-32 w-[550px] h-[550px] rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(255, 74, 22, 0.08) 0%, rgba(255, 140, 0, 0.03) 45%, transparent 70%)',
          }}
        />
      )}

      {/* Secondary Specular White Aura */}
      {(position === 'bottom-left' || position === 'dual' || position === 'center') && (
        <div
          className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(250, 248, 246, 0.4) 50%, transparent 75%)',
          }}
        />
      )}
    </div>
  );
};
