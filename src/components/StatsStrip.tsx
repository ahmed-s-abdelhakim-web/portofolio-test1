import React, { useEffect, useRef, useState } from 'react';
import { PORTFOLIO_CONFIG } from '../config/portfolio';
import { parseStatDisplay } from '../utils/portfolio';

interface AnimatedStatValueProps {
  rawValue: string;
  shouldAnimate: boolean;
}

const AnimatedStatValue: React.FC<AnimatedStatValueProps> = ({ rawValue, shouldAnimate }) => {
  const parsed = parseStatDisplay(rawValue);
  const [displayNumber, setDisplayNumber] = useState<number>(parsed.numeric ?? 0);

  useEffect(() => {
    if (parsed.isTextOnly || parsed.numeric === null) {
      return;
    }

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!shouldAnimate || prefersReducedMotion) {
      setDisplayNumber(parsed.numeric);
      return;
    }

    const target = parsed.numeric;
    const durationMs = 700;
    const startTime = performance.now();
    let frameId = 0;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / durationMs);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayNumber(Math.max(1, Math.round(eased * target)));
      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [parsed.isTextOnly, parsed.numeric, shouldAnimate]);

  if (parsed.isTextOnly) {
    return <span>{parsed.suffix}</span>;
  }

  return (
    <span className="tabular-nums">
      {shouldAnimate ? displayNumber : parsed.numeric}
      {parsed.suffix}
    </span>
  );
};

export const StatsStrip: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node || hasEntered) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasEntered]);

  return (
    <section
      id="stats"
      aria-label="Verified career statistics"
      ref={containerRef}
      className="bg-[#0B0D12]/90 border-b border-white/[0.07]"
    >
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-white/[0.08]">
          {PORTFOLIO_CONFIG.stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`group py-8 sm:py-10 ${
                index === 0
                  ? 'pr-4 sm:pr-6 lg:pl-0 lg:pr-8'
                  : index === 3
                    ? 'pl-4 sm:pl-6 lg:pl-8 lg:pr-0'
                    : 'px-4 sm:px-6 lg:px-8'
              }`}
            >
              <div className="font-display font-normal text-4xl sm:text-[2.85rem] leading-none text-[#F5F5F2] group-hover:text-[#DEB764] transition-colors duration-300 tracking-tight tabular-nums">
                <AnimatedStatValue rawValue={stat.value} shouldAnimate={hasEntered} />
              </div>
              <div className="mt-3 font-mono text-[11px] tracking-[0.16em] uppercase text-[#DEB764]">
                {stat.label}
              </div>
              <p className="mt-1 text-xs text-[#A4A7AF]/90">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
