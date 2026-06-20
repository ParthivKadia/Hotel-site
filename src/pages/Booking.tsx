import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from '../components/SearchForm';
import RoomCard from '../components/RoomCard';
import BookingModal from '../components/BookingModal';
import BranchDivider from '../components/BranchDivider';
import { fetchAvailableRooms } from '../data/bookingApi';
import type { SearchParams } from '../data/bookingApi';
import type { Room } from '../data/rooms';

function todayISO(offsetDays = 0): string {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return d.toISOString().slice(0, 10);
}

function nightsBetween(checkIn: string, checkOut: string): number {
  const a = new Date(checkIn).getTime();
  const b = new Date(checkOut).getTime();
  const diff = Math.round((b - a) / (1000 * 60 * 60 * 24));
  return Number.isFinite(diff) && diff > 0 ? diff : 1;
}

export default function Booking() {
  const [searchParams] = useSearchParams();
  const initialMaison = searchParams.get('maison') ?? 'any';

  const [search, setSearch] = useState<SearchParams>({
    maisonId: initialMaison,
    checkIn: todayISO(7),
    checkOut: todayISO(10),
    guests: 2,
  });
  const [results, setResults] = useState<Room[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [bookingRoom, setBookingRoom] = useState<Room | null>(null);
  const [searched, setSearched] = useState(false);

  const nights = nightsBetween(search.checkIn, search.checkOut);

  const handleSearch = async () => {
    setLoading(true);
    setSearched(true);
    const rooms = await fetchAvailableRooms(search);
    setResults(rooms);
    setLoading(false);
  };

  return (
    <div className="bg-ivory">
<section className="relative flex min-h-[55vh] w-full items-end overflow-hidden bg-charcoal pt-24">       <img
  src="https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?w=1920&h=900&fit=crop"
  alt=""
  className="absolute inset-0 h-full w-full object-cover"
/>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-charcoal/30" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-14 md:px-10 md:pb-20">
          <p className="font-body text-[11px] tracking-[0.3em] text-gold-light uppercase">
            Reserve your stay
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl leading-[1.1] text-ivory sm:text-5xl">
            Find your room
          </h1>
        </div>
      </section>

<div className="mx-auto max-w-5xl px-5 md:px-10 relative z-10 -mt-16">
          <SearchForm value={search} onChange={setSearch} onSubmit={handleSearch} loading={loading} />
      </div>

      <section className="mx-auto max-w-5xl px-5 py-16 md:px-10 md:py-20">
        {!searched && (
          <p className="font-body text-sm text-charcoal/60">
            Choose your dates and a Maison, then check availability to see open rooms.
          </p>
        )}

        {loading && (
          <div className="flex flex-col items-center gap-3 py-16 text-center">
            <span className="h-8 w-8 animate-spin rounded-full border-2 border-charcoal/20 border-t-gold" />
            <p className="font-body text-sm text-charcoal/60">Checking availability…</p>
          </div>
        )}

        {!loading && searched && results && results.length === 0 && (
          <p className="font-body text-sm text-charcoal/60">
            No rooms match those dates right now — try a different Maison or guest count.
          </p>
        )}

        {!loading && results && results.length > 0 && (
          <>
            <p className="font-body text-sm text-charcoal/60">
              {results.length} {results.length === 1 ? 'room' : 'rooms'} available for {nights}{' '}
              {nights === 1 ? 'night' : 'nights'}
            </p>
            <div className="mt-4">
              {results.map((room) => (
                <RoomCard key={room.id} room={room} nights={nights} onBook={setBookingRoom} />
              ))}
            </div>
          </>
        )}
      </section>

      <BranchDivider className="mx-auto max-w-3xl px-6 pb-16" />

      {bookingRoom && (
        <BookingModal
          room={bookingRoom}
          search={search}
          nights={nights}
          onClose={() => setBookingRoom(null)}
        />
      )}
    </div>
  );
}
