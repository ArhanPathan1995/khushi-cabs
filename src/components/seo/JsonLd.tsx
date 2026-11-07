import { company, siteUrl } from "@/data/company";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: company.legalName,
    url: siteUrl,
    image: `${siteUrl}/logo.png`,
    telephone: company.phoneTel,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Office No. 101, Anupam Apartment, Shanti Nagar, Chaudhary Wasti",
      addressLocality: "Kharadi",
      addressRegion: "Maharashtra",
      postalCode: "411014",
      addressCountry: "IN",
    },
    areaServed: "Pune",
    priceRange: "Enquiry",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
