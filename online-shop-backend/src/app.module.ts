import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AddressModule } from './modules/address/address.module';
import { CityModule } from './modules/city/city.module';
import { StateModule } from './modules/state/state.module';
import { UserModule } from './modules/user/user.module';
import { PrismaModule } from './shared/database/prisma.module';

@Module({
  imports: [UserModule, CityModule, StateModule, AddressModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
