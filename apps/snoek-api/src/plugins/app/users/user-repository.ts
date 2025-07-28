import { FastifyInstance } from 'fastify';
import { Knex } from 'knex';

declare module 'fastify' {
  interface FastifyInstance {
    usersRepository: ReturnType<typeof createUsersRepository>;
  }
}

export function createUsersRepository(fastify: FastifyInstance) {
  const knex = fastify.knex;

  return {
    async findByEmail (email: string, trx?: Knex) {
      const user: Auth & { password: string } = await (trx ?? knex)('users')
        .select('id', 'username', 'password', 'email')
        .where({ email })
        .first()

      return user
    }
  }
}
