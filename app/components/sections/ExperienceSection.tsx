'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    num: '01',
    period: '2022 — Présent',
    title: 'Community Manager Digital',
    tags: 'Instagram · TikTok · YouTube · Stratégie Sociale · Engagement',
    missions: [
      'Gestion de communautés sportives sur les réseaux sociaux',
      'Création et planification de contenus sur mesure',
      "Animation et développement de l'engagement d'audience",
    ],
  },
  {
    num: '02',
    period: '2021 — Présent',
    title: 'Producteur Vidéo',
    tags: 'Adobe Premiere · After Effects · Captation · Storyboard',
    missions: [
      'Captation et montage vidéo pour clubs et événements sportifs',
      'Production de contenus courts pour Instagram, TikTok et YouTube',
      'Réalisation de vidéos promotionnelles et de récaps',
    ],
  },
  {
    num: '03',
    period: '2020 — Présent',
    title: 'Designer Graphique',
    tags: 'Figma · Photoshop · Illustrator · Branding',
    missions: [
      "Conception d'affiches et supports visuels pour clubs sportifs",
      "Création d'identités visuelles cohérentes et mémorables",
      'Adaptation de designs pour tous les formats print et digital',
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-24 sm:py-32 bg-white">
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
            <p className="font-body text-xs text-dark-text/30 uppercase tracking-widest mb-5">04 — Expérience</p>
            <h2 className="font-display text-dark-text leading-none" style={{ fontSize: 'clamp(2.8rem, 8vw, 6rem)' }}>
              Mon parcours
            </h2>
          </motion.div>

          {/* Timeline */}
          <div>
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                className="group grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12 py-10 sm:py-12 border-t border-dark-text/8 last:border-b"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.08 } } }}
              >
                {/* Colonne gauche — période */}
                <div className="md:col-span-1">
                  <p className="font-body text-xs text-dark-text/30 uppercase tracking-widest mb-1">{exp.num}</p>
                  <p className="font-body text-sm text-dark-text/55">{exp.period}</p>
                </div>

                {/* Colonne droite — contenu */}
                <div className="md:col-span-3">
                  <h3
                    className="font-display text-dark-text leading-none mb-3 group-hover:text-accent-orange transition-colors duration-300"
                    style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)' }}
                  >
                    {exp.title}
                  </h3>
                  <p className="font-body text-xs text-accent-green uppercase tracking-widest mb-6">{exp.tags}</p>
                  <ul className="space-y-2.5">
                    {exp.missions.map((m, j) => (
                      <li key={j} className="flex items-start gap-4 font-body text-sm text-dark-text/55 leading-relaxed">
                        <span className="text-dark-text/25 flex-shrink-0 mt-0.5">—</span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
