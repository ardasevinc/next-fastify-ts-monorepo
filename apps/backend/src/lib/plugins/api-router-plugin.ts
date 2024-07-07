import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import helloRoutes from '@/routes/hello-routes.js';

const apiRouter: FastifyPluginAsyncTypebox = async function (fastify, _opts) {
  fastify.register(helloRoutes, { prefix: '/hello' });
};

export default apiRouter;
