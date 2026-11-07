import { notFound } from "next/navigation";
import { BookingEnquiryForm } from "@/components/booking/BookingEnquiryForm";
import { RouteCard } from "@/components/routes/RouteCard";
import { getRoute, routes } from "@/data/routes";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return routes.map((route) => ({ slug: route.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const route = getRoute(slug);
  if (!route) return {};
  return pageMeta({
    title: route.title,
    description: route.description,
    path: `/routes/${route.slug}`,
  });
}

export default async function RoutePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const route = getRoute(slug);
  if (!route) notFound();

  const related = routes.filter((item) => item.slug !== route.slug).slice(0, 3);

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
      <article>
        <p className="text-xs font-semibold tracking-[0.2em] text-secondary uppercase">
          Popular route
        </p>
        <h1 className="mt-2 text-4xl font-extrabold text-navy">{route.title}</h1>
        <p className="mt-4 text-muted">{route.description}</p>
        {route.body.map((paragraph) => (
          <p key={paragraph} className="mt-4 text-muted">
            {paragraph}
          </p>
        ))}
        <p className="mt-6 text-sm text-dark">
          Pricing: enquiry only. WhatsApp is the primary booking channel.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3 lg:grid-cols-1">
          {related.map((item) => (
            <RouteCard key={item.slug} route={item} />
          ))}
        </div>
      </article>
      <BookingEnquiryForm
        heading={`${route.from} to ${route.to} enquiry`}
        defaults={{ pickup: route.from, drop: route.to }}
      />
    </div>
  );
}
