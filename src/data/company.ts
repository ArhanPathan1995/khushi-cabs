export const siteUrl = "https://khushicabservices.com";

export const company = {
  legalName: "Khushi Cabs Services Pvt. Ltd.",
  shortName: "Khushi Cabs",
  tagline: "Pune-based cab booking for local, airport and outstation travel",
  phoneDisplay: "+91 9022887808",
  phoneTel: "+919022887808",
  whatsappNumber: "919022887808",
  email: "khushicabs1993@gmail.com",
  addressLines: [
    "Office No. 101, Anupam Apartment",
    "Shanti Nagar, Chaudhary Wasti",
    "Kharadi, Pune – 411014",
  ],
  addressSingleLine:
    "Office No. 101, Anupam Apartment, Shanti Nagar, Chaudhary Wasti, Kharadi, Pune – 411014",
  mapsQuery:
    "Office No. 101, Anupam Apartment, Shanti Nagar, Chaudhary Wasti, Kharadi, Pune 411014",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=Office%20No.%20101%2C%20Anupam%20Apartment%2C%20Shanti%20Nagar%2C%20Chaudhary%20Wasti%2C%20Kharadi%2C%20Pune%20411014&t=&z=16&ie=UTF8&iwloc=&output=embed",
  domain: "khushicabservices.com",
  language: "en",
  officeHours: "9:00 AM – 7:00 PM",
  officeHoursNote:
    "[TO BE CONFIRMED] Office hours taken from the previous Khushi Cab Services website footer.",
  foundingYearNote:
    "[TO BE CONFIRMED] Company incorporation year / CIN / GSTIN are not published until you confirm them.",
  gstin: "[TO BE CONFIRMED]",
  cin: "[TO BE CONFIRMED]",
  directorName: "[TO BE CONFIRMED]",
} as const;

export const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";
export const gscVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION ?? "";
