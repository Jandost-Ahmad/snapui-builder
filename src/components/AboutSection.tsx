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
            Über unser Angebot
          </h2>
          <p className="text-[17px] leading-[28px] text-[#3f4946] mb-5">
            Das Angebot versteht sich als <strong>individuelle, sozialraumorientierte Assistenz</strong> zur Förderung von Selbstständigkeit, Selbstbestimmung und Teilhabe. Die leistungsberechtigte Person steht im Mittelpunkt und wird als Expertin bzw. Experte für das eigene Leben betrachtet.
          </p>
          <p className="text-[17px] leading-[28px] text-[#3f4946] mb-5">
            Die Assistenz unterstützt, berät und begleitet, übernimmt aber nicht die Entscheidung der Person. Die Leistungen erfolgen auf Grundlage des <strong>§ 118 SGB IX</strong> und werden individuell geplant, regelmäßig überprüft und an den persönlichen Bedarf angepasst.
          </p>
          <p className="text-[17px] leading-[28px] text-[#3f4946]">
            Gemeinsam werden notwendige und selbstgewählte sozialräumliche Systeme und Ressourcen erschlossen und genutzt. Zum Leistungsangebot gehören persönliche Assistenzleistungen sowie Beratung, Begleitung und Unterstützung im Alltag.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
