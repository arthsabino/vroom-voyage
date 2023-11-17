import { RequestHandler } from "express";
import { prisma } from "../src/lib/prisma";
import { addClient } from "./clientController";
import { getDefaultTravelGuideStatus } from "./travelGuideStatusController";

export const createTravelGuideRequest: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const { name, contact, location } = req.body;
    const client = await addClient(name, contact);
    const defaultTravelGuideStatusFromDB = await getDefaultTravelGuideStatus();
    const travelGuide = await prisma.travelGuide.create({
      data: {
        clientId: client?.id,
        travelLocation: location,
        travelGuideStatusId: defaultTravelGuideStatusFromDB.id,
      },
    });
    res.status(200).json(travelGuide);
  } catch (error) {
    console.error(error);
    next(error);
  }
};
