import express from "express";
import path from "path";
import app from "./app";
import env from "./lib/env";

const __dirname1 = path.resolve();
if (env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"));
  });
} else {
  app.listen(env.PORT, () => {
    console.log("Server running on port: " + env.PORT);
  });
}
