'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const services = [
  {
    id: 'video',
    num: '01',
    title: 'Réalisation\nde Vidéo',
    tagline: 'De la captation au montage final',
    description:
      "Je produis des vidéos qui racontent votre histoire — événements sportifs, contenus réseaux sociaux, promos. Chaque image est pensée pour créer de l'impact et faire ressentir l'émotion.",
    items: [
      { label: "Captation d'événements", desc: 'Couverture complète de vos matchs, tournois et compétitions' },
      { label: 'Réels & Short Content', desc: 'Contenus courts et dynamiques pour Instagram, TikTok et YouTube' },
      { label: 'Vidéos promotionnelles', desc: 'Mettez en avant vos joueurs, votre club ou vos partenaires' },
      { label: 'Récaps & Highlights', desc: 'Résumés percutants de vos meilleurs moments sportifs' },
    ],
    img: 'https://picsum.photos/seed/videography-hero/800/600',
  },
  {
    id: 'affiche',
    num: '02',
    title: "Création\nd'Affiches",
    tagline: 'Visuels qui marquent les esprits',
    description:
      'Des visuels graphiques percutants pour valoriser vos événements, vos joueurs et votre club. Une identité visuelle cohérente, mémorable, et taillée pour les réseaux sociaux.',
    items: [
      { label: 'Affiches de match', desc: 'Annoncez vos rencontres avec style et impact visuel' },
      { label: 'Portraits de joueurs', desc: 'Valorisez vos athlètes avec des visuels professionnels' },
      { label: "Communication d'événements", desc: 'Suite graphique complète pour tournois, galas et cérémonies' },
      { label: 'Identité visuelle', desc: 'Logo, charte graphique et supports de communication pour votre club' },
    ],
    img: 'https://picsum.photos/seed/graphic-poster-sport/800/600',
  },
];

type Service = (typeof services)[0];

function ServiceModal({ service, onClose }: { service: Service; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="absolute inset-0 bg-dark-text/85 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        className="relative bg-white w-full max-w-xl max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Image header */}
        <div className="relative h-44 sm:h-56 overflow-hidden">
          <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-text/65" />
          <div className="absolute bottom-6 left-8">
            <p className="font-body text-[10px] text-white/45 uppercase tracking-widest mb-2">{service.num}</p>
            <h3 className="font-display text-white leading-none" style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)' }}>
              {service.title.replace('\n', ' ')}
            </h3>
          </div>
        </div>

        {/* Corps */}
        <div className="p-8 sm:p-12">
          <p className="font-body text-[10px] text-accent-orange uppercase tracking-widest mb-6">
            {service.tagline}
          </p>
          <p className="font-body text-sm sm:text-base text-dark-text/60 leading-loose mb-12">
            {service.description}
          </p>

          <div className="space-y-0">
            {service.items.map((item, i) => (
              <div key={i} className="relative py-6">
                <div className="absolute top-0 left-0 right-0 h-px bg-dark-text/7" />
                <div className="flex items-start gap-5">
                  <span className="font-body text-[10px] text-accent-orange font-medium mt-0.5 flex-shrink-0 w-5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="font-body text-sm font-semibold text-dark-text mb-1.5">{item.label}</p>
                    <p className="font-body text-xs text-dark-text/40 leading-loose">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="h-px bg-dark-text/7" />
          </div>

          <div className="mt-10 flex flex-col xs:flex-row gap-3">
            <motion.a
              href="#contact"
              onClick={onClose}
              className="px-7 py-4 bg-dark-text text-white font-body text-xs font-semibold uppercase tracking-widest hover:bg-accent-orange transition-colors duration-300 text-center flex-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Démarrer un projet
            </motion.a>
            <button
              onClick={onClose}
              className="px-7 py-4 bg-light-gray text-dark-text font-body text-xs font-semibold uppercase tracking-widest hover:bg-dark-text hover:text-white transition-colors duration-300"
            >
              Fermer
            </button>
          </div>
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white/70 hover:text-white bg-dark-text/30 hover:bg-dark-text/60 transition-colors"
          aria-label="Fermer"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<Service | null>(null);

  return (
    <>
      <section id="services" className="w-full py-32 sm:py-44 md:py-56 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.14 } } }}
          >
            {/* Header */}
            <motion.div
              className="mb-20 sm:mb-28 md:mb-36"
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
            >
              <p className="font-body text-xs text-dark-text/30 uppercase tracking-widest mb-5">
                02 — Services
              </p>
              <h2 className="font-display text-dark-text leading-none" style={{ fontSize: 'clamp(2.8rem, 8vw, 6rem)' }}>
                Ce que<br />je propose
              </h2>
            </motion.div>

            {/* 2 cartes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {services.map((service) => (
                <motion.button
                  key={service.id}
                  onClick={() => setActiveService(service)}
                  className="group relative overflow-hidden text-left h-72 sm:h-96 md:h-[28rem] cursor-pointer"
                  variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-text/90 via-dark-text/40 to-dark-text/20" />
                  <div className="absolute inset-0 bg-accent-green/0 group-hover:bg-accent-green/15 transition-colors duration-400" />

                  <div className="absolute inset-0 flex flex-col justify-between p-7 sm:p-10">
                    <span className="font-body text-[10px] text-white/30 uppercase tracking-widest">{service.num}</span>
                    <div>
                      <div className="w-0 h-px bg-accent-green mb-5 group-hover:w-8 transition-all duration-400" />
                      <h3 className="font-display text-white leading-none mb-5" style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)' }}>
                        {service.title}
                      </h3>
                      <span className="font-body text-[10px] text-white/35 group-hover:text-accent-green uppercase tracking-widest transition-colors duration-300">
                        Voir le détail →
                      </span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            <motion.div
              className="mt-14 sm:mt-18"
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.3 } } }}
            >
              <motion.a
                href="#contact"
                className="inline-block px-8 py-4 bg-accent-green-dark text-white font-body text-xs font-semibold uppercase tracking-widest hover:bg-accent-orange transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Démarrer un projet
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {activeService && <ServiceModal service={activeService} onClose={() => setActiveService(null)} />}
      </AnimatePresence>
    </>
  );
}
