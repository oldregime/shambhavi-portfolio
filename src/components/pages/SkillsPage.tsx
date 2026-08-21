import React from 'react';
import { SKILL_GROUPS, CERTIFICATIONS } from '../../data/portfolioData';
import { Cpu, Award, CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export const SkillsPage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 py-6 sm:py-10">
      
      <div className="flex items-center justify-between border-b-2 border-[#3f2a1e]/15 pb-4">
        <button
          onClick={() => onNavigate('leetcode')}
          className="flex items-center gap-1.5 font-hand text-base font-bold text-[#5d8aa8] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> 100 Days DSA
        </button>
        <span className="font-marker text-sm text-[#6a524a]">
          📖 Page 06 / 07 • Skills & Badges
        </span>
      </div>

      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ede0ca] border-2 border-[#3f2a1e] text-xs font-hand font-bold text-[#3f2a1e]" style={{ filter: 'url(#sketch-wobble)' }}>
          <Cpu className="w-4 h-4 text-[#5d8aa8]" />
          Technical Stack
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a110e] font-display">
          Skills & Verified Accreditations
        </h2>
        <p className="font-hand text-xl text-[#6a524a] max-w-xl">
          AWS cloud architecture, Python/SQL data engineering, Generative AI models, and web tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILL_GROUPS.map((group, idx) => {
          const bgColors = ['bg-[#fff9e6]', 'bg-[#edf7ed]', 'bg-[#e8f0fe]', 'bg-[#fdf0ec]'];
          const colors = ['#e8b042', '#7a9a7b', '#5d8aa8', '#d96b52'];
          const bg = bgColors[idx % bgColors.length];
          const color = colors[idx % colors.length];

          return (
            <div
              key={group.category}
              className={`p-6 sm:p-8 rounded-3xl ${bg} border-2 border-[#3f2a1e] shadow-lg space-y-5 relative`}
              style={{ filter: 'url(#sketch-wobble)' }}
            >
              <div className="absolute -top-3.5 left-10 w-24 h-6 tape rounded-sm" />

              <h3 className="text-xl font-bold text-[#1a110e] font-display border-b-2 border-[#3f2a1e]/15 pb-3 flex items-center justify-between">
                <span>{group.category}</span>
                <span className="font-hand text-lg text-[#6a524a]">{group.skills.length} tools</span>
              </h3>

              <div className="space-y-4">
                {group.skills.map((s) => (
                  <div key={s.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm sm:text-base font-bold text-[#1a110e]">
                      <span>{s.name}</span>
                      <span className="font-hand text-base text-[#6a524a]">{s.level}%</span>
                    </div>
                    <div className="w-full h-3 rounded-full bg-[#ede0ca] overflow-hidden border border-[#3f2a1e]/20">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
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

      {/* Certifications */}
      <div className="space-y-6 pt-4">
        <h3 className="text-2xl sm:text-3xl font-bold text-[#1a110e] font-display flex items-center gap-2">
          <Award className="w-6 h-6 text-[#e8b042]" /> Official Certifications & Badges
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.title}
              className="p-5 rounded-3xl bg-[#fffef9] border-2 border-[#3f2a1e] shadow-md flex flex-col justify-between space-y-4 hover:scale-[1.02] transition-transform"
              style={{ filter: 'url(#sketch-wobble)' }}
            >
              <div className="space-y-1.5">
                <span className="font-hand text-sm font-bold text-[#e8b042] block">
                  {cert.issueDate}
                </span>
                <h4 className="text-base font-bold text-[#1a110e] font-display leading-snug">
                  {cert.title}
                </h4>
                <p className="font-hand text-base text-[#5d8aa8] font-bold">
                  {cert.issuer}
                </p>
              </div>

              <div className="pt-3 border-t border-[#ede0ca]">
                <p className="text-xs font-semibold text-[#7a9a7b] flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4" />
                  {cert.badge}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between pt-8 border-t-2 border-[#3f2a1e]/15">
        <button
          onClick={() => onNavigate('leetcode')}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ede0ca] hover:bg-[#d9cca8] text-[#1a110e] font-hand text-lg font-bold border-2 border-[#3f2a1e] transition-transform hover:scale-105"
          style={{ filter: 'url(#sketch-wobble)' }}
        >
          <ArrowLeft className="w-4 h-4" /> Prev: 100 Days DSA
        </button>

        <button
          onClick={() => onNavigate('resume')}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5d8aa8] hover:bg-[#4a728e] text-white font-hand text-lg font-bold border-2 border-[#3f2a1e] transition-transform hover:scale-105 shadow-sm"
          style={{ filter: 'url(#sketch-wobble)' }}
        >
          <span>Next Page: Resume</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
