export type VehicleCategory = {
  slug: string;
  name: string;
  seating: string;
  models: string[];
  image: string;
  luggageNote: string;
  features: string[];
  rateLabel: string;
};

/**
 * Models and seating come from the previous Khushi Cab Services booking cards.
 * Numeric fares are not published: the old site loaded prices from a database
 * and this rebuild is enquiry-only.
 */
export const vehicles: VehicleCategory[] = [
  {
    slug: "hatchback",
    name: "Hatchback",
    seating: "4+1",
    models: ["Maruti WagonR", "Toyota Glanza", "Celerio"],
    image: "/images/vehicles/hatchback.webp",
    luggageNote: "Suitable for light luggage",
    features: ["AC", "Specified model on allotment"],
    rateLabel: "Fare on WhatsApp enquiry",
  },
  {
    slug: "sedan",
    name: "Sedan",
    seating: "4+1",
    models: ["Maruti Swift Dzire", "Honda Amaze", "Hyundai Aura / Xcent", "Toyota Etios"],
    image: "/images/vehicles/sedan.webp",
    luggageNote: "Boot space for typical outstation bags",
    features: ["AC", "Specified model on allotment"],
    rateLabel: "Fare on WhatsApp enquiry",
  },
  {
    slug: "sedan-premium",
    name: "Sedan Premium",
    seating: "4+1",
    models: ["Hyundai Verna", "Honda City", "Maruti Ciaz"],
    image: "/images/vehicles/sedan-premium.webp",
    luggageNote: "Comfort-focused sedan for airport and outstation trips",
    features: ["AC", "Assured premium sedan category"],
    rateLabel: "Fare on WhatsApp enquiry",
  },
  {
    slug: "suv",
    name: "SUV",
    seating: "6+1",
    models: ["Maruti Ertiga", "Mahindra Marazzo"],
    image: "/images/vehicles/suv.webp",
    luggageNote: "Family luggage for outstation travel",
    features: ["AC", "Specified model on allotment"],
    rateLabel: "Fare on WhatsApp enquiry",
  },
  {
    slug: "muv",
    name: "MUV / Innova",
    seating: "6+1",
    models: ["Toyota Innova Crysta"],
    image: "/images/vehicles/innova.webp",
    luggageNote: "Spacious cabin for families and groups",
    features: ["AC", "Specified model on allotment"],
    rateLabel: "Fare on WhatsApp enquiry",
  },
  {
    slug: "tempo-traveller",
    name: "Tempo Traveller",
    seating: "Group seating (as allotted)",
    models: ["Tempo Traveller", "17-seater Traveller (as available)"],
    image: "/images/vehicles/tempo.jpg",
    luggageNote: "Group tours, weddings and family travel",
    features: ["AC on request", "Allotment confirmed on WhatsApp"],
    rateLabel: "Fare on WhatsApp enquiry",
  },
];
