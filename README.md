# Khushi Cabs website

Public enquiry website for **Khushi Cabs Services Pvt. Ltd.**  
Domain: `khushicabservices.com`  
Primary booking: WhatsApp `+91 9022887808`  
No admin panel. No payment gateway.

## Run locally

```bash
npm install
npm run dev
```

## Analytics / Search Console

Copy `.env.example` to `.env.local` and add:

- `NEXT_PUBLIC_GA_MEASUREMENT_ID` (GA4, e.g. `G-XXXXXXXX`)
- `NEXT_PUBLIC_GSC_VERIFICATION` (Google Search Console meta verification)

Do not reuse the old Google Ads ID unless you confirm it.

## Confirm before legal go-live

Items marked `[TO BE CONFIRMED]` in About, Privacy, Terms and Cancellation:

- GSTIN, CIN, director name, founding year
- Office hours (currently 9:00 AM – 7:00 PM from the previous site)
- Cancellation windows and fees
- Payment method collected off-site
- Google reviews URL

## Deploy

Build is SSL-ready (HTTPS canonical URLs). Point `khushicabservices.com` at the host and enable the host’s SSL certificate. Do not buy a new domain.
