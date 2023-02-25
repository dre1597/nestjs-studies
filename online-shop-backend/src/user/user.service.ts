import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto';
import { CreateUserRO } from './ro';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepository) {}

  find(): Promise<CreateUserRO[]> {
    return this.repository.find();
  }
  async create(dto: CreateUserDTO): Promise<CreateUserRO> {
    return this.repository.create(dto);
  }
}
