import { Injectable } from '@nestjs/common';

import { FindAllByStateRo } from '../boundary';
import { CityRepository } from '../repository';

@Injectable()
export class CityService {
  constructor(private readonly cityRepository: CityRepository) {}

  findAllByState(stateId: string): Promise<FindAllByStateRo[]> {
    return this.cityRepository.findAllByState(stateId);
  }
}
