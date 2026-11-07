import { company } from "@/data/company";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Terms & Conditions",
  description: `Terms for cab booking enquiries with ${company.legalName}. Enquiry-only pricing, WhatsApp confirmation, no online payment.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl font-extrabold text-navy">Terms &amp; Conditions</h1>
      <p className="mt-2 text-sm text-muted">Last updated: 1 November 2026</p>
      <div className="mt-8 space-y-6 text-sm leading-6 text-dark">
        <p>
          By using {company.domain} or sending a booking enquiry to {company.legalName},
          you agree to these terms. This website is an enquiry channel. A booking is
          confirmed only when we accept it on WhatsApp or phone.
        </p>
        <section>
          <h2 className="text-xl font-bold text-navy">Quotes and vehicles</h2>
          <p className="mt-2 text-muted">
            Fares are not listed as a live rate card. The quote you receive applies to
            the trip details you shared. Specified vehicle models are examples of a
            category. The allotted car is confirmed at booking time.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-navy">No online payment</h2>
          <p className="mt-2 text-muted">
            This website does not collect card, UPI or gateway payments. Payment method
            and timing (for example cash to driver) are [TO BE CONFIRMED] and will be
            stated in the WhatsApp confirmation.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-navy">Your responsibilities</h2>
          <p className="mt-2 text-muted">
            Provide a reachable phone number, correct pickup time and enough passenger
            and luggage information. Extra stops, night driving, waiting time, tolls,
            parking and permits are charged only if they apply to your trip and are
            included in the quote or agreed later on WhatsApp.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-navy">Availability</h2>
          <p className="mt-2 text-muted">
            We may decline or reschedule a trip if a suitable vehicle is not available.
            We are not a metered city taxi aggregator and do not promise app-style live
            tracking on this website.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-navy">Business details</h2>
          <p className="mt-2 text-muted">
            Legal name: {company.legalName}. GSTIN: {company.gstin}. CIN: {company.cin}.
            Registered / office address: {company.addressSingleLine}.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-navy">Governing law</h2>
          <p className="mt-2 text-muted">
            [TO BE CONFIRMED] These terms are intended to be governed by the laws of
            India, with disputes subject to courts in Pune, Maharashtra, unless you
            instruct otherwise.
          </p>
        </section>
      </div>
    </article>
  );
}
