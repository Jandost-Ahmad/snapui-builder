import React from 'react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestSupport: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onRequestSupport,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto z-10 border border-[#e5e2e1] p-6 md:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#3f4946] hover:text-[#1c1b1b] p-2 rounded-full hover:bg-[#f6f3f2] transition-colors"
          aria-label="Schließen"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        <div className="w-14 h-14 rounded-full bg-[#a9f0e1]/30 flex items-center justify-center text-[#1a675b] mb-4">
          <span className="material-symbols-outlined text-3xl">{service.icon}</span>
        </div>

        <span className="text-xs font-bold uppercase tracking-wider text-[#1a675b]">
          Leistungsangebot
        </span>
        <h2 className="text-2xl font-bold text-[#1c1b1b] mt-1 mb-4">
          {service.title}
        </h2>

        <p className="text-[16px] leading-[26px] text-[#3f4946] mb-6">
          {service.fullDetails || service.description}
        </p>

        {service.keyBenefits && service.keyBenefits.length > 0 && (
          <div className="mb-6 bg-[#f6f3f2] p-4 rounded-xl border border-[#e5e2e1]">
            <h4 className="font-semibold text-[#1c1b1b] text-sm mb-3">
              Ihre Vorteile im Überblick:
            </h4>
            <ul className="space-y-2">
              {service.keyBenefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#3f4946]">
                  <span className="material-symbols-outlined text-[#1a675b] text-sm mt-0.5">
                    check_circle
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex gap-3 justify-end pt-2 border-t border-[#f0eded]">
          <button
            onClick={onClose}
            className="border border-[#1a675b] text-[#1a675b] px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#f6f3f2] transition-all cursor-pointer"
          >
            Schließen
          </button>
          <button
            onClick={() => {
              onClose();
              onRequestSupport();
            }}
            className="bg-[#ab3520] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#feba49] hover:text-[#281800] transition-all cursor-pointer"
          >
            Für diesen Bereich anfragen
          </button>
        </div>
      </div>
    </div>
  );
};
