import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../database';
import { FindAllCitiesByStateRo } from '../boundary';
import { CityRepository } from './city.repository';

@Injectable()
export class PrismaCityRepository implements CityRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findAllByState(stateId: string): Promise<FindAllCitiesByStateRo[]> {
    return this.prismaService.city.findMany({
      where: {
        stateId,
      },
    });
  }
}
