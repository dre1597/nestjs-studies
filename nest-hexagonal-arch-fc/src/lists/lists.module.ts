import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { HttpModule } from '@nestjs/axios';
import { EventEmitter2 } from '@nestjs/event-emitter';

import { ListsService } from './lists.service';
import { ListsController } from './lists.controller';
import { ListModel } from './entities/list.model';
import { ListRepositorySequelize } from './repositories/list-repository.sequelize';
import { ListRepositoryHttp } from './repositories/list-repository.http';
import { CreateListInCrmListener } from './listeners/create-list-in-crm.listener';

@Module({
  imports: [
    SequelizeModule.forFeature([ListModel]),
    HttpModule.register({
      baseURL: 'http://localhost:8000',
    }),
  ],
  controllers: [ListsController],
  providers: [
    ListsService,
    ListRepositorySequelize,
    ListRepositoryHttp,
    CreateListInCrmListener,
    {
      provide: 'ListPersistenceRepository',
      useExisting: ListRepositorySequelize,
    },
    {
      provide: 'ListIntegrationRepository',
      useExisting: ListRepositoryHttp,
    },
    {
      provide: 'EventEmitter',
      useExisting: EventEmitter2,
    },
  ],
})
export class ListsModule {}
