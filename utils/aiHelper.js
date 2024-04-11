import { run } from "./ai.cjs";

export async function generateRecipesHelper(ingredients, restrictions) {
  const formattedPrompt = `These are ingredients - ${ingredients}. These are dietary restrictions - ${restrictions}. Is there any recipe you can provide?`;
  const output = await run(formattedPrompt);
  return output;
}
