import { defineConfig } from 'drizzle-kit';
import { env } from 'env';
import { z } from 'zod';

export default defineConfig({
	schema: './schemas/*.ts',
	out: './migrations',
	driver: env.NODE_ENV === 'production' ? 'turso' : 'better-sqlite',
	dbCredentials: {
		url: env.DB_URL,
		authToken:
			env.NODE_ENV === 'production'
				? z.string().parse(env.DB_TOKEN)
				: undefined,
	},
	strict: true,
});
