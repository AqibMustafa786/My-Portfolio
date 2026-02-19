<<<<<<< HEAD
import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';

const plugins = [];
if (process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY) {
  plugins.push(googleAI());
}

export const ai = genkit({
  plugins,
=======
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';

export const ai = genkit({
  plugins: [googleAI()],
>>>>>>> 9b17483b1c20511f609e0b2dbbc5b1795e822fb7
  model: 'googleai/gemini-pro',
});
