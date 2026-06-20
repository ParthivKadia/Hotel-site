const experiences = [
  {
    eyebrow: 'Royal Experiences',
    title: 'Heritage & Adventure',
    copy: 'Spa rituals, heritage walks, elephant polo, and sunset boat rides — curated for every kind of royal guest.',
    cta: 'Explore Experiences',
    image: '/img3.jpg',
  },
  {
    eyebrow: 'Private Dining',
    title: 'Tables Fit for Royalty',
    copy: 'Royal banquets, chef\'s table evenings, and rooftop dinners under Rajasthan\'s open sky.',
    cta: 'Reserve a Table',
    image: '/img2.jpg',
  },
  {
    eyebrow: 'Celebrations',
    title: 'Weddings & Private Events',
    copy: 'Mark your most cherished moments — weddings, anniversaries, and private gatherings — against breathtaking palace backdrops.',
    cta: 'Plan Your Event',
    image: '/img4.jpg',
  },
  {
    eyebrow: 'Journal',
    title: 'Stories from the Palace',
    copy: 'Travel stories, heritage chronicles, and intimate portraits of Rajasthan\'s living culture.',
    cta: 'Read the Journal',
    image: '/img5.jpg',
  },
];

export default function Explore() {
  return (
    <section id="explore" className="bg-ivory-deep py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">

        {/* Header */}
        <div className="max-w-xl">
          <p className="font-body text-[11px] tracking-[0.3em] text-gold uppercase">
            Everything at Raj Mahal
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-charcoal sm:text-4xl">
            Life within the palace walls
          </h2>
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {experiences.map((item) => (
            <a key={item.eyebrow} href="#" className="group block">

              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden bg-charcoal/10">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Text */}
              <div className="mt-4">
                <p className="font-body text-[10px] tracking-[0.3em] text-gold uppercase">
                  {item.eyebrow}
                </p>
                <h3 className="mt-1 font-display text-lg text-charcoal">
                  {item.title}
                </h3>
                <p className="mt-2 font-body text-[13px] leading-relaxed text-charcoal/60 line-clamp-3">
                  {item.copy}
                </p>
                <span className="mt-3 inline-block font-body text-[13px] text-charcoal/70 underline decoration-charcoal/30 underline-offset-4 group-hover:text-gold group-hover:decoration-gold transition-colors duration-200">
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