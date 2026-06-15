'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { projects, type Project } from '../../data/projects';

type Cat = 'Tout' | 'Community' | 'Vidéo' | 'Design';
const CATS: Cat[] = ['Tout', 'Community', 'Vidéo', 'Design'];

function Card({ p, index }: { p: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
    >
      <Link href={`/projets/${p.slug}`} className="group block">

        {/* Image — carré uniforme */}
        <div className="relative aspect-square overflow-hidden bg-white/[0.04]">
          <img
            src={p.cover}
            alt={p.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />

          {/* Overlay permanent */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

          {/* Ligne verte gauche */}
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#16a34a] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />

          {/* Category */}
          <span className="absolute top-4 left-5 font-body text-[9px] text-white/30 uppercase tracking-[0.2em] group-hover:text-[#16a34a] transition-colors duration-300">
            {p.category}
          </span>

          {/* Année */}
          <span className="absolute top-4 right-5 font-body text-[9px] text-white/15 uppercase tracking-[0.2em]">
            {p.year}
          </span>

          {/* Voir → au hover */}
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-body text-[10px] text-white/0 group-hover:text-white/70 uppercase tracking-[0.25em] transition-all duration-300 group-hover:-translate-y-1/2">
            Voir →
          </span>
        </div>

        {/* Titre sous la carte */}
        <div className="pt-4">
          <h3 className="font-display text-white leading-none mb-1.5 group-hover:text-[#16a34a] transition-colors duration-200" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)' }}>
            {p.title}
          </h3>
          <p className="font-body text-[10px] text-white/25 uppercase tracking-[0.15em]">{p.client}</p>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<Cat>('Tout');
  const filtered = filter === 'Tout' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="bg-black border-t border-white/[0.06] py-24 sm:py-36 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-6 h-px bg-[#16a34a]" />
              <span className="font-body text-[10px] text-white/25 uppercase tracking-[0.3em]">Réalisations</span>
            </div>
            <h2 className="font-display text-white" style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}>
              Projets
            </h2>
          </div>

          {/* Filtres */}
          <div className="flex flex-wrap gap-2">
            {CATS.map(c => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`font-body text-[10px] uppercase tracking-[0.2em] px-4 py-2 border transition-all duration-200 ${
                  filter === c
                    ? 'bg-[#14532d] border-[#14532d] text-white'
                    : 'border-white/10 text-white/30 hover:border-white/30 hover:text-white/60'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grille 3 colonnes uniforme */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filtered.map((p, i) => (
            <Card key={p.slug} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
