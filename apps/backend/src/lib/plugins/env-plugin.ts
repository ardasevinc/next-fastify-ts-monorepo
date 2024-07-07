import fp from 'fastify-plugin';
import { TEnv, type Env } from '@/lib/schemas/env-schema.js';
import { fastifyEnv, type FastifyEnvOptions } from '@fastify/env';

declare module 'fastify' {
  interface FastifyInstance {
    env: Env;
  }
}

export default fp(
  async function (fastify, _opts) {
    const fastifyEnvOptions = {
      schema: TEnv,
      dotenv: true,
      confKey: 'env',
    } satisfies FastifyEnvOptions;
    await fastify.register(fastifyEnv, fastifyEnvOptions);
  },
  {
    name: 'env-plugin',
  },
);
