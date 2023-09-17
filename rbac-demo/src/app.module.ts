import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

import { AppController } from './app.controller';
import { AccessControlService } from './shared/access-control.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [JwtService, AccessControlService],
})
export class AppModule {}
