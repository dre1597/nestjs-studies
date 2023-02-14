import { Module } from '@nestjs/common';

import { PrismaService } from '../database';
import { StateController } from './controller';
import { PrismaStateRepository, StateRepository } from './repository';
import { StateService } from './service';

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
