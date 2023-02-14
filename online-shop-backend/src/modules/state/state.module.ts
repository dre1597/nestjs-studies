import { Module } from '@nestjs/common';
import { CustomCacheModule } from '../../shared/custom-cache/custom-cache.module';

import { PrismaService } from '../../shared/database';
import { PrismaStateRepository, StateRepository } from './repository';
import { StateController } from './state.controller';
import { StateService } from './state.service';

@Module({
  imports: [CustomCacheModule],
  controllers: [StateController],
  providers: [
    StateService,
    PrismaService,
    {
      provide: StateRepository,
      useClass: PrismaStateRepository,
    },
  ],
})
export class StateModule {}
