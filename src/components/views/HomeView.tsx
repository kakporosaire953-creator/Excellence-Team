import React, { useState } from 'react';
import { PageView, Project, TeamMember } from '../../types';
import { BRAND, VALUES, EVOLUTION_MILESTONES } from '../../data/brand';
import { PROJECTS } from '../../data/projects';
import { SERVICE_PILLARS } from '../../data/services';
import { PROCESS_STEPS } from '../../data/process';
import { TEAM_MEMBERS } from '../../data/team';
import { JOURNAL_ARTICLES } from '../../data/journal';
import { ETSymbol, ETLogo } from '../ETLogo';
import { Hero } from '../Hero';
import { HomeProjectCarousel } from '../HomeProjectCarousel';
import { RedSignal, LivingGrid, ScrollReveal } from '../motion/MotionPrimitives';
import { AnimatedNumber } from '../motion/AnimatedNumber';
import { ProjectModal } from '../ProjectModal';
import { TeamModal } from '../TeamModal';
import {
  ArrowRight,
  ArrowUpRight,
  Shield,
  Layers,
  BrainCircuit,
  ShieldCheck,
  CloudCog,
  Cpu,
  Terminal,
  Sparkles,
  TrendingUp,
  Users,
  Lock,
  Award,
  CheckCircle2,
  ExternalLink,
  Code2,
  Activity,
  GitBranch
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: PageView) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Icon mapping for values
  const getValueIcon = (name: string) => {
    switch (name) {
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-[#FF4A16]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4 text-[#FF4A16]" />;
      case 'TrendingUp': return <TrendingUp className="w-4 h-4 text-[#FF4A16]" />;
      case 'Users': return <Users className="w-4 h-4 text-[#FF4A16]" />;
      case 'Lock': return <Lock className="w-4 h-4 text-[#FF4A16]" />;
      case 'Award': return <Award className="w-4 h-4 text-[#FF4A16]" />;
      default: return <Sparkles className="w-4 h-4 text-[#FF4A16]" />;
    }
  };

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return <Layers className="w-5 h-5 text-[#FF4A16]" />;
      case 'BrainCircuit': return <BrainCircuit className="w-5 h-5 text-[#FF4A16]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#FF4A16]" />;
      case 'CloudCog': return <CloudCog className="w-5 h-5 text-[#FF4A16]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#FF4A16]" />;
      default: return <Terminal className="w-5 h-5 text-[#FF4A16]" />;
    }
  };

  const founders = TEAM_MEMBERS.filter((m) => m.isFounder);
  const recruitedTalents = TEAM_MEMBERS.filter((m) => !m.isFounder);

  return (
    <div className="w-full bg-[#FAF8F6] text-[#0A0A0A]">
      {/* ========================================================
          SECTION 01 / HERO (MOMENT 1 SIGNATURE ENTRANCE)
          Choreographed staged reveal: Logo, Label, Typography, Text, CTAs, Mask Panel
          ======================================================== */}
      <Hero onNavigate={onNavigate} />

      {/* ========================================================
          SECTION 02 / MANIFESTO
          "WE BUILD. WE SECURE. WE DELIVER."
          Editorial text humanizing the brand
          ======================================================== */}
      <ScrollReveal>
        <section
          id="manifesto-section"
          className="py-20 sm:py-24 md:py-28 bg-white border-b border-[#0A0A0A]/10 relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Col: Manifesto Title (5 cols) */}
              <div className="lg:col-span-5 space-y-4">
                <div className="text-xs font-mono tracking-widest text-[#FF4A16] uppercase font-bold flex items-center gap-1.5">
                  <span>02</span>
                  <RedSignal type="slash" />
                  <span>MANIFESTE & RAISON D'ÊTRE</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A0A0A] tracking-tight leading-[1.05] uppercase">
                  WE BUILD. <br />
                  WE SECURE. <br />
                  WE DELIVER<RedSignal type="slash" />
                </h2>
                <p className="text-sm text-[#656565] leading-relaxed pt-2">
                  Nous ne croyons ni aux promesses sans code, ni aux prototypes qui ne rencontrent jamais les exigences du réel. Excellence Team a été créée pour concevoir des logiciels sans concession, auditer les infrastructures critiques et démontrer que l'ingénierie africaine peut rivaliser avec les standards mondiaux les plus stricts.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('about')}
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#FF4A16] hover:text-[#0A0A0A] transition-colors cursor-pointer group"
                  >
                    <span>LIRE NOTRE HISTOIRE & GOUVERNANCE</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Right Col: Editorial Values Matrix (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                {/* Engagement Opérationnel: Crisp Architectural Card */}
                <div className="p-6 sm:p-7 bg-white text-[#0A0A0A] border-2 border-[#0A0A0A]/20 space-y-3 rounded-[2px] shadow-sm">
                  <div className="text-[10px] font-mono tracking-widest text-[#FF4A16] uppercase font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF4A16]" />
                    <span>ENGAGEMENT OPÉRATIONNEL</span>
                  </div>
                  <p className="text-base sm:text-lg font-bold text-[#0A0A0A] leading-snug">
                    « Chaque livrable doit fonctionner sous la charge, résister aux vecteurs d'attaque courants et créer une valeur économique mesurable pour le commanditaire. »
                  </p>
                </div>

                {/* 6 Pillars in asymmetric list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {VALUES.map((val) => (
                    <div
                      key={val.name}
                      className="p-5 bg-white border border-[#0A0A0A]/10 hover:border-[#FF4A16] transition-colors rounded-[2px]"
                    >
                      <div className="flex items-center gap-2.5 mb-2">
                        {getValueIcon(val.iconName)}
                        <h3 className="font-bold text-sm text-[#0A0A0A] uppercase tracking-wide">
                          {val.name}
                        </h3>
                      </div>
                      <div className="text-[10.5px] font-mono text-[#FF4A16] font-semibold mb-1.5">
                        {val.tagline}
                      </div>
                      <p className="text-xs text-[#555555] leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ========================================================
          SECTION 03 / CAPABILITIES
          Editorial composition:
          01 DIGITAL PRODUCTS, 02 AI & DATA, 03 CYBERSECURITY,
          04 CLOUD & ENGINEERING, 05 AUTOMATION
          ======================================================== */}
      <ScrollReveal>
        <section
          id="capabilities-section"
          className="py-20 sm:py-24 md:py-28 bg-[#FAF8F6] border-b border-[#0A0A0A]/10"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 border-b border-[#0A0A0A]/10 gap-6">
              <div>
                <div className="text-xs font-mono tracking-widest text-[#FF4A16] uppercase font-bold flex items-center gap-1.5">
                  <span>03</span>
                  <RedSignal type="slash" />
                  <span>DOMAINES D'EXPERTISE</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A0A0A] tracking-tight mt-2 uppercase">
                  CAPABILITIES & DISCIPLINES<RedSignal type="slash" />
                </h2>
              </div>
              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#0A0A0A] hover:text-[#FF4A16] transition-colors cursor-pointer group"
              >
                <span>EXPLORER LES 5 PÔLES TECHNIQUES</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Editorial Modular Cards */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICE_PILLARS.map((pillar, idx) => (
                <div
                  key={pillar.id}
                  className={`p-6 sm:p-7 bg-white border border-[#0A0A0A]/10 flex flex-col justify-between group hover:border-[#0A0A0A] transition-all rounded-[2px] ${
                    idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-[#FF4A16] tracking-widest">
                        {pillar.number}/
                      </span>
                      {getPillarIcon(pillar.icon)}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] uppercase tracking-tight group-hover:text-[#FF4A16] transition-colors">
                      {pillar.title}
                    </h3>
                    <div className="text-[10px] font-mono tracking-wider text-[#656565] uppercase font-semibold mb-3">
                      {pillar.englishTitle}
                    </div>

                    <p className="text-xs sm:text-sm text-[#444444] leading-relaxed mb-6">
                      {pillar.shortSummary}
                    </p>

                    <div className="space-y-1.5 border-t border-[#0A0A0A]/5 pt-4">
                      {pillar.capabilities.slice(0, 3).map((cap, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2 text-xs text-[#333333]">
                          <span className="text-[#FF4A16] font-bold">•</span>
                          <span>{cap.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#0A0A0A]/10 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {pillar.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-[9.5px] font-mono px-2 py-0.5 bg-[#FAF8F6] text-[#555555] border border-[#0A0A0A]/5">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => onNavigate('services')}
                      className="text-xs font-bold text-[#0A0A0A] group-hover:text-[#FF4A16] transition-colors flex items-center gap-1 uppercase tracking-wider cursor-pointer"
                    >
                      <span>DÉTAIL</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ========================================================
          SECTION 04 / SELECTED WORK (MOMENT 2 SIGNATURE CAROUSEL)
          EXCLUSIVE TO HOMEPAGE: Horizontal Carousel with peek, drag, pagination
          ======================================================== */}
      <HomeProjectCarousel
        projects={PROJECTS}
        onSelectProject={(p) => setSelectedProject(p)}
        onExploreAll={() => onNavigate('work')}
      />

      {/* ========================================================
          SECTION 05 / OUR APPROACH
          7-Step Engineering Rigor (Architectural Light Mode)
          ======================================================== */}
      <ScrollReveal>
        <section
          id="process-section"
          className="py-20 sm:py-24 md:py-28 bg-white text-[#0A0A0A] border-b border-[#0A0A0A]/10"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <div className="text-xs font-mono tracking-widest text-[#FF4A16] uppercase font-bold flex items-center gap-1.5 mb-2">
                <span>05</span>
                <RedSignal type="slash" />
                <span>MÉTHODE D’INGÉNIERIE EN 7 ÉTAPES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A0A0A] tracking-tight leading-tight uppercase">
                HOW WE WORK. <br />
                DISCIPLINE DE BOUT EN BOUT<RedSignal type="slash" />
              </h2>
              <p className="text-sm sm:text-base text-[#555555] mt-3 leading-relaxed">
                Nous avons codifié notre processus de delivery pour éliminer l'approximation. De l'audit initial au monitoring de production.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {PROCESS_STEPS.map((step, idx) => (
                <div
                  key={step.number}
                  className={`p-6 border ${
                    idx === 0
                      ? 'border-[#FF4A16] bg-[#FF4A16]/5'
                      : 'border-[#0A0A0A]/10 bg-[#FAF8F6] hover:border-[#FF4A16]'
                  } transition-all flex flex-col justify-between rounded-[2px]`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xl font-mono font-black text-[#FF4A16]">
                        <AnimatedNumber value={step.number} duration={1} />
                      </span>
                      <span className="text-[10px] font-mono text-[#666666] uppercase tracking-widest">
                        PHASE
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#0A0A0A] tracking-wide uppercase">
                      {step.title}
                    </h3>
                    <div className="text-[11px] text-[#FF4A16] font-medium mb-3">
                      {step.subtitle}
                    </div>

                    <p className="text-xs text-[#555555] leading-relaxed mb-6">
                      {step.description}
                    </p>
                  </div>

                  <div className="border-t border-[#0A0A0A]/10 pt-4 space-y-1">
                    <div className="text-[9.5px] font-mono text-[#666666] uppercase tracking-widest">
                      LIVRABLES :
                    </div>
                    {step.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="text-[11px] text-[#333333] flex items-start gap-1.5">
                        <span className="text-[#FF4A16]">•</span>
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ========================================================
          SECTION 06 / COMPANY STORY
          From 2024 student collective to 2026 structured tech firm (Light Architectural Mode)
          ======================================================== */}
      <ScrollReveal>
        <section
          id="evolution-section"
          className="py-20 sm:py-24 md:py-28 bg-[#FAF8F6] text-[#0A0A0A] border-b border-[#0A0A0A]/10 relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mb-14">
              <div className="text-xs font-mono tracking-widest text-[#FF4A16] uppercase font-bold flex items-center gap-1.5 mb-2">
                <span>06</span>
                <RedSignal type="slash" />
                <span>TRAJECTOIRE D'ENTREPRISE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A0A0A] tracking-tight leading-tight uppercase">
                FROM STUDENT COLLECTIVE <br />
                TO TECHNOLOGY COMPANY<RedSignal type="slash" />
              </h2>
              <p className="text-sm sm:text-base text-[#555555] mt-3 leading-relaxed">
                Nous n’avons pas commencé comme une entreprise structurée. Nous sommes en train de la construire avec discipline, pour porter haut le flambeau de la tech africaine.
              </p>
            </div>

            <div className="relative border-l-2 border-[#0A0A0A]/20 pl-6 sm:pl-8 space-y-10">
              {EVOLUTION_MILESTONES.map((milestone, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-[#0A0A0A] group-hover:border-[#FF4A16] group-hover:bg-[#FF4A16] transition-colors" />

                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-mono font-bold text-[#FF4A16]">
                      {milestone.year}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#666666] px-2 py-0.5 bg-black/5 rounded-[1px]">
                      {milestone.phase}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#0A0A0A]">
                    {milestone.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed max-w-3xl mt-1">
                    {milestone.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ========================================================
          SECTION 07 / PEOPLE
          The 11 Minds: 6 Founders + 5 Recruited Talents
          Human representation, distinct leadership tier
          ======================================================== */}
      <ScrollReveal>
        <section
          id="people-section"
          className="py-20 sm:py-24 md:py-28 bg-[#FAF8F6] border-b border-[#0A0A0A]/10"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 border-b border-[#0A0A0A]/10 gap-6">
              <div>
                <div className="text-xs font-mono tracking-widest text-[#FF4A16] uppercase font-bold flex items-center gap-1.5">
                  <span>07</span>
                  <RedSignal type="slash" />
                  <span>ORGANISATION & TALENTS</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A0A0A] tracking-tight mt-2 uppercase">
                  PEOPLE BEHIND THE SYSTEMS<RedSignal type="slash" />
                </h2>
                <p className="text-sm text-[#555555] mt-2 max-w-xl">
                  11 collaborateurs régis par fiches de fonction. La direction stratégique est assurée par les 6 cofondateurs, renforcée par 5 spécialistes recrutés.
                </p>
              </div>
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#0A0A0A] hover:bg-[#222222] text-white text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer rounded-[2px]"
              >
                <span>VOIR L'ORGANIGRAMME COMPLET</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Tier 1: 6 Founders Grid */}
            <div className="mt-12">
              <div className="text-xs font-mono tracking-widest text-[#656565] uppercase font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF4A16]" />
                <span>NOYAU STRATÉGIQUE — LES 6 COFONDATEURS</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {founders.map((member) => (
                  <div
                    key={member.id}
                    className="bg-white border border-[#0A0A0A]/10 hover:border-[#0A0A0A] p-6 flex flex-col justify-between transition-all group rounded-[2px]"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-mono tracking-widest uppercase font-bold px-2 py-0.5 bg-[#FF4A16] text-white">
                          {member.status}
                        </span>
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
                          <span key={comp} className="text-[9.5px] font-mono px-2 py-0.5 bg-[#FAF8F6] text-[#444444]">
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
                  </div>
                ))}
              </div>
            </div>

            {/* Tier 2: 5 Recruited Talents Preview */}
            <div className="mt-12 pt-10 border-t border-[#0A0A0A]/10">
              <div className="text-xs font-mono tracking-widest text-[#656565] uppercase font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0A0A0A]" />
                <span>FORCE OPÉRATIONNELLE — 5 SPÉCIALISTES RECRUTÉS</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {recruitedTalents.map((member) => (
                  <div
                    key={member.id}
                    onClick={() => setSelectedMember(member)}
                    className="p-4 bg-white border border-[#0A0A0A]/10 hover:border-[#FF4A16] transition-all cursor-pointer group rounded-[2px]"
                  >
                    <div className="text-[9px] font-mono text-[#FF4A16] uppercase font-bold mb-1">
                      {member.department}
                    </div>
                    <h4 className="font-bold text-sm text-[#0A0A0A] group-hover:text-[#FF4A16] transition-colors line-clamp-1">
                      {member.name}
                    </h4>
                    <p className="text-[11px] text-[#656565] mt-0.5 line-clamp-1">
                      {member.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ========================================================
          SECTION 08 / JOURNAL
          Engineering Notes & Field Lessons
          ======================================================== */}
      <ScrollReveal>
        <section
          id="journal-section"
          className="py-20 sm:py-24 md:py-28 bg-white border-b border-[#0A0A0A]/10"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 border-b border-[#0A0A0A]/10 gap-6">
              <div>
                <div className="text-xs font-mono tracking-widest text-[#FF4A16] uppercase font-bold flex items-center gap-1.5">
                  <span>08</span>
                  <RedSignal type="slash" />
                  <span>JOURNAL D'INGÉNIERIE</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A0A0A] tracking-tight mt-2 uppercase">
                  BUILD. BREAK. LEARN. PUBLISH<RedSignal type="slash" />
                </h2>
              </div>
              <button
                onClick={() => onNavigate('journal')}
                className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#0A0A0A] hover:text-[#FF4A16] transition-colors cursor-pointer"
              >
                <span>LIRE TOUTES LES PUBLICATIONS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {JOURNAL_ARTICLES.slice(0, 2).map((article) => (
                <div
                  key={article.id}
                  onClick={() => onNavigate('journal')}
                  className="p-6 sm:p-8 bg-[#FAF8F6] border border-[#0A0A0A]/10 hover:border-[#FF4A16] transition-all cursor-pointer group flex flex-col justify-between rounded-[2px]"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] font-mono tracking-widest text-[#FF4A16] uppercase font-bold px-2 py-0.5 bg-white border border-[#0A0A0A]/10">
                        {article.category}
                      </span>
                      <span className="text-xs font-mono text-[#656565]">
                        {article.date}
                      </span>
                      <span className="text-xs font-mono text-[#656565]">
                        • {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#0A0A0A] group-hover:text-[#FF4A16] transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#555555] mt-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#0A0A0A]/10 flex items-center justify-between">
                    <div className="text-xs text-[#444444]">
                      Par <span className="font-semibold text-[#0A0A0A]">{article.author}</span>
                    </div>
                    <span className="text-xs font-bold text-[#FF4A16] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      LIRE L'ESSAI <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ========================================================
          SECTION 09 / FINAL CTA
          "LET'S BUILD SOMETHING REAL."
          Grand bloc rouge-orange avec typographie noire/blanche
          ======================================================== */}
      <ScrollReveal>
        <section
          id="final-cta-section"
          className="py-24 md:py-32 bg-[#FF4A16] text-[#0A0A0A] text-center relative overflow-hidden shadow-2xl"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0A0A0A] text-white text-[11px] font-mono tracking-widest uppercase rounded-[2px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4A16]" />
              ENGAGEMENT PROFESSIONNEL & DISCIPLINE
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0A0A0A] tracking-tight leading-tight uppercase">
              LET’S BUILD SOMETHING REAL<span className="text-white">/</span>
            </h2>

            <p className="text-base sm:text-lg text-[#0A0A0A]/90 font-medium max-w-2xl mx-auto leading-relaxed">
              Vous avez un projet ambitieux, un système critique à auditer ou un besoin d’ingénierie logicielle ? Collaborons avec rigueur et méthode.
            </p>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-[#0A0A0A] hover:bg-[#222222] text-white font-bold text-xs tracking-widest uppercase transition-all duration-200 cursor-pointer shadow-xl flex items-center gap-2 group active:scale-[0.98] rounded-[2px]"
              >
                <span>DÉMARRER UN PROJET AVEC NOUS</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="px-8 py-4 bg-transparent hover:bg-black/10 text-[#0A0A0A] border-2 border-[#0A0A0A] font-bold text-xs tracking-widest uppercase transition-all duration-200 cursor-pointer rounded-[2px]"
              >
                DÉCOUVRIR NOS OFFRES & CAPACITÉS
              </button>
            </div>

            <div className="pt-8 text-xs font-mono text-[#0A0A0A]/70 font-semibold">
              Cotonou, Bénin • contact@excellenceteam.site • Réponse sous 24h ouvrées
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Modals for Deep-Dive */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      <TeamModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </div>
  );
};
