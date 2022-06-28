import { Repository } from 'typeorm';

import {
  Route,
  RouteRepositoryInterface,
} from '../../../../../../@core/domain';

export class RouteTypeOrmRepository implements RouteRepositoryInterface {
  constructor(private typeOrmRepository: Repository<Route>) {}

  async store(route: Route): Promise<void> {
    await this.typeOrmRepository.save(route);
  }

  index(): Promise<Route[]> {
    return this.typeOrmRepository.find();
  }
}
