import dotenv from 'dotenv';
import { z } from 'zod';

// Load environment variables from .env (at repository root)
dotenv.config({ path: '../../.env' });

const envSchema = z.object({
	PORT: z.coerce.number().default(3000),
});

export const env = {
	...process.env,
	...envSchema.parse(process.env),
} as NodeJS.ProcessEnv & z.infer<typeof envSchema>;
