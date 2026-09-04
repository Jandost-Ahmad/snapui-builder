import React from 'react';
import { motion } from 'motion/react';
import { TARGET_GROUP_INFO, QUALIFICATION_INFO, NETWORKING_INFO } from '../data/contentData';

export const TargetAndExclusionSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-[#e5e2e1]/60" id="zielgruppe">
      <div className="max-w-[1200px] mx-auto px-5 md:px-6">
        
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#1a675b] block mb-2">
            Orientierung & Kompetenz
          </span>
          <h2 className="text-[32px] leading-[40px] font-bold tracking-tight text-[#1a675b]">
            Zielgruppe & Fachliche Qualifikation
          </h2>
        </motion.div>

        {/* 2-Column Grid: Zielgruppe & Qualifikation */}
        <div className="grid md:grid-cols-2 gap-8">
          
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

      </div>
    </section>
  );
};
