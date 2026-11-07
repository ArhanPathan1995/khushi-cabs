import { googleReviews, testimonials } from "@/data/testimonials";
import { waLink } from "@/lib/whatsapp";

export function Testimonials() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-navy">Customer feedback</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
          Named reviews are published only after you confirm them. This website does not
          display invented testimonials.
        </p>
        {testimonials.length > 0 ? (
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {testimonials.map((item) => (
              <blockquote key={item.name} className="rounded-2xl border border-line p-5">
                <p className="text-dark">&ldquo;{item.quote}&rdquo;</p>
                <footer className="mt-3 text-sm font-semibold text-secondary">
                  {item.name}
                  {item.place ? ` · ${item.place}` : ""}
                </footer>
              </blockquote>
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-dashed border-line p-6 text-center">
            <p className="text-sm text-muted">{googleReviews.note}</p>
            {googleReviews.url ? (
              <a className="mt-3 inline-block font-semibold text-secondary" href={googleReviews.url}>
                Read Google reviews
              </a>
            ) : null}
            <a
              className="mt-4 inline-block rounded-full bg-wa px-5 py-2 text-sm font-semibold text-white"
              href={waLink("Hello Khushi Cabs, please share recent customer references.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ask for references on WhatsApp
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
