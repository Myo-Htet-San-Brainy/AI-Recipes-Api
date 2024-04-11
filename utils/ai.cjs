require("dotenv").config();
const history = require("./history.cjs");
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function run(prompt) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const chat = model.startChat({
    history: history,
    generationConfig: {
      maxOutputTokens: 5000,
    },
  });
  const result = await chat.sendMessage(prompt);
  const response = await result.response;
  console.log("response:", response);
  return response.text();
}

module.exports = {
  run,
};
