# ts-kickstart

## Getting started

Install dependencies

```sh
bun install
```

Run the `dev` script in all packages where it exists

```sh
bun run all:dev
```

## Environment variables

Any environment variables in `packages/<package>/.env` are available to the package, thanks to Bun

### Global environment variables

Add the workspace `env` package

```diff
  "dependencies": {
+   "env": "workspace:*"
  }
```

Install the new dependency

```sh
bun install
```

Set environment variables in `.env` (at the repository root) which will be available in all packages where this is configured

```properties
PORT=3000
```

### Type-safe environment variables

**Pre-requisite: Global environment variables are configured in the package**

Modify schema in [packages/env/index.ts](`packages/env/index.ts`)

```ts
const envSchema = z.object({
  PORT: z.coerce.number().default(3000),
});
```

Import environment variables

```ts
import { env } from 'env';
const PORT = env.PORT; // PORT = number
```
