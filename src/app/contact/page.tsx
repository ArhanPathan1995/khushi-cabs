import { BookingEnquiryForm } from "@/components/booking/BookingEnquiryForm";
import { company } from "@/data/company";
import { pageMeta } from "@/lib/seo";
import { waLink } from "@/lib/whatsapp";

export const metadata = pageMeta({
  title: "Contact Us",
  description:
    "Contact Khushi Cabs Services Pvt. Ltd., Office No. 101, Anupam Apartment, Kharadi, Pune. Call or WhatsApp +91 9022887808.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl font-extrabold text-navy">Contact us</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Use WhatsApp or phone for booking enquiries. The map below shows our Kharadi
        office address.
      </p>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="rounded-2xl bg-white p-5">
            <h2 className="font-bold text-navy">Office</h2>
            <p className="mt-2 text-sm text-muted">{company.addressSingleLine}</p>
            <p className="mt-3 text-sm">
              Phone:{" "}
              <a className="font-semibold text-secondary" href={`tel:${company.phoneTel}`}>
                {company.phoneDisplay}
              </a>
            </p>
            <p className="text-sm">
              Email:{" "}
              <a className="font-semibold text-secondary" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </p>
            <p className="mt-2 text-sm text-muted">Office hours: 9:00 AM – 7:00 PM {company.officeHours}</p>
            <div className="mt-4 flex gap-3">
              <a
                className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-white"
                href={`tel:${company.phoneTel}`}
              >
                Click to call
              </a>
              <a
                className="rounded-full bg-wa px-4 py-2 text-sm font-semibold text-white"
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-line bg-white">
            <iframe
              title="Khushi Cabs Kharadi office map"
              src={company.mapsEmbedUrl}
              className="h-80 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <BookingEnquiryForm heading="Send trip details" />
      </div>
    </div>
  );
}
