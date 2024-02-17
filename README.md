# ts-kickstart

## Environment variables

Set in

- `.env` - global scope (loaded when importing the workspace `env` package)
- `packages/<package>/.env` - scoped to \<package\>

Parsed in

- `packages/env/index.ts` - type-safe environment variables
