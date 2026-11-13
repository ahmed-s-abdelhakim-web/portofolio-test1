import React, { useState } from 'react';
import { ArrowUpRight, Maximize2 } from 'lucide-react';
import { PORTFOLIO_CONFIG, type CaseStudy } from '../config/portfolio';
import { filterCaseStudiesByPlatform, type CaseStudyFilter } from '../utils/portfolio';
import { CaseStudyModal } from './CaseStudyModal';
import { Reveal } from './Reveal';

const WORK_FILTERS: CaseStudyFilter[] = ['All', 'Meta Ads', 'Google Ads', 'Automation'];

export const CaseStudiesSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CaseStudyFilter>('All');
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const [selectedInitialSlide, setSelectedInitialSlide] = useState(0);
  const [activePreviewByStudy, setActivePreviewByStudy] = useState<Record<string, number>>({});
  const { caseStudies } = PORTFOLIO_CONFIG;

  const filteredStudies = filterCaseStudiesByPlatform(caseStudies.items, activeFilter);

  const openStudyModal = (study: CaseStudy, slideIndex: number) => {
    setSelectedInitialSlide(slideIndex);
    setSelectedStudy(study);
  };

  return (
    <section id="work" className="py-24 lg:py-32 border-b border-white/[0.07]">
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8">
        {/* Section Header + Platform Filter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <Reveal>
            <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.24em] text-[#DEB764]">
              <span aria-hidden="true" className="w-6 h-[1px] bg-[#DEB764]" />
              <span>{caseStudies.kicker}</span>
            </div>

            <h2 className="mt-4 font-display font-normal text-3xl sm:text-4xl lg:text-[3.1rem] leading-[1.08] tracking-[-0.02em] text-[#F5F5F2] [text-wrap:balance]">
              {caseStudies.headingPrefix}{' '}
              <span className="italic text-[#DEB764]">{caseStudies.headingAccent}</span>
            </h2>

            <p className="mt-4 text-[#A4A7AF] max-w-2xl text-[15.5px] leading-[1.7]">
              {caseStudies.subtitle}
            </p>
          </Reveal>

          <div
            role="tablist"
            aria-label="Filter case studies by channel"
            className="inline-flex flex-wrap items-center gap-1 p-1 rounded-lg bg-[#0E1117] border border-white/[0.08] self-start"
          >
            {WORK_FILTERS.map((filter) => {
              const active = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3.5 py-2 rounded-[6px] font-mono text-xs tracking-wide transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DEB764] ${
                    active
                      ? 'bg-[#DEB764] text-[#090A0D] font-medium'
                      : 'text-[#A4A7AF] hover:text-[#F5F5F2]'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Art-Directed Case Study Showcase Stack */}
        <div className="mt-14 space-y-10">
          {filteredStudies.map((study, index) => {
            const activeIndex = activePreviewByStudy[study.id] ?? 0;
            const activeCapture = study.gallery[activeIndex] ?? study.coverImage;

            return (
              <Reveal key={study.id} delayMs={index * 60}>
                <article className="editorial-card rounded-2xl bg-[#0E1117] border border-white/[0.08] hover:border-[#DEB764]/40 overflow-hidden shadow-[0_24px_70px_-28px_rgba(0,0,0,0.85)]">
                  <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                    {/* Left Column: Fitted Dashboard Capture & Inline Capture Switcher */}
                    <div className="lg:col-span-7 bg-[#0A0C11] border-b lg:border-b-0 lg:border-r border-white/[0.07] p-5 sm:p-7 flex flex-col justify-between gap-4">
                      {/* Main Dashboard Frame (tightly fitted aspect container) */}
                      <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#141720] p-2 sm:p-2.5 group">
                        <button
                          type="button"
                          onClick={() => openStudyModal(study, activeIndex)}
                          aria-label={`Expand ${study.title} capture: ${activeCapture.platformLabel}`}
                          className="relative block w-full rounded-lg overflow-hidden bg-[#FFFFFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DEB764]"
                        >
                          <img
                            src={activeCapture.src}
                            alt={activeCapture.alt}
                            loading="lazy"
                            referrerPolicy="no-referrer"
                            className="w-full h-[230px] sm:h-[310px] object-contain transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                          />
                          <span className="pointer-events-none absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[5px] bg-[#090A0D]/80 backdrop-blur-sm border border-white/15 font-mono text-[10px] tracking-[0.14em] uppercase text-[#F5F5F2] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <Maximize2 className="w-3 h-3 text-[#DEB764]" />
                            <span>Expand</span>
                          </span>
                        </button>
                      </div>

                      {/* Interactive Inline Capture Thumbnail Rail */}
                      {study.gallery.length > 1 && (
                        <div className="flex items-center gap-2.5 overflow-x-auto pb-1">
                          {study.gallery.map((capture, slideIdx) => {
                            const isCurrent = slideIdx === activeIndex;
                            return (
                              <button
                                key={capture.src}
                                type="button"
                                onClick={() =>
                                  setActivePreviewByStudy((prev) => ({
                                    ...prev,
                                    [study.id]: slideIdx,
                                  }))
                                }
                                aria-label={`Preview capture ${slideIdx + 1}: ${capture.platformLabel}`}
                                className={`relative w-20 h-12 sm:w-24 sm:h-14 rounded-md overflow-hidden border shrink-0 bg-[#FFFFFF] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DEB764] ${
                                  isCurrent
                                    ? 'border-[#DEB764] ring-1 ring-[#DEB764]/60 opacity-100'
                                    : 'border-white/15 opacity-55 hover:opacity-90'
                                }`}
                              >
                                <img
                                  src={capture.src}
                                  alt={capture.alt}
                                  loading="lazy"
                                  referrerPolicy="no-referrer"
                                  className="w-full h-full object-cover"
                                />
                              </button>
                            );
                          })}
                        </div>
                      )}

                      {/* Clean Caption & Gallery Action Footer */}
                      <div className="pt-3 border-t border-white/[0.07] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#A4A7AF]">
                        <span className="line-clamp-1">{activeCapture.caption}</span>
                        <button
                          type="button"
                          onClick={() => openStudyModal(study, activeIndex)}
                          className="font-mono text-[11px] tracking-[0.12em] uppercase text-[#DEB764] hover:text-[#E7C67D] whitespace-nowrap shrink-0 text-left sm:text-right transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DEB764] rounded-[4px]"
                        >
                          {activeCapture.platformLabel} · {activeIndex + 1}/{study.gallery.length}
                        </button>
                      </div>
                    </div>

                    {/* Right Column: Editorial Narrative & Strategy */}
                    <div className="lg:col-span-5 p-6 sm:p-8 lg:p-9 flex flex-col justify-between">
                      <div>
                        {/* Unboxed Metadata */}
                        <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] tracking-[0.14em] uppercase text-[#DEB764]">
                          <span>{study.platform}</span>
                          <span aria-hidden="true" className="text-white/25">·</span>
                          <span className="text-[#A4A7AF]">{study.industry}</span>
                          <span aria-hidden="true" className="text-white/25">·</span>
                          <span className="text-[#A4A7AF]">{study.market}</span>
                        </div>

                        <h3 className="mt-4 font-display font-normal text-2xl sm:text-[1.9rem] text-[#F5F5F2] leading-[1.2] tracking-[-0.015em] [text-wrap:balance]">
                          {study.title}
                        </h3>

                        <p className="mt-4 text-sm leading-[1.7] text-[#A4A7AF]">
                          {study.shortDescription}
                        </p>

                        {/* Key Execution Highlights */}
                        <div className="mt-6 pt-5 border-t border-white/[0.07]">
                          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#A4A7AF]">
                            Strategy &amp; Execution
                          </div>
                          <ul className="mt-3.5 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 text-xs leading-relaxed text-[#F5F5F2]/90">
                            {study.execution.map((item) => (
                              <li key={item} className="flex items-start gap-2">
                                <span
                                  aria-hidden="true"
                                  className="mt-2 w-1.5 h-[1px] bg-[#DEB764] shrink-0"
                                />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tools Used (Clean text list, zero pill boxes) */}
                        <div className="mt-5 pt-4 border-t border-white/[0.07] text-xs leading-relaxed">
                          <span className="font-mono tracking-[0.12em] uppercase text-[#A4A7AF]">
                            Tools:{' '}
                          </span>
                          <span className="text-[#F5F5F2]/90">{study.tools.join(' · ')}</span>
                        </div>
                      </div>

                      <div className="mt-7 pt-5 border-t border-white/[0.07] flex items-center justify-between gap-4">
                        <span className="font-mono text-[11px] tracking-[0.18em] text-[#A4A7AF]">
                          {study.index}
                        </span>

                        <button
                          type="button"
                          onClick={() => openStudyModal(study, activeIndex)}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[6px] border border-[#DEB764]/60 text-[#DEB764] font-mono text-xs tracking-[0.14em] uppercase hover:bg-[#DEB764] hover:text-[#090A0D] hover:border-[#DEB764] transition-all duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DEB764]"
                        >
                          <span>View Case Study</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      <CaseStudyModal
        study={selectedStudy}
        initialSlideIndex={selectedInitialSlide}
        onClose={() => setSelectedStudy(null)}
      />
    </section>
  );
};
