'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled ? 'bg-black/95 backdrop-blur-sm border-b border-white/[0.07]' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">

        <Link
          href="/"
          className="font-display text-xl text-white tracking-[0.15em] hover:text-[#16a34a] transition-colors duration-200"
        >
          TA
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollTo('projects')}
            className="group font-body text-[11px] text-white/40 uppercase tracking-[0.2em] hover:text-white transition-colors duration-200 relative"
          >
            Projets
            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#16a34a] group-hover:w-full transition-all duration-300" />
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="font-body text-[11px] text-white uppercase tracking-[0.2em] px-5 py-2.5 border border-white/20 hover:bg-[#14532d] hover:border-[#14532d] transition-all duration-300"
          >
            Me contacter
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white/50 hover:text-white p-1 transition-colors"
          aria-label="Menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/[0.07] px-6 py-5 flex flex-col gap-4">
          <button onClick={() => scrollTo('projects')} className="font-body text-[11px] text-white/40 uppercase tracking-[0.2em] text-left hover:text-white transition-colors">
            Projets
          </button>
          <button onClick={() => scrollTo('contact')} className="font-body text-[11px] text-white uppercase tracking-[0.2em] text-left hover:text-[#16a34a] transition-colors">
            Me contacter
          </button>
        </div>
      )}
    </motion.header>
  );
}
