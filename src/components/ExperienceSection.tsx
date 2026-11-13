import React from 'react';
import { PORTFOLIO_CONFIG } from '../config/portfolio';
import { Reveal } from './Reveal';

export const ExperienceSection: React.FC = () => {
  const { experience } = PORTFOLIO_CONFIG;

  return (
    <section id="experience" className="py-24 lg:py-32 border-b border-white/[0.07]">
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.24em] text-[#DEB764]">
            <span aria-hidden="true" className="w-6 h-[1px] bg-[#DEB764]" />
            <span>{experience.kicker}</span>
          </div>

          <h2 className="mt-4 font-display font-normal text-3xl sm:text-4xl lg:text-[3.1rem] leading-[1.08] tracking-[-0.02em] text-[#F5F5F2] [text-wrap:balance]">
            {experience.headingPrefix}{' '}
            <span className="italic text-[#DEB764]">{experience.headingAccent}</span>
          </h2>
        </Reveal>

        {/* Reusable Vertical Timeline */}
        <div className="mt-14 relative">
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-[240px] top-0 bottom-0 w-[1px] bg-white/[0.08]"
          />

          <div className="space-y-8">
            {experience.items.map((item, idx) => (
              <Reveal key={item.id} delayMs={idx * 60}>
                <article className="relative grid grid-cols-1 md:grid-cols-[240px_1fr] gap-4 md:gap-12">
                  {/* Left Date Column */}
                  <div className="md:pr-8 md:text-right pt-2">
                    <div className="font-mono text-xs tracking-[0.14em] uppercase text-[#DEB764] tabular-nums">
                      {item.period}
                    </div>
                    <div className="mt-1.5 text-xs text-[#A4A7AF]">{item.location}</div>
                  </div>

                  {/* Right Role & Responsibilities Card */}
                  <div className="editorial-card relative rounded-2xl bg-[#0E1117]/95 border border-white/[0.08] p-7 sm:p-9 hover:border-[#DEB764]/35">
                    <div
                      aria-hidden="true"
                      className="hidden md:block absolute -left-[53px] top-8 w-2.5 h-2.5 rounded-[2px] rotate-45 bg-[#090A0D] border border-[#DEB764]"
                    />

                    <h3 className="font-display font-normal text-2xl sm:text-[1.75rem] text-[#F5F5F2] tracking-[-0.01em]">
                      {item.role}
                    </h3>
                    <div className="mt-1.5 font-mono text-xs tracking-[0.14em] uppercase text-[#DEB764]">
                      {item.organization}
                    </div>

                    <p className="mt-4 text-sm sm:text-[15.5px] leading-[1.7] text-[#A4A7AF]">
                      {item.description}
                    </p>

                    <div className="mt-6 pt-5 border-t border-white/[0.07]">
                      <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#A4A7AF]">
                        Key Responsibilities
                      </div>
                      <ul className="mt-3.5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-sm text-[#F5F5F2]/90">
                        {item.responsibilities.map((resp) => (
                          <li key={resp} className="flex items-start gap-2.5">
                            <span
                              aria-hidden="true"
                              className="mt-2.5 w-1.5 h-[1px] bg-[#DEB764] shrink-0"
                            />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
