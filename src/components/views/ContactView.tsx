import React from 'react';
import { PageView } from '../../types';
import { BRAND } from '../../data/brand';
import { ContactForm } from '../ContactForm';
import { MapPin, Mail, Clock, Shield, CheckCircle2, MessageSquare, Terminal } from 'lucide-react';

interface ContactViewProps {
  onNavigate: (view: PageView) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate }) => {
  return (
    <div id="contact-page" className="w-full pt-28 pb-24 bg-[#FAF8F6]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-[#0A0A0A]/10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#0A0A0A]/10 text-[10px] font-mono tracking-widest text-[#FF4A16] uppercase font-bold mb-4">
          ENGAGEMENT COMMERCIAL & ÉVALUATION TECHNIQUE
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#0A0A0A] leading-tight uppercase">
          LET’S BUILD SOMETHING REAL<span className="text-[#FF4A16]">/</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#555555] max-w-2xl leading-relaxed">
          Que vous ayez un cahier des charges précis, une infrastructure critique à auditer ou un projet d’application à modéliser, notre équipe technique et commerciale vous répond sous 24h ouvrées.
        </p>
      </div>

      {/* Main Form & Info Split */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Details & SLA Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Coordinates Card */}
            <div className="p-6 sm:p-8 bg-white border border-[#0A0A0A]/10 space-y-6 rounded-[2px]">
              <div className="text-xs font-mono tracking-widest text-[#FF4A16] uppercase font-bold border-b border-[#0A0A0A]/10 pb-3">
                COORDONNÉES OFFICIELLES
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#FF4A16] shrink-0 mt-1" />
                  <div>
                    <div className="text-xs font-bold text-[#0A0A0A] uppercase">
                      Siège Opérationnel
                    </div>
                    <div className="text-xs text-[#555555] mt-0.5">
                      {BRAND.contact.location}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#FF4A16] shrink-0 mt-1" />
                  <div>
                    <div className="text-xs font-bold text-[#0A0A0A] uppercase">
                      Direction Commerciale & Projets
                    </div>
                    <a
                      href={`mailto:${BRAND.contact.email}`}
                      className="text-xs text-[#FF4A16] font-mono hover:underline mt-0.5 block"
                    >
                      {BRAND.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#FF4A16] shrink-0 mt-1" />
                  <div>
                    <div className="text-xs font-bold text-[#0A0A0A] uppercase">
                      Horaires & Disponibilité
                    </div>
                    <div className="text-xs text-[#555555] mt-0.5">
                      {BRAND.contact.workingHours}
                    </div>
                    <div className="text-[11px] font-mono text-[#FF4A16] mt-1 font-semibold">
                      {BRAND.contact.slaResponse}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SLA & Engagement Principles */}
            <div className="p-6 bg-white border-2 border-[#0A0A0A]/15 text-[#0A0A0A] space-y-4 rounded-[2px] shadow-xs">
              <div className="text-[10px] font-mono tracking-widest text-[#FF4A16] uppercase font-bold">
                ENGAGEMENT DE TRANSPARENCE
              </div>
              <h3 className="text-lg font-black text-[#0A0A0A]">
                Pas d'estimations à l'aveugle.
              </h3>
              <p className="text-xs text-[#555555] leading-relaxed">
                Chaque sollicitation fait l'objet d'un premier cadrage d'architecture par un directeur technique ou de projet. Si un besoin dépasse notre champ de compétence actuel, nous vous le disons d'emblée.
              </p>

              <div className="pt-2 border-t border-[#0A0A0A]/10 space-y-2 text-xs text-[#333333]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4A16] shrink-0" />
                  <span>Accord de confidentialité (NDA) préalable si souhaité</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4A16] shrink-0" />
                  <span>Proposition technique chiffrée sous 48-72h</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4A16] shrink-0" />
                  <span>Propriété intellectuelle totale cédée au client</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
