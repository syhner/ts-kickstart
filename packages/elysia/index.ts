import { Elysia } from 'elysia';
import { db, schema } from 'db';
import { env } from 'env';
import { logger } from 'logger';

export const server = new Elysia()
	.get('/', () => 'Hi from Elysia')
	.get('/movies', async () => {
		const movies = await db.select().from(schema.movies);
		return movies;
	});

server.listen(env.PORT, ({ hostname, port }) => {
	const url = env.NODE_ENV === 'production' ? 'https' : 'http';
	logger.info(`Elysia is running at ${url}://${hostname}:${port}`);
});
