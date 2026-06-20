import { useRef } from 'react';
import { highlights } from '../data/content';

export default function Highlights() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('[data-card]') as HTMLElement | null;
    const amount = card ? card.offsetWidth + 24 : 320;
    track.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  return (
    <section id="experiences" className="bg-forest py-20 text-ivory md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="font-body text-[11px] tracking-[0.3em] text-gold-light uppercase">
              ROYAL EXPERIENCES
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
              Moments from The Raj Mahal
            </h2>
            <p className="mt-4 font-body text-sm text-ivory/75 md:text-base">
              Discover timeless stays, royal celebrations, heritage dining, and unforgettable experiences inspired by India's magnificent palaces and grand havelis.
            </p>
          </div>

          <div className="hidden gap-3 md:flex">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/40 transition-colors hover:bg-ivory hover:text-forest focus-ring"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/40 transition-colors hover:bg-ivory hover:text-forest focus-ring"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {highlights.map((item) => (
            <article
              key={item.id}
              data-card
              className="group w-[78vw] shrink-0 snap-start sm:w-[340px]"
            >
              <div className="aspect-[4/5] overflow-hidden bg-charcoal/30">
                <img
                  src={item.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="mt-5 font-body text-[11px] tracking-[0.25em] text-gold-light uppercase">
                {item.eyebrow}
              </p>
              <h3 className="mt-2 font-display text-xl">{item.title}</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-ivory/75">{item.copy}</p>
              <a
                href="#"
                className="mt-4 inline-block border-b border-gold-light font-body text-[13px] tracking-[0.05em] text-gold-light transition-colors hover:text-ivory focus-ring"
              >
                {item.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
