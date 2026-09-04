import React from 'react';
import { motion } from 'motion/react';
import { PRINCIPLES } from '../data/contentData';

export const PrinciplesSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="bg-[#f6f3f2] py-16 md:py-24" id="grundsaetze">
      <div className="max-w-[1200px] mx-auto px-5 md:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[32px] leading-[40px] font-bold tracking-[-0.01em] text-[#1a675b] mb-4">
            Grundsätze unserer Arbeit
          </h2>
          <p className="text-[17px] md:text-[18px] leading-[28px] text-[#3f4946] max-w-2xl mx-auto">
            Respektvoll, wertschätzend und auf Augenhöhe – wir orientieren uns an Ihren individuellen Bedürfnissen und Ressourcen.
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {PRINCIPLES.map((principle) => (
            <motion.div
              key={principle.id}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-8 ambient-card flex flex-col items-center text-center group cursor-default"
            >
              <div className="w-16 h-16 rounded-full bg-[#8dd4c5]/30 flex items-center justify-center text-[#1a675b] mb-6 transition-transform duration-300 group-hover:scale-110">
                <span className="material-symbols-outlined text-3xl">
                  {principle.icon}
                </span>
              </div>
              <h3 className="text-[24px] leading-[32px] font-semibold text-[#1c1b1b] mb-2">
                {principle.title}
              </h3>
              {principle.description && (
                <p className="text-[14px] leading-[20px] text-[#3f4946] mt-2 opacity-90">
                  {principle.description}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
