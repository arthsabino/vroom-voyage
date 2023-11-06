import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import path from "path";
import branchRoutes from "../routes/branchRoutes";
import carRoutes from "../routes/carRoutes";
import rentRoutes from "../routes/rentRoutes";
import travelGuideRoutes from "../routes/travelGuideRoutes";
import env from "./lib/env";
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/cars", carRoutes);
app.use("/api/branch", branchRoutes);
app.use("/api/rent", rentRoutes);
app.use("/api/travelguide", travelGuideRoutes);

const __dirname1 = path.resolve();
if (env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "../frontend/build")));
  app.get("*", (_req: Request, res: Response) => {
    res.sendFile(
      path.resolve(__dirname1, "../", "frontend", "build", "index.html")
    );
  });
} else {
  app.get("/", (req: Request, res: Response) => {
    res.send("API is running");
  });
}

app.use((_, __, next: NextFunction) => {
  next(Error("Endpoint not found."));
});

export default app;
