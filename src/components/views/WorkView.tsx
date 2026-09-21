import React, { useState } from 'react';
import { PageView, Project, ProjectCategory } from '../../types';
import { PROJECTS } from '../../data/projects';
import { ProjectModal } from '../ProjectModal';
import { LiquidGlassCard } from '../glass/LiquidGlassCard';
import { LiquidGlassBadge } from '../glass/LiquidGlassBadge';
import { LiquidGlassButton } from '../glass/LiquidGlassButton';
import { ArrowUpRight, ExternalLink, CheckCircle2, ArrowRight } from 'lucide-react';

interface WorkViewProps {
  onNavigate: (view: PageView) => void;
}

export const WorkView: React.FC<WorkViewProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: ProjectCategory[] = [
    'All',
    'Developer Tooling',
    'SaaS & Web',
    'AI & Data',
    'EdTech & Education',
    'Research & 3D',
    'Impact & Civic'
  ];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div id="work-page" className="w-full pt-28 pb-24 bg-transparent relative z-10">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-[#0A0A0A]/10">
        <div className="mb-4">
          <LiquidGlassBadge variant="vermilion" size="sm">
            PORTFOLIO D’INGÉNIERIE & ÉTUDES DE CAS
          </LiquidGlassBadge>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#0A0A0A] leading-tight uppercase">
          BUILT. NOT PROMISED<span className="text-[#FF4A16]">/</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#555555] max-w-2xl leading-relaxed">
          Chaque projet présenté ici est une réalisation concrète conçue, développée et déployée par Excellence Team. Nous transformons des problèmes réels en systèmes numériques opérationnels.
        </p>

        {/* Category Filters */}
        <div className="mt-8 flex flex-wrap gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-bold tracking-wider uppercase transition-all cursor-pointer rounded-full ${
                activeCategory === cat
                  ? 'bg-[#0A0A0A] text-white shadow-md'
                  : 'glass-secondary text-[#555555] hover:text-[#0A0A0A] border border-white/60'
              }`}
            >
              {cat === 'All' ? 'Tous les Projets (12)' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <LiquidGlassCard
              key={project.id}
              material={project.featured ? 'highlight' : 'primary'}
              interactive
              onClick={() => setSelectedProject(project)}
              className="p-6 sm:p-7 flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-4">
                {/* Meta header */}
                <div className="flex items-center justify-between">
                  <LiquidGlassBadge variant="vermilion" size="xs">
                    {project.category}
                  </LiquidGlassBadge>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-[#656565]">
                      {project.year}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-[#0A0A0A] text-white font-semibold rounded-[2px]">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-[#0A0A0A] tracking-tight group-hover:text-[#FF4A16] transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#555555] leading-relaxed line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Problem snippet */}
                <div className="p-3 bg-black/5 rounded-xl border-l-2 border-l-[#FF4A16] text-xs text-[#444444] space-y-1">
                  <div className="text-[9.5px] font-mono font-bold uppercase text-[#656565]">
                    Problématique :
                  </div>
                  <p className="line-clamp-2">{project.problem}</p>
                </div>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technology.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-[9.5px] font-mono px-2 py-0.5 bg-white/70 text-[#0A0A0A] border border-black/5 rounded-[2px]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technology.length > 3 && (
                    <span className="text-[9.5px] font-mono px-1.5 py-0.5 text-[#888888]">
                      +{project.technology.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-[#0A0A0A]/10 mt-4 flex items-center justify-between">
                <span className="text-xs font-bold text-[#0A0A0A] group-hover:text-[#FF4A16] flex items-center gap-1 uppercase tracking-wider">
                  <span>ÉTUDE DE CAS COMPLÈTE</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-1 text-[#656565] hover:text-[#FF4A16] transition-colors"
                    aria-label="Accéder au lien du projet"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </LiquidGlassCard>
          ))}
        </div>

        {/* Bottom Banner */}
        <LiquidGlassCard
          material="highlight"
          className="mt-16 p-8 text-[#0A0A0A] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div>
            <div className="text-[10px] font-mono tracking-widest text-[#FF4A16] uppercase font-bold mb-1">
              CONSULTATION D'INGÉNIERIE /
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#0A0A0A]">
              VOUS SOUHAITEZ DÉVELOPPER UN SYSTÈME SIMILAIRE ?
            </h3>
            <p className="text-xs sm:text-sm text-[#555555] mt-1">
              Nos ingénieurs et directeurs de projets évaluent votre besoin et conçoivent une architecture adaptée.
            </p>
          </div>
          <LiquidGlassButton
            variant="vermilion"
            size="md"
            onClick={() => onNavigate('contact')}
          >
            LANCER UNE ÉTUDE TECHNIQUE
          </LiquidGlassButton>
        </LiquidGlassCard>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
