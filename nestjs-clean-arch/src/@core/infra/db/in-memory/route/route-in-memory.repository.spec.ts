import {
  Route,
  routeObjectWithoutPoints,
  RouteProps,
} from '../../../../domain';
import { RouteInMemoryRepository } from './index';

export const createRoute = (routeProps: RouteProps): Route => {
  return Route.create(routeProps);
};

export const createRouteInMemoryRepository = (): RouteInMemoryRepository => {
  return new RouteInMemoryRepository();
};

describe('RouteInMemoryRepository', (): void => {
  it('should create a new route', async (): Promise<void> => {
    const repository: RouteInMemoryRepository = createRouteInMemoryRepository();

    const routeProps: RouteProps = routeObjectWithoutPoints();

    const route: Route = createRoute(routeProps);

    await repository.store(route);

    expect(repository.items).toHaveLength(1);
    expect(repository.items).toStrictEqual([route]);
  });
});
