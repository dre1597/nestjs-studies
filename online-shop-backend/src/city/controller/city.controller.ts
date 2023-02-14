import { Controller, Get, Param } from '@nestjs/common';

import { CustomCacheService } from '../../custom-cache/custom-cache.service';
import { FindAllByStateRo } from '../boundary';
import { CityService } from '../service';

@Controller('city')
export class CityController {
  constructor(
    private readonly cityService: CityService,
    private readonly cacheService: CustomCacheService,
  ) {}

  @Get('/:stateId')
  async findAllByState(
    @Param('stateId') stateId: string,
  ): Promise<FindAllByStateRo[]> {
    return this.cacheService.getCache<FindAllByStateRo[]>(
      `state_${stateId}`,
      () => this.cityService.findAllByState(stateId),
    );
  }
}
