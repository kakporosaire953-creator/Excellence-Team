import React from 'react';
import { PageView } from '../types';
import { ETSymbol } from './ETLogo';
import { BRAND } from '../data/brand';
import { ArrowUpRight, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer id="app-footer" className="bg-[#0A0A0A] text-white pt-16 pb-12 border-t border-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Architectural Statement */}
        <div className="pb-12 border-b border-white/10 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest text-[#FF4A16] uppercase mb-4 rounded-[2px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4A16] animate-pulse" />
              INGÉNIERIE LOGICIELLE & CYBERSÉCURITÉ — BÉNIN & AFRIQUE FRANCOPHONE
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-tight">
              EXCELLENCE TEAM<span className="text-[#FF4A16]">/</span>
            </h2>
            <p className="text-[#A0A0A0] text-sm md:text-base mt-3 max-w-xl leading-relaxed">
              Nous concevons, développons, sécurisons et déployons des solutions numériques répondant à des besoins réels. Bâti avec rigueur, audace et discipline.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              id="footer-start-project-btn"
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3.5 bg-[#FF4A16] hover:bg-[#E03F0E] text-white font-bold text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center gap-2 group rounded-[2px]"
            >
              <span>DÉMARRER UNE MISSION</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button
              id="footer-explore-work-btn"
              onClick={() => {
                onNavigate('work');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3.5 bg-transparent hover:bg-white/5 text-white border border-white/20 font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer rounded-[2px]"
            >
              VOIR LE PORTFOLIO
            </button>
          </div>
        </div>

        {/* 4 Navigation Columns Matrix */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-white/10">
          {/* Col 1: Capacités */}
          <div>
            <div className="text-[11px] font-mono tracking-widest text-[#FF4A16] uppercase font-bold mb-4 flex items-center gap-1.5">
              <span>01/</span> CAPACITÉS
            </div>
            <ul className="space-y-2.5 text-xs text-[#A0A0A0]">
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Produits Numériques & SaaS
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer text-left">
                  IA & Ingénierie Data
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Cybersécurité & Audits Autorisés
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Cloud, DevOps & Architecture
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Maintenance Continue & Support SLA
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Réalisations */}
          <div>
            <div className="text-[11px] font-mono tracking-widest text-[#FF4A16] uppercase font-bold mb-4 flex items-center gap-1.5">
              <span>02/</span> RÉALISATIONS
            </div>
            <ul className="space-y-2.5 text-xs text-[#A0A0A0]">
              <li>
                <button onClick={() => onNavigate('work')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Codetovecto (AST Vectorizer)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('work')} className="hover:text-white transition-colors cursor-pointer text-left">
                  VideoGen v2 (Dynamic Pipeline)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('work')} className="hover:text-white transition-colors cursor-pointer text-left">
                  ExcellenceLink (Edge Router)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('work')} className="hover:text-white transition-colors cursor-pointer text-left">
                  NowStudy & Academix (EdTech)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('work')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Voir les 12 projets répertoriés →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Organisation */}
          <div>
            <div className="text-[11px] font-mono tracking-widest text-[#FF4A16] uppercase font-bold mb-4 flex items-center gap-1.5">
              <span>03/</span> ORGANISATION
            </div>
            <ul className="space-y-2.5 text-xs text-[#A0A0A0]">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Gouvernance & Structure 2026
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('team')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Les 6 Cofondateurs & 5 Talents
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Méthode en 7 Étapes
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Nos 6 Valeurs Fondatrices
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('journal')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Journal & Notes d’Ingénierie
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Présence & Contact */}
          <div>
            <div className="text-[11px] font-mono tracking-widest text-[#FF4A16] uppercase font-bold mb-4 flex items-center gap-1.5">
              <span>04/</span> COORDONNÉES
            </div>
            <div className="space-y-3 text-xs text-[#A0A0A0]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#FF4A16] shrink-0 mt-0.5" />
                <span>{BRAND.contact.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#FF4A16] shrink-0" />
                <a href={`mailto:${BRAND.contact.email}`} className="hover:text-white transition-colors">
                  {BRAND.contact.email}
                </a>
              </div>
              <div className="pt-2 border-t border-white/5 text-[11px] text-[#707070]">
                <p>{BRAND.contact.workingHours}</p>
                <p className="text-[#FF4A16] font-mono mt-1 font-semibold">{BRAND.contact.slaResponse}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Logo, Discipline slogan, Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#707070]">
          <div className="flex items-center gap-3">
            <ETSymbol className="w-6 h-6" theme="dark" />
            <span className="font-bold text-white tracking-tight">EXCELLENCE TEAM/</span>
            <span className="text-[11px] font-mono text-[#A0A0A0]">
              TECHNOLOGY BUILT WITH <span className="text-[#FF4A16] font-bold">DISCIPLINE.</span>
            </span>
          </div>

          <div className="text-center md:text-right">
            <p className="italic text-[#888888] mb-1">
              « {BRAND.motto} »
            </p>
            <p>© {new Date().getFullYear()} Excellence Team. Tous droits réservés. Cotonou, Bénin.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
