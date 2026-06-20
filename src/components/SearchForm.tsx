import { maisons } from '../data/rooms';
import type { SearchParams } from '../data/bookingApi';

interface SearchFormProps {
  value: SearchParams;
  onChange: (value: SearchParams) => void;
  onSubmit: () => void;
  loading: boolean;
}

function todayISO(offsetDays = 0): string {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return d.toISOString().slice(0, 10);
}

export default function SearchForm({ value, onChange, onSubmit, loading }: SearchFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form
      onSubmit={handleSubmit}
className="grid grid-cols-1 gap-5 bg-white p-6 shadow-[0_16px_48px_rgba(33,30,27,0.18)] border border-charcoal/8 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_0.8fr_auto] lg:items-end lg:gap-4 lg:p-7"    >
      <div>
        <label htmlFor="maison" className="font-body text-[11px] tracking-[0.15em] text-charcoal/60 uppercase">
          Maison
        </label>
        <select
          id="maison"
          value={value.maisonId}
          onChange={(e) => onChange({ ...value, maisonId: e.target.value })}
          className="mt-2 w-full border-b border-charcoal/30 bg-transparent py-2 font-body text-sm text-charcoal focus-ring"
        >
          <option value="any">Any Maison</option>
          {maisons.map((m) => (
            <option key={m.id} value={m.id}>
              {m.name} — {m.place}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="checkIn" className="font-body text-[11px] tracking-[0.15em] text-charcoal/60 uppercase">
          Check-in
        </label>
        <input
          id="checkIn"
          type="date"
          required
          min={todayISO()}
          value={value.checkIn}
          onChange={(e) => onChange({ ...value, checkIn: e.target.value })}
          className="mt-2 w-full border-b border-charcoal/30 bg-transparent py-2 font-body text-sm text-charcoal focus-ring"
        />
      </div>

      <div>
        <label htmlFor="checkOut" className="font-body text-[11px] tracking-[0.15em] text-charcoal/60 uppercase">
          Check-out
        </label>
        <input
          id="checkOut"
          type="date"
          required
          min={value.checkIn || todayISO(1)}
          value={value.checkOut}
          onChange={(e) => onChange({ ...value, checkOut: e.target.value })}
          className="mt-2 w-full border-b border-charcoal/30 bg-transparent py-2 font-body text-sm text-charcoal focus-ring"
        />
      </div>

      <div>
        <label htmlFor="guests" className="font-body text-[11px] tracking-[0.15em] text-charcoal/60 uppercase">
          Guests
        </label>
        <select
          id="guests"
          value={value.guests}
          onChange={(e) => onChange({ ...value, guests: Number(e.target.value) })}
          className="mt-2 w-full border-b border-charcoal/30 bg-transparent py-2 font-body text-sm text-charcoal focus-ring"
        >
          {[1, 2, 3, 4].map((n) => (
            <option key={n} value={n}>
              {n} {n === 1 ? 'guest' : 'guests'}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-1 inline-flex h-fit items-center justify-center bg-charcoal px-7 py-3 font-body text-[13px] tracking-[0.08em] text-ivory uppercase transition-colors hover:bg-forest disabled:cursor-wait disabled:opacity-70 focus-ring sm:col-span-2 lg:col-span-1"
      >
        {loading ? 'Searching…' : 'Check availability'}
      </button>
    </form>
  );
}
