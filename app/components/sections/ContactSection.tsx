'use client';

import { motion } from 'framer-motion';

const contactMethods = [
  { label: 'Instagram', value: '@atcinqo', url: 'https://www.instagram.com/atcinqo/', num: '01' },
  { label: 'Email', value: 'tomallano83@gmail.com', url: 'mailto:tomallano83@gmail.com', num: '02' },
  { label: 'LinkedIn', value: 'Tom ALLANO', url: 'https://www.linkedin.com/in/tom-allano/', num: '03' },
];

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-32 sm:py-44 md:py-56 bg-white">
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
              05 — Contact
            </p>
            <h2 className="font-display text-dark-text leading-none mb-8 sm:mb-10" style={{ fontSize: 'clamp(2.8rem, 8vw, 6rem)' }}>
              Parlons<br />ensemble
            </h2>
          </motion.div>

          {/* Liens contact */}
          <motion.div
            className="mb-16 sm:mb-20 md:mb-24"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
          >
            {contactMethods.map((method) => (
              <motion.a
                key={method.num}
                href={method.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-7 sm:py-8 relative"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-dark-text/7" />

                <div className="flex items-center gap-5 sm:gap-7 min-w-0">
                  <span className="font-body text-[10px] text-dark-text/20 uppercase tracking-widest group-hover:text-accent-orange transition-colors duration-200 flex-shrink-0">
                    {method.num}
                  </span>
                  <h3
                    className="font-display text-dark-text group-hover:text-accent-green transition-colors duration-200 leading-none truncate"
                    style={{ fontSize: 'clamp(1.8rem, 6vw, 3.2rem)' }}
                  >
                    {method.label}
                  </h3>
                </div>

                <div className="flex items-center gap-4 sm:gap-5 flex-shrink-0 ml-4">
                  <span className="font-body text-xs text-dark-text/35 group-hover:text-dark-text/70 transition-colors duration-200 hidden xs:block">
                    {method.value}
                  </span>
                  <span className="font-body text-sm text-dark-text/15 group-hover:text-accent-green transition-colors duration-200">→</span>
                </div>
              </motion.a>
            ))}
            <div className="h-px bg-dark-text/7" />
          </motion.div>

          {/* Bloc CTA */}
          <motion.div
            className="bg-dark-text p-10 sm:p-14 md:p-20"
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
          >
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-16">
              <div>
                <h3 className="font-display text-white leading-none mb-6" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}>
                  Votre projet<br />commence ici
                </h3>
              </div>

              <div className="flex flex-col xs:flex-row gap-3 flex-shrink-0">
                <motion.a
                  href="https://www.instagram.com/atcinqo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-accent-orange text-white font-body text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-dark-text transition-all duration-300 text-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Instagram
                </motion.a>
                <motion.a
                  href="mailto:tomallano83@gmail.com"
                  className="px-8 py-4 bg-accent-green text-white font-body text-xs font-semibold uppercase tracking-widest hover:bg-accent-green-dark transition-all duration-300 text-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Email
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            className="mt-16 sm:mt-20 flex flex-col xs:flex-row xs:items-center xs:justify-between gap-4"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6 } } }}
          >
            <span className="font-display text-2xl text-dark-text/12 tracking-widest">TA</span>
            <p className="font-body text-[10px] text-dark-text/20 uppercase tracking-widest">
              © 2024 Tom ALLANO — Créateur Digital
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
