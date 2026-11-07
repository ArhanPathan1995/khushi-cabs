import Link from "next/link";
import type { PopularRoute } from "@/data/routes";

export function RouteCard({ route }: { route: PopularRoute }) {
  return (
    <Link
      href={`/routes/${route.slug}`}
      className="block rounded-2xl border border-line bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary"
    >
      <p className="text-xs font-semibold tracking-wide text-secondary uppercase">
        Outstation
      </p>
      <h3 className="mt-2 text-lg font-bold text-navy">
        {route.from} to {route.to}
      </h3>
      <p className="mt-2 line-clamp-3 text-sm text-muted">{route.description}</p>
      <span className="mt-4 inline-block text-sm font-semibold text-secondary">
        Enquire this route →
      </span>
    </Link>
  );
}
