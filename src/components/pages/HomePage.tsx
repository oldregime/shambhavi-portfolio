import React, { useState } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Sparkles, ArrowRight, Database, Cloud, Star, Coffee, Lightbulb } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../SocialIcons';
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
    <div className="space-y-10 py-6 sm:py-10">
      
      {/* Top Banner / Breadcrumb */}
      <div className="flex items-center justify-between border-b-2 border-[#3f2a1e]/15 pb-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ede0ca] border-2 border-[#3f2a1e] shadow-sm" style={{ filter: 'url(#sketch-wobble)' }}>
          <span className="w-2.5 h-2.5 rounded-full bg-[#7a9a7b] animate-ping inline-block" />
          <span className="font-hand text-base font-bold text-[#2b1f1d]">
            Data Engineering Intern @ Clovertex
          </span>
        </div>

        <span className="font-marker text-sm text-[#6a524a] hidden sm:block">
          📖 Page 01 / 07 • The Cover
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Hero Content */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="space-y-2">
            <p className="font-marker text-base text-[#5d8aa8] uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#e8b042]" /> The Data Engineer's Sketchbook
            </p>
            <h1 className="text-4xl sm:text-6xl font-black text-[#1a110e] font-display tracking-tight leading-[1.1]">
              Shambhavi Jha
            </h1>
            <p className="font-hand text-2xl sm:text-3xl text-[#d96b52] font-bold">
              Turning complex data into clean cloud pipelines & AI insights.
            </p>
          </div>

          {/* Notebook Paper Card */}
          <div className="p-6 rounded-3xl bg-[#fffef9] border-2 border-[#3f2a1e] shadow-lg space-y-4 relative" style={{ filter: 'url(#sketch-wobble)' }}>
            <div className="absolute -top-3.5 left-10 w-28 h-7 tape transform -rotate-2 rounded-sm" />
            
            <p className="text-base sm:text-lg text-[#2b1d19] leading-relaxed font-sans">
              Hi! I'm a Computer Science Engineer from <strong className="text-[#1a110e] font-bold">VIT Bhopal (8.32 CGPA)</strong>. 
              I build scalable data pipelines on <strong className="text-[#1a110e] font-bold">AWS</strong>, run deep analytics with <strong className="text-[#1a110e] font-bold">Python & SQL</strong>, and integrate <strong className="text-[#1a110e] font-bold">Generative AI</strong> into healthcare & enterprise systems.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-2 font-hand text-base font-bold text-[#2b1f1d]">
              <span className="px-3 py-1 rounded-xl bg-[#e8f0fe] border border-[#5d8aa8] flex items-center gap-1.5 shadow-sm">
                <Database className="w-4 h-4 text-[#5d8aa8]" /> Python, Pandas & SQL EDA
              </span>
              <span className="px-3 py-1 rounded-xl bg-[#fef3e0] border border-[#e8b042] flex items-center gap-1.5 shadow-sm">
                <Cloud className="w-4 h-4 text-[#e8b042]" /> AWS Cloud Quest Certified
              </span>
              <span className="px-3 py-1 rounded-xl bg-[#edf7ed] border border-[#7a9a7b] flex items-center gap-1.5 shadow-sm">
                <Star className="w-4 h-4 text-[#7a9a7b]" /> #100DaysOfCode Conquered
              </span>
            </div>
          </div>

          {/* Interactive Doodled Action Chips */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Interactive Coffee */}
            <button
              onClick={handleCoffee}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-[#fff9e6] border-2 border-[#3f2a1e] font-hand text-sm font-bold text-[#3f2a1e] hover:scale-105 transition-transform"
              style={{ filter: 'url(#sketch-wobble)' }}
            >
              <Coffee className="w-4 h-4 text-[#8b552d]" />
              <span>{coffeeClicks === 0 ? 'brew coffee ☕' : `coffee fueled x${coffeeClicks} ⚡`}</span>
            </button>

            {/* Interactive Lightbulb */}
            <button
              onClick={handleLight}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-2xl border-2 border-[#3f2a1e] font-hand text-sm font-bold transition-transform hover:scale-105 ${
                lightOn ? 'bg-[#fffae0] text-[#e8b042]' : 'bg-[#f5ebd9] text-[#6a524a]'
              }`}
              style={{ filter: 'url(#sketch-wobble)' }}
            >
              <Lightbulb className={`w-4 h-4 ${lightOn ? 'text-[#e8b042] fill-current' : 'text-[#6a524a]'}`} />
              <span>{lightOn ? '💡 idea: optimize query!' : 'click for inspiration 💡'}</span>
            </button>
          </div>

          {/* Big Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('projects')}
              className="flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#5d8aa8] hover:bg-[#4a728e] text-white font-hand text-xl font-bold border-2 border-[#3f2a1e] shadow-md hover:scale-105 active:scale-95 transition-all"
              style={{ filter: 'url(#sketch-wobble)' }}
            >
              <span>Turn to Projects</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => onNavigate('about')}
              className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#fffef9] hover:bg-[#ede0ca] text-[#1a110e] font-hand text-xl font-bold border-2 border-[#3f2a1e] shadow-md hover:scale-105 transition-transform"
              style={{ filter: 'url(#sketch-wobble)' }}
            >
              <span>Read Story 📖</span>
            </button>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3 pt-2">
            <span className="font-hand text-lg font-bold text-[#6a524a]">Find me:</span>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              onClick={() => playSketchSound('pop')}
              className="p-2.5 rounded-full bg-[#fffef9] border-2 border-[#3f2a1e] hover:bg-[#ede0ca] transition-transform hover:scale-110 shadow-sm"
              style={{ filter: 'url(#sketch-wobble)' }}
              title="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5 text-[#2b1f1d]" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              onClick={() => playSketchSound('pop')}
              className="p-2.5 rounded-full bg-[#fffef9] border-2 border-[#3f2a1e] hover:bg-[#ede0ca] transition-transform hover:scale-110 shadow-sm"
              style={{ filter: 'url(#sketch-wobble)' }}
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5 text-[#5d8aa8]" />
            </a>
          </div>

        </div>

        {/* Right Polaroid Photo Frame */}
        <div className="lg:col-span-5 flex justify-center relative">
          <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 tape rounded-sm z-20 transform -rotate-3" />

            <div className="bg-[#fffef9] border-2 border-[#3f2a1e] p-5 pb-7 rounded-3xl shadow-xl space-y-3 w-[300px] sm:w-[340px]" style={{ filter: 'url(#sketch-wobble)' }}>
              
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden border-2 border-[#3f2a1e] bg-[#ede0ca]">
                <img
                  src="/images/profile-primary.jpg"
                  alt="Shambhavi Jha"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="text-center pt-2">
                <p className="font-hand text-2xl font-bold text-[#1a110e]">
                  Shambhavi Jha 🌸
                </p>
                <p className="font-sketch text-sm text-[#5d8aa8]">
                  Data & Cloud Engineer • VIT '26
                </p>
              </div>

            </div>

            <div className="absolute -bottom-4 -right-4 px-4 py-1.5 bg-[#f4a282] border-2 border-[#3f2a1e] rounded-full font-hand text-sm font-bold text-white shadow-md transform rotate-12" style={{ filter: 'url(#sketch-wobble)' }}>
              Verified Engineer ⚡
            </div>
          </div>
        </div>

      </div>

      {/* Page Navigation Bottom Row */}
      <div className="flex justify-end pt-8 border-t-2 border-[#3f2a1e]/15">
        <button
          onClick={() => onNavigate('about')}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ede0ca] hover:bg-[#d9cca8] text-[#1a110e] font-hand text-lg font-bold border-2 border-[#3f2a1e] transition-transform hover:scale-105 shadow-sm"
          style={{ filter: 'url(#sketch-wobble)' }}
        >
          <span>Next Page: About Story</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
