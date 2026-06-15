'use client';

import { motion } from 'framer-motion';

interface LandingPageProps {
  onSelect: (view: 'professional' | 'academic') => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

export default function LandingPage({ onSelect }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col overflow-hidden">
      <motion.div
        className="flex-1 flex flex-col max-w-6xl mx-auto w-full px-6 sm:px-10 lg:px-14 py-10 sm:py-12 min-h-screen"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Barre du haut */}
        <motion.div className="flex items-center justify-between py-3" variants={itemVariants}>
          <span className="font-display text-2xl sm:text-3xl text-dark-text tracking-widest">TA</span>
          <span className="font-body text-[10px] text-dark-text/22 uppercase tracking-widest hidden xs:block">
            Portfolio 2024
          </span>
        </motion.div>

        {/* Zone centrale */}
        <div className="flex-1 flex flex-col justify-center py-14 sm:py-20">

          {/* Nom */}
          <motion.div variants={itemVariants} className="mb-14 sm:mb-18 md:mb-20">
            <h1
              className="font-display text-dark-text leading-none"
              style={{ fontSize: 'clamp(3.5rem, 14vw, 9rem)' }}
            >
              TOM<br />ALLANO
            </h1>
            <p className="font-body text-[10px] sm:text-xs text-dark-text/35 uppercase tracking-widest mt-5 sm:mt-6 font-medium">
              Créateur de Contenu Digital
            </p>
          </motion.div>

          {/* Cartes */}
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4" variants={itemVariants}>

            {/* Portfolio pro */}
            <motion.button
              onClick={() => onSelect('professional')}
              className="group bg-white hover:bg-accent-green transition-colors duration-300 p-9 sm:p-12 md:p-14 flex flex-col justify-between text-left h-56 sm:h-64 md:h-72 cursor-pointer"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <span className="font-body text-[10px] text-dark-text/22 group-hover:text-white/40 uppercase tracking-widest transition-colors duration-300">
                01
              </span>
              <div>
                <h2
                  className="font-display text-dark-text group-hover:text-white transition-colors duration-300 leading-none mb-3"
                  style={{ fontSize: 'clamp(1.7rem, 4vw, 2.6rem)' }}
                >
                  PORTFOLIO<br />PROFESSIONNEL
                </h2>
                <p className="font-body text-xs text-dark-text/40 group-hover:text-white/60 transition-colors duration-300 leading-loose">
                  Community Management · Vidéo · Graphisme
                </p>
              </div>
              <span className="font-body text-[10px] text-dark-text/22 group-hover:text-white/50 uppercase tracking-widest transition-colors duration-300">
                Entrer →
              </span>
            </motion.button>

            {/* Portfolio académique — désactivé */}
            <div className="bg-light-gray/40 p-9 sm:p-12 md:p-14 flex flex-col justify-between text-left h-56 sm:h-64 md:h-72 opacity-25 cursor-not-allowed select-none">
              <span className="font-body text-[10px] text-dark-text/22 uppercase tracking-widest">02</span>
              <div>
                <h2
                  className="font-display text-dark-text leading-none mb-3"
                  style={{ fontSize: 'clamp(1.7rem, 4vw, 2.6rem)' }}
                >
                  PORTFOLIO<br />ACADÉMIQUE
                </h2>
                <p className="font-body text-xs text-dark-text/40 leading-loose">
                  Projets et réalisations académiques
                </p>
              </div>
              <span className="font-body text-[10px] text-dark-text/22 uppercase tracking-widest">
                Bientôt disponible
              </span>
            </div>
          </motion.div>
        </div>

        {/* Barre du bas */}
        <motion.div className="flex items-center justify-between py-3" variants={itemVariants}>
          <p className="font-body text-[10px] text-dark-text/18 uppercase tracking-widest">
            Sélectionnez une section
          </p>
          <p className="font-body text-[10px] text-dark-text/18 uppercase tracking-widest hidden xs:block">
            2024
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
