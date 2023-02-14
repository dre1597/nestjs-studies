import { Module } from '@nestjs/common';

import { PrismaService } from '../../shared/database';
import { PrismaStateRepository, StateRepository } from './repository';
import { StateController } from './state.controller';
import { StateService } from './state.service';

@Module({
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
