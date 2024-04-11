const history = [
  {
    role: "user",
    parts: [
      {
        text: "Hello, from now on, I will give you ingredients and dietary restrictions on my next prompts. Task to perform - You must answer me recipes that suit the provided ingredients and dietary restrictions.",
      },
    ],
  },
  {
    role: "model",
    parts: [
      {
        text: "OK.",
      },
    ],
  },
  {
    role: "user",
    parts: [
      {
        text: "Constraint - You must follow a specific format that I will provide on next prompt as precise as you can for your answers. You must include keywords like recipe title, ingredients, Instructions, note.",
      },
    ],
  },
  {
    role: "model",
    parts: [
      {
        text: "OK.",
      },
    ],
  },
  {
    role: "user",
    parts: [
      {
        text: "Here is format for your answers. Recipe title - Name of the recipe, Ingredients - Ingredients for the recipe. Instructions - Instructions for the recipe. Note - How recipe matches the dietary restrictions provided.",
      },
    ],
  },
  {
    role: "model",
    parts: [
      {
        text: "OK.",
      },
    ],
  },
  {
    role: "user",
    parts: [
      {
        text: "If you can not provide the answer for any(any) reason, you must response 'Sorry, I can't seem to find any recipes.'.",
      },
    ],
  },
  {
    role: "model",
    parts: [
      {
        text: "OK.",
      },
    ],
  },
];

module.exports = history;
