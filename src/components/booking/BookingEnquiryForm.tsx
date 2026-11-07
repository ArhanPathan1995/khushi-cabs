"use client";

import { useMemo, useState } from "react";
import { rentalPackages } from "@/data/packages";
import { vehicles } from "@/data/vehicles";
import {
  emptyEnquiry,
  isValidPhone,
  tripTypes,
  type BookingEnquiry,
} from "@/lib/booking";
import { bookingWhatsAppUrl } from "@/lib/whatsapp";

type Props = {
  defaults?: Partial<BookingEnquiry>;
  heading?: string;
};

export function BookingEnquiryForm({
  defaults,
  heading = "Cab booking enquiry",
}: Props) {
  const initial = useMemo(
    () => ({ ...emptyEnquiry, ...defaults }),
    [defaults],
  );
  const [form, setForm] = useState<BookingEnquiry>(initial);
  const [error, setError] = useState("");

  function update<K extends keyof BookingEnquiry>(key: K, value: BookingEnquiry[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const phone = form.phone.replace(/\s+/g, "");
    if (!form.name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!isValidPhone(phone)) {
      setError("Enter a valid 10-digit Indian mobile number.");
      return;
    }
    if (!form.pickup.trim()) {
      setError("Please enter a pickup location.");
      return;
    }
    if (form.tripType !== "Rental" && !form.drop.trim()) {
      setError("Please enter a drop location.");
      return;
    }
    if (!form.date || !form.time) {
      setError("Please choose pickup date and time.");
      return;
    }
    if (form.tripType === "Round Trip" && (!form.returnDate || !form.returnTime)) {
      setError("Please choose return date and time for a round trip.");
      return;
    }
    setError("");
    window.open(
      bookingWhatsAppUrl({ ...form, phone }),
      "_blank",
      "noopener,noreferrer",
    );
  }

  const fieldClass =
    "w-full rounded-xl border border-line bg-white px-3 py-3 text-sm text-dark";

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl bg-white p-5 shadow-[0_16px_50px_rgba(8,100,165,0.12)] sm:p-6"
    >
      <h2 className="text-xl font-bold text-navy">{heading}</h2>
      <p className="mt-1 text-sm text-muted">
        This form opens WhatsApp with your trip details. No payment is taken on the website.
      </p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
      <label className="block text-sm font-medium text-dark">
          Name
          <input
            className={`${fieldClass} mt-1`}
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            autoComplete="name"
            required
          />
        </label>
        <label className="block text-sm font-medium text-dark">
          Phone
          <input
            className={`${fieldClass} mt-1`}
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            inputMode="numeric"
            autoComplete="tel"
            required
          />
        </label>
        <label className="block text-sm font-medium text-dark sm:col-span-2">
          Email (optional)
          <input
            className={`${fieldClass} mt-1`}
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            autoComplete="email"
          />
        </label>
        <label className="block text-sm font-medium text-dark">
          Trip type
          <select
            className={`${fieldClass} mt-1`}
            value={form.tripType}
            onChange={(e) => update("tripType", e.target.value as BookingEnquiry["tripType"])}
          >
            {tripTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-dark">
          Vehicle category
          <select
            className={`${fieldClass} mt-1`}
            value={form.vehicle}
            onChange={(e) => update("vehicle", e.target.value)}
          >
            <option value="">Any / advise me</option>
            {vehicles.map((vehicle) => (
              <option key={vehicle.slug}>{vehicle.name}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-dark">
          Pickup
          <input
            className={`${fieldClass} mt-1`}
            value={form.pickup}
            onChange={(e) => update("pickup", e.target.value)}
            required
          />
        </label>
        {form.tripType !== "Rental" ? (
          <label className="block text-sm font-medium text-dark">
            Drop
            <input
              className={`${fieldClass} mt-1`}
              value={form.drop}
              onChange={(e) => update("drop", e.target.value)}
              required
            />
          </label>
        ) : (
          <label className="block text-sm font-medium text-dark">
            Rental package
            <select
              className={`${fieldClass} mt-1`}
              value={form.rentalPackage}
              onChange={(e) => update("rentalPackage", e.target.value)}
            >
              {rentalPackages.map((item) => (
                <option key={item.slug}>{item.name}</option>
              ))}
            </select>
          </label>
        )}
        <label className="block text-sm font-medium text-dark">
          Date
          <input
            className={`${fieldClass} mt-1`}
            type="date"
            value={form.date}
            onChange={(e) => update("date", e.target.value)}
            required
          />
        </label>
        <label className="block text-sm font-medium text-dark">
          Time
          <input
            className={`${fieldClass} mt-1`}
            type="time"
            value={form.time}
            onChange={(e) => update("time", e.target.value)}
            required
          />
        </label>
        {form.tripType === "Round Trip" ? (
          <>
            <label className="block text-sm font-medium text-dark">
              Return date
              <input
                className={`${fieldClass} mt-1`}
                type="date"
                value={form.returnDate}
                onChange={(e) => update("returnDate", e.target.value)}
                required
              />
            </label>
            <label className="block text-sm font-medium text-dark">
              Return time
              <input
                className={`${fieldClass} mt-1`}
                type="time"
                value={form.returnTime}
                onChange={(e) => update("returnTime", e.target.value)}
                required
              />
            </label>
          </>
        ) : null}
        <label className="block text-sm font-medium text-dark">
          Passengers
          <select
            className={`${fieldClass} mt-1`}
            value={form.passengers}
            onChange={(e) => update("passengers", e.target.value)}
          >
            <option>1-3</option>
            <option>3-6</option>
            <option>6-8</option>
            <option>9-18</option>
          </select>
        </label>
        <label className="block text-sm font-medium text-dark sm:col-span-2">
          Notes
          <textarea
            className={`${fieldClass} mt-1 min-h-24`}
            value={form.notes}
            onChange={(e) => update("notes", e.target.value)}
            placeholder="Flight time, extra stops, child seat, etc."
          />
        </label>
      </div>
      {error ? <p className="mt-3 text-sm text-red-600">{error}</p> : null}
      <button
        type="submit"
        className="mt-5 w-full rounded-full bg-wa py-3 text-sm font-semibold text-white"
      >
        Send enquiry on WhatsApp
      </button>
    </form>
  );
}
