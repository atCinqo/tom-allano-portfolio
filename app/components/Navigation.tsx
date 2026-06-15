'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface NavigationProps {
  isScrolled: boolean;
}

export default function Navigation({ isScrolled }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { label: 'Accueil', id: 'hero' },
    { label: 'À propos', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Projets', id: 'projects' },
    { label: 'Expérience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-40% 0px -55% 0px' }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const isHeroSection = activeSection === 'hero';

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isHeroSection
            ? 'bg-dark-text/90 backdrop-blur-md'
            : 'bg-white/96 backdrop-blur-md'
          : 'bg-transparent'
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-18">
          {/* Logo */}
          <motion.button
            onClick={() => handleScroll('hero')}
            className={`font-display text-xl sm:text-2xl tracking-widest transition-colors duration-200 hover:text-accent-green ${
              isHeroSection ? 'text-white' : 'text-dark-text'
            }`}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
          >
            TA
          </motion.button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {sections.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => handleScroll(section.id)}
                  className={`font-body text-[10px] uppercase tracking-widest font-medium transition-colors duration-200 relative ${
                    isHeroSection
                      ? isActive ? 'text-accent-green' : 'text-white/50 hover:text-accent-green'
                      : isActive ? 'text-accent-green' : 'text-dark-text/45 hover:text-accent-green'
                  }`}
                >
                  {section.label}
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-px bg-accent-green"
                      layoutId="activeNav"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-colors duration-200 hover:text-accent-orange p-1 ${
              isHeroSection ? 'text-white/70' : 'text-dark-text'
            }`}
            aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                animate={{ d: isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16' }}
                transition={{ duration: 0.2 }}
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden overflow-hidden bg-white"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="py-3 px-1">
                {sections.map((section) => {
                  const isActive = activeSection === section.id;
                  return (
                    <button
                      key={section.id}
                      onClick={() => handleScroll(section.id)}
                      className={`block w-full text-left px-4 py-3.5 font-body text-[10px] uppercase tracking-widest font-medium transition-colors duration-200 ${
                        isActive ? 'text-accent-green' : 'text-dark-text/55 hover:text-accent-green'
                      }`}
                    >
                      {section.label}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
