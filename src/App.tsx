import React, { useState } from 'react';
import { KittyPawCursor } from './components/KittyPawCursor';
import { RunningKitty } from './components/RunningKitty';
import { SketchbookNav } from './components/SketchbookNav';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { ProjectsPage } from './components/pages/ProjectsPage';
import { ExperiencePage } from './components/pages/ExperiencePage';
import { LeetCodePage } from './components/pages/LeetCodePage';
import { SkillsPage } from './components/pages/SkillsPage';
import { ResumePage } from './components/pages/ResumePage';
import { ContactPage } from './components/pages/ContactPage';
import { SketchFooter } from './components/SketchFooter';
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
    <div className="relative h-screen max-h-screen overflow-hidden flex flex-col justify-between bg-[#fcf8f2] text-[#1f1614] notebook-container select-none">
      {/* Custom Kitty Paw Cursor (Desktop) */}
      <KittyPawCursor />

      {/* Interactive Runaway Kitty */}
      <RunningKitty />

      {/* Left Spiral Binding Rings (Desktop) & Navigation */}
      <SketchbookNav activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Viewport Container: 100% Zero-Scroll on 1920x1080 */}
      <main className="flex-1 md:pl-36 lg:pl-40 px-4 sm:px-8 max-w-6xl w-full mx-auto flex flex-col justify-center overflow-hidden py-2 sm:py-3">
        <div key={activeSection} className="page-3d-active h-full">
          {renderActivePage()}
        </div>
      </main>

      {/* Compact Zero-Scroll Footer */}
      <div className="md:pl-36 lg:pl-40 shrink-0">
        <SketchFooter />
      </div>
    </div>
  );
};
