import { CreateUserDto } from '../boundary';
import { CreateUserRO } from '../boundary/create-user.ro';

export abstract class UserRepository {
  abstract find(): Promise<CreateUserRO[]>;
  abstract create(dto: CreateUserDto): Promise<CreateUserRO>;
}
