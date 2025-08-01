import { z } from 'zod';

export const userLoginSchema = z.object({
  email: z.string().email('Ongeldig e-mailadres'),
  password: z.string().min(8, 'Wachtwoord moet minimaal 8 tekens bevatten'),
});

export type UserLoginInput = z.infer<typeof userLoginSchema>;
