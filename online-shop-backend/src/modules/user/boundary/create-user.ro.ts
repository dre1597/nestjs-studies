import { UserEntity } from '../domain';

export type CreateUserRO = Omit<UserEntity, 'password'>;
