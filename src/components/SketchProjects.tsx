import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ExternalLink, Layers, Sparkles, Check, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { playSketchSound } from '../utils/sketchAudio';

export const SketchProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-20 px-6 sm:px-12 lg:px-16">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fef3e0] border-2 border-[#3f2a1e] text-xs font-hand font-bold text-[#e8b042]" style={{ filter: 'url(#sketch-wobble)' }}>
            <Layers className="w-3.5 h-3.5 text-[#e8b042]" />
            Notebook Section 03
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2b1f1d] font-display">
            Featured Projects & Blueprints
          </h2>
          <p className="font-hand text-xl text-[#6a524a] max-w-xl mx-auto">
            Real-world healthcare analytics, tax algorithms, and full-stack systems sketched and built to scale.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => {
            const rotations = ['rotate-1', '-rotate-1', 'rotate-2', '-rotate-2', 'rotate-1'];
            const rot = rotations[idx % rotations.length];
            return (
              <div
                key={project.id}
                className={`relative bg-[#fffef9] border-2 border-[#3f2a1e] rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform ${rot} hover:rotate-0 hover:scale-[1.02] flex flex-col justify-between space-y-4`}
                style={{ filter: 'url(#sketch-wobble)' }}
              >
                {/* Washi tape on top corner */}
                <div className="absolute -top-3 left-8 w-20 h-5 tape rounded-sm" />

                <div className="space-y-3">
                  {/* Category & Action links */}
                  <div className="flex items-center justify-between pt-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#ede0ca] border border-[#3f2a1e] font-hand text-sm font-bold text-[#3f2a1e]">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={() => playSketchSound('pop')}
                          className="p-1.5 rounded-full hover:bg-[#ede0ca] text-[#3f2a1e] transition"
                          title="GitHub Source"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={() => playSketchSound('pop')}
                          className="p-1.5 rounded-full hover:bg-[#ede0ca] text-[#5d8aa8] transition"
                          title="Live Deployment"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl font-bold text-[#2b1f1d] font-display">
                      {project.title}
                    </h3>
                    <p className="font-hand text-base text-[#5d8aa8] font-bold -mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#40302b] leading-relaxed font-sans">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="space-y-1 pt-1">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="flex items-center gap-1.5 font-hand text-sm font-bold text-[#7a9a7b]">
                        <Check className="w-3.5 h-3.5 text-[#7a9a7b] stroke-[2.5]" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags & Architecture Details Button */}
                <div className="space-y-3 pt-4 border-t border-[#ede0ca]">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#f5ebd9] border border-[#d9cca8] text-[#40302b]">
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      playSketchSound('page-flip');
                      setSelectedProject(project);
                    }}
                    className="w-full py-2 px-3 rounded-xl bg-[#5d8aa8]/15 hover:bg-[#5d8aa8]/25 text-xs font-hand font-bold text-[#5d8aa8] border border-[#5d8aa8]/40 flex items-center justify-center gap-1.5 transition-all"
                  >
                    <span>Read Blueprint & Findings</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="relative w-full max-w-xl bg-[#fffef9] border-2 border-[#3f2a1e] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5" style={{ filter: 'url(#sketch-wobble)' }}>
              
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-1.5 rounded-full bg-[#ede0ca] hover:bg-[#d9cca8] text-[#3f2a1e] transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1">
                <span className="font-hand text-sm font-bold text-[#5d8aa8]">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold text-[#2b1f1d]">
                  {selectedProject.title}
                </h3>
                <p className="font-hand text-base text-[#6a524a]">
                  {selectedProject.subtitle}
                </p>
              </div>

              <div className="space-y-2.5">
                <h4 className="font-marker text-xs uppercase text-[#3f2a1e] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#e8b042]" />
                  Implementation Highlights:
                </h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#40302b] leading-relaxed">
                      <span className="text-[#5d8aa8] font-bold">✎</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#ede0ca]">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#ede0ca] hover:bg-[#d9cca8] text-xs font-hand font-bold text-[#3f2a1e] border border-[#3f2a1e]"
                  >
                    <GithubIcon className="w-3.5 h-3.5" /> Source Code
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#e8b042] text-xs font-hand font-bold text-[#2b1f1d] border border-[#3f2a1e]"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Launch Live App
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
