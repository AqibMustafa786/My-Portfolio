import { config } from 'dotenv';
// Explicitly load variables from .env.local for development
config({ path: '.env.local' });

import '@/ai/flows/personalized-greeting.ts';
