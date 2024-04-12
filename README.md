This is an api built with express.js and powered by Google GEMINI api.
Using this api, 
1. You can generate recipes by providing ingredients and dietary restrictions.
2. You can generate ingredients by providing an image containing ingredients.

To run the project - 
1. Clone the repo
2. npm i
3. create .env and add GEMINI_API_KEY=YOUR_GEMINI_API_KEY
4. npm run dev

To generate recipes - GET http://localhost:5000/api/v1/generateRecipes 
Requirements for this api
body - {
    "ingredients": "bell pepper carrot onion tomato garlic cucumber olive oil salt flax seed lettuce radicchio cherry tomato",
    "restrictions": "Bulking."
}

To generate ingredients - POST http://localhost:5000/api/v1/generateIngredients
Requirements for this api
- You must upload an image of ingredients to above api using browser client or postman.
- For content-type header, "multipart/form-data" must be provided.
- value of property name of the image must be 'foo'. For eg, when using browser client, input type="file" name="foo" .

