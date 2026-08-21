import React from 'react';
import { EXPERIENCES } from '../../data/portfolioData';
import { Briefcase, Calendar, MapPin, Check, ArrowLeft, ArrowRight } from 'lucide-react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export const ExperiencePage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10 py-6 sm:py-10">
      
      <div className="flex items-center justify-between border-b-2 border-[#3f2a1e]/15 pb-4">
        <button
          onClick={() => onNavigate('projects')}
          className="flex items-center gap-1.5 font-hand text-base font-bold text-[#5d8aa8] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Projects
        </button>
        <span className="font-marker text-sm text-[#6a524a]">
          📖 Page 04 / 07 • Career & Education
        </span>
      </div>

      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#edf7ed] border-2 border-[#3f2a1e] text-xs font-hand font-bold text-[#7a9a7b]" style={{ filter: 'url(#sketch-wobble)' }}>
          <Briefcase className="w-4 h-4 text-[#7a9a7b]" />
          Career Milestones
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a110e] font-display">
          Experience & Education
        </h2>
        <p className="font-hand text-xl text-[#6a524a] max-w-xl">
          Healthcare cloud engineering at Clovertex, space telemetry at ISL, and CS fundamentals at VIT.
        </p>
      </div>

      <div className="space-y-8">
        {EXPERIENCES.map((exp) => (
          <div
            key={exp.company}
            className="p-6 sm:p-8 rounded-3xl bg-[#fffef9] border-2 border-[#3f2a1e] shadow-lg space-y-4 relative"
            style={{ filter: 'url(#sketch-wobble)' }}
          >
            <div className="absolute -top-3.5 left-10 w-24 h-6 tape rounded-sm" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#ede0ca] pb-4">
              <div>
                <span className="px-3 py-0.5 rounded-full bg-[#f4a282]/20 border border-[#f4a282] font-hand text-xs font-bold text-[#d96b52]">
                  {exp.badge || exp.type}
                </span>
                <h3 className="text-2xl font-bold text-[#1a110e] mt-1 font-display">
                  {exp.role}
                </h3>
                <p className="font-hand text-xl font-bold text-[#5d8aa8] -mt-0.5">
                  @ {exp.company}
                </p>
              </div>

              <div className="text-left sm:text-right font-hand text-base font-bold text-[#6a524a] space-y-0.5">
                <div className="flex items-center gap-1.5 sm:justify-end">
                  <Calendar className="w-4 h-4 text-[#e8b042]" />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center gap-1.5 sm:justify-end text-sm">
                  <MapPin className="w-3.5 h-3.5 text-[#d96b52]" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            <p className="text-base text-[#2b1d19] leading-relaxed font-sans">
              {exp.description}
            </p>

            <ul className="space-y-2 pt-1">
              {exp.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-[#2b1d19]">
                  <Check className="w-4 h-4 text-[#7a9a7b] shrink-0 mt-1 stroke-[2.5]" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-2">
              {exp.skills.map((s) => (
                <span key={s} className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#ede0ca] border border-[#d9cca8] text-[#1a110e] font-semibold">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between pt-8 border-t-2 border-[#3f2a1e]/15">
        <button
          onClick={() => onNavigate('projects')}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ede0ca] hover:bg-[#d9cca8] text-[#1a110e] font-hand text-lg font-bold border-2 border-[#3f2a1e] transition-transform hover:scale-105"
          style={{ filter: 'url(#sketch-wobble)' }}
        >
          <ArrowLeft className="w-4 h-4" /> Prev: Projects
        </button>

        <button
          onClick={() => onNavigate('leetcode')}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5d8aa8] hover:bg-[#4a728e] text-white font-hand text-lg font-bold border-2 border-[#3f2a1e] transition-transform hover:scale-105 shadow-sm"
          style={{ filter: 'url(#sketch-wobble)' }}
        >
          <span>Next Page: 100 Days DSA</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
