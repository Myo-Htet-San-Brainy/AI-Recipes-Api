import express from "express";
import { generateRecipes } from "../controllers/recipesController.js";

const router = express.Router();

router.get("/", generateRecipes);

export default router;
