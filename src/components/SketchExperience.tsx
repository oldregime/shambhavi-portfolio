import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, Check } from 'lucide-react';

export const SketchExperience: React.FC = () => {
  return (
    <section id="experience" className="relative py-20 px-6 sm:px-12 lg:px-16">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#edf7ed] border-2 border-[#3f2a1e] text-xs font-hand font-bold text-[#7a9a7b]" style={{ filter: 'url(#sketch-wobble)' }}>
            <Briefcase className="w-3.5 h-3.5 text-[#7a9a7b]" />
            Notebook Section 04
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2b1f1d] font-display">
            Experience & Learning Path
          </h2>
          <p className="font-hand text-xl text-[#6a524a] max-w-xl mx-auto">
            Practical engineering at Clovertex, space telemetry research at ISL, and core CS foundation at VIT.
          </p>
        </div>

        {/* Lined Notebook Paper Layout */}
        <div className="space-y-8 relative">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.company}
              className="relative p-6 sm:p-8 rounded-3xl bg-[#fffef9] border-2 border-[#3f2a1e] shadow-lg space-y-4"
              style={{ filter: 'url(#sketch-wobble)' }}
            >
              <div className="flex items-center justify-between border-b border-[#ede0ca] pb-3">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#f4a282]/20 border border-[#f4a282] font-hand text-xs font-bold text-[#d96b52]">
                    {exp.badge || exp.type}
                  </span>
                  <h3 className="text-xl font-bold text-[#2b1f1d] mt-1 font-display">
                    {exp.role}
                  </h3>
                  <p className="font-hand text-lg font-bold text-[#5d8aa8] -mt-0.5">
                    @ {exp.company}
                  </p>
                </div>

                <div className="text-right font-hand text-sm font-bold text-[#6a524a] space-y-0.5">
                  <div className="flex items-center gap-1 justify-end">
                    <Calendar className="w-3.5 h-3.5 text-[#e8b042]" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1 justify-end text-xs">
                    <MapPin className="w-3 h-3 text-[#d96b52]" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#40302b] leading-relaxed font-sans">
                {exp.description}
              </p>

              <ul className="space-y-1.5 pt-1">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-[#40302b]">
                    <Check className="w-3.5 h-3.5 text-[#7a9a7b] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {exp.skills.map((s) => (
                  <span key={s} className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-[#ede0ca] border border-[#d9cca8] text-[#3f2a1e]">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
