import { Controller, Get, Param } from '@nestjs/common';

import { CustomCacheService } from '../../shared/custom-cache/custom-cache.service';
import { FindAllCitiesByStateRo } from './boundary';
import { CityService } from './city.service';

@Controller('city')
export class CityController {
  constructor(
    private readonly cityService: CityService,
    private readonly cacheService: CustomCacheService,
  ) {}

  @Get('/:stateId')
  async findAllByState(
    @Param('stateId') stateId: string,
  ): Promise<FindAllCitiesByStateRo[]> {
    return this.cacheService.getCache<FindAllCitiesByStateRo[]>(
      `state_${stateId}`,
      () => this.cityService.findAllByState(stateId),
    );
  }
}
