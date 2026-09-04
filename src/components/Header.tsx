import React, { useState, useEffect } from 'react';
import { LOGO_URL } from '../data/contentData';

interface HeaderProps {
  onOpenSupportModal: () => void;
  onToggleMobileMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSupportModal, onToggleMobileMenu }) => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'ueber-uns', 'grundsaetze', 'ziele', 'leistungen', 'zielgruppe', 'team', 'faq', 'kontakt'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'ueber-uns', label: 'Über uns', href: '#ueber-uns' },
    { id: 'ziele', label: 'Ziele der Unterstützung', href: '#ziele' },
    { id: 'leistungen', label: 'Leistungen', href: '#leistungen' },
    { id: 'kontakt', label: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <header className={`fixed top-0 w-full bg-white z-50 transition-all duration-300 ${scrolled ? 'shadow-md py-1' : 'shadow-xs'}`}>
      <div className="flex justify-between items-center w-full px-5 md:px-8 max-w-[1280px] mx-auto h-20 md:h-24">
        {/* Prominent Official Vector Logo */}
        <a 
          href="#home" 
          className="flex items-center transition-transform duration-300 hover:scale-[1.02] py-1"
          aria-label="Lebensassistenz Rhein-Sieg-Bonn Home"
        >
          <img 
            src={LOGO_URL} 
            alt="Lebensassistenz Rhein-Sieg-Bonn Logo" 
            className="h-14 md:h-18 lg:h-20 w-auto object-contain max-w-[260px] md:max-w-[340px]" 
          />
        </a>

        {/* Navigation Links (Desktop) - Clean & Streamlined */}
        <nav className="hidden lg:flex items-center gap-9">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`text-[15px] font-semibold tracking-[-0.01em] transition-colors duration-300 ${
                  isActive
                    ? 'text-[#1a675b] font-bold border-b-2 border-[#1a675b] pb-1'
                    : 'text-[#3f4946] hover:text-[#1a675b]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Header Action CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenSupportModal}
            className="hidden sm:inline-flex bg-[#ab3520] text-white px-6 py-3 rounded-lg text-[14px] font-semibold hover:bg-[#feba49] hover:text-[#281800] transition-all duration-300 hover:scale-[1.02] shadow-xs cursor-pointer"
          >
            Unterstützung anfragen
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={onToggleMobileMenu}
            className="lg:hidden text-[#1c1b1b] p-2 transition-transform duration-300 active:scale-95 rounded-lg hover:bg-[#f6f3f2]"
            aria-label="Menü öffnen"
          >
            <span className="material-symbols-outlined text-2xl">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};
