import { Controller, Get } from '@nestjs/common';

import { FindAllStatesRo } from '../boundary';
import { StateService } from '../service';

@Controller('state')
export class StateController {
  constructor(private readonly service: StateService) {}

  @Get()
  findAll(): Promise<FindAllStatesRo[]> {
    return this.service.findAll();
  }
}
