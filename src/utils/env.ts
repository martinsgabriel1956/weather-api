import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
  API_PORT: z.coerce.number().default(3333),
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
});

export const _env = envSchema.safeParse(process.env);

if(!_env.success) {
  console.error(`${_env.error.format()}\n`);
  throw new Error('Invalid environment variables');
}

export const env = _env.data;

