import { EmailSchema, StringSchema } from './common.js';
import { Static, Type } from '@sinclair/typebox';

export const CredentialsSchema = Type.Object({
  email: EmailSchema,
  password: StringSchema,
});

export interface Credentials extends Static<typeof CredentialsSchema> {}

export interface Auth {
  id: number;
  username: string;
  email: string;
  roles: string[];
}
