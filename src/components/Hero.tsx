import React from 'react';
import { 
  ArrowRight, 
  Terminal as TerminalIcon, 
  Mail, 
  Sparkles, 
  Database, 
  Cloud, 
  Cpu, 
  CheckCircle2 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';
import { playSound } from '../utils/audio';

export const Hero: React.FC = () => {
  return (
    <header className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-600/15 via-sky-500/10 to-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-emerald-400 font-medium tracking-wide">
                Data Engineering Intern @ Clovertex
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h2 className="text-sm uppercase tracking-widest font-mono text-cyan-400 font-semibold flex items-center justify-center lg:justify-start gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Data & Cloud Engineering Architecture
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Turning Raw Data into <br />
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                  Predictive Intelligence & Scalable Cloud Systems.
                </span>
              </h1>
            </div>

            {/* Bio */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Hi, I'm <strong className="text-white font-semibold">Shambhavi Jha</strong>. I architect resilient 
              data pipelines on AWS, analyze complex datasets with Python & SQL, and integrate state-of-the-art Generative AI models into production workflows.
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-navy-900 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                <Database className="w-3.5 h-3.5 text-cyan-400" /> Python & SQL (Pandas/EDA)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-navy-900 border border-sky-500/30 text-xs font-mono text-sky-300">
                <Cloud className="w-3.5 h-3.5 text-sky-400" /> AWS Cloud Practitioner
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-navy-900 border border-purple-500/30 text-xs font-mono text-purple-300">
                <Cpu className="w-3.5 h-3.5 text-purple-400" /> Generative AI & LLMs
              </span>
            </div>

            {/* Interactive CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#projects"
                onClick={() => playSound('click')}
                className="group flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-400 hover:to-sky-500 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#terminal"
                onClick={() => playSound('terminal')}
                className="flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-300 hover:text-white bg-navy-900/80 hover:bg-slate-800/80 border border-slate-700/80 rounded-xl backdrop-blur-md transition-all hover:border-cyan-500/40"
              >
                <TerminalIcon className="w-4 h-4 text-cyan-400" />
                <span>Launch Interactive CLI</span>
              </a>
            </div>

            {/* Social & Contact Bar */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 text-slate-400">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Connect:</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => playSound('click')}
                className="p-2.5 rounded-lg bg-navy-900 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-400 transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => playSound('click')}
                className="p-2.5 rounded-lg bg-navy-900 border border-slate-800 hover:border-sky-500/40 hover:text-sky-400 transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                onClick={() => playSound('click')}
                className="p-2.5 rounded-lg bg-navy-900 border border-slate-800 hover:border-emerald-500/40 hover:text-emerald-400 transition-all"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Hero Visual / Interactive Avatar */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative group">
              {/* Outer decorative ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-sky-400 to-indigo-600 rounded-3xl blur-md opacity-40 group-hover:opacity-75 transition duration-500 group-hover:scale-105" />
              
              {/* Card Body */}
              <div className="relative w-[320px] sm:w-[380px] rounded-2xl bg-navy-900/90 border border-slate-700/80 p-5 shadow-2xl backdrop-blur-xl space-y-4">
                {/* Photo container */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden border border-slate-800 bg-navy-950">
                  <img
                    src="/images/profile-primary.jpg"
                    alt="Shambhavi Jha"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay scanline effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-60" />
                  
                  {/* Verified Badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-navy-950/85 backdrop-blur-md border border-slate-800 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white flex items-center gap-1">
                        Shambhavi Jha <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 inline" />
                      </p>
                      <p className="text-[11px] font-mono text-cyan-300">B.Tech CSE @ VIT (8.32 CGPA)</p>
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                      Verified
                    </span>
                  </div>
                </div>

                {/* Micro Stats Grid */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="p-2.5 rounded-lg bg-navy-950/80 border border-slate-800 text-center">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">Experience</span>
                    <span className="text-sm font-bold text-white">Clovertex + ISL</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-navy-950/80 border border-slate-800 text-center">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">AWS Badge</span>
                    <span className="text-sm font-bold text-cyan-400">Cloud Quest</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};
