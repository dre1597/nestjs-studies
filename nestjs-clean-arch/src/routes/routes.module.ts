import { Module } from '@nestjs/common';
import { TypeOrmModule, getDataSourceToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

import { CreateRouteUseCase, ListAllRoutesUseCase } from '../@core/application';
import { Route, RouteRepositoryInterface } from '../@core/domain';
import {
  RouteInMemoryRepository,
  RouteSchema,
  RouteTypeOrmRepository,
} from '../@core/infra';
import { RoutesController } from './routes.controller';
import { RoutesService } from './routes.service';

@Module({
  imports: [TypeOrmModule.forFeature([RouteSchema])],
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
      inject: [RouteTypeOrmRepository],
    },
    {
      provide: ListAllRoutesUseCase,
      useFactory: (routeRepository: RouteRepositoryInterface) => {
        return new ListAllRoutesUseCase(routeRepository);
      },
      inject: [RouteTypeOrmRepository],
    },
    {
      provide: RouteTypeOrmRepository,
      useFactory: (dataSource: DataSource) => {
        const repository = dataSource.getRepository(Route);
        return new RouteTypeOrmRepository(repository);
      },
      inject: [getDataSourceToken()],
    },
  ],
})
export class RoutesModule {}
