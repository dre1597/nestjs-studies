import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';

import { SignInDto } from './dto/sign-in.dto';
import { User } from '../users/entity/users.entity';
import { UsersService } from '../users/users.service';
import { RefreshTokenIdsStorage } from './refresh-token-ids-storage';

@Injectable()
@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    @InjectRepository(User)
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
    private readonly refreshTokenIdsStorage: RefreshTokenIdsStorage,
  ) {}

  async signIn(signInDto: SignInDto) {
    const user = await this.validateUser(
      signInDto.username,
      signInDto.password,
    );

    if (!user) {
      throw new UnauthorizedException('Invalid username or password');
    }

    const payload = { sub: user.id, username: user.username };
    const accessToken = await this.jwtService.signAsync(payload);
    const refreshToken = await this.jwtService.signAsync(payload, {
      expiresIn: '1d',
    });

    // Store the refresh token in redis
    await this.refreshTokenIdsStorage.insert(user.id, refreshToken);

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);
    if (user && (await user.validatePassword(password))) {
      const { password: _, ...result } = user;
      return result;
    }
    return null;
  }

  async refreshAccessToken(
    refreshToken: string,
  ): Promise<{ access_token: string }> {
    try {
      const decoded = await this.jwtService.verifyAsync(refreshToken);
      await this.refreshTokenIdsStorage.validate(decoded.sub, refreshToken);
      const payload = { sub: decoded.sub, username: decoded.username };
      const accessToken = await this.jwtService.signAsync(payload);
      return { access_token: accessToken };
    } catch (error) {
      this.logger.error(`Error: ${error.message}`);
      throw new UnauthorizedException('Invalid refresh token');
    }
  }

  async invalidateToken(accessToken: string): Promise<void> {
    try {
      const decoded = await this.jwtService.verifyAsync(accessToken);
      await this.refreshTokenIdsStorage.invalidate(decoded.sub);
    } catch (error) {
      throw new UnauthorizedException('Invalid access token');
    }
  }
}
