import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../config/portfolio';

interface NavbarProps {
  activeSectionId: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSectionId }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (y / docHeight) * 100)));
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090A0D]/88 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.35)]'
          : 'bg-[#090A0D]/40 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      {/* Scroll progress indicator hairline */}
      <div
        aria-hidden="true"
        className="h-[2px] bg-[#DEB764] transition-transform duration-150 origin-left"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 h-16 md:h-[74px] flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          className="font-sans text-xs sm:text-[13px] font-semibold tracking-[0.28em] text-[#F5F5F2] hover:text-[#DEB764] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DEB764] rounded-[4px]"
        >
          {PORTFOLIO_CONFIG.identity.brandWordmark}
        </a>

        {/* Zone 2: Clean single-line navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-8 text-[13px] tracking-[0.04em] font-normal"
        >
          {PORTFOLIO_CONFIG.navigation.map((item) => {
            const isActive = activeSectionId === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                aria-current={isActive ? 'location' : undefined}
                className={`group relative py-1.5 whitespace-nowrap shrink-0 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DEB764] rounded-[4px] ${
                  isActive ? 'text-[#F5F5F2] font-medium' : 'text-[#A4A7AF] hover:text-[#F5F5F2]'
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 right-0 -bottom-0.5 h-[1px] bg-[#DEB764] transition-transform duration-200 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-[5px] font-mono text-[11px] tracking-[0.18em] uppercase border border-[#DEB764]/55 text-[#DEB764] hover:bg-[#DEB764] hover:text-[#090A0D] hover:border-[#DEB764] transition-all duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DEB764]"
          >
            Get in Touch
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-[6px] border border-white/15 text-[#F5F5F2] hover:border-[#DEB764] hover:text-[#DEB764] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DEB764]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Smooth Mobile Drawer */}
      <div
        id="mobile-navigation-drawer"
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-250 ease-out border-t border-white/[0.08] bg-[#090A0D]/95 backdrop-blur-xl ${
          mobileOpen ? 'max-h-[440px] opacity-100' : 'max-h-0 opacity-0 border-t-transparent'
        }`}
      >
        <nav aria-label="Mobile navigation" className="px-5 py-5 flex flex-col gap-1">
          {PORTFOLIO_CONFIG.navigation.map((item) => {
            const isActive = activeSectionId === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={handleLinkClick}
                className={`py-3 px-2 text-base border-b border-white/[0.06] transition-colors ${
                  isActive ? 'text-[#DEB764] font-medium' : 'text-[#F5F5F2] hover:text-[#DEB764]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="mt-4 inline-flex items-center justify-center px-5 py-3 rounded-[6px] font-mono text-xs tracking-[0.16em] uppercase bg-[#DEB764] text-[#090A0D] font-medium"
          >
            Get in Touch
          </a>
        </nav>
      </div>
    </header>
  );
};
