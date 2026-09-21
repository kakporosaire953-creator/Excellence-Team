import React, { useState } from 'react';
import { PageView, Project, ProjectCategory } from '../../types';
import { PROJECTS } from '../../data/projects';
import { ProjectModal } from '../ProjectModal';
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
    <div id="work-page" className="w-full pt-28 pb-24 bg-[#FAF8F6]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-[#0A0A0A]/10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#0A0A0A]/10 text-[10px] font-mono tracking-widest text-[#FF4A16] uppercase font-bold mb-4">
          PORTFOLIO D’INGÉNIERIE & ÉTUDES DE CAS
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
              className={`px-4 py-2 text-xs font-bold tracking-wider uppercase transition-all cursor-pointer border rounded-[2px] ${
                activeCategory === cat
                  ? 'bg-[#0A0A0A] text-white border-[#0A0A0A] shadow-xs'
                  : 'bg-white text-[#555555] border-[#0A0A0A]/10 hover:border-[#0A0A0A]/30'
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
            <div
              key={project.id}
              className={`bg-white border transition-all flex flex-col justify-between group rounded-[2px] ${
                project.featured
                  ? 'border-[#0A0A0A]/20 shadow-xs'
                  : 'border-[#0A0A0A]/10 hover:border-[#0A0A0A]/40'
              }`}
            >
              <div className="p-6 sm:p-7 space-y-4">
                {/* Meta header */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest text-[#FF4A16] uppercase font-bold px-2 py-0.5 bg-[#FF4A16]/10">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-[#656565]">
                      {project.year}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-[#0A0A0A] text-white font-semibold">
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
                <div className="p-3 bg-[#FAF8F6] border-l-2 border-l-[#0A0A0A] text-xs text-[#444444] space-y-1">
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
                      className="text-[9.5px] font-mono px-2 py-0.5 bg-[#FAF8F6] text-[#0A0A0A] border border-[#0A0A0A]/5"
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
              <div className="p-6 pt-0 border-t border-[#0A0A0A]/5 mt-4 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-bold text-[#0A0A0A] group-hover:text-[#FF4A16] flex items-center gap-1 uppercase tracking-wider cursor-pointer"
                >
                  <span>ÉTUDE DE CAS COMPLÈTE</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 text-[#656565] hover:text-[#0A0A0A]"
                    aria-label="Accéder au lien du projet"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 bg-white border-2 border-[#0A0A0A]/15 text-[#0A0A0A] flex flex-col md:flex-row items-center justify-between gap-6 rounded-[2px] shadow-sm">
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
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3.5 bg-[#FF4A16] hover:bg-[#E03F0E] text-white font-bold text-xs tracking-wider uppercase transition-colors shrink-0 cursor-pointer rounded-[2px] shadow-sm"
          >
            LANCER UNE ÉTUDE TECHNIQUE
          </button>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
