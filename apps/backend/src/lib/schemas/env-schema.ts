import { Static, Type } from '@fastify/type-provider-typebox';

const TEnv = Type.Object(
  {
    PORT: Type.Number({ default: 3006 }),
    NODE_ENV: Type.Union([
      Type.Literal('production'),
      Type.Literal('development'),
      Type.Literal('test'),
    ]),
    REDIS_HOST: Type.String(),
    REDIS_PORT: Type.Integer(),
    POSTGRES_DB_NAME: Type.String(),
    POSTGRES_USER: Type.String(),
    POSTGRES_PASS: Type.String(),
  },
  { additionalProperties: false, $id: 'schema:env' },
);

type Env = Static<typeof TEnv>;

export { TEnv, type Env };
