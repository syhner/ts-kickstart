import { Elysia } from 'elysia';
import { db, schema } from 'packages/db';
import { logger } from 'packages/logger';
import { env } from 'packages/env';

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
