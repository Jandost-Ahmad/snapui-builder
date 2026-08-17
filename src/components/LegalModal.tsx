import React from 'react';

interface LegalModalProps {
  type: 'impressum' | 'datenschutz' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto z-10 border border-[#e5e2e1] p-6 md:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#3f4946] hover:text-[#1c1b1b] p-2 rounded-full hover:bg-[#f6f3f2] transition-colors"
          aria-label="Schließen"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        {type === 'impressum' ? (
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1a675b]">
              Rechtliche Angaben
            </span>
            <h2 className="text-2xl font-bold text-[#1c1b1b] mt-1 mb-6">
              Impressum
            </h2>

            <div className="space-y-4 text-sm text-[#3f4946] leading-relaxed">
              <div>
                <p className="font-bold text-[#1c1b1b]">Angaben gemäß § 5 TMG:</p>
                <p>
                  Lebensassistenz Rhein-Sieg-Bonn gGmbH<br />
                  Nogenter-Platz 4<br />
                  53721 Siegburg
                </p>
              </div>

              <div>
                <p className="font-bold text-[#1c1b1b]">Vertreten durch:</p>
                <p>Geschäftsführung: Sabine Müller, Markus Weber</p>
              </div>

              <div>
                <p className="font-bold text-[#1c1b1b]">Kontakt:</p>
                <p>
                  Telefon: +49 2241 261 08 30<br />
                  E-Mail: info@lebensassistenz-su-bn.de
                </p>
              </div>

              <div>
                <p className="font-bold text-[#1c1b1b]">Registereintrag:</p>
                <p>
                  Eintragung im Handelsregister.<br />
                  Registergericht: Amtsgericht Siegburg<br />
                  Registernummer: HRB 12345
                </p>
              </div>

              <div>
                <p className="font-bold text-[#1c1b1b]">Umsatzsteuer-ID:</p>
                <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: DE 987654321</p>
              </div>

              <div>
                <p className="font-bold text-[#1c1b1b]">Aufsichtsbehörde & Zulassung:</p>
                <p>Zugelassener Träger der ambulanten Eingliederungshilfe beim Landschaftsverband Rheinland (LVR).</p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1a675b]">
              Datenschutz
            </span>
            <h2 className="text-2xl font-bold text-[#1c1b1b] mt-1 mb-6">
              Datenschutzerklärung
            </h2>

            <div className="space-y-4 text-sm text-[#3f4946] leading-relaxed">
              <div>
                <p className="font-bold text-[#1c1b1b]">1. Datenschutz auf einen Blick</p>
                <p>
                  Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Nachfolgend informieren wir Sie über die Verarbeitung personenbezogener Daten bei der Nutzung unserer Webseite und der Kontaktaufnahme zur ambulanten Lebensassistenz.
                </p>
              </div>

              <div>
                <p className="font-bold text-[#1c1b1b]">2. Verantwortliche Stelle</p>
                <p>
                  Lebensassistenz Rhein-Sieg-Bonn gGmbH, Nogenter-Platz 4, 53721 Siegburg.<br />
                  E-Mail: datenschutz@lebensassistenz-su-bn.de
                </p>
              </div>

              <div>
                <p className="font-bold text-[#1c1b1b]">3. Datenerfassung auf unserer Website</p>
                <p>
                  Ihre Daten werden einerseits dadurch erhoben, dass Sie uns diese mitteilen (z. B. im Kontaktformular oder im Anfrage-Assistenten). Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst (z. B. technische Internetbrowser- & Uhrzeitdaten).
                </p>
              </div>

              <div>
                <p className="font-bold text-[#1c1b1b]">4. Ihre Rechte</p>
                <p>
                  Sie haben jederzeit das Recht auf kostenfreie Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-[#f0eded] flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#1a675b] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#398073] transition-all cursor-pointer"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
};
