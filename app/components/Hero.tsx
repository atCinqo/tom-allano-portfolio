'use client';

import { motion } from 'framer-motion';

const ease = [0.4, 0, 0.2, 1] as const;

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#111111] flex flex-col justify-end overflow-hidden">

      {/* Vidéo plein écran — remplace /hero.mp4 par ta vidéo */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay : haut transparent → bas sombre pour lisibilité du texte */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/50 to-[#111111]/10" />

      {/* Contenu */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 lg:px-8 pb-16 sm:pb-24">

        <motion.p
          className="font-body text-[10px] text-white/40 uppercase tracking-[0.35em] mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          Créateur de contenu digital
        </motion.p>

        <motion.h1
          className="font-display text-white leading-[0.88] mb-10"
          style={{ fontSize: 'clamp(4.5rem, 14vw, 13rem)' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.1 }}
        >
          TOM<br />ALLANO
        </motion.h1>

        <motion.div
          className="flex flex-col xs:flex-row gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.4 }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#14532d] hover:bg-[#166534] font-body text-[11px] text-white uppercase tracking-[0.2em] transition-all duration-300"
          >
            Voir mes projets
            <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 border border-white/20 hover:border-white/50 font-body text-[11px] text-white/50 hover:text-white uppercase tracking-[0.2em] transition-all duration-300"
          >
            Me contacter
          </a>
        </motion.div>
      </div>
    </section>
  );
}
