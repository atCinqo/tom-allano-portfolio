'use client';

import { motion } from 'framer-motion';

const tools = [
  'Adobe Premiere Pro', 'After Effects', 'Photoshop', 'Illustrator',
  'Figma', 'Canva', 'DaVinci Resolve', 'CapCut',
  'Meta Business Suite', 'Instagram', 'TikTok', 'Notion',
];

const stats = [
  { value: '5+',    label: "Ans d'expérience" },
  { value: '150+',  label: 'Projets livrés'    },
  { value: '500K+', label: 'Impressions'        },
];

const fade = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.12 } }),
};

export default function About() {
  return (
    <section id="about" className="py-28 sm:py-40 bg-ink border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <motion.div
          className="flex items-end gap-5 mb-16 sm:mb-20"
          initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fade}
        >
          <span
            className="font-display text-white/[0.05] leading-none select-none"
            style={{ fontSize: 'clamp(5rem, 12vw, 9rem)' }}
          >
            01
          </span>
          <div className="pb-2">
            <p className="font-body text-[10px] text-white/20 uppercase tracking-[0.25em] mb-1">À propos</p>
            <h2 className="font-display text-white" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Qui suis-je ?
            </h2>
          </div>
        </motion.div>

        {/* Bio + outils */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-16 sm:mb-20">

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fade}
          >
            <p className="font-body text-base text-white/55 leading-[1.85] mb-6">
              Créateur de contenu digital spécialisé dans l&apos;univers du sport. Je combine
              community management, production vidéo et design graphique pour donner de la
              visibilité aux clubs, associations et marques.
            </p>
            <p className="font-body text-base text-white/30 leading-[1.85]">
              Mon approche : comprendre ton univers, tes objectifs, et créer du contenu
              qui résonne — visuellement et émotionnellement.
            </p>

            <div className="mt-10 flex flex-col gap-3">
              {[
                { label: 'Rôle',        value: 'Community Manager · Vidéo · Design' },
                { label: 'Statut',      value: 'Disponible pour projets' },
                { label: 'Localisation', value: 'France'                 },
              ].map((item) => (
                <div key={item.label} className="flex gap-6 py-3 border-b border-white/[0.05]">
                  <span className="font-body text-[10px] text-white/20 uppercase tracking-[0.2em] w-28 flex-shrink-0 pt-0.5">
                    {item.label}
                  </span>
                  <span className="font-body text-sm text-white/50">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fade}
          >
            <p className="font-body text-[10px] text-white/20 uppercase tracking-[0.25em] mb-6">
              Outils &amp; compétences
            </p>
            <div className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <span
                  key={t}
                  className="font-body text-[11px] text-white/35 uppercase tracking-wider px-3 py-1.5 border border-white/[0.08] hover:border-forest-bright hover:text-forest-bright transition-all duration-200 cursor-default"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-6 pt-10 border-t border-white/[0.06]"
          initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3} variants={fade}
        >
          {stats.map((s) => (
            <div key={s.label} className="group">
              <div className="w-4 h-px bg-white/10 mb-4 group-hover:w-10 group-hover:bg-forest-bright transition-all duration-300" />
              <p className="font-display text-white mb-1" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                {s.value}
              </p>
              <p className="font-body text-[10px] text-white/25 uppercase tracking-[0.2em]">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
