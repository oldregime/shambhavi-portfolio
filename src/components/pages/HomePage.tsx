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
    <div className="lg:h-full flex flex-col justify-between py-2 sm:py-3 space-y-4 lg:space-y-2.5 overflow-y-visible lg:overflow-hidden">
      
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[#3f2a1e]/15 pb-2 shrink-0">
        <span className="font-marker text-xs sm:text-sm text-[#5d8aa8] uppercase tracking-wider flex items-center gap-1.5 font-bold">
          <Sparkles className="w-4 h-4 text-[#e8b042]" /> The Data Engineer's Sketchbook
        </span>

        <span className="font-marker text-xs text-[#6a524a] hidden sm:block">
          📖 Page 01 / 07 • The Cover
        </span>
      </div>

      {/* Main Grid: Stacks on mobile, 2-col on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-7 items-center lg:flex-1 lg:my-auto">
        
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-3.5 lg:space-y-2.5">
          <div className="space-y-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a110e] font-display tracking-tight leading-[1.1]">
              Shambhavi Jha
            </h1>
            <p className="font-hand text-lg sm:text-xl text-[#d96b52] font-bold">
              Turning complex data into clean cloud pipelines & AI insights.
            </p>
          </div>

          {/* Interactive Pipeline Widget */}
          <InteractivePipeline />

          {/* Interactive Action Buttons */}
          <div className="flex flex-wrap items-center gap-2 pt-0.5">
            <button
              onClick={handleCoffee}
              className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#fff9e6] border border-[#3f2a1e] font-hand text-xs font-bold text-[#3f2a1e] hover:scale-105 transition-transform"
            >
              <Coffee className="w-3.5 h-3.5 text-[#8b552d]" />
              <span>{coffeeClicks === 0 ? 'brew coffee ☕' : `coffee fueled x${coffeeClicks} ⚡`}</span>
            </button>

            <button
              onClick={handleLight}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-xl border border-[#3f2a1e] font-hand text-xs font-bold transition-transform hover:scale-105 ${
                lightOn ? 'bg-[#fffae0] text-[#e8b042]' : 'bg-[#f5ebd9] text-[#6a524a]'
              }`}
            >
              <Lightbulb className={`w-3.5 h-3.5 ${lightOn ? 'text-[#e8b042] fill-current' : 'text-[#6a524a]'}`} />
              <span>{lightOn ? '💡 query optimized!' : 'idea spark 💡'}</span>
            </button>
          </div>

          {/* Action Nav Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              onClick={() => onNavigate('projects')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5d8aa8] hover:bg-[#4a728e] text-white font-hand text-base font-bold border-2 border-[#3f2a1e] shadow-xs hover:scale-105 active:scale-95 transition-all"
              style={{ filter: 'url(#sketch-wobble)' }}
            >
              <span>Turn to Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('about')}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#fffef9] hover:bg-[#ede0ca] text-[#1a110e] font-hand text-base font-bold border-2 border-[#3f2a1e] shadow-xs hover:scale-105 transition-transform"
              style={{ filter: 'url(#sketch-wobble)' }}
            >
              <span>Read Story 📖</span>
            </button>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-2.5 pt-1">
            <span className="font-hand text-xs font-bold text-[#6a524a]">Find me:</span>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              onClick={() => playSketchSound('pop')}
              className="p-2 rounded-full bg-[#fffef9] border border-[#3f2a1e] hover:bg-[#ede0ca] transition-transform hover:scale-110 shadow-2xs"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4 text-[#2b1f1d]" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              onClick={() => playSketchSound('pop')}
              className="p-2 rounded-full bg-[#fffef9] border border-[#3f2a1e] hover:bg-[#ede0ca] transition-transform hover:scale-110 shadow-2xs"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4 text-[#5d8aa8]" />
            </a>
          </div>
        </div>

        {/* Right Polaroid Photo */}
        <div className="lg:col-span-5 flex justify-center relative pt-2 lg:pt-0">
          <div className="relative transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 tape rounded-sm z-20 transform -rotate-3" />

            <div className="bg-[#fffef9] border-2 border-[#3f2a1e] p-3.5 pb-5 rounded-2xl shadow-lg space-y-2 w-[240px] sm:w-[270px]" style={{ filter: 'url(#sketch-wobble)' }}>
              <div className="relative aspect-square w-full rounded-xl overflow-hidden border-2 border-[#3f2a1e] bg-[#ede0ca]">
                <img
                  src="/images/profile-primary.jpg"
                  alt="Shambhavi Jha"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="text-center pt-1">
                <p className="font-hand text-xl font-bold text-[#1a110e]">
                  Shambhavi Jha 🌸
                </p>
                <p className="font-sketch text-xs text-[#5d8aa8]">
                  Data & Cloud Engineer • VIT '26
                </p>
              </div>
            </div>

            <div className="absolute -bottom-3 -right-3 px-3 py-1 bg-[#f4a282] border border-[#3f2a1e] rounded-full font-hand text-xs font-bold text-white shadow-xs transform rotate-12">
              Verified Engineer ⚡
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Nav */}
      <div className="flex justify-end pt-3 lg:pt-1 border-t border-[#3f2a1e]/15 shrink-0">
        <button
          onClick={() => onNavigate('about')}
          className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#ede0ca] hover:bg-[#d9cca8] text-[#1a110e] font-hand text-base font-bold border border-[#3f2a1e] transition-transform hover:scale-105"
        >
          <span>Next: About Story</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
