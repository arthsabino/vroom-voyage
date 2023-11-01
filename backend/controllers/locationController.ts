import { RequestHandler } from "express";
import { prisma } from "../src/lib/prisma";

export const getLocations: RequestHandler = async (req, res, next) => {
  try {
    const locations = await prisma.location.findMany();
    res.status(200).json(locations);
  } catch (error) {
    next(error);
  }
};
