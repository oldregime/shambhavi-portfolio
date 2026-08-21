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
    <div className="relative min-h-screen bg-[#fcf8f2] text-[#1f1614] notebook-container">
      {/* Custom Kitty Paw Cursor (Desktop) */}
      <KittyPawCursor />

      {/* Interactive Runaway Kitty (Try to Catch Me!) */}
      <RunningKitty />

      {/* Left Spiral Binding Rings (Desktop) & Responsive Navigation */}
      <SketchbookNav activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Notebook Pages Container: Desktop left padding for rings, Mobile bottom padding for dock */}
      <main className="md:pl-40 px-4 sm:px-8 max-w-6xl mx-auto py-6 sm:py-8 pb-28 md:pb-8">
        <div key={activeSection} className="page-3d-active">
          {renderActivePage()}
        </div>
      </main>

      {/* Footer */}
      <div className="md:pl-40 pb-24 md:pb-0">
        <SketchFooter />
      </div>
    </div>
  );
};
