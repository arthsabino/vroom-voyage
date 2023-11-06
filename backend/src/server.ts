import { Request, Response } from "express";
import app from "./app";
import env from "./lib/env";
if (env.NODE_ENV !== "production") {
  app.get("/", (req: Request, res: Response) => {
    res.send("API is running");
  });
}

app.listen(env.PORT, () => {
  console.log("Server running on port: " + env.PORT);
});
