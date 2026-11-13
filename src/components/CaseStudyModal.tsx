import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { CaseStudy } from '../config/portfolio';

interface CaseStudyModalProps {
  study: CaseStudy | null;
  initialSlideIndex?: number;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  study,
  initialSlideIndex = 0,
  onClose,
}) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(initialSlideIndex);

  useEffect(() => {
    setActiveSlideIndex(initialSlideIndex);
  }, [study?.id, initialSlideIndex]);

  useEffect(() => {
    if (!study) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowRight') {
        setActiveSlideIndex((prev) => (prev + 1) % study.gallery.length);
      } else if (event.key === 'ArrowLeft') {
        setActiveSlideIndex((prev) => (prev - 1 + study.gallery.length) % study.gallery.length);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [study, onClose]);

  if (!study) {
    return null;
  }

  const activeCapture = study.gallery[activeSlideIndex] ?? study.coverImage;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#090A0D]/88 backdrop-blur-md"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-[1120px] max-h-[92vh] overflow-y-auto rounded-2xl bg-[#0E1117] border border-white/15 text-[#F5F5F2] shadow-[0_30px_90px_rgba(0,0,0,0.85)] animate-[modalEnter_220ms_cubic-bezier(0.16,1,0.3,1)_both]">
        {/* Sticky Modal Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 px-5 sm:px-8 py-4 bg-[#0E1117]/95 backdrop-blur-xl border-b border-white/[0.08]">
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs tracking-[0.14em] uppercase text-[#DEB764]">
            <span>{study.index}</span>
            <span aria-hidden="true" className="text-white/25">·</span>
            <span>{study.platform}</span>
            <span aria-hidden="true" className="text-white/25">·</span>
            <span className="text-[#A4A7AF]">{study.industry}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label={`Close ${study.title} details`}
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/15 text-[#F5F5F2] hover:border-[#DEB764] hover:text-[#DEB764] transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DEB764]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 sm:p-8 lg:p-10">
          <h3
            id="case-study-modal-title"
            className="font-display font-normal text-2xl sm:text-4xl text-[#F5F5F2] leading-tight tracking-[-0.015em] [text-wrap:balance]"
          >
            {study.title}
          </h3>

          <p className="mt-4 text-[#A4A7AF] text-base leading-relaxed max-w-3xl">
            {study.shortDescription}
          </p>

          {/* Large Interactive Dashboard Capture Viewer */}
          <div className="mt-8 rounded-xl overflow-hidden border border-white/10 bg-[#090A0D]">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#12151E] p-3 sm:p-5 flex items-center justify-center">
              <div className="w-full h-full rounded-lg overflow-hidden bg-[#FFFFFF] flex items-center justify-center">
                <img
                  src={activeCapture.src}
                  alt={activeCapture.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>

              {study.gallery.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveSlideIndex(
                        (prev) => (prev - 1 + study.gallery.length) % study.gallery.length
                      )
                    }
                    aria-label="Previous campaign screenshot"
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg bg-[#090A0D]/88 border border-white/20 text-[#F5F5F2] hover:border-[#DEB764] hover:text-[#DEB764] flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DEB764]"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveSlideIndex((prev) => (prev + 1) % study.gallery.length)
                    }
                    aria-label="Next campaign screenshot"
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg bg-[#090A0D]/88 border border-white/20 text-[#F5F5F2] hover:border-[#DEB764] hover:text-[#DEB764] flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DEB764]"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            <div className="px-4 sm:px-5 py-3.5 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-[#0E1117]">
              <div className="text-xs sm:text-sm text-[#F5F5F2]">{activeCapture.caption}</div>
              <div className="font-mono text-xs text-[#DEB764] whitespace-nowrap tabular-nums">
                {activeCapture.platformLabel} · {activeSlideIndex + 1} / {study.gallery.length}
              </div>
            </div>

            {/* Thumbnail Switcher */}
            {study.gallery.length > 1 && (
              <div className="p-3 bg-[#090A0D] border-t border-white/[0.08] flex items-center gap-3 overflow-x-auto">
                {study.gallery.map((capture, index) => {
                  const selected = index === activeSlideIndex;
                  return (
                    <button
                      key={capture.src}
                      type="button"
                      onClick={() => setActiveSlideIndex(index)}
                      aria-label={`View screenshot ${index + 1}: ${capture.platformLabel}`}
                      className={`relative w-28 h-16 shrink-0 rounded-md overflow-hidden border bg-[#FFFFFF] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DEB764] ${
                        selected
                          ? 'border-[#DEB764] ring-1 ring-[#DEB764]/60 opacity-100'
                          : 'border-white/15 opacity-55 hover:opacity-90'
                      }`}
                    >
                      <img
                        src={capture.src}
                        alt={capture.alt}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Configurable Key Metrics (Rendered only when verified metrics are configured) */}
          {study.metrics.length > 0 && (
            <div className="mt-8 pt-8 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-6">
              {study.metrics.map((metric) => (
                <div key={metric.label}>
                  <div className="font-display font-normal text-2xl sm:text-3xl text-[#DEB764] tabular-nums">
                    {metric.value}
                  </div>
                  <div className="mt-1 font-mono text-xs uppercase tracking-wider text-[#A4A7AF]">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Objectives, Strategy & Execution, Tools */}
          <div className="mt-9 pt-8 border-t border-white/[0.08] grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-mono text-xs tracking-[0.18em] uppercase text-[#DEB764]">
                Project Objectives
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-[#A4A7AF] leading-relaxed">
                {study.objectives.map((objective) => (
                  <li key={objective} className="flex items-start gap-3">
                    <span aria-hidden="true" className="mt-2 w-1.5 h-[1px] bg-[#DEB764] shrink-0" />
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-xs tracking-[0.18em] uppercase text-[#DEB764]">
                Strategy &amp; Execution
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-[#A4A7AF] leading-relaxed">
                {study.execution.map((step) => (
                  <li key={step} className="flex items-start gap-3">
                    <span aria-hidden="true" className="mt-2 w-1.5 h-[1px] bg-[#DEB764] shrink-0" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="font-mono text-xs tracking-[0.16em] uppercase text-[#A4A7AF]">
                Tools &amp; Infrastructure:{' '}
              </span>
              <span className="text-sm text-[#F5F5F2]">{study.tools.join(' · ')}</span>
            </div>

            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-[6px] bg-[#DEB764] text-[#090A0D] font-mono text-xs font-medium tracking-[0.14em] uppercase hover:bg-[#E7C67D] transition-colors whitespace-nowrap shrink-0"
            >
              Discuss Similar Campaigns
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
