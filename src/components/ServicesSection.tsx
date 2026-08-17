import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../data/contentData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="max-w-[1200px] mx-auto px-5 md:px-6 py-16 md:py-24" id="leistungen">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-[32px] leading-[40px] font-bold tracking-[-0.01em] text-[#1a675b] mb-4">
          Unsere Leistungen
        </h2>
        <p className="text-[18px] leading-[28px] text-[#3f4946] max-w-2xl mx-auto">
          Individuelle Unterstützung für ein selbstbestimmtes Leben.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {SERVICES.map((service, index) => {
          const isLastCard = index === SERVICES.length - 1;
          return (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.2 } }}
              onClick={() => onSelectService(service)}
              className={`bg-[#f6f3f2] rounded-2xl p-8 ambient-card cursor-pointer group flex flex-col justify-between border border-[#e5e2e1]/40 ${
                isLastCard ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#1a675b] mb-6 shadow-xs transition-transform duration-300 group-hover:scale-110">
                  <span className="material-symbols-outlined text-2xl">
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-[24px] leading-[32px] font-semibold text-[#1c1b1b] mb-4 group-hover:text-[#1a675b] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[16px] leading-[24px] text-[#3f4946]">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 pt-4 flex items-center text-[#1a675b] text-[14px] font-semibold group-hover:translate-x-1 transition-transform">
                <span>Details & Vorteile ansehen</span>
                <span className="material-symbols-outlined text-sm ml-1">chevron_right</span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};
