import express from "express";
import { createRent, filterRent } from "../controllers/rentController";

const router = express.Router();

router.post("/", createRent);
router.get("/filter", filterRent);

export default router;
