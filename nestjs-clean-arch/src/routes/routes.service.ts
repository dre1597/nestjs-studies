import { Injectable } from '@nestjs/common';

import { CreateRouteUseCase, ListAllRoutesUseCase } from '../@core/application';
import { CreateRouteDto } from './dto/create-route.dto';

@Injectable()
export class RoutesService {
  constructor(
    private createRouteUseCase: CreateRouteUseCase,
    private listAllRoutesUseCase: ListAllRoutesUseCase,
  ) {}

  create(createRouteDto: CreateRouteDto) {
    return this.createRouteUseCase.execute(createRouteDto);
  }

  findAll() {
    return this.listAllRoutesUseCase.execute();
  }
}
