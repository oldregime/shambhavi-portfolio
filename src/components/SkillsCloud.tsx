import React from 'react';
import { SKILL_GROUPS } from '../data/portfolioData';
import { 
  Cloud, 
  Server, 
  Cpu, 
  GitBranch, 
  Terminal, 
  FileCode, 
  Database, 
  BarChart3, 
  PieChart, 
  Layers, 
  Activity, 
  Brain, 
  Sparkles, 
  Binary, 
  Network, 
  Zap, 
  Code, 
  Layout, 
  Palette, 
  Globe 
} from 'lucide-react';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Cloud, Server, Cpu, GitBranch, Terminal,
  FileCode, Database, BarChart3, PieChart, Layers, Activity,
  Brain, Sparkles, Binary, Network, Zap,
  Code, Layout, Palette, Globe
};

export const SkillsCloud: React.FC = () => {
  return (
    <section id="skills" className="relative z-10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            Technical Stack & Frameworks
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Core Competencies
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            From AWS cloud infrastructure and Python/SQL pipelines to Generative AI and full-stack development.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.category}
              className="p-6 sm:p-8 rounded-3xl bg-navy-900/70 border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 shadow-xl space-y-6"
            >
              <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-3 flex items-center justify-between">
                <span>{group.category}</span>
                <span className="text-xs font-mono text-cyan-400">{group.skills.length} Technologies</span>
              </h3>

              <div className="space-y-4">
                {group.skills.map((skill) => {
                  const Icon = iconMap[skill.icon] || Code;
                  return (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-medium">
                        <span className="text-slate-200 flex items-center gap-2">
                          <Icon className="w-4 h-4 text-cyan-400" />
                          {skill.name}
                        </span>
                        <span className="font-mono text-cyan-400">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-navy-950 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-sky-400 transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
