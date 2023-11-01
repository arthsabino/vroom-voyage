import "dotenv/config";
import express from "express";
import carRoutes from "../routes/carRoutes";
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/car", carRoutes);

app.use((req, res, next) => {
  next(Error("Endpoint not found."));
});

export default app;
