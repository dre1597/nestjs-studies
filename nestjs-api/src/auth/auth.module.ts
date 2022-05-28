import { Module } from '@nestjs/common';
import { JwtStrategyService } from './strategy/jwt-strategy.service';

@Module({
  providers: [JwtStrategyService],
})
export class AuthModule {}
