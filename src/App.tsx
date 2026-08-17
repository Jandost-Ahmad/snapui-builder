import { useState } from 'react';
import { Header } from './components/Header';
import { MobileMenu } from './components/MobileMenu';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { PrinciplesSection } from './components/PrinciplesSection';
import { ServicesSection } from './components/ServicesSection';
import { TeamSection } from './components/TeamSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SupportModal } from './components/SupportModal';
import { CareerModal } from './components/CareerModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { TeamMemberModal } from './components/TeamMemberModal';
import { LegalModal } from './components/LegalModal';
import { ServiceItem, TeamMember } from './types';

export default function App() {
  const [isSupportModalOpen, setIsSupportModalOpen] = useState<boolean>(false);
  const [isCareerModalOpen, setIsCareerModalOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [legalModalType, setLegalModalType] = useState<'impressum' | 'datenschutz' | null>(null);

  return (
    <div className="min-h-screen bg-[#fcf9f8] text-[#1c1b1b] flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Header */}
      <Header
        onOpenSupportModal={() => setIsSupportModalOpen(true)}
        onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenSupportModal={() => setIsSupportModalOpen(true)}
      />

      {/* Main Sections */}
      <main className="pt-20 flex-grow">
        <HeroSection
          onOpenSupportModal={() => setIsSupportModalOpen(true)}
          onOpenCareerModal={() => setIsCareerModalOpen(true)}
        />
        <AboutSection />
        <PrinciplesSection />
        <ServicesSection onSelectService={(service) => setSelectedService(service)} />
        <TeamSection onSelectMember={(member) => setSelectedMember(member)} />
        <FaqSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenLegalModal={(type) => setLegalModalType(type)}
        onOpenCareerModal={() => setIsCareerModalOpen(true)}
      />

      {/* Modals */}
      <SupportModal
        isOpen={isSupportModalOpen}
        onClose={() => setIsSupportModalOpen(false)}
      />

      <CareerModal
        isOpen={isCareerModalOpen}
        onClose={() => setIsCareerModalOpen(false)}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestSupport={() => setIsSupportModalOpen(true)}
      />

      <TeamMemberModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
