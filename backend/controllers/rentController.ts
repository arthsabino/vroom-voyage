import { RequestHandler } from "express";
import { prisma } from "../src/lib/prisma";
import { dateMMDDYYYYToTZ } from "../util/format";
import { getBranchByName } from "./branchController";
import { addClient } from "./clientController";
import {
  getDefaultRentStatus,
  getReservedRentStatus,
} from "./rentStatusController";

export const createRent: RequestHandler = async (req, res, next) => {
  try {
    const { name, contact, pickup, carId, travelDate } = req.body;
    const splitDate = (travelDate as string).split("-");
    const startDate = dateMMDDYYYYToTZ(splitDate[0]);
    const endDate = dateMMDDYYYYToTZ(splitDate[1]);
    const branch = await getBranchByName(pickup as string);
    const defaultRentStatus = await getDefaultRentStatus();
    const client = await addClient(name, contact);
    const rent = await prisma.rent.create({
      data: {
        startDate,
        endDate,
        branchId: branch?.id,
        rentStatusId: defaultRentStatus?.id,
        carId,
        clientId: client.id,
      },
    });
    res.status(200).json(rent);
  } catch (error) {
    next(error);
  }
};

export const filterRent: RequestHandler = async (req, res, next) => {
  try {
    const { carId } = req.query;
    const reservedRentStatusFromDB = await getReservedRentStatus();
    const rents = await prisma.rent.findMany({
      where: {
        carId: carId as string,
        rentStatusId: reservedRentStatusFromDB?.id,
        endDate: { gte: new Date() },
      },
    });
    res.status(200).json(rents);
  } catch (error) {
    next(error);
  }
};