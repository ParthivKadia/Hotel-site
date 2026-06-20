import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <footer id="footer" className="bg-charcoal text-ivory">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.2fr_1fr_1fr_1.4fr]">

          {/* Brand */}
          <div>
            <p className="font-display text-xl tracking-[0.15em] uppercase">Raj Mahal</p>
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-ivory/65">
              Eight royal palaces across Rajasthan. One timeless art of living like a Maharaja.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="font-body text-[11px] tracking-[0.15em] text-gold-light uppercase hover:text-ivory">Instagram</a>
              <a href="#" className="font-body text-[11px] tracking-[0.15em] text-gold-light uppercase hover:text-ivory">Facebook</a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <p className="font-body text-[11px] tracking-[0.2em] text-gold-light uppercase">
              Explore
            </p>
            <ul className="mt-4 space-y-3 font-body text-sm text-ivory/75">
              <li><a href="#experiences" className="hover:text-ivory focus-ring">Royal Experiences</a></li>
              <li><a href="#rooms" className="hover:text-ivory focus-ring">Rooms & Suites</a></li>
              <li><a href="#destination" className="hover:text-ivory focus-ring">Our Destinations</a></li>
              <li><a href="#explore" className="hover:text-ivory focus-ring">Explore</a></li>
              {/* <li><a href="#highlights" className="hover:text-ivory focus-ring">Journal</a></li> */}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-body text-[11px] tracking-[0.2em] text-gold-light uppercase">
              Company
            </p>
            <ul className="mt-4 space-y-3 font-body text-sm text-ivory/75">
              <li><a href="#" className="hover:text-ivory focus-ring">About Raj Mahal</a></li>
              <li><a href="#" className="hover:text-ivory focus-ring">Careers</a></li>
              <li><a href="#" className="hover:text-ivory focus-ring">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-ivory focus-ring">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-ivory focus-ring">Cookie Settings</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p className="font-body text-[11px] tracking-[0.2em] text-gold-light uppercase">
              Royal Dispatches
            </p>
            <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-ivory/65">
              Seasonal stories, new palace openings, and curated experiences from across Rajasthan — once a month, no more.
            </p>
            {submitted ? (
              <p className="mt-4 font-body text-sm text-gold-light">
                Shukriya — you're on the royal list.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4 flex max-w-sm border-b border-ivory/40">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full bg-transparent py-2 font-body text-sm text-ivory placeholder:text-ivory/40 focus-ring"
                />
                <button
                  type="submit"
                  className="shrink-0 font-body text-[12px] tracking-[0.1em] text-gold-light uppercase hover:text-ivory focus-ring"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-ivory/15 pt-8 font-body text-xs text-ivory/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Raj Mahal. Eight Palaces. One Royal Legacy.</p>
          <p>Crafted for wanderers. Built for royalty.</p>
        </div>
      </div>
    </footer>
  );
}