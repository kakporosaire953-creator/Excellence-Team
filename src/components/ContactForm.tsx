import React, { useState } from 'react';
import { BRAND } from '../data/brand';
import { LiquidGlassCard } from './glass/LiquidGlassCard';
import { LiquidGlassButton } from './glass/LiquidGlassButton';
import { LiquidGlassBadge } from './glass/LiquidGlassBadge';
import { Send, CheckCircle2, Copy, Check, MessageSquare, Mail, Phone, MapPin, ArrowRight, Shield } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formMode, setFormMode] = useState<'project' | 'general'>('project');
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    projectType: 'Digital Products (Web / Mobile / SaaS)',
    budget: '1 500 000 — 4 000 000 FCFA',
    timeline: '1 à 3 mois',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const projectTypes = [
    'Digital Products (Web / Mobile / SaaS)',
    'Cybersécurité & Audit / Pentesting',
    'IA & Ingénierie Data',
    'Cloud Architecture & DevOps',
    'Maintenance Continue & Support SLA',
    'Solution Logicielle Spécifique',
  ];

  const budgetOptions = [
    '< 1 500 000 FCFA (~2 300 €)',
    '1 500 000 — 4 000 000 FCFA (~2 300 — 6 000 €)',
    '4 000 000 — 10 000 000 FCFA (~6 000 — 15 000 €)',
    '> 10 000 000 FCFA (+15 000 €)',
    'À définir selon l’estimation technique',
  ];

  const timelineOptions = [
    'Urgent (< 1 mois)',
    '1 à 3 mois',
    '3 à 6 mois',
    'Phase d’exploration & étude',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  const formattedSummary = `Demande ${formMode === 'project' ? 'de Projet' : 'Générale'} Excellence Team:
Nom: ${formData.name}
Organisation: ${formData.organization || 'Non spécifié'}
Email: ${formData.email}
Téléphone: ${formData.phone || 'Non spécifié'}
${formMode === 'project' ? `Type: ${formData.projectType}\nBudget indicatif: ${formData.budget}\nÉchéance: ${formData.timeline}` : ''}
Message:
${formData.message}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(formattedSummary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mailtoLink = `mailto:${BRAND.contact.email}?subject=${encodeURIComponent(
    `[Excellence Team] ${formMode === 'project' ? 'Nouveau Projet' : 'Demande'} - ${formData.organization || formData.name}`
  )}&body=${encodeURIComponent(formattedSummary)}`;

  return (
    <LiquidGlassCard id="contact-experience-module" material="highlight" className="p-0 overflow-hidden">
      {/* Mode Switcher */}
      <div className="flex border-b border-[#0A0A0A]/10 bg-white/40 backdrop-blur-md gpu-glass will-change-[backdrop-filter,transform] transform-gpu">
        <button
          type="button"
          onClick={() => setFormMode('project')}
          className={`flex-1 py-4 px-6 text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
            formMode === 'project'
              ? 'bg-white/90 text-[#0A0A0A] border-b-2 border-b-[#FF4A16] shadow-xs'
              : 'text-[#656565] hover:text-[#0A0A0A]'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#FF4A16]" />
          <span>01 / DÉMARRER UN PROJET</span>
        </button>

        <button
          type="button"
          onClick={() => setFormMode('general')}
          className={`flex-1 py-4 px-6 text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
            formMode === 'general'
              ? 'bg-white/90 text-[#0A0A0A] border-b-2 border-b-[#FF4A16] shadow-xs'
              : 'text-[#656565] hover:text-[#0A0A0A]'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#0A0A0A]" />
          <span>02 / CONTACT GÉNÉRAL & ÉCHANGE</span>
        </button>
      </div>

      <div className="p-6 sm:p-8 md:p-10">
        {submitted ? (
          <div className="py-8 text-center space-y-6 animate-in fade-in duration-300">
            <div className="w-16 h-16 bg-[#FF4A16]/10 border border-[#FF4A16]/30 text-[#FF4A16] mx-auto flex items-center justify-center rounded-[2px]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="max-w-xl mx-auto space-y-2">
              <div className="text-xs font-mono text-[#FF4A16] font-bold tracking-widest uppercase">
                DEMANDE ENREGISTRÉE AVEC SUCCÈS
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#0A0A0A]">
                Merci, {formData.name}.
              </h3>
              <p className="text-sm text-[#555555] leading-relaxed">
                Notre Direction Commerciale et notre Direction Projets analysent votre cahier des charges.
                Nous vous recontacterons à l’adresse <span className="font-semibold text-[#0A0A0A]">{formData.email}</span> sous 24 heures ouvrées.
              </p>
            </div>

            {/* Direct Send Buttons */}
            <div className="p-5 bg-white/60 border border-[#0A0A0A]/10 max-w-lg mx-auto text-left space-y-3 rounded-[2px]">
              <div className="text-[11px] font-mono text-[#656565] uppercase font-bold flex items-center justify-between">
                <span>RÉCAPITULATIF TECHNIQUE PRÉPARÉ</span>
                <button
                  onClick={copyToClipboard}
                  className="text-[#0A0A0A] hover:text-[#FF4A16] flex items-center gap-1 text-[11px] font-mono cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copié !' : 'Copier'}</span>
                </button>
              </div>
              <pre className="text-xs font-mono bg-white p-3 border border-[#0A0A0A]/5 text-[#333333] whitespace-pre-wrap max-h-40 overflow-y-auto rounded-[2px]">
                {formattedSummary}
              </pre>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={mailtoLink}
                  className="flex-1 py-2.5 px-4 bg-[#0A0A0A] text-white text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 hover:bg-[#222222] transition-colors rounded-[2px]"
                >
                  <Mail className="w-3.5 h-3.5 text-[#FF4A16]" />
                  <span>OUVRIR DANS MON CLIENT EMAIL</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="py-2.5 px-4 bg-white border border-[#0A0A0A]/20 text-[#0A0A0A] text-xs font-bold uppercase tracking-wider hover:bg-[#FAF8F6] transition-colors cursor-pointer rounded-[2px]"
                >
                  NOUVELLE DEMANDE
                </button>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: Name & Organization */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0A0A0A] mb-2">
                  Nom Complet <span className="text-[#FF4A16]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex. Christian Dossou"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/70 border border-[#0A0A0A]/15 text-sm text-[#0A0A0A] placeholder-[#999999] focus:outline-none focus:border-[#FF4A16] focus:bg-white transition-all rounded-[2px]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0A0A0A] mb-2">
                  Entreprise / Organisation
                </label>
                <input
                  type="text"
                  placeholder="Ex. Sahel Logistics Group"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full px-4 py-3 bg-white/70 border border-[#0A0A0A]/15 text-sm text-[#0A0A0A] placeholder-[#999999] focus:outline-none focus:border-[#FF4A16] focus:bg-white transition-all rounded-[2px]"
                />
              </div>
            </div>

            {/* Row 2: Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0A0A0A] mb-2">
                  Email Professionnel <span className="text-[#FF4A16]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="contact@entreprise.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/70 border border-[#0A0A0A]/15 text-sm text-[#0A0A0A] placeholder-[#999999] focus:outline-none focus:border-[#FF4A16] focus:bg-white transition-all rounded-[2px]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0A0A0A] mb-2">
                  Téléphone / WhatsApp
                </label>
                <input
                  type="tel"
                  placeholder="+229 XX XX XX XX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-white/70 border border-[#0A0A0A]/15 text-sm text-[#0A0A0A] placeholder-[#999999] focus:outline-none focus:border-[#FF4A16] focus:bg-white transition-all rounded-[2px]"
                />
              </div>
            </div>

            {/* Specific Project Fields */}
            {formMode === 'project' && (
              <>
                {/* Project Type */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A0A0A] mb-2">
                    Domaine d’Ingénierie Principal
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                    {projectTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFormData({ ...formData, projectType: type })}
                        className={`p-3 text-left border text-xs transition-all cursor-pointer rounded-[2px] ${
                          formData.projectType === type
                            ? 'bg-[#0A0A0A] text-white border-[#0A0A0A] font-semibold shadow-sm'
                            : 'bg-white/60 text-[#444444] border-[#0A0A0A]/10 hover:border-[#0A0A0A]/30 hover:bg-white'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget & Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0A0A0A] mb-2">
                      Fourchette Budgétaire Estimée (Optionnel)
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 bg-white/70 border border-[#0A0A0A]/15 text-sm text-[#0A0A0A] focus:outline-none focus:border-[#FF4A16] focus:bg-white transition-all rounded-[2px]"
                    >
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0A0A0A] mb-2">
                      Délai Souhaité
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 bg-white/70 border border-[#0A0A0A]/15 text-sm text-[#0A0A0A] focus:outline-none focus:border-[#FF4A16] focus:bg-white transition-all rounded-[2px]"
                    >
                      {timelineOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </>
            )}

            {/* Message Area */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0A0A0A] mb-2">
                {formMode === 'project'
                  ? 'Description du Projet & Objectifs Clés'
                  : 'Votre Message ou Sujet d’Échange'}
              </label>
              <textarea
                rows={4}
                required
                placeholder={
                  formMode === 'project'
                    ? 'Décrivez brièvement votre besoin, vos contraintes d’intégration, vos utilisateurs cibles et vos fonctionnalités indispensables...'
                    : 'Précisez l’objet de votre prise de contact...'
                }
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-white/70 border border-[#0A0A0A]/15 text-sm text-[#0A0A0A] placeholder-[#999999] focus:outline-none focus:border-[#FF4A16] focus:bg-white transition-all rounded-[2px]"
              />
            </div>

            {/* Submission Action & Security Notice */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-[#656565]">
                <Shield className="w-4 h-4 text-[#FF4A16] shrink-0" />
                <span>
                  Confidentialité stricte. Nous ne partageons jamais vos données.
                </span>
              </div>

              <LiquidGlassButton
                type="submit"
                variant="vermilion"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                TRANSMETTRE LA DEMANDE
              </LiquidGlassButton>
            </div>
          </form>
        )}
      </div>
    </LiquidGlassCard>
  );
};
