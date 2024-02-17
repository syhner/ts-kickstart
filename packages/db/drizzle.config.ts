import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	schema: './schemas/*.ts',
	out: './migrations',
	driver: 'better-sqlite',
	dbCredentials: { url: 'sqlite.db' },
	strict: true,
});
