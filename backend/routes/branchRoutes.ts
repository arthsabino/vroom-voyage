import express from "express";
import { getBranchList } from "../controllers/branchController";

const router = express.Router();

router.get("/", getBranchList);

export default router;
