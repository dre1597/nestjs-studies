import { Module } from '@nestjs/common';

import { PrismaService } from '../database';
import { UserController } from './controller';
import { PrismaUserRepository, UserRepository } from './repository';
import { UserService } from './service';

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
