import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data/contentData';

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  const filteredFaqs = FAQS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="max-w-[1200px] mx-auto px-5 md:px-6 py-16 md:py-24" id="faq">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-[32px] leading-[40px] font-bold tracking-[-0.01em] text-[#1a675b] mb-4">
          Häufig gestellte Fragen
        </h2>
        <p className="text-[18px] leading-[28px] text-[#3f4946] max-w-xl mx-auto">
          Antworten zu Antragstellung, Kostenübernahme und Betreuungsablauf.
        </p>
      </motion.div>

      {/* FAQ Search */}
      <motion.div
        className="max-w-2xl mx-auto mb-8 relative"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="relative flex items-center">
          <span className="material-symbols-outlined absolute left-4 text-[#6f7976]">search</span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Frage suchen (z. B. Kosten, Antrag, Bezugsperson)..."
            className="w-full pl-12 pr-4 py-3 bg-[#f6f3f2] border border-[#bec9c5] rounded-xl text-[16px] text-[#1c1b1b] focus:outline-none focus:border-[#1a675b] focus:ring-1 focus:ring-[#1a675b] transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 text-[#6f7976] hover:text-[#1c1b1b] p-1"
            >
              <span className="material-symbols-outlined text-sm">close</span>
            </button>
          )}
        </div>
      </motion.div>

      {/* Accordion Container */}
      <div className="max-w-3xl mx-auto flex flex-col gap-4">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-8 text-[#3f4946]">
            Keine passenden Fragen gefunden. Rufen Sie uns gerne direkt an unter{' '}
            <a href="tel:+4922412610830" className="text-[#1a675b] font-bold underline">
              +49 2241 261 08 30
            </a>
            .
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <motion.div
                key={faq.id}
                layout
                className="bg-[#f6f3f2] rounded-xl border border-[#e5e2e1] overflow-hidden transition-colors hover:border-[#8dd4c5]"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] font-semibold text-[#1c1b1b] group-hover:text-[#1a675b] transition-colors pr-4">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="material-symbols-outlined text-[#feba49] group-hover:scale-110 flex-shrink-0 text-2xl"
                  >
                    {isOpen ? 'remove' : 'add'}
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="text-[16px] leading-[24px] text-[#3f4946] border-t border-[#e5e2e1]/60 px-6 pb-6 pt-4">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })
        )}
      </div>
    </section>
  );
};
