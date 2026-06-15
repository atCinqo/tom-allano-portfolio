'use client';

import { motion } from 'framer-motion';

const projects = [
  { id: 1, title: 'Campagne Été 2024',  category: 'Community',  img: 'https://picsum.photos/seed/p-sport-001/600/900' },
  { id: 2, title: 'Réels Événement',    category: 'Vidéo',      img: 'https://picsum.photos/seed/p-sport-002/600/900' },
  { id: 3, title: 'Affiche de Match',   category: 'Design',     img: 'https://picsum.photos/seed/p-sport-003/600/900' },
  { id: 4, title: 'Portrait Joueur',    category: 'Affiche',    img: 'https://picsum.photos/seed/p-sport-004/600/900' },
  { id: 5, title: 'Recap Tournoi',      category: 'Montage',    img: 'https://picsum.photos/seed/p-sport-005/600/900' },
  { id: 6, title: 'Identité Visuelle',  category: 'Graphisme',  img: 'https://picsum.photos/seed/p-sport-006/600/900' },
  { id: 7, title: 'Campagne Visuelle',  category: 'Design',     img: 'https://picsum.photos/seed/p-sport-007/600/900' },
  { id: 8, title: 'Gala Sportif',       category: 'Captation',  img: 'https://picsum.photos/seed/p-sport-008/600/900' },
  { id: 9, title: 'Growth Digital',     category: 'Community',  img: 'https://picsum.photos/seed/p-sport-009/600/900' },
];

function Card({ project, index }: { project: (typeof projects)[0]; index: number }) {
  return (
    <motion.div
      className="group relative overflow-hidden cursor-pointer aspect-[2/3]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08 }}
    >
      {/* Image */}
      <img
        src={project.img}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
      />

      {/* Permanent bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

      {/* Hover dark overlay */}
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Orange vertical bar — scales up from bottom on hover */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent-orange z-20 origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />

      {/* Number */}
      <span className="absolute top-5 left-5 z-10 font-body text-xs text-white/25 uppercase tracking-widest group-hover:text-white/60 transition-colors duration-300">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Default: category + title at bottom */}
      <div className="absolute bottom-6 left-6 right-6 z-10 group-hover:opacity-0 transition-opacity duration-150">
        <p className="font-body text-xs text-white/40 uppercase tracking-widest mb-1.5">{project.category}</p>
        <h3 className="font-display text-white leading-none" style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)' }}>
          {project.title}
        </h3>
      </div>

      {/* Hover reveal — slides up */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pl-8 pr-6 pb-7 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <p className="font-body text-xs text-accent-orange uppercase tracking-widest mb-2">{project.category}</p>
        <h3 className="font-display text-white leading-none mb-4" style={{ fontSize: 'clamp(1.2rem, 2.4vw, 1.7rem)' }}>
          {project.title}
        </h3>
        <span className="font-body text-xs text-white/35 uppercase tracking-widest">Voir →</span>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full bg-dark-text pt-24 sm:pt-32 pb-24 sm:pb-32">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12 sm:mb-16">
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <p className="font-body text-xs text-white/30 uppercase tracking-widest mb-5">03 — Réalisations</p>
            <h2 className="font-display text-white leading-none" style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}>
              Réalisations
            </h2>
          </div>
          <p className="font-body text-[10px] text-white/22 uppercase tracking-widest pb-1">
            {projects.length} projets
          </p>
        </motion.div>
      </div>

      {/* Grille 3 colonnes */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <Card key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-12 sm:mt-16">
        <motion.a
          href="#contact"
          className="inline-block px-8 py-4 bg-accent-orange text-white font-body text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-dark-text transition-all duration-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Démarrer un projet
        </motion.a>
      </div>
    </section>
  );
}
