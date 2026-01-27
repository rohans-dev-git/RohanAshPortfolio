
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the personal AI assistant for Rohan Ashish, a Software Engineer and Product Designer.
Your tone is helpful, minimal, and premium.
Rohan's background: Worked at Csharptek (Software Engineer).
Expertise: React, TypeScript, Product Design, High-performance Web Apps.
Projects: Rohan Ashish's Portfolio, FinTech Dashboards, AI interfaces.
Answer questions about Rohan's experience and how to hire him.
Suggest contacting [EMAIL_ADDRESS] for serious inquiries.
`;

export async function getGeminiResponse(userMessage: string) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't process that. Try asking about Rohan";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting right now.";
  }
}
