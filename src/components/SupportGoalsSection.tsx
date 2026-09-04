import React from 'react';
import { motion } from 'motion/react';
import { SUPPORT_GOALS } from '../data/contentData';

export const SupportGoalsSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="relative w-full py-16 md:py-24 bg-gradient-to-b from-[#f6f3f2] to-[#fcf9f8] overflow-hidden" id="ziele">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00EBD3]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFBB00]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-5 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1a675b]/10 text-[#1a675b] text-xs md:text-sm font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#00EBD3] animate-pulse" />
            Schwerpunkt unserer Begleitung
          </span>
          <h2 className="text-[30px] leading-[38px] md:text-[40px] md:leading-[48px] font-bold tracking-tight text-[#1a675b] mb-4">
            Ziele der Unterstützung
          </h2>
          <p className="text-[17px] md:text-[19px] leading-[28px] text-[#3f4946]">
            Übergeordnetes Ziel ist eine möglichst <strong>selbstständige und selbstbestimmte Lebensführung</strong> in allen relevanten Lebensbereichen.
          </p>
        </motion.div>

        {/* Highlighted Banner / Leitgedanke */}
        <motion.div
          className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border-l-4 border-[#00EBD3] mb-12 flex flex-col md:flex-row items-start md:items-center gap-6"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-14 h-14 rounded-xl bg-[#00EBD3]/15 flex items-center justify-center text-[#1a675b] flex-shrink-0">
            <span className="material-symbols-outlined text-3xl text-[#1a675b]">flag</span>
          </div>
          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-bold text-[#1c1b1b] mb-1">
              Unser zentraler Leitsatz
            </h3>
            <p className="text-[#3f4946] text-base md:text-lg leading-relaxed">
              „Die Unterstützung soll die Selbstständigkeit nicht ersetzen, sondern diese fördern und langfristig ausbauen.“
            </p>
          </div>
          <div className="px-4 py-2 bg-[#f6f3f2] rounded-lg text-xs font-semibold text-[#1a675b] tracking-wide uppercase">
            § 118 SGB IX
          </div>
        </motion.div>

        {/* 6 Core Goals Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {SUPPORT_GOALS.map((goal, index) => (
            <motion.div
              key={goal.id}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-7 border border-[#e5e2e1]/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#1a675b]/10 text-[#1a675b] flex items-center justify-center group-hover:bg-[#00EBD3]/20 group-hover:text-[#1a675b] transition-colors duration-300">
                    <span className="material-symbols-outlined text-2xl">{goal.icon}</span>
                  </div>
                  <span className="text-xs font-bold text-[#9ca3af] group-hover:text-[#1a675b] transition-colors">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-[19px] font-bold text-[#1c1b1b] leading-snug mb-3 group-hover:text-[#1a675b] transition-colors">
                  {goal.title}
                </h3>
                <p className="text-[15px] leading-[24px] text-[#4b5563]">
                  {goal.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#f3f4f6] flex items-center text-xs font-semibold text-[#1a675b] gap-1.5">
                <span className="material-symbols-outlined text-base text-[#00EBD3]">check_circle</span>
                <span>Fokus Eingliederungshilfe</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
