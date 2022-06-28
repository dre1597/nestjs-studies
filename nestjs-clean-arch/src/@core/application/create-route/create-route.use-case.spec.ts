import { routeObjectWithoutPoints } from '../../domain';
import { RouteInMemoryRepository } from '../../infra';
import { CreateRouteOutput, CreateRouteUseCase } from './index';

export const createRepository = (): RouteInMemoryRepository => {
  return new RouteInMemoryRepository();
};

export const createRouteUseCase = (
  repository: RouteInMemoryRepository,
): CreateRouteUseCase => {
  return new CreateRouteUseCase(repository);
};

describe('CreateRouteUseCase', (): void => {
  it('should create a new route', async (): Promise<void> => {
    const repository: RouteInMemoryRepository = createRepository();
    const createUseCase: CreateRouteUseCase = createRouteUseCase(repository);

    const output: CreateRouteOutput = await createUseCase.execute(
      routeObjectWithoutPoints(),
    );

    expect(repository.items).toHaveLength(1);
    expect(output).toStrictEqual({
      ...routeObjectWithoutPoints(),
      points: [],
      id: repository.items[0].id,
    });
  });
});
