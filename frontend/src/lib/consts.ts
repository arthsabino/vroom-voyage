import { BookARideForm, TravelGuideForm } from "@/@types/formData";

export const API_URL = {
  getCars: "/api/cars",
  getFeaturedCars: "/api/cars/featured",
  getAvailableCars: "/api/cars/available",
  getBranchList: "/api/branch",
  createRent: "/api/rent",
  filterRent: "/api/rent/filter",
  travelGuide: "/api/travelguide",
};
export const SCREENS = {
  sm: "640px",
  // => @media (min-width: 640px) { ... }

  md: "768px",
  // => @media (min-width: 768px) { ... }

  lg: "1024px",
  // => @media (min-width: 1024px) { ... }

  xl: "1280px",
  // => @media (min-width: 1280px) { ... }

  "2xl": "1536px",
  // => @media (min-width: 1536px) { ... }
};

export const bookARideDefaultValues: BookARideForm = {
  pickup: null,
  travelDate: null,
  carId: null,
};

export const travelGuideDefaultValues: TravelGuideForm = {
  name: null,
  contact: null,
  location: null,
};
