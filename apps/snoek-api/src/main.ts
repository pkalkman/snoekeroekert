import Fastify from 'fastify';
import cors from '@fastify/cors';
import { type UserLoginInput, userLoginSchema } from '@pkit/schemas';
import { serializerCompiler, validatorCompiler, ZodTypeProvider } from 'fastify-type-provider-zod';

const app = Fastify().withTypeProvider<ZodTypeProvider>();

// Add schema validator and serializer
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(cors, { origin: true });

app.post(
  '/login',
  {
    schema: {
      body: userLoginSchema,
      response: {
        200: userLoginSchema, // voorbeeld: echo terug
        401: zodUnauthorizedResponse(),
      },
    },
  },
  async (req, reply) => {
    // req.body is nu automatisch getypeerd
    const { email, password } = req.body as UserLoginInput;

    if (email === 'test@example.com' && password === '12345678') {
      return { email, password };
    }

    return reply.status(401).send({ error: 'Invalid credentials' });
  },
);

// Helper voor 401 response schema
function zodUnauthorizedResponse() {
  return import('zod').then(({ z }) =>
    z.object({
      success: z.literal(false),
      message: z.string(),
    }),
  );
}

app.listen({ port: 8350 }).then(() => {
  console.log('🚀 API running on http://localhost:8350');
});
