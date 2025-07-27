import Fastify, { FastifyReply, FastifyRequest } from 'fastify';

const fastify = Fastify({
  logger: {
    transport: {
      target: "pino-pretty",
    },
  },
});

fastify.get("/api/hello", {
  handler: async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    console.log({ request });

    return reply.code(200).send({message: "Hello boekeroekerts!"});
  },
});

async function main() {
  await fastify.listen({
    port: 8300,
    host: "0.0.0.0",
  });
}

["SIGINT", "SIGTERM"].forEach((signal) => {
  process.on(signal, async () => {
    await fastify.close();

    process.exit(0);
  });
});

void main();

