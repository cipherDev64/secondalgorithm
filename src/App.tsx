import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { StudioIntro } from './components/StudioIntro';
import { ServicesSection } from './components/ServicesSection';
import { WorkSection } from './components/WorkSection';
import { ProcessSection } from './components/ProcessSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { LegalModal } from './components/LegalModal';
import type { ProjectItem } from './data/content';

export function App() {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const handleExploreWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0D0F14] selection:bg-[#0D0F14] selection:text-white flex flex-col justify-between">
      {/* Floating Translucent Navigation Bar */}
      <Navbar />

      {/* Main Experience Flow */}
      <main id="main-content" className="flex-grow">
        {/* 01. The Hero Creative Statement */}
        <Hero onExploreWork={handleExploreWork} />

        {/* Tactile Marquee Cadence Ribbon */}
        <Marquee />

        {/* 02. Studio Philosophy & Anti-Template Manifesto */}
        <StudioIntro />

        {/* 03. Specialized Capabilities & Services Index */}
        <ServicesSection />

        {/* 04. Selected Commissions Portfolio */}
        <WorkSection onOpenCaseStudy={(project) => setActiveProject(project)} />

        {/* 05. The Studio Process & Direct Booking & FAQ */}
        <ProcessSection />

        {/* 06. Book a Call to Discuss Business */}
        <ContactSection />
      </main>

      {/* Complete Studio Footer */}
      <Footer
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />

      {/* Deep-Dive Case Study Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />

      {/* Legal Dialog Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}

export default App;
