/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { PORTFOLIO_CONFIG } from './config/portfolio';
import { getActiveSectionId } from './utils/portfolio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsStrip } from './components/StatsStrip';
import { AboutSection } from './components/AboutSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { IndustriesSection } from './components/IndustriesSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ApproachSection } from './components/ApproachSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSectionId, setActiveSectionId] = useState<string>('about');

  useEffect(() => {
    const updateActiveSection = () => {
      const offsets = PORTFOLIO_CONFIG.navigation
        .map((item) => {
          const el = document.getElementById(item.id);
          if (!el) {
            return null;
          }
          const top = el.offsetTop;
          return {
            id: item.id,
            top,
            bottom: top + el.offsetHeight,
          };
        })
        .filter((entry): entry is NonNullable<typeof entry> => entry !== null);

      const currentId = getActiveSectionId(offsets, window.scrollY, 160);
      if (currentId) {
        setActiveSectionId(currentId);
      }
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection, { passive: true });
    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#090A0D] text-[#F5F5F2] editorial-grid-bg">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#DEB764] focus:text-[#090A0D] focus:font-mono focus:text-xs"
      >
        Skip to main content
      </a>

      <Navbar activeSectionId={activeSectionId} />

      <main id="main-content">
        <Hero />
        <StatsStrip />
        <AboutSection />
        <ExpertiseSection />
        <CaseStudiesSection />
        <IndustriesSection />
        <ExperienceSection />
        <ApproachSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
