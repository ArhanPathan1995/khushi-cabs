export const tripTypes = [
  "One Way",
  "Round Trip",
  "Rental",
  "Airport Transfer",
] as const;

export type TripType = (typeof tripTypes)[number];

export type BookingEnquiry = {
  name: string;
  phone: string;
  email: string;
  tripType: TripType;
  pickup: string;
  drop: string;
  date: string;
  time: string;
  returnDate: string;
  returnTime: string;
  rentalPackage: string;
  vehicle: string;
  passengers: string;
  notes: string;
};

export const emptyEnquiry: BookingEnquiry = {
  name: "",
  phone: "",
  email: "",
  tripType: "One Way",
  pickup: "",
  drop: "",
  date: "",
  time: "",
  returnDate: "",
  returnTime: "",
  rentalPackage: "4 Hours / 40 km",
  vehicle: "",
  passengers: "1-3",
  notes: "",
};

export function isValidPhone(phone: string) {
  return /^[6-9]\d{9}$/.test(phone.replace(/\s+/g, ""));
}
