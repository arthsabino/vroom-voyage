export type BookARideForm = {
  pickup: string | null;
  travelDate: string | null;
  carId?: string | null;
  name?: string | null;
  contact?: string | null;
};

export type TravelGuideForm = {
  name: string | null;
  contact: string | null;
  location: string | null;
};
