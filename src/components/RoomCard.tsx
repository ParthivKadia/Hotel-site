import { maisons } from '../data/rooms';
import type { Room } from '../data/rooms';

interface RoomCardProps {
  room: Room;
  nights: number;
  onBook: (room: Room) => void;
}

export default function RoomCard({ room, nights, onBook }: RoomCardProps) {
  const maison = maisons.find((m) => m.id === room.maisonId);
  const total = room.pricePerNight * nights;

  return (
    <article className="grid grid-cols-1 gap-0 border-b border-charcoal/10 py-8 sm:grid-cols-[280px_1fr] sm:gap-8 sm:items-start lg:grid-cols-[300px_1fr_auto]">
      
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden bg-charcoal/10 sm:aspect-[4/3]">
        <img
          src={room.image}
          alt={room.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Details */}
      <div className="mt-5 sm:mt-0">
        <p className="font-body text-[11px] tracking-[0.2em] text-gold uppercase">
          {maison?.name} — {maison?.place}
        </p>
        <h3 className="mt-1 font-display text-2xl text-charcoal">{room.name}</h3>
        <p className="mt-2 max-w-xl font-body text-sm leading-relaxed text-charcoal/70">
          {room.description}
        </p>
        <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 font-body text-xs text-charcoal/55">
          <li>{room.bed}</li>
          <li>{room.sizeSqm} m²</li>
          <li>Up to {room.maxGuests} guests</li>
        </ul>
        <ul className="mt-3 flex flex-wrap gap-2">
          {room.perks.map((perk) => (
            <li
              key={perk}
              className="border border-charcoal/15 px-3 py-1 font-body text-[11px] tracking-[0.04em] text-charcoal/65"
            >
              {perk}
            </li>
          ))}
        </ul>
      </div>

      {/* Price + Book */}
      <div className="mt-5 flex flex-row items-center justify-between gap-4 sm:mt-0 sm:col-span-2 sm:flex-col sm:items-end sm:justify-start lg:col-span-1">
        <div className="text-right">
          <p className="font-display text-2xl text-charcoal">₹{room.pricePerNight.toLocaleString('en-IN')}</p>
          <p className="font-body text-xs text-charcoal/55">
            per night · ₹{total.toLocaleString('en-IN')} for {nights} {nights === 1 ? 'night' : 'nights'}
          </p>
        </div>
        <button
          type="button"
          onClick={() => onBook(room)}
          className="whitespace-nowrap border border-charcoal px-6 py-2.5 font-body text-[13px] tracking-[0.08em] text-charcoal uppercase transition-colors hover:bg-charcoal hover:text-ivory focus-ring"
        >
          Book this room
        </button>
      </div>

    </article>
  );
}