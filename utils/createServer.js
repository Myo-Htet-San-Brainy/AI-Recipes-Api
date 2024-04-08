import express from "express";
const server = express();

import recipesRouter from "../routers/recipesRouter.js";

server.use(express.json());

server.get("/", (req, res) => {
  res.send("Welcome!");
});
server.use("/api/v1/generateRecipes", recipesRouter);

export default server;
