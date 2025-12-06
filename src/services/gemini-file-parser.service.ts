import { PROMPTS } from '../global/constants/prompts';

export class GeminiFileParserService {

  async parse(data: string): Promise<JSON|undefined> {

    const { GoogleGenAI } = await import("@google/genai");
    
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const pdfResp = await fetch(
      "https://firebasestorage.googleapis.com/v0/b/portfolio-fb9ed.appspot.com/o/FACA0000900052532.pdf?alt=media&token=8942a031-d855-4401-b22c-b8e55f0cb139"
    ).then((response) => response.arrayBuffer());

    const contents = [
      { text: PROMPTS.EXTRACT_INVOICE_DATA },
      {
        inlineData: {
          mimeType: "application/pdf",
          data: data,
        },
      },
    ];

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: contents,
      config:{responseMimeType: "application/json"}
    });
    return JSON.parse(response.text || '{}');
  }
}
