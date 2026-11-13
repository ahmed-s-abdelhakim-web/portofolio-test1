import React from 'react';
import { ArrowUp, Linkedin, Mail } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../config/portfolio';

export const Footer: React.FC = () => {
  const { identity, navigation, contact } = PORTFOLIO_CONFIG;
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090A0D] py-14 sm:py-16">
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-white/[0.07]">
          <div>
            <div className="font-sans text-sm font-semibold tracking-[0.28em] text-[#F5F5F2]">
              {identity.brandWordmark}
            </div>
            <p className="mt-2 text-sm text-[#A4A7AF]">{identity.footerTitle}</p>
            <p className="mt-1 font-mono text-xs tracking-wider text-[#A4A7AF]/75">
              {identity.footerLocation}
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-7 text-sm">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-[#A4A7AF] hover:text-[#DEB764] transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ahmed Samir LinkedIn profile"
              className="w-10 h-10 rounded-lg border border-white/15 flex items-center justify-center text-[#A4A7AF] hover:border-[#DEB764] hover:text-[#DEB764] transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${contact.email}`}
              aria-label="Email Ahmed Samir"
              className="w-10 h-10 rounded-lg border border-white/15 flex items-center justify-center text-[#A4A7AF] hover:border-[#DEB764] hover:text-[#DEB764] transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={handleScrollTop}
              aria-label="Scroll to top"
              className="w-10 h-10 rounded-lg border border-white/15 flex items-center justify-center text-[#A4A7AF] hover:border-[#DEB764] hover:text-[#DEB764] transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#A4A7AF]/85">
          <p className="tabular-nums">
            Copyright &copy; {currentYear} {identity.fullName}. All rights reserved.
          </p>
          <p className="font-mono tracking-wider text-[#A4A7AF]/75">
            Meta Ads · Google Ads · TikTok Ads
          </p>
        </div>
      </div>
    </footer>
  );
};
