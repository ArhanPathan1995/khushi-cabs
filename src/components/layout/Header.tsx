"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { company } from "@/data/company";
import { mainNav } from "@/data/nav";
import { waLink } from "@/lib/whatsapp";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="hidden bg-navy text-white md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2 text-sm">
          <p>
            Need a cab? Call{" "}
            <a className="font-semibold text-accent" href={`tel:${company.phoneTel}`}>
              {company.phoneDisplay}
            </a>
          </p>
          <p className="text-white/80">{company.email}</p>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="Khushi Cab Services logo"
            width={52}
            height={52}
            priority
          />
          <span className="leading-tight">
            <span className="block text-sm font-extrabold tracking-wide text-secondary">
              KHUSHI CAB
            </span>
            <span className="block text-[11px] font-semibold tracking-[0.18em] text-primary">
              SERVICES
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-5 lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-dark hover:text-secondary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={`tel:${company.phoneTel}`}
            className="rounded-full border border-secondary px-4 py-2 text-sm font-semibold text-secondary"
          >
            Call
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-wa px-4 py-2 text-sm font-semibold text-white"
          >
            WhatsApp
          </a>
        </div>
        <button
          type="button"
          className="rounded-md border border-line px-3 py-2 text-sm font-semibold lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </div>
      {open ? (
        <div className="border-t border-line bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium text-dark"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a className="font-semibold text-secondary" href={`tel:${company.phoneTel}`}>
              Call {company.phoneDisplay}
            </a>
            <a
              className="rounded-full bg-wa px-4 py-2 text-center font-semibold text-white"
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book on WhatsApp
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
