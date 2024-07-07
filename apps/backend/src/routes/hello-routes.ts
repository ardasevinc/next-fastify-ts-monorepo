import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';

const helloRoutes: FastifyPluginAsyncTypebox = async function (fastify, _opts) {
  fastify.get('/', async function (req, reply) {
    return { hello: 'true' };
  });
};

export default helloRoutes;
