import React from 'react';
import { EXPERIENCES } from '../../data/portfolioData';
import { Calendar, MapPin, ArrowLeft, ArrowRight } from 'lucide-react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export const ExperiencePage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <div className="lg:h-full flex flex-col justify-between py-2 sm:py-3 space-y-4 lg:space-y-2.5 overflow-y-visible lg:overflow-hidden">
      
      <div className="flex items-center justify-between border-b border-[#3f2a1e]/15 pb-2 shrink-0">
        <button
          onClick={() => onNavigate('projects')}
          className="flex items-center gap-1 font-hand text-sm font-bold text-[#5d8aa8] hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Projects
        </button>
        <span className="font-marker text-xs text-[#6a524a]">
          📖 Page 04 / 07 • Career & Education
        </span>
      </div>

      <div className="space-y-3.5 lg:space-y-2.5 lg:flex-1 lg:my-auto">
        {EXPERIENCES.map((exp) => (
          <div
            key={exp.company}
            className="p-4 rounded-2xl bg-[#fffef9] border-2 border-[#3f2a1e] shadow-xs space-y-2 relative"
            style={{ filter: 'url(#sketch-wobble)' }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-[#ede0ca] pb-1.5">
              <div>
                <span className="px-2 py-0.5 rounded-full bg-[#f4a282]/20 border border-[#f4a282] font-hand text-[11px] font-bold text-[#d96b52]">
                  {exp.badge || exp.type}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#1a110e] font-display inline ml-2">
                  {exp.role} <span className="text-[#5d8aa8] font-hand">@ {exp.company}</span>
                </h3>
              </div>

              <div className="flex items-center gap-3 font-hand text-xs font-bold text-[#6a524a]">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-[#e8b042]" />
                  <span>{exp.period}</span>
                </div>
                <div className="hidden sm:flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#d96b52]" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#2b1d19] leading-relaxed font-sans">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-0.5">
              {exp.skills.map((s) => (
                <span key={s} className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#ede0ca] text-[#1a110e]">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between pt-3 lg:pt-1 border-t border-[#3f2a1e]/15 shrink-0">
        <button
          onClick={() => onNavigate('projects')}
          className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#ede0ca] hover:bg-[#d9cca8] text-[#1a110e] font-hand text-base font-bold border border-[#3f2a1e] transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Prev: Projects
        </button>

        <button
          onClick={() => onNavigate('leetcode')}
          className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#5d8aa8] hover:bg-[#4a728e] text-white font-hand text-base font-bold border border-[#3f2a1e] transition-transform hover:scale-105 shadow-xs"
        >
          <span>Next: 100 Days DSA</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
