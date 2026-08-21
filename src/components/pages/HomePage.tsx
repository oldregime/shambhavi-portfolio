import React, { useState } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Sparkles, ArrowRight, Coffee, Lightbulb } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../SocialIcons';
import { InteractivePipeline } from '../InteractivePipeline';
import { playSketchSound } from '../../utils/sketchAudio';

interface PageProps {
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<PageProps> = ({ onNavigate }) => {
  const [coffeeClicks, setCoffeeClicks] = useState(0);
  const [lightOn, setLightOn] = useState(false);

  const handleCoffee = () => {
    playSketchSound('purr');
    setCoffeeClicks((prev) => prev + 1);
  };

  const handleLight = () => {
    playSketchSound('pop');
    setLightOn(!lightOn);
  };

  return (
    <div className="lg:h-full flex flex-col justify-between py-1 lg:py-2 space-y-3 lg:space-y-2 overflow-y-visible lg:overflow-hidden">
      
      {/* Top Header Breadcrumb */}
      <div className="flex items-center justify-between border-b border-[#3f2a1e]/15 pb-1.5 shrink-0">
        <div className="flex items-center gap-2">
          <span className="font-marker text-xs sm:text-sm text-[#5d8aa8] uppercase tracking-wider flex items-center gap-1.5 font-bold">
            <Sparkles className="w-4 h-4 text-[#e8b042]" /> The Data Engineer's Sketchbook
          </span>
          <span className="hidden sm:inline-block px-2 py-0.5 rounded-md bg-[#ede0ca] text-[11px] font-mono font-bold text-[#1a110e]">
            v2.4.0 • VIT Bhopal
          </span>
        </div>

        <span className="font-marker text-xs text-[#6a524a]">
          📖 Page 01 / 07 • The Cover
        </span>
      </div>

      {/* Main 2-Column Notebook Spread */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-center lg:flex-1 lg:my-auto">
        
        {/* Left Column: Bio, Pipeline & Metrics */}
        <div className="lg:col-span-7 space-y-2.5">
          <div className="space-y-0.5">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a110e] font-display tracking-tight leading-[1.05]">
              Shambhavi Jha
            </h1>
            <p className="font-hand text-lg sm:text-xl text-[#d96b52] font-bold">
              Data Engineer • Cloud Infrastructure • Generative AI
            </p>
          </div>

          {/* Bio Notebook Card */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-[#fffef9] border-2 border-[#3f2a1e] shadow-xs space-y-2 relative" style={{ filter: 'url(#sketch-wobble)' }}>
            <div className="absolute -top-3 left-8 w-24 h-5 tape transform -rotate-2 rounded-sm" />
            
            <p className="text-xs sm:text-sm text-[#2b1d19] leading-relaxed font-sans">
              Computer Science student at <strong className="text-[#1a110e] font-bold">VIT Bhopal (8.32 CGPA)</strong>. 
              Currently engineering healthcare ETL pipelines on <strong className="text-[#1a110e] font-bold">AWS EC2</strong> at <strong className="text-[#1a110e] font-bold">Clovertex</strong>, researching satellite telemetry algorithms, and solving algorithmic challenges in Python & Java.
            </p>

            {/* Live Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 border-t border-[#ede0ca]">
              <div className="p-1.5 rounded-lg bg-[#e8f0fe] border border-[#5d8aa8]/30 text-center">
                <span className="font-mono text-xs font-black text-[#1a110e] block">10,000+</span>
                <span className="font-hand text-[11px] font-bold text-[#5d8aa8]">Records Analyzed</span>
              </div>
              <div className="p-1.5 rounded-lg bg-[#fef3e0] border border-[#e8b042]/30 text-center">
                <span className="font-mono text-xs font-black text-[#1a110e] block">100 Days</span>
                <span className="font-hand text-[11px] font-bold text-[#e8b042]">DSA Conquered</span>
              </div>
              <div className="p-1.5 rounded-lg bg-[#edf7ed] border border-[#7a9a7b]/30 text-center">
                <span className="font-mono text-xs font-black text-[#1a110e] block">8.32</span>
                <span className="font-hand text-[11px] font-bold text-[#7a9a7b]">CGPA @ VIT</span>
              </div>
              <div className="p-1.5 rounded-lg bg-[#fdf0ec] border border-[#d96b52]/30 text-center">
                <span className="font-mono text-xs font-black text-[#1a110e] block">4+</span>
                <span className="font-hand text-[11px] font-bold text-[#d96b52]">Certifications</span>
              </div>
            </div>
          </div>

          {/* Interactive Pipeline Widget */}
          <InteractivePipeline />

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-0.5">
            <div className="flex items-center gap-2">
              <button
                onClick={() => onNavigate('projects')}
                className="flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#5d8aa8] hover:bg-[#4a728e] text-white font-hand text-base font-bold border-2 border-[#3f2a1e] shadow-xs hover:scale-105 active:scale-95 transition-all"
                style={{ filter: 'url(#sketch-wobble)' }}
              >
                <span>Turn to Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('about')}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#fffef9] hover:bg-[#ede0ca] text-[#1a110e] font-hand text-base font-bold border-2 border-[#3f2a1e] shadow-xs hover:scale-105 transition-transform"
                style={{ filter: 'url(#sketch-wobble)' }}
              >
                <span>Read Story 📖</span>
              </button>
            </div>

            {/* Fun Doodled Chips */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCoffee}
                className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-[#fff9e6] border border-[#3f2a1e] font-hand text-xs font-bold text-[#3f2a1e] hover:scale-105 transition-transform"
              >
                <Coffee className="w-3.5 h-3.5 text-[#8b552d]" />
                <span>{coffeeClicks === 0 ? '☕ brew' : `☕ x${coffeeClicks}`}</span>
              </button>

              <button
                onClick={handleLight}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-xl border border-[#3f2a1e] font-hand text-xs font-bold transition-transform hover:scale-105 ${
                  lightOn ? 'bg-[#fffae0] text-[#e8b042]' : 'bg-[#f5ebd9] text-[#6a524a]'
                }`}
              >
                <Lightbulb className={`w-3.5 h-3.5 ${lightOn ? 'text-[#e8b042] fill-current' : 'text-[#6a524a]'}`} />
                <span>{lightOn ? '💡 query!' : '💡 idea'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Scrapbook Photo & Badge Cluster */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-3 relative">
          
          {/* Main Polaroid */}
          <div className="relative transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 tape rounded-sm z-20 transform -rotate-3" />

            <div className="bg-[#fffef9] border-2 border-[#3f2a1e] p-3 pb-4 rounded-2xl shadow-lg space-y-1.5 w-[220px] sm:w-[240px]" style={{ filter: 'url(#sketch-wobble)' }}>
              <div className="relative aspect-square w-full rounded-xl overflow-hidden border-2 border-[#3f2a1e] bg-[#ede0ca]">
                <img
                  src="/images/profile-primary.jpg"
                  alt="Shambhavi Jha"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="text-center pt-0.5">
                <p className="font-hand text-lg font-bold text-[#1a110e]">
                  Shambhavi Jha 🌸
                </p>
                <p className="font-sketch text-xs text-[#5d8aa8]">
                  Data & Cloud Engineer • VIT '26
                </p>
              </div>
            </div>

            <div className="absolute -bottom-2.5 -right-2.5 px-2.5 py-0.5 bg-[#f4a282] border border-[#3f2a1e] rounded-full font-hand text-[11px] font-bold text-white shadow-xs transform rotate-12">
              Verified Engineer ⚡
            </div>
          </div>

          {/* Sticky Notes & Social Coordinates */}
          <div className="w-full max-w-[280px] p-3 rounded-2xl bg-[#fff9e6] border-2 border-[#3f2a1e] shadow-xs space-y-2 transform -rotate-1" style={{ filter: 'url(#sketch-wobble)' }}>
            <div className="flex items-center justify-between border-b border-[#3f2a1e]/15 pb-1">
              <span className="font-marker text-xs font-bold text-[#8b552d]">📌 Daily Dev Log</span>
              <span className="font-mono text-[10px] text-[#7a9a7b] font-bold">AWS EC2 Active</span>
            </div>
            
            <p className="font-hand text-xs text-[#1a110e] leading-snug font-bold">
              "Optimizing SQL queries, parsing space telemetry, and turning unformatted data into clean analytics."
            </p>

            <div className="flex items-center justify-between pt-1 border-t border-[#3f2a1e]/15">
              <span className="font-hand text-xs text-[#6a524a] font-bold">Find Shambhavi:</span>
              <div className="flex items-center gap-1.5">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playSketchSound('pop')}
                  className="p-1.5 rounded-lg bg-[#ede0ca] hover:bg-[#d9cca8] text-[#2b1f1d] transition"
                  title="GitHub"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playSketchSound('pop')}
                  className="p-1.5 rounded-lg bg-[#5d8aa8] hover:bg-[#4a728e] text-white transition"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Nav */}
      <div className="flex justify-end pt-1 border-t border-[#3f2a1e]/15 shrink-0">
        <button
          onClick={() => onNavigate('about')}
          className="flex items-center gap-1 px-3.5 py-1 rounded-full bg-[#ede0ca] hover:bg-[#d9cca8] text-[#1a110e] font-hand text-sm font-bold border border-[#3f2a1e] transition-transform hover:scale-105"
        >
          <span>Next: About Story</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
