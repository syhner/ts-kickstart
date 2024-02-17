import { drizzle } from 'drizzle-orm/libsql';
import * as moviesSchemas from './schemas/movies';
import { z } from 'zod';

export const schema = { ...moviesSchemas };

import { createClient } from '@libsql/client';
import { env } from 'env';

const config: Parameters<typeof createClient>[0] =
	env.NODE_ENV === 'production'
		? {
				url: z.string().parse(env.DB_URL),
				authToken: env.DB_TOKEN,
		  }
		: {
				url: 'file:drizzle/../../../sqlite.db',
		  };

export const db = drizzle(createClient(config), { schema });
