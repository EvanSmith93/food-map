import express from "express";
import { z } from "zod";
import OpenAI from "openai";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const Schema = z.object({
  ingredients: z.array(z.string()),
  recipe: z.string(),
});

app.post("/api/recipe", async (req, res) => {
  const data = Schema.parse(req.body);

  const prompt = `I have provided you with a historic recipe as well as 1 or more ingredients. 
  I want you do adapt the recipe to include the listed ingredients. 
  Feel free to be creative with your adaptation and include some other ingredients or processes in addition to what's in the original recipe or in the list of ingredients. 
  You also do not have to keep all of the original ingredients, although you can if you wish. 
  Respond with just the single recipe in a paragraph form. 
  Do not start or end your response with any extra text such as "Okay here is the recipe". 
  [HISTORIC RECIPE]: ${data.recipe} 
  [INGREDIENTS]: ${data.ingredients.join(", ")}.`;

  const response = await client.responses.create({
    model: "gpt-4.1-nano-2025-04-14",
    input: prompt,
  });

  res.send({ text: response.output_text });
});

const port = 3001;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
