import React from 'react';
import { LEETCODE_MILESTONES } from '../data/portfolioData';
import { Trophy, Zap } from 'lucide-react';

export const SketchLeetCode: React.FC = () => {
  return (
    <section id="leetcode" className="relative py-20 px-6 sm:px-12 lg:px-16">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fdf0ec] border-2 border-[#3f2a1e] text-xs font-hand font-bold text-[#d96b52]" style={{ filter: 'url(#sketch-wobble)' }}>
            <Trophy className="w-3.5 h-3.5 text-[#e8b042]" />
            Notebook Section 05
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2b1f1d] font-display">
            #100DaysOfCode Algorithmic Journal
          </h2>
          <p className="font-hand text-xl text-[#6a524a] max-w-xl mx-auto">
            100 consecutive days of solving DSA problems on LeetCode with full time & space optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {LEETCODE_MILESTONES.map((item) => (
            <div
              key={item.day}
              className="p-6 rounded-3xl bg-[#fffef9] border-2 border-[#3f2a1e] shadow-md space-y-3 relative hover:scale-[1.01] transition-transform"
              style={{ filter: 'url(#sketch-wobble)' }}
            >
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#e8b042] font-hand text-sm font-bold text-[#2b1f1d] border border-[#3f2a1e]">
                  Day {item.day} / 100 🏆
                </span>
                <span className="font-mono text-xs font-bold text-[#d96b52]">
                  {item.difficulty}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#2b1f1d] font-display">
                  {item.problem}
                </h3>
                <p className="text-xs text-[#40302b] mt-0.5">
                  {item.description}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#f5ebd9] border border-[#d9cca8] space-y-1">
                <p className="font-hand text-sm font-bold text-[#5d8aa8] flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5" /> Optimized Strategy:
                </p>
                <p className="text-xs text-[#2b1f1d] font-mono">
                  {item.approach}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {item.tags.map((t) => (
                  <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#ede0ca] text-[#3f2a1e]">
                    {t}
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
