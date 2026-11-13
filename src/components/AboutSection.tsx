import React from 'react';
import { PORTFOLIO_CONFIG } from '../config/portfolio';
import { Reveal } from './Reveal';

export const AboutSection: React.FC = () => {
  const { about } = PORTFOLIO_CONFIG;

  return (
    <section id="about" className="py-24 lg:py-32 border-b border-white/[0.07]">
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.24em] text-[#DEB764]">
            <span aria-hidden="true" className="w-6 h-[1px] bg-[#DEB764]" />
            <span>{about.kicker}</span>
          </div>

          <h2 className="mt-4 font-display font-normal text-3xl sm:text-4xl lg:text-[3.1rem] leading-[1.08] tracking-[-0.02em] text-[#F5F5F2] max-w-3xl [text-wrap:balance]">
            {about.headingPrefix}{' '}
            <span className="italic text-[#DEB764]">{about.headingAccent}</span>
          </h2>
        </Reveal>

        {/* Editorial Narrative + 4 Capability Blocks */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 space-y-5 text-[#A4A7AF] text-[15.5px] leading-[1.75]">
            {about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={
                  index === 0
                    ? 'text-[#F5F5F2] text-lg sm:text-[1.18rem] leading-[1.65] font-normal'
                    : ''
                }
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {about.capabilities.map((cap, idx) => (
              <Reveal key={cap.id} delayMs={idx * 55}>
                <article className="editorial-card h-full rounded-xl bg-[#0E1117]/90 border border-white/[0.07] p-7 sm:p-8 hover:border-[#DEB764]/40 hover:-translate-y-0.5">
                  <div className="font-mono text-[11px] tracking-[0.2em] text-[#DEB764]/90 tabular-nums">
                    {cap.number}
                  </div>
                  <h3 className="mt-3.5 text-lg font-semibold text-[#DEB764] tracking-[-0.01em]">
                    {cap.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.7] text-[#A4A7AF]">
                    {cap.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
