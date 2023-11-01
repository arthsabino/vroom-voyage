import "dotenv/config";
import express from "express";
import carRoutes from "../routes/carRoutes";
import locationRoutes from "../routes/locationRoutes";
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/cars", carRoutes);
app.use("/api/locations", locationRoutes);

app.use((req, res, next) => {
  next(Error("Endpoint not found."));
});

export default app;
