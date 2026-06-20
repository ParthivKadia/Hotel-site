export interface RoomItem {
  id: string;
  eyebrow: string;
  title: string;
  copy: string;
  cta: string;
  image: string;
}


export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Royal Experiences', href: '#experiences' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Our Destinations', href: '#destinations' },
  
  { label: 'Explore', href: '#explore' },
  // { label: 'Journal', href: '#highlights' },
];

export interface Highlight {
  id: string;
  eyebrow: string;
  title: string;
  copy: string;
  cta: string;
  image: string;
}

export const highlights: Highlight[] = [
  {
    id: 'h2',
    eyebrow: 'HERITAGE SUITES',
    title: 'Luxury with Royal Elegance',
    copy: 'Every suite combines timeless architecture, handcrafted décor, and modern comforts to create an unforgettable royal escape.',
    cta: 'View Rooms →',
    image: '/Hotel2.jpg',
  },
  {
    id: 'h1',
    eyebrow: 'ROYAL RETREAT',
    title: 'Stay Like Maharajas',
    copy: 'Experience regal suites, handcrafted interiors, peaceful courtyards, and hospitality inspired by centuries of royal tradition.',
    cta: 'Explore Suites →',
    image: '/Hotel1.jpg',
  },
  {
    id: 'h3',
    eyebrow: 'ROYAL DINING',
    title: 'Flavours of the Royal Kitchens',
    copy: 'Enjoy authentic Indian cuisine, regional delicacies, and curated dining experiences served in elegant palace-inspired settings.',
    cta: 'Discover Dining →',
    image: '/Hotel3.jpg',
  },
  {
    id: 'h4',
    eyebrow: 'CELEBRATIONS',
    title: 'Weddings & Grand Events',
    copy: 'Celebrate weddings, receptions, cultural gatherings, and private occasions amidst breathtaking royal architecture.',
    cta: 'DiscoverPlan Your Event →',
    image: '/Hotel4.jpg',
  },
];

export interface Destination {
  id: string;
  name: string;
  place: string;
  copy: string;
  cta: string;
  image: string;
  size: 'lg' | 'md';
}

export const destinations: Destination[] = [
  {
    id: 'd1',
    name: 'Rambagh Royal Palace Estate',
    place: 'Jaipur',
    copy:
      'A restored royal palace in the Pink City, surrounded by Mughal gardens, marble courtyards, and heritage suites once reserved for Maharajas.',
    cta: 'Go to Jaipur',
    image: '/img1.jpg',
    size: 'lg',
  },
  {
    id: 'd2',
    name: 'City Palace Lakeview Haveli',
    place: 'Udaipur',
    copy:
      'A regal lakeside haveli overlooking Lake Pichola, where carved balconies, mirrored halls, and Aravalli views define timeless Rajput luxury.',
    cta: 'Go to Udaipur',
    image: '/img2.jpg',
    size: 'lg',
  },
  {
    id: 'd3',
    name: 'Mehrangarh Heritage Retreat',
    place: 'Jodhpur',
    copy:
      'A royal-style retreat set beneath Mehrangarh Fort, surrounded by blue-washed streets, sandstone havelis, and desert heritage charm.',
    cta: 'Go to Jodhpur',
    image: '/img3.jpg',
    size: 'md',
  },
  {
    id: 'd4',
    name: 'Thar Desert Dune Estate',
    place: 'Jaisalmer',
    copy:
      'A golden sandstone desert estate on the edge of the Thar, offering dune safaris, starlit skies, and regal tented luxury.',
    cta: 'Go to Jaisalmer',
    image: '/img4.jpg',
    size: 'md',
  },
  {
    id: 'd5',
    name: 'Shekhawati Fresco Haveli',
    place: 'Shekhawati',
    copy:
      'A heritage haveli surrounded by the painted towns of Shekhawati, famous for intricate frescoes and merchant-era architecture.',
    cta: 'Go to Shekhawati',
    image: '/img5.jpg',
    size: 'md',
  },
  {
    id: 'd6',
    name: 'Pushkar Heritage Sanctuary',
    place: 'Pushkar',
    copy:
      'A serene lakeside retreat near the sacred Pushkar Lake, blending spiritual calm, desert hills, and Rajasthani culture.',
    cta: 'Go to Pushkar',
    image: '/img6.jpg',
    size: 'md',
  },
  {
    id: 'd7',
    name: 'Bundi Stepwell Residency',
    place: 'Bundi',
    copy:
      'A hidden royal town residence surrounded by ancient stepwells, blue palaces, and hilltop forts of Rajasthan’s past.',
    cta: 'Go to Bundi',
    image: '/img7.jpg',
    size: 'md',
  },
  {
    id: 'd8',
    name: 'Kumbhalgarh Fort Estate',
    place: 'Kumbhalgarh',
    copy:
      'A fortress-side estate near the Great Wall of India, offering dramatic Aravalli views and untouched Rajput heritage.',
    cta: 'Go to Kumbhalgarh',
    image: '/img8.jpg',
    size: 'md',
  },
];

export interface RoomItem {
  id: string;
  eyebrow: string;
  title: string;
  copy: string;
  cta: string;
  image: string;
  pricePerNight: number;
  bed: string;
  sizeSqm: number;
  maxGuests: number;
}

export const roomItems: RoomItem[] = [
  {
    id: 'r1',
    eyebrow: 'Heritage Suites',
    title: 'Luxury with Royal Elegance',
    copy: 'A canopied four-poster bed, hand-painted frescoes, and a private sit-out draped in silk — this suite is the palace at its most intimate.',
    cta: 'View Rooms',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=800&fit=crop',
    pricePerNight: 18500,
    bed: '1 King Bed',
    sizeSqm: 62,
    maxGuests: 2,
  },
  {
    id: 'r2',
    eyebrow: 'Royal Retreat',
    title: 'Stay Like Maharajas',
    copy: 'High ceilings, arched corridors, and a deep soaking tub overlooking the inner courtyard — every detail is arranged for unhurried rest.',
    cta: 'Explore Suites',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&h=800&fit=crop',
    pricePerNight: 14500,
    bed: '1 King Bed + Day Bed',
    sizeSqm: 48,
    maxGuests: 3,
  },
  {
    id: 'r3',
    eyebrow: 'Lake View Room',
    title: 'The Pichola Chamber',
    copy: 'Wake to still water and the outline of the Aravalli hills. A private terrace, morning chai, and the quietest corner of the palace.',
    cta: 'Discover Room',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&h=800&fit=crop',
    pricePerNight: 21000,
    bed: '1 King Bed',
    sizeSqm: 54,
    maxGuests: 2,
  },
  {
    id: 'r4',
    eyebrow: 'Garden Suite',
    title: 'The Bougainvillea Suite',
    copy: 'Ground-floor doors open onto a walled garden of jasmine and bougainvillea. Cool stone floors, brass fittings, and complete seclusion.',
    cta: 'Reserve Now',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&h=800&fit=crop',
    pricePerNight: 11200,
    bed: '1 Queen Bed',
    sizeSqm: 38,
    maxGuests: 2,
  },
];