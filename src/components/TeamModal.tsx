import React, { useEffect } from 'react';
import { TeamMember } from '../types';
import { X, Shield, Award, CheckCircle2, UserCheck, Briefcase, FileText } from 'lucide-react';

interface TeamModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

export const TeamModal: React.FC<TeamModalProps> = ({ member, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (member) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [member, onClose]);

  if (!member) return null;

  return (
    <div
      id="team-member-modal-backdrop"
      className="fixed inset-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="team-member-modal-container"
        className="bg-[#FAF8F6] text-[#0A0A0A] w-full max-w-3xl max-h-[92vh] overflow-y-auto border border-[#0A0A0A]/20 shadow-2xl relative rounded-[2px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-[#FAF8F6]/95 backdrop-blur-md px-6 sm:px-8 py-5 border-b border-[#0A0A0A]/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className={`text-[10px] font-mono tracking-widest uppercase font-bold px-2 py-0.5 border ${
                member.isFounder
                  ? 'bg-[#FF4A16] text-white border-[#FF4A16]'
                  : 'bg-white text-[#0A0A0A] border-[#0A0A0A]/20'
              }`}
            >
              {member.status}
            </span>
            <span className="text-[10px] font-mono tracking-wider uppercase text-[#656565] px-2 py-0.5 bg-[#0A0A0A]/5">
              DÉPARTEMENT {member.department}
            </span>
          </div>

          <button
            id="close-team-modal-btn"
            onClick={onClose}
            className="p-1.5 text-[#656565] hover:text-[#0A0A0A] hover:bg-[#0A0A0A]/5 transition-colors cursor-pointer"
            aria-label="Fermer la fiche de poste"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-7">
          {/* Member Name & Official Function */}
          <div>
            <div className="text-xs font-mono text-[#FF4A16] font-bold tracking-widest uppercase mb-1">
              FICHE DE FONCTION OFFICIELLE 2026
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#0A0A0A]">
              {member.name}
            </h2>
            <p className="text-base font-bold text-[#FF4A16] mt-1">
              {member.role}
            </p>
            <p className="text-xs text-[#656565] mt-1">
              Rattachement : <span className="text-[#0A0A0A] font-medium">{member.reportingTo}</span>
            </p>
          </div>

          {/* Bio statement */}
          <div className="p-4 bg-white border-l-4 border-l-[#FF4A16] border border-[#0A0A0A]/10 text-sm text-[#333333] leading-relaxed italic rounded-[2px]">
            « {member.bio} »
          </div>

          {/* Main Mission */}
          <div className="p-5 bg-white border border-[#0A0A0A]/10 rounded-[2px]">
            <div className="text-[10px] font-mono tracking-widest text-[#FF4A16] font-bold uppercase mb-2 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" />
              <span>MISSION PRINCIPALE</span>
            </div>
            <p className="text-sm text-[#0A0A0A] font-medium leading-relaxed">
              {member.mainMission}
            </p>
          </div>

          {/* Responsibilities list */}
          <div>
            <div className="text-[11px] font-mono tracking-widest text-[#656565] font-bold uppercase mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4A16]" />
              <span>RESPONSABILITÉS OPÉRATIONNELLES</span>
            </div>
            <ul className="grid grid-cols-1 gap-2.5">
              {member.responsibilities.map((resp, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 p-3 bg-white border border-[#0A0A0A]/5 text-xs text-[#333333] rounded-[2px]"
                >
                  <span className="text-[#FF4A16] font-mono font-bold mt-0.5">•</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Decision Scope & Expected Deliverables */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-[#0A0A0A] text-white border border-[#0A0A0A] rounded-[2px]">
              <div className="text-[10px] font-mono tracking-widest text-[#FF4A16] font-bold uppercase mb-2 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" />
                <span>POUVOIR DE DÉCISION</span>
              </div>
              <p className="text-xs text-[#E0E0E0] leading-relaxed">
                {member.decisionScope}
              </p>
            </div>

            <div className="p-4 bg-white border border-[#0A0A0A]/10 rounded-[2px]">
              <div className="text-[10px] font-mono tracking-widest text-[#0A0A0A] font-bold uppercase mb-2 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#FF4A16]" />
                <span>LIVRABLES / RÉSULTATS ATTENDUS</span>
              </div>
              <ul className="space-y-1.5 text-xs text-[#444444]">
                {member.expectedDeliverables.map((del, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-[#FF4A16] font-bold">✓</span>
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Competencies */}
          <div className="pt-2">
            <div className="text-[10px] font-mono tracking-widest text-[#656565] uppercase font-bold mb-2.5">
              COMPÉTENCES OFFICIELLES ATTRIBUÉES
            </div>
            <div className="flex flex-wrap gap-2">
              {member.competencies.map((comp) => (
                <span
                  key={comp}
                  className="px-3 py-1 bg-white border border-[#0A0A0A]/15 font-mono text-xs text-[#0A0A0A] font-semibold rounded-[2px]"
                >
                  {comp}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Note */}
          <div className="pt-4 border-t border-[#0A0A0A]/10 flex items-center justify-between">
            <span className="text-[11px] font-mono text-[#656565]">
              Document interne d'organisation — Structuration 2026
            </span>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-white border border-[#0A0A0A]/20 hover:bg-[#0A0A0A]/5 text-[#0A0A0A] font-bold text-xs uppercase cursor-pointer rounded-[2px]"
            >
              FERMER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
