import BranchDivider from './BranchDivider';

export default function Intro() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
      <p className="font-body text-[11px] tracking-[0.3em] text-gold uppercase">Inspired by Royal India</p>
      <h2 className="mt-6 font-display text-[1.65rem] leading-snug text-charcoal sm:text-3xl md:text-[2.1rem]">
        Every detail at Raj Mahal reflects the elegance of India's royal past while embracing the comforts of contemporary luxury. From beautifully crafted interiors to personalized experiences, every stay is designed to leave lasting memories.
      </h2>
      <BranchDivider className="mx-auto mt-12 max-w-md" />
    </section>
  );
}
