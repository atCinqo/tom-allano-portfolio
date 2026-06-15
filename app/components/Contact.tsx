'use client';

import { motion } from 'framer-motion';

const links = [
  { num: '01', label: 'Instagram', handle: '@atcinqo',             href: 'https://www.instagram.com/atcinqo/' },
  { num: '02', label: 'Email',     handle: 'tomallano83@gmail.com', href: 'mailto:tomallano83@gmail.com'       },
  { num: '03', label: 'LinkedIn',  handle: 'Tom Allano',           href: 'https://www.linkedin.com/in/tom-allano/' },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-black border-t border-white/[0.06] py-24 sm:py-36 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          className="mb-16 sm:mb-24"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-6 h-px bg-[#16a34a]" />
            <span className="font-body text-[10px] text-white/25 uppercase tracking-[0.3em]">Contact</span>
          </div>
          <h2 className="font-display text-white" style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}>
            Parlons<br />ensemble
          </h2>
        </motion.div>

        {/* Liens */}
        <div className="mb-16 sm:mb-24">
          {links.map((l, i) => (
            <motion.a
              key={l.num}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between py-6 sm:py-8 border-t border-white/[0.06] last:border-b hover:pl-3 transition-all duration-300"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* barre verte */}
              <div className="absolute left-0 top-0 bottom-0 w-0 bg-[#14532d] group-hover:w-[3px] transition-all duration-300" />

              <div className="flex items-center gap-6 min-w-0">
                <span className="font-body text-[9px] text-white/12 uppercase tracking-[0.2em] group-hover:text-[#16a34a] transition-colors duration-200 flex-shrink-0">
                  {l.num}
                </span>
                <h3
                  className="font-display text-white group-hover:text-[#16a34a] transition-colors duration-200 leading-none"
                  style={{ fontSize: 'clamp(1.8rem, 5.5vw, 3.5rem)' }}
                >
                  {l.label}
                </h3>
              </div>

              <div className="flex items-center gap-4 flex-shrink-0 ml-4">
                <span className="font-body text-xs text-white/18 group-hover:text-white/45 transition-colors duration-200 hidden sm:block">
                  {l.handle}
                </span>
                <span className="text-white/12 group-hover:text-[#16a34a] transition-colors duration-200">→</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA block */}
        <motion.div
          className="border border-white/[0.08] p-8 sm:p-12 md:p-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h3 className="font-display text-white mb-2" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)' }}>
                Votre projet commence ici
              </h3>
              <p className="font-body text-sm text-white/25">Réponse sous 24h.</p>
            </div>
            <div className="flex flex-col xs:flex-row gap-3 flex-shrink-0">
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
                className="px-8 py-4 border border-white/10 hover:border-[#16a34a] font-body text-[11px] text-white/40 hover:text-[#16a34a] uppercase tracking-[0.2em] transition-all duration-300 text-center"
              >
                Instagram
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-14 pt-8 border-t border-white/[0.05] flex flex-col xs:flex-row xs:items-center xs:justify-between gap-3">
          <span className="font-display text-3xl text-white/[0.06] tracking-widest">TA</span>
          <p className="font-body text-[9px] text-white/12 uppercase tracking-[0.2em]">
            © 2024 Tom Allano — Créateur de Contenu Digital
          </p>
        </div>
      </div>
    </section>
  );
}
