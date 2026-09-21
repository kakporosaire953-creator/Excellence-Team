import React, { useState } from 'react';
import { PageView } from '../../types';
import { SERVICE_PILLARS, ECONOMIC_MODEL } from '../../data/services';
import { LiquidGlassCard } from '../glass/LiquidGlassCard';
import { LiquidGlassBadge } from '../glass/LiquidGlassBadge';
import { LiquidGlassButton } from '../glass/LiquidGlassButton';
import {
  Layers,
  BrainCircuit,
  ShieldCheck,
  CloudCog,
  Cpu,
  CheckCircle2,
  ArrowRight,
  Terminal,
  Server,
  Zap,
  ArrowUpRight
} from 'lucide-react';

interface ServicesViewProps {
  onNavigate: (view: PageView) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onNavigate }) => {
  const [activePillarId, setActivePillarId] = useState<string>(SERVICE_PILLARS[0].id);

  const activePillar = SERVICE_PILLARS.find((p) => p.id === activePillarId) || SERVICE_PILLARS[0];

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

  return (
    <div id="services-page" className="w-full pt-28 pb-24 bg-transparent relative z-10">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-[#0A0A0A]/10">
        <div className="mb-4">
          <LiquidGlassBadge variant="vermilion" size="sm">
            CAPACITÉS D’INGÉNIERIE & OFFRES OFFICIELLES
          </LiquidGlassBadge>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#0A0A0A] leading-tight uppercase">
          THE ENGINEERING BEHIND THE WORK<span className="text-[#FF4A16]">/</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#555555] max-w-3xl leading-relaxed">
          Nous ne vendons pas des templates ou des promesses marketing. Nous mettons à disposition de nos partenaires des compétences d'ingénierie avancées en architecture logicielle, cybersécurité offensive/défensive et valorisation de données.
        </p>
      </div>

      {/* Main Pillars Navigation & Deep Dive */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {/* Horizontal Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 border-b border-[#0A0A0A]/10 pb-6">
          {SERVICE_PILLARS.map((pillar) => {
            const isActive = pillar.id === activePillarId;
            return (
              <LiquidGlassCard
                key={pillar.id}
                material={isActive ? 'highlight' : 'secondary'}
                interactive
                onClick={() => setActivePillarId(pillar.id)}
                className={`p-4 cursor-pointer flex flex-col justify-between transition-all ${
                  isActive ? 'ring-2 ring-[#FF4A16] shadow-lg' : 'opacity-85 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[11px] font-mono font-bold ${isActive ? 'text-[#FF4A16]' : 'text-[#888888]'}`}>
                    {pillar.number}/
                  </span>
                  {getPillarIcon(pillar.icon)}
                </div>
                <div className="font-bold text-xs uppercase tracking-wider text-[#0A0A0A]">
                  {pillar.title}
                </div>
              </LiquidGlassCard>
            );
          })}
        </div>

        {/* Active Pillar Detailed View */}
        <LiquidGlassCard
          material="primary"
          className="mt-8 p-6 sm:p-10 shadow-xl"
        >
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 pb-8 border-b border-[#0A0A0A]/10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono font-bold text-[#FF4A16]">
                  {activePillar.number}/ PÔLE D’INGÉNIERIE
                </span>
                <span className="text-xs font-mono text-[#888888]">
                  • {activePillar.englishTitle}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0A0A0A] tracking-tight">
                {activePillar.title}
              </h2>
              <p className="text-sm sm:text-base text-[#444444] mt-3 max-w-3xl leading-relaxed">
                {activePillar.description}
              </p>
            </div>

            <LiquidGlassButton
              variant="vermilion"
              size="md"
              onClick={() => onNavigate('contact')}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              DEMANDER UNE PROPOSITION
            </LiquidGlassButton>
          </div>

          {/* Detailed Capabilities Matrix */}
          <div className="py-8 border-b border-[#0A0A0A]/10">
            <h3 className="text-xs font-mono tracking-widest uppercase font-bold text-[#656565] mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF4A16]" />
              <span>CAPACITÉS SPÉCIFIQUES DÉPLOYÉES</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activePillar.capabilities.map((cap, cIdx) => (
                <LiquidGlassCard
                  key={cIdx}
                  material="secondary"
                  className="p-5"
                >
                  <h4 className="font-bold text-sm text-[#0A0A0A] mb-2 uppercase">
                    {cap.title}
                  </h4>
                  <p className="text-xs text-[#555555] mb-4 leading-relaxed">
                    {cap.description}
                  </p>
                  <ul className="space-y-1 text-xs text-[#333333]">
                    {cap.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-1.5">
                        <span className="text-[#FF4A16] font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </LiquidGlassCard>
              ))}
            </div>
          </div>

          {/* Tech, Deliverables, Business Value Split */}
          <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tech Stack */}
            <LiquidGlassCard material="subtle" className="p-5">
              <div className="text-[10px] font-mono tracking-widest text-[#656565] uppercase font-bold mb-3">
                STACK TECHNIQUE MAÎTRISÉE
              </div>
              <div className="flex flex-wrap gap-1.5">
                {activePillar.technologies.map((t) => (
                  <span key={t} className="text-[10px] font-mono px-2 py-0.5 bg-white/70 text-[#0A0A0A] border border-black/5 rounded-[2px]">
                    {t}
                  </span>
                ))}
              </div>
            </LiquidGlassCard>

            {/* Deliverables */}
            <LiquidGlassCard material="subtle" className="p-5">
              <div className="text-[10px] font-mono tracking-widest text-[#656565] uppercase font-bold mb-3">
                LIVRABLES FORMELS REMIS
              </div>
              <ul className="space-y-1 text-xs text-[#444444]">
                {activePillar.deliverables.map((d, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-1.5">
                    <span className="text-[#FF4A16] font-bold">✓</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </LiquidGlassCard>

            {/* Business Impact */}
            <LiquidGlassCard material="highlight" className="p-5 border-2 border-[#FF4A16]/40 text-[#0A0A0A]">
              <div className="text-[10px] font-mono tracking-widest text-[#FF4A16] uppercase font-bold mb-2 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF4A16] animate-pulse" />
                <span>RETOUR SUR INVESTISSEMENT</span>
              </div>
              <p className="text-xs text-[#333333] leading-relaxed font-medium">
                {activePillar.businessValue}
              </p>
            </LiquidGlassCard>
          </div>
        </LiquidGlassCard>

        {/* Strategic Economic Model Section */}
        <div className="mt-20 pt-12 border-t border-[#0A0A0A]/10">
          <div className="max-w-3xl mb-8">
            <div className="mb-2">
              <LiquidGlassBadge variant="neutral" size="xs">
                VISION STRATÉGIQUE 2026
              </LiquidGlassBadge>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0A0A0A] tracking-tight">
              MODÈLE ÉCONOMIQUE : SERVICES • PRODUITS • RÉCURRENCE
            </h2>
            <p className="text-xs sm:text-sm text-[#555555] mt-2 leading-relaxed">
              Excellence Team articule son modèle autour d’un équilibre vertueux : des prestations d’ingénierie sur-mesure d’excellence, la valorisation de produits propriétaires scalables et des contrats d’accompagnement récurrents garantissant pérennité et stabilité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ECONOMIC_MODEL.pillars.map((model) => (
              <LiquidGlassCard
                key={model.type}
                material="primary"
                className="p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono font-bold text-[#FF4A16] uppercase tracking-widest mb-1">
                    {model.type}
                  </div>
                  <h3 className="font-bold text-lg text-[#0A0A0A]">
                    {model.title}
                  </h3>
                  <p className="text-xs text-[#888888] italic mb-3">
                    {model.subtitle}
                  </p>
                  <p className="text-xs text-[#444444] leading-relaxed mb-4">
                    {model.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#0A0A0A]/10 space-y-1.5">
                  {model.characteristics.map((char, cIdx) => (
                    <div key={cIdx} className="text-[11px] text-[#555555] flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4A16] shrink-0" />
                      <span>{char}</span>
                    </div>
                  ))}
                </div>
              </LiquidGlassCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
