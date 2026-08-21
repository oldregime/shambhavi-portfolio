import React from 'react';
import { LEETCODE_MILESTONES } from '../../data/portfolioData';
import { Trophy, Zap, ArrowLeft, ArrowRight, Flame } from 'lucide-react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export const LeetCodePage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10 py-6 sm:py-10">
      
      <div className="flex items-center justify-between border-b-2 border-[#3f2a1e]/15 pb-4">
        <button
          onClick={() => onNavigate('experience')}
          className="flex items-center gap-1.5 font-hand text-base font-bold text-[#5d8aa8] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Experience
        </button>
        <span className="font-marker text-sm text-[#6a524a]">
          📖 Page 05 / 07 • #100DaysOfCode
        </span>
      </div>

      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fdf0ec] border-2 border-[#3f2a1e] text-xs font-hand font-bold text-[#d96b52]" style={{ filter: 'url(#sketch-wobble)' }}>
          <Flame className="w-4 h-4 text-[#e8b042]" />
          DSA Milestone Streak
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a110e] font-display">
          #100DaysOfCode Algorithmic Journal
        </h2>
        <p className="font-hand text-xl text-[#6a524a] max-w-xl">
          100 consecutive days of solving LeetCode problems in Java and Python with linear time optimizations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {LEETCODE_MILESTONES.map((item) => (
          <div
            key={item.day}
            className="p-6 sm:p-7 rounded-3xl bg-[#fffef9] border-2 border-[#3f2a1e] shadow-md space-y-4 relative hover:scale-[1.01] transition-transform"
            style={{ filter: 'url(#sketch-wobble)' }}
          >
            <div className="flex items-center justify-between">
              <span className="px-3.5 py-1 rounded-full bg-[#e8b042] font-hand text-base font-bold text-[#1a110e] border border-[#3f2a1e] flex items-center gap-1.5">
                <Trophy className="w-4 h-4 text-[#8b552d]" /> Day {item.day} / 100
              </span>
              <span className="font-mono text-sm font-bold text-[#d96b52] px-2.5 py-0.5 rounded bg-[#fdf0ec] border border-[#d96b52]/30">
                {item.difficulty}
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1a110e] font-display">
                {item.problem}
              </h3>
              <p className="text-sm text-[#40302b] mt-1 font-sans">
                {item.description}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#f5ebd9] border border-[#d9cca8] space-y-1.5">
              <p className="font-hand text-base font-bold text-[#5d8aa8] flex items-center gap-1.5">
                <Zap className="w-4 h-4" /> Algorithmic Optimization:
              </p>
              <p className="text-xs sm:text-sm text-[#1a110e] font-mono leading-relaxed">
                {item.approach}
              </p>
            </div>

            <div className="space-y-1 text-xs sm:text-sm font-hand font-bold text-[#6a524a]">
              {item.takeaways.map((t, i) => (
                <p key={i}>✦ {t}</p>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {item.tags.map((t) => (
                <span key={t} className="text-xs font-mono px-2 py-0.5 rounded bg-[#ede0ca] text-[#2b1d19] font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between pt-8 border-t-2 border-[#3f2a1e]/15">
        <button
          onClick={() => onNavigate('experience')}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ede0ca] hover:bg-[#d9cca8] text-[#1a110e] font-hand text-lg font-bold border-2 border-[#3f2a1e] transition-transform hover:scale-105"
          style={{ filter: 'url(#sketch-wobble)' }}
        >
          <ArrowLeft className="w-4 h-4" /> Prev: Experience
        </button>

        <button
          onClick={() => onNavigate('skills')}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5d8aa8] hover:bg-[#4a728e] text-white font-hand text-lg font-bold border-2 border-[#3f2a1e] transition-transform hover:scale-105 shadow-sm"
          style={{ filter: 'url(#sketch-wobble)' }}
        >
          <span>Next Page: Skills</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
