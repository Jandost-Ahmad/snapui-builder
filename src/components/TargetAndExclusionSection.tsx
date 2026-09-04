import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TARGET_GROUP_INFO, EXCLUSION_CRITERIA, QUALIFICATION_INFO, NETWORKING_INFO } from '../data/contentData';

export const TargetAndExclusionSection: React.FC = () => {
  const [showExclusions, setShowExclusions] = useState<boolean>(true);

  return (
    <section className="py-16 md:py-24 bg-white border-t border-[#e5e2e1]/60" id="zielgruppe">
      <div className="max-w-[1200px] mx-auto px-5 md:px-6">
        
        {/* Top Grid: Zielgruppe & Qualifikation */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          {/* Zielgruppe Card */}
          <motion.div
            className="bg-[#fcf9f8] rounded-2xl p-8 border border-[#e5e2e1] shadow-xs flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#1a675b]/10 text-[#1a675b] flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-2xl">person_pin</span>
              </div>
              <h3 className="text-2xl font-bold text-[#1a675b] mb-4">
                {TARGET_GROUP_INFO.title}
              </h3>
              <p className="text-[17px] leading-[28px] text-[#3f4946] mb-6">
                {TARGET_GROUP_INFO.description}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#e5e2e1] flex items-start gap-3.5">
              <span className="material-symbols-outlined text-[#1a675b] text-xl mt-0.5">verified</span>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1a675b] block mb-1">
                  Voraussetzung
                </span>
                <p className="text-sm text-[#4b5563] leading-relaxed">
                  {TARGET_GROUP_INFO.requirement}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Qualifikation der Fachkräfte & Vernetzung */}
          <motion.div
            className="bg-[#fcf9f8] rounded-2xl p-8 border border-[#e5e2e1] shadow-xs flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#1a675b]/10 text-[#1a675b] flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-2xl">school</span>
              </div>
              <h3 className="text-2xl font-bold text-[#1a675b] mb-4">
                {QUALIFICATION_INFO.title}
              </h3>
              <p className="text-[16px] leading-[26px] text-[#3f4946] mb-4">
                {QUALIFICATION_INFO.description}
              </p>
              <p className="text-[15px] leading-[24px] text-[#4b5563] italic mb-6">
                {QUALIFICATION_INFO.qualities}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#e5e2e1] flex items-start gap-3.5">
              <span className="material-symbols-outlined text-[#00EBD3] text-xl mt-0.5">hub</span>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1a675b] block mb-1">
                  {NETWORKING_INFO.title}
                </span>
                <p className="text-sm text-[#4b5563] leading-relaxed">
                  {NETWORKING_INFO.description}
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Section: Transparente Ausschlusskriterien */}
        <motion.div
          className="bg-[#f8fafc] rounded-2xl p-8 border border-[#e2e8f0]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#e2e8f0]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-xl text-[#e11d48]">info</span>
                <h4 className="text-xl font-bold text-[#1e293b]">
                  Transparenz & Ausschlusskriterien
                </h4>
              </div>
              <p className="text-sm text-[#64748b]">
                Das Leistungsangebot ist nicht für jede Unterstützungsform geeignet. Für fachliche Klarheit benennen wir transparente Grenzen:
              </p>
            </div>
            <button
              onClick={() => setShowExclusions(!showExclusions)}
              className="text-xs font-semibold text-[#1a675b] hover:text-[#00EBD3] flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span>{showExclusions ? 'Einklappen' : 'Alle 6 Kriterien anzeigen'}</span>
              <span className="material-symbols-outlined text-base">
                {showExclusions ? 'expand_less' : 'expand_more'}
              </span>
            </button>
          </div>

          <AnimatePresence>
            {showExclusions && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6"
              >
                {EXCLUSION_CRITERIA.map((criterion) => (
                  <div
                    key={criterion.id}
                    className="bg-white p-5 rounded-xl border border-[#e2e8f0] shadow-2xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-[#e11d48] mb-2 font-bold text-sm">
                        <span className="material-symbols-outlined text-base">cancel</span>
                        <span>{criterion.title}</span>
                      </div>
                      <p className="text-xs md:text-sm text-[#64748b] leading-relaxed">
                        {criterion.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
