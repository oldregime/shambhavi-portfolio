import React from 'react';
import { LEETCODE_MILESTONES } from '../../data/portfolioData';
import { Trophy, Zap, ArrowLeft, ArrowRight } from 'lucide-react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export const LeetCodePage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <div className="h-full flex flex-col justify-between py-2 sm:py-3 space-y-3 sm:space-y-4 overflow-hidden">
      
      <div className="flex items-center justify-between border-b border-[#3f2a1e]/15 pb-2 shrink-0">
        <button
          onClick={() => onNavigate('experience')}
          className="flex items-center gap-1 font-hand text-sm font-bold text-[#5d8aa8] hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Experience
        </button>
        <span className="font-marker text-xs text-[#6a524a]">
          📖 Page 05 / 07 • #100DaysOfCode
        </span>
      </div>

      {/* 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 flex-1 my-auto overflow-hidden">
        {LEETCODE_MILESTONES.map((item) => (
          <div
            key={item.day}
            className="p-3.5 sm:p-4 rounded-2xl bg-[#fffef9] border-2 border-[#3f2a1e] shadow-xs space-y-2 relative flex flex-col justify-between overflow-hidden"
            style={{ filter: 'url(#sketch-wobble)' }}
          >
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full bg-[#e8b042] font-hand text-xs font-bold text-[#1a110e] border border-[#3f2a1e] flex items-center gap-1">
                  <Trophy className="w-3 h-3 text-[#8b552d]" /> Day {item.day} / 100
                </span>
                <span className="font-mono text-xs font-bold text-[#d96b52]">
                  {item.difficulty}
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#1a110e] font-display">
                  {item.problem}
                </h3>
                <p className="text-xs text-[#40302b] line-clamp-1 font-sans">
                  {item.description}
                </p>
              </div>

              <div className="p-2 rounded-xl bg-[#f5ebd9] border border-[#d9cca8] space-y-0.5">
                <p className="font-hand text-xs font-bold text-[#5d8aa8] flex items-center gap-1">
                  <Zap className="w-3 h-3" /> Approach:
                </p>
                <p className="text-xs text-[#1a110e] font-mono line-clamp-2">
                  {item.approach}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1 pt-1">
              {item.tags.map((t) => (
                <span key={t} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#ede0ca] text-[#2b1d19]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-[#3f2a1e]/15 shrink-0">
        <button
          onClick={() => onNavigate('experience')}
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#ede0ca] hover:bg-[#d9cca8] text-[#1a110e] font-hand text-base font-bold border border-[#3f2a1e] transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Prev: Experience
        </button>

        <button
          onClick={() => onNavigate('skills')}
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#5d8aa8] hover:bg-[#4a728e] text-white font-hand text-base font-bold border border-[#3f2a1e] transition-transform hover:scale-105 shadow-xs"
        >
          <span>Next: Skills</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
