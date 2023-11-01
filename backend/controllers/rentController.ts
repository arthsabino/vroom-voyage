import { RequestHandler } from "express";
import { dateMMDDYYYYToTZ } from "../util/format";

export const createRent: RequestHandler = async (req, res, next) => {
  try {
    const { name, pickup, carId, travelDate } = req.body;
    const splitDate = (travelDate as string).split("-");
    const startDate = dateMMDDYYYYToTZ(splitDate[0]);
    const endDate = dateMMDDYYYYToTZ(splitDate[1]);
    res.status(200);
  } catch (error) {
    next(error);
  }
};
