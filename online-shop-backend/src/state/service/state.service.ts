import { Injectable } from '@nestjs/common';

import { FindAllStatesRo } from '../boundary';
import { StateRepository } from '../repository';

@Injectable()
export class StateService {
  constructor(private readonly stateRepository: StateRepository) {}

  findAll(): Promise<FindAllStatesRo[]> {
    return this.stateRepository.findAll();
  }
}
