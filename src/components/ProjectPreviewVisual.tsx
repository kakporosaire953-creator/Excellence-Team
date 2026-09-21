import React from 'react';
import { Project } from '../types';

interface ProjectPreviewVisualProps {
  project: Project;
  className?: string;
  compact?: boolean;
}

export const ProjectPreviewVisual: React.FC<ProjectPreviewVisualProps> = ({
  project,
  className = '',
  compact = false,
}) => {
  const id = project.id;

  // Custom blueprint visualization tailored to the specific software architecture
  const renderVisual = () => {
    switch (id) {
      case 'codetovecto':
        return (
          <div className="w-full h-full flex flex-col justify-between p-4 sm:p-6 bg-[#0E1013] text-white font-mono text-[11px] overflow-hidden select-none">
            {/* Top Toolbar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF4A16]" />
                <span className="text-[10px] text-white/70 tracking-wider">AST-PARSER // RUST_WASM.V2</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 bg-white/10 text-[#FF4A16] font-bold">120ms ENGINE</span>
            </div>

            {/* Tree Graph Schematic */}
            <div className="relative my-4 flex-1 flex items-center justify-center">
              <svg className="w-full h-36 sm:h-44 text-white/20" viewBox="0 0 340 140" fill="none" stroke="currentColor">
                <line x1="170" y1="20" x2="80" y2="70" strokeWidth="1.5" stroke="#FF4A16" strokeDasharray="3 3" />
                <line x1="170" y1="20" x2="260" y2="70" strokeWidth="1.5" stroke="#FFFFFF" strokeOpacity="0.4" />
                <line x1="80" y1="70" x2="40" y2="120" strokeWidth="1.5" stroke="#FFFFFF" strokeOpacity="0.3" />
                <line x1="80" y1="70" x2="120" y2="120" strokeWidth="1.5" stroke="#FF4A16" />
                <line x1="260" y1="70" x2="220" y2="120" strokeWidth="1.5" stroke="#FFFFFF" strokeOpacity="0.3" />
                <line x1="260" y1="70" x2="300" y2="120" strokeWidth="1.5" stroke="#FFFFFF" strokeOpacity="0.3" />

                {/* Nodes */}
                <rect x="130" y="8" width="80" height="24" rx="2" fill="#1C1F24" stroke="#FF4A16" strokeWidth="1.5" />
                <text x="170" y="24" fill="#FFFFFF" fontSize="9" textAnchor="middle" fontFamily="monospace">RootNode:AST</text>

                <rect x="45" y="58" width="70" height="24" rx="2" fill="#1C1F24" stroke="#FFFFFF" strokeOpacity="0.4" />
                <text x="80" y="74" fill="#FF4A16" fontSize="8" textAnchor="middle" fontFamily="monospace">SyntaxTree</text>

                <rect x="225" y="58" width="70" height="24" rx="2" fill="#1C1F24" stroke="#FFFFFF" strokeOpacity="0.4" />
                <text x="260" y="74" fill="#E0E0E0" fontSize="8" textAnchor="middle" fontFamily="monospace">LexerScope</text>

                <rect x="10" y="108" width="60" height="20" rx="2" fill="#16181D" stroke="#FFFFFF" strokeOpacity="0.2" />
                <text x="40" y="122" fill="#A0A0A0" fontSize="7" textAnchor="middle" fontFamily="monospace">Expr</text>

                <rect x="90" y="108" width="60" height="20" rx="2" fill="#FF4A16" fillOpacity="0.2" stroke="#FF4A16" />
                <text x="120" y="122" fill="#FF4A16" fontSize="7" textAnchor="middle" fontFamily="monospace" fontWeight="bold">VectorSVG</text>

                <rect x="190" y="108" width="60" height="20" rx="2" fill="#16181D" stroke="#FFFFFF" strokeOpacity="0.2" />
                <text x="220" y="122" fill="#A0A0A0" fontSize="7" textAnchor="middle" fontFamily="monospace">Token</text>

                <rect x="270" y="108" width="60" height="20" rx="2" fill="#16181D" stroke="#FFFFFF" strokeOpacity="0.2" />
                <text x="300" y="122" fill="#A0A0A0" fontSize="7" textAnchor="middle" fontFamily="monospace">Output</text>
              </svg>
            </div>

            {/* Bottom Status */}
            <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[9.5px] text-white/50">
              <span>STATUS: PARSING OK</span>
              <span className="text-[#FF4A16]">SCALE: 100% VECTOR</span>
            </div>
          </div>
        );

      case 'videogen-v2':
        return (
          <div className="w-full h-full flex flex-col justify-between p-4 sm:p-6 bg-[#0B0D11] text-white font-mono text-[11px] overflow-hidden select-none">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-[10px] text-white/70">PIPELINE // FFMPEG_RENDER_CLUSTER</span>
              <span className="text-[10px] font-bold text-[#FF4A16] px-2 py-0.5 bg-[#FF4A16]/15">60 FPS</span>
            </div>

            {/* Audio Wave & Timeline Tracks */}
            <div className="my-3 space-y-2 flex-1 flex flex-col justify-center">
              <div className="h-8 bg-white/[0.04] border border-white/10 rounded-[2px] p-1 flex items-center gap-1">
                <span className="text-[8px] text-white/50 w-10 shrink-0">TRACK 01</span>
                <div className="flex-1 flex items-center justify-between gap-1 h-full px-2 bg-[#FF4A16]/10 border-l-2 border-[#FF4A16]">
                  {Array.from({ length: 28 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-[#FF4A16] rounded-full"
                      style={{ height: `${20 + Math.sin(i * 0.7) * 50 + ((i % 3) * 15)}%` }}
                    />
                  ))}
                </div>
              </div>

              <div className="h-8 bg-white/[0.04] border border-white/10 rounded-[2px] p-1 flex items-center gap-1">
                <span className="text-[8px] text-white/50 w-10 shrink-0">TRACK 02</span>
                <div className="flex-1 flex items-center gap-2 h-full px-2">
                  <div className="w-24 h-full bg-white/10 border border-white/20 rounded-[2px] flex items-center justify-center text-[7.5px]">
                    VOICE_NEURAL
                  </div>
                  <div className="w-32 h-full bg-white/15 border border-white/30 rounded-[2px] flex items-center justify-center text-[7.5px] text-[#FF4A16]">
                    SCENE_DYNAMIC
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[9.5px] text-white/50">
              <span>OUTPUT: 1080x1920 / 1920x1080</span>
              <span className="text-white">ENCODE TIME: 00:02:14</span>
            </div>
          </div>
        );

      case 'excellencelink':
        return (
          <div className="w-full h-full flex flex-col justify-between p-4 sm:p-6 bg-[#0E0F12] text-white font-mono text-[11px] overflow-hidden select-none">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-[10px] text-white/70">EDGE_ROUTER // ANYCAST_REDIS</span>
              <span className="text-[10px] font-bold text-white px-2 py-0.5 bg-[#FF4A16]">LATENCY &lt; 18ms</span>
            </div>

            <div className="my-4 flex-1 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-3 w-full">
                <div className="p-3 bg-white/5 border border-white/10 rounded-[2px] text-center">
                  <div className="text-[8px] text-white/50">ORIGIN ROUTE</div>
                  <div className="text-sm font-bold text-white mt-1">/link-01</div>
                  <div className="text-[8px] text-[#FF4A16] mt-1">200 OK</div>
                </div>
                <div className="p-3 bg-white/10 border border-[#FF4A16] rounded-[2px] text-center">
                  <div className="text-[8px] text-[#FF4A16]">CACHE HIT</div>
                  <div className="text-sm font-bold text-white mt-1">12.4 ms</div>
                  <div className="text-[8px] text-white/70 mt-1">RAM MEMORY</div>
                </div>
                <div className="p-3 bg-white/5 border border-white/10 rounded-[2px] text-center">
                  <div className="text-[8px] text-white/50">SECURITY</div>
                  <div className="text-sm font-bold text-white mt-1">TLS 1.3</div>
                  <div className="text-[8px] text-white/50 mt-1">ENCRYPTED</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[9.5px] text-white/50">
              <span>UPTIME: 99.98%</span>
              <span className="text-[#FF4A16]">ACTIVE ROUTING</span>
            </div>
          </div>
        );

      case 'nowstudy':
        return (
          <div className="w-full h-full flex flex-col justify-between p-4 sm:p-6 bg-[#0F1115] text-white font-mono text-[11px] overflow-hidden select-none">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-[10px] text-white/70">STUDY_ROOM // WEBSOCKET_MESH</span>
              <span className="text-[10px] text-[#FF4A16] font-bold">12 PARTICIPANTS</span>
            </div>

            <div className="my-4 flex-1 flex flex-col justify-center items-center">
              <div className="w-24 h-24 rounded-full border-2 border-[#FF4A16] flex flex-col items-center justify-center relative">
                <span className="text-[9px] text-[#FF4A16] uppercase">FOCUS TIMER</span>
                <span className="text-xl font-black text-white">45:00</span>
                <div className="absolute -top-1 w-2 h-2 rounded-full bg-[#FF4A16]" />
              </div>
              <div className="flex items-center gap-2 mt-3 text-[9px] text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Synchronized across 4 campuses</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[9.5px] text-white/50">
              <span>ZERO DISTRACTION MODE</span>
              <span className="text-white">POMODORO SYNC</span>
            </div>
          </div>
        );

      case 'academix':
        return (
          <div className="w-full h-full flex flex-col justify-between p-4 sm:p-6 bg-[#0E1014] text-white font-mono text-[11px] overflow-hidden select-none">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-[10px] text-white/70">ACADEMIC_SYS // RBAC_CERTIFIED</span>
              <span className="text-[10px] text-white px-2 py-0.5 bg-[#FF4A16] font-bold">VALIDATED</span>
            </div>

            <div className="my-3 flex-1 flex flex-col justify-center space-y-2">
              <div className="flex justify-between items-center text-[9px] text-white/60 border-b border-white/5 pb-1">
                <span>SEMESTRE 01</span>
                <span className="text-white font-bold">CRÉDITS: 30 / 30</span>
              </div>
              <div className="flex justify-between items-center text-[9px] text-white/60 border-b border-white/5 pb-1">
                <span>ALGORITHMIQUE AVANCÉE</span>
                <span className="text-[#FF4A16] font-bold">18.5 / 20</span>
              </div>
              <div className="flex justify-between items-center text-[9px] text-white/60 border-b border-white/5 pb-1">
                <span>RÉSEAUX & SÉCURITÉ</span>
                <span className="text-white font-bold">17.0 / 20</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[9.5px] text-white/50">
              <span>TRANSCRIPT VERIFICATION</span>
              <span className="text-[#FF4A16]">CRYPTOGRAPHIC SIGN</span>
            </div>
          </div>
        );

      default:
        // Default generic high-precision technical preview
        return (
          <div className="w-full h-full flex flex-col justify-between p-4 sm:p-6 bg-[#0B0D11] text-white font-mono text-[11px] overflow-hidden select-none">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-[10px] text-white/70">{project.category.toUpperCase()}</span>
              <span className="text-[10px] text-[#FF4A16] font-bold">{project.year}</span>
            </div>

            <div className="my-4 flex-1 flex flex-col justify-center items-center text-center space-y-3">
              <div className="w-12 h-12 rounded-[2px] bg-white/5 border border-white/15 flex items-center justify-center text-[#FF4A16] font-black text-xl">
                ET/
              </div>
              <div className="text-xs text-white/80 font-bold uppercase tracking-wider">
                {project.title}
              </div>
              <div className="text-[9px] text-white/50 max-w-xs line-clamp-2 font-sans">
                {project.shortDescription}
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[9.5px] text-white/50">
              <span>STATUS: {project.status}</span>
              <span className="text-[#FF4A16]">{project.technology[0] || 'ENGINE'}</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div
      className={`relative w-full overflow-hidden border border-[#0A0A0A]/15 rounded-[2px] transition-transform duration-300 ${compact ? 'h-48' : 'h-56 sm:h-72 md:h-80'} ${className}`}
    >
      {renderVisual()}
    </div>
  );
};
