import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';
import { 
  ExternalLink, 
  Layers, 
  Sparkles, 
  CheckCircle, 
  X, 
  ArrowUpRight 
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { playSound } from '../utils/audio';

export const ProjectsShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: ProjectCategory[] = ['All', 'Data & AI', 'Cloud & Analytics', 'Web Apps'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative z-10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              Featured Engineering Works
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              Data & Cloud Architectures
            </h2>
            <p className="text-sm text-slate-400 max-w-xl">
              Production analytics dashboards, tax calculation engines, full-stack database trackers, and enterprise platforms.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-navy-900/80 p-1.5 rounded-2xl border border-slate-800 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  playSound('click');
                  setActiveCategory(cat);
                }}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-sky-600 text-white shadow-md shadow-cyan-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-navy-900/70 border border-slate-800 hover:border-cyan-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:bg-navy-900/95 shadow-xl"
            >
              {/* Top Row: Category + Actions */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase px-2.5 py-1 rounded-md bg-slate-800 text-cyan-400 border border-slate-700 font-medium">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => playSound('click')}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
                        title="View GitHub Source"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => playSound('click')}
                        className="p-1.5 rounded-lg text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 transition"
                        title="View Live Deployment"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Metric Badges */}
                <div className="space-y-1.5 pt-1">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                      <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Row: Tags & Inspect Modal Button */}
              <div className="pt-6 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-navy-950 text-slate-400 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => {
                    playSound('click');
                    setSelectedProject(project);
                  }}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800/80 hover:bg-cyan-500/20 text-xs font-semibold text-cyan-300 hover:text-cyan-200 border border-slate-700/80 hover:border-cyan-500/40 flex items-center justify-center gap-1.5 transition-all"
                >
                  <span>Architecture & Deep Insights</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Architecture Inspection Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl bg-navy-950 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
              
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-xs text-slate-400">
                  {selectedProject.subtitle}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  Engineering Highlights & Technical Implementation
                </h4>
                <ul className="space-y-2.5">
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-200 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-lg bg-navy-900 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-medium text-white transition"
                  >
                    <GithubIcon className="w-4 h-4" /> View GitHub Repository
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-600 text-xs font-semibold text-white transition"
                  >
                    <ExternalLink className="w-4 h-4" /> Launch Live Application
                  </a>
                )}
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
