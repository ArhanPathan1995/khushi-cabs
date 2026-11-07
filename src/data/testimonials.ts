export type Testimonial = {
  quote: string;
  name: string;
  place?: string;
  source?: string;
};

/**
 * Named customer reviews are not invented.
 * Add verified quotes here after you confirm them, or a Google reviews URL.
 */
export const testimonials: Testimonial[] = [];

export const googleReviews = {
  url: "",
  note: "[TO BE CONFIRMED] Google Business Profile / reviews URL is not published until you share it.",
};
