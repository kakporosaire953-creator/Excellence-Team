import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Project } from '../types';
import { ProjectPreviewVisual } from './ProjectPreviewVisual';
import { RedSignal, MOTION_EASE } from './motion/MotionPrimitives';
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

interface HomeProjectCarouselProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onExploreAll: () => void;
}

export const HomeProjectCarousel: React.FC<HomeProjectCarouselProps> = ({
  projects,
  onSelectProject,
  onExploreAll,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHoveringSlide, setIsHoveringSlide] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartXRef = useRef<number | null>(null);
  const touchDeltaXRef = useRef<number>(0);
  const shouldReduceMotion = useReducedMotion();

  // Focus a curated subset of 6 key flagship projects for the carousel
  const carouselProjects = projects.slice(0, 6);
  const total = carouselProjects.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
  };

  // Keyboard navigation when carousel or window is active
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchDeltaXRef.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartXRef.current !== null) {
      touchDeltaXRef.current = e.touches[0].clientX - touchStartXRef.current;
    }
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current !== null) {
      const delta = touchDeltaXRef.current;
      if (delta < -45) {
        nextSlide();
      } else if (delta > 45) {
        prevSlide();
      }
    }
    touchStartXRef.current = null;
    touchDeltaXRef.current = 0;
  };

  const activeProject = carouselProjects[currentIndex];

  return (
    <section
      id="selected-work-carousel-section"
      ref={containerRef}
      className="py-20 sm:py-24 md:py-28 bg-[#FF4A16] text-[#0A0A0A] border-b border-[#0A0A0A]/20 overflow-hidden relative"
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="Projets phares Excellence Team"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Composition Rouge-Orange + Eléments Noirs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 border-b border-[#0A0A0A]/20 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0A0A0A] text-white text-[11px] font-mono tracking-widest uppercase font-bold rounded-[2px] mb-3">
              <span>04</span>
              <span className="text-[#FF4A16]">/</span>
              <span>SELECTED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A0A0A] tracking-tight leading-tight uppercase">
              BUILT. NOT PROMISED<span className="text-white">.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#0A0A0A]/85 font-medium mt-2 max-w-xl">
              Chaque système présenté est en production, audité et documenté. Navigation interactive au clavier ou par glissement.
            </p>
          </div>

          {/* Controls: Counter + Prev/Next buttons in solid Black */}
          <div className="flex items-center gap-4">
            <div className="text-xs font-mono text-[#0A0A0A] font-bold flex items-center gap-2 bg-white/20 px-3 py-2 rounded-[2px]">
              <span className="text-base font-black">
                {String(currentIndex + 1).padStart(2, '0')}
              </span>
              <span>/</span>
              <span>{String(total).padStart(2, '0')}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                id="carousel-prev-btn"
                onClick={prevSlide}
                aria-label="Projet précédent"
                className="w-10 h-10 bg-[#0A0A0A] hover:bg-[#222222] active:scale-95 text-white transition-all flex items-center justify-center cursor-pointer rounded-[2px] shadow-sm"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                id="carousel-next-btn"
                onClick={nextSlide}
                aria-label="Projet suivant"
                className="w-10 h-10 bg-[#0A0A0A] hover:bg-[#222222] active:scale-95 text-white transition-all flex items-center justify-center cursor-pointer rounded-[2px] shadow-sm"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={onExploreAll}
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-[#0A0A0A] hover:bg-[#222222] text-white text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer rounded-[2px] shadow-sm"
            >
              <span>LES 12 PROJETS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* ========================================================
            CAROUSEL STAGE: Deep Black Card on Red-Orange Background
            ======================================================== */}
        <div
          className="mt-10 relative select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Slide Card: Crisp Architectural White Card on Red-Orange Canvas */}
          <div
            className="group relative bg-white text-[#0A0A0A] border border-black/15 p-6 sm:p-8 md:p-10 rounded-[2px] cursor-pointer transition-all duration-300 shadow-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
            onClick={() => onSelectProject(activeProject)}
            onMouseEnter={() => setIsHoveringSlide(true)}
            onMouseLeave={() => setIsHoveringSlide(false)}
          >
            {/* Hover floating "VIEW CASE STUDY" badge */}
            <div
              className={`absolute top-6 right-6 z-20 pointer-events-none transition-all duration-200 ${
                isHoveringSlide
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-1 scale-95'
              }`}
            >
              <div className="px-3.5 py-1.5 bg-[#0A0A0A] text-white text-[10px] font-mono font-bold tracking-widest uppercase flex items-center gap-1.5 shadow-lg rounded-[2px]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF4A16]" />
                <span>VIEW CASE STUDY</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Visual Architectural Preview (7 cols) */}
              <div className="lg:col-span-7 overflow-hidden rounded-[2px] transition-transform duration-300 group-hover:scale-[1.02]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject.id}
                    initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98, y: 6 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98, y: -6 }}
                    transition={{ duration: 0.35, ease: MOTION_EASE }}
                  >
                    <ProjectPreviewVisual project={activeProject} />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Column: Project Metadata & Editorial Info (5 cols) */}
              <div className="lg:col-span-5 space-y-5 transition-transform duration-300 group-hover:translate-x-1.5">
                {/* 1. Meta Tags (staged reveal) */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`meta-${activeProject.id}`}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: MOTION_EASE }}
                    className="flex flex-wrap items-center gap-2 text-xs"
                  >
                    <span className="text-[10px] font-mono tracking-widest text-[#FF4A16] uppercase font-bold px-2.5 py-0.5 bg-[#FF4A16]/10 border border-[#FF4A16]/20 rounded-[1px]">
                      {activeProject.category}
                    </span>
                    <span className="text-xs font-mono text-[#666666]">
                      {activeProject.year}
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-[#0A0A0A] text-white rounded-[1px]">
                      {activeProject.status}
                    </span>
                  </motion.div>
                </AnimatePresence>

                {/* 2. Project Title */}
                <AnimatePresence mode="wait">
                  <motion.h3
                    key={`title-${activeProject.id}`}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.32, delay: 0.06, ease: MOTION_EASE }}
                    className="text-3xl sm:text-4xl font-black text-[#0A0A0A] tracking-tight leading-tight group-hover:text-[#FF4A16] transition-colors uppercase"
                  >
                    {activeProject.title}
                    <span className="text-[#FF4A16]">/</span>
                  </motion.h3>
                </AnimatePresence>

                {/* 3. Short Description */}
                <AnimatePresence mode="wait">
                  <motion.p
                    key={`desc-${activeProject.id}`}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.32, delay: 0.12, ease: MOTION_EASE }}
                    className="text-sm sm:text-base text-[#555555] leading-relaxed"
                  >
                    {activeProject.shortDescription}
                  </motion.p>
                </AnimatePresence>

                {/* 4. Problem & Result Box */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`box-${activeProject.id}`}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.32, delay: 0.16, ease: MOTION_EASE }}
                    className="p-4 bg-[#FAF8F6] border border-[#0A0A0A]/10 text-xs text-[#555555] space-y-2 rounded-[2px]"
                  >
                    <div>
                      <span className="font-bold text-[#0A0A0A] uppercase tracking-wider text-[9.5px] block mb-0.5">
                        DÉFI MÉTIER :
                      </span>
                      <p className="line-clamp-2 text-[#444444]">{activeProject.problem}</p>
                    </div>
                    <div className="border-t border-[#0A0A0A]/10 pt-2">
                      <span className="font-bold text-[#FF4A16] uppercase tracking-wider text-[9.5px] block mb-0.5">
                        RÉSULTAT LIVRÉ :
                      </span>
                      <p className="line-clamp-2 text-[#0A0A0A] font-medium">{activeProject.result}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* 5. Technologies pills */}
                <div className="space-y-1.5 pt-1">
                  <div className="text-[10px] font-mono text-[#666666] uppercase tracking-wider">
                    STACK TECHNIQUE :
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.technology.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 bg-[#FAF8F6] border border-[#0A0A0A]/10 text-[#444444] rounded-[1px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 6. CTAs (Appears slightly after metadata) */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`cta-${activeProject.id}`}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.28, delay: 0.2, ease: MOTION_EASE }}
                    className="pt-2 flex items-center gap-3"
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProject(activeProject);
                      }}
                      className="px-5 py-2.5 bg-[#FF4A16] hover:bg-[#E03F0E] text-white font-bold text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center gap-2 rounded-[2px] group/cta shadow-sm"
                    >
                      <span>VIEW PROJECT</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/cta:translate-x-1.5" />
                    </button>

                    {activeProject.liveUrl && (
                      <a
                        href={activeProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="px-4 py-2.5 bg-[#FAF8F6] hover:bg-[#FAF8F6]/80 border border-[#0A0A0A]/15 text-[#0A0A0A] font-bold text-xs tracking-wider uppercase transition-colors flex items-center gap-1.5 rounded-[2px]"
                      >
                        <span>DÉMO</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#555555]" />
                      </a>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Minimal Pagination Step Bar */}
          <div className="mt-8 flex items-center justify-between gap-4">
            {/* Step markers */}
            <div className="flex items-center gap-2 flex-1 max-w-md">
              {carouselProjects.map((p, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={p.id}
                    onClick={() => goToSlide(idx)}
                    aria-label={`Aller au projet ${p.title}`}
                    className={`h-2 flex-1 transition-all duration-300 rounded-[1px] cursor-pointer ${
                      isActive
                        ? 'bg-[#0A0A0A]'
                        : 'bg-[#0A0A0A]/20 hover:bg-[#0A0A0A]/40'
                    }`}
                  />
                );
              })}
            </div>

            {/* Quick Preview Thumbnail Strip */}
            <div className="hidden sm:flex items-center gap-3 text-xs font-mono">
              <span className="text-[#0A0A0A]/70 font-semibold">NEXT:</span>
              <button
                onClick={nextSlide}
                className="font-bold text-[#0A0A0A] hover:underline transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>{carouselProjects[(currentIndex + 1) % total].title}</span>
                <ArrowRight className="w-3 h-3 text-[#0A0A0A]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
