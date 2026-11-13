import React, { useState } from 'react';
import { PORTFOLIO_CONFIG, type ToolCategory } from '../config/portfolio';
import { PlatformLogo } from './PlatformLogos';
import { Reveal } from './Reveal';

const FILTER_TABS: ToolCategory[] = [
  'All',
  'Ad Platforms',
  'Tracking & Analytics',
  'CRM & Operations',
];

export const ExpertiseSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ToolCategory>('All');
  const { expertise } = PORTFOLIO_CONFIG;

  const showPrimaryPlatforms =
    selectedCategory === 'All' || selectedCategory === 'Ad Platforms';

  const visibleTools =
    selectedCategory === 'All'
      ? expertise.tools
      : expertise.tools.filter((tool) => tool.category === selectedCategory);

  const trackingTools = visibleTools.filter((t) => t.category === 'Tracking & Analytics');
  const operationalTools = visibleTools.filter((t) => t.category === 'CRM & Operations');

  return (
    <section
      id="expertise"
      className="py-24 lg:py-32 bg-[#0B0D12] border-b border-white/[0.07]"
    >
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8">
        {/* Section Header + Category Filter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <Reveal>
            <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.24em] text-[#DEB764]">
              <span aria-hidden="true" className="w-6 h-[1px] bg-[#DEB764]" />
              <span>{expertise.kicker}</span>
            </div>

            <h2 className="mt-4 font-display font-normal text-3xl sm:text-4xl lg:text-[3.1rem] leading-[1.08] tracking-[-0.02em] text-[#F5F5F2] [text-wrap:balance]">
              {expertise.headingPrefix}{' '}
              <span className="italic text-[#DEB764]">{expertise.headingAccent}</span>
            </h2>

            <p className="mt-4 text-[#A4A7AF] max-w-2xl text-[15.5px] leading-[1.7]">
              {expertise.subtitle}
            </p>
          </Reveal>

          {/* Interactive Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter platforms and tools by category"
            className="inline-flex flex-wrap items-center gap-1 p-1 rounded-lg bg-[#0E1117] border border-white/[0.08] self-start"
          >
            {FILTER_TABS.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-2 rounded-[6px] font-mono text-xs tracking-wide transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DEB764] ${
                    active
                      ? 'bg-[#DEB764] text-[#090A0D] font-medium'
                      : 'text-[#A4A7AF] hover:text-[#F5F5F2]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Primary Advertising Platforms */}
        {showPrimaryPlatforms && (
          <div className="mt-14">
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#A4A7AF] mb-5">
              Primary Advertising Platforms
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {expertise.primaryPlatforms.map((platform, idx) => (
                <Reveal key={platform.id} delayMs={idx * 55}>
                  <article className="editorial-card h-full rounded-xl bg-[#0E1117]/95 border border-white/[0.07] p-7 sm:p-8 flex flex-col justify-between hover:border-[#DEB764]/40 hover:-translate-y-0.5">
                    <div>
                      <div className="flex items-center justify-between gap-4">
                        <div className="w-11 h-11 rounded-lg bg-[#161A22] border border-white/[0.08] flex items-center justify-center shrink-0">
                          <PlatformLogo logoKey={platform.logoKey} className="w-6 h-6" />
                        </div>
                        <span className="font-mono text-[11px] text-[#A4A7AF] tracking-wider uppercase text-right">
                          {platform.role}
                        </span>
                      </div>

                      <h3 className="mt-6 font-display font-normal text-2xl sm:text-[1.65rem] text-[#F5F5F2] tracking-[-0.01em]">
                        {platform.name}
                      </h3>

                      <p className="mt-3 text-sm leading-[1.7] text-[#A4A7AF]">
                        {platform.description}
                      </p>
                    </div>

                    <ul className="mt-6 pt-5 border-t border-white/[0.07] space-y-2.5 text-xs text-[#F5F5F2]/90">
                      {platform.capabilities.map((item) => (
                        <li key={item} className="flex items-center gap-2.5">
                          <span aria-hidden="true" className="w-1.5 h-[1px] bg-[#DEB764] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* Tracking & Analytics */}
        {trackingTools.length > 0 && (
          <div className="mt-14">
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#A4A7AF] mb-5">
              Tracking &amp; Analytics
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {trackingTools.map((tool) => (
                <div
                  key={tool.id}
                  className="editorial-card rounded-xl bg-[#0E1117]/90 border border-white/[0.07] px-5 py-4 flex items-center gap-4 hover:border-white/20"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#161A22] border border-white/[0.07] flex items-center justify-center shrink-0">
                    <PlatformLogo logoKey={tool.logoKey} className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-[#F5F5F2] truncate">
                      {tool.name}
                    </div>
                    <div className="mt-0.5 text-xs text-[#A4A7AF] truncate">
                      {tool.purpose}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Marketing & Operational Tools */}
        {operationalTools.length > 0 && (
          <div className="mt-14">
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#A4A7AF] mb-5">
              Marketing &amp; Operational Ecosystem
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {operationalTools.map((tool) => (
                <div
                  key={tool.id}
                  className="editorial-card rounded-xl bg-[#0E1117]/90 border border-white/[0.07] px-5 py-4 flex items-center gap-4 hover:border-white/20"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#161A22] border border-white/[0.07] flex items-center justify-center shrink-0">
                    <PlatformLogo logoKey={tool.logoKey} className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-[#F5F5F2] truncate">
                      {tool.name}
                    </div>
                    <div className="mt-0.5 text-xs text-[#A4A7AF] truncate">
                      {tool.purpose}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
