'use client';

import { motion } from 'framer-motion';

const info = [
  { label: 'Rôle',         value: 'Community Manager · Vidéo · Design' },
  { label: 'Statut',       value: 'Disponible pour projets' },
  { label: 'Localisation', value: 'France' },
  { label: 'Contact',      value: 'tomallano83@gmail.com' },
];

const stats = [
  { value: '500+', label: 'Projets créatifs' },
  { value: '150+', label: 'Clients satisfaits' },
  { value: '5 ans', label: "D'expérience" },
];

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } }}
        >
          {/* Numéro + Titre */}
          <motion.div
            className="mb-16 sm:mb-20"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
          >
            <p className="font-body text-xs text-dark-text/30 uppercase tracking-widest mb-5">01 — À propos</p>
            <h2 className="font-display text-dark-text leading-none" style={{ fontSize: 'clamp(2.8rem, 8vw, 6rem)' }}>
              Qui suis-je ?
            </h2>
          </motion.div>

          {/* Grille bio + info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-16 sm:mb-20">

            {/* Bio */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
            >
              <p className="font-body text-base text-dark-text/70 leading-relaxed mb-5 max-w-xl">
                Créateur de contenu digital spécialisé dans le sport. Je combine community management, production vidéo et design graphique pour donner de la visibilité aux clubs, associations et marques sportives.
              </p>
              <p className="font-body text-base text-dark-text/50 leading-relaxed max-w-xl">
                Mon approche : comprendre ton univers, tes objectifs, et créer du contenu qui résonne avec ton audience — visuellement et émotionnellement.
              </p>
            </motion.div>

            {/* Info grid */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1 } } }}
            >
              {info.map((item, i) => (
                <div key={i} className="flex items-baseline justify-between py-4 border-b border-dark-text/7 first:border-t">
                  <span className="font-body text-xs text-dark-text/35 uppercase tracking-widest flex-shrink-0 w-32">
                    {item.label}
                  </span>
                  <span className="font-body text-sm text-dark-text/75 text-right ml-4">{item.value}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-6 sm:gap-12 lg:gap-20 pt-10 sm:pt-14 border-t border-dark-text/8"
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } } }}
          >
            {stats.map((stat, i) => (
              <motion.div key={i} className="group" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <div className="w-5 h-px bg-dark-text/10 mb-4 group-hover:w-12 group-hover:bg-accent-green transition-all duration-300" />
                <p
                  className="font-display text-dark-text leading-none mb-2 group-hover:text-accent-orange transition-colors duration-300"
                  style={{ fontSize: 'clamp(2rem, 5.5vw, 4rem)' }}
                >
                  {stat.value}
                </p>
                <p className="font-body text-xs text-dark-text/35 uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
