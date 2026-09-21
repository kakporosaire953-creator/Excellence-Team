import React from 'react';

interface ETLogoProps {
  variant?: 'full' | 'horizontal' | 'symbol' | 'stacked' | 'badge';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  theme?: 'dark' | 'light';
  className?: string;
  showTagline?: boolean;
}

export const ETSymbol: React.FC<{ className?: string; theme?: 'dark' | 'light' }> = ({
  className = 'w-10 h-10',
  theme = 'light',
}) => {
  const rawId = React.useId();
  const gradId = `et_grad_${rawId.replace(/:/g, '')}`;
  const isDark = theme === 'dark';

  return (
    <svg
      viewBox="120 80 810 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block shrink-0 ${className}`}
      aria-label="Excellence Team Symbol"
    >
      <defs>
        {/* Red-Orange signature gradient for the T and aerodynamic wing */}
        <linearGradient
          id={`${gradId}_red`}
          x1="235"
          y1="220"
          x2="915"
          y2="104"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#FF161E" />
          <stop offset="28%" stopColor="#FF3800" />
          <stop offset="62%" stopColor="#FF5200" />
          <stop offset="86%" stopColor="#FF7400" />
          <stop offset="100%" stopColor="#FF8A00" />
        </linearGradient>

        {/* Specular sheen facet for the middle wing on light theme */}
        <linearGradient
          id={`${gradId}_facet`}
          x1="240"
          y1="256"
          x2="480"
          y2="340"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#2E2E2E" />
          <stop offset="55%" stopColor="#1C1C1C" />
          <stop offset="100%" stopColor="#0A0A0A" />
        </linearGradient>
      </defs>

      {/* 1. DYNAMIC "T" & UPPER AERODYNAMIC WING (Signature Red-to-Orange Gradient) */}
      <path
        d="M 235 220
           C 235 152, 280 106, 360 106
           L 740 106
           C 790 106, 850 100, 915 104
           C 870 128, 815 180, 755 204
           L 595 420
           L 464 540
           L 580 220
           L 360 220
           L 235 220 Z"
        fill={`url(#${gradId}_red)`}
      />

      {/* 2. MIDDLE "E" WING (Aerodynamic airfoil with subtle facet reflection) */}
      <g>
        <path
          d="M 242 256
             L 504 256
             C 490 292, 448 350, 364 368
             C 320 372, 248 372, 185 370
             L 242 256 Z"
          fill={isDark ? '#FFFFFF' : '#0A0A0A'}
        />
        {!isDark && (
          <path
            d="M 242 256
               L 504 256
               C 486 285, 442 324, 380 338
               C 320 348, 235 348, 185 370
               L 242 256 Z"
            fill={`url(#${gradId}_facet)`}
            opacity="0.8"
          />
        )}
      </g>

      {/* 3. LOWER "E" WING */}
      <path
        d="M 170 404
           L 460 404
           C 410 460, 330 504, 240 508
           L 136 508
           L 170 404 Z"
        fill={isDark ? '#FFFFFF' : '#0A0A0A'}
      />
    </svg>
  );
};

export const ETBadge: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 140,
}) => {
  return (
    <div
      className={`relative rounded-full flex items-center justify-center p-3 border border-[#0A0A0A]/20 bg-[#FAF8F6] shadow-sm select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full animate-[spin_30s_linear_infinite]"
      >
        <path
          id="circlePath"
          d="M 100, 100 m -76, 0 a 76,76 0 1,1 152,0 a 76,76 0 1,1 -152,0"
          fill="none"
        />
        <text className="text-[10.5px] font-archivo font-bold tracking-[0.24em] uppercase fill-[#0A0A0A]">
          <textPath href="#circlePath" startOffset="0%">
            EXCELLENCE TEAM • EST. 2024 • TECHNOLOGY • INNOVATION • DISCIPLINE •
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <ETSymbol className="w-12 h-12" theme="light" />
      </div>
    </div>
  );
};

export const ETLogo: React.FC<ETLogoProps> = ({
  variant = 'horizontal',
  size = 'md',
  theme = 'light',
  className = '',
  showTagline = true,
}) => {
  const textColor = theme === 'dark' ? 'text-white' : 'text-[#0A0A0A]';
  const mutedColor = theme === 'dark' ? 'text-white/60' : 'text-[#656565]';
  const dividerColor = theme === 'dark' ? 'border-white/20' : 'border-[#0A0A0A]/20';

  if (variant === 'symbol') {
    const symbolSizes = {
      sm: 'w-7 h-7',
      md: 'w-10 h-10',
      lg: 'w-14 h-14',
      xl: 'w-20 h-20',
    };
    return <ETSymbol className={`${symbolSizes[size]} ${className}`} theme={theme} />;
  }

  if (variant === 'badge') {
    return <ETBadge className={className} />;
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <ETSymbol className="w-14 h-14 mb-3" theme={theme} />
        <div className="flex flex-col">
          <span className={`font-archivo font-black text-2xl tracking-tighter leading-none ${textColor}`}>
            EXCELLENCE
          </span>
          <span className={`font-archivo font-black text-2xl tracking-tighter leading-none flex items-center justify-center ${textColor}`}>
            TEAM<span className="text-[#FF4A16]">/</span>
          </span>
          {showTagline && (
            <span className={`mt-2 font-inter text-[9.5px] tracking-[0.22em] uppercase font-semibold ${mutedColor}`}>
              TECHNOLOGY BUILT WITH <span className="text-[#FF4A16]">DISCIPLINE.</span>
            </span>
          )}
        </div>
      </div>
    );
  }

  // Default: Horizontal lockup [Symbol] | [EXCELLENCE TEAM/] + [TECHNOLOGY BUILT WITH DISCIPLINE.]
  const symbolSizeClass = {
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-13 h-13',
    xl: 'w-16 h-16',
  }[size];

  const textSizeClass = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-xl',
    xl: 'text-2xl',
  }[size];

  const taglineSizeClass = {
    sm: 'text-[7.5px] tracking-[0.18em]',
    md: 'text-[8.5px] tracking-[0.2em]',
    lg: 'text-[10px] tracking-[0.22em]',
    xl: 'text-[11px] tracking-[0.24em]',
  }[size];

  return (
    <div className={`inline-flex items-center gap-3 md:gap-4 select-none ${className}`}>
      <ETSymbol className={symbolSizeClass} theme={theme} />
      <div className={`h-8 md:h-10 border-r ${dividerColor}`} />
      <div className="flex flex-col justify-center text-left">
        <div className={`font-archivo font-black tracking-tight leading-none ${textSizeClass} ${textColor}`}>
          EXCELLENCE <span className="inline-flex items-center">TEAM<span className="text-[#FF4A16]">/</span></span>
        </div>
        {showTagline && (
          <div className={`font-inter font-semibold uppercase mt-1 ${taglineSizeClass} ${mutedColor} whitespace-nowrap`}>
            TECHNOLOGY BUILT WITH <span className="text-[#FF4A16] font-bold">DISCIPLINE.</span>
          </div>
        )}
      </div>
    </div>
  );
};
