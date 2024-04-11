require("dotenv").config();
const fs = require("fs");
const history = require("./history.cjs");
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function textRun(prompt) {
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
  console.log("textRun response:", response);
  return response.text();
}

// Converts local file information to a GoogleGenerativeAI.Part object.
function fileToGenerativePart(path, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType,
    },
  };
}

async function imageRun() {
  // For text-and-image input (multimodal), use the gemini-pro-vision model
  const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

  const prompt = "Give me ingredients from the provided image.";

  const result = await model.generateContent([
    prompt,
    fileToGenerativePart("image1.png", "image/png"),
  ]);
  const response = await result.response;
  console.log("imageRun response:", response);
  return response.text();
}

module.exports = {
  textRun,
  imageRun,
};
