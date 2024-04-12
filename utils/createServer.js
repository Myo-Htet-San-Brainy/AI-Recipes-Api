import express from "express";
import {
  generateIngredients,
  generateRecipes,
} from "../controllers/recipesController.js";
import errorHandlerMiddleware from "../middleware/errorHandlerMiddleware.js";
import fileUpload from "express-fileupload";

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send("Welcome!");
});
server.get("/api/v1/generateRecipes", generateRecipes);
server.post(
  "/api/v1/generateIngredients",
  fileUpload({
    useTempFiles: true,
  }),
  generateIngredients
);

server.use(errorHandlerMiddleware);

export default server;
