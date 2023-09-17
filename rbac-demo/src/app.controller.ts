import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as crypto from 'crypto';

import { Roles } from './decorators/roles.decorator';

import { RoleGuard } from './guards/role.guard';
import { AuthGuard } from './guards/auth.guard';
import { Role } from './enums/role.enum';

@Controller()
export class AppController {
  constructor(private readonly jwtService: JwtService) {}

  @Get('admin')
  @Roles(Role.ADMIN) // attaching metadata
  @UseGuards(AuthGuard, RoleGuard) // implementing the guards
  async adminOnlyEndpoint() {
    return 'Welcome admin';
  }

  @Get('user-moderator')
  @Roles(Role.USER, Role.MODERATOR) // Both users and moderators can access this handler
  @UseGuards(AuthGuard, RoleGuard) // Of course, admin can also access this endpoint as admin has higher privelege than both
  async userModeratorEndpoint() {
    return 'Welcome user or moderator';
  }

  @Get('generate-token')
  async generateToken(@Query('role') role: Role) {
    const token = this.jwtService.sign(
      { id: crypto.randomUUID(), role },
      { secret: process.env.JWT_SECRET, expiresIn: '1w' },
    );

    return { token };
  }
}
