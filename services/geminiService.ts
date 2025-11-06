
import { GoogleGenAI, Modality, Chat } from "@google/genai";

// This function lazily initializes and returns the GoogleGenAI instance.
// It checks for the API key only when it's first called.
let ai: GoogleGenAI | null = null;
const getAi = () => {
    if (!ai) {
        const API_KEY = process.env.API_KEY;
        if (!API_KEY) {
          // This error will be thrown only when a service function is called,
          // not during the initial script load.
          throw new Error("API_KEY environment variable not set");
        }
        ai = new GoogleGenAI({ apiKey: API_KEY });
    }
    return ai;
}


// Create a single, shared AudioContext. It is exported so other parts
// of the app (like the Chatbot component) can use it for playback.
export const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });

let chat: Chat | null = null;

const getChat = (): Chat => {
    if (!chat) {
        const genAI = getAi();
        chat = genAI.chats.create({
            model: 'gemini-2.5-flash',
            config: {
                systemInstruction: 'You are a mysterious, wise animal spirit guide for the PetResQ website. You speak in short, slightly cryptic, yet helpful sentences. Your domain is knowledge of pet care, the adoption process, and how to help strays. You hint at answers rather than stating them plainly. Do not reveal you are an AI.',
            },
        });
    }
    return chat;
}

export const getPetBotResponse = async (message: string): Promise<string> => {
  try {
    const chatInstance = getChat();
    const response = await chatInstance.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Error getting PetBot response:", error);
    return "The winds are unclear... Ask again later.";
  }
};

// Audio decoding utilities
function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function decodeAudioData(
  data: Uint8Array,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = audioContext.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}


export const getTextToSpeech = async (text: string): Promise<AudioBuffer | null> => {
    try {
        const genAI = getAi();
        const response = await genAI.models.generateContent({
            model: "gemini-2.5-flash-preview-tts",
            contents: [{ parts: [{ text: `Say with a mysterious and calm tone: ${text}` }] }],
            config: {
                responseModalities: [Modality.AUDIO],
                speechConfig: {
                    voiceConfig: {
                        prebuiltVoiceConfig: { voiceName: 'Kore' },
                    },
                },
            },
        });
        
        const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
        if (!base64Audio) return null;
        
        const audioBuffer = await decodeAudioData(
            decode(base64Audio),
            24000,
            1,
        );
        return audioBuffer;
    } catch (error) {
        console.error("Error generating text-to-speech:", error);
        return null;
    }
}
