import { generateRecipesHelper } from "../utils/aiHelper.js";

export async function generateRecipes(req, res, next) {
  try {
    const { ingredients, restrictions } = req.body;
    const recipesText = await generateRecipesHelper(ingredients, restrictions);
    res.status(200).json({ data: recipesText });
  } catch (error) {
    next(error);
  }
}

export function generateIngredients(req, res, next) {
  res.send("some ingredients");
}
