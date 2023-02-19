import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Prisma, User as UserPrismaModel } from '@prisma/client';
import { hash } from 'argon2';

import { PrismaService } from '../../../shared/database';
import { CreateUserDto, CreateUserRO } from '../boundary';
import { USER_ROLES } from '../domain';
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
      role: user.role as USER_ROLES,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    }));
  }

  async create(dto: CreateUserDto): Promise<CreateUserRO> {
    try {
      const createdUser: UserPrismaModel = await this.prismaService.user.create(
        {
          data: {
            ...dto,
            password: await hash(dto.password),
          },
        },
      );

      return {
        id: createdUser.id,
        name: createdUser.name,
        email: createdUser.email,
        cpf: createdUser.cpf,
        phone: createdUser.phone,
        createdAt: createdUser.createdAt,
        updatedAt: createdUser.updatedAt,
      };
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2002'
      ) {
        if (e.meta?.target) {
          throw new ConflictException(
            `Field ${e.meta?.target} already in use.`,
          );
        }
      }
      throw new InternalServerErrorException('Internal Server Error.');
    }
  }
}
