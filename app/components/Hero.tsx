'use client';

import { motion } from 'framer-motion';

const ease = [0.4, 0, 0.2, 1] as const;

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative min-h-screen bg-black flex flex-col justify-between overflow-hidden px-6 lg:px-8 pt-32 pb-12">

      {/* Subtle vertical lines */}
      <div className="absolute inset-0 flex pointer-events-none" aria-hidden>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex-1 border-r border-white/[0.025]" />
        ))}
      </div>

      {/* Top label */}
      <motion.div
        className="relative max-w-6xl mx-auto w-full flex items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span className="block w-6 h-px bg-[#16a34a]" />
        <span className="font-body text-[10px] text-white/30 uppercase tracking-[0.35em]">
          Portfolio 2024
        </span>
      </motion.div>

      {/* Name block */}
      <div className="relative max-w-6xl mx-auto w-full">
        <motion.h1
          className="font-display text-white leading-[0.85] mb-6"
          style={{ fontSize: 'clamp(5rem, 16vw, 15rem)' }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.05 }}
        >
          TOM<br />ALLANO
        </motion.h1>

        <motion.div
          className="flex flex-col xs:flex-row xs:items-center gap-4 xs:gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.3 }}
        >
          <p className="font-body text-sm text-white/35 uppercase tracking-[0.25em]">
            Créateur de contenu digital
          </p>
          <span className="hidden xs:block w-px h-4 bg-white/15" />
          <p className="font-body text-sm text-white/20 uppercase tracking-[0.2em]">
            Community · Vidéo · Design
          </p>
        </motion.div>
      </div>

      {/* Bottom row: CTAs + scroll */}
      <div className="relative max-w-6xl mx-auto w-full flex flex-col xs:flex-row items-start xs:items-end justify-between gap-8">
        <motion.div
          className="flex flex-col xs:flex-row gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.45 }}
        >
          <button
            onClick={() => scrollTo('projects')}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#14532d] hover:bg-[#166534] font-body text-[11px] text-white uppercase tracking-[0.2em] transition-all duration-300"
          >
            Voir mes projets
            <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center px-8 py-4 border border-white/20 hover:border-white/60 font-body text-[11px] text-white/50 hover:text-white uppercase tracking-[0.2em] transition-all duration-300"
          >
            Me contacter
          </button>
        </motion.div>

        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.span
            className="block w-px h-10 bg-white/15"
            animate={{ scaleY: [1, 0.2, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ originY: 0 }}
          />
          <span className="font-body text-[9px] text-white/15 uppercase tracking-[0.35em]">Scroll</span>
        </motion.div>
      </div>
    </section>
  );
}
