import React, { useState } from 'react';
import { PROJECTS } from '../../data/portfolioData';
import { Project, ProjectCategory } from '../../types';
import { ExternalLink, Layers, Sparkles, Check, X, ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';
import { GithubIcon } from '../SocialIcons';
import { playSketchSound } from '../../utils/sketchAudio';

interface PageProps {
  onNavigate: (page: string) => void;
}

export const ProjectsPage: React.FC<PageProps> = ({ onNavigate }) => {
  const [activeCat, setActiveCat] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: ProjectCategory[] = ['All', 'Data & AI', 'Cloud & Analytics', 'Web Apps'];

  const filtered = activeCat === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCat);

  return (
    <div className="space-y-10 py-6 sm:py-10">
      
      {/* Top Breadcrumb */}
      <div className="flex items-center justify-between border-b-2 border-[#3f2a1e]/15 pb-4">
        <button
          onClick={() => onNavigate('about')}
          className="flex items-center gap-1.5 font-hand text-base font-bold text-[#5d8aa8] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> About Story
        </button>
        <span className="font-marker text-sm text-[#6a524a]">
          📖 Page 03 / 07 • Project Blueprints
        </span>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fef3e0] border-2 border-[#3f2a1e] text-xs font-hand font-bold text-[#e8b042]" style={{ filter: 'url(#sketch-wobble)' }}>
            <Layers className="w-4 h-4 text-[#e8b042]" />
            Blueprints & Systems
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a110e] font-display">
            Featured Projects
          </h2>
          <p className="font-hand text-xl text-[#6a524a] max-w-xl">
            Click on any project to inspect data models, architecture decisions, and live links.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                playSketchSound('page-flip');
                setActiveCat(cat);
              }}
              className={`px-4 py-1.5 rounded-full font-hand text-base font-bold border-2 border-[#3f2a1e] transition-transform ${
                activeCat === cat
                  ? 'bg-[#e8b042] text-[#1a110e] scale-105 shadow-sm'
                  : 'bg-[#fffef9] text-[#6a524a] hover:bg-[#ede0ca]'
              }`}
              style={{ filter: 'url(#sketch-wobble)' }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filtered.map((project, idx) => {
          const rotations = ['rotate-1', '-rotate-1', 'rotate-2', '-rotate-2'];
          const rot = rotations[idx % rotations.length];
          return (
            <div
              key={project.id}
              className={`relative bg-[#fffef9] border-2 border-[#3f2a1e] rounded-3xl p-6 sm:p-7 shadow-lg hover:shadow-xl transition-all duration-300 transform ${rot} hover:rotate-0 hover:scale-[1.02] flex flex-col justify-between space-y-4`}
              style={{ filter: 'url(#sketch-wobble)' }}
            >
              <div className="absolute -top-3.5 left-10 w-24 h-6 tape rounded-sm" />

              <div className="space-y-3.5">
                <div className="flex items-center justify-between pt-1">
                  <span className="px-3 py-0.5 rounded-full bg-[#ede0ca] border border-[#3f2a1e] font-hand text-sm font-bold text-[#1a110e]">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => playSketchSound('pop')}
                        className="p-1.5 rounded-full hover:bg-[#ede0ca] text-[#2b1f1d] transition"
                        title="GitHub Repository"
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

                <div>
                  <h3 className="text-2xl font-bold text-[#1a110e] font-display">
                    {project.title}
                  </h3>
                  <p className="font-hand text-lg text-[#5d8aa8] font-bold -mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#2b1d19] leading-relaxed font-sans">
                  {project.description}
                </p>

                <div className="space-y-1.5 pt-1">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="flex items-center gap-2 font-hand text-base font-bold text-[#7a9a7b]">
                      <Check className="w-4 h-4 text-[#7a9a7b] stroke-[2.5]" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-[#ede0ca]">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((t) => (
                    <span key={t} className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-[#f5ebd9] border border-[#d9cca8] text-[#2b1d19] font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => {
                    playSketchSound('page-flip');
                    setSelectedProject(project);
                  }}
                  className="w-full py-2.5 px-4 rounded-2xl bg-[#5d8aa8]/15 hover:bg-[#5d8aa8]/25 text-sm font-hand font-bold text-[#5d8aa8] border-2 border-[#5d8aa8]/40 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
                >
                  <span>Read Blueprint & Insights 🔍</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Blueprint Inspection Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl bg-[#fffef9] border-2 border-[#3f2a1e] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6" style={{ filter: 'url(#sketch-wobble)' }}>
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#ede0ca] hover:bg-[#d9cca8] text-[#1a110e] transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="font-hand text-base font-bold text-[#5d8aa8]">
                {selectedProject.category}
              </span>
              <h3 className="text-3xl font-bold text-[#1a110e]">
                {selectedProject.title}
              </h3>
              <p className="font-hand text-lg text-[#6a524a]">
                {selectedProject.subtitle}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-marker text-sm uppercase text-[#1a110e] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#e8b042]" />
                Engineering Highlights & Architecture:
              </h4>
              <ul className="space-y-2.5">
                {selectedProject.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-[#2b1d19] leading-relaxed">
                    <span className="text-[#5d8aa8] font-bold text-lg">✎</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#ede0ca]">
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ede0ca] hover:bg-[#d9cca8] text-sm font-hand font-bold text-[#1a110e] border-2 border-[#3f2a1e]"
                >
                  <GithubIcon className="w-4 h-4" /> Source Code
                </a>
              )}
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#e8b042] text-sm font-hand font-bold text-[#1a110e] border-2 border-[#3f2a1e]"
                >
                  <ExternalLink className="w-4 h-4" /> Launch Live App
                </a>
              )}
            </div>

          </div>
        </div>
      )}

      {/* Navigation Footer */}
      <div className="flex items-center justify-between pt-8 border-t-2 border-[#3f2a1e]/15">
        <button
          onClick={() => onNavigate('about')}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ede0ca] hover:bg-[#d9cca8] text-[#1a110e] font-hand text-lg font-bold border-2 border-[#3f2a1e] transition-transform hover:scale-105"
          style={{ filter: 'url(#sketch-wobble)' }}
        >
          <ArrowLeft className="w-4 h-4" /> Prev: About Story
        </button>

        <button
          onClick={() => onNavigate('experience')}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5d8aa8] hover:bg-[#4a728e] text-white font-hand text-lg font-bold border-2 border-[#3f2a1e] transition-transform hover:scale-105 shadow-sm"
          style={{ filter: 'url(#sketch-wobble)' }}
        >
          <span>Next Page: Experience</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
