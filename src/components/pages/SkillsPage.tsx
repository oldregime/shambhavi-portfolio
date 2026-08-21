import React from 'react';
import { SKILL_GROUPS, CERTIFICATIONS } from '../../data/portfolioData';
import { CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export const SkillsPage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <div className="h-full flex flex-col justify-between py-2 sm:py-3 space-y-3 sm:space-y-4 overflow-hidden">
      
      <div className="flex items-center justify-between border-b border-[#3f2a1e]/15 pb-2 shrink-0">
        <button
          onClick={() => onNavigate('leetcode')}
          className="flex items-center gap-1 font-hand text-sm font-bold text-[#5d8aa8] hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> 100 Days DSA
        </button>
        <span className="font-marker text-xs text-[#6a524a]">
          📖 Page 06 / 07 • Skills & Badges
        </span>
      </div>

      {/* 2x2 Grid of Sticky Notes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 flex-1 my-auto overflow-hidden">
        {SKILL_GROUPS.map((group, idx) => {
          const bgColors = ['bg-[#fff9e6]', 'bg-[#edf7ed]', 'bg-[#e8f0fe]', 'bg-[#fdf0ec]'];
          const colors = ['#e8b042', '#7a9a7b', '#5d8aa8', '#d96b52'];
          const bg = bgColors[idx % bgColors.length];
          const color = colors[idx % colors.length];

          return (
            <div
              key={group.category}
              className={`p-3.5 sm:p-4 rounded-2xl ${bg} border-2 border-[#3f2a1e] shadow-xs space-y-2.5 relative flex flex-col justify-between overflow-hidden`}
              style={{ filter: 'url(#sketch-wobble)' }}
            >
              <h3 className="text-sm font-bold text-[#1a110e] font-display border-b border-[#3f2a1e]/15 pb-1 flex items-center justify-between">
                <span>{group.category}</span>
                <span className="font-hand text-xs text-[#6a524a]">{group.skills.length} tools</span>
              </h3>

              <div className="space-y-2">
                {group.skills.map((s) => (
                  <div key={s.name} className="space-y-0.5">
                    <div className="flex items-center justify-between text-xs font-bold text-[#1a110e]">
                      <span>{s.name}</span>
                      <span className="font-hand text-xs text-[#6a524a]">{s.level}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#ede0ca] overflow-hidden border border-[#3f2a1e]/20">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${s.level}%`, backgroundColor: color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Horizontal Strip of Certifications */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 shrink-0">
        {CERTIFICATIONS.map((cert) => (
          <div
            key={cert.title}
            className="p-2 rounded-xl bg-[#fffef9] border border-[#3f2a1e] shadow-xs flex flex-col justify-between"
          >
            <div>
              <span className="font-hand text-[10px] font-bold text-[#e8b042] block">{cert.issueDate}</span>
              <p className="text-[11px] font-bold text-[#1a110e] leading-tight line-clamp-1">{cert.title}</p>
            </div>
            <p className="text-[10px] font-semibold text-[#7a9a7b] flex items-center gap-1 mt-1">
              <CheckCircle className="w-3 h-3 shrink-0" /> {cert.issuer}
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-[#3f2a1e]/15 shrink-0">
        <button
          onClick={() => onNavigate('leetcode')}
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#ede0ca] hover:bg-[#d9cca8] text-[#1a110e] font-hand text-base font-bold border border-[#3f2a1e] transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Prev: 100 Days
        </button>

        <button
          onClick={() => onNavigate('resume')}
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#5d8aa8] hover:bg-[#4a728e] text-white font-hand text-base font-bold border border-[#3f2a1e] transition-transform hover:scale-105 shadow-xs"
        >
          <span>Next: Resume</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
