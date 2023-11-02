import express from "express";
import {
  getAvailableCars,
  getCarByShortName,
  getCars,
  getFeaturedCars,
} from "../controllers/carController";

const router = express.Router();

router.get("/", getCars);
router.get("/featured", getFeaturedCars);
router.get("/available", getAvailableCars);
router.get("/:shortName", getCarByShortName);

export default router;
