import { User } from '@prisma/client';

export type CreateUserRO = Omit<User, 'password'>;
