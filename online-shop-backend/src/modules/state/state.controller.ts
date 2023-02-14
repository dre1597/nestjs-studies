import { Controller, Get } from '@nestjs/common';

import { FindAllStatesRo } from './boundary';
import { StateService } from './state.service';

@Controller('states')
export class StateController {
  constructor(private readonly service: StateService) {}

  @Get()
  findAll(): Promise<FindAllStatesRo[]> {
    return this.service.findAll();
  }
}