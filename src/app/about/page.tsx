import { BookingEnquiryForm } from "@/components/booking/BookingEnquiryForm";
import { company } from "@/data/company";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About Us",
  description:
    "About Khushi Cabs Services Pvt. Ltd., Office No. 101, Anupam Apartment, Kharadi, Pune. Cab enquiries on WhatsApp.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
      <article>
        <p className="text-xs font-semibold tracking-[0.2em] text-secondary uppercase">
          About us
        </p>
        <h1 className="mt-2 text-4xl font-extrabold text-navy">
          Khushi Cabs Services Pvt. Ltd.
        </h1>
        <div className="mt-6 space-y-4 text-muted">
          <p>
            Khushi Cabs is a Pune-based cab service operating from Kharadi. We take booking
            enquiries on WhatsApp and phone. This website does not include an admin panel
            or an online payment gateway.
          </p>
          <p>
            The previous Khushi Cab Services website described cab hire for routes such as
            Pune to Mumbai, with vehicles including Swift, Innova, Innova Crysta, sedan
            cars and 17-seater Traveller, depending on availability and the trip.
          </p>
          <p>
            We continue that enquiry model: you send trip details, we confirm a vehicle
            and share a fare on WhatsApp.
          </p>
        </div>
        <ul className="mt-6 space-y-2 text-sm text-dark">
          <li>Office: {company.addressSingleLine}</li>
          <li>Phone: {company.phoneDisplay}</li>
          <li>Email: {company.email}</li>
          <li>Office hours: 9:00 AM – 7:00 PM {company.officeHours}</li>
        </ul>
        <p className="mt-6 text-xs text-muted">{company.foundingYearNote}</p>
        <p className="mt-2 text-xs text-muted">
          Director name, GSTIN and CIN: {company.directorName} / {company.gstin} /{" "}
          {company.cin}
        </p>
      </article>
      <BookingEnquiryForm heading="Talk to the team" />
    </div>
  );
}
