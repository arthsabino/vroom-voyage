import { RequestHandler } from "express";
import { prisma } from "../src/lib/prisma";
import { dateMMDDYYYYToTZ } from "../util/format";

export const getCars: RequestHandler = async (req, res, next) => {
  try {
    const cars = await prisma.car.findMany();
    res.status(200).json(cars);
  } catch (error) {
    next(error);
  }
};

export const getFeaturedCars: RequestHandler = async (req, res, next) => {
  try {
    const cars = await prisma.car.findMany({ where: { isFeatured: true } });
    res.status(200).json(cars);
  } catch (error) {
    next(error);
  }
};

export const getAvailableCars: RequestHandler = async (req, res, next) => {
  try {
    const { pickup, travelDate } = req.query;
    const splitDate = (travelDate as string).split("-");
    const startDate = dateMMDDYYYYToTZ(splitDate[0]);
    const endDate = dateMMDDYYYYToTZ(splitDate[1]);
    const locationFromDB = await prisma.location.findFirst({
      where: {
        name: {
          equals: pickup as string,
          mode: "insensitive",
        },
      },
    });
    const cars = await prisma.car.findMany({
      where: {
        locationId: locationFromDB?.id,
        rent: {
          some: {
            NOT: {
              AND: [
                { startDate: { gte: startDate }, endDate: { lte: startDate } },
                { startDate: { gte: endDate }, endDate: { lte: endDate } },
              ],
            },
          },
        },
      },
    });
    res.status(200).json(cars);
  } catch (error) {
    next(error);
  }
};

