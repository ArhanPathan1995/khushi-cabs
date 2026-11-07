import Image from "next/image";
import Link from "next/link";
import type { VehicleCategory } from "@/data/vehicles";
import { waLink } from "@/lib/whatsapp";

export function VehicleCard({ vehicle }: { vehicle: VehicleCategory }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
      <div className="relative h-40 bg-[#eef6fb]">
        <Image
          src={vehicle.image}
          alt={`${vehicle.name} cab`}
          fill
          className="object-contain p-4"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold tracking-wide text-secondary uppercase">
          {vehicle.seating} seating
        </p>
        <h3 className="mt-1 text-xl font-bold text-navy">{vehicle.name}</h3>
        <p className="mt-2 text-sm text-muted">{vehicle.models.join(" · ")}</p>
        <p className="mt-3 text-sm font-semibold text-secondary">{vehicle.rateLabel}</p>
        <div className="mt-4 flex gap-2">
          <Link
            href={`/vehicles#${vehicle.slug}`}
            className="rounded-full border border-line px-3 py-2 text-xs font-semibold"
          >
            Details
          </Link>
          <a
            href={waLink(
              `Hello Khushi Cabs, I want a quote for a ${vehicle.name} cab.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-wa px-3 py-2 text-xs font-semibold text-white"
          >
            WhatsApp quote
          </a>
        </div>
      </div>
    </article>
  );
}
