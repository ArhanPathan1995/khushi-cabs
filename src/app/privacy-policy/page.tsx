import { company } from "@/data/company";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Privacy Policy",
  description: `Privacy policy for ${company.legalName}. How we handle enquiry information sent through this website and WhatsApp.`,
  path: "/privacy-policy",
});

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl font-extrabold text-navy">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted">Last updated: 1 November 2026</p>
      <div className="mt-8 space-y-6 text-sm leading-6 text-dark">
        <p>
          This policy applies to {company.legalName} (“we”, “us”) and the website{" "}
          {company.domain}. This site is used to generate cab booking enquiries. It does
          not create user accounts and does not process online payments.
        </p>
        <section>
          <h2 className="text-xl font-bold text-navy">Information you provide</h2>
          <p className="mt-2 text-muted">
            The booking form collects name, phone number, optional email, trip type,
            pickup, drop, date, time, vehicle preference, passenger count and notes.
            Submitting the form opens WhatsApp with that text. We receive the same
            details if you call, email or message us directly.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-navy">How we use it</h2>
          <p className="mt-2 text-muted">
            We use enquiry details to quote a fare, allot a vehicle, contact you about
            the trip, and keep basic records of the booking discussion. We do not sell
            this information.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-navy">WhatsApp, phone and maps</h2>
          <p className="mt-2 text-muted">
            WhatsApp is operated by Meta. Click-to-call uses your phone app. The office
            map is an embedded Google Maps iframe. Those services have their own privacy
            terms.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-navy">Analytics</h2>
          <p className="mt-2 text-muted">
            Google Analytics 4 and Search Console load only if measurement / verification
            IDs are configured on the server. [TO BE CONFIRMED] Provide GA4 ID{" "}
            <code>NEXT_PUBLIC_GA_MEASUREMENT_ID</code> and Search Console verification{" "}
            <code>NEXT_PUBLIC_GSC_VERIFICATION</code> before go-live if you want tracking.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-navy">Retention and contact</h2>
          <p className="mt-2 text-muted">
            [TO BE CONFIRMED] How long enquiry chats and call logs are stored. Until you
            confirm a retention period, we keep records only as needed to complete and
            follow up bookings.
          </p>
          <p className="mt-2 text-muted">
            Privacy questions: {company.email} or {company.phoneDisplay}. Address:{" "}
            {company.addressSingleLine}.
          </p>
        </section>
      </div>
    </article>
  );
}
