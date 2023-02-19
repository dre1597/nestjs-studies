import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { hash } from 'argon2';
import { randomUUID } from 'node:crypto';

import { CreateUserDto, CreateUserRO } from '../boundary';
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
    try {
      this.verifyUniqueFields({
        cpf: dto.cpf,
        phone: dto.phone,
        email: dto.email,
      });

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
    } catch (e) {
      if (e instanceof ConflictException) {
        throw e;
      }

      throw new InternalServerErrorException('Internal Server Error.');
    }
  }

  private verifyUniqueFields({
    cpf,
    phone,
    email,
  }: {
    email: string;
    cpf: string;
    phone: string;
  }): void {
    const userAlreadyIn = this._users.find(
      (user) =>
        user.cpf === cpf || user.email === email || user.phone === phone,
    );

    if (userAlreadyIn) {
      if (userAlreadyIn.email === email) {
        throw new ConflictException(`Field email already in use.`);
      } else if (userAlreadyIn.cpf === cpf) {
        throw new ConflictException(`Field cpf already in use.`);
      } else if (userAlreadyIn.phone === phone) {
        throw new ConflictException(`Field phone already in use.`);
      }
    }
  }
}
