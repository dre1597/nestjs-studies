import { Route, RouteRepositoryInterface } from '../../../domain';

export class RouteInMemoryRepository implements RouteRepositoryInterface {
  public items: Route[] = [];

  public async store(route: Route): Promise<void> {
    this.items.push(route);
  }

  public async findAll(): Promise<Route[]> {
    return this.items;
  }
}
