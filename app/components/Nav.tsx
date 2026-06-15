'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const links = [
  { label: 'À propos', href: '#about' },
  { label: 'Projets',  href: '#projects' },
  { label: 'Contact',  href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-ink/95 backdrop-blur-md border-b border-white/[0.06]' : ''
      }`}
      initial={{ y: -64 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display text-2xl text-white tracking-widest hover:text-forest-bright transition-colors duration-200"
        >
          TA
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="relative font-body text-[11px] text-white/40 uppercase tracking-[0.2em] hover:text-white transition-colors duration-200 group"
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-forest-bright group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </nav>

        {/* CTA desktop */}
        <button
          onClick={() => scrollTo('#contact')}
          className="hidden md:block font-body text-[11px] text-white uppercase tracking-[0.2em] px-5 py-2.5 border border-white/15 hover:bg-forest hover:border-forest transition-all duration-300"
        >
          Me contacter
        </button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white/60 hover:text-white p-1 transition-colors"
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
        <div className="md:hidden bg-ink border-t border-white/[0.06] px-6 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="font-body text-[11px] text-white/50 uppercase tracking-[0.2em] py-3 text-left hover:text-white transition-colors"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#contact')}
            className="mt-2 font-body text-[11px] text-white uppercase tracking-[0.2em] px-5 py-3 bg-forest hover:bg-forest-mid transition-colors text-left"
          >
            Me contacter
          </button>
        </div>
      )}
    </motion.header>
  );
}
