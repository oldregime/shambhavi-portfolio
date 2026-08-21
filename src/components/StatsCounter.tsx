import React from 'react';
import { METRICS } from '../data/portfolioData';
import { Database, Code2, GraduationCap, Award } from 'lucide-react';

const icons = [Database, Code2, GraduationCap, Award];

export const StatsCounter: React.FC = () => {
  return (
    <section className="relative z-10 py-10 border-y border-slate-800/80 bg-navy-950/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {METRICS.map((metric, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={metric.label}
                className="relative group p-5 rounded-2xl bg-navy-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 hover:bg-navy-900/90 shadow-lg"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-slate-800/80 text-cyan-300 border border-slate-700">
                    {metric.change}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
                  {metric.value}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                  {metric.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
