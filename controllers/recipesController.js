import { imageRun } from "../utils/ai.cjs";
import { generateRecipesHelper } from "../utils/aiHelper.js";
import aiResponseParser from "../utils/aiResponseParser.js";

export async function generateRecipes(req, res, next) {
  try {
    const { ingredients, restrictions } = req.body;
    const recipesText = await generateRecipesHelper(ingredients, restrictions);
    const recipes = aiResponseParser(recipesText);
    res.status(200).json({ data: recipes });
  } catch (error) {
    next(error);
  }
}

export async function generateIngredients(req, res, next) {
  try {
    const ingredients = await imageRun(req.files.foo);
    res.status(200).json({ data: ingredients });
  } catch (error) {
    next(error);
  }
}
