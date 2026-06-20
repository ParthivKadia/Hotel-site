import { Link } from 'react-router-dom';
import { destinations } from '../data/content';

const maisonIdByDestinationId: Record<string, string> = {
  d1: 'verriere',
  d2: 'lucente',
  d3: 'birchwood',
  d4: 'aurelia',
  d5: 'solenne',
  d6: 'cedres',
  d7: 'sandpiper',
  d8: 'casadelsol',
};

export default function Destinations() {
  return (
    <section id="destinations" className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
      <div className="max-w-xl">
        <p className="font-body text-[11px] tracking-[0.3em] text-gold uppercase">Eight Maisons</p>
        <h2 className="mt-4 font-display text-3xl leading-tight text-charcoal sm:text-4xl">
          Our destinations
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {destinations.map((d) => (
          <Link
            key={d.id}
            to={`/booking?maison=${maisonIdByDestinationId[d.id] ?? 'any'}`}
            className={`group block focus-ring ${d.size === 'lg' ? 'sm:col-span-2' : 'sm:col-span-1'}`}
          >
            <div
              className={`overflow-hidden bg-charcoal/10 ${
                d.size === 'lg' ? 'aspect-[5/4]' : 'aspect-[4/3]'
              }`}
            >
              <img
                src={d.image}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <p className="mt-4 font-body text-[11px] tracking-[0.25em] text-gold uppercase">
              {d.place}
            </p>
            <h3 className="mt-1 font-display text-xl text-charcoal sm:text-2xl">{d.name}</h3>
            <p className="mt-2 max-w-md font-body text-sm leading-relaxed text-charcoal/70">
              {d.copy}
            </p>
            <span className="mt-3 inline-block border-b border-charcoal/40 font-body text-[13px] tracking-[0.05em] text-charcoal transition-colors group-hover:border-gold group-hover:text-gold">
              {d.cta}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
