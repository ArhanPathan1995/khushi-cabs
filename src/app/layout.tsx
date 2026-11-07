import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/booking/FloatingActions";
import { Analytics } from "@/components/seo/Analytics";
import { JsonLd } from "@/components/seo/JsonLd";
import { company, gscVerification, siteUrl } from "@/data/company";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.shortName} | Cab booking enquiry in Pune`,
    template: `%s | ${company.shortName}`,
  },
  description:
    "Khushi Cabs Services Pvt. Ltd. in Kharadi, Pune. Book local, airport and outstation cabs by WhatsApp enquiry. No online payment.",
  keywords: [
    "Khushi Cabs",
    "Pune cab booking",
    "Kharadi taxi",
    "outstation cab Pune",
    "Pune to Mumbai cab",
  ],
  authors: [{ name: company.legalName }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: company.legalName,
    images: [{ url: "/logo.png", alt: company.shortName }],
  },
  robots: { index: true, follow: true },
  verification: gscVerification ? { google: gscVerification } : undefined,
  icons: { icon: "/logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} antialiased`}>
        <JsonLd />
        <Analytics />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
