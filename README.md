# Next Fastify Typescript Monorepo

This is an *opinionated* full-stack, modern, pure ESM monorepo template that
I use for my apps

## Recipe

## Requirements

- pnpm >= 9
- node >= 20
- bun >= 1

## Ingredients

- Next.js latest
- Typescript
- Fastify
    + graceful shutdown
    + barebones route and plugin managemement
    + pure esm with typescript
    + validation with typebox & fastify-type-provider-typebox
- monorepo through pnpm workspaces
- provided example .env & docker-compose setup

### Instructions

**for docker compose**

- use .env files in each app (web, backend)
- make sure to fill the fielf `env_file` of each docker service
with the respective .env file path


