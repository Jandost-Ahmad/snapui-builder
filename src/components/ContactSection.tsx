import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LOCATIONS } from '../data/contentData';

export const ContactSection: React.FC = () => {
  const [selectedLocationId, setSelectedLocationId] = useState<string>('siegburg');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const selectedLocation = LOCATIONS.find((loc) => loc.id === selectedLocationId) || LOCATIONS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Bitte füllen Sie mindestens Name, E-Mail und Nachricht aus.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section className="bg-[#F7F7F5] py-16 md:py-24" id="kontakt">
      <div className="max-w-[1200px] mx-auto px-5 md:px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-[32px] leading-[40px] font-bold tracking-[-0.01em] text-[#1a675b] mb-6">
              Kontaktieren Sie uns
            </h2>
            <p className="text-[18px] leading-[28px] text-[#3f4946] mb-8">
              Haben Sie Fragen oder möchten Sie ein unverbindliches Erstgespräch vereinbaren? Wir freuen uns auf Ihre Nachricht.
            </p>

            {/* Standorte Switcher Tabs (only if multiple locations exist) */}
            {LOCATIONS.length > 1 && (
              <div className="flex gap-2 mb-6 p-1 bg-[#eae7e7] rounded-xl max-w-md">
                {LOCATIONS.map((loc) => (
                  <button
                    key={loc.id}
                    onClick={() => setSelectedLocationId(loc.id)}
                    className={`flex-1 py-2 px-4 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                      selectedLocationId === loc.id
                        ? 'bg-white text-[#1a675b] shadow-xs'
                        : 'text-[#3f4946] hover:text-[#1c1b1b]'
                    }`}
                  >
                    {loc.name}
                  </button>
                ))}
              </div>
            )}

            {/* Location Detail Box */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedLocation.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-6 mb-8 bg-white p-6 rounded-2xl border border-[#e5e2e1] shadow-xs"
              >
                <div className="flex items-start gap-4 group">
                  <span className="material-symbols-outlined text-[#feba49] mt-1 text-2xl transition-transform duration-300 group-hover:scale-110">
                    location_on
                  </span>
                  <div>
                    <p className="font-bold text-[#1c1b1b]">{selectedLocation.name}</p>
                    <p className="text-[#3f4946]">
                      {selectedLocation.address}<br />
                      {selectedLocation.city}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <span className="material-symbols-outlined text-[#feba49] mt-1 text-2xl transition-transform duration-300 group-hover:scale-110">
                    call
                  </span>
                  <div>
                    <p className="font-bold text-[#1c1b1b]">Telefon</p>
                    <a
                      href={`tel:${selectedLocation.phone.replace(/\s+/g, '')}`}
                      className="text-[#3f4946] hover:text-[#1a675b] transition-colors duration-300"
                    >
                      {selectedLocation.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <span className="material-symbols-outlined text-[#feba49] mt-1 text-2xl transition-transform duration-300 group-hover:scale-110">
                    mail
                  </span>
                  <div>
                    <p className="font-bold text-[#1c1b1b]">E-Mail</p>
                    <a
                      href={`mailto:${selectedLocation.email}`}
                      className="text-[#3f4946] hover:text-[#1a675b] transition-colors duration-300"
                    >
                      {selectedLocation.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group pt-2 border-t border-[#f0eded]">
                  <span className="material-symbols-outlined text-[#feba49] mt-1 text-2xl">
                    schedule
                  </span>
                  <div>
                    <p className="font-bold text-[#1c1b1b]">Öffnungszeiten</p>
                    <p className="text-[#3f4946] text-sm">{selectedLocation.hours}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-sm border border-[#e5e2e1]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-[#a9f0e1] text-[#005046] rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-3xl">check_circle</span>
                </div>
                <h3 className="text-[24px] font-bold text-[#1a675b] mb-2">Vielen Dank!</h3>
                <p className="text-[#3f4946] max-w-md mb-6">
                  Ihre Nachricht wurde erfolgreich an unser Team in {selectedLocation.name} übermittelt. Wir melden uns innerhalb eines Werktages persönlich bei Ihnen.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', message: '' });
                  }}
                  className="bg-[#1a675b] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#398073] transition-all cursor-pointer"
                >
                  Weitere Nachricht senden
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-[14px] font-semibold leading-[20px] tracking-[0.02em] text-[#1c1b1b] mb-2" htmlFor="name">
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ihr Vor- und Nachname"
                    className="w-full rounded-lg border border-[#bec9c5] focus:border-[#1a675b] focus:ring-1 focus:ring-[#1a675b] text-[16px] leading-[24px] p-3 text-[#1c1b1b] transition-shadow duration-300"
                  />
                </div>

                <div>
                  <label className="block text-[14px] font-semibold leading-[20px] tracking-[0.02em] text-[#1c1b1b] mb-2" htmlFor="email">
                    E-Mail *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ihre.email@beispiel.de"
                    className="w-full rounded-lg border border-[#bec9c5] focus:border-[#1a675b] focus:ring-1 focus:ring-[#1a675b] text-[16px] leading-[24px] p-3 text-[#1c1b1b] transition-shadow duration-300"
                  />
                </div>

                <div>
                  <label className="block text-[14px] font-semibold leading-[20px] tracking-[0.02em] text-[#1c1b1b] mb-2" htmlFor="phone">
                    Telefon (optional)
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+49 ..."
                    className="w-full rounded-lg border border-[#bec9c5] focus:border-[#1a675b] focus:ring-1 focus:ring-[#1a675b] text-[16px] leading-[24px] p-3 text-[#1c1b1b] transition-shadow duration-300"
                  />
                </div>

                <div>
                  <label className="block text-[14px] font-semibold leading-[20px] tracking-[0.02em] text-[#1c1b1b] mb-2" htmlFor="message">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Wie können wir Ihnen helfen?"
                    className="w-full rounded-lg border border-[#bec9c5] focus:border-[#1a675b] focus:ring-1 focus:ring-[#1a675b] text-[16px] leading-[24px] p-3 h-32 text-[#1c1b1b] transition-shadow duration-300 resize-none"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  className="bg-[#ab3520] text-white px-6 py-3.5 rounded-lg text-[14px] font-semibold hover:bg-[#feba49] hover:text-[#281800] transition-colors duration-300 mt-2 hover:shadow-md cursor-pointer flex justify-center items-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      <span>Wird gesendet...</span>
                    </>
                  ) : (
                    'Nachricht senden'
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
