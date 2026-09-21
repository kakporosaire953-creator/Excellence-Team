import React, { useEffect } from 'react';
import { Project } from '../types';
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
      className="fixed inset-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="project-detail-modal-container"
        className="bg-[#FAF8F6] text-[#0A0A0A] w-full max-w-4xl max-h-[92vh] overflow-y-auto border border-[#0A0A0A]/20 shadow-2xl relative rounded-[2px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 bg-[#FAF8F6]/95 backdrop-blur-md px-6 sm:px-8 py-5 border-b border-[#0A0A0A]/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono tracking-widest text-[#FF4A16] uppercase font-bold px-2 py-0.5 bg-[#FF4A16]/10 border border-[#FF4A16]/20">
              {project.category}
            </span>
            <span className="text-xs font-mono text-[#656565]">
              AN {project.year}
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold px-2 py-0.5 bg-[#0A0A0A] text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4A16]" />
              {project.status}
            </span>
          </div>

          <button
            id="close-project-modal-btn"
            onClick={onClose}
            className="p-1.5 text-[#656565] hover:text-[#0A0A0A] hover:bg-[#0A0A0A]/5 transition-colors cursor-pointer"
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
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-white border border-[#0A0A0A]/10 rounded-[2px]">
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
            <div className="p-5 bg-white border border-[#0A0A0A]/10 relative group rounded-[2px]">
              <div className="text-[10px] font-mono tracking-widest text-[#FF4A16] font-bold uppercase mb-2 flex items-center gap-1.5">
                <span>01/</span> PROBLÉMATIQUE MÉTIER
              </div>
              <h4 className="font-bold text-base text-[#0A0A0A] mb-2">
                Le défi identifié
              </h4>
              <p className="text-sm text-[#444444] leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* 02. APPROACH */}
            <div className="p-5 bg-white border border-[#0A0A0A]/10 relative group rounded-[2px]">
              <div className="text-[10px] font-mono tracking-widest text-[#FF4A16] font-bold uppercase mb-2 flex items-center gap-1.5">
                <span>02/</span> APPROCHE STRATÉGIQUE
              </div>
              <h4 className="font-bold text-base text-[#0A0A0A] mb-2">
                L’angle de résolution
              </h4>
              <p className="text-sm text-[#444444] leading-relaxed">
                {project.approach}
              </p>
            </div>

            {/* 03. BUILD */}
            <div className="p-5 bg-white border border-[#0A0A0A]/10 relative group rounded-[2px]">
              <div className="text-[10px] font-mono tracking-widest text-[#FF4A16] font-bold uppercase mb-2 flex items-center gap-1.5">
                <span>03/</span> ARCHITECTURE & CONCEPTION
              </div>
              <h4 className="font-bold text-base text-[#0A0A0A] mb-2">
                Ce qui a été construit
              </h4>
              <p className="text-sm text-[#444444] leading-relaxed">
                {project.build}
              </p>
            </div>

            {/* 04. RESULT */}
            <div className="p-5 bg-[#0A0A0A] text-white border border-[#0A0A0A] relative group rounded-[2px]">
              <div className="text-[10px] font-mono tracking-widest text-[#FF4A16] font-bold uppercase mb-2 flex items-center gap-1.5">
                <span>04/</span> IMPACT & RÉSULTAT
              </div>
              <h4 className="font-bold text-base text-white mb-2">
                Valeur livrée
              </h4>
              <p className="text-sm text-[#E0E0E0] leading-relaxed">
                {project.result}
              </p>
            </div>
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
                  className="px-3 py-1 bg-white border border-[#0A0A0A]/15 font-mono text-xs text-[#0A0A0A] font-medium rounded-[2px]"
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
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF4A16] hover:bg-[#E03F0E] text-white font-bold text-xs tracking-wider uppercase transition-colors rounded-[2px]"
                >
                  <span>DÉMO / LIEN PUBLIC</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <button
                onClick={onClose}
                className="px-5 py-2.5 bg-white border border-[#0A0A0A]/20 hover:bg-[#0A0A0A]/5 text-[#0A0A0A] font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer rounded-[2px]"
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
