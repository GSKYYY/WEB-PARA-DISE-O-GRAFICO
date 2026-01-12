import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateDesignPrompt = async (businessName: string, businessType: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an expert Prompt Engineer for AI Image Generation (like Midjourney or Gemini).
      
      Task: Create a highly detailed, professional image generation prompt for a graphic design branding presentation.
      
      Client Info:
      - Name: ${businessName}
      - Type: ${businessType}

      The prompt must describe:
      1. A modern logo visualization placed on a high-quality mockup (business card or wall).
      2. Specific color palette suggestions (mention specific elegant colors).
      3. Lighting (e.g., cinematic lighting, studio lights).
      4. Style keywords (e.g., minimalist, brutalist, high-end, 8k resolution, trending on Behance).
      
      Output ONLY the raw prompt text in English, ready to be pasted into an image generator. Do not add introductory text.`,
      config: {
        thinkingConfig: { thinkingBudget: 0 } 
      }
    });

    return response.text || `Create a professional, modern logo and branding kit for a ${businessType} named ${businessName}. Minimalist style, high contrast, 4k resolution, trending on Behance.`;
  } catch (error) {
    console.error("Error generating prompt:", error);
    // Fallback prompt if API fails
    return `Create a professional, modern logo and branding kit for a ${businessType} named ${businessName}. Minimalist style, high contrast, 4k resolution, trending on Behance.`;
  }
};