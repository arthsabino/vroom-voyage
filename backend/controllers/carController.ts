import { RequestHandler } from "express";
import { prisma } from "../src/lib/prisma";
import { dateMMDDYYYYToTZ } from "../util/format";
import { getReservedRentStatus } from "./rentStatusController";

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
    // const cars = await prisma.car.findMany({ where: { isFeatured: true } });
    const cars = await prisma.car.findMany();
    res.status(200).json(cars);
  } catch (error) {
    next(error);
  }
};

export const getCarByShortName: RequestHandler = async (req, res, next) => {
  try {
    const { shortName } = req.params;
    const cars = await prisma.car.findFirst({
      where: {
        shortName,
      },
    });
    res.status(200).json(cars);
  } catch (error) {
    next(error);
  }
};

export const getAvailableCars: RequestHandler = async (req, res, next) => {
  try {
    const { travelDate } = req.query;
    const splitDate = (travelDate as string).split("-");
    const startDate = dateMMDDYYYYToTZ(splitDate[0]);
    const endDate = dateMMDDYYYYToTZ(splitDate[1]);
    const reservedRentStatusFromDB = await getReservedRentStatus();
    const cars = await prisma.car.findMany({
      where: {
        rent: {
          every: {
            NOT: {
              OR: [
                { startDate: { gte: startDate }, endDate: { lte: startDate } },
                { startDate: { lte: endDate }, endDate: { gte: endDate } },
                { startDate: { gte: startDate, lte: endDate } },
                { endDate: { gte: startDate, lte: endDate } },
              ],
              rentStatusId: reservedRentStatusFromDB?.id,
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
