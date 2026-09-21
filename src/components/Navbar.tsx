import React, { useState, useEffect } from 'react';
import { PageView } from '../types';
import { ETLogo } from './ETLogo';
import { MOTION_EASE } from './motion/MotionPrimitives';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

interface NavbarProps {
  currentView: PageView;
  onNavigate: (view: PageView) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menu items strictly matching specification:
  // WORK (/works), SERVICES (/services), ABOUT (/about), JOURNAL (/journal), and START A PROJECT (/contact)
  const navItems: { id: PageView; label: string; micro: string; path: string }[] = [
    { id: 'work', label: 'WORK', micro: '01', path: '/works' },
    { id: 'services', label: 'SERVICES', micro: '02', path: '/services' },
    { id: 'about', label: 'ABOUT', micro: '03', path: '/about' },
    { id: 'journal', label: 'JOURNAL', micro: '04', path: '/journal' },
  ];

  const handleNavClick = (view: PageView) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        id="main-navigation-bar"
        initial={shouldReduceMotion ? { opacity: 1 } : { y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: MOTION_EASE }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out specular-top gpu-glass will-change-[backdrop-filter,transform] transform-gpu ${
          isScrolled
            ? 'glass-floating border-b border-white/80 py-2.5 sm:py-3 shadow-[0_12px_32px_-10px_rgba(10,10,10,0.08)] text-[#0A0A0A]'
            : 'bg-white/40 backdrop-blur-md border-b border-white/40 py-4 sm:py-5 text-[#0A0A0A]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo Lockup with smooth compaction */}
          <a
            id="nav-logo-button"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4A16] transition-transform duration-200"
            aria-label="Excellence Team Accueil"
          >
            <ETLogo
              variant="horizontal"
              size={isScrolled ? 'sm' : 'md'}
              theme="light"
            />
          </a>

          {/* Desktop Navigation Links: CALM, LEGIBLE, ELEGANT with micro-interactions */}
          <nav className="hidden md:flex items-center gap-1.5 p-1 glass-panel rounded-full border border-white/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] gpu-glass will-change-[backdrop-filter,transform] transform-gpu">
            {navItems.map((item) => {
              const isActive = currentView === item.id;
              return (
                <a
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={`group relative text-xs tracking-[0.12em] font-medium px-4 py-1.5 transition-all duration-200 cursor-pointer flex items-center gap-1.5 rounded-full ${
                    isActive
                      ? 'bg-white/95 text-[#0A0A0A] font-bold shadow-xs border border-white/90'
                      : 'text-[#555555] hover:text-[#0A0A0A] hover:bg-white/50'
                  }`}
                >
                  <span
                    className={`text-[9px] font-mono transition-transform duration-150 inline-block group-hover:translate-x-0.5 ${
                      isActive
                        ? 'text-[#FF4A16]'
                        : 'text-[#888888] group-hover:text-[#FF4A16]'
                    }`}
                  >
                    {item.micro}/
                  </span>
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              id="header-cta-start-project"
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
              className="hidden sm:inline-flex items-center gap-2 bg-[#FF4A16] hover:bg-[#E03F0E] text-white px-5 py-2.5 rounded-full font-bold text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer group active:scale-[0.98] shadow-[0_4px_16px_rgba(255,74,22,0.3),inset_0_1px_1px_rgba(255,255,255,0.5)] border border-[#FF4A16]"
            >
              <span>START A PROJECT</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              id="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#0A0A0A] hover:text-[#FF4A16] focus:outline-none rounded-full glass-secondary border border-white/80"
              aria-label="Ouvrir le menu de navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="fixed inset-0 z-40 glass-deep text-[#0A0A0A] pt-24 px-6 pb-8 flex flex-col justify-between overflow-y-auto md:hidden animate-in fade-in duration-150"
        >
          <div className="flex flex-col space-y-4">
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#666666] border-b border-[#0A0A0A]/10 pb-2 flex items-center justify-between">
              <span>EXCELLENCE TEAM / 2026</span>
              <span className="text-[#FF4A16] font-bold">11 TALENTS</span>
            </div>
            {navItems.map((item) => {
              const isActive = currentView === item.id;
              return (
                <a
                  key={item.id}
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={`flex items-center justify-between text-left py-3.5 px-4 rounded-2xl border transition-all text-base font-bold uppercase tracking-wider cursor-pointer ${
                    isActive
                      ? 'bg-white/90 border-[#FF4A16]/40 text-[#FF4A16] shadow-xs'
                      : 'glass-card border-white/60 text-[#0A0A0A] hover:text-[#FF4A16]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#FF4A16]">{item.micro}/</span>
                    <span>{item.label}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#666666]" />
                </a>
              );
            })}
          </div>

          <div className="pt-6 border-t border-[#0A0A0A]/10 space-y-4">
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
              className="w-full py-4 bg-[#FF4A16] text-white font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 rounded-full shadow-[0_4px_16px_rgba(255,74,22,0.3)]"
            >
              <span>START A PROJECT</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <div className="text-center text-[10px] font-mono text-[#666666]">
              COTONOU • 11 TALENTS • DISCIPLINE FIRST
            </div>
          </div>
        </div>
      )}
    </>
  );
};
