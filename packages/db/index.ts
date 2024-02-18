import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { env } from 'env';
import { z } from 'zod';
import * as moviesSchemas from './schemas/movies';

export const schema = { ...moviesSchemas };

const config: Parameters<typeof createClient>[0] =
	env.NODE_ENV === 'production' || env.NEXT_RUNTIME === 'edge'
		? {
				url: z.string().parse(env.DB_URL),
				authToken: env.DB_TOKEN,
		  }
		: {
				url: 'file:drizzle/../../../sqlite.db',
		  };

export const db = drizzle(createClient(config), { schema });
