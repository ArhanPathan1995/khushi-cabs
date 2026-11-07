import Link from "next/link";
import { BookingEnquiryForm } from "@/components/booking/BookingEnquiryForm";
import { Testimonials } from "@/components/home/Testimonials";
import { RouteCard } from "@/components/routes/RouteCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VehicleCard } from "@/components/vehicles/VehicleCard";
import { company } from "@/data/company";
import { rentalPackages, tourPackages } from "@/data/packages";
import { routes } from "@/data/routes";
import { services } from "@/data/services";
import { vehicles } from "@/data/vehicles";
import { pageMeta } from "@/lib/seo";
import { waLink } from "@/lib/whatsapp";

export const metadata = pageMeta({
  title: "Pune Cab Booking on WhatsApp",
  description:
    "Khushi Cabs Services Pvt. Ltd., Kharadi, Pune. Enquire for local, airport and outstation cabs on WhatsApp. No online payment.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy via-secondary to-primary text-white">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:py-16">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
              Kharadi, Pune
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Cab booking enquiries on WhatsApp
            </h1>
            <p className="mt-4 max-w-xl text-white/85">
              {company.legalName} arranges local, airport and outstation cabs. Share your
              trip on WhatsApp to receive a fare. This website does not collect online
              payments.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-wa px-5 py-3 text-sm font-semibold"
              >
                Chat on WhatsApp
              </a>
              <a
                href={`tel:${company.phoneTel}`}
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-navy"
              >
                Call {company.phoneDisplay}
              </a>
            </div>
          </div>
          <BookingEnquiryForm heading="Start your booking enquiry" />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Services"
            title="What you can enquire for"
            text="Service types follow the previous Khushi Cab Services website, rewritten without placeholder copy."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <Link
                key={service.slug}
                href="/services"
                className="rounded-2xl border border-line bg-white p-5"
              >
                <h3 className="font-bold text-navy">{service.name}</h3>
                <p className="mt-2 text-sm text-muted">{service.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Fleet"
            title="Vehicle categories"
            text="Specified models from the previous booking cards. Fares are quoted on WhatsApp, not listed as live prices."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {vehicles.map((vehicle) => (
              <VehicleCard key={vehicle.slug} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="19 routes"
            title="Popular cab routes"
            text="Twelve routes from the previous sitemap, plus Lonavala, Mahabaleshwar, Aurangabad, Ahmednagar and Mumbai Airport."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {routes.slice(0, 9).map((route) => (
              <RouteCard key={route.slug} route={route} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/routes" className="font-semibold text-secondary">
              View all 19 routes →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Packages"
            title="Rental and trip enquiries"
            text="Hour packages match the previous booking form. Tour items are transport enquiries, not priced holidays."
          />
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-line p-6">
              <h3 className="text-xl font-bold text-navy">Local rental</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                {rentalPackages.map((item) => (
                  <li key={item.slug}>
                    <strong className="text-dark">{item.name}.</strong> {item.detail}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-line p-6">
              <h3 className="text-xl font-bold text-navy">Trip enquiries</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                {tourPackages.map((item) => (
                  <li key={item.slug}>
                    <strong className="text-dark">{item.name}.</strong> {item.detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
}
