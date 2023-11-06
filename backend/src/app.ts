import "dotenv/config";
import express, { NextFunction } from "express";
import branchRoutes from "../routes/branchRoutes";
import carRoutes from "../routes/carRoutes";
import rentRoutes from "../routes/rentRoutes";
import travelGuideRoutes from "../routes/travelGuideRoutes";
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/cars", carRoutes);
app.use("/api/branch", branchRoutes);
app.use("/api/rent", rentRoutes);
app.use("/api/travelguide", travelGuideRoutes);

app.use((_, __, next: NextFunction) => {
  next(Error("Endpoint not found."));
});

export default app;
