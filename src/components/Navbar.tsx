import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? 'bg-amber-50/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(92,64,51,0.15)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12 md:py-7">

        {/* BRAND — force amber-100 when menu open so it shows over stone-900 overlay */}
        <Link
          to="/"
          className={`font-serif text-xl tracking-[0.25em] uppercase transition-colors relative z-50 ${
            menuOpen
              ? 'text-amber-100'
              : solid
              ? 'text-stone-800'
              : 'text-amber-50'
          }`}
        >
          Raj Mahal
        </Link>

        {/* DESKTOP LINKS */}
        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={`/${link.href}`}
                className={`font-serif text-[13px] tracking-[0.12em] uppercase transition-colors hover:text-amber-700 ${
                  solid ? 'text-stone-800' : 'text-amber-50'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* BOOK BUTTON */}
        <div className="hidden md:block">
          <Link
            to="/booking"
            className={`border px-6 py-2.5 font-serif text-[13px] tracking-[0.15em] uppercase transition-all ${
              solid
                ? 'border-stone-700 text-stone-800 hover:bg-stone-800 hover:text-amber-50'
                : 'border-amber-50 text-amber-50 hover:bg-amber-50 hover:text-stone-800'
            }`}
          >
            Reserve
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className={`relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden ${
            menuOpen ? 'text-amber-100' : solid ? 'text-stone-800' : 'text-amber-50'
          }`}
        >
          <span
            className={`block h-px w-6 bg-current transition-transform duration-300 ${
              menuOpen ? 'translate-y-[4px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-px w-6 bg-current transition-opacity duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-px w-6 bg-current transition-transform duration-300 ${
              menuOpen ? '-translate-y-[4px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* MOBILE MENU — rich warm dark bg with amber tint */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-[#1a1208] px-8 pt-24 pb-1 transition-all duration-300 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* top amber accent line */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-amber-700 opacity-60" />

        {/* decorative divider */}
        <div className="mb-8 h-px w-8 bg-amber-800" />

        <ul className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={`/${link.href}`}
                onClick={() => setMenuOpen(false)}
                className="font-serif text-3xl tracking-[0.08em] uppercase text-amber-100 hover:text-amber-400 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* subtle separator */}
        <div className="mt-10 mb-0 h-px w-full bg-amber-900/40" />

        <Link
          to="/booking"
          onClick={() => setMenuOpen(false)}
          className="mt-8 inline-block w-fit border border-amber-600 px-8 py-3 font-serif text-sm tracking-[0.15em] uppercase text-amber-100 bg-amber-900/30 hover:bg-amber-700 hover:text-stone-900 transition-all"
        >
          Reserve a Stay
        </Link>
      </div>
    </header>
  );
}