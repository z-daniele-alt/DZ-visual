import React from 'react';
import { galleryItems } from '@/data/portfolio';

const Gallery: React.FC = () => {
  return (
    <section className="relative pt-28 pb-20 lg:pt-40 lg:pb-28 bg-[#050505]">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between gap-6 mb-10 lg:mb-14 reveal">
          <div>
            <p className="label-caps mb-6">Eindrücke</p>
            <h2 className="font-serif-display text-[32px] sm:text-[44px] lg:text-[56px] text-[#F5F2ED] leading-[1.05]">
              Ein erster Blick<span className="italic text-[#E7DDD0]">.</span>
            </h2>
          </div>
        </div>

        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 lg:gap-4 [column-fill:_balance]">
          {galleryItems.map((item, i) => (
            <div
              key={item.id}
              className="relative img-hover group mb-3 lg:mb-4 break-inside-avoid overflow-hidden reveal"
              style={{ transitionDelay: `${(i % 4) * 80}ms` }}
            >
              <img
                src={item.srcMd}
                srcSet={`${item.srcSm} 640w, ${item.srcMd} 1200w, ${item.src} 2000w`}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                alt={item.alt}
                loading="lazy"
                style={item.focalY != null ? { objectPosition: `50% ${item.focalY}%` } : undefined}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-x-0 bottom-0 p-3 lg:p-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-700">
                <p className="label-caps !text-[#A58B68] !text-[9px] mb-1">{item.category}</p>
                <h3 className="font-serif-display text-[15px] lg:text-[18px] text-[#F5F2ED] italic leading-tight truncate">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
