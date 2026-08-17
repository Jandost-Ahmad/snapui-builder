import React from 'react';
import { motion } from 'motion/react';
import { TEAM_MEMBERS } from '../data/contentData';
import { TeamMember } from '../types';

interface TeamSectionProps {
  onSelectMember: (member: TeamMember) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onSelectMember }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="bg-[#f6f3f2] py-16 md:py-24" id="team">
      <div className="max-w-[1200px] mx-auto px-5 md:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[32px] leading-[40px] font-bold tracking-[-0.01em] text-[#1a675b] mb-4">
            Unser Team
          </h2>
          <p className="text-[18px] leading-[28px] text-[#3f4946] max-w-2xl mx-auto">
            Lernen Sie die Menschen kennen, die Sie begleiten.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {TEAM_MEMBERS.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl overflow-hidden ambient-card cursor-pointer group flex flex-col justify-between"
              onClick={() => onSelectMember(member)}
            >
              <div>
                <div className="overflow-hidden h-64 bg-[#e5e2e1]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-[24px] leading-[32px] font-semibold text-[#1c1b1b] mb-1 group-hover:text-[#1a675b] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-[16px] leading-[24px] text-[#1a675b] font-medium mb-4">
                    {member.role}
                  </p>
                  
                  <div className="flex flex-col gap-2 border-t border-[#f0eded] pt-4">
                    <a
                      href={`tel:${member.phone.replace(/\s+/g, '')}`}
                      onClick={(e) => e.stopPropagation()}
                      className="text-[#3f4946] hover:text-[#1a675b] text-sm flex items-center justify-center gap-2 transition-colors duration-300 py-1"
                    >
                      <span className="material-symbols-outlined text-[18px] text-[#1a675b]">call</span>
                      {member.phone}
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      onClick={(e) => e.stopPropagation()}
                      className="text-[#3f4946] hover:text-[#1a675b] text-sm flex items-center justify-center gap-2 transition-colors duration-300 py-1"
                    >
                      <span className="material-symbols-outlined text-[18px] text-[#1a675b]">mail</span>
                      {member.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#fcf9f8] py-3 text-center border-t border-[#e5e2e1]/60 text-xs text-[#1a675b] font-semibold group-hover:bg-[#a9f0e1]/20 transition-colors">
                Profil & Werdegang anzeigen
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
