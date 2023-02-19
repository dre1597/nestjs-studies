import { CreateUserDto, CreateUserRO } from '../boundary';

export abstract class UserRepository {
  abstract find(): Promise<CreateUserRO[]>;
  abstract create(dto: CreateUserDto): Promise<CreateUserRO>;
}
