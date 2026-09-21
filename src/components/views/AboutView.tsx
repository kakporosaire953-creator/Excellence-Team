import React, { useState } from 'react';
import { PageView, TeamMember } from '../../types';
import { BRAND, VALUES, EVOLUTION_MILESTONES } from '../../data/brand';
import { PROCESS_STEPS } from '../../data/process';
import { TEAM_MEMBERS } from '../../data/team';
import { TeamModal } from '../TeamModal';
import { ETSymbol, ETBadge } from '../ETLogo';
import { LiquidGlassCard } from '../glass/LiquidGlassCard';
import { LiquidGlassBadge } from '../glass/LiquidGlassBadge';
import { LiquidGlassButton } from '../glass/LiquidGlassButton';
import {
  Shield,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Users,
  Lock,
  Award,
  ArrowRight,
  GitBranch,
  Layers,
  CheckCircle2,
  Briefcase,
  UserCheck
} from 'lucide-react';

interface AboutViewProps {
  onNavigate: (view: PageView) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [teamFilter, setTeamFilter] = useState<'all' | 'founders' | 'recruited'>('all');

  const getValueIcon = (name: string) => {
    switch (name) {
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#FF4A16]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#FF4A16]" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-[#FF4A16]" />;
      case 'Users': return <Users className="w-5 h-5 text-[#FF4A16]" />;
      case 'Lock': return <Lock className="w-5 h-5 text-[#FF4A16]" />;
      case 'Award': return <Award className="w-5 h-5 text-[#FF4A16]" />;
      default: return <Sparkles className="w-5 h-5 text-[#FF4A16]" />;
    }
  };

  const founders = TEAM_MEMBERS.filter((m) => m.isFounder);
  const recruited = TEAM_MEMBERS.filter((m) => !m.isFounder);

  const displayedMembers = TEAM_MEMBERS.filter((m) => {
    if (teamFilter === 'founders') return m.isFounder;
    if (teamFilter === 'recruited') return !m.isFounder;
    return true;
  });

  return (
    <div id="about-page" className="w-full pt-28 pb-24 bg-transparent relative z-10">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-[#0A0A0A]/10">
        <div className="mb-4">
          <LiquidGlassBadge variant="vermilion" size="sm">
            HISTORIQUE, GOUVERNANCE & VISION
          </LiquidGlassBadge>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#0A0A0A] leading-tight uppercase">
          WHO WE ARE & HOW WE OPERATE<span className="text-[#FF4A16]">/</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#555555] max-w-3xl leading-relaxed">
          Excellence Team est née de l’ambition d’ingénieurs et de créatifs béninois décidés à ériger une entreprise technologique de rang international. Voici les principes d’organisation et de rigueur qui guident notre travail quotidien.
        </p>
      </div>

      {/* Origin Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-mono tracking-widest text-[#FF4A16] uppercase font-bold flex items-center gap-1.5">
              <span>01/</span> NOTRE HISTOIRE & TRAJECTOIRE
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0A0A0A] tracking-tight">
              De l'émulation étudiante à l'entreprise technologique.
            </h2>
            <div className="text-sm text-[#444444] space-y-4 leading-relaxed">
              <p>
                L'histoire d'Excellence Team débute en 2024 à Cotonou. Passionnés d’informatique théorique, de cybersécurité et de développement d'applications, un noyau de développeurs étudiants décide de dépasser les travaux académiques pour concevoir des outils concrets.
              </p>
              <p>
                La participation à des hackathons compétitifs et le développement de prototypes publics (Codetovecto, To_fitune, NowStudy) forgent une culture singulière : le refus des demi-mesures, la fascination pour la performance brute et l'obsession de la fiabilité.
              </p>
              <p>
                En 2026, face à la complexité croissante des besoins de nos partenaires, l’équipe opère sa mue institutionnelle : le collectif informel cède la place à une entreprise structurée de 11 talents, régie par des règles claires de gouvernance, de contrôle qualité et de gestion de projets.
              </p>
            </div>

            <LiquidGlassCard material="highlight" className="p-5 border-l-4 border-l-[#FF4A16] text-xs text-[#333333] leading-relaxed">
              <strong>Le message qui nous définit :</strong> « Nous n’avons pas commencé comme une entreprise structurée. Nous sommes en train de la construire avec discipline, pour porter haut le flambeau de la tech africaine. »
            </LiquidGlassCard>
          </div>

          {/* Right: Evolution Timeline */}
          <LiquidGlassCard material="primary" className="lg:col-span-6 p-6 sm:p-8 space-y-6">
            <div className="text-xs font-mono tracking-widest text-[#656565] uppercase font-bold border-b border-[#0A0A0A]/10 pb-3 flex items-center justify-between">
              <span>LES JALONS DE NOTRE CROISSANCE</span>
              <span className="text-[#FF4A16] font-mono">2024 — 2026+</span>
            </div>

            <div className="space-y-6">
              {EVOLUTION_MILESTONES.map((m, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <span className="w-3 h-3 rounded-full bg-[#FF4A16] ring-4 ring-[#FF4A16]/20 shrink-0 mt-1" />
                    {idx !== EVOLUTION_MILESTONES.length - 1 && (
                      <span className="w-0.5 h-full min-h-[40px] bg-[#0A0A0A]/10 my-1" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#0A0A0A]">{m.year}</span>
                      <span className="text-[10px] font-mono text-[#FF4A16] uppercase font-semibold">{m.phase}</span>
                    </div>
                    <h4 className="text-sm font-bold text-[#0A0A0A] mt-0.5">{m.title}</h4>
                    <p className="text-xs text-[#555555] mt-1 leading-relaxed">{m.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </LiquidGlassCard>
        </div>

        {/* 2026 Governance & Structure Section */}
        <div className="mt-20 pt-14 border-t border-[#0A0A0A]/10">
          <div className="max-w-3xl mb-10">
            <div className="text-xs font-mono tracking-widest text-[#FF4A16] uppercase font-bold flex items-center gap-1.5 mb-2">
              <span>02/</span> GOUVERNANCE OFFICIELLE 2026
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0A0A0A] tracking-tight">
              STRUCTURED ENOUGH TO DELIVER. <br />
              FLEXIBLE ENOUGH TO BUILD.
            </h2>
            <p className="text-sm text-[#555555] mt-2 leading-relaxed">
              Excellence Team distingue clairement la propriété de l'entreprise, la gouvernance stratégique collégiale et la gestion exécutive quotidienne.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Box 1: 6 Cofondateurs */}
            <LiquidGlassCard material="primary" className="p-6 space-y-3">
              <div className="text-[10px] font-mono tracking-widest text-[#FF4A16] uppercase font-bold">
                NOYAU STRATÉGIQUE
              </div>
              <h3 className="text-lg font-bold text-[#0A0A0A]">
                Les 6 Cofondateurs
              </h3>
              <p className="text-xs text-[#555555] leading-relaxed">
                Ils constituent l’organe stratégique interne. Ils définissent ensemble les grandes orientations, protègent la vision commune et contrôlent les décisions susceptibles d’engager fortement l’entreprise.
              </p>
              <div className="pt-2 text-[11px] font-mono text-[#888888]">
                Décisions majeures & validation collective
              </div>
            </LiquidGlassCard>

            {/* Box 2: Direction Exécutive */}
            <LiquidGlassCard material="primary" className="p-6 space-y-3">
              <div className="text-[10px] font-mono tracking-widest text-[#0A0A0A] uppercase font-bold">
                PILOTAGE OPÉRATIONNEL
              </div>
              <h3 className="text-lg font-bold text-[#0A0A0A]">
                Direction Exécutive & Fonctions
              </h3>
              <p className="text-xs text-[#555555] leading-relaxed">
                Le Directeur Général coordonne la stratégie quotidienne. Chaque directeur (Technique, Administration, Projets, Commercial, Marketing) dispose d’une autonomie dans son périmètre avec obligation de résultat.
              </p>
              <div className="pt-2 text-[11px] font-mono text-[#888888]">
                Coordination, arbitrages & KPI hebdomadaires
              </div>
            </LiquidGlassCard>

            {/* Box 3: Membres Recrutés */}
            <LiquidGlassCard material="primary" className="p-6 space-y-3">
              <div className="text-[10px] font-mono tracking-widest text-[#FF4A16] uppercase font-bold">
                FORCE OPÉRATIONNELLE
              </div>
              <h3 className="text-lg font-bold text-[#0A0A0A]">
                Membres Recrutés (5 Spécialistes)
              </h3>
              <p className="text-xs text-[#555555] leading-relaxed">
                Intégrés selon leurs compétences pointues (Cybersécurité, Full-stack Web, Contrôle de projets, Community management) pour renforcer directement les livrables techniques et commerciaux.
              </p>
              <div className="pt-2 text-[11px] font-mono text-[#888888]">
                Fiches de poste, standards stricts & progression
              </div>
            </LiquidGlassCard>
          </div>
        </div>

        {/* The 11 Members Directory Section */}
        <div className="mt-20 pt-14 border-t border-[#0A0A0A]/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 gap-4">
            <div>
              <div className="text-xs font-mono tracking-widest text-[#FF4A16] uppercase font-bold flex items-center gap-1.5 mb-2">
                <span>03/</span> CAPITAL HUMAIN (11 PROFILS OFFICIELS)
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0A0A0A] tracking-tight">
                ORGANIGRAMME ET COMPÉTENCES DU COLLECTIF
              </h2>
            </div>

            {/* Filter */}
            <div className="flex gap-2">
              <button
                onClick={() => setTeamFilter('all')}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full transition-colors cursor-pointer ${
                  teamFilter === 'all' ? 'bg-[#0A0A0A] text-white shadow-xs' : 'glass-secondary text-[#555555] border border-white/60'
                }`}
              >
                Tous (11)
              </button>
              <button
                onClick={() => setTeamFilter('founders')}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full transition-colors cursor-pointer ${
                  teamFilter === 'founders' ? 'bg-[#0A0A0A] text-white shadow-xs' : 'glass-secondary text-[#555555] border border-white/60'
                }`}
              >
                Cofondateurs (6)
              </button>
              <button
                onClick={() => setTeamFilter('recruited')}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full transition-colors cursor-pointer ${
                  teamFilter === 'recruited' ? 'bg-[#0A0A0A] text-white shadow-xs' : 'glass-secondary text-[#555555] border border-white/60'
                }`}
              >
                Recrutés (5)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedMembers.map((member) => (
              <LiquidGlassCard
                key={member.id}
                material="primary"
                interactive
                className="p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <LiquidGlassBadge variant={member.isFounder ? 'vermilion' : 'neutral'} size="xs">
                      {member.status}
                    </LiquidGlassBadge>
                    <span className="text-[10px] font-mono text-[#656565] uppercase">
                      {member.department}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0A0A0A] tracking-tight group-hover:text-[#FF4A16] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold text-[#FF4A16] mt-0.5 mb-3">
                    {member.role}
                  </p>
                  <p className="text-xs text-[#555555] leading-relaxed mb-4 line-clamp-3">
                    {member.mainMission}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#0A0A0A]/10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {member.competencies.slice(0, 2).map((comp) => (
                      <span key={comp} className="text-[9.5px] font-mono px-2 py-0.5 bg-black/5 text-[#444444] rounded-[2px]">
                        {comp}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelectedMember(member)}
                    className="text-xs font-bold text-[#0A0A0A] group-hover:text-[#FF4A16] flex items-center gap-1 uppercase cursor-pointer"
                  >
                    <span>FICHE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </LiquidGlassCard>
            ))}
          </div>
        </div>

        {/* Values section */}
        <div className="mt-20 pt-14 border-t border-[#0A0A0A]/10">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-mono tracking-widest text-[#FF4A16] uppercase font-bold flex items-center gap-1.5 mb-2">
              <span>04/</span> CHARTE ÉTHIQUE & VALEURS
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0A0A0A] tracking-tight">
              NOS SIX PILIERS FONDAMENTAUX
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((val) => (
              <LiquidGlassCard key={val.name} material="secondary" className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  {getValueIcon(val.iconName)}
                  <h3 className="font-bold text-base text-[#0A0A0A] uppercase tracking-wide">
                    {val.name}
                  </h3>
                </div>
                <div className="text-[11px] font-mono text-[#FF4A16] font-semibold mb-2">
                  {val.tagline}
                </div>
                <p className="text-xs text-[#555555] leading-relaxed">
                  {val.description}
                </p>
              </LiquidGlassCard>
            ))}
          </div>
        </div>

        {/* How We Work 7 steps recap */}
        <div className="mt-20 pt-14 border-t border-[#0A0A0A]/10">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-mono tracking-widest text-[#FF4A16] uppercase font-bold flex items-center gap-1.5 mb-2">
              <span>05/</span> PROCESSUS TECHNIQUE EN 7 ÉTAPES
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0A0A0A] tracking-tight">
              DE LA COMPRÉHENSION À L’ACCOMPAGNEMENT
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROCESS_STEPS.slice(0, 4).map((step) => (
              <LiquidGlassCard key={step.number} material="subtle" className="p-5">
                <span className="text-lg font-mono font-black text-[#FF4A16]">{step.number}</span>
                <h4 className="font-bold text-sm text-[#0A0A0A] mt-1">{step.title}</h4>
                <p className="text-xs text-[#555555] mt-1.5 leading-relaxed">{step.description}</p>
              </LiquidGlassCard>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {PROCESS_STEPS.slice(4).map((step) => (
              <LiquidGlassCard key={step.number} material="subtle" className="p-5">
                <span className="text-lg font-mono font-black text-[#FF4A16]">{step.number}</span>
                <h4 className="font-bold text-sm text-[#0A0A0A] mt-1">{step.title}</h4>
                <p className="text-xs text-[#555555] mt-1.5 leading-relaxed">{step.description}</p>
              </LiquidGlassCard>
            ))}
          </div>
        </div>
      </div>

      <TeamModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </div>
  );
};
