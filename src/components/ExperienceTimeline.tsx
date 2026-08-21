import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="relative z-10 py-20 bg-navy-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-xs font-mono text-sky-300">
            <Briefcase className="w-3.5 h-3.5 text-sky-400" />
            Professional Journey & Academics
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Experience & Education
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Practical data engineering at Clovertex, space telemetry research at ISL, and foundational computer science at VIT.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="max-w-4xl mx-auto space-y-8 relative">
          {/* Vertical connecting line */}
          <div className="absolute left-6 top-8 bottom-8 w-[2px] bg-gradient-to-b from-cyan-500 via-sky-500 to-indigo-600 hidden sm:block" />

          {EXPERIENCES.map((exp) => (
            <div
              key={exp.company}
              className="relative sm:pl-16 group"
            >
              {/* Timeline dot */}
              <div className="absolute left-4 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-navy-950 border-2 border-cyan-400 group-hover:scale-125 transition-transform hidden sm:block shadow-md shadow-cyan-500/40" />

              {/* Card Body */}
              <div className="p-6 sm:p-8 rounded-3xl bg-navy-900/80 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-xl shadow-xl transition-all space-y-4">
                
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
                  <div>
                    <span className="text-xs font-mono uppercase px-2.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {exp.badge || exp.type}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-cyan-300 flex items-center gap-1.5 mt-0.5">
                      <Building className="w-4 h-4 text-cyan-400" />
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400 space-y-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" /> {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" /> {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {exp.description}
                </p>

                {/* Bullet Highlights */}
                <ul className="space-y-2">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((s) => (
                    <span key={s} className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-navy-950 text-slate-300 border border-slate-800">
                      {s}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
