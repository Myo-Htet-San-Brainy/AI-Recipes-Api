import { generateRecipesHelper } from "../utils/aiHelper.js";

export async function generateRecipes(req, res) {
  const { ingredients, restrictions } = req.body;
  const recipesText = await generateRecipesHelper(ingredients, restrictions);
  res.status(200).json({ data: recipesText });
}

export function generateIngredients(req, res) {
  res.send("some ingredients");
}
