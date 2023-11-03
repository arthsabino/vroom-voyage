import express from "express";
import { createTravelGuideRequest } from "../controllers/travelGuideController";

const router = express.Router();

router.post("/", createTravelGuideRequest);

export default router;
