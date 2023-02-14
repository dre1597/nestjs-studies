import { Module } from '@nestjs/common';

import { PrismaService } from '../database';
import { PrismaUserRepository, UserRepository } from './repository';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    PrismaService,
    {
      provide: UserRepository,
      // useClass: InMemoryUserRepository,
      useClass: PrismaUserRepository,
    },
  ],
})
export class UserModule {}
