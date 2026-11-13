import React from 'react';
import {
  Droplets,
  Hammer,
  Home,
  Layers,
  MapPin,
  Trees,
  Wind,
  Wrench,
} from 'lucide-react';
import { PORTFOLIO_CONFIG, type IndustryItem } from '../config/portfolio';
import { Reveal } from './Reveal';

const IndustryIcon: React.FC<{ iconKey: IndustryItem['iconKey'] }> = ({ iconKey }) => {
  const props = { className: 'w-5 h-5 text-[#DEB764]', 'aria-hidden': true as const };
  switch (iconKey) {
    case 'home':
      return <Home {...props} />;
    case 'droplets':
      return <Droplets {...props} />;
    case 'wind':
      return <Wind {...props} />;
    case 'hammer':
      return <Hammer {...props} />;
    case 'trees':
      return <Trees {...props} />;
    case 'layers':
      return <Layers {...props} />;
    case 'wrench':
      return <Wrench {...props} />;
    case 'mapPin':
      return <MapPin {...props} />;
  }
};

export const IndustriesSection: React.FC = () => {
  const { industries } = PORTFOLIO_CONFIG;

  return (
    <section
      id="industries"
      className="py-24 lg:py-32 bg-[#0B0D12] border-b border-white/[0.07]"
    >
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.24em] text-[#DEB764]">
            <span aria-hidden="true" className="w-6 h-[1px] bg-[#DEB764]" />
            <span>{industries.kicker}</span>
          </div>

          <h2 className="mt-4 font-display font-normal text-3xl sm:text-4xl lg:text-[3.1rem] leading-[1.08] tracking-[-0.02em] text-[#F5F5F2] [text-wrap:balance]">
            {industries.headingPrefix}{' '}
            <span className="italic text-[#DEB764]">{industries.headingAccent}</span>
          </h2>

          <p className="mt-4 text-[#A4A7AF] max-w-2xl text-[15.5px] leading-[1.7]">
            {industries.subtitle}
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.items.map((industry, idx) => (
            <Reveal key={industry.id} delayMs={idx * 40}>
              <article className="editorial-card h-full group rounded-xl bg-[#0E1117]/95 border border-white/[0.07] p-6 sm:p-7 flex flex-col justify-between hover:border-[#DEB764]/40 hover:-translate-y-0.5">
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#161A22] border border-white/[0.08] flex items-center justify-center group-hover:border-[#DEB764]/40 transition-colors">
                      <IndustryIcon iconKey={industry.iconKey} />
                    </div>
                    <span className="font-mono text-xs text-[#A4A7AF]/65 tabular-nums">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="mt-5 text-[17px] font-semibold text-[#F5F5F2] group-hover:text-[#DEB764] transition-colors">
                    {industry.name}
                  </h3>

                  <div className="mt-1.5 font-mono text-[11px] tracking-[0.12em] uppercase text-[#DEB764]">
                    {industry.focus}
                  </div>

                  <p className="mt-3 text-sm leading-[1.68] text-[#A4A7AF]">
                    {industry.description}
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
