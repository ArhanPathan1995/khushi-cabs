import { company } from "@/data/company";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Cancellation Policy",
  description: `Cancellation and change rules for Khushi Cabs WhatsApp bookings. No online payment is collected on this website.`,
  path: "/cancellation-policy",
});

export default function CancellationPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl font-extrabold text-navy">Cancellation Policy</h1>
      <p className="mt-2 text-sm text-muted">Last updated: 1 November 2026</p>
      <div className="mt-8 space-y-6 text-sm leading-6 text-dark">
        <p>
          Cancellations and time changes must be made by WhatsApp or phone using{" "}
          {company.phoneDisplay}. Because this website does not take online payment,
          there is no automated refund on the site.
        </p>
        <section>
          <h2 className="text-xl font-bold text-navy">How to cancel</h2>
          <p className="mt-2 text-muted">
            Message or call us with the passenger name, travel date and pickup point.
            We will confirm cancellation on the same channel.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-navy">Charges</h2>
          <p className="mt-2 text-muted">
            [TO BE CONFIRMED] Free cancellation window (for example hours before pickup).
            [TO BE CONFIRMED] Fee if the driver has already been dispatched. [TO BE
            CONFIRMED] No-show rule if we cannot reach you at pickup.
          </p>
          <p className="mt-2 text-muted">
            Until those figures are confirmed, any cancellation cost will be explained
            in the WhatsApp confirmation before you travel.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-navy">Changes</h2>
          <p className="mt-2 text-muted">
            Date, time, drop point or vehicle changes are treated as a new quote if the
            trip cost changes. We accept changes only if a vehicle is still available.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-navy">Our cancellations</h2>
          <p className="mt-2 text-muted">
            If we cannot run the trip, we will inform you on the phone number used for
            the enquiry and will not charge a cancellation fee for that failure.
          </p>
        </section>
      </div>
    </article>
  );
}
