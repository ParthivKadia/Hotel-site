import { useRef } from 'react';
import { roomItems } from '../data/content';

export default function Rooms() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === 'right' ? 380 : -380,
      behavior: 'smooth',
    });
  };

  return (
    <section id="rooms" className="bg-forest py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">

        {/* Header row */}
        <div className="flex items-start justify-between gap-8">
          <div className="max-w-xl">
            <p className="font-body text-[11px] tracking-[0.3em] text-gold uppercase">
              Royal Accommodations
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-white sm:text-5xl">
              Rooms & Suites
            </h2>
            <p className="mt-4 font-body text-sm text-white/60 leading-relaxed max-w-md">
              Each room is a living archive — restored with care, furnished with heritage pieces,
              and arranged for a stay that feels entirely unhurried.
            </p>
          </div>

          {/* Arrow buttons */}
          <div className="flex gap-3 mt-2 shrink-0">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center text-white hover:border-white transition-colors"
              aria-label="Scroll left"
            >
              ←
            </button>

            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center text-white hover:border-white transition-colors"
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
        </div>

        {/* Scrollable cards row */}
        <div
          ref={scrollRef}
className="mt-10 flex gap-5 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"        >
          {roomItems.map((item) => (
            <a
              key={item.id}
              href="#"
              className="group shrink-0 w-[340px] block focus-ring"
            >
              <div className="overflow-hidden h-[420px] bg-charcoal/20">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="mt-4">
                <p className="font-body text-[10px] tracking-[0.3em] text-gold uppercase">
                  {item.eyebrow}
                </p>

                <h3 className="mt-1 font-display text-xl text-white">
                  {item.title}
                </h3>

                <p className="mt-2 font-body text-[13px] text-white/60 leading-relaxed line-clamp-3">
                  {item.copy}
                </p>

                <span className="mt-3 inline-block font-body text-[13px] text-gold/80 underline decoration-gold/30 underline-offset-4 group-hover:text-gold group-hover:decoration-gold transition-colors duration-200">
                  {item.cta} →
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}