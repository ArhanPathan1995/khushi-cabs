import { RouteCard } from "@/components/routes/RouteCard";
import { routes } from "@/data/routes";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Popular Routes",
  description:
    "19 popular cab routes from Khushi Cabs including Pune to Mumbai, Nashik, Goa, Shirdi, Kolhapur, Lonavala and Mumbai Airport.",
  path: "/routes",
});

export default function RoutesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl font-extrabold text-navy">Popular routes</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Each route has its own SEO page with a WhatsApp enquiry form pre-filled for that
        city pair.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {routes.map((route) => (
          <RouteCard key={route.slug} route={route} />
        ))}
      </div>
    </div>
  );
}
