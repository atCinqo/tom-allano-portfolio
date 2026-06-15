'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Cat = 'Tout' | 'Community' | 'Vidéo' | 'Design';

interface Project {
  id: number;
  title: string;
  category: Exclude<Cat, 'Tout'>;
  client: string;
  year: string;
  cover: string;
  description: string;
  tools: string[];
  span: number;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Campagne Été 2024',
    category: 'Community',
    client: 'Club Sportif',
    year: '2024',
    cover: 'https://picsum.photos/seed/ta-p01/700/1000',
    description:
      "Stratégie de contenu complète pour la campagne estivale d'un club sportif. Conception des visuels, planification éditoriale et animation des réseaux sociaux sur 3 mois. Résultat : +40 % d'engagement et +800 abonnés.",
    tools: ['Instagram', 'Photoshop', 'Canva', 'Meta Ads'],
    span: 2,
  },
  {
    id: 2,
    title: 'Récap Tournoi',
    category: 'Vidéo',
    client: 'Association Sportive',
    year: '2024',
    cover: 'https://picsum.photos/seed/ta-p02/700/560',
    description:
      "Montage dynamique du récapitulatif d'un tournoi régional. Captation sur 2 jours, montage et diffusion sous 24h. Format optimisé pour Instagram Réels et TikTok.",
    tools: ['Premiere Pro', 'After Effects', 'DaVinci Resolve'],
    span: 1,
  },
  {
    id: 3,
    title: 'Identité Visuelle',
    category: 'Design',
    client: 'Marque Sportive',
    year: '2023',
    cover: 'https://picsum.photos/seed/ta-p03/700/720',
    description:
      "Création d'une identité visuelle complète : logo, charte graphique, templates réseaux sociaux et supports print. Déclinaison sur tous les formats.",
    tools: ['Illustrator', 'Photoshop', 'Figma'],
    span: 1,
  },
  {
    id: 4,
    title: 'Réels Événement',
    category: 'Vidéo',
    client: 'Gala Sportif',
    year: '2024',
    cover: 'https://picsum.photos/seed/ta-p04/700/1000',
    description:
      "Production de 8 Réels pour couvrir un gala sportif annuel. Format vertical optimisé, musique licenciée, sous-titres animés. 120 K vues cumulées en 72h.",
    tools: ['Premiere Pro', 'CapCut', 'After Effects'],
    span: 2,
  },
  {
    id: 5,
    title: 'Portraits Joueurs',
    category: 'Design',
    client: 'Club Football',
    year: '2024',
    cover: 'https://picsum.photos/seed/ta-p05/700/560',
    description:
      "Série de 22 portraits graphiques pour valoriser les joueurs d'un club de football. Retraitement photo + cohérence visuelle avec la charte du club.",
    tools: ['Photoshop', 'Lightroom'],
    span: 1,
  },
  {
    id: 6,
    title: 'Growth Digital',
    category: 'Community',
    client: 'Club Basket',
    year: '2023',
    cover: 'https://picsum.photos/seed/ta-p06/700/620',
    description:
      "Stratégie de croissance sur 6 mois : de 800 à 4 200 abonnés. Analyse des données, optimisation des horaires, création de formats viraux.",
    tools: ['Meta Business', 'Canva', 'Later', 'Notion'],
    span: 1,
  },
  {
    id: 7,
    title: 'Affiches Match',
    category: 'Design',
    client: 'Club Rugby',
    year: '2024',
    cover: 'https://picsum.photos/seed/ta-p07/700/940',
    description:
      "Suite de 15 affiches pour les matchs à domicile d'une saison. Design impactant adapté aux formats print A2/A3 et digital 1080×1080.",
    tools: ['Photoshop', 'Illustrator'],
    span: 2,
  },
  {
    id: 8,
    title: 'Film Saison',
    category: 'Vidéo',
    client: 'Club Handball',
    year: '2023',
    cover: 'https://picsum.photos/seed/ta-p08/700/560',
    description:
      "Film récapitulatif de la saison 2022-2023. 4 minutes de montage cinématique avec étalonnage couleur soigné et musique orchestrale.",
    tools: ['Premiere Pro', 'After Effects', 'Audition'],
    span: 1,
  },
  {
    id: 9,
    title: 'Stratégie TikTok',
    category: 'Community',
    client: 'Club Volley',
    year: '2024',
    cover: 'https://picsum.photos/seed/ta-p09/700/950',
    description:
      "Lancement et gestion du compte TikTok d'un club de volley. Formats originaux adaptés aux tendances : 0 à 12 K abonnés en 4 mois.",
    tools: ['TikTok', 'CapCut', 'Canva'],
    span: 1,
  },
];

/* ── Card ── */
function Card({ p, onClick }: { p: Project; onClick: () => void }) {
  return (
    <motion.div
      className="relative overflow-hidden bg-surface-2 cursor-pointer group"
      style={{ gridRow: `span ${p.span}` }}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55 }}
    >
      <img
        src={p.cover}
        alt={p.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

      {/* Hover dark overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

      {/* Green left border */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-forest-bright origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out z-20" />

      {/* Category + year */}
      <div className="absolute top-5 left-6 right-6 z-10 flex justify-between">
        <span className="font-body text-[9px] text-white/25 uppercase tracking-[0.2em] group-hover:text-white/50 transition-colors duration-300">
          {p.category}
        </span>
        <span className="font-body text-[9px] text-white/15 uppercase tracking-[0.2em]">{p.year}</span>
      </div>

      {/* Default title */}
      <div className="absolute bottom-6 left-6 right-6 z-10 group-hover:opacity-0 transition-opacity duration-150">
        <h3 className="font-display text-white leading-tight" style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.7rem)' }}>
          {p.title}
        </h3>
      </div>

      {/* Hover reveal */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <p className="font-body text-[9px] text-forest-bright uppercase tracking-[0.2em] mb-2">{p.client}</p>
        <h3 className="font-display text-white leading-tight mb-4" style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.7rem)' }}>
          {p.title}
        </h3>
        <span className="font-body text-[10px] text-white/35 uppercase tracking-[0.15em]">Voir le projet →</span>
      </div>
    </motion.div>
  );
}

/* ── Modal ── */
function Modal({ p, onClose }: { p: Project; onClose: () => void }) {
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', fn);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', fn);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <motion.div
        className="relative ml-auto w-full max-w-xl h-full bg-surface overflow-y-auto flex flex-col"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Cover image */}
        <div className="relative h-64 sm:h-80 flex-shrink-0 overflow-hidden">
          <img src={p.cover} alt={p.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface" />
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center bg-black/60 hover:bg-forest transition-colors duration-200 text-white z-10"
          aria-label="Fermer"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="p-8 sm:p-12 flex-1">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-body text-[10px] text-white/20 uppercase tracking-[0.2em]">{p.category}</span>
            <span className="text-white/10">·</span>
            <span className="font-body text-[10px] text-white/20 uppercase tracking-[0.2em]">{p.year}</span>
          </div>

          <h2 className="font-display text-white mb-2" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            {p.title}
          </h2>
          <p className="font-body text-sm text-forest-bright uppercase tracking-[0.15em] mb-8">{p.client}</p>

          <p className="font-body text-sm text-white/50 leading-[1.9] mb-10">{p.description}</p>

          <div className="h-px bg-white/[0.06] mb-8" />

          <p className="font-body text-[10px] text-white/20 uppercase tracking-[0.25em] mb-4">Outils utilisés</p>
          <div className="flex flex-wrap gap-2 mb-12">
            {p.tools.map((t) => (
              <span
                key={t}
                className="font-body text-[11px] text-white/35 uppercase tracking-wider px-3 py-1.5 border border-white/[0.08]"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="pt-8 border-t border-white/[0.06]">
            <button
              onClick={() => {
                onClose();
                setTimeout(() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }), 300);
              }}
              className="group inline-flex items-center gap-3 px-7 py-4 bg-forest hover:bg-forest-mid font-body text-[11px] text-white uppercase tracking-[0.2em] transition-all duration-300"
            >
              Démarrer un projet similaire
              <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Gallery ── */
export default function Gallery() {
  const [filter, setFilter] = useState<Cat>('Tout');
  const [active, setActive] = useState<Project | null>(null);

  const cats: Cat[] = ['Tout', 'Community', 'Vidéo', 'Design'];
  const filtered = filter === 'Tout' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  const close = useCallback(() => setActive(null), []);

  return (
    <>
      <section id="projects" className="py-28 sm:py-40 bg-ink border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mb-14">
            <motion.div
              className="flex items-end gap-5"
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.8 }}
            >
              <span
                className="font-display text-white/[0.05] leading-none select-none"
                style={{ fontSize: 'clamp(5rem, 12vw, 9rem)' }}
              >
                02
              </span>
              <div className="pb-2">
                <p className="font-body text-[10px] text-white/20 uppercase tracking-[0.25em] mb-1">Réalisations</p>
                <h2 className="font-display text-white" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                  Mes projets
                </h2>
              </div>
            </motion.div>

            {/* Filters */}
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            >
              {cats.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`font-body text-[10px] uppercase tracking-[0.2em] px-4 py-2 border transition-all duration-200 ${
                    filter === c
                      ? 'bg-forest border-forest text-white'
                      : 'border-white/10 text-white/30 hover:border-white/30 hover:text-white/60'
                  }`}
                >
                  {c}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Grid masonry 3 col */}
          <div
            className="grid grid-cols-2 md:grid-cols-3 gap-3"
            style={{ gridAutoRows: '260px' }}
          >
            {filtered.map((p) => (
              <Card key={p.id} p={p} onClick={() => setActive(p)} />
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {active && <Modal p={active} onClose={close} />}
      </AnimatePresence>
    </>
  );
}
