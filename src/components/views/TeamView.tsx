import React, { useState } from 'react';
import { PageView, TeamMember } from '../../types';
import { TEAM_MEMBERS } from '../../data/team';
import { TeamModal } from '../TeamModal';
import { AnimatedNumber } from '../motion/AnimatedNumber';
import { LiquidGlassCard } from '../glass/LiquidGlassCard';
import { LiquidGlassBadge } from '../glass/LiquidGlassBadge';
import { ArrowRight, ArrowUpRight, Shield, UserCheck, Briefcase, CheckCircle2, Filter } from 'lucide-react';

interface TeamViewProps {
  onNavigate: (view: PageView) => void;
}

export const TeamView: React.FC<TeamViewProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState<'all' | 'founders' | 'recruited' | 'tech' | 'operations'>('all');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const filteredMembers = TEAM_MEMBERS.filter((m) => {
    if (filter === 'founders') return m.isFounder;
    if (filter === 'recruited') return !m.isFounder;
    if (filter === 'tech') return m.department === 'Technique';
    if (filter === 'operations') return m.department === 'Projets & Opérations' || m.department === 'Administration';
    return true;
  });

  return (
    <div id="team-page" className="w-full pt-28 pb-24 bg-transparent relative z-10">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-[#0A0A0A]/10">
        <div className="mb-4">
          <LiquidGlassBadge variant="vermilion" size="sm">
            ORGANIGRAMME OFFICIEL 2026 — 11 TALENTS
          </LiquidGlassBadge>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#0A0A0A] leading-tight uppercase">
          THE PEOPLE BEHIND THE WORK<span className="text-[#FF4A16]">/</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#555555] max-w-3xl leading-relaxed">
          Excellence Team réunit 11 profils complémentaires, du noyau des 6 cofondateurs aux spécialistes recrutés pour soutenir la montée en puissance de nos pôles de cybersécurité, développement full-stack et gestion rigoureuse de projets.
        </p>

        {/* Structural Summary Box */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <LiquidGlassCard material="primary" className="p-5 border-l-4 border-l-[#FF4A16]">
            <div className="text-2xl font-black text-[#0A0A0A]">
              <AnimatedNumber value="11" duration={1.2} delay={0.1} />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#656565]">
              Membres Structurés
            </div>
            <div className="text-[11px] text-[#888888] mt-0.5">
              Régis par fiches de fonction officielles
            </div>
          </LiquidGlassCard>

          <LiquidGlassCard material="primary" className="p-5 border-l-4 border-l-[#0A0A0A]">
            <div className="text-2xl font-black text-[#0A0A0A]">
              <AnimatedNumber value="06" duration={1.2} delay={0.2} />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#656565]">
              Co-fondateurs Stratégiques
            </div>
            <div className="text-[11px] text-[#888888] mt-0.5">
              Pilotes des directions et de la vision commune
            </div>
          </LiquidGlassCard>

          <LiquidGlassCard material="primary" className="p-5 border-l-4 border-l-[#FF4A16]/50">
            <div className="text-2xl font-black text-[#0A0A0A]">
              <AnimatedNumber value="05" duration={1.2} delay={0.3} />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#656565]">
              Spécialistes Recrutés
            </div>
            <div className="text-[11px] text-[#888888] mt-0.5">
              Cybersécurité, code full-stack, contrôle & com
            </div>
          </LiquidGlassCard>
        </div>

        {/* Filter Pills */}
        <div className="mt-8 flex flex-wrap gap-2 pt-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 text-xs font-bold tracking-wider uppercase transition-all cursor-pointer rounded-full ${
              filter === 'all'
                ? 'bg-[#0A0A0A] text-white shadow-xs'
                : 'glass-secondary text-[#555555] hover:text-[#0A0A0A] border border-white/60'
            }`}
          >
            Tous les 11 Membres
          </button>
          <button
            onClick={() => setFilter('founders')}
            className={`px-4 py-2 text-xs font-bold tracking-wider uppercase transition-all cursor-pointer rounded-full ${
              filter === 'founders'
                ? 'bg-[#0A0A0A] text-white shadow-xs'
                : 'glass-secondary text-[#555555] hover:text-[#0A0A0A] border border-white/60'
            }`}
          >
            Les 6 Co-fondateurs
          </button>
          <button
            onClick={() => setFilter('recruited')}
            className={`px-4 py-2 text-xs font-bold tracking-wider uppercase transition-all cursor-pointer rounded-full ${
              filter === 'recruited'
                ? 'bg-[#0A0A0A] text-white shadow-xs'
                : 'glass-secondary text-[#555555] hover:text-[#0A0A0A] border border-white/60'
            }`}
          >
            Les 5 Membres Recrutés
          </button>
          <button
            onClick={() => setFilter('tech')}
            className={`px-4 py-2 text-xs font-bold tracking-wider uppercase transition-all cursor-pointer rounded-full ${
              filter === 'tech'
                ? 'bg-[#0A0A0A] text-white shadow-xs'
                : 'glass-secondary text-[#555555] hover:text-[#0A0A0A] border border-white/60'
            }`}
          >
            Pôle Technique
          </button>
          <button
            onClick={() => setFilter('operations')}
            className={`px-4 py-2 text-xs font-bold tracking-wider uppercase transition-all cursor-pointer rounded-full ${
              filter === 'operations'
                ? 'bg-[#0A0A0A] text-white shadow-xs'
                : 'glass-secondary text-[#555555] hover:text-[#0A0A0A] border border-white/60'
            }`}
          >
            Pôle Opérations & Admin
          </button>
        </div>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.map((member) => (
            <LiquidGlassCard
              key={member.id}
              material="primary"
              interactive
              onClick={() => setSelectedMember(member)}
              className="p-6 sm:p-7 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <LiquidGlassBadge variant={member.isFounder ? 'vermilion' : 'neutral'} size="xs">
                    {member.status}
                  </LiquidGlassBadge>
                  <span className="text-[10px] font-mono text-[#656565] uppercase">
                    {member.department}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0A0A0A] tracking-tight group-hover:text-[#FF4A16] transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs font-bold text-[#FF4A16] mt-0.5 mb-3">
                  {member.role}
                </p>

                <p className="text-xs text-[#555555] leading-relaxed mb-4 line-clamp-3">
                  {member.mainMission}
                </p>

                <div className="p-3 bg-black/5 rounded-xl border-l-2 border-l-[#FF4A16] text-xs text-[#444444] mb-4 space-y-1">
                  <div className="text-[9.5px] font-mono font-bold uppercase text-[#656565]">
                    Périmètre de décision :
                  </div>
                  <p className="line-clamp-2">{member.decisionScope}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#0A0A0A]/10 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {member.competencies.slice(0, 2).map((comp) => (
                    <span
                      key={comp}
                      className="text-[9.5px] font-mono px-2 py-0.5 bg-black/5 text-[#444444] rounded-[2px]"
                    >
                      {comp}
                    </span>
                  ))}
                </div>

                <span className="text-xs font-bold text-[#0A0A0A] group-hover:text-[#FF4A16] flex items-center gap-1 uppercase tracking-wider">
                  <span>FICHE COMPLÈTE</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </LiquidGlassCard>
          ))}
        </div>
      </div>

      <TeamModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </div>
  );
};
