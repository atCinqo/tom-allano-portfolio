'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section
      id="hero"
      className="grain-overlay relative min-h-screen w-full flex flex-col overflow-hidden bg-dark-text"
    >
      {/* VIDEO — place ton fichier dans public/hero-video.mp4 */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          videoReady ? 'opacity-45' : 'opacity-0'
        }`}
        autoPlay
        muted
        loop
        playsInline
        onCanPlay={() => setVideoReady(true)}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* FALLBACK — lignes verticales + TA filigrane */}
      {!videoReady && (
        <>
          <div className="absolute inset-0 flex">
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                className="flex-1 border-r border-white/[0.04]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.04, duration: 0.6 }}
              />
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none">
            <motion.span
              className="font-display text-white select-none leading-none pr-4 md:pr-12"
              style={{ fontSize: 'clamp(12rem, 35vw, 30rem)', opacity: 0.025 }}
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 0.025 }}
              transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            >
              TA
            </motion.span>
          </div>
        </>
      )}

      {/* OVERLAY GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/85 pointer-events-none" />

      {/* CONTENU */}
      <div className="relative z-10 flex-1 flex flex-col max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-32 sm:pt-40 pb-16 sm:pb-20">

        {/* Tag */}
        <motion.p
          className="font-body text-[10px] sm:text-xs text-white/35 uppercase tracking-widest"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Community · Vidéo · Design
        </motion.p>

        {/* Titre central */}
        <motion.div
          className="flex-1 flex items-center py-16 sm:py-20 md:py-24"
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.15 }}
        >
          <h1
            className="font-display text-white leading-[0.88]"
            style={{ fontSize: 'clamp(3.2rem, 11vw, 11rem)' }}
          >
            Donnez<br />
            vie à<br />
            votre<br />
            histoire.
          </h1>
        </motion.div>

        {/* Bas de page */}
        <motion.div
          className="flex flex-col xs:flex-row xs:items-end xs:justify-between gap-8 sm:gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="flex flex-col xs:flex-row gap-3 flex-shrink-0">
            <motion.a
              href="#projects"
              className="px-8 py-4 bg-accent-orange text-white font-body text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-dark-text transition-all duration-300 text-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Voir les projets
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-4 border border-accent-green/70 text-accent-green font-body text-xs font-semibold uppercase tracking-widest hover:bg-accent-green hover:text-white hover:border-accent-green transition-all duration-300 text-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Me contacter
            </motion.a>
          </div>
        </motion.div>

        {/* Scroll */}
        <motion.div
          className="flex items-center gap-4 mt-14 sm:mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <motion.div
            className="w-px h-12 bg-white/20"
            animate={{ scaleY: [1, 0.35, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ originY: 0 }}
          />
          <span className="font-body text-[10px] text-white/22 uppercase tracking-widest">Scroll</span>
        </motion.div>
      </div>
    </section>
  );
}
