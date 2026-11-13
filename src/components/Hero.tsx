import React, { useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Globe2, Linkedin, Mail } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../config/portfolio';

export const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const { identity, contact } = PORTFOLIO_CONFIG;

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/[0.07] lg:min-h-[calc(100vh-76px)] lg:flex lg:flex-col lg:justify-center"
    >
      {/* Subtle radial ambient lighting matching editorial dark luxury aesthetic */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 right-[8%] w-[620px] h-[620px] rounded-full bg-[#DEB764]/[0.055] blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-[-6%] w-[420px] h-[420px] rounded-full bg-[#DEB764]/[0.025] blur-[120px]"
      />

      <div className="w-full max-w-[1260px] mx-auto px-5 sm:px-8 pt-10 pb-12 lg:pt-14 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Side: Editorial Typography & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Location Kicker */}
            <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.24em] text-[#DEB764] animate-[heroFadeUp_500ms_cubic-bezier(0.16,1,0.3,1)_both]">
              <span aria-hidden="true" className="w-6 h-[1px] bg-[#DEB764]" />
              <span>{identity.locationLabel}</span>
            </div>

            {/* Main Headline — Lightweight 400 Editorial Serif matching luxury reference */}
            <h1 className="mt-6 font-display font-normal text-[clamp(3.35rem,6.5vw,5.65rem)] leading-[0.94] tracking-[-0.025em] text-[#F5F5F2] [text-wrap:balance] animate-[heroFadeUp_600ms_cubic-bezier(0.16,1,0.3,1)_70ms_both]">
              <span className="block">{identity.firstName}</span>
              <span className="block italic text-[#DEB764] mt-1">{identity.lastName}</span>
            </h1>

            {/* Professional Subtitle */}
            <p className="mt-6 text-lg sm:text-[1.25rem] font-medium text-[#F5F5F2]/95 tracking-[-0.01em] animate-[heroFadeUp_600ms_cubic-bezier(0.16,1,0.3,1)_130ms_both]">
              {identity.title}
            </p>

            {/* Main Description */}
            <div className="mt-4 space-y-3.5 max-w-[56ch] text-[#A4A7AF] text-[15.5px] sm:text-base leading-[1.7] animate-[heroFadeUp_600ms_cubic-bezier(0.16,1,0.3,1)_180ms_both]">
              <p>{identity.heroSummary}</p>
              <p>{identity.heroSubSummary}</p>
            </div>

            {/* CTAs & Direct Links */}
            <div className="mt-9 animate-[heroFadeUp_600ms_cubic-bezier(0.16,1,0.3,1)_240ms_both]">
              <div className="flex flex-wrap items-center gap-3.5">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-[6px] bg-[#DEB764] text-[#090A0D] font-mono text-xs font-medium tracking-[0.16em] uppercase hover:bg-[#E7C67D] hover:-translate-y-0.5 shadow-[0_10px_30px_-10px_rgba(222,183,100,0.35)] transition-all duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DEB764]"
                >
                  <span>View My Work</span>
                  <ArrowDownRight className="w-4 h-4" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-[6px] border border-white/15 bg-white/[0.02] text-[#F5F5F2] font-mono text-xs font-medium tracking-[0.16em] uppercase hover:border-[#DEB764]/65 hover:text-[#DEB764] hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DEB764]"
                >
                  <span>Let&apos;s Connect</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              <div className="mt-7 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-5 text-sm text-[#A4A7AF]">
                <a
                  href={contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#DEB764] transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DEB764] rounded-[4px]"
                >
                  <Linkedin className="w-4 h-4 text-[#DEB764]" />
                  <span>LinkedIn</span>
                </a>

                <span aria-hidden="true" className="hidden sm:inline text-white/20">
                  /
                </span>

                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2 hover:text-[#DEB764] transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DEB764] rounded-[4px]"
                >
                  <Mail className="w-4 h-4 text-[#DEB764]" />
                  <span>{contact.email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Art-Directed Portrait Frame */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end animate-[heroFadeUp_700ms_cubic-bezier(0.16,1,0.3,1)_160ms_both]">
            <div className="w-full max-w-[440px]">
              <div className="relative aspect-[4/4.65] rounded-2xl bg-[#0E1117] border border-white/[0.08] overflow-hidden group shadow-[0_24px_70px_-20px_rgba(0,0,0,0.85)]">
                {!imageError ? (
                  <>
                    <img
                      src={identity.portrait.src}
                      alt={identity.portrait.alt}
                      referrerPolicy="no-referrer"
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    />
                    {/* Multi-directional perimeter vignette blending portrait cleanly into obsidian canvas */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-[#090A0D] via-[#090A0D]/15 to-transparent"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-r from-[#090A0D]/35 via-transparent to-[#090A0D]/25"
                    />
                  </>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-[#0E1117] p-8">
                    <span className="font-display italic text-6xl text-[#DEB764]">
                      {identity.portrait.initials}
                    </span>
                    <span className="mt-3 font-mono text-xs tracking-[0.2em] uppercase text-[#A4A7AF]">
                      {identity.fullName}
                    </span>
                  </div>
                )}

                {/* Subtle integrated availability signature resting inside bottom dark fade */}
                <div className="absolute inset-x-0 bottom-0 px-6 pb-5 pt-10 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-[#F5F5F2]/90">
                    <Globe2 className="w-3.5 h-3.5 text-[#DEB764] shrink-0" />
                    <span>{identity.availability}</span>
                  </div>
                  <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#DEB764] shrink-0">
                    US &amp; Global
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Minimalist Scroll Cue anchored gracefully on desktop */}
        <div className="hidden lg:flex justify-center mt-10">
          <a
            href="#stats"
            aria-label="Scroll down to career statistics and portfolio"
            className="group inline-flex flex-col items-center gap-2 text-[#A4A7AF]/70 hover:text-[#DEB764] transition-colors"
          >
            <span className="font-mono text-[10px] tracking-[0.28em] uppercase">Scroll</span>
            <span className="w-5 h-8 rounded-[10px] border border-white/20 group-hover:border-[#DEB764]/60 flex justify-center pt-1.5 transition-colors">
              <span className="w-[2px] h-1.5 bg-[#DEB764] rounded-[1px] animate-[scrollWheel_1.8s_ease-in-out_infinite]" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
