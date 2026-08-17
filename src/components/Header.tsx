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

      const sections = ['home', 'ueber-uns', 'team', 'leistungen', 'faq', 'kontakt'];
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
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'ueber-uns', label: 'Über uns', href: '#ueber-uns' },
    { id: 'team', label: 'Team', href: '#team' },
    { id: 'leistungen', label: 'Leistungen', href: '#leistungen' },
    { id: 'faq', label: 'FAQ', href: '#faq' },
    { id: 'kontakt', label: 'Standorte', href: '#kontakt' },
  ];

  return (
    <header className={`fixed top-0 w-full bg-white z-50 transition-all duration-300 ${scrolled ? 'shadow-md py-1' : 'shadow-sm'}`}>
      <div className="flex justify-between items-center w-full px-5 md:px-6 max-w-[1200px] mx-auto h-20">
        {/* Brand */}
        <a 
          href="#home" 
          className="flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]"
          aria-label="Lebensassistenz Rhein-Sieg-Bonn Home"
        >
          <img 
            src={LOGO_URL} 
            alt="Lebensassistenz Rhein-Sieg-Bonn Logo" 
            className="h-12 w-12 object-contain rounded-full shadow-xs" 
          />
          <div className="flex flex-col">
            <span className="font-bold text-[#1a675b] text-base md:text-lg leading-tight tracking-tight">
              Lebensassistenz
            </span>
            <span className="text-[11px] md:text-xs text-[#3f4946] font-medium tracking-wide">
              Rhein-Sieg-Bonn
            </span>
          </div>
        </a>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`text-[14px] font-semibold leading-[20px] tracking-[0.02em] transition-colors duration-300 ${
                  isActive
                    ? 'text-[#1a675b] font-bold border-b-2 border-[#1a675b] pb-1'
                    : 'nav-link text-[#3f4946] hover:text-[#1a675b]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+4922412610830"
            className="hidden md:flex text-[#3f4946] hover:text-[#1a675b] transition-colors duration-300 hover:scale-110 p-2"
            title="Anrufen: +49 2241 261 08 30"
          >
            <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 0" }}>
              call
            </span>
          </a>
          <a
            href="mailto:info@lebensassistenz-su-bn.de"
            className="hidden md:flex text-[#3f4946] hover:text-[#1a675b] transition-colors duration-300 hover:scale-110 p-2"
            title="E-Mail senden"
          >
            <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 0" }}>
              mail
            </span>
          </a>
          <button
            onClick={onOpenSupportModal}
            className="hidden md:inline-flex bg-[#ab3520] text-white px-6 py-3 rounded-lg text-[14px] font-semibold leading-[20px] hover:bg-[#feba49] hover:text-[#281800] transition-all duration-300 hover:scale-[1.03] hover:shadow-md cursor-pointer"
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
