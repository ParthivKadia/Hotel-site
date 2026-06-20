import { rooms, type Room } from './rooms';

export interface SearchParams {
  maisonId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
}

export interface BookingDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  requests: string;
}

export interface BookingConfirmation {
  reference: string;
  room: Room;
  search: SearchParams;
  guest: BookingDetails;
  nights: number;
  total: number;
}

function delay<T>(value: T, ms = 700): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

function nightsBetween(checkIn: string, checkOut: string): number {
  const a = new Date(checkIn).getTime();
  const b = new Date(checkOut).getTime();
  const diff = Math.round((b - a) / (1000 * 60 * 60 * 24));
  return Number.isFinite(diff) && diff > 0 ? diff : 1;
}

/**
 * Mock "get available rooms" call. In a real app this would hit a booking
 * API. Here it filters the local mock inventory by Maison and guest count,
 * and deterministically "removes" one room per search to simulate
 * availability changing day to day.
 */
export async function fetchAvailableRooms(params: SearchParams): Promise<Room[]> {
  const pool = rooms.filter(
    (room) => (params.maisonId === 'any' || room.maisonId === params.maisonId) && room.maxGuests >= params.guests,
  );

  // Deterministic pseudo-availability based on the chosen date, so the same
  // search returns the same results without needing a real backend.
  const seed = params.checkIn ? new Date(params.checkIn).getDate() : 0;
  const available = pool.filter((_, i) => (i + seed) % 5 !== 0);

  return delay(available.length > 0 ? available : pool, 800);
}

/**
 * Mock "create booking" call. Simulates a short processing delay and
 * returns a confirmation with a generated reference number.
 */
export async function createBooking(
  room: Room,
  search: SearchParams,
  guest: BookingDetails,
): Promise<BookingConfirmation> {
  const nights = nightsBetween(search.checkIn, search.checkOut);
  const reference = `MV-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;

  const confirmation: BookingConfirmation = {
    reference,
    room,
    search,
    guest,
    nights,
    total: nights * room.pricePerNight,
  };

  return delay(confirmation, 900);
}
