import React, { useState } from 'react';
import { PROJECTS } from '../../data/portfolioData';
import { Project, ProjectCategory } from '../../types';
import { ExternalLink, Sparkles, Check, X, ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';
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
    <div className="h-full flex flex-col justify-between py-2 sm:py-3 space-y-3 sm:space-y-4 overflow-hidden">
      
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[#3f2a1e]/15 pb-2 shrink-0">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('about')}
            className="flex items-center gap-1 font-hand text-sm font-bold text-[#5d8aa8] hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> About
          </button>
          <span className="font-marker text-xs text-[#6a524a] hidden sm:block">
            📖 Page 03 / 07 • Project Blueprints
          </span>
        </div>

        {/* Category Filter Pills */}
        <div className="flex gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                playSketchSound('page-flip');
                setActiveCat(cat);
              }}
              className={`px-3 py-0.5 rounded-full font-hand text-xs font-bold border border-[#3f2a1e] transition-transform ${
                activeCat === cat
                  ? 'bg-[#e8b042] text-[#1a110e] font-black scale-105'
                  : 'bg-[#fffef9] text-[#6a524a] hover:bg-[#ede0ca]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 2x2 Grid (Fits strictly inside 1080p viewport) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 flex-1 my-auto overflow-hidden">
        {filtered.slice(0, 4).map((project) => (
          <div
            key={project.id}
            className="relative bg-[#fffef9] border-2 border-[#3f2a1e] rounded-2xl p-3.5 sm:p-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-2 overflow-hidden"
            style={{ filter: 'url(#sketch-wobble)' }}
          >
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded-full bg-[#ede0ca] border border-[#3f2a1e] font-hand text-xs font-bold text-[#1a110e]">
                  {project.category}
                </span>
                <div className="flex items-center gap-1.5">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => playSketchSound('pop')}
                      className="p-1 rounded-full hover:bg-[#ede0ca] text-[#2b1f1d] transition"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => playSketchSound('pop')}
                      className="p-1 rounded-full hover:bg-[#ede0ca] text-[#5d8aa8] transition"
                      title="Live Deployment"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#1a110e] font-display leading-tight">
                  {project.title}
                </h3>
                <p className="font-hand text-sm text-[#5d8aa8] font-bold">
                  {project.subtitle}
                </p>
              </div>

              <p className="text-xs text-[#2b1d19] line-clamp-2 leading-relaxed font-sans">
                {project.description}
              </p>

              <div className="flex items-center gap-1.5 font-hand text-xs font-bold text-[#7a9a7b]">
                <Check className="w-3 h-3 text-[#7a9a7b] stroke-[2.5]" />
                <span>{project.metrics[0]}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-[#ede0ca]">
              <div className="flex flex-wrap gap-1">
                {project.tags.slice(0, 3).map((t) => (
                  <span key={t} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#f5ebd9] border border-[#d9cca8] text-[#2b1d19]">
                    {t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => {
                  playSketchSound('page-flip');
                  setSelectedProject(project);
                }}
                className="py-1 px-2.5 rounded-xl bg-[#5d8aa8]/15 hover:bg-[#5d8aa8]/25 text-xs font-hand font-bold text-[#5d8aa8] flex items-center gap-1 transition"
              >
                <span>Blueprint</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Blueprint Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="relative w-full max-w-xl bg-[#fffef9] border-2 border-[#3f2a1e] rounded-3xl p-6 shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto" style={{ filter: 'url(#sketch-wobble)' }}>
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-[#ede0ca] text-[#1a110e]"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-0.5">
              <span className="font-hand text-xs font-bold text-[#5d8aa8]">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl font-bold text-[#1a110e]">
                {selectedProject.title}
              </h3>
              <p className="font-hand text-base text-[#6a524a]">
                {selectedProject.subtitle}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-marker text-xs uppercase text-[#1a110e] flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#e8b042]" />
                Architecture & Findings:
              </h4>
              <ul className="space-y-1.5">
                {selectedProject.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-[#2b1d19] leading-relaxed">
                    <span className="text-[#5d8aa8] font-bold">✎</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-[#ede0ca]">
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#ede0ca] text-xs font-hand font-bold text-[#1a110e] border border-[#3f2a1e]"
                >
                  <GithubIcon className="w-3.5 h-3.5" /> Source
                </a>
              )}
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#e8b042] text-xs font-hand font-bold text-[#1a110e] border border-[#3f2a1e]"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Launch Live
                </a>
              )}
            </div>

          </div>
        </div>
      )}

      {/* Bottom Nav */}
      <div className="flex items-center justify-between pt-2 border-t border-[#3f2a1e]/15 shrink-0">
        <button
          onClick={() => onNavigate('about')}
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#ede0ca] hover:bg-[#d9cca8] text-[#1a110e] font-hand text-base font-bold border border-[#3f2a1e] transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Prev: About
        </button>

        <button
          onClick={() => onNavigate('experience')}
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#5d8aa8] hover:bg-[#4a728e] text-white font-hand text-base font-bold border border-[#3f2a1e] transition-transform hover:scale-105 shadow-xs"
        >
          <span>Next: Experience</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
