import React from 'react';
import { DataStreamsCanvas } from './components/DataStreamsCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsCounter } from './components/StatsCounter';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { LeetCode100Days } from './components/LeetCode100Days';
import { CertificationsGrid } from './components/CertificationsGrid';
import { SkillsCloud } from './components/SkillsCloud';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#050811] text-slate-100">
      {/* Background Interactive Data Canvas */}
      <DataStreamsCanvas />

      {/* Glassmorphism Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-4">
        <Hero />
        <StatsCounter />
        <ProjectsShowcase />
        <ExperienceTimeline />
        <InteractiveTerminal />
        <LeetCode100Days />
        <CertificationsGrid />
        <SkillsCloud />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
