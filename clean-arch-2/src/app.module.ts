import { Module } from '@nestjs/common';

import { UserRepository } from './core/repositories/user.repository';
import { UsersCacheMemoryRepository } from './data/cache-memory/users-cache-memory.repository';
import { UsersController } from './presentation/users.controller';
import { CreateUserUsecase } from './use-cases/create-user.usecase';
import { GetAllUsersUsecase } from './use-cases/get-all-users.usecase';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [
    { provide: UserRepository, useClass: UsersCacheMemoryRepository },
    CreateUserUsecase,
    GetAllUsersUsecase,
  ],
})
export class AppModule {}
