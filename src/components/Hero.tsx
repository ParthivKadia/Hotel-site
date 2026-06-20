export default function Hero() {
  return (
    <section id="top" className="relative flex h-[100svh] min-h-[560px] w-full items-end overflow-hidden bg-charcoal">
      {/* <img
        src="https://picsum.photos/seed/maison-hero/1920/1280"
        alt="A glasshouse estate at golden hour, surrounded by lavender fields"
        className="absolute inset-0 h-full w-full object-cover"
      /> */}
<video
  src="/HeroVideo.mov"
  className="absolute inset-0 h-full w-full object-cover"
  autoPlay
  muted
  loop
  playsInline
/>      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-charcoal/40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 md:px-10 md:pb-24">
        <p className="font-body text-[11px] tracking-[0.3em] text-gold-light uppercase md:text-xs">
          WELCOME TO RAJ MAHAL
        </p>
        <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.1] text-ivory sm:text-5xl md:text-6xl lg:text-7xl">
A Journey Through
Royal Elegance        </h1>
        <a
          href="#experiences"
          className="mt-8 inline-flex items-center gap-3 border border-ivory/70 px-6 py-3 font-body text-[13px] tracking-[0.08em] text-ivory uppercase transition-colors hover:bg-ivory hover:text-charcoal focus-ring"
        >
          Explore
        </a>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-ivory/80 md:flex">
        <span className="font-body text-[11px] tracking-[0.25em] uppercase">Scroll</span>
        <span className="h-10 w-px animate-pulse bg-ivory/60" />
      </div>
    </section>
  );
}
