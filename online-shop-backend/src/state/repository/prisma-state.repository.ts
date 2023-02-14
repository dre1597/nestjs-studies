import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../database';
import { FindAllStatesRo } from '../boundary';
import { StateRepository } from './state.repository';

@Injectable()
export class PrismaStateRepository implements StateRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findAll(): Promise<FindAllStatesRo[]> {
    return this.prismaService.state.findMany();
  }
}
