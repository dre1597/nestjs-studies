import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateUserDto } from './boundary';
import { CreateUserRO } from './boundary/create-user.ro';
import { UserService } from './user.service';

@Controller('user')
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
