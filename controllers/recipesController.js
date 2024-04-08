export function generateRecipes(req, res) {
  const { ingredients, restrictions } = req.body;

  res.send("some recipes");
}

export function generateRecipesWithImageInput(req, res) {
  res.send("some recipes generated from ingredients of image");
}
