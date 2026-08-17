import React from 'react';
import { LOGO_URL } from '../data/contentData';

interface FooterProps {
  onOpenLegalModal: (type: 'impressum' | 'datenschutz') => void;
  onOpenCareerModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegalModal, onOpenCareerModal }) => {
  return (
    <footer className="bg-[#2D6359] text-white w-full py-12 md:py-16 px-5 md:px-6 mt-auto">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex flex-col gap-4">
          <img
            src={LOGO_URL}
            alt="Lebensassistenz Rhein-Sieg-Bonn Logo"
            className="h-16 w-auto brightness-0 invert opacity-90 transition-transform duration-300 hover:scale-105 object-contain"
          />
          <p className="text-[16px] leading-[24px] text-white/80">
            Nogenter-Platz 4, 53721 Siegburg
          </p>
        </div>

        <div className="flex flex-wrap gap-6 md:gap-8">
          <button
            onClick={() => onOpenLegalModal('impressum')}
            className="text-[14px] font-semibold text-white/80 hover:text-[#feba49] transition-colors duration-300 cursor-pointer"
          >
            Impressum
          </button>
          <button
            onClick={() => onOpenLegalModal('datenschutz')}
            className="text-[14px] font-semibold text-white/80 hover:text-[#feba49] transition-colors duration-300 cursor-pointer"
          >
            Datenschutz
          </button>
          <a
            href="#kontakt"
            className="text-[14px] font-semibold text-white/80 hover:text-[#feba49] transition-colors duration-300"
          >
            Kontakt
          </a>
          <button
            onClick={onOpenCareerModal}
            className="text-[14px] font-semibold text-white/80 hover:text-[#feba49] transition-colors duration-300 cursor-pointer"
          >
            Karriere
          </button>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto mt-12 pt-8 border-t border-white/10 text-center">
        <p className="text-[12px] font-medium leading-[16px] text-white/60">
          © {new Date().getFullYear()} Lebensassistenz Rhein-Sieg-Bonn. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
};
