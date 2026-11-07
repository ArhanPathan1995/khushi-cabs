import { company } from "@/data/company";
import type { BookingEnquiry } from "@/lib/booking";

export const defaultWhatsAppText =
  "Hello Khushi Cabs, I would like to book a cab. Please share availability and fare.";

export function waLink(text: string = defaultWhatsAppText) {
  return `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function bookingWhatsAppText(enquiry: BookingEnquiry) {
  const lines = [
    "Hello Khushi Cabs,",
    "I would like to book a cab.",
    "",
    `Name: ${enquiry.name}`,
    `Phone: ${enquiry.phone}`,
    enquiry.email ? `Email: ${enquiry.email}` : "",
    `Trip: ${enquiry.tripType}`,
    `Pickup: ${enquiry.pickup || "-"}`,
    enquiry.tripType === "Rental" ? "" : `Drop: ${enquiry.drop || "-"}`,
    `Date: ${enquiry.date || "-"}`,
    `Time: ${enquiry.time || "-"}`,
    enquiry.tripType === "Round Trip"
      ? `Return date: ${enquiry.returnDate || "-"}`
      : "",
    enquiry.tripType === "Round Trip"
      ? `Return time: ${enquiry.returnTime || "-"}`
      : "",
    enquiry.tripType === "Rental"
      ? `Rental package: ${enquiry.rentalPackage || "-"}`
      : "",
    `Vehicle: ${enquiry.vehicle || "-"}`,
    `Passengers: ${enquiry.passengers || "-"}`,
    enquiry.notes ? `Notes: ${enquiry.notes}` : "",
  ].filter((line) => line !== "");

  return lines.join("\n");
}

export function bookingWhatsAppUrl(enquiry: BookingEnquiry) {
  return waLink(bookingWhatsAppText(enquiry));
}
