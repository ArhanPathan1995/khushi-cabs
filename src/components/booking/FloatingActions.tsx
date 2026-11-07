"use client";

import { company } from "@/data/company";
import { waLink } from "@/lib/whatsapp";

export function FloatingActions() {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3">
      <a
        href={`tel:${company.phoneTel}`}
        className="flex h-12 items-center justify-center rounded-full bg-secondary px-4 text-sm font-semibold text-white shadow-lg md:hidden"
        aria-label={`Call ${company.phoneDisplay}`}
      >
        Call
      </a>
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-wa text-2xl font-bold text-white shadow-lg"
        aria-label="Chat on WhatsApp"
      >
        WA
      </a>
    </div>
  );
}
