import React from 'react';

const items = [
  'Event Photography',
  'Portrait',
  'Automotive',
  'Brand Content',
  'Sessions ab CHF 250.–',
];

const TrustBar: React.FC = () => {
  return (
    <section className="relative border-y border-white/10 bg-[#050505]">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        {/* Desktop */}
        <div className="hidden md:grid grid-cols-5 divide-x divide-white/10">
          {items.map((t) => (
            <div key={t} className="py-7 lg:py-8 text-center">
              <span className="label-caps !text-[#F5F2ED]/80">{t}</span>
            </div>
          ))}
        </div>
        {/* Mobile marquee */}
        <div className="md:hidden overflow-hidden py-6">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[...items, ...items].map((t, i) => (
              <span key={i} className="label-caps !text-[#F5F2ED]/80">
                {t} <span className="ml-12 text-[#A58B68]">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
