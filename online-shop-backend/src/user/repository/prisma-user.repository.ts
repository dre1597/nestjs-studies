import { Injectable } from '@nestjs/common';
import { User as UserPrismaModel } from '@prisma/client';
import { hash } from 'argon2';

import { PrismaService } from '../../database';
import { CreateUserDto } from '../boundary';
import { CreateUserRO } from '../boundary/create-user.ro';
import { UserRepository } from './user.repository';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async find(): Promise<CreateUserRO[]> {
    const users: UserPrismaModel[] = await this.prismaService.user.findMany();

    return users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      cpf: user.cpf,
      phone: user.phone,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    }));
  }
  async create(dto: CreateUserDto): Promise<CreateUserRO> {
    const createdUser: UserPrismaModel = await this.prismaService.user.create({
      data: {
        ...dto,
        password: await hash(dto.password),
      },
    });

    return {
      id: createdUser.id,
      name: createdUser.name,
      email: createdUser.email,
      cpf: createdUser.cpf,
      phone: createdUser.phone,
      createdAt: createdUser.createdAt,
      updatedAt: createdUser.updatedAt,
    };
  }
}
