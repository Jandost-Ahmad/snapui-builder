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
          <h2 className="text-[32px] leading-[40px] font-bold tracking-[-0.01em] text-[#1a675b] mb-6">
            Über uns
          </h2>
          <p className="text-[18px] leading-[28px] text-[#3f4946] mb-6">
            Die Lebensassistenz Rhein-Sieg-Bonn steht für Selbstbestimmung, Vertrauen und individuelle Unterstützung. Wir glauben daran, dass jeder Mensch das Recht hat, so lange wie möglich in seinem eigenen Zuhause und vertrauten Umfeld zu leben.
          </p>
          <p className="text-[18px] leading-[28px] text-[#3f4946]">
            Unser Team aus erfahrenen Fachkräften begleitet Sie nicht nur bei alltäglichen Herausforderungen, sondern fördert aktiv Ihre Eigenständigkeit. Wir verstehen uns als Partner auf Augenhöhe, die Sicherheit geben und gleichzeitig Raum für persönliche Entfaltung lassen.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
