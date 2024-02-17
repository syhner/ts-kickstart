import dotenv from 'dotenv';
import { z } from 'zod';

// Load environment variables from .env (at repository root)
dotenv.config({ path: '../../.env' });

const envSchema = z.object({
	PORT: z.coerce.number().default(3001), // used by packages/elysiajs
	DB_URL: z.string().default(`${__dirname}/../../sqlite.db`), // sqlite.db at the repository root
});

export const env = {
	...process.env,
	...envSchema.parse(process.env),
} as NodeJS.ProcessEnv & z.infer<typeof envSchema>;
