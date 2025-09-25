import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey: "AIzaSyCq23SpuqkkwYqvc6_YXw2Qr9ymDZEXzv4"});

export async function askAi(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
     config: {
        systemInstructions: "You are a helpful assistant that responds in a friendly manner.",
     }
   
  });
    

return response.text;
}
