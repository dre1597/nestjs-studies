import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateUserDTO } from './dto';
import { CreateUserRO } from './ro';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  find(): Promise<CreateUserRO[]> {
    return this.service.find();
  }

  @Post()
  create(@Body() dto: CreateUserDTO): Promise<CreateUserRO> {
    return this.service.create(dto);
  }
}
