import React, { useState } from 'react';
import { SketchbookNav } from './components/SketchbookNav';
import { DoodleCanvas } from './components/DoodleCanvas';
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
      {/* Interactive Mascot Cat & Ambient Doodles */}
      <DoodleCanvas />

      {/* Left Spiral Binding Rings & Tabs Navigation */}
      <SketchbookNav activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* 3D Page Turn Animation Wrapper */}
      <main className="md:pl-40 px-4 sm:px-8 max-w-6xl mx-auto py-8">
        <div key={activeSection} className="page-3d-active">
          {renderActivePage()}
        </div>
      </main>

      {/* Footer */}
      <div className="md:pl-40">
        <SketchFooter />
      </div>
    </div>
  );
};
