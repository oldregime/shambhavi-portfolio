import React, { useState } from 'react';
import { SketchbookNav } from './components/SketchbookNav';
import { DoodleCanvas } from './components/DoodleCanvas';
import { SketchHero } from './components/SketchHero';
import { SketchProjects } from './components/SketchProjects';
import { SketchExperience } from './components/SketchExperience';
import { SketchLeetCode } from './components/SketchLeetCode';
import { SketchSkills } from './components/SketchSkills';
import { SketchContact } from './components/SketchContact';
import { SketchFooter } from './components/SketchFooter';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="relative min-h-screen bg-[#fcf8f2] text-[#2b1f1d]">
      {/* Interactive Mascot & Ambient Doodles */}
      <DoodleCanvas />

      {/* Left Spiral Binding & Hand-Drawn Tabs */}
      <SketchbookNav activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Notebook Pages with Left Margin for Rings on Desktop */}
      <main className="md:pl-36 transition-all duration-300">
        <SketchHero />
        <SketchProjects />
        <SketchExperience />
        <SketchLeetCode />
        <SketchSkills />
        <SketchContact />
        <SketchFooter />
      </main>
    </div>
  );
};
