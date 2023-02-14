import { Injectable } from '@nestjs/common';

import { FindAllCitiesByStateRo } from './boundary';
import { CityRepository } from './repository';

@Injectable()
export class CityService {
  constructor(private readonly cityRepository: CityRepository) {}

  findAllByState(stateId: string): Promise<FindAllCitiesByStateRo[]> {
    return this.cityRepository.findAllByState(stateId);
  }
}
