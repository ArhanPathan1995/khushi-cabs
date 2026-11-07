import { BookingEnquiryForm } from "@/components/booking/BookingEnquiryForm";
import { VehicleCard } from "@/components/vehicles/VehicleCard";
import { vehicles } from "@/data/vehicles";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Vehicle Categories",
  description:
    "Hatchback, sedan, sedan premium, SUV, Innova Crysta and Tempo Traveller. Specified models from Khushi Cabs. Fares on WhatsApp enquiry.",
  path: "/vehicles",
});

export default function VehiclesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl font-extrabold text-navy">Vehicle categories</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Categories and specified models are taken from the previous booking cards.
        Published rupee amounts from the old database are not copied here because this
        site is enquiry-only and those figures were not provided as a confirmed rate
        card.
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {vehicles.map((vehicle) => (
          <div key={vehicle.slug} id={vehicle.slug}>
            <VehicleCard vehicle={vehicle} />
            <ul className="mt-3 list-disc pl-5 text-sm text-muted">
              {vehicle.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
              <li>{vehicle.luggageNote}</li>
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <BookingEnquiryForm heading="Request a vehicle quote" />
      </div>
    </div>
  );
}
