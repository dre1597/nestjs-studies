import { DataSource, Repository } from 'typeorm';
import {
  Route,
  routeObjectWithoutPoints,
  RouteProps,
} from '../../../../../domain';
import { RouteSchema } from '../schema';
import { RouteTypeOrmRepository } from './index';

const createDataSource = (): DataSource => {
  return new DataSource({
    type: 'sqlite',
    database: ':memory:',
    synchronize: true,
    entities: [RouteSchema],
  });
};

export const createRoute = (routeProps: RouteProps): Route => {
  return Route.create(routeProps);
};

export const createRouteTypeOrmRepository = (
  typeormRepository: Repository<Route>,
): RouteTypeOrmRepository => {
  return new RouteTypeOrmRepository(typeormRepository);
};

describe('RouteTypeOrmRepository', (): void => {
  it('should create a new route', async (): Promise<void> => {
    const dataSource = createDataSource();

    await dataSource.initialize();

    const typeormRepository = dataSource.getRepository(Route);

    const repository: RouteTypeOrmRepository =
      createRouteTypeOrmRepository(typeormRepository);

    const routeProps: RouteProps = routeObjectWithoutPoints();

    const route: Route = createRoute(routeProps);

    await repository.store(route);
    const routeFound = await typeormRepository.findOneBy({ id: route.id });

    expect(routeFound.toJSON()).toStrictEqual(route.toJSON());
  });
});
