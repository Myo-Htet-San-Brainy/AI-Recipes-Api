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
        text: "Constraint - You must follow a specific format that I will provide on next prompt as precise as you can for recipes in your answers.",
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
        text: `
        recipe name - name of the recipe
        ingredients - actual ingredients
        instructions - actual instructions
        note - note on how this recipe matches dietary restrictions provided
        a text 'breakpoint' goes here at the end recipe
        `,
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
        text: "Again, the text 'breakpoint' must be included after every recipe.",
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
        text: "Although it is not a must, it is recommended to return two to three recipes for my prompts.",
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
