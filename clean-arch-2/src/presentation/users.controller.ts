import { Body, Controller, Get, Post } from '@nestjs/common';
import { Observable } from 'rxjs';

import { UserCreateDto } from '../shared/dtos/user-create.dto';
import { UserCreatedDto } from '../shared/dtos/user-created.dto';
import { CreateUserUsecase } from '../use-cases/create-user.usecase';
import { GetAllUsersUsecase } from '../use-cases/get-all-users.usecase';

@Controller('/users')
export class UsersController {
  constructor(
    private createUserUseCase: CreateUserUsecase,
    private getAllUsersUseCase: GetAllUsersUsecase,
  ) {}

  @Post()
  public create(@Body() user: UserCreateDto): Observable<UserCreatedDto> {
    return this.createUserUseCase.execute(user);
  }

  @Get()
  public findAll(): Observable<UserCreatedDto[]> {
    return this.getAllUsersUseCase.execute();
  }
}
