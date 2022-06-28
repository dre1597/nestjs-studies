import { Route } from '../../../../../domain';
import { DataSource } from 'typeorm';
import { RouteSchema } from './route.schema';

const createDataSource = (): DataSource => {
  return new DataSource({
    type: 'sqlite',
    database: ':memory:',
    synchronize: true,
    entities: [RouteSchema],
  });
};

const createRouteWithoutPoints = (): Route => {
  return Route.create({
    title: 'any_title',
    startPosition: {
      lat: 0,
      lng: 0,
    },
    endPosition: {
      lat: 1,
      lng: 1,
    },
  });
};

describe('RouteSchema', (): void => {
  it('should create a route', async (): Promise<void> => {
    const dataSource = createDataSource();

    await dataSource.initialize();

    const route = createRouteWithoutPoints();

    const routeTypeOrmRepository = dataSource.getRepository(Route);

    await routeTypeOrmRepository.save(route);

    const routeFound = await routeTypeOrmRepository.findOneBy({ id: route.id });
    expect(routeFound).toBeDefined();
  });
});
