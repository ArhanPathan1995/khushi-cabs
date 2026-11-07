import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/company";
import { legalNav, mainNav } from "@/data/nav";
import { routes } from "@/data/routes";

export function Footer() {
  const featuredRoutes = routes.slice(0, 8);

  return (
    <footer className="mt-16 bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Khushi Cab Services logo" width={44} height={44} />
            <p className="font-bold">{company.legalName}</p>
          </div>
          <p className="mt-4 text-sm text-white/75">{company.tagline}</p>
          <p className="mt-4 text-sm text-white/75">{company.addressSingleLine}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase">Pages</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase">Popular routes</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {featuredRoutes.map((route) => (
              <li key={route.slug}>
                <Link href={`/routes/${route.slug}`} className="hover:text-accent">
                  {route.from} to {route.to}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <a href={`tel:${company.phoneTel}`}>{company.phoneDisplay}</a>
            </li>
            <li>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            <li>Office hours: {company.officeHours}</li>
            <li className="text-xs text-white/50">{company.officeHoursNote}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            {legalNav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
