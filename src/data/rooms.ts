export interface Maison {
  id: string;
  name: string;
  place: string;
}

export const maisons: Maison[] = [
  { id: 'rambagh', name: 'Rambagh Royal Palace', place: 'Jaipur' },
  { id: 'citylake', name: 'City Palace Lakeview Haveli', place: 'Udaipur' },
  { id: 'mehrangarh', name: 'Mehrangarh Heritage Retreat', place: 'Jodhpur' },
  { id: 'thar', name: 'Thar Desert Dune Estate', place: 'Jaisalmer' },
  { id: 'shekhawati', name: 'Shekhawati Fresco Haveli', place: 'Shekhawati' },
  { id: 'pushkar', name: 'Pushkar Heritage Sanctuary', place: 'Pushkar' },
  { id: 'bundi', name: 'Bundi Stepwell Residency', place: 'Bundi' },
  { id: 'kumbhalgarh', name: 'Kumbhalgarh Fort Estate', place: 'Kumbhalgarh' },
];

export interface Room {
  id: string;
  maisonId: string;
  name: string;
  description: string;
  maxGuests: number;
  bed: string;
  sizeSqm: number;
  pricePerNight: number;
  image: string;
  perks: string[];
}

export const rooms: Room[] = [
  {
    id: 'rambagh-maharaja-suite',
    maisonId: 'rambagh',
    name: 'Maharaja Suite',
    description: 'A canopied four-poster bed, hand-painted frescoes, and a private sit-out draped in silk — the palace at its most intimate.',
    maxGuests: 2,
    bed: '1 king bed',
    sizeSqm: 62,
    pricePerNight: 18500,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=640&h=480&fit=crop',
    perks: ['Private courtyard', 'Butler service', 'Breakfast included'],
  },
  {
    id: 'rambagh-garden-room',
    maisonId: 'rambagh',
    name: 'Mughal Garden Room',
    description: 'Overlooking manicured Mughal gardens, this heritage room blends carved sandstone arches with handwoven textiles and modern comforts.',
    maxGuests: 2,
    bed: '1 queen bed',
    sizeSqm: 38,
    pricePerNight: 11200,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=640&h=480&fit=crop',
    perks: ['Garden view', 'Breakfast included', 'Evening turndown'],
  },
  {
    id: 'citylake-lake-suite',
    maisonId: 'citylake',
    name: 'Pichola Lake Suite',
    description: 'Wake to still water and the outline of the Aravalli hills. A private terrace, morning chai, and the quietest corner of the haveli.',
    maxGuests: 2,
    bed: '1 king bed',
    sizeSqm: 54,
    pricePerNight: 21000,
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=640&h=480&fit=crop',
    perks: ['Lake-facing terrace', 'Boat excursion', 'Breakfast included'],
  },
  {
    id: 'citylake-jharokha-room',
    maisonId: 'citylake',
    name: 'Jharokha Heritage Room',
    description: 'Carved jharokha windows frame panoramic lake views. Rich silks, antique brass fittings, and a deep soaking tub complete the experience.',
    maxGuests: 3,
    bed: '1 king bed + day bed',
    sizeSqm: 44,
    pricePerNight: 14500,
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=640&h=480&fit=crop',
    perks: ['Jharokha windows', 'Soaking tub', 'Breakfast included'],
  },
  {
    id: 'mehrangarh-fort-view',
    maisonId: 'mehrangarh',
    name: 'Fort View Chamber',
    description: 'A blue-walled room with unobstructed views of Mehrangarh Fort. Indigo textiles, brass oil lamps, and a carved sandstone balcony.',
    maxGuests: 2,
    bed: '1 super-king bed',
    sizeSqm: 36,
    pricePerNight: 9800,
    image: 'https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=640&h=480&fit=crop',
    perks: ['Fort views', 'Rooftop access', 'Breakfast included'],
  },
  {
    id: 'thar-dune-tent',
    maisonId: 'thar',
    name: 'Royal Desert Pavilion',
    description: 'A luxuriously appointed tented pavilion on the edge of the golden dunes — starlit skies, silk drapes, and the silence of the Thar.',
    maxGuests: 2,
    bed: '1 king bed',
    sizeSqm: 40,
    pricePerNight: 16000,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=640&h=480&fit=crop',
    perks: ['Dune safari', 'Star gazing deck', 'All meals included'],
  },
  {
    id: 'pushkar-sanctuary-room',
    maisonId: 'pushkar',
    name: 'Lakeside Sanctuary Room',
    description: 'A serene whitewashed room overlooking Pushkar Lake, with hand-block-printed linens, terracotta floors, and a private garden sit-out.',
    maxGuests: 2,
    bed: '1 queen bed',
    sizeSqm: 30,
    pricePerNight: 7500,
    image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?w=640&h=480&fit=crop',
    perks: ['Lake views', 'Yoga terrace', 'Breakfast included'],
  },
  {
    id: 'kumbhalgarh-fort-suite',
    maisonId: 'kumbhalgarh',
    name: 'Aravalli Suite',
    description: 'Dramatic Aravalli hill views from a stone-walled suite beside the Great Wall of India. Raw heritage meets considered luxury.',
    maxGuests: 4,
    bed: '1 king bed + sofa bed',
    sizeSqm: 58,
    pricePerNight: 13500,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=640&h=480&fit=crop',
    perks: ['Hill views', 'Private plunge pool', 'Breakfast included'],
  },
  
];