import { Route } from './index';

export interface RouteRepositoryInterface {
  store(route: Route): Promise<void>;
  index(): Promise<Route[]>;
}
