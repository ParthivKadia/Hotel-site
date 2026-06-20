# Maison Verrière

A responsive, original luxury-hotel-collection landing page built with **React + Vite + TypeScript + Tailwind CSS v4**.

> This is an original design inspired by the general layout conventions of luxury hospitality websites (full-bleed hero, highlights carousel, destination grid, lifestyle mosaic, gift-card CTA). The brand name, copy, and "destinations" are entirely fictional, and all images are placeholders from picsum.photos. Swap them out for your own brand, copy, and photography before using this commercially.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Scripts

| Command           | Description                          |
| ------------------ | ------------------------------------ |
| `npm run dev`       | Start the dev server with HMR        |
| `npm run build`     | Type-check and build for production  |
| `npm run preview`   | Preview the production build locally |
| `npm run lint`      | Run ESLint                           |

## Project structure

```
src/
  components/
    Navbar.tsx        Sticky nav, transparent-over-hero, mobile slide-in menu
    Hero.tsx           Full-bleed hero with headline + CTA
    Intro.tsx           Centered philosophy statement
    BranchDivider.tsx   Signature decorative SVG section divider
    Highlights.tsx       Horizontally scrolling "journal" carousel
    Destinations.tsx     Responsive masonry-style grid of Maisons
    Lifestyle.tsx         Mixed-size dining/lifestyle mosaic
    GiftBanner.tsx         Gift card promotional banner
    Footer.tsx               Link columns + newsletter signup form
  data/
    content.ts          All copy and image references, centralized
  App.tsx
  index.css             Tailwind import + design tokens (@theme)
```

## Customizing

- **Brand name & copy** — edit `src/data/content.ts` and the literal strings in
  `Navbar.tsx`, `Hero.tsx`, `Intro.tsx`, `GiftBanner.tsx`, and `Footer.tsx`.
- **Colors & type** — edit the `@theme` block at the top of `src/index.css`.
- **Images** — replace the `picsum.photos` URLs in `src/data/content.ts` and
  `Hero.tsx`/`GiftBanner.tsx` with your own photography (drop files in `src/assets`
  or `public/` and import/reference them).

## Responsive behavior

- Mobile-first layout throughout; the nav collapses into a full-screen slide-in
  menu under the `md` breakpoint (768px).
- The destinations and lifestyle grids reflow from a single column on mobile to
  multi-column mosaics on tablet/desktop.
- The highlights section becomes a swipeable horizontal carousel on touch
  devices, with arrow controls appearing on larger screens.
- Respects `prefers-reduced-motion`.

## Tech

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4 (CSS-first config via `@theme`, no `tailwind.config.js` needed)
- Google Fonts: Fraunces (display) + Inter (body)
