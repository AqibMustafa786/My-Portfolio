'use server';
/**
 * @fileOverview A personalized greeting AI agent.
 *
 * - personalizedGreeting - A function that handles the personalized greeting process.
 * - PersonalizedGreetingInput - The input type for the personalizedGreeting function.
 * - PersonalizedGreetingOutput - The return type for the personalizedGreeting function.
 */

<<<<<<< HEAD
import { ai } from '@/ai/genkit';
import { z } from 'genkit';
=======
import {ai} from '@/ai/genkit';
import {z} from 'genkit';
>>>>>>> 9b17483b1c20511f609e0b2dbbc5b1795e822fb7

const PersonalizedGreetingInputSchema = z.object({
  browsingHistory: z
    .string()
    .describe('The browsing history of the user, if available.')
    .optional(),
});
export type PersonalizedGreetingInput = z.infer<typeof PersonalizedGreetingInputSchema>;

const PersonalizedGreetingOutputSchema = z.object({
  greeting: z.string().describe('The personalized greeting for the user.'),
});
export type PersonalizedGreetingOutput = z.infer<typeof PersonalizedGreetingOutputSchema>;

export async function personalizedGreeting(input: PersonalizedGreetingInput): Promise<PersonalizedGreetingOutput> {
  return personalizedGreetingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedGreetingPrompt',
<<<<<<< HEAD
  input: { schema: PersonalizedGreetingInputSchema },
  output: { schema: PersonalizedGreetingOutputSchema },
=======
  input: {schema: PersonalizedGreetingInputSchema},
  output: {schema: PersonalizedGreetingOutputSchema},
>>>>>>> 9b17483b1c20511f609e0b2dbbc5b1795e822fb7
  prompt: `You are a friendly portfolio website assistant. You will generate a personalized greeting for the user based on their browsing history.

  If the user has a browsing history, use it to create a personalized greeting. Otherwise, use a default greeting like "Welcome to my portfolio!".

  Browsing History: {{{browsingHistory}}}
  `,
});

const personalizedGreetingFlow = ai.defineFlow(
  {
    name: 'personalizedGreetingFlow',
    inputSchema: PersonalizedGreetingInputSchema,
    outputSchema: PersonalizedGreetingOutputSchema,
  },
  async input => {
<<<<<<< HEAD
    try {
      if (!process.env.GOOGLE_API_KEY && !process.env.GEMINI_API_KEY) {
        return { greeting: "Welcome to my portfolio!" };
      }
      const { output } = await prompt(input);
      return output!;
    } catch (error) {
      console.warn("AI Greeting failed, falling back to default:", error);
      return { greeting: "Welcome to my portfolio!" };
    }
=======
    const {output} = await prompt(input);
    return output!;
>>>>>>> 9b17483b1c20511f609e0b2dbbc5b1795e822fb7
  }
);
