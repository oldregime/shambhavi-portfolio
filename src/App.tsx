import React, { useState } from 'react';
import { KittyPawCursor } from './components/KittyPawCursor';
import { RunningKitty } from './components/RunningKitty';
import { DoodleScratchpad } from './components/DoodleScratchpad';
import { SketchbookNav } from './components/SketchbookNav';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { ProjectsPage } from './components/pages/ProjectsPage';
import { ExperiencePage } from './components/pages/ExperiencePage';
import { LeetCodePage } from './components/pages/LeetCodePage';
import { SkillsPage } from './components/pages/SkillsPage';
import { ResumePage } from './components/pages/ResumePage';
import { ContactPage } from './components/pages/ContactPage';
import { playSketchSound } from './utils/sketchAudio';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigate = (page: string) => {
    playSketchSound('page-flip');
    setActiveSection(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderActivePage = () => {
    switch (activeSection) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'projects':
        return <ProjectsPage onNavigate={handleNavigate} />;
      case 'experience':
        return <ExperiencePage onNavigate={handleNavigate} />;
      case 'leetcode':
        return <LeetCodePage onNavigate={handleNavigate} />;
      case 'skills':
        return <SkillsPage onNavigate={handleNavigate} />;
      case 'resume':
        return <ResumePage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="relative min-h-screen lg:h-screen lg:max-h-screen lg:overflow-hidden flex flex-col justify-between bg-[#fbf7ef] text-[#1f1614] notebook-container select-none">
      {/* Red Margin Line on Desktop */}
      <div className="notebook-margin-line" />

      {/* Ambient Coffee Stain Ring */}
      <svg className="fixed top-8 right-12 w-32 h-32 pointer-events-none opacity-15 z-0 overflow-visible hidden sm:block" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke="#8b552d" strokeWidth="3" strokeDasharray="6 3 12 4" transform="rotate(25 50 50)" />
        <circle cx="50" cy="50" r="42" fill="none" stroke="#8b552d" strokeWidth="1" opacity="0.6" />
      </svg>

      {/* Custom Kitty Paw Cursor (Desktop only) */}
      <KittyPawCursor />

      {/* Interactive Runaway Kitty */}
      <RunningKitty />

      {/* Interactive Doodle Scratchpad */}
      <DoodleScratchpad />

      {/* Spiral Rings (Desktop) & Responsive Nav (Mobile Bottom Dock + Desktop Left Tabs) */}
      <SketchbookNav activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content Area: Zero scroll on desktop, full scroll with padding on mobile */}
      <main className="flex-1 md:pl-36 lg:pl-40 px-4 sm:px-8 max-w-6xl w-full mx-auto flex flex-col justify-center py-4 lg:py-5 pt-14 lg:pt-4 pb-28 lg:pb-4 overflow-y-auto lg:overflow-hidden">
        <div key={activeSection} className="page-3d-active lg:h-full flex flex-col justify-between">
          {renderActivePage()}
        </div>
      </main>
    </div>
  );
};
