# ts-kickstart

## Getting started

Install dependencies with [Bun](https://bun.sh), then run the `dev` script in all packages (where a `dev` script exists)

```sh
bun install
bun run all:dev
```

## Default packages

```
.
└── packages/     - Any new projects belong here
    ├── add/      - Package configured to be published to npm
    ├── db/       - Database schemas and scripts
    ├── elysiajs/ - Backend with ElysiaJS (full-stack framework)
    ├── env/      - Type-safe environment variables
    └── nextjs/   - Frontend with Next.js (full-stack framework)
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
