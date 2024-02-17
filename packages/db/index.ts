import { drizzle } from 'drizzle-orm/bun-sqlite';
import { Database } from 'bun:sqlite';
import * as moviesSchemas from './schemas/movies';

export const schema = { ...moviesSchemas };

const sqlite = new Database('../db/sqlite.db');
export const db = drizzle(sqlite, { schema });
