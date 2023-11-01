import { Body, Controller, Headers, Post, UseGuards } from '@nestjs/common';

import { UsersService } from '../users/users.service';
import { RegisterUserDto } from '../users/dto/register-user.dto';

import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { SignInDto } from './dto/sign-in.dto';
import { JwtRefreshTokenGuard } from './guards/jwt-refresh-token.guard';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Post('sign-up')
  async signup(@Body() dto: RegisterUserDto) {
    return this.usersService.create(dto);
  }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('sign-in')
  async signIn(@Body() dto: SignInDto) {
    return this.authService.signIn(dto);
  }

  @UseGuards(JwtRefreshTokenGuard)
  @Post('refresh-token')
  async refreshToken(@Body() refreshTokenDto: RefreshTokenDto) {
    return this.authService.refreshAccessToken(refreshTokenDto.refreshToken);
  }

  @UseGuards(JwtAuthGuard)
  @Post('invalidate-token')
  async invalidateToken(@Headers('authorization') authorization: string) {
    const token = authorization.split(' ')[1];
    await this.authService.invalidateToken(token);
    return { message: 'Token invalidated successfully' };
  }
}
