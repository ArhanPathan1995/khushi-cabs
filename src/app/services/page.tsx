import { BookingEnquiryForm } from "@/components/booking/BookingEnquiryForm";
import { rentalPackages, tourPackages } from "@/data/packages";
import { services } from "@/data/services";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Our Services",
  description:
    "Outstation cabs, airport transfer, local rental, wedding and hospital transfers from Khushi Cabs, Pune. Enquire on WhatsApp.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl font-extrabold text-navy">Our services</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Service names follow the previous Khushi Cab Services website. Descriptions are
        written for this enquiry-only rebuild.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.slug} className="rounded-2xl border border-line bg-white p-5">
            <h2 className="text-xl font-bold text-navy">{service.name}</h2>
            <p className="mt-2 text-sm text-muted">{service.summary}</p>
          </article>
        ))}
      </div>
      <h2 className="mt-12 text-2xl font-bold text-navy">Local rental packages</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {rentalPackages.map((item) => (
          <article key={item.slug} className="rounded-2xl bg-white p-5">
            <h3 className="font-bold text-secondary">{item.name}</h3>
            <p className="mt-2 text-sm text-muted">{item.detail}</p>
          </article>
        ))}
      </div>
      <h2 className="mt-12 text-2xl font-bold text-navy">Trip package enquiries</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {tourPackages.map((item) => (
          <article key={item.slug} className="rounded-2xl bg-white p-5">
            <h3 className="font-bold text-secondary">{item.name}</h3>
            <p className="mt-2 text-sm text-muted">{item.detail}</p>
          </article>
        ))}
      </div>
      <div className="mt-12">
        <BookingEnquiryForm heading="Enquire for a service" />
      </div>
    </div>
  );
}
