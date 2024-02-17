import { Database } from 'bun:sqlite';
import { drizzle as drizzleBunSqlite } from 'drizzle-orm/bun-sqlite';
import { drizzle as drizzleLibSql } from 'drizzle-orm/libsql';
import { z } from 'zod';
import * as moviesSchemas from './schemas/movies';

export const schema = { ...moviesSchemas };

import { createClient } from '@libsql/client';
import { env } from 'env';

export const db =
	env.NODE_ENV === 'production'
		? drizzleLibSql(
				createClient({
					url: z.string().parse(env.DB_URL),
					authToken: env.DB_TOKEN,
				}),
				{ schema },
		  )
		: drizzleBunSqlite(new Database(env.DB_URL), {
				schema,
		  });
