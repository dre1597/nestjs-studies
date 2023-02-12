import { UserEntity } from '../entity';

export type CreateUserRO = Omit<UserEntity, 'password'>;
