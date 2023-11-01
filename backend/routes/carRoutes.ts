import express from "express";
import {
  getAvailableCars,
  getCars,
  getFeaturedCars,
} from "../controllers/carController";

const router = express.Router();

router.get("/", getCars);
router.get("/featured", getFeaturedCars);
router.get("/available", getAvailableCars);

export default router;
