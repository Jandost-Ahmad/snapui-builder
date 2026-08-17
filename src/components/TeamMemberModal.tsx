import React from 'react';
import { TeamMember } from '../types';

interface TeamMemberModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

export const TeamMemberModal: React.FC<TeamMemberModalProps> = ({ member, onClose }) => {
  if (!member) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto z-10 border border-[#e5e2e1] p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#3f4946] hover:text-[#1c1b1b] p-2 rounded-full hover:bg-[#f6f3f2] transition-colors"
          aria-label="Schließen"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-2 border-[#1a675b]/20 shadow-md">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="text-2xl font-bold text-[#1c1b1b]">{member.name}</h3>
          <p className="text-sm font-semibold text-[#1a675b] mb-4">{member.role}</p>

          {member.bio && (
            <p className="text-sm text-[#3f4946] leading-relaxed mb-6 bg-[#f6f3f2] p-4 rounded-xl border border-[#e5e2e1]">
              {member.bio}
            </p>
          )}

          <div className="w-full space-y-2">
            <a
              href={`tel:${member.phone.replace(/\s+/g, '')}`}
              className="flex items-center justify-center gap-2 bg-[#1a675b] text-white w-full py-3 rounded-lg text-sm font-semibold hover:bg-[#398073] transition-all"
            >
              <span className="material-symbols-outlined text-sm">call</span>
              <span>Anrufen: {member.phone}</span>
            </a>
            <a
              href={`mailto:${member.email}`}
              className="flex items-center justify-center gap-2 border border-[#1a675b] text-[#1a675b] w-full py-3 rounded-lg text-sm font-semibold hover:bg-[#f6f3f2] transition-all"
            >
              <span className="material-symbols-outlined text-sm">mail</span>
              <span>E-Mail senden</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
