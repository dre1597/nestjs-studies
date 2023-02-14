import { Injectable } from '@nestjs/common';

import { CustomCacheService } from '../../shared/custom-cache/custom-cache.service';
import { FindAllCitiesByStateRo } from './boundary';
import { CityRepository } from './repository';

@Injectable()
export class CityService {
  constructor(
    private readonly cityRepository: CityRepository,
    private readonly cacheService: CustomCacheService,
  ) {}

  findAllByState(stateId: string): Promise<FindAllCitiesByStateRo[]> {
    return this.cacheService.getCache<FindAllCitiesByStateRo[]>(
      `state_${stateId}`,
      () => this.cityRepository.findAllByState(stateId),
    );
  }
}
