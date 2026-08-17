import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../data/contentData';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SupportModal: React.FC<SupportModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [careLevel, setCareLevel] = useState<string>('Unbekannt / Beratung gewünscht');
  const [contactInfo, setContactInfo] = useState({
    name: '',
    phone: '',
    email: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleNext = () => {
    if (step === 1 && selectedServices.length === 0) {
      alert('Bitte wählen Sie mindestens einen Leistungsbereich aus.');
      return;
    }
    setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactInfo.name || (!contactInfo.phone && !contactInfo.email)) {
      alert('Bitte geben Sie Ihren Namen und mindestens eine Kontaktmöglichkeit an.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const resetAndClose = () => {
    setStep(1);
    setSelectedServices([]);
    setCareLevel('Unbekannt / Beratung gewünscht');
    setContactInfo({ name: '', phone: '', email: '', notes: '' });
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-xs"
            onClick={resetAndClose}
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto z-10 border border-[#e5e2e1] p-6 md:p-8"
          >
            {/* Close Button */}
            <button
              onClick={resetAndClose}
              className="absolute top-4 right-4 text-[#3f4946] hover:text-[#1c1b1b] p-2 rounded-full hover:bg-[#f6f3f2] transition-colors"
              aria-label="Schließen"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>

            {isSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-[#a9f0e1] text-[#005046] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-3xl">task_alt</span>
                </div>
                <h3 className="text-2xl font-bold text-[#1a675b] mb-3">
                  Anfrage erfolgreich übermittelt!
                </h3>
                <p className="text-[#3f4946] mb-6">
                  Vielen Dank, {contactInfo.name}. Wir haben Ihre Anfrage zur ambulanten Lebensassistenz erhalten. Unser Beratungsteam prüft Ihre Angaben und setzt sich in Kürze mit Ihnen in Verbindung.
                </p>
                <button
                  onClick={resetAndClose}
                  className="bg-[#1a675b] text-white px-8 py-3 rounded-lg text-sm font-semibold hover:bg-[#398073] transition-all cursor-pointer"
                >
                  Schließen
                </button>
              </div>
            ) : (
              <div>
                {/* Header & Steps progress */}
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1a675b]">
                    Unverbindliche Erstberatung
                  </span>
                  <h2 className="text-2xl font-bold text-[#1c1b1b] mt-1">
                    Unterstützung anfragen
                  </h2>
                  {/* Progress bar */}
                  <div className="flex items-center gap-2 mt-4">
                    {[1, 2, 3].map((s) => (
                      <div
                        key={s}
                        className={`h-2 flex-1 rounded-full transition-all ${
                          s <= step ? 'bg-[#1a675b]' : 'bg-[#e5e2e1]'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-[#3f4946] mt-1 block">
                    Schritt {step} von 3
                  </span>
                </div>

                {/* STEP 1: Select Services */}
                {step === 1 && (
                  <div>
                    <h3 className="text-lg font-semibold text-[#1c1b1b] mb-3">
                      Wobei benötigen Sie oder Ihre Angehörigen Unterstützung?
                    </h3>
                    <p className="text-sm text-[#3f4946] mb-4">
                      Wählen Sie einen oder mehrere Bereiche aus:
                    </p>
                    <div className="space-y-2 mb-6">
                      {SERVICES.map((srv) => {
                        const isSelected = selectedServices.includes(srv.id);
                        return (
                          <div
                            key={srv.id}
                            onClick={() => toggleService(srv.id)}
                            className={`p-3.5 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
                              isSelected
                                ? 'border-[#1a675b] bg-[#e3fbf5] font-medium'
                                : 'border-[#e5e2e1] hover:border-[#8dd4c5] bg-[#f6f3f2]'
                            }`}
                          >
                            <div
                              className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                                isSelected
                                  ? 'bg-[#1a675b] border-[#1a675b] text-white'
                                  : 'border-[#bec9c5] bg-white'
                              }`}
                            >
                              {isSelected && (
                                <span className="material-symbols-outlined text-xs">check</span>
                              )}
                            </div>
                            <span className="material-symbols-outlined text-[#1a675b]">
                              {srv.icon}
                            </span>
                            <span className="text-sm text-[#1c1b1b]">{srv.title}</span>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex justify-end">
                      <button
                        onClick={handleNext}
                        className="bg-[#ab3520] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#feba49] hover:text-[#281800] transition-all cursor-pointer flex items-center gap-1"
                      >
                        <span>Weiter</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: Pflegegrad & Status */}
                {step === 2 && (
                  <div>
                    <h3 className="text-lg font-semibold text-[#1c1b1b] mb-3">
                      Liegt bereits ein Pflegegrad oder Status der Eingliederungshilfe vor?
                    </h3>
                    <div className="space-y-2 mb-6">
                      {[
                        'Kein Pflegegrad vorhanden',
                        'Pflegegrad 1 - 2',
                        'Pflegegrad 3 - 5',
                        'Eingliederungshilfe beantragt / genehmigt',
                        'Unbekannt / Beratung gewünscht',
                      ].map((level) => (
                        <label
                          key={level}
                          onClick={() => setCareLevel(level)}
                          className={`p-3.5 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
                            careLevel === level
                              ? 'border-[#1a675b] bg-[#e3fbf5] font-medium'
                              : 'border-[#e5e2e1] hover:border-[#8dd4c5] bg-[#f6f3f2]'
                          }`}
                        >
                          <input
                            type="radio"
                            name="careLevel"
                            checked={careLevel === level}
                            onChange={() => setCareLevel(level)}
                            className="text-[#1a675b] focus:ring-[#1a675b]"
                          />
                          <span className="text-sm text-[#1c1b1b]">{level}</span>
                        </label>
                      ))}
                    </div>
                    <div className="flex justify-between">
                      <button
                        onClick={handlePrev}
                        className="border border-[#1a675b] text-[#1a675b] px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#f6f3f2] transition-all cursor-pointer"
                      >
                        Zurück
                      </button>
                      <button
                        onClick={handleNext}
                        className="bg-[#ab3520] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#feba49] hover:text-[#281800] transition-all cursor-pointer flex items-center gap-1"
                      >
                        <span>Weiter</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: Contact details */}
                {step === 3 && (
                  <form onSubmit={handleSubmit}>
                    <h3 className="text-lg font-semibold text-[#1c1b1b] mb-3">
                      Ihre Kontaktdaten für die Rückmeldung
                    </h3>
                    <div className="space-y-3 mb-6">
                      <div>
                        <label className="block text-xs font-semibold text-[#1c1b1b] mb-1">
                          Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={contactInfo.name}
                          onChange={(e) =>
                            setContactInfo({ ...contactInfo, name: e.target.value })
                          }
                          placeholder="Ihr Name"
                          className="w-full rounded-lg border border-[#bec9c5] p-2.5 text-sm text-[#1c1b1b] focus:ring-1 focus:ring-[#1a675b] focus:border-[#1a675b]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#1c1b1b] mb-1">
                          Telefonnummer *
                        </label>
                        <input
                          type="tel"
                          required
                          value={contactInfo.phone}
                          onChange={(e) =>
                            setContactInfo({ ...contactInfo, phone: e.target.value })
                          }
                          placeholder="Für schnelle Rückfragen"
                          className="w-full rounded-lg border border-[#bec9c5] p-2.5 text-sm text-[#1c1b1b] focus:ring-1 focus:ring-[#1a675b] focus:border-[#1a675b]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#1c1b1b] mb-1">
                          E-Mail-Adresse
                        </label>
                        <input
                          type="email"
                          value={contactInfo.email}
                          onChange={(e) =>
                            setContactInfo({ ...contactInfo, email: e.target.value })
                          }
                          placeholder="ihre.email@beispiel.de"
                          className="w-full rounded-lg border border-[#bec9c5] p-2.5 text-sm text-[#1c1b1b] focus:ring-1 focus:ring-[#1a675b] focus:border-[#1a675b]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#1c1b1b] mb-1">
                          Anmerkung / Wunschtermin (optional)
                        </label>
                        <textarea
                          rows={2}
                          value={contactInfo.notes}
                          onChange={(e) =>
                            setContactInfo({ ...contactInfo, notes: e.target.value })
                          }
                          placeholder="z. B. Bevorzugte Rückrufzeit vormittags..."
                          className="w-full rounded-lg border border-[#bec9c5] p-2.5 text-sm text-[#1c1b1b] focus:ring-1 focus:ring-[#1a675b] focus:border-[#1a675b] resize-none"
                        ></textarea>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={handlePrev}
                        className="border border-[#1a675b] text-[#1a675b] px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#f6f3f2] transition-all cursor-pointer"
                      >
                        Zurück
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-[#ab3520] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#feba49] hover:text-[#281800] transition-all cursor-pointer flex items-center gap-2 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                            <span>Wird übermittelt...</span>
                          </>
                        ) : (
                          'Anfrage absenden'
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
