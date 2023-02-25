import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { hash } from 'argon2';

import { PrismaService } from '../database/prisma.service';
import { CreateUserDTO } from './dto';
import { CreateUserRO } from './ro';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async find(): Promise<CreateUserRO[]> {
    const users: User[] = await this.prismaService.user.findMany();

    return users.map((user) => {
      delete user.password;
      return user;
    });
  }

  async create(dto: CreateUserDTO): Promise<CreateUserRO> {
    const user = await this.prismaService.user.create({
      data: {
        ...dto,
        password: await hash(dto.password),
      },
    });

    delete user.password;

    return user;
  }
}
