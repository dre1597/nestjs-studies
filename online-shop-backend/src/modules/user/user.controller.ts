import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateUserDto, CreateUserRO } from './boundary';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  find(): Promise<CreateUserRO[]> {
    return this.service.find();
  }

  @Post()
  create(@Body() dto: CreateUserDto): Promise<CreateUserRO> {
    return this.service.create(dto);
  }
}
