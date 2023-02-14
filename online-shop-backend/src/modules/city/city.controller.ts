import { Controller, Get, Param } from '@nestjs/common';

import { FindAllCitiesByStateRo } from './boundary';
import { CityService } from './city.service';

@Controller('cities')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get('/:stateId')
  async findAllByState(
    @Param('stateId') stateId: string,
  ): Promise<FindAllCitiesByStateRo[]> {
    return this.cityService.findAllByState(stateId);
  }
}
