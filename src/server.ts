import fastify from 'fastify';
import { env } from './utils/env.js';

const app = fastify();

// Declare a route
app.get('/', async function handler (request, reply) {
  return { hello: 'world' }
})

try {
  await app.listen({ port: env.API_PORT });
  console.log(`server listening on ${env.API_PORT}`);
} catch (error) {
  app.log.error(error);
  process.exit(1);
}
