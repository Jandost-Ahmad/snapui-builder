import React from 'react';
import { motion } from 'motion/react';
import { ABOUT_IMAGE_URL } from '../data/contentData';

export const AboutSection: React.FC = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-5 md:px-6 py-16 md:py-24" id="ueber-uns">
      <div className="grid md:grid-cols-12 gap-12 items-center">
        {/* Left Image */}
        <motion.div
          className="md:col-span-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-md border border-[#e5e2e1]">
            <img
              src={ABOUT_IMAGE_URL}
              alt="Vertrauensvolles Gespräch am Esstisch"
              className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="md:col-span-7 lg:pl-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#1a675b] block mb-2">
            Ambulante Lebensassistenz Rhein-Sieg-Bonn
          </span>
          <h2 className="text-[32px] leading-[40px] font-bold tracking-[-0.01em] text-[#1a675b] mb-6">
            Selbstbestimmt im eigenen Lebensraum
          </h2>
          <p className="text-[17px] leading-[28px] text-[#3f4946] mb-5">
            Wir unterstützen, beraten und begleiten Menschen im Alltag – mit dem Ziel, Selbstständigkeit und gesellschaftliche Teilhabe nachhaltig zu stärken. Bei uns steht jede Person stets als <strong>Expertin bzw. Experte für das eigene Leben</strong> im Mittelpunkt.
          </p>
          <p className="text-[17px] leading-[28px] text-[#3f4946] mb-8">
            Die Assistenz übernimmt nicht Ihre Entscheidungen, sondern steht Ihnen als verlässlicher Partner zur Seite. Alle Leistungen werden individuell geplant, gemeinsam überprüft und passgenau an Ihren Lebensbedarf angepasst.
          </p>

          {/* 3 Quick Benefit Badges */}
          <div className="grid sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-[#f6f3f2] border border-[#e5e2e1]/60">
              <span className="material-symbols-outlined text-[#1a675b] text-2xl mb-1 block">handshake</span>
              <span className="text-sm font-bold text-[#1c1b1b] block">Auf Augenhöhe</span>
              <span className="text-xs text-[#64748b]">Respektvoll & wertschätzend</span>
            </div>
            <div className="p-4 rounded-xl bg-[#f6f3f2] border border-[#e5e2e1]/60">
              <span className="material-symbols-outlined text-[#00EBD3] text-2xl mb-1 block">pin_drop</span>
              <span className="text-sm font-bold text-[#1c1b1b] block">Sozialraum</span>
              <span className="text-xs text-[#64748b]">Bonn & Rhein-Sieg-Kreis</span>
            </div>
            <div className="p-4 rounded-xl bg-[#f6f3f2] border border-[#e5e2e1]/60">
              <span className="material-symbols-outlined text-[#FF5B14] text-2xl mb-1 block">verified</span>
              <span className="text-sm font-bold text-[#1c1b1b] block">§ 118 SGB IX</span>
              <span className="text-xs text-[#64748b]">Eingliederungshilfe</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
