import React from 'react';
import { LEETCODE_MILESTONES } from '../data/portfolioData';
import { Zap, Trophy, Brain, Flame } from 'lucide-react';

export const LeetCode100Days: React.FC = () => {
  return (
    <section id="leetcode" className="relative z-10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-mono text-purple-300">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            #100DaysOfCode Completion Milestone
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Data Structures & Algorithmic Mastery
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            100 consecutive days of solving complex algorithmic challenges on LeetCode across HashMaps, Dynamic Programming, Graphs, and Tree structures.
          </p>
        </div>

        {/* Milestone Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {LEETCODE_MILESTONES.map((item) => (
            <div
              key={item.day}
              className="p-6 rounded-3xl bg-navy-900/70 border border-slate-800 hover:border-purple-500/40 transition-all duration-300 shadow-xl space-y-4"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 font-bold flex items-center gap-1">
                  <Trophy className="w-3.5 h-3.5 text-amber-400" /> Day {item.day} / 100
                </span>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {item.difficulty}
                </span>
              </div>

              {/* Title */}
              <div>
                <h3 className="text-lg font-bold text-white">
                  {item.problem}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {item.description}
                </p>
              </div>

              {/* Algorithmic Approach */}
              <div className="p-3.5 rounded-xl bg-navy-950 border border-slate-800/80 space-y-1.5">
                <p className="text-xs font-mono text-cyan-400 font-semibold flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-cyan-400" /> Optimized Strategy:
                </p>
                <p className="text-xs text-slate-300">
                  {item.approach}
                </p>
              </div>

              {/* Takeaways */}
              <ul className="space-y-1 text-xs text-slate-300">
                {item.takeaways.map((t, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Brain className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    {tag}
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
