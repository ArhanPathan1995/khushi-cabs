import type { Metadata } from "next";
import { company, siteUrl } from "@/data/company";

export function pageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${siteUrl}${path}`;
  const fullTitle = `${title} | ${company.shortName}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: company.legalName,
      locale: "en_IN",
      type: "website",
      images: [{ url: `${siteUrl}/logo.png`, alt: company.shortName }],
    },
    twitter: {
      card: "summary",
      title: fullTitle,
      description,
    },
  };
}
