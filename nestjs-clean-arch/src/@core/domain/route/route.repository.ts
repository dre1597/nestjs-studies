import { Route } from './index';

export interface RouteRepositoryInterface {
  store(route: Route): Promise<void>;
  findAll(): Promise<Route[]>;
}
