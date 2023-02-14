import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../database';
import { FindAllByStateRo } from '../boundary';
import { CityRepository } from './city.repository';

@Injectable()
export class PrismaCityRepository implements CityRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findAllByState(stateId: string): Promise<FindAllByStateRo[]> {
    return this.prismaService.city.findMany({
      where: {
        stateId,
      },
    });
  }
}
