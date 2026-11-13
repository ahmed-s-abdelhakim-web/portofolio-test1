import React from 'react';
import { PORTFOLIO_CONFIG } from '../config/portfolio';
import { Reveal } from './Reveal';

export const ApproachSection: React.FC = () => {
  const { approach } = PORTFOLIO_CONFIG;

  return (
    <section
      id="approach"
      aria-label="Campaign management approach"
      className="py-24 lg:py-32 bg-[#0B0D12] border-b border-white/[0.07]"
    >
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.24em] text-[#DEB764]">
            <span aria-hidden="true" className="w-6 h-[1px] bg-[#DEB764]" />
            <span>{approach.kicker}</span>
          </div>

          <h2 className="mt-4 font-display font-normal text-3xl sm:text-4xl lg:text-[3.1rem] leading-[1.08] tracking-[-0.02em] text-[#F5F5F2] [text-wrap:balance]">
            {approach.headingPrefix}{' '}
            <span className="italic text-[#DEB764]">{approach.headingAccent}</span>
          </h2>
        </Reveal>

        {/* Horizontal 4-step process on desktop, vertical stack on mobile */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-4 rounded-2xl overflow-hidden border border-white/[0.08] divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08] bg-[#0E1117]">
          {approach.steps.map((step, idx) => (
            <Reveal key={step.number} delayMs={idx * 55} className="h-full">
              <article className="editorial-card h-full p-7 sm:p-8 flex flex-col justify-between hover:bg-[#131720]">
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-xs tracking-[0.2em] text-[#DEB764] tabular-nums">
                      {step.number} —
                    </span>
                    <span className="font-display italic font-normal text-2xl text-white/15 tabular-nums">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display font-normal text-2xl sm:text-[1.75rem] text-[#F5F5F2] tracking-[-0.01em]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-[1.7] text-[#A4A7AF]">
                    {step.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
