import express from "express";
import {
  generateIngredients,
  generateRecipes,
} from "../controllers/recipesController.js";

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send("Welcome!");
});
server.use("/api/v1/generateRecipes", generateRecipes);
server.use("/api/v1/generateIngredients", generateIngredients);

export default server;
