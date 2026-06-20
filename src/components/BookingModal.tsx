import { useEffect, useState } from 'react';
import { maisons } from '../data/rooms';
import type { Room } from '../data/rooms';
import { createBooking } from '../data/bookingApi';
import type { BookingConfirmation, BookingDetails, SearchParams } from '../data/bookingApi';

interface BookingModalProps {
  room: Room;
  search: SearchParams;
  nights: number;
  onClose: () => void;
}

const emptyGuest: BookingDetails = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  requests: '',
};

export default function BookingModal({ room, search, nights, onClose }: BookingModalProps) {
  const [guest, setGuest] = useState<BookingDetails>(emptyGuest);
  const [status, setStatus] = useState<'form' | 'loading' | 'confirmed'>('form');
  const [confirmation, setConfirmation] = useState<BookingConfirmation | null>(null);
  const maison = maisons.find((m) => m.id === room.maisonId);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const result = await createBooking(room, search, guest);
    setConfirmation(result);
    setStatus('confirmed');
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-charcoal/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Booking form"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="max-h-[92vh] w-full overflow-y-auto bg-ivory sm:max-w-lg">
        <div className="flex items-start justify-between border-b border-charcoal/10 px-6 py-5 sm:px-8">
          <div>
            <p className="font-body text-[11px] tracking-[0.2em] text-gold uppercase">
              {maison?.name}
            </p>
            <h3 className="mt-1 font-display text-xl text-charcoal">{room.name}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="font-body text-2xl leading-none text-charcoal/50 hover:text-charcoal focus-ring"
          >
            ×
          </button>
        </div>

        {status === 'confirmed' && confirmation ? (
          <div className="px-6 py-8 sm:px-8">
            <p className="font-body text-[11px] tracking-[0.2em] text-gold uppercase">
              Booking confirmed
            </p>
            <h4 className="mt-2 font-display text-2xl text-charcoal">
              See you soon, {confirmation.guest.firstName}
            </h4>
            <p className="mt-3 font-body text-sm leading-relaxed text-charcoal/70">
              A confirmation has been sent to {confirmation.guest.email}. This is a demo booking —
              no payment has been taken and no email has actually been sent.
            </p>

            <dl className="mt-6 space-y-3 border-t border-charcoal/10 pt-6 font-body text-sm">
              <Row label="Reference" value={confirmation.reference} />
              <Row label="Maison" value={`${maison?.name}, ${maison?.place}`} />
              <Row label="Room" value={room.name} />
              <Row label="Check-in" value={confirmation.search.checkIn} />
              <Row label="Check-out" value={confirmation.search.checkOut} />
              <Row label="Guests" value={String(confirmation.search.guests)} />
              <Row
                label="Total"
value={`₹${(confirmation.total).toLocaleString('en-IN')} for ${confirmation.nights} ${confirmation.nights === 1 ? 'night' : 'nights'}`}
              />
            </dl>

            <button
              type="button"
              onClick={onClose}
              className="mt-8 w-full border border-charcoal px-6 py-3 font-body text-[13px] tracking-[0.08em] text-charcoal uppercase transition-colors hover:bg-charcoal hover:text-ivory focus-ring"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 py-6 sm:px-8">
            <dl className="grid grid-cols-2 gap-3 border-b border-charcoal/10 pb-5 font-body text-xs text-charcoal/60">
              <Row label="Check-in" value={search.checkIn || '—'} />
              <Row label="Check-out" value={search.checkOut || '—'} />
              <Row label="Guests" value={String(search.guests)} />
<Row label="Total" value={`₹${(room.pricePerNight * nights).toLocaleString('en-IN')} (${nights} nt)`} />            </dl>

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="First name" id="firstName">
                <input
                  id="firstName"
                  required
                  value={guest.firstName}
                  onChange={(e) => setGuest({ ...guest, firstName: e.target.value })}
                  className="mt-2 w-full border-b border-charcoal/30 bg-transparent py-2 font-body text-sm text-charcoal focus-ring"
                />
              </Field>
              <Field label="Last name" id="lastName">
                <input
                  id="lastName"
                  required
                  value={guest.lastName}
                  onChange={(e) => setGuest({ ...guest, lastName: e.target.value })}
                  className="mt-2 w-full border-b border-charcoal/30 bg-transparent py-2 font-body text-sm text-charcoal focus-ring"
                />
              </Field>
              <Field label="Email" id="email">
                <input
                  id="email"
                  type="email"
                  required
                  value={guest.email}
                  onChange={(e) => setGuest({ ...guest, email: e.target.value })}
                  className="mt-2 w-full border-b border-charcoal/30 bg-transparent py-2 font-body text-sm text-charcoal focus-ring"
                />
              </Field>
              <Field label="Phone" id="phone">
                <input
                  id="phone"
                  type="tel"
                  required
                  value={guest.phone}
                  onChange={(e) => setGuest({ ...guest, phone: e.target.value })}
                  className="mt-2 w-full border-b border-charcoal/30 bg-transparent py-2 font-body text-sm text-charcoal focus-ring"
                />
              </Field>
              <Field label="Special requests (optional)" id="requests" full>
                <textarea
                  id="requests"
                  rows={3}
                  value={guest.requests}
                  onChange={(e) => setGuest({ ...guest, requests: e.target.value })}
                  className="mt-2 w-full resize-none border-b border-charcoal/30 bg-transparent py-2 font-body text-sm text-charcoal focus-ring"
                />
              </Field>
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="mt-7 w-full bg-charcoal px-6 py-3 font-body text-[13px] tracking-[0.08em] text-ivory uppercase transition-colors hover:bg-forest disabled:cursor-wait disabled:opacity-70 focus-ring"
            >
              {status === 'loading' ? 'Confirming…' : 'Confirm booking'}
            </button>
            <p className="mt-3 text-center font-body text-[11px] text-charcoal/45">
              Demo only — no payment is collected.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <dt className="text-charcoal/55">{label}</dt>
      <dd className="text-right font-medium text-charcoal">{value}</dd>
    </div>
  );
}

function Field({
  label,
  id,
  children,
  full,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <div className={full ? 'sm:col-span-2' : ''}>
      <label htmlFor={id} className="font-body text-[11px] tracking-[0.15em] text-charcoal/60 uppercase">
        {label}
      </label>
      {children}
    </div>
  );
}
