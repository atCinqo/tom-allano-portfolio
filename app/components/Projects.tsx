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

        {/* Image carrée */}
        <div className="relative aspect-square overflow-hidden bg-white/[0.03]">
          <img
            src={p.cover}
            alt={p.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          />
          {/* Overlay au hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-400" />
          {/* "Voir →" centré au hover */}
          <span className="absolute inset-0 flex items-center justify-center font-body text-[11px] text-white uppercase tracking-[0.25em] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Voir →
          </span>
        </div>

        {/* Infos sous l'image */}
        <div className="pt-4">
          <p className="font-body text-[9px] text-white/25 uppercase tracking-[0.2em] mb-1.5">{p.category} — {p.year}</p>
          <h3 className="font-display text-white leading-none group-hover:text-[#16a34a] transition-colors duration-200" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)' }}>
            {p.title}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<Cat>('Tout');
  const filtered = filter === 'Tout' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="bg-[#111111] py-28 sm:py-40 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-white" style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}>
            Projets
          </h2>

          {/* Filtres */}
          <div className="flex flex-wrap gap-2">
            {CATS.map(c => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`font-body text-[10px] uppercase tracking-[0.2em] px-4 py-2 transition-all duration-200 ${
                  filter === c
                    ? 'bg-[#14532d] text-white'
                    : 'text-white/30 hover:text-white/70'
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
