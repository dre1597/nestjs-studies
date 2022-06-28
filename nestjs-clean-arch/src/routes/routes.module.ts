import { Module } from '@nestjs/common';

import { CreateRouteUseCase, ListAllRoutesUseCase } from '../@core/application';
import { RouteRepositoryInterface } from '../@core/domain';
import { RouteInMemoryRepository } from '../@core/infra';
import { RoutesController } from './routes.controller';
import { RoutesService } from './routes.service';

@Module({
  controllers: [RoutesController],
  providers: [
    RoutesService,
    {
      provide: RouteInMemoryRepository,
      useClass: RouteInMemoryRepository,
    },
    {
      provide: CreateRouteUseCase,
      useFactory: (routeRepository: RouteRepositoryInterface) => {
        return new CreateRouteUseCase(routeRepository);
      },
      inject: [RouteInMemoryRepository],
    },
    {
      provide: ListAllRoutesUseCase,
      useFactory: (routeRepository: RouteRepositoryInterface) => {
        return new ListAllRoutesUseCase(routeRepository);
      },
      inject: [RouteInMemoryRepository],
    },
  ],
})
export class RoutesModule {}
