export type PopularRoute = {
  slug: string;
  from: string;
  to: string;
  title: string;
  description: string;
  body: string[];
};

/**
 * 12 routes existed as dedicated pages on khushicabservices.com.
 * 7 further Pune-centric routes are added as requested (Lonavala and similar
 * destinations already present in the previous Maharashtra trip coverage).
 */
export const routes: PopularRoute[] = [
  {
    slug: "pune-to-nashik",
    from: "Pune",
    to: "Nashik",
    title: "Pune to Nashik Cab",
    description:
      "Book a Pune to Nashik cab with Khushi Cabs. Send a WhatsApp enquiry for one-way or round-trip allotment from Kharadi, Pune.",
    body: [
      "Khushi Cabs Services Pvt. Ltd. accepts Pune to Nashik cab enquiries on WhatsApp. Share pickup point, date, time and vehicle category to receive a fare quote.",
      "Nashik is a common outstation destination from Pune for family travel and temple visits. Vehicle options range from hatchback and sedan to SUV, Innova and Tempo Traveller, subject to availability.",
    ],
  },
  {
    slug: "nashik-to-pune",
    from: "Nashik",
    to: "Pune",
    title: "Nashik to Pune Cab",
    description:
      "Nashik to Pune cab enquiry with Khushi Cabs. WhatsApp your pickup details for a one-way or round-trip quote.",
    body: [
      "Return trips from Nashik to Pune can be requested on WhatsApp. Confirm pickup location in Nashik and drop location in Pune.",
      "Fares are not displayed online. The team shares the applicable rate after trip details are received.",
    ],
  },
  {
    slug: "pune-to-mumbai",
    from: "Pune",
    to: "Mumbai",
    title: "Pune to Mumbai Cab",
    description:
      "Pune to Mumbai cab booking enquiry via WhatsApp. Khushi Cabs operates from Kharadi, Pune.",
    body: [
      "Pune to Mumbai is one of the most requested outstation routes on the previous Khushi Cab Services website.",
      "Tell us whether you need a city drop, airport drop, or a specific suburb in Mumbai so the quote matches the trip.",
    ],
  },
  {
    slug: "mumbai-to-pune",
    from: "Mumbai",
    to: "Pune",
    title: "Mumbai to Pune Cab",
    description:
      "Mumbai to Pune cab enquiry with Khushi Cabs. Send pickup time and location on WhatsApp.",
    body: [
      "Enquiries are accepted for Mumbai to Pune one-way and round trips. Pickup can be from a residence, hotel or airport, as confirmed on WhatsApp.",
      "Vehicle category is allotted after you confirm passenger count and luggage.",
    ],
  },
  {
    slug: "mumbai-to-goa",
    from: "Mumbai",
    to: "Goa",
    title: "Mumbai to Goa Cab",
    description:
      "Mumbai to Goa outstation cab enquiry with Khushi Cabs. Quote shared on WhatsApp.",
    body: [
      "Long-distance Mumbai to Goa trips can be requested as one-way or round trip. Driving time and night charges, if any, are confirmed in the WhatsApp quote.",
      "Choose sedan, SUV, Innova or Traveller based on group size.",
    ],
  },
  {
    slug: "goa-to-mumbai",
    from: "Goa",
    to: "Mumbai",
    title: "Goa to Mumbai Cab",
    description:
      "Goa to Mumbai cab enquiry via WhatsApp with Khushi Cabs Services Pvt. Ltd.",
    body: [
      "Return travel from Goa to Mumbai is available on enquiry. Share the Goa pickup area and Mumbai drop point.",
      "Allotment depends on vehicle availability on the requested date.",
    ],
  },
  {
    slug: "pune-to-goa",
    from: "Pune",
    to: "Goa",
    title: "Pune to Goa Cab",
    description:
      "Pune to Goa cab service enquiry. Khushi Cabs quotes fares on WhatsApp after trip details.",
    body: [
      "Pune to Goa is a long outstation route previously listed on khushicabservices.com.",
      "Mention preferred departure time, passenger count and whether the trip is one-way or round trip.",
    ],
  },
  {
    slug: "goa-to-pune",
    from: "Goa",
    to: "Pune",
    title: "Goa to Pune Cab",
    description:
      "Goa to Pune cab enquiry with Khushi Cabs. WhatsApp booking for one-way or return travel.",
    body: [
      "Request a Goa to Pune cab by sharing pickup location, date and vehicle preference.",
      "The quote is sent on WhatsApp. No online payment is collected on this website.",
    ],
  },
  {
    slug: "pune-to-kolhapur",
    from: "Pune",
    to: "Kolhapur",
    title: "Pune to Kolhapur Cab",
    description:
      "Pune to Kolhapur cab enquiry via WhatsApp. Outstation sedan, SUV and Innova options.",
    body: [
      "Kolhapur is a regular Maharashtra outstation destination from Pune on the previous Khushi site.",
      "Send pickup and drop points to receive a fare on WhatsApp.",
    ],
  },
  {
    slug: "kolhapur-to-pune",
    from: "Kolhapur",
    to: "Pune",
    title: "Kolhapur to Pune Cab",
    description:
      "Kolhapur to Pune cab booking enquiry with Khushi Cabs.",
    body: [
      "Return cabs from Kolhapur to Pune are arranged on enquiry, subject to availability.",
      "Confirm passenger count so the correct vehicle category can be quoted.",
    ],
  },
  {
    slug: "pune-to-shirdi",
    from: "Pune",
    to: "Shirdi",
    title: "Pune to Shirdi Cab",
    description:
      "Pune to Shirdi cab enquiry for darshan trips. Khushi Cabs quotes on WhatsApp.",
    body: [
      "Pune to Shirdi was a dedicated route page on the previous website. Enquiries continue on WhatsApp.",
      "Share temple visit timing if you need a wait-and-return (round trip) arrangement.",
    ],
  },
  {
    slug: "shirdi-to-pune",
    from: "Shirdi",
    to: "Pune",
    title: "Shirdi to Pune Cab",
    description:
      "Shirdi to Pune cab enquiry with Khushi Cabs Services Pvt. Ltd.",
    body: [
      "Pickup from Shirdi to Pune can be requested after darshan or hotel checkout.",
      "Fares are shared after pickup time and vehicle category are confirmed.",
    ],
  },
  {
    slug: "pune-to-lonavala",
    from: "Pune",
    to: "Lonavala",
    title: "Pune to Lonavala Cab",
    description:
      "Pune to Lonavala cab enquiry. Weekend and same-day trips quoted on WhatsApp.",
    body: [
      "Lonavala is added as a popular hill-station route from Pune. It was part of the previous Maharashtra coverage list.",
      "Ask for one-way drop or a round trip with waiting time. Waiting charges, if applicable, are confirmed in the quote.",
    ],
  },
  {
    slug: "lonavala-to-pune",
    from: "Lonavala",
    to: "Pune",
    title: "Lonavala to Pune Cab",
    description:
      "Lonavala to Pune cab enquiry with Khushi Cabs.",
    body: [
      "Return drops from Lonavala to Pune are accepted on WhatsApp.",
      "Share exact pickup (hotel, station or residence) for an accurate quote.",
    ],
  },
  {
    slug: "pune-to-mahabaleshwar",
    from: "Pune",
    to: "Mahabaleshwar",
    title: "Pune to Mahabaleshwar Cab",
    description:
      "Pune to Mahabaleshwar cab enquiry. Outstation quote on WhatsApp.",
    body: [
      "Mahabaleshwar was included in the previous Maharashtra trip destination list.",
      "Family groups often request SUV, Innova or Tempo Traveller. Availability is confirmed on WhatsApp.",
    ],
  },
  {
    slug: "mahabaleshwar-to-pune",
    from: "Mahabaleshwar",
    to: "Pune",
    title: "Mahabaleshwar to Pune Cab",
    description:
      "Mahabaleshwar to Pune cab enquiry with Khushi Cabs.",
    body: [
      "Request a return cab from Mahabaleshwar to Pune by sharing checkout time and hotel name.",
      "Night driving, if required, is discussed in the WhatsApp quote.",
    ],
  },
  {
    slug: "pune-to-aurangabad",
    from: "Pune",
    to: "Aurangabad",
    title: "Pune to Aurangabad Cab",
    description:
      "Pune to Aurangabad (Chhatrapati Sambhajinagar) cab enquiry via WhatsApp.",
    body: [
      "Aurangabad was listed in the previous Maharashtra trip coverage used by Khushi Cab Services.",
      "Use this page to start an enquiry for one-way or round-trip travel. Sightseeing add-ons are quoted only if you request them.",
    ],
  },
  {
    slug: "pune-to-ahmednagar",
    from: "Pune",
    to: "Ahmednagar",
    title: "Pune to Ahmednagar Cab",
    description:
      "Pune to Ahmednagar cab enquiry with Khushi Cabs from Kharadi, Pune.",
    body: [
      "Ahmednagar was part of the previous Maharashtra destination coverage.",
      "Send pickup locality in Pune and drop point in Ahmednagar on WhatsApp for a fare.",
    ],
  },
  {
    slug: "pune-to-mumbai-airport",
    from: "Pune",
    to: "Mumbai Airport",
    title: "Pune to Mumbai Airport Cab",
    description:
      "Pune to Mumbai Airport cab enquiry. Share flight time on WhatsApp for a quote.",
    body: [
      "Airport drops from Pune to Mumbai Airport (CSIA) are accepted as outstation / airport enquiries.",
      "Mention terminal if known, and whether the trip is one-way. The website does not sell tickets or collect payment.",
    ],
  },
];

export function getRoute(slug: string) {
  return routes.find((route) => route.slug === slug);
}
