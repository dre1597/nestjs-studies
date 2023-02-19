import { UserEntity } from './user.entity';

export abstract class UserRepository {
  abstract find(): Promise<UserEntity[]>;
  abstract create(user: UserEntity): Promise<UserEntity>;
}
