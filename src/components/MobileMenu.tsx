import React from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSupportModal: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onOpenSupportModal }) => {
  if (!isOpen) return null;

  const handleNavClick = (href: string) => {
    onClose();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Slide-out Menu Panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col pt-6 px-6 pb-6 overflow-y-auto animate-slide-left">
        <div className="flex justify-between items-center mb-8 border-b border-[#e5e2e1] pb-4">
          <span className="font-bold text-[#1a675b] text-lg">Lebensassistenz</span>
          <button
            onClick={onClose}
            className="text-[#1c1b1b] p-2 hover:bg-[#f6f3f2] rounded-full transition-all active:scale-95"
            aria-label="Menü schließen"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        <nav className="flex flex-col gap-5 text-[20px] font-semibold mb-8">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="text-[#1a675b] hover:translate-x-1 transition-transform"
          >
            Home
          </a>
          <a
            href="#ueber-uns"
            onClick={(e) => { e.preventDefault(); handleNavClick('#ueber-uns'); }}
            className="text-[#3f4946] hover:text-[#1a675b] hover:translate-x-1 transition-transform"
          >
            Über uns
          </a>
          <a
            href="#team"
            onClick={(e) => { e.preventDefault(); handleNavClick('#team'); }}
            className="text-[#3f4946] hover:text-[#1a675b] hover:translate-x-1 transition-transform"
          >
            Team
          </a>
          <a
            href="#leistungen"
            onClick={(e) => { e.preventDefault(); handleNavClick('#leistungen'); }}
            className="text-[#3f4946] hover:text-[#1a675b] hover:translate-x-1 transition-transform"
          >
            Leistungen
          </a>
          <a
            href="#faq"
            onClick={(e) => { e.preventDefault(); handleNavClick('#faq'); }}
            className="text-[#3f4946] hover:text-[#1a675b] hover:translate-x-1 transition-transform"
          >
            FAQ
          </a>
          <a
            href="#kontakt"
            onClick={(e) => { e.preventDefault(); handleNavClick('#kontakt'); }}
            className="text-[#3f4946] hover:text-[#1a675b] hover:translate-x-1 transition-transform"
          >
            Standorte
          </a>
        </nav>

        <div className="mt-auto pt-6 border-t border-[#e5e2e1] flex flex-col gap-4">
          <a
            href="tel:+4922412610830"
            className="flex items-center gap-3 text-[#3f4946] hover:text-[#1a675b] text-[16px] font-medium transition-colors"
          >
            <span className="material-symbols-outlined text-[#1a675b]">call</span>
            +49 2241 261 08 30
          </a>
          <a
            href="mailto:info@lebensassistenz-su-bn.de"
            className="flex items-center gap-3 text-[#3f4946] hover:text-[#1a675b] text-[16px] font-medium transition-colors"
          >
            <span className="material-symbols-outlined text-[#1a675b]">mail</span>
            info@lebensassistenz-su-bn.de
          </a>
          <button
            onClick={() => {
              onClose();
              onOpenSupportModal();
            }}
            className="w-full inline-flex justify-center items-center bg-[#ab3520] text-white px-6 py-4 rounded-lg text-[16px] font-semibold hover:bg-[#feba49] hover:text-[#281800] transition-all active:scale-95 shadow-md mt-2 cursor-pointer"
          >
            Unterstützung anfragen
          </button>
        </div>
      </div>
    </div>
  );
};
