'use client';

import { motion } from 'framer-motion';

const links = [
  { num: '01', label: 'Instagram', handle: '@atcinqo',            url: 'https://www.instagram.com/atcinqo/' },
  { num: '02', label: 'Email',     handle: 'tomallano83@gmail.com', url: 'mailto:tomallano83@gmail.com'     },
  { num: '03', label: 'LinkedIn',  handle: 'Tom ALLANO',           url: 'https://www.linkedin.com/in/tom-allano/' },
];

const fade = (delay = 0) => ({
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay } },
});

export default function Contact() {
  return (
    <section id="contact" className="py-28 sm:py-40 bg-ink border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          className="flex items-end gap-5 mb-20 sm:mb-28"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade(0)}
        >
          <span
            className="font-display text-white/[0.05] leading-none select-none"
            style={{ fontSize: 'clamp(5rem, 12vw, 9rem)' }}
          >
            03
          </span>
          <div className="pb-2">
            <p className="font-body text-[10px] text-white/20 uppercase tracking-[0.25em] mb-1">Contact</p>
            <h2 className="font-display text-white" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Parlons ensemble
            </h2>
          </div>
        </motion.div>

        {/* Contact rows */}
        <div className="mb-20 sm:mb-28">
          {links.map((l, i) => (
            <motion.a
              key={l.num}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between py-7 sm:py-8 border-t border-white/[0.05] hover:pl-4 transition-all duration-300 last:border-b"
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fade(i * 0.1)}
            >
              {/* Green bar left */}
              <div className="absolute left-0 top-0 bottom-0 w-0 bg-forest group-hover:w-[3px] transition-all duration-300" />

              <div className="flex items-center gap-5 sm:gap-8 min-w-0">
                <span className="font-body text-[9px] text-white/12 uppercase tracking-[0.2em] group-hover:text-forest-bright transition-colors duration-200 flex-shrink-0">
                  {l.num}
                </span>
                <h3
                  className="font-display text-white group-hover:text-forest-bright transition-colors duration-200 leading-none truncate"
                  style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}
                >
                  {l.label}
                </h3>
              </div>

              <div className="flex items-center gap-4 ml-4 flex-shrink-0">
                <span className="font-body text-xs text-white/20 group-hover:text-white/45 transition-colors duration-200 hidden sm:block">
                  {l.handle}
                </span>
                <span className="text-white/12 group-hover:text-forest-bright transition-colors duration-200 text-lg">→</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA block */}
        <motion.div
          className="bg-surface border border-white/[0.06] p-10 sm:p-14 md:p-16"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade(0.2)}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            <div>
              <h3 className="font-display text-white mb-3" style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}>
                Votre projet<br />commence ici
              </h3>
              <p className="font-body text-sm text-white/25">Réponse garantie sous 24h.</p>
            </div>
            <div className="flex flex-col xs:flex-row gap-3 flex-shrink-0">
              <a
                href="mailto:tomallano83@gmail.com"
                className="px-8 py-4 bg-forest hover:bg-forest-mid font-body text-[11px] text-white uppercase tracking-[0.2em] transition-all duration-300 text-center"
              >
                Envoyer un email
              </a>
              <a
                href="https://www.instagram.com/atcinqo/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-white/10 hover:border-forest-bright font-body text-[11px] text-white/40 hover:text-forest-bright uppercase tracking-[0.2em] transition-all duration-300 text-center"
              >
                Instagram
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/[0.05] flex flex-col xs:flex-row xs:items-center xs:justify-between gap-3">
          <span className="font-display text-3xl text-white/[0.07] tracking-widest">TA</span>
          <p className="font-body text-[9px] text-white/12 uppercase tracking-[0.2em]">
            © 2024 Tom ALLANO — Créateur de Contenu Digital
          </p>
        </div>
      </div>
    </section>
  );
}
