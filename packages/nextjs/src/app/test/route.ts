import { env } from 'env';

export const GET = async () => {
	const debug = {
		NODE_ENV: env.NODE_ENV,
		DB_URL: env.DB_URL,
		NEXT_RUNTIME: env.NEXT_RUNTIME,
	};

	return Response.json(debug);
};
