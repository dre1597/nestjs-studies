import { Injectable } from '@nestjs/common';

import { CreateUserDto } from '../boundary';
import { CreateUserRO } from '../boundary/create-user.ro';
import { UserRepository } from '../repository';

@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepository) {}

  find(): Promise<CreateUserRO[]> {
    return this.repository.find();
  }
  async create(dto: CreateUserDto): Promise<CreateUserRO> {
    return this.repository.create(dto);
  }
}
