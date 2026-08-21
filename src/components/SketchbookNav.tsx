import React, { useState } from 'react';
import { Volume2, VolumeX, Menu, X, FileText } from 'lucide-react';
import { playSketchSound, toggleAudioMute, getAudioMuteState } from '../utils/sketchAudio';

interface NavProps {
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export const SketchbookNav: React.FC<NavProps> = ({ activeSection, setActiveSection }) => {
  const [isMuted, setIsMuted] = useState(getAudioMuteState());
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSoundToggle = () => {
    const next = toggleAudioMute();
    setIsMuted(next);
    if (!next) playSketchSound('pop');
  };

  const tabs = [
    { id: 'home', label: 'home', color: '#5d8aa8' },
    { id: 'about', label: 'about', color: '#7a9a7b' },
    { id: 'projects', label: 'projects', color: '#e8b042' },
    { id: 'experience', label: 'experience', color: '#9c8eb9' },
    { id: 'leetcode', label: '100 days dsa', color: '#f4a282' },
    { id: 'skills', label: 'skills', color: '#7a9a7b' },
    { id: 'contact', label: 'contact', color: '#d96b52' },
  ];

  const handleTabClick = (id: string) => {
    playSketchSound('page-flip');
    setActiveSection(id);
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Sound Toggle Floating Button */}
      <button
        onClick={handleSoundToggle}
        className="fixed right-4 top-4 z-50 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#fcf8f2]/90 border-2 border-[#3f2a1e] text-xs font-hand font-bold text-[#3f2a1e] shadow-md backdrop-blur-sm transition-transform hover:scale-105"
        style={{ filter: 'url(#sketch-wobble)' }}
      >
        {isMuted ? <VolumeX className="w-4 h-4 text-[#d96b52]" /> : <Volume2 className="w-4 h-4 text-[#7a9a7b]" />}
        <span>{isMuted ? 'sounds off' : 'sounds on ♪'}</span>
      </button>

      {/* Direct Resume Floating Button on Top Right */}
      <a
        href="/resume.pdf"
        download="Shambhavi_Jha_Resume.pdf"
        onClick={() => playSketchSound('chime')}
        className="fixed right-4 top-16 z-50 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e8b042] hover:bg-[#dba134] text-xs font-hand font-bold text-[#2b1f1d] border-2 border-[#3f2a1e] shadow-md transition-transform hover:scale-105"
        style={{ filter: 'url(#sketch-wobble)' }}
      >
        <FileText className="w-3.5 h-3.5" />
        <span>resume.pdf 📎</span>
      </a>

      {/* Left Spiral Binding Rings (Desktop) */}
      <div className="hidden md:flex fixed inset-y-0 left-0 w-8 z-30 flex-col justify-around items-center pointer-events-none py-6">
        {[...Array(14)].map((_, i) => (
          <svg key={i} width="28" height="32" viewBox="0 0 28 32" className="shrink-0 overflow-visible">
            <path
              d="M 14 4 C 26 4 26 16 14 16 C 2 16 2 28 14 28"
              fill="none"
              stroke="#3f2a1e"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <ellipse cx="14" cy="16" rx="4" ry="4" fill="#ede0ca" stroke="#3f2a1e" strokeWidth="1" />
          </svg>
        ))}
      </div>

      {/* Left Hand-Drawn Tabs Navigation (Desktop) */}
      <nav className="hidden md:block fixed left-9 top-1/2 -translate-y-1/2 z-30">
        <div className="flex flex-col gap-3.5 py-4">
          {tabs.map((tab) => {
            const isActive = activeSection === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className="group relative flex items-center justify-center w-28 h-10 bg-transparent font-hand text-lg font-bold text-[#3f2a1e] focus:outline-none cursor-pointer"
              >
                {/* Hand-drawn Oval Outline SVG */}
                <svg
                  className={`absolute inset-0 w-full h-full overflow-visible transition-all duration-300 ${
                    isActive ? 'opacity-100 scale-105' : 'opacity-0 group-hover:opacity-60'
                  }`}
                  viewBox="0 0 120 50"
                  fill="none"
                  style={{ color: tab.color }}
                >
                  <ellipse cx="60" cy="25" rx="54" ry="18" stroke="currentColor" strokeWidth="2" transform="rotate(-2 60 25)" />
                  <ellipse cx="60" cy="25" rx="56" ry="20" stroke="currentColor" strokeWidth="1.2" opacity=".75" transform="rotate(2 60 25)" />
                  <path d="M12 39 Q40 43 68 40 T108 38" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity=".6" />
                </svg>
                <span className="relative z-10 transition-transform group-hover:scale-105">
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile Drawer Trigger */}
      <div className="block md:hidden fixed left-4 top-4 z-50">
        <button
          onClick={() => {
            playSketchSound('pop');
            setMobileOpen(!mobileOpen);
          }}
          className="p-2 rounded-full bg-[#fcf8f2] border-2 border-[#3f2a1e] shadow-md"
          style={{ filter: 'url(#sketch-wobble)' }}
        >
          {mobileOpen ? <X className="w-5 h-5 text-[#3f2a1e]" /> : <Menu className="w-5 h-5 text-[#3f2a1e]" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-[#fcf8f2]/95 backdrop-blur-xl p-8 flex flex-col justify-center items-center gap-5">
          <p className="font-hand text-2xl font-bold text-[#3f2a1e]">The Sketchbook Pages</p>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className="font-hand text-2xl text-[#3f2a1e] hover:text-[#5d8aa8] font-bold"
            >
              {tab.label}
            </button>
          ))}
          <a
            href="/resume.pdf"
            download="Shambhavi_Jha_Resume.pdf"
            className="mt-4 px-6 py-2.5 rounded-full bg-[#e8b042] text-sm font-hand font-bold text-[#2b1f1d] border-2 border-[#3f2a1e]"
          >
            Download Resume (PDF)
          </a>
        </div>
      )}
    </>
  );
};
