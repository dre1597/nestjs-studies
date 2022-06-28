import { Injectable } from '@nestjs/common';

import { CreateRouteUseCase, ListAllRoutesUseCase } from '../@core/application';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';

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

  findOne(id: number) {
    return `This action returns a #${id} route`;
  }

  update(id: number, updateRouteDto: UpdateRouteDto) {
    return `This action updates a #${id} route`;
  }

  remove(id: number) {
    return `This action removes a #${id} route`;
  }
}
