'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './Navigation';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import ContactSection from './sections/ContactSection';

function Divider() {
  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
      <div className="h-px bg-dark-text/6" />
    </div>
  );
}

export default function ProfessionalPortfolio() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-dark-text">
      <Navigation isScrolled={isScrolled} />

      <AnimatePresence mode="wait">
        <div>
          <HeroSection />
          <Divider />
          <AboutSection />
          <Divider />
          <ServicesSection />
          {/* Pas de divider avant/après ProjectsSection — fond noir, contraste naturel */}
          <ProjectsSection />
          <Divider />
          <ExperienceSection />
          <Divider />
          <ContactSection />
        </div>
      </AnimatePresence>
    </div>
  );
}
