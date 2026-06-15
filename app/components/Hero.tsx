'use client';

import { motion } from 'framer-motion';

const tags = ['Community Management', 'Production Vidéo', 'Design Graphique'];

export default function Hero() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative min-h-screen bg-ink flex flex-col overflow-hidden">

      {/* Vertical grid lines */}
      <div className="absolute inset-0 flex pointer-events-none" aria-hidden>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="flex-1 border-r border-white/[0.025]" />
        ))}
      </div>

      {/* Giant TA watermark */}
      <div
        className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none"
        aria-hidden
      >
        <motion.span
          className="font-display text-white select-none leading-none"
          style={{ fontSize: 'clamp(12rem, 38vw, 36rem)', opacity: 0 }}
          animate={{ opacity: 0.025, x: 0 }}
          initial={{ opacity: 0, x: 60 }}
          transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1] }}
        >
          TA
        </motion.span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1 max-w-7xl mx-auto w-full px-6 lg:px-10 pt-32 pb-14">

        {/* Top label */}
        <motion.p
          className="font-body text-[10px] text-white/20 uppercase tracking-[0.35em]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Portfolio — Créateur de contenu digital
        </motion.p>

        {/* Name */}
        <motion.div
          className="mt-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
        >
          <h1
            className="font-display text-white leading-[0.88] mb-8"
            style={{ fontSize: 'clamp(4.5rem, 14vw, 14rem)' }}
          >
            TOM<br />ALLANO
          </h1>

          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-10">
            {tags.map((t) => (
              <span key={t} className="font-body text-[11px] text-white/25 uppercase tracking-[0.2em]">
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col xs:flex-row gap-3 mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <button
            onClick={() => scrollTo('#projects')}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-forest hover:bg-forest-mid font-body text-[11px] text-white uppercase tracking-[0.2em] transition-all duration-300"
          >
            Voir mes projets
            <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="inline-flex items-center gap-3 px-8 py-4 border border-white/15 hover:border-forest-bright font-body text-[11px] text-white/60 hover:text-forest-bright uppercase tracking-[0.2em] transition-all duration-300"
          >
            Me contacter
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <motion.div
            className="w-px h-10 bg-white/15"
            animate={{ scaleY: [1, 0.25, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ originY: 0 }}
          />
          <span className="font-body text-[9px] text-white/18 uppercase tracking-[0.35em]">Scroll</span>
        </motion.div>
      </div>
    </section>
  );
}
