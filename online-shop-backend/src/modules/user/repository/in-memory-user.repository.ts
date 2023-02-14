import { Injectable } from '@nestjs/common';
import { hash } from 'argon2';
import { randomUUID } from 'node:crypto';

import { CreateUserDto } from '../boundary';
import { CreateUserRO } from '../boundary/create-user.ro';
import { UserEntity } from '../domain';
import { UserRepository } from './user.repository';

@Injectable()
export class InMemoryUserRepository implements UserRepository {
  private _users: UserEntity[] = [];

  async find(): Promise<CreateUserRO[]> {
    return this._users.map((user) => {
      delete user.password;
      return user;
    });
  }

  async create(dto: CreateUserDto): Promise<CreateUserRO> {
    const newUser: UserEntity = {
      ...dto,
      id: randomUUID(),
      password: await hash(dto.password),
      role: 'USER',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this._users.push(newUser);

    delete newUser.password;
    delete newUser.role;

    return newUser;
  }
}
