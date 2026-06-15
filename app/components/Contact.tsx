'use client';

import { motion } from 'framer-motion';

const links = [
  { num: '01', label: 'Instagram', handle: '@atcinqo',             href: 'https://www.instagram.com/atcinqo/' },
  { num: '02', label: 'Email',     handle: 'tomallano83@gmail.com', href: 'mailto:tomallano83@gmail.com'       },
  { num: '03', label: 'LinkedIn',  handle: 'Tom Allano',           href: 'https://www.linkedin.com/in/tom-allano/' },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-[#111111] py-28 sm:py-40 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.h2
          className="font-display text-white mb-20 sm:mb-28"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Parlons<br />ensemble
        </motion.h2>

        {/* Liens — sans border, juste de l'espace */}
        <div className="mb-24 sm:mb-32 flex flex-col gap-6 sm:gap-8">
          {links.map((l, i) => (
            <motion.a
              key={l.num}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3
                className="font-display text-white group-hover:text-[#16a34a] transition-colors duration-200 leading-none"
                style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
              >
                {l.label}
              </h3>
              <span className="font-body text-xs text-white/20 group-hover:text-[#16a34a] transition-colors duration-200 hidden sm:block">
                {l.handle} →
              </span>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <a
            href="mailto:tomallano83@gmail.com"
            className="px-8 py-4 bg-[#14532d] hover:bg-[#166534] font-body text-[11px] text-white uppercase tracking-[0.2em] transition-all duration-300 text-center"
          >
            Envoyer un email
          </a>
          <a
            href="https://www.instagram.com/atcinqo/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-white/15 hover:border-white/40 font-body text-[11px] text-white/40 hover:text-white uppercase tracking-[0.2em] transition-all duration-300 text-center"
          >
            Instagram
          </a>
        </motion.div>

        {/* Footer */}
        <div className="mt-20 sm:mt-28 flex flex-col xs:flex-row xs:items-center xs:justify-between gap-3">
          <span className="font-display text-2xl text-white/[0.07] tracking-widest">TA</span>
          <p className="font-body text-[9px] text-white/12 uppercase tracking-[0.2em]">
            © 2024 Tom Allano — Créateur de Contenu Digital
          </p>
        </div>
      </div>
    </section>
  );
}
