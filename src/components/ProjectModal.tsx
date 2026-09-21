import React, { useEffect } from 'react';
import { Project } from '../types';
import { LiquidGlassBadge } from './glass/LiquidGlassBadge';
import { LiquidGlassCard } from './glass/LiquidGlassCard';
import { LiquidGlassButton } from './glass/LiquidGlassButton';
import { X, ExternalLink, Terminal, Shield, ArrowUpRight, Cpu, Layers, CheckCircle2 } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="project-detail-modal-backdrop"
      className="fixed inset-0 z-50 bg-[#0A0A0A]/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="project-detail-modal-container"
        className="glass-card text-[#0A0A0A] w-full max-w-4xl max-h-[92vh] overflow-y-auto border border-white/80 shadow-[0_24px_64px_rgba(0,0,0,0.25)] relative rounded-[28px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 glass-panel px-6 sm:px-8 py-5 border-b border-[#0A0A0A]/10 flex items-center justify-between rounded-t-[28px]">
          <div className="flex items-center gap-3">
            <LiquidGlassBadge variant="vermilion" size="xs">
              {project.category}
            </LiquidGlassBadge>
            <span className="text-xs font-mono text-[#656565]">
              AN {project.year}
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold px-2 py-0.5 bg-[#0A0A0A] text-white rounded-[2px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4A16]" />
              {project.status}
            </span>
          </div>

          <button
            id="close-project-modal-btn"
            onClick={onClose}
            className="p-1.5 text-[#656565] hover:text-[#0A0A0A] hover:bg-black/5 rounded-full transition-colors cursor-pointer"
            aria-label="Fermer la vue détaillée"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 md:p-10 space-y-8">
          {/* Title & Short Description */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#0A0A0A] leading-tight">
              {project.title}<span className="text-[#FF4A16]">/</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#333333] leading-relaxed max-w-3xl">
              {project.shortDescription}
            </p>
          </div>

          {/* Metrics bar if available */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 glass-secondary rounded-2xl border border-white/60">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="border-l-2 border-[#FF4A16] pl-3 py-1">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#656565]">
                    {metric.label}
                  </div>
                  <div className="text-base sm:text-lg font-bold text-[#0A0A0A]">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Structured Case Study Grid: PROBLEM / APPROACH / BUILD / RESULT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* 01. PROBLEM */}
            <LiquidGlassCard material="primary" className="p-5 relative group">
              <div className="text-[10px] font-mono tracking-widest text-[#FF4A16] font-bold uppercase mb-2 flex items-center gap-1.5">
                <span>01/</span> PROBLÉMATIQUE MÉTIER
              </div>
              <h4 className="font-bold text-base text-[#0A0A0A] mb-2">
                Le défi identifié
              </h4>
              <p className="text-sm text-[#444444] leading-relaxed">
                {project.problem}
              </p>
            </LiquidGlassCard>

            {/* 02. APPROACH */}
            <LiquidGlassCard material="primary" className="p-5 relative group">
              <div className="text-[10px] font-mono tracking-widest text-[#FF4A16] font-bold uppercase mb-2 flex items-center gap-1.5">
                <span>02/</span> APPROCHE STRATÉGIQUE
              </div>
              <h4 className="font-bold text-base text-[#0A0A0A] mb-2">
                L’angle de résolution
              </h4>
              <p className="text-sm text-[#444444] leading-relaxed">
                {project.approach}
              </p>
            </LiquidGlassCard>

            {/* 03. BUILD */}
            <LiquidGlassCard material="primary" className="p-5 relative group">
              <div className="text-[10px] font-mono tracking-widest text-[#FF4A16] font-bold uppercase mb-2 flex items-center gap-1.5">
                <span>03/</span> ARCHITECTURE & CONCEPTION
              </div>
              <h4 className="font-bold text-base text-[#0A0A0A] mb-2">
                Ce qui a été construit
              </h4>
              <p className="text-sm text-[#444444] leading-relaxed">
                {project.build}
              </p>
            </LiquidGlassCard>

            {/* 04. RESULT */}
            <LiquidGlassCard material="deep" className="p-5 relative group text-white">
              <div className="text-[10px] font-mono tracking-widest text-[#FF4A16] font-bold uppercase mb-2 flex items-center gap-1.5">
                <span>04/</span> IMPACT & RÉSULTAT
              </div>
              <h4 className="font-bold text-base text-white mb-2">
                Valeur livrée
              </h4>
              <p className="text-sm text-[#E0E0E0] leading-relaxed">
                {project.result}
              </p>
            </LiquidGlassCard>
          </div>

          {/* Technologies Stack */}
          <div className="pt-4 border-t border-[#0A0A0A]/10">
            <div className="text-[10px] font-mono tracking-widest text-[#656565] uppercase font-bold mb-3 flex items-center gap-1.5">
              <span>STACK TECHNIQUE EMPLOIÉE</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technology.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/80 border border-white/80 font-mono text-xs text-[#0A0A0A] font-medium rounded-full shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-6 border-t border-[#0A0A0A]/10 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-[#656565]">
              Projet vérifié faisant partie du patrimoine d’ingénierie d’Excellence Team.
            </div>

            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF4A16] hover:bg-[#E03F0E] text-white font-bold text-xs tracking-wider uppercase transition-colors rounded-full shadow-md"
                >
                  <span>DÉMO / LIEN PUBLIC</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <button
                onClick={onClose}
                className="px-5 py-2.5 glass-secondary hover:text-[#FF4A16] text-[#0A0A0A] font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer rounded-full border border-white/60"
              >
                FERMER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
