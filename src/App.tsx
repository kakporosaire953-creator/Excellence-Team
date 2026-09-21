import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { PageView } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/views/HomeView';
import { WorkView } from './components/views/WorkView';
import { ServicesView } from './components/views/ServicesView';
import { AboutView } from './components/views/AboutView';
import { TeamView } from './components/views/TeamView';
import { JournalView } from './components/views/JournalView';
import { ContactView } from './components/views/ContactView';
import { PageTransition } from './components/motion/MotionPrimitives';

export default function App() {
  // Derive initial view strictly from URL pathname (or fallback to hash)
  const getViewFromLocation = (): PageView => {
    if (typeof window === 'undefined') return 'home';
    const path = window.location.pathname.toLowerCase().replace(/\/$/, '');
    if (path === '/works' || path === '/work') return 'work';
    if (path === '/services') return 'services';
    if (path === '/about') return 'about';
    if (path === '/team') return 'team';
    if (path === '/journal') return 'journal';
    if (path === '/contact') return 'contact';

    // Secondary fallback to hash if any
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (hash === 'works' || hash === 'work') return 'work';
    if (hash === 'services') return 'services';
    if (hash === 'about') return 'about';
    if (hash === 'journal') return 'journal';
    if (hash === 'contact') return 'contact';

    // Default STRICTLY to home on '/'
    return 'home';
  };

  const [currentView, setCurrentView] = useState<PageView>(getViewFromLocation);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentView(getViewFromLocation());
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const handleNavigate = (view: PageView) => {
    setCurrentView(view);
    let targetPath = '/';
    if (view === 'work') targetPath = '/works';
    else if (view === 'services') targetPath = '/services';
    else if (view === 'about') targetPath = '/about';
    else if (view === 'team') targetPath = '/about';
    else if (view === 'journal') targetPath = '/journal';
    else if (view === 'contact') targetPath = '/contact';

    if (window.location.pathname !== targetPath) {
      window.history.pushState({ view }, '', targetPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F6] text-[#0A0A0A] font-inter selection:bg-[#FF4A16] selection:text-white">
      {/* Global Fixed Navigation with scroll compaction */}
      <Navbar currentView={currentView} onNavigate={handleNavigate} />

      {/* Main View Router with fluid page transitions */}
      <main className="flex-1 w-full flex flex-col">
        <AnimatePresence mode="wait">
          <PageTransition key={currentView} viewKey={currentView} className="flex-1 w-full">
            {currentView === 'home' && <HomeView onNavigate={handleNavigate} />}
            {currentView === 'work' && <WorkView onNavigate={handleNavigate} />}
            {currentView === 'services' && <ServicesView onNavigate={handleNavigate} />}
            {currentView === 'about' && <AboutView onNavigate={handleNavigate} />}
            {currentView === 'team' && <TeamView onNavigate={handleNavigate} />}
            {currentView === 'journal' && <JournalView onNavigate={handleNavigate} />}
            {currentView === 'contact' && <ContactView onNavigate={handleNavigate} />}
          </PageTransition>
        </AnimatePresence>
      </main>

      {/* Global Architectural Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
