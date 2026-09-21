import React from 'react';

interface PrismaticGlassBarProps {
  className?: string;
  label?: string;
  coordinates?: string;
  showCoordinates?: boolean;
}

/**
 * PrismaticGlassBar - The Excellence Optical Signature Visual (Level 16)
 * A laser-etched architectural glass element embedded with the signature
 * vermilion (#FF4A16) lightwave refraction conduit and specular reflection edge.
 */
export const PrismaticGlassBar: React.FC<PrismaticGlassBarProps> = ({
  className = '',
  label = 'EXCELLENCE TEAM // DISCIPLINE FIRST',
  coordinates = '06°21\'N 02°26\'E • 11 MINDS',
  showCoordinates = true,
}) => {
  return (
    <div
      aria-hidden="true"
      className={`relative w-full overflow-hidden select-none py-2.5 ${className}`}
    >
      {/* Liquid Glass Conduit Bar */}
      <div className="relative h-[2px] w-full bg-gradient-to-r from-transparent via-[#0A0A0A]/15 to-transparent">
        {/* Core Vermilion Refraction Beam */}
        <div
          className="absolute inset-y-0 left-1/4 right-1/4 h-[2px]"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(255, 74, 22, 0.9) 30%, rgba(255, 120, 0, 0.95) 50%, rgba(255, 74, 22, 0.9) 70%, transparent 100%)',
            boxShadow: '0 0 12px rgba(255, 74, 22, 0.45)',
          }}
        />

        {/* Specular Glint */}
        <div className="absolute top-[-2px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
      </div>

      {/* Micro-etched Telemetry Under the Conduit */}
      <div className="flex items-center justify-between pt-2 px-1 text-[9px] font-mono tracking-[0.2em] text-[#656565] uppercase">
        <span className="flex items-center gap-1.5">
          <span className="w-1 h-1 rounded-full bg-[#FF4A16]" />
          {label}
        </span>
        {showCoordinates && (
          <span className="hidden sm:inline-block text-[#888888] font-normal">
            {coordinates}
          </span>
        )}
      </div>
    </div>
  );
};
