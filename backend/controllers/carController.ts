import { RequestHandler } from "express";
import { prisma } from "../src/lib/prisma";

export const getCars: RequestHandler = async (req, res, next) => {
  try {
    const cars = await prisma.car.findMany();
    res.status(200).json(cars);
  } catch (error) {
    next(error);
  }
};
