import React from 'react';
import { SKILL_GROUPS, CERTIFICATIONS } from '../data/portfolioData';
import { Cpu, Award, CheckCircle } from 'lucide-react';

export const SketchSkills: React.FC = () => {
  return (
    <section id="skills" className="relative py-20 px-6 sm:px-12 lg:px-16">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ede0ca] border-2 border-[#3f2a1e] text-xs font-hand font-bold text-[#3f2a1e]" style={{ filter: 'url(#sketch-wobble)' }}>
            <Cpu className="w-3.5 h-3.5 text-[#5d8aa8]" />
            Notebook Section 06
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2b1f1d] font-display">
            Skills & Accreditations
          </h2>
          <p className="font-hand text-xl text-[#6a524a] max-w-xl mx-auto">
            Tools, cloud platforms, programming languages, and verified certifications.
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
                <div className="absolute -top-3 left-10 w-24 h-5 tape rounded-sm" />

                <h3 className="text-lg font-bold text-[#2b1f1d] font-display border-b border-[#3f2a1e]/15 pb-2 flex items-center justify-between">
                  <span>{group.category}</span>
                  <span className="font-hand text-base text-[#6a524a]">{group.skills.length} tools</span>
                </h3>

                <div className="space-y-3.5">
                  {group.skills.map((s) => (
                    <div key={s.name} className="space-y-1">
                      <div className="flex items-center justify-between text-xs font-semibold text-[#2b1f1d]">
                        <span>{s.name}</span>
                        <span className="font-hand text-sm text-[#6a524a]">{s.level}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-[#ede0ca] overflow-hidden border border-[#3f2a1e]/20">
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

        <div className="space-y-6 pt-6">
          <h3 className="text-2xl font-bold text-[#2b1f1d] font-display text-center flex items-center justify-center gap-2">
            <Award className="w-6 h-6 text-[#e8b042]" /> Verified Certifications & Badges
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.title}
                className="p-5 rounded-2xl bg-[#fffef9] border-2 border-[#3f2a1e] shadow-md flex flex-col justify-between space-y-3"
                style={{ filter: 'url(#sketch-wobble)' }}
              >
                <div className="space-y-1">
                  <span className="font-hand text-xs font-bold text-[#e8b042] block">
                    {cert.issueDate}
                  </span>
                  <h4 className="text-sm font-bold text-[#2b1f1d] font-display leading-snug">
                    {cert.title}
                  </h4>
                  <p className="font-hand text-sm text-[#5d8aa8]">
                    {cert.issuer}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#ede0ca]">
                  <p className="text-[11px] font-medium text-[#7a9a7b] flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    {cert.badge}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
