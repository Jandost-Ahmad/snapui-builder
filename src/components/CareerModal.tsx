import React, { useState } from 'react';

interface CareerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CareerModal: React.FC<CareerModalProps> = ({ isOpen, onClose }) => {
  const [selectedJob, setSelectedJob] = useState<string>('Sozialarbeiter:in (B.A. / M.A.)');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  if (!isOpen) return null;

  const positions = [
    'Sozialarbeiter:in / Sozialpädagog:in (B.A. / M.A.)',
    'Heilerziehungspfleger:in',
    'Pflegefachkraft / Pflegeexperte',
    'Erzieher:in / Pädagogische Fachkraft',
    'Alltagsbegleiter:in & Betreuungskraft (§ 43b)',
    'Initiativbewerbung',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Bitte geben Sie Name und E-Mail an.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  const resetAndClose = () => {
    setFormData({ name: '', email: '', phone: '', experience: '', message: '' });
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={resetAndClose}
      />

      {/* Modal Container */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto z-10 border border-[#e5e2e1] p-6 md:p-8">
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
              <span className="material-symbols-outlined text-3xl">sentiment_satisfied</span>
            </div>
            <h3 className="text-2xl font-bold text-[#1a675b] mb-3">
              Bewerbung erfolgreich eingegangen!
            </h3>
            <p className="text-[#3f4946] mb-6">
              Vielen Dank für Ihr Interesse an einer Karriere bei Lebensassistenz Rhein-Sieg-Bonn. Unsere Personalleitung prüft Ihre Unterlagen und meldet sich innerhalb weniger Tage bei Ihnen.
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
            <span className="text-xs font-bold uppercase tracking-wider text-[#1a675b]">
              Werde Teil unseres Teams
            </span>
            <h2 className="text-2xl font-bold text-[#1c1b1b] mt-1 mb-2">
              Jetzt online bewerben
            </h2>
            <p className="text-sm text-[#3f4946] mb-6">
              Arbeiten bei Lebensassistenz Rhein-Sieg-Bonn bedeutet sinnstiftendes Handeln, flexible Arbeitszeiten und wertschätzende Zusammenarbeit.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#1c1b1b] mb-1">
                  Position wählen *
                </label>
                <select
                  value={selectedJob}
                  onChange={(e) => setSelectedJob(e.target.value)}
                  className="w-full rounded-lg border border-[#bec9c5] p-2.5 text-sm text-[#1c1b1b] focus:ring-1 focus:ring-[#1a675b] focus:border-[#1a675b] bg-white"
                >
                  {positions.map((pos) => (
                    <option key={pos} value={pos}>
                      {pos}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1c1b1b] mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Vor- und Nachname"
                  className="w-full rounded-lg border border-[#bec9c5] p-2.5 text-sm text-[#1c1b1b] focus:ring-1 focus:ring-[#1a675b] focus:border-[#1a675b]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#1c1b1b] mb-1">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ihre.email@beispiel.de"
                    className="w-full rounded-lg border border-[#bec9c5] p-2.5 text-sm text-[#1c1b1b] focus:ring-1 focus:ring-[#1a675b] focus:border-[#1a675b]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1c1b1b] mb-1">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+49 ..."
                    className="w-full rounded-lg border border-[#bec9c5] p-2.5 text-sm text-[#1c1b1b] focus:ring-1 focus:ring-[#1a675b] focus:border-[#1a675b]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1c1b1b] mb-1">
                  Qualifikation / Erfahrung in Kürze
                </label>
                <input
                  type="text"
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  placeholder="z. B. 3 Jahre ambulante Betreuung, Führerschein Kl. B"
                  className="w-full rounded-lg border border-[#bec9c5] p-2.5 text-sm text-[#1c1b1b] focus:ring-1 focus:ring-[#1a675b] focus:border-[#1a675b]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1c1b1b] mb-1">
                  Nachricht / Motivation
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Erzählen Sie uns kurz, was Sie motiviert..."
                  className="w-full rounded-lg border border-[#bec9c5] p-2.5 text-sm text-[#1c1b1b] focus:ring-1 focus:ring-[#1a675b] focus:border-[#1a675b] resize-none"
                ></textarea>
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="border border-[#1a675b] text-[#1a675b] px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#f6f3f2] transition-all cursor-pointer"
                >
                  Abbrechen
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#1a675b] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#398073] transition-all cursor-pointer flex items-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      <span>Bewerbung wird gesendet...</span>
                    </>
                  ) : (
                    'Bewerbung absenden'
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
