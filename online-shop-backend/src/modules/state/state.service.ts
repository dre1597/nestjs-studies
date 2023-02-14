import { Injectable } from '@nestjs/common';

import { CustomCacheService } from '../../shared/custom-cache/custom-cache.service';
import { FindAllStatesRo } from './boundary';
import { StateRepository } from './repository';

@Injectable()
export class StateService {
  constructor(
    private readonly stateRepository: StateRepository,
    private readonly cacheService: CustomCacheService,
  ) {}

  async findAll(): Promise<FindAllStatesRo[]> {
    return this.cacheService.getCache<FindAllStatesRo[]>('states', () =>
      this.stateRepository.findAll(),
    );
  }
}
