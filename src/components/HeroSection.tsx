import React from 'react';
import { motion } from 'motion/react';
import { HERO_IMAGE_URL } from '../data/contentData';

interface HeroSectionProps {
  onOpenSupportModal: () => void;
  onOpenCareerModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenSupportModal, onOpenCareerModal }) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#F7F7F5]" id="home">
      <div className="max-w-[1200px] mx-auto px-5 md:px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Hero Text */}
        <motion.div
          className="z-10"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h1
            className="text-[34px] leading-[42px] md:text-[50px] md:leading-[58px] font-bold tracking-[-0.02em] text-[#1a675b] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Selbstbestimmt leben – mit verlässlicher Unterstützung auf Augenhöhe.
          </motion.h1>
          <motion.p
            className="text-[17px] md:text-[19px] leading-[28px] text-[#3f4946] mb-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ambulante Lebensassistenz nach § 118 SGB IX im Raum Bonn und Rhein-Sieg-Kreis. Sie stehen im Mittelpunkt – als Expertin bzw. Experte für das eigene Leben.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenSupportModal}
              className="inline-flex justify-center items-center bg-[#ab3520] text-white px-8 py-3.5 rounded-lg text-[14px] font-semibold hover:bg-[#feba49] hover:text-[#281800] transition-colors duration-300 shadow-sm cursor-pointer"
            >
              Unterstützung anfragen
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenCareerModal}
              className="inline-flex justify-center items-center border border-[#1a675b] text-[#1a675b] px-8 py-3.5 rounded-lg text-[14px] font-semibold hover:bg-[#a9f0e1] hover:text-[#00201b] transition-colors duration-300 cursor-pointer"
            >
              Jetzt bewerben
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="relative w-full aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lg border border-[#e5e2e1]/60"
          initial={{ opacity: 0, scale: 0.95, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={HERO_IMAGE_URL}
            alt="Freundliche Betreuungskraft unterstützt eine Klientin im Wohnzimmer"
            className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
          />
        </motion.div>
      </div>
    </section>
  );
};
