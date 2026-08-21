import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Sparkles, ArrowRight, Database, Cloud, Star } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { playSketchSound } from '../utils/sketchAudio';

export const SketchHero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-center pt-20 pb-16 px-6 sm:px-12 lg:px-16 overflow-hidden">
      
      {/* Decorative Doodles in Background */}
      <div className="absolute top-12 right-16 hidden lg:block opacity-75 pointer-events-none transform rotate-6">
        <div className="bg-[#fff9e6] p-4 border-2 border-[#3f2a1e] rounded-lg shadow-md w-36" style={{ filter: 'url(#sketch-wobble)' }}>
          <p className="font-marker text-xs text-[#3f2a1e] leading-relaxed">
            bugs: 0<br/>
            coffee: ☕☕<br/>
            data: structured<br/>
            AWS: verified ✓
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Hand-Drawn Hero Content */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Header Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ede0ca] border-2 border-[#3f2a1e] shadow-sm" style={{ filter: 'url(#sketch-wobble)' }}>
            <span className="w-2 h-2 rounded-full bg-[#7a9a7b] animate-ping inline-block" />
            <span className="font-hand text-sm font-bold text-[#3f2a1e]">
              Data Engineering Intern @ Clovertex
            </span>
          </div>

          {/* Title with hand-drawn markers */}
          <div className="space-y-1">
            <p className="font-marker text-sm text-[#5d8aa8] uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#e8b042]" /> The Data Engineer's Sketchbook
            </p>
            <h1 className="text-4xl sm:text-5xl font-black text-[#2b1f1d] font-display tracking-tight leading-[1.15]">
              Hello! I'm <span className="underline decoration-[#e8b042] decoration-wavy decoration-3">Shambhavi Jha</span>.
            </h1>
            <p className="font-hand text-2xl sm:text-3xl text-[#d96b52] font-bold">
              Turning messy data into clean cloud pipelines & AI insights.
            </p>
          </div>

          {/* Bio on Notebook Paper Card */}
          <div className="p-5 rounded-2xl bg-[#fffef9] border-2 border-[#3f2a1e] shadow-md space-y-3 relative" style={{ filter: 'url(#sketch-wobble)' }}>
            {/* Washi tape sticker */}
            <div className="absolute -top-3 left-8 w-24 h-6 tape transform -rotate-2 rounded-sm" />
            
            <p className="text-sm text-[#40302b] leading-relaxed font-sans">
              Computer Science student at <strong className="text-[#2b1f1d]">VIT Bhopal (8.32 CGPA)</strong>. 
              Specializing in Python, SQL analytics, AWS cloud architectures (EC2, S3), and Generative AI. 
              Passionate about building robust data infrastructure that solves real-world challenges.
            </p>

            <div className="flex flex-wrap gap-2 pt-1 font-hand text-base font-bold text-[#3f2a1e]">
              <span className="px-2.5 py-0.5 rounded-lg bg-[#e8f0fe] border border-[#5d8aa8] flex items-center gap-1">
                <Database className="w-3.5 h-3.5 text-[#5d8aa8]" /> Python & SQL (Pandas/EDA)
              </span>
              <span className="px-2.5 py-0.5 rounded-lg bg-[#fef3e0] border border-[#e8b042] flex items-center gap-1">
                <Cloud className="w-3.5 h-3.5 text-[#e8b042]" /> AWS Cloud Quest Badge
              </span>
              <span className="px-2.5 py-0.5 rounded-lg bg-[#edf7ed] border border-[#7a9a7b] flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-[#7a9a7b]" /> #100DaysOfCode Mastered
              </span>
            </div>
          </div>

          {/* Hand-drawn Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              onClick={() => playSketchSound('page-flip')}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#5d8aa8] hover:bg-[#4d7894] text-white font-hand text-lg font-bold border-2 border-[#3f2a1e] shadow-md hover:scale-105 transition-transform"
              style={{ filter: 'url(#sketch-wobble)' }}
            >
              <span>Explore My Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              onClick={() => playSketchSound('scribble')}
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#fffef9] hover:bg-[#ede0ca] text-[#2b1f1d] font-hand text-lg font-bold border-2 border-[#3f2a1e] shadow-md hover:scale-105 transition-transform"
              style={{ filter: 'url(#sketch-wobble)' }}
            >
              <span>Say Hello ✉️</span>
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3 pt-2">
            <span className="font-hand text-base font-bold text-[#6a524a]">Find me on:</span>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              onClick={() => playSketchSound('pop')}
              className="p-2 rounded-full bg-[#fffef9] border-2 border-[#3f2a1e] hover:bg-[#ede0ca] transition-transform hover:scale-110 shadow-sm"
              style={{ filter: 'url(#sketch-wobble)' }}
            >
              <GithubIcon className="w-4 h-4 text-[#3f2a1e]" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              onClick={() => playSketchSound('pop')}
              className="p-2 rounded-full bg-[#fffef9] border-2 border-[#3f2a1e] hover:bg-[#ede0ca] transition-transform hover:scale-110 shadow-sm"
              style={{ filter: 'url(#sketch-wobble)' }}
            >
              <LinkedinIcon className="w-4 h-4 text-[#5d8aa8]" />
            </a>
          </div>

        </div>

        {/* Right Hand-Drawn Polaroid Photo */}
        <div className="lg:col-span-5 flex justify-center relative">
          <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
            {/* Top Washi Tape */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-7 tape rounded-sm z-20 transform -rotate-3" />

            {/* Polaroid Body */}
            <div className="bg-[#fffef9] border-2 border-[#3f2a1e] p-4 pb-6 rounded-2xl shadow-xl space-y-3 w-[290px] sm:w-[320px]" style={{ filter: 'url(#sketch-wobble)' }}>
              
              {/* Photo Frame */}
              <div className="relative aspect-square w-full rounded-xl overflow-hidden border-2 border-[#3f2a1e] bg-[#ede0ca]">
                <img
                  src="/images/profile-primary.jpg"
                  alt="Shambhavi Jha"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Polaroid Caption */}
              <div className="text-center pt-1">
                <p className="font-hand text-xl font-bold text-[#2b1f1d]">
                  Shambhavi Jha 🌸
                </p>
                <p className="font-sketch text-xs text-[#5d8aa8] -mt-1">
                  Data & Cloud Engineer • VIT '26
                </p>
              </div>

            </div>

            {/* Stamp Sticker */}
            <div className="absolute -bottom-3 -right-4 px-3 py-1 bg-[#f4a282] border-2 border-[#3f2a1e] rounded-full font-hand text-xs font-bold text-white shadow-md transform rotate-12" style={{ filter: 'url(#sketch-wobble)' }}>
              Verified Engineer ⚡
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
